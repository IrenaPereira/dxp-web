---
title: "Crafting Rapid Prototype"
date: 2019-01-08
author: "Irena Pereira"
excerpt: "Near the final days of working on Copernicus, we were working very closely on designing and implementing Crafting. Design hadn’t finalized our crafting system yet, however our engineering team needed a faux interface that allowed them to fuse multiple items and display the result of the combination "
image: "/blog-images/crafting-rapid-prototype/CopernicusUI.jpg"
imageAlt: "Crafting Rapid Prototype"
---

# Crafting Rapid Prototype

## Project Copernicus

During the concluding phase of the Copernicus project, the team worked in close collaboration to conceive and implement the Crafting component. Although the design department had not yet finalized the crafting system, the Engineering team required a simulated interface that facilitated the fusion of multiple items and presented the resulting combination, serving as a foundation for the underlying architecture. Accordingly, the immediate priority was to develop a rapid prototype to enable initial progress.

Given our utilization of Scaleform within the Unreal Engine 3 framework, the task at hand involved constructing a Flash-based interface. Despite time constraints, a preliminary version was assembled, providing an opportunity to experiment with our window template.

While the design process was expedited and options reprioritised, while the MMO project never came to be, we still successfully created a window template for the alpha build of the game. 

* * *

### WIREFRAMES

* * *

![Crafting Rapid Prototype](/blog-images/crafting-rapid-prototype/Crafting.png)

![Crafting Rapid Prototype](/blog-images/crafting-rapid-prototype/Crafting_filtermenu.png)

TOOLTIP MENUES for the Filtering feature

This is a very by-the-book tradeskill interface with minor functionality improvements to help with efficiency in crafting workflow. 

We wanted to eliminate busy-work-steps endemic in MMO tradeskill workflow. 

It was also around this time that we were nailing down the back end to display items within the UI as we expanded our itemization system. It was fantastic getting an opportunity have a workflow of a ghost of an item, then having it detecting that item in the player’s inventory, and telling the player what predicate items they have and do not have. 

Throughout this period, our primary goal revolved around achieving functional effectiveness. We would like to extend this recognition to Mike Schoonmaker & Bill Colby for providing consultation on this task!

Some key improvements to classic MMO interfaces:

  1. We wanted a robust filtering tool for display of results. The key was to create as many shortcuts for players to find exactly what they needed.

  2. Players should get the means to easily perform their most desired action - either a single item, any number of items, or all that their crafting components will allow. 

One thing was certain, if the Copernicus crafting system was modelled after gold standard MMOs like EverQuest and WoW, then it only made sense to build efficiencies. It would be a great way to make longtime MMO gamers happy, and make crafting itself more accessible.

* * *

### MOCKUP

* * *

> “When it comes to data heavy games, less is more for interface art. ”

The next step for development was to design the actual screen and in the process explore a style for the game windows and other common elements like Icons, Headers, Window Titles, Progress Bars - all little details that needed to be defined that would feed into our style guide once we nailed down the look we wanted. This was an interim style from our initial simpler black-box approach and a classic fantasy skeuomorphic style. When it comes to data heavy games, less is more for interface art. Personal preference goes to a more typographic approach.

![Crafting Rapid Prototype](/blog-images/crafting-rapid-prototype/Crafting_01.jpg)

Elements that needed to be included to be able to test the Crafting system as it was being architected were:

**RECIPE BOOK**

  * Recipe Categories

  * Recipe

  * Sub Recipes

**RECIPE DETAILS**

  * Result Item Reference

  * Component Items

  * Components Items Presence in Inventory

**SKILLS LIST**

  * Character Skills

  * Character Skill XP

  * Character Skill XP Progress

* * *

### IMPLEMENTATION

* * *

This particular instance serves as one of the limited examples showcasing the in-game implementation of an interface at a substantial stage of progress within the Copernicus project. Although not entirely finalised and prone to occasional bugs, it is noteworthy that a rudimentary Crafting system had been successfully integrated prior to the unfortunate closure of the studio.

![Crafting Rapid Prototype](/blog-images/crafting-rapid-prototype/image-asset.png)

While this revelation may not provide an extensive glimpse into the intricate workings of the Crafting System itself (with more details forthcoming in the Skills & Factions specification), it was an incredible challenge that tested the team from top to toe. Although the feature was small in scale of the significance of the entire game experience, it remained a meaningful fragment of end-to-end implementation emerging from the aftermath of 38 Studios.
