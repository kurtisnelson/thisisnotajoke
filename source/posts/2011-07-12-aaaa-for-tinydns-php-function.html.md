---
layout: post
title: 'AAAA for TinyDNS PHP Function'
tags:
  - aaaa
  - ipv6
  - php
  - tinydns

---

TinyDNS has no native support for IPv6 so adding AAAA records is odd. These 3 PHP functions will generate the records for you allowing you to integrate them into your DNS/DHCP management system and sync with TinyDNS.

<a href="https://gist.github.com/2880128">Available as a GitHub Gist</a>
<a href="https://gist.github.com/2831485">Python version courtesy of John Barham</a>

<code>
$ip = $_REQUEST['ip'];
$ttl = 86400;
if(isset($_REQUEST['ttl']))
$ttl = $_REQUEST['ttl'];
$host = $_REQUEST['host'];
$ip_a = ip6Array($ip);
echo ip6AAAA($ip_a, $host, $ttl)."
";
echo ip6rDNS($ip_a, $host, $ttl)."
";</code>

//Pad out and turn into array
function ip6Array($ip){
//Make sure we have 8 parts
while(count(explode(":",$ip)) &lt; 8){
$ip = str_replace("::",":::",$ip);
}
$ip_a = explode(":",$ip);
for($i=0;$i&lt;8;$i++){ 		$ip_a[$i]=str_pad($ip_a[$i],4,"0",STR_PAD_LEFT); 	} 	return $ip_a; } //Takes in a padded IPv6 array and returns a tinyDNS entry function ip6AAAA($ip,$host,$ttl=86400){ 	if(count($ip) != 8 || $host == ""){ 		return; 	} 	//Convert to octal 	$oct=array(); 	foreach($ip as $i){ 		//Convert the hex into two octal chunks because tinyDNS says so. 		$p1 = base_convert(substr($i,0,2), 16, 8); 		$p2 = base_convert(substr($i,2,2), 16, 8); 		$oct[] = "\\".str_pad($p1,3,"0",STR_PAD_LEFT); 		$oct[] = "\\".str_pad($p2,3,"0",STR_PAD_LEFT);	 	} 	 	//Assemble it 	$result=":".$host.":28:"; 	foreach($oct as $o) 		$result .= $o; 	return $result.":".$ttl; } //Takes in a padded IPv6 array and returns a tinyDNS entry function ip6rDNS($ip,$host,$ttl=86400){ 	//Now let's make the rDNS 	$result = "ip6.arpa"; 	foreach($ip as $i){ 		$result = substr($i,3,1).'.'.substr($i,2,1).'.'.substr($i,1,1).'.'.substr($i,0,1).'.'.$result; 	} 	return "^".$result.":".$host.":".$ttl; } ?&gt;
