---
layout: post
title: 'jPPPv3.0.1 Released'
tags:
  - creation
  - grc
  - java
  - ppp
  - security
  - security-now

---

<p>[NEW VERSION - <a title="http://code.google.com/p/javappp/" href="http://code.google.com/p/javappp/">jPPP on Google Code</a>]</p> <p>Updated version of my java implementation of <a href="http://grc.com/ppp" target="_blank">PPP</a>.</p> <ul> <li>Fixed output to match Steve Gibson's PPP.exe Version 3.0  <li>Changed internal workings to base calculation upon the total offset  <li>Allow operations by offset or card, column, row  <li>Cleaned up in general </li></ul> <p><a href="http://downloads.thisisnotajoke.com/PPPjava.zip">Download</a></p> <p><!--adsense--></p>
<!--more-->
 <p></p> <h2>Class PPPengine</h2><pre>java.lang.Object
  <b>PPPengine</b>
</pre>
<p>
<hr>

<p></p>
<dl>
<dt><pre>public class <b>PPPengine</b><dt>extends java.lang.Object</dt></pre></dt></dl><pre></pre>
<p>Main class for PPP password calculations.</p>
<p>
<hr>

<p></p>
<p><!-- ======== CONSTRUCTOR SUMMARY ======== --><a name="constructor_summary"><!-- --></a></p>
<table cellspacing="0" cellpadding="3" width="100%" summary="" border="1">
<tbody>
<tr class="TableHeadingColor" bgcolor="#ccccff">
<th align="left" colspan="2"><font size="+2"><b>Constructor Summary</b></font></th></tr>
<tr class="TableRowColor" bgcolor="white">
<td><code><b><a href="PPPengine.html#PPPengine(java.lang.String)">PPPengine</a></b>(java.lang.String sequenceKeyIn)</code> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Initiates the PPP card object.</td></tr>
<tr class="TableRowColor" bgcolor="white">
<td><code><b><a href="PPPengine.html#PPPengine(java.lang.String, int, int, int)">PPPengine</a></b>(java.lang.String sequenceKeyIn, int cardNumberIn, int columnIn, int rowIn)</code> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td></tr>
<tr class="TableRowColor" bgcolor="white">
<td><code><b><a href="PPPengine.html#PPPengine(java.lang.String, long)">PPPengine</a></b>(java.lang.String sequenceKeyIn, long offsetIn)</code> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td></tr></tbody></table>
<p>&nbsp; <!-- ========== METHOD SUMMARY =========== --><a name="method_summary"><!-- --></a></p>
<table cellspacing="0" cellpadding="3" width="100%" summary="" border="1">
<tbody>
<tr class="TableHeadingColor" bgcolor="#ccccff">
<th align="left" colspan="2"><font size="+2"><b>Method Summary</b></font></th></tr>
<tr class="TableRowColor" bgcolor="white">
<td valign="top" align="right" width="1%"><font size="-1"><code>void</code></font></td>
<td><code><b><a href="PPPengine.html#advanceOffset()">advanceOffset</a></b>()</code> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Advances the current object to the next passcode.</td></tr>
<tr class="TableRowColor" bgcolor="white">
<td valign="top" align="right" width="1%"><font size="-1"><code>static java.lang.String</code></font></td>
<td><code><b><a href="PPPengine.html#findSequenceKey(java.lang.String)">findSequenceKey</a></b>(java.lang.String passphrase)</code> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Creates 64-bit sequence key from passphrase using SHA-256.</td></tr>
<tr class="TableRowColor" bgcolor="white">
<td valign="top" align="right" width="1%"><font size="-1"><code>int[]</code></font></td>
<td><code><b><a href="PPPengine.html#getAddress()">getAddress</a></b>()</code> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Returns current card, column, and row in an array</td></tr>
<tr class="TableRowColor" bgcolor="white">
<td valign="top" align="right" width="1%"><font size="-1"><code>long</code></font></td>
<td><code><b><a href="PPPengine.html#getOffset()">getOffset</a></b>()</code> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Returns the passcode offset</td></tr>
<tr class="TableRowColor" bgcolor="white">
<td valign="top" align="right" width="1%"><font size="-1"><code>java.lang.String</code></font></td>
<td><code><b><a href="PPPengine.html#makePasscode()">makePasscode</a></b>()</code> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Generates the passcode for the current object's state.</td></tr>
<tr class="TableRowColor" bgcolor="white">
<td valign="top" align="right" width="1%"><font size="-1"><code>static void</code></font></td>
<td><code><b><a href="PPPengine.html#setAlphabet(java.lang.String)">setAlphabet</a></b>(java.lang.String alphabetIn)</code> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sets the character set used by the engine.</td></tr>
<tr class="TableRowColor" bgcolor="white">
<td valign="top" align="right" width="1%"><font size="-1"><code>static void</code></font></td>
<td><code><b><a href="PPPengine.html#setLength(int)">setLength</a></b>(int lengthIn)</code> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sets the passcode length used by the system.</td></tr>
<tr class="TableRowColor" bgcolor="white">
<td valign="top" align="right" width="1%"><font size="-1"><code>void</code></font></td>
<td><code><b><a href="PPPengine.html#setOffset(int, int, int)">setOffset</a></b>(int cardIn, int columnIn, int rowIn)</code> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Set the offset for the current instance using the code address</td></tr>
<tr class="TableRowColor" bgcolor="white">
<td valign="top" align="right" width="1%"><font size="-1"><code>void</code></font></td>
<td><code><b><a href="PPPengine.html#setOffset(long)">setOffset</a></b>(long offsetIn)</code> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Set the offset</td></tr></tbody></table>
<p>&nbsp;<a name="methods_inherited_from_class_java.lang.Object"><!-- --></a></p>
<table cellspacing="0" cellpadding="3" width="100%" summary="" border="1">
<tbody>
<tr class="TableSubHeadingColor" bgcolor="#eeeeff">
<th align="left"><b>Methods inherited from class java.lang.Object</b></th></tr>
<tr class="TableRowColor" bgcolor="white">
<td><code>clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait</code></td></tr></tbody></table>
<p>&nbsp;</p>
<p><!-- ========= CONSTRUCTOR DETAIL ======== --><a name="constructor_detail"><!-- --></a></p>
<table cellspacing="0" cellpadding="3" width="100%" summary="" border="1">
<tbody>
<tr class="TableHeadingColor" bgcolor="#ccccff">
<th align="left"><font size="+2"><b>Constructor Detail</b></font></th></tr></tbody></table>
<p><a name="PPPengine(java.lang.String)"><!-- --></a></p>
<h3>PPPengine</h3><pre>public <b>PPPengine</b>(java.lang.String sequenceKeyIn)</pre>
<dl>
<dd>Initiates the PPP card object. Use this to create a virtual replacement for a set printed PPP cards. 
<dl>
<dt><b>Parameters:</b> 
<dd><code>sequenceKeyIn</code> - 64 Character key used to generate card </dd></dl></dd></dl>
<p>
<hr>
<br><a name="PPPengine(java.lang.String, int, int, int)"><!-- --></a>
<p></p>
<h3>PPPengine</h3><pre>public <b>PPPengine</b>(java.lang.String sequenceKeyIn,
                 int cardNumberIn,
                 int columnIn,
                 int rowIn)</pre>
