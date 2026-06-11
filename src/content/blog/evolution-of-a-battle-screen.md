---
title: "Evolution of a Battle Screen"
date: 2019-01-02
author: "Irena Pereira"
excerpt: "DuoFun brought me on as a consultant to help bring some AAA know how to an indy mobile title. I’ve posted work from CPO before, but for those of you catching up, Chief Puzzle Officer was a Real Time Multiplayer Collectible Card Role Playing Game. Take a breath."
image: "/blog-images/evolution-of-a-battle-screen/PromoHeader.jpg"
imageAlt: "Evolution of a Battle Screen"
---

# The Puzzle Battle Screen

## Chief Puzzle Officer

DuoFun hired us as external consultants to help bring some AAA know how to an independent mobile title. Chief Puzzle Officer is a Real Time Multiplayer Collectible Card Role Playing Game, and this project arrived at our doorstep with a number of UX challenges. 

We had basic match-3 gameplay. (easy)

  1. We had multiplayer gameplay. 

  2. We had card-based gameplay. 

  3. We had All of the Above - in Real Time.

All of these factors were our mandate and problem to solve - without affecting game design too much. 

## Usability First

CPO was in an Alpha state with a rudimentarily functioning gameplay loop when we started work with the client. An illustrator had been at the helm of the UI as it stood, and the art style had a very strong skeuomorphic focus. 

The theme of the game was corporate espionage with an anime wackiness that allowed for a lot of thematic flexibility. There was no clear brand defined, nor was there a context for the art outside of a beige background that was supposed to refer to manilla folders and a female main character in a business suit holding a clipboard.

The team brainstormed classic questions to help frame our design journey ahead. 

![Evolution of a Battle Screen](/blog-images/evolution-of-a-battle-screen/Jenny_Normal.png)

_“What is the purpose of gameplay?”_

_“What am I supposed to pay attention to?”_

 _“How do I know, as a player, what exactly to do?”_

The only player choice was to match gems, the team knew that much. Everything else beyond that was overwhelming. 

Some of the UX challenges identified were: 

  1. **Undefined iconography -** _There were a ton of elements of different types that didn’t have intuitive meaning._

  2. **Unreadable Text -**_It was much too small for a mobile screen, compromising player readability._

![Evolution of a Battle Screen](/blog-images/evolution-of-a-battle-screen/image-asset.png)

![Evolution of a Battle Screen](/blog-images/evolution-of-a-battle-screen/HP-Damage-June-19-Animation.gif)

BEFORE

* * *

### planning & communication

* * *

It is always essential to establish trust and confidence between our team and the client. To achieve this, it was necessary for us to demonstrate the potential outcomes that arise from investing time and effort into thorough research and upfront planning for the user experience (UX) of a project. 

**Step 1: Tent Poles**

A tent pole is a design priority. Every project has 2-4 core goals or opportunities that help define it. Any less and the project can’t stand up on its own, and any more becomes confusing and compromises decision-making. 

By aligning all choices with these established tent poles, the design becomes detached from personal preferences and becomes an objective endeavor. As a result, decision-making becomes more streamlined and straightforward.

The following are tent poles we identified.

* * *

**MULTIPLAYER**

The number one priority was to provide multiplayer interactions through game messages and community tools.

**REAL TIME**

The real time nature of gameplay had to be emphasized, as it was a core differentiator for our particular project.

**PLAYER INVESTMENT**

The RPG aspect supported this through adding progression and the Card Game provided customization in a trendy wrapper. 

**MATCH 3**

This was a core gameplay pattern that our audience would be familiar with and therefore be relatable.

* * *

**Step 2: Brand Definition**

Moreover, there was a lack of defined art style, color palette, and typography that would lend the application a distinctive character or complement the exceptional character art.

Every project necessitates a clear definition of crucial elements such as typography, colors, and art style. This cohesive approach ensures that all components harmonize seamlessly, resulting in a unified product. A well-defined brand identity serves as the conductor of an orchestra, facilitating effective communication and maintaining consistency throughout the development process.

