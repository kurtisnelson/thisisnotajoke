---
layout: post
title: 'A Spam Dissection'
tags:
  - security
  - spam

---

Occasionally, I get an actually semi-well constructed piece of spam that is interesting to look at and see how they are hooking you into clicking their link, how they got that link, and how google can tell it is spam.

Here's the original email, in it's plaintext form, with headers intact.

<script src="https://gist.github.com/kurtisnelson/4497245.js?file=plaintext-copy.txt"></script>

Immediately, we notice our first clue that something is amiss:

    Received-SPF: softfail (google.com: domain of transitioning support_394@omaha.com does not designate 206.196.156.178 as permitted sender

The SPF lookup softfailed. What does this mean? The domain omaha.com has a list in DNS of computers that are allowed to actually deliver mail for the domain. When Google receives an email, they check who they got it from and the list of authorized senders, and see if they line up. (Think like if your postal carrier looked at the return address you wrote on something, and it not matching where they are picking it up) In this case, the address of the computer that sent this was not authorized. However, this does not automatically make something spam, as sometimes those lists are missing entries, or just not setup at all.

    From: "Priority Mail Service" <support_394@omaha.com>

Well here they just assumed you'd be in your mail client, see support, and stop reading. Or the back end of it would be cut off. But if they had wanted to, they could have just as easily put support@fedex.com in here, except that would be more likely to set off filters. (FedEx.com's SPF records definitely shouldn't allow omaha.com to send their email)

    To: <kurtisnelson@gmail.com>
    Bcc: <kssax19@q.com>,
      <kssrilalitha@yahoo.com>,
        <kstatham@hotmail.com>,
          <kurtisnider@gmail.com>

The first thing I notice here is that these emails are lexigraphically close. However, I'm not sure why I'm seeing BCC entries. Any readers have ideas on what is going on here?

As a whole, the body of the message is pretty sane. How could someone possibly scam you at your FedEx post office? It's not asking for your bank info, for you to transfer money, or anything. They just want to get you YOUR property!

But what's this in the footer? `© FedEx 1995-2012` Kind of strange to copyright "your package is waiting for you", especially backdating email copy to 1995.

There is a neat little thing they did here purposely. The get &amp; print receipt text is just text in the plain text version, no link. Some programs etc only scan the plain text copy for filters and such, as it's supposed to be the same content as the visually rich HTML version. Also, most people who are reading their email in plain text (me!) are not going to be the types a) to fall for spam and b) to have a system that can even technically fall victim to their shenanigans. So if Gmail hadn't caught this as spam for me, I probably would have read it, dismissed it as a technical error, and just deleted it.

Now let's look at the HTML version which contains some more formatting.

<script src="https://gist.github.com/kurtisnelson/4497245.js?file=html-copy.txt"></script>

The first thing I notice is all of the styling and colors are all inline. This avoids having to load anything from an external server, which could help the spammers be traced, and would provide a marker for spam filters to trigger on.

    &lt;title&gt;India rape suspects may be turning on each other&lt;/title&gt;

This is probably the most interesting part to me. The HTML title is completely ignored by most mail clients, so people won't see it. But the detection algorithms still will see it. In this case, it makes it look like a general news article, maybe sent to you by a friend. This text is also probably different for each batch of this spam email that gets sent out. It's noise meant to make identifying the email as a whole harder.

And finally we get to the purpose of the email, to get you to click on the link. In this case, I'm not posting it verbatim as I don't want to get this flagged as malicious, and I don't want to boost the google ranking of the spammers. But basically it is pointing to `http://SOME_REAL_DOMAIN/IAODSZWHQR.php?php=receipt` If you go to SOME&#95;REAL&#95;DOMAIN in your browser in this case, it is a legitimate business and a fully functioning real website. What this leads me to believe, coupled with it being a PHP extension, is that their server was somehow compromised, and the spammers are using it as a relay and delivery point in their scheme.

They've once again tacked on some recognizable, but meaningless junk, to make it look at a glance relevant. In this case, it is php=receipt. This is probably completely meaningless to the server that you end up at, as parameters after a ? in a URL are generally used by the server to add optional commands. (Try dropping a ?random=junk onto any URL and notice it doesn't do anything)

Unfortunately for this exercise, the link 404s as it has probably been discovered by the real website owners and deleted. Most likely though, it downloads a program or runs some form of exploit in an attempt to gain control of your computer. It also could deliver a real looking PDF of a receipt that actually exploits a vulnerability in Adobe Reader.

The choice of "IAODSZWHQR" for the filename is probably completely random, and just was meant to make it less likely for the website owner to stumble upon it and remove it.

Overall, this is quite a nicely crafted piece of spam. In fact, the first couple times I got it, it made it past Google into my inbox. It only started going to spam once Google learned to look for it, probably triggering off of "FedEx Receipt" in the subject but a totally meaningless from address.

So there you go. Now you have an idea of how spam messages are setup, and hopefully can spot them and phishing attempts easily in your own inbox.

