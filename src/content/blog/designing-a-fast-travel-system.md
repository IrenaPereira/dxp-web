---
title: "Designing a Fast Travel System"
date: 2021-10-13
author: "Irena Pereira"
excerpt: "Every open world MMO needs fast travel. WoW has gryphons, Everquest had Druid Circles and Wizard Spires, and Copernicus had Mana Streamers. This is a fairly simple interface that sat on a far more complex user experience."
image: "/blog-images/designing-a-fast-travel-system/1fullmap-logo.jpg"
imageAlt: "Designing a Fast Travel System"
---

# Fast Travel System

## Project Copernicus

In every expansive open-world MMO, the inclusion of fast travel is considered essential. Games like World of Warcraft utilized gryphons, Everquest featured Druid Circles and Wizard Spires, and within the realm of Copernicus, we envisioned a system known as Mana Streamers. This particular interface, although relatively simple, served as a gateway to a significantly more intricate user experience.

Mana Streamers represented the means by which players traversed vast distances throughout the game world, offering a user experience that aimed to capture the essence of a Disney "Soaring" style adventure. The design of the interface component prioritized minimalism, aiming to remain unobtrusive. The intention behind this approach was to evoke feelings of delight, wonder, and an insatiable curiosity to explore the captivating realm of Amalur. Despite its straightforward nature, the interface sought to create an enchanting and memorable experience for players.

### The world as we would launch

![Designing a Fast Travel System](/blog-images/designing-a-fast-travel-system/world_map_fast_travel.jpg)

The following interface was triggered when clicking on a Mana Streamer in world.

![Designing a Fast Travel System](/blog-images/designing-a-fast-travel-system/image-asset.png)

A basic window displaying the fast travel points available to the player.

![Designing a Fast Travel System](/blog-images/designing-a-fast-travel-system/image-asset.png)

Tooltips describe travel time, cost is reflected in the bottom of the window.

![Designing a Fast Travel System](/blog-images/designing-a-fast-travel-system/FastTravel_multistep.png)

We also accommodated for multi-stop travel through a different click mechanism

## Did you say multi-stop travel?

We had a primary goal of setting up an easy experience for traveling longer distances - no single leg stops with lots of clicking. We would compile the cost into a single charge and also give the player the chance to go make a sandwich.

![Designing a Fast Travel System](/blog-images/designing-a-fast-travel-system/image-asset.png)

## Make a Sandwich Mode

If a player was done with their sandwich and you changed your mind, you could always interrupt your travel mid-flight and the Mana Streamer would drop you off at the next logical stop.

* * *

### Learning

* * *

One main takeaway from this design task was that Long Distance Travel in game is an opportunity to allow a player to create aspirational goals for areas to explore in the world. It’s like a Disney ride through the adventure land created for their pleasure. However, this activity can be tedious after months and years of playing!

With that in mind, our team executed this with the intention to create the ability to make the time-investment less tedious or to create larger logical blocks of time so that it offers players an opportunity to re-enter the real world to tend to real life situations, things like answering nature’s call or getting an opportunity to hydrate!
