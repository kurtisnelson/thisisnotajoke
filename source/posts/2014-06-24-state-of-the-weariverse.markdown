---
title: The State of the Weariverse
date: 2014-06-24 11:10:22+00:00
tags:
---

Every day, it feels like there's some new fitness tracker with a slightly different set of sensors and an entirely new app/API/website/life-changing-experience/yet-another-account-to-set-up. And fitness trackers are only the most popular bastion of wearable computing. Once you start counting the many devices that used to be released as a USB peripheral and are now being updated to use Bluetooth Low Energy and a rechargeable battery, the list of wearables becomes even larger than the variety of Android devices available.

What is a Wearable?
-------------------

Though I would argue that we aren't extactly sure where the definition of the term begins and ends, a *wearable* can be loosely defined as a device that the user interacts fully with inside his or her personal space. Fitness trackers, smart glasses, smartphones, gesture detectors and smart watches all fit into this definition. With all of the many wearable devices available, the wearable ecosystem is becoming incredibly fragmented, on an order of magnitude more than we ever dealt with during the PC era. [Forbes](http://www.forbes.com/sites/rakeshsharma/2013/11/12/five-challenges-for-the-the-internet-of-things-ecosystem/) observed this trend towards fragmentation way back in November, since then many more devices have been released.

Defining wearable computing is not only a fun philosophical debate (i.e., if I strap a Furby to my head, is it then a wearable, real-time, kid-friendly interface for Furbish?), but is also pertinent to solving this fragmentation. We need a broad enough abstraction to cover all of these different devices that yet is specific enough to leave us within a realistic and implementable realm.

To add to the complication, wearables are just a small subset of the wider [Internet of Things](http://en.wikipedia.org/wiki/Internet_of_Things). We've got all of these devices strewn about our lives that are IP-addressible, or that can otherwise be controlled via web-calls to an API somewhere. My locks, lightbulbs, speakers, car, refrigerator and thermostats are all accessible through my phone right now—and those are just my personal Things.

How Do We Get Things Talking?
-----------------------------

So now that I've got all these "Things" everywhere in my life, and I'm wearing 12 different CPUs on my body while keeping everything charged and connected to the internet, it really bothers me that I can't actually use them together in unison without going to great lengths. For someone who isn't a developer, it's basically impossible to rig a single button on a smartphone to both turn off the lights and lock the door. And even with Apple's [HomeKit](https://developer.apple.com/homekit/), Android users are left in the dark, with little hope of a vendor-agnostic update to the protocol.

What we need is an open standard protocol: a way for a device to publish what it can do and who can trigger it, a way for a wearable to share events and commands it gleans from the environment without having to explicitly connect or pair devices. While bluetooth LE gets us part of the way there by making pairing a thing of the past and reading properties out of thin air, every device has its own unique set of properties, doing us no good beyond the Personal Area Network.

We need a new TCP over IP: The Things communication protocol: a standardized set of properties, a way of syncing properties over IP and PANs, and a way of replicating and modifying properties to the cloud and on device.

This protocol should have a large list of generic properties that could be implemented: properties such as brightness, hue, open/closed state, temperature, ready/not ready, capacity, humidity, power, GPS location, room placement and other physical properties—the list goes on and on. Things would not have to know about all the properties ever, just the ones the device chooses to implement. Properties beyond the basics would come about organically as new device manufacturers declare them.

Wearables, or other input devices, would declare their own set of properties (once again up to the creator) such as gestures, distance, counters and sensor readings. Devices should be responsible for publishing properties in some fashion, either locally over BTLE to be distributed by another device, or directly to a wider web service. Ideally this property directory would allow for easy creation of decentralized replicas, using a consensus algorithm that allows heavy users to set up an on-site directory server to minimize latency. Authentication would be the responsibility of the directories instead of the individual devices, including allowing the replication of a subset of properties.

Once we had this information in the form of properties freely flowing around the Weariverse, acting on them would become simple. A light switch on the wall could simply manipulate the on/off state of a certain group of properties, while a phone app could replicate and expose all properties of a set of lights. Apps could live in the cloud that handle event-driven automation, subscribing to relevant properties and firing off changes when events come in: for example, opening a front door could trigger turning on lights and music in the house.

What's Next for Wearables?
-------------

There are, of course, services like [If This Then That](https://ifttt.com/) and [OpenHAB](http://www.openhab.org/) that are very similar to what I have described, but using them requires a trade-off between configurability and ease of use. OpenHAB requires modifying a series of text files in various folders and installation as a server on a computer that stays on within your Local Area Network which is far beyond a typical user's skillset. IFTTT is incredibly simple to use and can be manipulated as drag and drop units in a web browser or a mobile app, but this interface severly limits conditionals, state, and multi-device actions. There is hope for the future: OpenHAB is an active open-source project, and a more general-user friendly configuration system is being built.

Just this week, Google has announced a ["Works with Nest"](http://techcrunch.com/2014/06/23/google-makes-its-nest-at-the-center-of-the-smart-home/) program for Thing manufacturers to integrate in with Nest devices, one example they give is the ability for a Whirlpool smart dryer to keep clothes from wrinkling when Nest sees that the house is empty. Unfortunately this approach is about as open as Apple's homekit and is not available for just anyone to implement.

All of these problems are going to have to be tackled in the near future if we want to bring wearable computing and the Internet of Things to the general consumer. I believe that just like the iPhone was the tipping point for the PDA, we are nearing the tipping point of the Weariverse. Soon you may be able to buy a piece of hardware that syncs your local Internet of Things to the greater internet seamlessly and without configuration, but for this device to exist interoperability needs to be worked out.

These projects are taking steps towards forming a cohesive Weariverse, and if you already have some of these devices in your life, I encourage you try them out.


