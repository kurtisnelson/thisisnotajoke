---
title: Stop Stuffing The Web Into Mobile
date: 2015-08-08 13:41 EDT
tags: android, mobile
---

I keep having people ask me questions about all the various SDKs-of-the-day that allow someone to write a mobile app without having to learn a mobile SDK. My answer hasn’t changed and will not change any time soon: If you want to write a mobile app, you must learn a mobile platform. PhoneGap, Cordova, Titanium, Ionic, etc are all poor shims that are only appropriate for prototyping. Anything you plan on shipping to users on the store needs to have native code or even the least technical users will notice.

- - -

> But I already know JavaScript/Angular and don’t want to have to learn a new toolchain for mobile!

The phone in my pocket is an amazing piece of technology. It could control a spaceship to the moon, but instead I use it for looking at cat GIFs. No matter what purpose I am using my phone for right now I still expect to get a full day’s use out of the battery, it to respect my limited data plan, and for it to not drop any precious GIF frames. This is the polar opposite of the web where I’m normally on a essentially endless laptop battery, using wifi, and backed by a full GPU. Why would anyone expect technology architected for one would be appropriate to run on the other? So why do developers expect to not have to use a different toolchain to write apps for a different technology? As developers, we cannot allow our skillset to stagnate. Imagine if you were still using the same frameworks and languages that you first started programming on; many of us would be still writing VisualBasic or dealing with Java’s Swing.

I know this might be hard for some of you to hear: being a great software developer means using the best tool for the job not being able to use one tool for every project. Yes, learning can be painful and yes it might take extra time to get an app out onto the store, but isn’t it worth it to make an enjoyable end product? If a carpenter only used one type of cut for every project they probably could still build chairs and cabinets but it would be painfully obvious that they only knew how to make one type of cut. Carpentry doesn’t change at the same pace as software development but both are crafts that require the craftsman to pick the right tool for the job.

Use your JavaScript/Angular knowledge to your advantage, MVC is MVC, loops are loops, and code smells the same no matter where it is running.

> My users are non-technical/don’t care/just want it to work!

My sister is not a technical person at all yet all the time complains all the time to me about certain apps behaving poorly on her phone. She also has had entire phones lock up and blamed Android when it really was some poorly built app holding an inappropriate wake lock.

If I open up an app on my 1-month old flagship device and immediately notice frames dropping when paging through your sign up flow, I wonder how people in other parts of the world running on a low-end 2 year old device manage to open your app at all. Abstractions have a cost and in the case of writing everything in a webview, it’s about as painful as taking out a payday loan.

And don’t get me started on strange back button behavior- Android users expect back to do something very different than iOS users.

> I need to launch on all mobile platforms yesterday!

No, you don’t. Unless you have the resources of a Google working on the product design, you don’t even know what your users actually want until something has been shipped and been used by customers. Pick one of the two major platforms, succeed there, and then launching elsewhere will be a cakewalk in comparison. Have the same developers do the second app too, they’ll have figured out most of the hard problems the first time around. If you still think you need to launch on iOS and Android simultaniously, make sure that one platform doesn’t just get the opposite’s design shoe-horned in. I notice after about 10 seconds of using an app when Johnny Ive has been shoved onto my Nexus 6.

> What about react native?

React native is a special snowflake. Having been influenced by web components, it is very possible to have two mostly native apps sharing common UI widgets. The fact that React pretty much requires the developer to know how native layouts work also helps. If you’re feeling adventurous, go for react but remember that all of your model layer is probably going to end up being native code anyways.

- - -

At the end of the day, there is nothing I can do to save people from wasting money and development time on inappropriate technologies. Just know that nearly all of the time, PhoneGap, Ionic, Cordova and friends are not appropriate to use for building a good mobile app. Often times these apps have to be scrapped and built from the ground up natively after just a few months.