<dl>
<dl>
<dt><b>Parameters:</b> 
<dd><code>sequenceKeyIn</code> - 64 Character key used to generate card 
<dd><code>cardNumberIn</code> - Starting PPP card 
<dd><code>columnIn</code> - Starting column 
<dd><code>rowIn</code> - Starting row </dd></dl></dl>
<p>
<hr>
<br><a name="PPPengine(java.lang.String, long)"><!-- --></a>
<p></p>
<h3>PPPengine</h3><pre>public <b>PPPengine</b>(java.lang.String sequenceKeyIn,
                 long offsetIn)</pre>
<dl>
<dl>
<dt><b>Parameters:</b> 
<dd><code>offsetIn</code> - Long passcode offset 
<dd><code>sequenceKeyIn</code> - 64 Character key used to generate card </dd></dl></dl>
<p><!-- ============ METHOD DETAIL ========== --><a name="method_detail"><!-- --></a></p>
<table cellspacing="0" cellpadding="3" width="100%" summary="" border="1">
<tbody>
<tr class="TableHeadingColor" bgcolor="#ccccff">
<th align="left"><font size="+2"><b>Method Detail</b></font></th></tr></tbody></table>
<p><a name="findSequenceKey(java.lang.String)"><!-- --></a></p>
<h3>findSequenceKey</h3><pre>public static java.lang.String <b>findSequenceKey</b>(java.lang.String passphrase)</pre>
<dl>
<dd>Creates 64-bit sequence key from passphrase using SHA-256. 
<dd>
<dl>
<dt><b>Parameters:</b> 
<dd><code>passphrase</code> - String passphrase to be converted 
<dt><b>Returns:</b> 
<dd>String 64-bit sequence key </dd></dl></dd></dl>
<p>
<hr>
<br><a name="setAlphabet(java.lang.String)"><!-- --></a>
<p></p>
<h3>setAlphabet</h3><pre>public static void <b>setAlphabet</b>(java.lang.String alphabetIn)</pre>
<dl>
<dd>Sets the character set used by the engine. 
<dd>
<dl>
<dt><b>Parameters:</b> 
<dd><code>alphabetIn</code> - String of characters </dd></dl></dd></dl>
<p>
<hr>
<br><a name="setLength(int)"><!-- --></a>
<p></p>
<h3>setLength</h3><pre>public static void <b>setLength</b>(int lengthIn)</pre>
<dl>
<dd>Sets the passcode length used by the system. 
<dd>
<dl>
<dt><b>Parameters:</b> 
<dd><code>lengthIn</code> - Number of characters in final passcode </dd></dl></dd></dl>
<p>
<hr>
<br><a name="advanceOffset()"><!-- --></a>
<p></p>
<h3>advanceOffset</h3><pre>public void <b>advanceOffset</b>()</pre>
<dl>
<dd>Advances the current object to the next passcode. 
<dd>
<dl></dl></dd></dl>
<p>
<hr>
<br><a name="getOffset()"><!-- --></a>
<p></p>
<h3>getOffset</h3><pre>public long <b>getOffset</b>()</pre>
<dl>
<dd>Returns the passcode offset 
<dd>
<dl>
<dt><b>Returns:</b> 
<dd>passcode offset </dd></dl></dd></dl>
<p>
<hr>
<br><a name="setOffset(int, int, int)"><!-- --></a>
<p></p>
<h3>setOffset</h3><pre>public void <b>setOffset</b>(int cardIn,
                      int columnIn,
                      int rowIn)</pre>
