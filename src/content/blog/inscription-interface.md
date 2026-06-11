---
title: "Inscription Interface"
date: 2019-01-05
author: "Irena Pereira"
excerpt: "Inscription was an entirely new system - additional to the Talent System for customizing characters. It was one of the “Back of the Box” features of the expansion, and I took it upon myself to make it as unique and interesting as possible. The challenge I took on was to create an experience that was"
image: "/blog-images/inscription-interface/WotLK_Login_UI.jpg"
imageAlt: "Inscription Interface"
---

# **INSCRIPTION INTERFACE**

##  _World of Warcraft: Wrath of the Lich King_

* * *

![Inscription Interface](/blog-images/inscription-interface/WoWInscription-Doc.jpg)

GAME DESIGN DOCUMENTATION

During the allocation of tasks for the Lich King expansion, the prospect of working on Inscription emerged as an exceptionally thrilling opportunity. It was swiftly assigned to our team, alongside the responsibilities of developing the Barber Shop, Vehicles, and the Death Knight which were features to be introduced at a later stage.

Inscription presented an entirely novel system, supplementing the existing Talent System for character customization. It was highlighted as one of the notable features of the expansion, and our team aimed to ensure its uniqueness and captivation. The challenge was to create an immersive experience while adhering to the familiar interaction patterns cherished by our player base.

The design document came in rather rudimentary, with few assembled concept screens to go on, offering us limited guidance.

As often happened on our team, game design would present a general concept, and then it was a shared charge to turn it into a real interface - from the initial conceptualising all the way to production. 

**A SERIES OF UNFORTUNATE CONCEPTS**

![Inscription Interface](/blog-images/inscription-interface/InscriptionFrame-1.png)

We started with a standard spellbook copy.

![Inscription Interface](/blog-images/inscription-interface/image-asset.png)

Perhaps a more organic look,   
perhaps not!

![Inscription Interface](/blog-images/inscription-interface/image-asset.png)

Perhaps constellations? Not quite there yet!

One concept that intrigued us was the utilisation of summoning circles, a fundamental aspect of the spell art style specifically associated with Warlocks in our game. It presented an opportunity to expand the art style into a more significant aspect of the game and make a modest contribution to our lore. After all, any chance to leave a lasting impression was worth pursuing. Unfortunately, none of the summoning circles designed for the Warlock class proved to be a perfect fit. We decided to do some comp analyses on summoning circle designs in other forms of media. 

![Inscription Interface](/blog-images/inscription-interface/FullMetalAlchemist.jpg)

We referenced many examples of media on the market, both animated series and miscellaneous games - and we settled on referencing the summoning circle design from Fullmetal Alchemist which would serve as a direct inspiration.

### **INCORPORATING THE DESIGN**

![Inscription Interface](/blog-images/inscription-interface/InscriptionFrame_transmutation.png)

A mystical interface inspired by _Full Metal Alchemist_

We carefully drew out the familiar line formations in the circle and stripped it down to its skeleton - modifying it to suit our needs. 

## NEXT CHALLENGE: _SLOTS_

![Inscription Interface](/blog-images/inscription-interface/image-asset.png)

Subsequently, we encountered the challenge of distinguishing the slots themselves. We had to set them apart from the regular inventory slots while ensuring they remained interconnected with our itemisation system. It was important to note that within World of Warcraft, all equipped items adhered to a standardised format of a 46x46 icon with rounded corners, devoid of any circular elements.

![Inscription Interface](/blog-images/inscription-interface/GoldRing.png)

The custom gold ring for the glyph slots. 

Throughout refining the interface, it became apparent that the game design required an additional element to enhance its overall experience. Consequently, a decision was made to introduce a division within the Glyphs system, separating them into two categories: **_Major_** and **_Minor_** glyphs. Moreover, a progressive unlocking system was devised, activating slots at various character levels, serving as significant milestones in the gameplay journey.

The challenge of transforming a circle into a functional slot sparked an idea within the team – the notion of containing magic within a crystal ball, the most natural vessel for such enchantment. This was how we came up with the concept of bubbles!

Our artist took the opportunity to digitally paint a custom gold ring. With the introduction of Minor and Major Glyph slots, along with the unique appearance of the interface (although not directly in the game environment), a conundrum arose: How could we make it truly feel like a part of World of Warcraft? The answer was simple, in a distinctly WoW manner – to make it glow.

Our UI engineer ingeniously devised a script that infused the geometry with pulsating lights, which raced up and down the pathways of the active glyphs. In parallel, I created a comprehensive window animation, aiming to provide players with a satisfying and immersive experience as they "slotted" a Glyph. It needed to evoke a special sense of permanence, while surpassing the mundane act of rearranging spells on the action bar or moving items within the backpack. The experience had to carry weight, mystery, and evoke awe, all while maintaining optimal performance and frame rate for the user.

The following image is a Photoshop animation that provides an approximation of the in-game experience.

  

![Inscription Interface](/blog-images/inscription-interface/image-asset.gif)

## Post-Expansion Updates

While the Inscription UI is no longer in World of Warcraft, Cataclysm demonstrates an updated version of it here.
