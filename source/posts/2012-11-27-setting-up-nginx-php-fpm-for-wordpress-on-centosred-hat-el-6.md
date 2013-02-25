---
layout: post
title: 'Setting up nginx + PHP-FPM for WordPress on CentOS/Red Hat EL 6'
tags:
  - wordpress

---

Wordpress is widely used and there are many hosting services for it, but you can easily run it on a VPS with only 256MB of RAM if you use nginx and PHP-FPM instead of the more widely used apache plus mod_php. Unfortunately there are a few tweaks that must be made to make the user experience the same as if it were running on apache. Once everything is setup though, you will have a rock solid and speedy Wordpress install, and you don't have to worry about the security implications of common shared hosting.



<h2>Setup Repositories</h2>

<code>yum install yum-priorities -y</code>



<code>yum install http://rpms.famillecollet.com/enterprise/remi-release-6.rpm</code>



Make sure you also have the <a href="http://mirror.us.leaseweb.net/epel/6/i386/repoview/epel-release.html">EPEL repository</a> if you don't already.



<code>yum install http://mirror.us.leaseweb.net/epel/6/i386/epel-release-6-7.noarch.rpm</code>



To get the latest official Nginx packages, you should follow the instructions at the <a href="http://wiki.nginx.org/Install#Official_Red_Hat.2FCentOS_packages">Nginx wiki</a> which is to add a repo to <code>/etc/yum.repos.d/</code> with the following contents



<pre><code>[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=0
enabled=1
</code></pre>

<h2>Install packages</h2>

<code>yum install nginx</code>



<code>yum --enablerepo=remi install php php-fpm php-gd php-mysql php-mbstring php-xml php-mcrypt</code>



<code>chkconfig --level 345 nginx on</code>



<code>chkconfig --level 345 php-fpm on</code>



<code>service php-fpm start</code>



<code>service nginx start</code>



<h2>Configure Nginx</h2>

At this point, you have a vanilla nginx install that can serve static content wonderfully. First, you need to tell nginx to hand off .php files to fastcgi for processing. To do this, you add a location block in <code>/etc/nginx/conf.d/default.conf</code> inside of the server block:



<pre><code>location ~ \.php$ {
            fastcgi_pass 127.0.0.1:9000;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            fastcgi_param PATH_INFO $fastcgi_script_name;
            include /etc/nginx/fastcgi_params;
}
</code></pre>

By default, nginx only looks for index.html and index.htm as index documents, so find the index line and append index.php to the list.



In addition, since you probably want to be able to use pretty permalinks in wordpress, also add a block to try sending any missing files to the wordpress php script:



<pre><code># unless the request is for a valid file, send to bootstrap
if (!-e $request_filename)
{
    rewrite ^(.+)$ /index.php?q=$1 last;
}
</code></pre>

And of course, issue a <code>service nginx reload</code>. At this point, you should be able to drop a php file with a call to <code>phpinfo();</code> in `/usr/share/nginx/html/info.php and should get all the fun version information.



<h2>Configure PHP-FPM</h2>

Silly PHP-FPM, everyone doesn't use apache! By default in <code>/etc/php-fpm.d/www.conf</code>, the user and group are set to apache. Go search them out and set them both to nginx so PHP-FPM can see everything nginx can.



<h2>Shoot SELinux</h2>

SELinux is nice and wonderful. If you are the NSA. Since you most likely are not, and since the default policies don't let php-fpm into your nginx files, if you have any issues issue a <code>setenforce 0</code> and see if it fixes it. If so, you probably want to disable SELinux at least until you get everything else working so you can tackle it and write policies in isolation.



<h2>Wordpress</h2>

A stock wordpress install on nginx will try and use URLs of the format http://example.com/index.php/month/slug since it does not detect Apache mod_rewrite. To fix this, you can drop the <a href="http://wordpress.org/extend/plugins/nginx-compatibility/">nginx Compatibility plugin</a> in and everything will work fine. I also recommend that you install Wordpress by checking out the latest tagged SVN version per <a href="http://codex.wordpress.org/Installing/Updating_WordPress_with_Subversion">installing/updating WordPress with Subversion</a> to make updating easier.



Wordpress unfortunately needs your web server to be able to write to most of the filesystem to update plugins and upload pictures, so you should issue <code>chown -R nginx:nginx</code> on the folder that Wordpress was installed into.



<h2>Sources:</h2>

<ul>
<li><a href="http://www.lifelinux.com/how-to-install-nginx-and-php-fpm-on-centos-6-via-yum/">How To Install Nginx and PHP-FPM on CentOS 6 via Yum</a></li>
</ul>

