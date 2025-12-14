---
name: Witch
hit_die: d6
hp_per_level: 4
weapon_prof: Simple
armor_prof: None
saving_throws: Con, Wis
bonus_skills: Thaumaturgy
max_powers_known: "(level) => level <= 3 ? level : 3 + Math.floor((level - 3) / 2)"
max_feats_known: (level) => level
---

# Witch
![Witch](</img/character/classes/witch.jpg>)


Attribute     | Value
---------     | -----
Hit Die       | d6
HP/level      | 4
Weapon Prof.  | Simple
Armor Prof.   | None
Saving Throws | Con, Wis
Bonus Skills  | Thaumaturgy


Level | Special Ability
----- | ---------------
1     | <span style="color: var(--feat)">1st feat</span>, <span style="color: var(--power)">1st spell</span>, <span style="color: var(--special)">Vitae</span>
2     | <span style="color: var(--feat)">2nd feat</span>, <span style="color: var(--power)">2nd spell</span> 
3     | <span style="color: var(--feat)">3rd feat</span>, <span style="color: var(--power)">3rd spell</span>
4     | <span style="color: var(--feat)">4th feat</span>
5     | <span style="color: var(--feat)">5th feat</span>, <span style="color: var(--power)">4th spell</span>
6     | <span style="color: var(--feat)">6th feat</span>
7     | <span style="color: var(--feat)">7th feat</span>, <span style="color: var(--power)">5th spell</span>
8     | <span style="color: var(--feat)">8th feat</span>
9     | <span style="color: var(--feat)">9th feat</span>, <span style="color: var(--power)">6th spell</span>
10    | <span style="color: var(--feat)">10th feat</span>
11    | <span style="color: var(--feat)">11th feat</span>, <span style="color: var(--power)">7th spell</span>
12    | <span style="color: var(--feat)">12th feat</span>
13    | <span style="color: var(--feat)">13th feat</span>, <span style="color: var(--power)">8th spell</span>
14    | <span style="color: var(--feat)">14th feat</span>
15    | <span style="color: var(--feat)">15th feat</span>, <span style="color: var(--power)">9th spell</span>
16    | <span style="color: var(--feat)">16th feat</span>
17    | <span style="color: var(--feat)">17th feat</span>, <span style="color: var(--power)">10th spell</span>
18    | <span style="color: var(--feat)">18th feat</span>
19    | <span style="color: var(--feat)">19th feat</span>, <span style="color: var(--power)">11th spell</span>
20    | <span style="color: var(--feat)">20th feat</span>



# Vitae

Vitae is the life energy that witchs manipulate to fuel their magic. It is drawn from various sources, depending on the type of Thaumaturgy being practiced. Each school of Thaumaturgy has a cantrip which can be used to gain Vitae.

You have zero Vitae by default, and must gain it through your powers. You can spend Vitae to fuel more powerful effects, or to enhance your spells.

Your maximum Vitae is equal to your witch rank + your spellcasting ability modifier.





# Spells


## Antimagic

Vitae: you can use Absorb Magic to absorb 1 Vitae from a spell, which may dispel it.

Rank | Power          | Description
-----|----------------|------------
0    | [Absorb Magic](../powers/witch/absorb-magic)   | Absorb energy from a touched spell, weakening or dispelling it
1   | [Spellsteal](../powers/witch/spellsteal)     | Take control of an active spell, or a spell foe can cast
2   | [Spell Immunity](../powers/witch/spell-immunity)   | Subject gains immunity to a single spell, or possibly more
3    | [Antimagic Zone](../powers/witch/antimagic-zone) | Area nullifies all magic
4    | [Arointment](../powers/witch/arointment)    | Create an area where certain magic cannot function
5    | [Disjunction](../powers/witch/disjunction)    | All magical effects in area are dispelled; magic items become mundane for a time


## Blood
Rank | Power          | Description
-----|----------------|------------
0    | [Let Blood](../powers/witch/let-blood)        | Let your own blood, then use it for various purposes
1    | [Transfusion](../powers/witch/transfusion)    |
2    | [Bloodborne](../powers/witch/bloodborne)     | Infect a target with a bloodborne pathogen that hinders them in various ways
3    | [Grudge](../powers/witch/grudge)        | Cause damage to a target based on the harm they have caused
4    | [Exsanguinate](../powers/witch/exsanguinate)   | Drain all the blood from a creature, max out your Vitae
5    | Bloodline Curse | Affect subject...and everyone related to them

