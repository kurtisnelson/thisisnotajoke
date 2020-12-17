---
title: 'Setting up nginx + PHP-FPM for WordPress on CentOS/Red Hat EL 6'
tags:
  - wordpress
  - php
  - technology
---

Wordpress is widely used and there are many hosting services for it, but you can easily run it on a VPS with only 256MB of RAM if you use nginx and PHP-FPM instead of the more widely used apache plus mod_php. Unfortunately there are a few tweaks that must be made to make the user experience the same as if it were running on apache. Once everything is setup though, you will have a rock solid and speedy Wordpress install, and you don't have to worry about the security implications of common shared hosting.



##Setup Repositories
    yum install yum-priorities -y
    yum install http://rpms.famillecollet.com/enterprise/remi-release-6.rpm

Make sure you also have the <a href="http://mirror.us.leaseweb.net/epel/6/i386/repoview/epel-release.html">EPEL repository</a> if you don't already.

    yum install http://mirror.us.leaseweb.net/epel/6/i386/epel-release-6-7.noarch.rpm

To get the latest official Nginx packages, you should follow the instructions at the <a href="http://wiki.nginx.org/Install#Official_Red_Hat.2FCentOS_packages">Nginx wiki</a> which is to add a repo to `/etc/yum.repos.d/` with the following contents



        [nginx]
        name=nginx repo
        baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
        gpgcheck=0
        enabled=1

##Install packages
		yum install nginx
		yum --enablerepo=remi install php php-fpm php-gd php-mysql php-mbstring php-xml php-mcrypt
		chkconfig --level 345 nginx on
		chkconfig --level 345 php-fpm on
		service php-fpm start
		service nginx start

##Configure Nginx
At this point, you have a vanilla nginx install that can serve static content wonderfully. First, you need to tell nginx to hand off .php files to fastcgi for processing. To do this, you add a location block in 		/etc/nginx/conf.d/default.conf inside of the server block:

  		location ~ \.php$ {
            fastcgi_pass 127.0.0.1:9000;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            fastcgi_param PATH_INFO $fastcgi_script_name;
            include /etc/nginx/fastcgi_params;
      }

By default, nginx only looks for index.html and index.htm as index documents, so find the index line and append index.php to the list.

In addition, since you probably want to be able to use pretty permalinks in wordpress, also add a block to try sending any missing files to the wordpress php script:

  		# unless the request is for a valid file, send to bootstrap
        if (!-e $request_filename)
        {
            rewrite ^(.+)$ /index.php?q=$1 last;
        }

And of course, issue a `service nginx reload`. At this point, you should be able to drop a php file with a call to `phpinfo();` in `/usr/share/nginx/html/info.php` and should get all the fun version information.



##Configure PHP-FPM

Silly PHP-FPM, everyone doesn't use apache! By default in `/etc/php-fpm.d/www.conf`, the user and group are set to apache. Go search them out and set them both to nginx so PHP-FPM can see everything nginx can.

##Shoot SELinux

SELinux is nice and wonderful. If you are the NSA. Since you most likely are not, and since the default policies don't let php-fpm into your nginx files, if you have any issues issue a `setenforce 0` and see if it fixes it. If so, you probably want to disable SELinux at least until you get everything else working so you can tackle it and write policies in isolation.

##Wordpress

A stock wordpress install on nginx will try and use URLs of the format http://example.com/index.php/month/slug since it does not detect Apache mod\_rewrite. To fix this, you can drop the <a href="http://wordpress.org/extend/plugins/nginx-compatibility/">nginx Compatibility plugin</a> in and everything will work fine. I also recommend that you install Wordpress by checking out the latest tagged SVN version per <a href="http://codex.wordpress.org/Installing/Updating_WordPress_with_Subversion">installing/updating WordPress with Subversion</a> to make updating easier.

Wordpress unfortunately needs your web server to be able to write to most of the filesystem to update plugins and upload pictures, so you should issue `chown -R nginx:nginx` on the folder that Wordpress was installed into.

##Sources

  * <a href="http://www.lifelinux.com/how-to-install-nginx-and-php-fpm-on-centos-6-via-yum/">How To Install Nginx and PHP-FPM on CentOS 6 via Yum</a>

