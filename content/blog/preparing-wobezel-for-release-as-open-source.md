---
title: Preparing WOBezel for release as open source
tags: cocoa open.source
---

I'm currently working on preparing a sizeable amount of source code for release as [open source](/wiki/open_source) and one of the first projects to be published is likely to be [WOBezel](/wiki/WOBezel).

It's a framework that I extracted out of a larger framework, [WOBase](/wiki/WOBase), around 2004. It basically handled all things related to bezels. "Bezels" was the term I used for things like the semi-transparent notification bezels you see when you press the volume keys on your Mac.

WOBezel also provided generalized [APIs](/wiki/APIs) for things like doing fade-ins and fade-outs, splash windows, about boxes, and "HUD" windows.

It turns out that in [Leopard](/wiki/Leopard), [Apple](/wiki/Apple) made the "HUD" interface style available to all via a public API, so much of the stuff in WOBezel became redundant. Over the last few days I've been going through the framework ripping out all the reinvented wheels and leaving only the necessary functionality: notification bezels, splash windows and about boxes. The generalized fading API is still there, but it's implementation has been rewritten from scratch to use Core Animation.