<dl>
<dd>Set the offset for the current instance using the code address 
<dd>
<dl>
<dt><b>Parameters:</b> 
<dd><code>cardIn</code> - 
<dd><code>columnIn</code> - 
<dd><code>rowIn</code> - </dd></dl></dd></dl>
<p>
<hr>
<br><a name="setOffset(long)"><!-- --></a>
<p></p>
<h3>setOffset</h3><pre>public void <b>setOffset</b>(long offsetIn)</pre>
<dl>
<dd>Set the offset 
<dd>
<dl>
<dt><b>Parameters:</b> 
<dd><code>offsetIn</code> - Long </dd></dl></dd></dl>
<p>
<hr>
<br><a name="getAddress()"><!-- --></a>
<p></p>
<h3>getAddress</h3><pre>public int[] <b>getAddress</b>()</pre>
<dl>
<dd>Returns current card, column, and row in an array 
<dd>
<dl>
<dt><b>Returns:</b> 
<dd>address int[3] </dd></dl></dd></dl>
<p>
<hr>
<br><a name="makePasscode()"><!-- --></a>
<p></p>
<h3>makePasscode</h3><pre>public java.lang.String <b>makePasscode</b>()</pre>
<dl>
<dd>Generates the passcode for the current object's state. 
<dd>
<dl>
<dt><b>Returns:</b> 
<dd>String of length characters that is the passcode. 
<dt><b>Throws:</b> 
<dd><code>java.lang.IllegalArgumentException</code> </dd></dl></dd></dl>
