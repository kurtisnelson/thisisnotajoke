---
layout: post
title: 'PPP Java Implementation'
tags:
  - grc
  - java
  - ppp
  - security
  - security-now

---

UPDATED! See <a href="http://thisisnotajoke.com/blog/2007/11/15/pppv3/">this post</a>

Here is my java implementation of Steve Gibson's <a href="http://grc.com/ppp">PPPv2</a> built off of John Graham-Cumming's <a href="http://www.jgc.org/blog/2007/11/pppv2-in-java-and-c.html">Java Phone Client</a> Implementation. My class will handle all of the necessary functions to create a PPP card including performing the SHA-256 hash of a passcode to the 64 character sequence key.

This is a copy of my example driver for my class:
<div class="csharpcode">
<pre class="alt"><span class="lnum"> 1: </span>Scanner <span class="kwrd">in</span> = <span class="kwrd">new</span> Scanner(System.<span class="kwrd">in</span>);</pre>
</div>
<div class="csharpcode">
<pre><span class="lnum"> 2: </span>System.<span class="kwrd">out</span>.print(<span class="str">"Password: "</span>);</pre>
</div>
<div class="csharpcode">
<pre class="alt"><span class="lnum"> 3: </span>String password = <span class="kwrd">in</span>.next();</pre>
</div>
<div class="csharpcode">
<pre><span class="lnum"> 4: </span>System.<span class="kwrd">out</span>.print(<span class="str">"Card #: "</span>);</pre>
</div>
<div class="csharpcode">
<pre class="alt"><span class="lnum"> 5: </span><span class="kwrd">int</span> card = <span class="kwrd">in</span>.nextInt();</pre>
</div>
<div class="csharpcode">
<pre><span class="lnum"> 6: </span>System.<span class="kwrd">out</span>.print(<span class="str">"Column: "</span>);</pre>
</div>
<div class="csharpcode">
<pre class="alt"><span class="lnum"> 7: </span>String col = <span class="kwrd">in</span>.next();</pre>
</div>
<div class="csharpcode">
<pre><span class="lnum"> 8: </span>System.<span class="kwrd">out</span>.print(<span class="str">"Row: "</span>);</pre>
</div>
<div class="csharpcode">
<pre class="alt"><span class="lnum"> 9: </span><span class="kwrd">int</span> row = <span class="kwrd">in</span>.nextInt();</pre>
</div>
<div class="csharpcode">
<pre><span class="lnum"> 10: </span>String sequencekey = PPPengine.findSequenceKey(password);</pre>
</div>
<div class="csharpcode">
<pre class="alt"><span class="lnum"> 11: </span>PPPengine card1 = <span class="kwrd">new</span> PPPengine(sequencekey);</pre>
</div>
<div class="csharpcode">
<pre><span class="lnum"> 12: </span>System.<span class="kwrd">out</span>.println(<span class="str">"Your one-time code is "</span>+card1.makePasscode (card,col,row));</pre>
</div>
&lt;p&gt;.csharpcode, .csharpcode pre { 	font-size: small; 	color: black; 	font-family: consolas, "Courier New", courier, monospace; 	background-color: #ffffff; 	/*white-space: pre;*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt  { 	background-color: #f4f4f4; 	width: 100%; 	margin: 0em; } .csharpcode .lnum { color: #606060; }

<a href="http://thisisnotajoke.com/?dl=PPPjava.zip ">Download</a> the zip file including the source, the bytecode, the javadocs, a demonstration jar file, and a demonstration exe file made from the jar using jSmooth.<!-- ======== START OF CLASS DATA ======== -->
<h2>Class PPPengine Java Doc</h2>
<pre>java.lang.Object extended by <strong>PPPengine</strong></pre>
<hr /><dl> <dt>
<pre>public class <strong>PPPengine</strong>
<dt>extends java.lang.Object</dt></pre>
</dt> </dl>Main class for PPP password calculations.

<hr /><!-- ======== CONSTRUCTOR SUMMARY ======== --><a name="constructor_summary"><!-- --></a>
<table border="1" cellspacing="0" cellpadding="3" width="100%">
<tbody>
<tr class="TableHeadingColor" bgcolor="#ccccff">
<th colspan="2" align="left"><span style="font-size: x-small;"><strong>Constructor Summary</strong></span></th>
</tr>
<tr class="TableRowColor" bgcolor="#ffffff">
<td><code><strong><a href="PPPengine.html#PPPengine(java.lang.String)">PPPengine</a></strong>(java.lang.String sequencekey)</code>

Initiates the PPP card object.</td>
</tr>
</tbody></table>
<!-- ========== METHOD SUMMARY =========== --><a name="method_summary"><!-- --></a>
<table border="1" cellspacing="0" cellpadding="3" width="100%">
<tbody>
<tr class="TableHeadingColor" bgcolor="#ccccff">
<th colspan="2" align="left"><span style="font-size: x-small;"><strong>Method Summary</strong></span></th>
</tr>
<tr class="TableRowColor" bgcolor="#ffffff">
<td width="1%" align="right" valign="top"><span><code>int</code></span></td>
<td><code><strong><a href="PPPengine.html#columnToInt(java.lang.String)">columnToInt</a></strong>(java.lang.String s)</code>

Converts A-F to 0-6 for the PPPengine.</td>
</tr>
<tr class="TableRowColor" bgcolor="#ffffff">
<td width="1%" align="right" valign="top"><span><code>static java.lang.String</code></span></td>
<td><code><strong><a href="PPPengine.html#findSequenceKey(java.lang.String)">findSequenceKey</a></strong>(java.lang.String passphrase)</code>

Creates 64-bit sequence key from passphrase using SHA-256.</td>
</tr>
<tr class="TableRowColor" bgcolor="#ffffff">
<td width="1%" align="right" valign="top"><span><code>java.lang.String</code></span></td>
<td><code><strong><a href="PPPengine.html#makePasscode()">makePasscode</a></strong>()</code>

Generates the passcode using the Rijndael cypher.</td>
</tr>
<tr class="TableRowColor" bgcolor="#ffffff">
<td width="1%" align="right" valign="top"><span><code>java.lang.String</code></span></td>
<td><code><strong><a href="PPPengine.html#makePasscode(int, int, int)">makePasscode</a></strong>(int cardNumber, int column, int row)</code>

Generates and returns specified passcode.</td>
</tr>
<tr class="TableRowColor" bgcolor="#ffffff">
<td width="1%" align="right" valign="top"><span><code>java.lang.String</code></span></td>
<td><code><strong><a href="PPPengine.html#makePasscode(int, java.lang.String, int)">makePasscode</a></strong>(int cardNumber, java.lang.String column, int row)</code>

Generates and returns specified passcode.</td>
</tr>
</tbody></table>
<a name="methods_inherited_from_class_java.lang.Object"><!-- --></a>
<table border="1" cellspacing="0" cellpadding="3" width="100%">
<tbody>
<tr class="TableSubHeadingColor" bgcolor="#eeeeff">
<th align="left"><strong>Methods inherited from class java.lang.Object</strong></th>
</tr>
<tr class="TableRowColor" bgcolor="#ffffff">
<td><code>clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait</code></td>
</tr>
</tbody></table>
<!-- ========= CONSTRUCTOR DETAIL ======== --><a name="constructor_detail"><!-- --></a>
<table border="1" cellspacing="0" cellpadding="3" width="100%">
<tbody>
<tr class="TableHeadingColor" bgcolor="#ccccff">
<th align="left"><span style="font-size: x-small;"><strong>Constructor Detail</strong></span></th>
</tr>
</tbody></table>
<a name="PPPengine(java.lang.String)"><!-- --></a>
<h3>PPPengine</h3>
<pre>public <strong>PPPengine</strong>(java.lang.String sequencekey)</pre>
<dl> <dd>Initiates the PPP card object. Use this to create a virtual replacement for printed PPP cards. Takes sequence key only.

<dl> <dt><strong>Parameters:</strong></dt> <dd><code>sequencekey</code> - 64 Character key used to generate card</dd> </dl> </dd> </dl><!-- ============ METHOD DETAIL ========== --><a name="method_detail"><!-- --></a>
<table border="1" cellspacing="0" cellpadding="3" width="100%">
<tbody>
<tr class="TableHeadingColor" bgcolor="#ccccff">
<th align="left"><span style="font-size: x-small;"><strong>Method Detail</strong></span></th>
</tr>
</tbody></table>
<a name="columnToInt(java.lang.String)"><!-- --></a>
<h3>columnToInt</h3>
<pre>public int <strong>columnToInt</strong>(java.lang.String s)</pre>
<dl> <dd>Converts A-F to 0-6 for the PPPengine.

</dd> <dd> <dl> <dt><strong>Parameters:</strong></dt> <dd><code>s</code> - String A-F to be converted </dd> <dt><strong>Returns:</strong></dt> <dd>0-5 to be used as column </dd> <dt><strong>Throws:</strong> </dt> <dd><code>java.lang.IllegalArgumentException</code></dd> </dl> </dd> </dl> <hr /><a name="makePasscode()"><!-- --></a>
<h3>makePasscode</h3>
<pre>public java.lang.String <strong>makePasscode</strong>()</pre>
<dl> <dd>Generates the passcode using the Rinjndael cypher.

</dd> <dd> <dl> <dt><strong>Returns:</strong></dt> <dd>String of 4 characters that is the passcode. </dd> <dt><strong>Throws:</strong> </dt> <dd><code>java.lang.IllegalArgumentException</code></dd> <dt><strong>See Also:</strong></dt> <dd><code>Rinjndael</code></dd> </dl> </dd> </dl> <hr /><a name="makePasscode(int, java.lang.String, int)"><!-- --></a>
<h3>makePasscode</h3>
<pre>public java.lang.String <strong>makePasscode</strong>(int cardNumber, java.lang.String column, int row)</pre>
<dl> <dd>Generates and returns specified passcode. Takes String column.

</dd> <dd> <dl> <dt><strong>Parameters:</strong></dt> <dd><code>cardNumber</code> - Card number</dd> <dd><code>column</code> - String A-F specifing column</dd> <dd><code>row</code> - Int 1-10 specifing row</dd> </dl> </dd> </dl> <hr /><a name="makePasscode(int, int, int)"><!-- --></a>
<h3>makePasscode</h3>
<pre>public java.lang.String <strong>makePasscode</strong>(int cardNumber, int column, int row)</pre>
<dl> <dd>Generates and returns specified passcode. Takes integer column.

</dd> <dd> <dl> <dt><strong>Parameters:</strong></dt> <dd><code>cardNumber</code> - Card number</dd> <dd><code>column</code> - Int 1-6 specifing column</dd> <dd><code>row</code> - Int 1-10 specifing row</dd> </dl> </dd> </dl> <hr /><a name="findSequenceKey(java.lang.String)"><!-- --></a>
<h3>findSequenceKey</h3>
<pre>public static java.lang.String <strong>findSequenceKey</strong>(java.lang.String passphrase)</pre>
<dl> <dd>Creates 64-bit sequence key from passphrase using SHA-256.

</dd> <dd> <dl> <dt><strong>Parameters:</strong></dt> <dd><code>passphrase</code> - String passphrase to be converted </dd> <dt><strong>Returns:</strong></dt> <dd>String 64-bit sequence key</dd> </dl> </dd> </dl><!-- ========= END OF CLASS DATA ========= -->