Ideas:
- Blood Nova (target can be friendly or enemy, but only harms others)


## Death

Vitae: you can use Kiss of Death to gain 1 Vitae from any living creature.

Rank | Power              | Description
-----|--------------------|------------
0    | [Kiss of Death](../powers/witch/kiss-of-death)      | Touch delivers necrotic damage which can give you temp HP or enhance your attacks
1    | [Touch of the Grave](../powers/witch/touch-of-the-grave) | Use the touch of various undead creatures to drain strength, constitution, etc
2    | [Hasten Death](../powers/witch/hasten-death)       | Causes any ongoing harmful effect to "tick" multiple times instantly
3    | [Finger of Death](../powers/witch/finger-of-death)    | Instant death
3    | [Defile](../powers/witch/defile) | Drain all vitality from an area; use that vitality for various purposes.


## Eyes
Rank | Power          | Description
-----|----------------|------------
0    | [Evil Eye](../powers/witch/evil-eye)       | Curse a target, gain Vitae 
1    | [Veil](../powers/witch/veil)           | Convince the minds of onlookers that you are not there, or are someone else
2    | [Mystic Eyes](../powers/witch/mystic-eyes)    | See through illusions, see the unseen, see the future
3    | [All-Seeing Eye](../powers/witch/hallucination)  | Manifest a floating eye that you can see and cast spells through
4    | [Seven Eyes](../powers/witch/seven-eyes)     | You are surrounded by seven floating eyes that can see in all directions and manifest various powers
5    | Total Perspective | Subjects gain a momentary glimpse of the entire universe and the nature of divinity; most do not survive


## Mirror
Vitae: you can use Magic Mirror to gain Vitae by trapping a portion of a creature's soul when they look into it.

Rank | Power          | Description
-----|----------------|------------
0    | [Magic Mirror](../powers/witch/magic-mirror)     | Make mundane mirrors magical, to various effects
1    | [Mirror Image](../powers/witch/mirror-image)   | Create illusory duplicates of yourself or others
2    | [Reflection](../powers/witch/reflection)     | Create a shield that reflects attacks and spells onto their originators
3    | [Mirrorwalk](../powers/witch/mirrorwalk)      | Step through a mirror to travel to the mirror dimension
4    | [Phantom Zone](../powers/witch/phantom-zone)     | Banish a target to the mirror dimension



## Soul

Vitae: you can use Drain Soul on a creature with a soul to gain 1 Vitae.

Rank | Power          | Description
-----|----------------|------------
0    | [Drain Soul](../powers/witch/drain-soul)     | Enervate enemy and gain a soul gem, which can grant you access to their identity and abilities
1    | [Soulgaze](../powers/witch/soulgaze)       | Lock eyes with target and learn their secrets--but they learn yours, too
2    | Magic Jar      | You detach your soul from your body, which becomes helpless. You can possess creatures and objects, perceiving from their point of view, and attempt to control them from within. At higher rank, you can force the soul out of a target without leaving your body.
3    | Demi           | You create an evil clone of the subject.


## Transmutation

Vitae: you can use Transform Object to destroy a crafted object. It must be something requiring skill to create, and at least one day of work. This grants you 1 Vitae.

At higher ranks, you can use Transform Object to destroy more valuable objects to gain more Vitae.