With these considerations in mind, armed with the existing design and an outdated game design document, we took the initiative to provide a new direction for the application:

![Evolution of a Battle Screen](/blog-images/evolution-of-a-battle-screen/Battle-Screen-CPO.jpg)

All of the elements were there and technical feasibility in Unity was considered - but it was put together in a cleaner and more legible package. 

Although the visual transformation may appear dramatic, the core game board remained unchanged. Certain modifications were implemented to enhance the user experience. Notably, the backgrounds were removed from both the North HUD and the South HUD, allowing for a cleaner and more focused interface. 

Emphasis was placed on vital messaging that directly influenced the progression of the match, facilitating player engagement. The game character art was also enhanced to reinforce the multiplayer aspect, creating a stronger connection between players and their respective in-game avatars. 

These adjustments aimed to improve the overall multiplayer experience while maintaining the integrity of the game board.

**Step 3: Messaging**

We encountered a recurring issue in our alpha build whereby the messaging system became desynchronised, resulting in players experiencing difficulties in discerning the sequence of events, what was happening what and who was saying what. This broke our tentpole of “ _Multiplayer_ ” so that wouldn’t do. We then generated a “ _beat map_ ” for each turn cycle so that the engineers could slot messaging into a timed sequence (since a computer can resolve data faster than a human can perceive it). 

![Evolution of a Battle Screen](/blog-images/evolution-of-a-battle-screen/Overall-Swap-Cycle3.png)

The beatmap helps us understand the life blood of a turn and realize when and where we might want messaging, where things can be sequenced, and where timing can be coordinated. 

What this allowed was a fully aware insight into how we wanted each turn cycle to go for the player and then we could also know when to break it for multiplayer messaging. 

**Step 4: Designing New Gems and Accounting for Accessibility**

The next challenge was to design new gems for the gameboard. One of the challenges for the older game board were that the gems were uniform in shape and relied upon a very opaque icon and color for distinguishing. This can be helpful for matching colors, but the accessibility factor was not accounted for. Colorblind players would have an excruciating time with the game. The hues also didn’t lead themselves for clear delineation either. 

> “A human mind can only truly hold onto seven pieces of information at once without too great an effort.”

— Irena, Team Lead

The main recommendation was for a traditional gem format (because thematically there wasn’t much that would line up with the Corporate Drama theme that would play as well) and maintaining classic gems helped reinforce familiarity with existing comps such as _Bejeweled_ , so that a more casual playerbase could connect with the gameplay easier.

Another crucial point of accessibility is to consider the limited capacity of the human mind to retain information. Studies indicate that individuals can typically hold only about seven pieces of information simultaneously, without significant effort. This phenomenon is exemplified by phone numbers typically consisting of approximately seven digits. It is worth noting that this number diminishes as individuals age. Therefore, when selecting the data elements to be tracked within a battle, it is crucial to bear in mind that the complexity of these elements is likely to surpass the limits of human cognitive capacity, except for highly skilled gamers. 

It is imperative to acknowledge this constraint since the target audience of the game would not primarily comprise elite gamers.

![Evolution of a Battle Screen](/blog-images/evolution-of-a-battle-screen/EnergyBarStage1.jpg)

Below are some later iterations and messaging adjustments that we incorporated at various points of development. 

![Evolution of a Battle Screen](/blog-images/evolution-of-a-battle-screen/Special_tiles_VeX.jpg)

We tried breaking out the player units & tried a new Card Gameplay Model

![Evolution of a Battle Screen](/blog-images/evolution-of-a-battle-screen/Special_moves_VeX.gif)

We needed clearer special move messaging that supports knowing who committed the act and sharing with other players that something happened out of their view.

**Note from Team Lead Irena:**

> “A gem I found buried on my harddrive was a video I took of the gameplay when we had a 6x2 grid of boards for PvE gameplay - the action is a bit frenetic but I particularly liked this battle iteration. Pardon the very casual voiceover - I couldn’t overwrite the audio because I wanted to save the music (which was particularly stellar for this title).”