Rank | Power             | Description
-----|-------------------|------------
0    | [Transform Object](../powers/witch/transform-object)     | Change properties of an object: size, hardness, form, etc
1    | [Animate Object](../powers/witch/animate-object)    | Object becomes animated and acts as you direct
2    | [Polymorph](#)              | Change a creature's physical body
3    | [Objectify](../powers/witch/objectify)              | Creature becomes an inanimate object (reversible)
4    | [Eidolon](#)                | Create a living construct from inanimate materials, which acts as your servant
5    | [Transubstantiation](#)        | Change one material into another; turn lead to gold; turn your enemies to liquid


## Undeath

Vitae: you can use Control Undead to take control of a mindless undead creature. Once under your control, you can snuff out its animating force to gain 1 Vitae. More powerful undead yield more Vitae.

Rank | Power              | Description
-----|--------------------|------------
0    | [Control Undead](../powers/witch/control-undead)   | Control a mindless undead creature
1    | [Reanimate](../powers/witch/reanimate)          | Corpse rises as a simple undead under your control
2    | [Necrosis](../powers/witch/necrosis)           | Undead appendage grows from subject, using its abilities as you direct
3    | [Corpse Explosion](../powers/witch/corpse-explosion)   | Corpse or undead creature explodes, potentially exploding other targets
4    | [Memento Mori](#)          | Subject dies and immediately becomes an undead under your control

Ideas:
- Walking Dead: you become undead, gaining undead traits and powers, for a while


## Voice
Vitae: you can use Curse to gain 1 Vitae from a creature that can hear you.

Rank | Power          | Description
-----|----------------|------------
0    | [Curse](../powers/witch/curse)          | Curse an enemy with a variety of effects
1    | [Steal Voice](../powers/witch/steal-voice)     | Take control of a creature's voice, or steal it for yourself
2    | [The Word](../powers/witch/the-word)        | Compel a creature to obey your spoken commands
3    | [Vox Populi](../powers/witch/vox-populi)      | Control what creatures may say


## Winter
Rank | Power          | Description
-----|----------------|------------
0    | [Chill Touch](../powers/witch/chill-touch)          | Draw Vitae from the environment or a creature, make constructs of ice
1    | [Winds of Winter](../powers/witch/winds-of-winter)   | Create bitter winds that blow snow, or thin the air to near vacuum
2    | [Ice Storm](../powers/witch/ice-storm) | Summon a storm of ice and sleet that damages and hinders enemies
3    | [Frost Bomb](../powers/witch/frost-bomb) | Orb of energy absorbs all heat in an area, causing cold effects and eventually exploding in a burst of ice
4    | [Deep Freeze](#) | Freeze a creature solid, ending their life



## Ritual
- Create Phylactery
- Evoke Flame
- Death and Rebirth (rk2)
- Create Hearthstone (rk3)
- Create Greater Phylactery (rk3)


# Feats

Each level, you may select a feat from the list below. There are also feats specific to Witch spells, noted in their descriptions.

## Felicity

The Seven Wonders of Witchcraft.

### Clarity
- [Weavesight](../feats/class/witch/weavesight): You can detect magical auras precisely and accurately on sight, without spending multiple rounds concentration.
- [Anti-magic Specialist](../feats/class/witch/anti-magic-specialist): You have advantage to dispel and counterspell checks.
- [Scan](../feats/class/witch/scan): When using *Sense Magic* or *Weavesight*, you can detect which spells a given creature has available, and how many charges/Mana/etc, as a swift action.

### Rapture
- [Re-Vitae](../feats/class/witch/re-vitae): Whenever you spend Vitae, you heal yourself for medium damage per Vitae expended.
-

### Sympathy
- [Sympathetic Magic](../feats/class/witch/sympathetic-magic): Whenever you encounter a hostile spell that can distinguish between friend and foe, you can roll a proficient Charisma skill check against the DC to convince the spell you are its friend. The result of this check remains true for the duration of that particular instance of the spell.
- [Spell Stowaway](../feats/class/witch/spell-stowaway): Whenever an enemy within range casts a beneficial spell, you may, as a reaction, manifest a copy of their spell affecting you or an ally.
- [Vital Shield](../feats/class/witch/vital-shield): Whenever you are harmed by a spell, you can expend 1 Vitae to reduce the damage by half, or to gain advantage to the saving throw.


### Revelation
- [Foresight](../feats/class/witch/foresight): once/day, react to anything
- [Prognostication](../feats/class/witch/prognostication): at-will, swift, ranged; you predict the target's next action. When they take it, whatever it is, you may spend a reaction to react to it.
-

### Transference
- [Manifest Phylactery](../feats/class/witch/manifest-phylactery): at-will, swift, requires a sympathetic component; you manifest a temporary phylactery of the target, lasting until a short rest. You can convert this to a permanent phylactery if you conduct the normal ritual immediately after combat.
- [Spell Channel](../feats/class/witch/spell-channel): if you inflict harm with a spell, natural attack, or a weapon you're currently wielding, you can use that as a channel to puncture that opponent's defenses. This can be used to target them with a spell regardless of line of sight or effect at will. If expended, it can grant advantage to one spell or attack roll against them, as well as increasing damage by 50%.

### Verity
- [Mystic Eyes](../feats/class/witch/mystic-eyes): at will, you can see through glamours, figments, and invisibility spells.


### Entropy
- [Bad Luck](../feats/class/witch/bad-luck): Shit happens. It's a well-known axiom of witchcraft. But with careful study and perception, you can learn not to be in front of the fan when it happens. When you roll a d20, and the result is at or below your Entropy rank, you can "store" the result, rolling again. When you have a stored result, you can impose it upon any other PC or NPC whenever they roll a d20, expending it and forcing them to take your result.
- [Death and Decay](../feats/class/witch/death-and-decay): All things decay. This is something you've accepted. But you don't have to dive into the grave on purpose. You gain Resist 50% (necrotic), and advantage to saves against death magic and ability damage/drain.
- [Death Becomes You](../feats/class/witch/death-becomes-you): The undead are the antithesis of the living, and naturally hate, fear, and long to feed upon them. You understand that, and sympathize with them, and, to an extent, they respect that. Mindless undead become indifferent to you unless actively commanded to attack. Your own undead servants gain inspiration once per encounter.


## Blood Magic
Feat            | Description
--------------|------------
[Talisman of Vitality](../feats/class/witch/talisman-of-vitality) | Whenever you heal for any reason, you may exceed your max HP, gaining the excess as temporary Hit Points, which expire at the end of the encounter.
[Talisman of Blood](../feats/class/witch/talisman-of-blood) | When you are missing Hit Points, you can add your HP debt to the damage of any attack or spell you inflict, to a maximum of 100% of the attack's original damage. This does not change your current HP.
[Frozen Blood](../feats/class/witch/frozen-blood) | When you drop to 0 HP, you have the option to immediately begin concentrating on an effect which prevents you from dying. While active, you do not need to roll death saves, and you can act normally. Any damage you suffer should be tracked, because if you stop concentrating while you are in negative HP, you will begin to die as normal. If you heal above 0 HP, the effect ends.

## Winter
Feat   | Description
-------|------------
[Icewalker](../feats/class/witch/icewalker) | You can walk on water by freezing it beneath your feet. You can also move across ice and snow without penalty. You may imbue this ability to your mount, or to allies within 5 squares while concentrating.

## Transmutation
Feat            | Description
--------------|------------
[Defensive Transmutation](../feats/class/witch/defensive-transmutation) | You gain a reaction to an incoming projectile attack against you or an ally within range. At the cost of 1 Vitae, you can transmute the projectile into a harmless substance (bubbles, dust, etc) just before it hits you.
[Ironguard](../feats/class/witch/ironguard) | You can use [Objectify](../powers/witch/objectify) on yourself as a swift action, turning your flesh into an amorphous, gelatin-like substance that looks and functions the same, but you gain Resist 90% to slashing and piercing damage.

## Familiar
Feat            | Description
--------------|------------
[Familiar](../feats/class/witch/familiar) | Construct or minor animal becomes a magical servant.

## Necromancy
Feat            | Description
--------------|------------
[Create Undead](../feats/class/witch/create-undead) | Using a corpse and components of non-trivial cost, you can make permanent undead servants.
[Death Pact](../feats/class/witch/death-pact) | As an immediate action, you can steal HP from an undead that you control.
[Walking Dead](../feats/class/witch/walking-dead) | You gain corporeal undead traits.

## Hedgecraft
Tool          | Description
--------------|------------
[Deathball](../feats/class/witch/deathball) | Craftable vessel allowing you to store an undead minion in stasis until needed.
[Soul Prison](../feats/class/witch/soul-prison) | You can create special Soul Gems to house the soul shards of Drain Soul. If a creature dies while you possess their soul shard in such a gem, you trap their soul in the gem.

## Soul
Tool          | Description
--------------|------------
[Reactive Absorb](../feats/class/witch/reactive-absorb) | You can use [Absorb Magic](../powers/witch/absorb-magic) as a reaction against any spell targeting you.


