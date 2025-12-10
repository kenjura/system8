---
name: Rogue
hit_die: d8
hp_per_level: 4
weapon_prof: Dex-based martial weapons
armor_prof: Light
saving_throws: Dex, Int
---

# Rogue

![Rogue](</img/character/classes/rogue.jpg>)


Attribute     | Value
---------     | -----
Hit Die       | d8
HP/level      | 4
Weapon Prof.  | Dex-based martial weapons
Armor Prof.   | Light
Saving Throws | Dex, Int

Level | Special Ability
----- | ---------------
1     | Sneak Attack, Maneuvers, Talents
2     | 
3     | 
4     | 
5     | 
6     | 
7     | 
8     | 
9     | 
10    | 
11    | 
12    | 
13    | 
14    | 
15    | 
16    | 
17    | 
18    | 
19    | 
20    | 


# Sneak Attack
When you attack with a Dex-based weapon, and your attack has advantage, you inflict bonus damage equal to the weapon's critical bonus damage.

Examples:
- A rank 1 rogue has Dex +2, and is attacking with a light-damage weapon with a critical power of 100%.
  - On a normal hit, they inflict 1d4+1 damage.
  - On a sneak attack or critical hit, they inflict 1d4+1 + 100% damage (or 1d4+1 times 2)
  - On a critical sneak attack, they inflict 1d4+1 + 200%, or 1d4+1 times 3
- A rank 2 rogue with Dex +3 attacks with a medium-damage weapon with a critical power of 100%
  - On a normal hit, they inflict 2d8+3 damage.
  - On a sneak attack or critical hit, they inflict 2d8+3 + 100% damage, or 2d8+3 times 2.
  - On a critical sneak attack, they inflict 2d8+3 + 200% damage, or 2d8+3 times 3.
- A rank 3 rogue with Dex +4 attacks with a medim-damage weapon with a critical power of 150%.
  - On a normal hit, they inflict 3d8+4 damage.
  - On a critical or sneak attack hit, they inflict 3d8+4 + 150%, or 3d8+4 times 2.5
  - On a critical sneak attack hit, they inflict 3d8+4 + 300%, or 3d8+4 times 4


# Maneuvers
1 per level.

## Regular Rogue Stuff
- [Feint](#): at-will, swift, melee range; roll Deception vs Perception. On success, the enemy uses their reaction to avoid the fictitious attack. (Against a PC, roll both rolls secretly, and tell the PC if they are hit; they can still decide if they want to use their reaction).
- [Fan of Knives](#): recharge 33%, std, cone 3; light piercing damage to all targets (can apply poison).
- [Pocket Sand](#): recharge 33%, swift, melee range; subject is blinded (Con ends).
- [Sap](#): alternate option for Sneak Attack, causes unconsciousness (Con negates), which ends if subject suffers any damage or is vigourously awakened by another creature's Help action.
- [Smokescreen](#): recharge 33%, swift, close burst 1; area is obscured by smoke, granting concealment to all within. Useful for Stealth.
- [Kick](#): reaction to enemy casting a spell, melee range; roll an attack. Caster must pass a Con save against your attack (if it hits), or else lose the spell.


## Assassin
- [Death Attack](#): at-will, std; you prepare a death attack against the subject, granting +100% damage to your next Sneak Attack against them. This can stack up to +300%. All bonus damage must be used within the encounter, or it is lost.
- [Phantom Foe](#): recharge 33%, swift, concentration; subject is haunted by a phantasmal attacker. They cannot see them (nobody can, it's an illusion), but they remain alert to the foe's attacks. As such, you and allies gain the Flanking bonus against subject, even if only one is threatening the subject.
- [Pain Absorption](#): at-will, 1 soul shard, reaction to suffering damage; exercising an ancient technique passed from assassin to assassin, you harness the pain of a strike, and convert it into deadly power. Half of the damage of the attack is negated. Furthermore, record the amount that was negated; you can add that amount to a weapon attack within the next 3 rounds.
- Oath of Murder
- [Void Strike](#): 1 soul shard, swift; you whisper words of Shadow magic, imbuing your melee weapon with the power of the Void. Your next successful melee attack also dispels one magical effect on the subject, if the attack roll exceeds that effect's DC.


## Shadowdancer
- [Shadowstep](#): Recharge 33%, move, you must be in dimness or darkness; you teleport to a square within range that you can see, that is itself in dimness or darkness.
- [Shadow Pin](#): Recharge 33%, swift, ranged; you pin subject's shadow in place, thereby preventing subject from moving from their current position. They can attempt to free themselves with a Strength save once/rd, but on success, they must also suffer medium slashing damage to escape. Only works if subject casts a shadow.
- [Shadow Play](#): Recharge 33%, swift, concentration; while in dimness or darkness, you can create shadowy silhouttes of creatures and objects within a circle 2. They are insubstantial, but they may fool onlookers, who assume they are real unless they physical interact with them, in which case they are allowed a Wisdom save to disbelieve the illusion. PCs are allowed to declare that they disbelieve at any time, but they must still succeed at the saving throw.
- [Shadow Form](#): Recharge 33%, reaction, you must be in dimness or darkness; you become an incorporeal shadow. On your next turn, at some point, you must return to corporealness.


## Bard
- [Inspiring Melody](#): Encounter, swift, close burst 10; allies hear your song and are inspired to greatness. Each ally gains one token, which can be applied as they please to any single d20 roll during the encounter. Applying the token improves the roll by 1d6 (increasing to 1d8 at rank 2, 1d10 at rank 3, etc). This not only increases the result, but can also create critical success (for example, rolling a 16 naturally, then rolling 4 or higher on the inspiration, would count as a natural 20).
- [Fascinating Song](#): Encounter, std, emanation 10, concentration; subjects who are not in combat are fascinated, fully paying attention to your song. You must spend a standard action each round performing in order to maintain this effect (in addition to normal concentration rules). Those subjects who have reason to attempt not to pay attention to you, such as perceiving hostile action, suspecting your motives, or, if a PC, no reason necessary, are allowed a Wisdom save against your Perform check once per round to end the effect. In general, NPCs must have a valid reason to attempt this. Any obvious hostile action, such as an attack on subject or an ally that they are able to perceive while paying attention to you, automatically ends the effect.
- [Countersong](#): Recharge 33%, reaction to any hostile effect that relies on sound; you attempt to counter the effect. Roll Perform; if your results meets or exceeds the hostile effect, you negate it. If the effect is ongoing, you must continually perform to continue to negate it, which requires Concentration; as soon as your Countersong ends, it stops negating the effect (if it was still going).



## Spellthief
- [Scan](#): At-will, swift, ranged; you analyze a subject's magical signature, learning if it possess magical abilities. Roll an Investigation check; you learn which spells subject has available to cast based on their rank (DC 10 + 5 per rank).
- [Steal Spell](#): At-will, std, melee range, requires advantage; you attempt to steal a spell or magical power from the subject. Subject must either be a creature with the ability to cast spells, or a magic item that produces spell-like effects. Roll a Sleight of Hand check; the subject may resist with Perception check.
  - On success, you steal a random spell that the subject possesses. (see below)
  - On failure, nothing happens. 
  - When you steal a spell, the gain a single, consumable use of that spell, exactly as described. You may use it any time before the next long rest; if not used by then, it fades away. The subject "loses" the spell, which varies in meaning:
    - If they have spell slots or Mana, they lose an amount equal to what they would spend casting that spell normally.
    - If the ability has a cooldown, it goes on cooldown as if it was used by the subject.
  - Normally, the spell you steal is determined randomly (equal chance for each known spell). However, if you have knowledge of what spells the subject has, you can target a specific spell with your attempt.
  - If your spell theft decreased spell slots or Mana in the subject, you have the option of gaining said slots or Mana yourself instead of casting the spell.



## TBD




# Talents
1 per level


## Assassin
- [Poisoner](#): You can craft and apply poisons to your weapons. You also gain Resist 50% (poison).
  - Deadly Poison: basic poison that causes medium ongoing poison damage (Con ends).
  - Numbing Poison: deadens the reflexes, causing disadvantage to reaction-based defenses (parry, dodge, etc), Con ends.
  - Magekiller Poison: subject must pass a Con save against the poison's DC when casting a spell, or else lose it. Con ends.
  - Slowing Poison: -50% movement speed, Con ends.
  - Wound Poison: subject cannot heal, Con ends.
  - Hallucinogenic Poison: subject is confused, acting randomly (25% do nothing, 25% attack nearest target, 25% move randomly, 25% act normally). Con ends.
- [Soul Blade](#): You prepare your melee weapon to enable it to steal soul energy from targets. On successful Sneak Attacks, you gain 1 soul shard. Various Assassin abilities use soul shards (as well as the [Invoker](./invoker.md) class).
- [Soul Gem](#): You can prepare a soul gem (at a cost of TBD gold per HD of capacity). If you slay a creature, you can trap their soul in the gem, preventing any form of resurrection, and allowing uses of their trapped soul, such as:
  - Soul Sacrifice: upon suffering death, you can sacrifice the trapped soul, expending it, and negating the death effect.
  - Death Eater: as a swift action, you can absorb a trapped soul, healing yourself equal to the soul's original max HP, expending it.
  - Shadow Identity: at-will, swift, concentration; you take on the appearance of the soul's owner, as they appeared in life.
- [Lifesense](#): While you possess at least one soul shard, you gain the ability to see the flowing blood and warmth of living creatures, even in total darkness. This also grants a +1 bonus to critical range.


## Cool Rogue
- [Cunning Action](#): You may use the Dash, Disengage, or Hide action as a swift action instead of standard.
- [Evasion](#): You can use the Dodge reaction against area effects. Instead of the attack's DC (if it had one), you must roll against DC 10 + 5 per square, where the number of squares is the number you must move to escape the effect (maximum: your normal movement rate). If you succeed, you leap to the nearest safe square and avoid the effect. Otherwise, you do not move, and suffer the effect normally.
- [Preparation](#): When you begin combat, if you are not surprised, you may automatically enter Stealth, and move up to half your movement speed before anyone else takes a turn.
- [Uncanny Dodge](#): You may use the Dodge action without spending a reaction, a number of times per encounter equal to your Dex bonus. Also, you may Dodge attacks of which you were unaware.
- [Lightfoot](#): Gain +3 base movement, and Resist 50% (falling damage).
- Tactical Insertion
- Trap Sense


## Shadowdancer
- [Cloak of Shadows](#): While in dimness or darkness, you gain +2 per rank to AC and saving throws.
- [Shadowsight](#): You suffer no movement penalty in darkness, nor does dimness count as concealment in your sight. You can pinpoint the location of enemies in total darkness, identifying their occupied squares (although your attacks still suffer disadvantage).

## Spellthief
- [Spell Lock](#): You can use Steal Spell as a reaction. If you successfully steal a spell in this manner, it not only interrupts the spell, but locks the caster out of that spell's school until they pass an Int save.
- [Spell Mastery](#): Each time you steal a spell, you have a chance to master it by passing the appropriate spellcasting skill check (e.g. [Arcana](#) for Arcanist spells, [Thaumaturgy](#) for Thaumaturgist spells, etc), with a DC of 10 + 5 per rank. Failure has no ill effect. On success, if the spell is appropriate for your rank, you add it to your known repertoire.
  - This ability does not grant Mana or other resources. Spells that require such still require it, so you'd have to provide Mana somehow.

## Also...
- Shadowdancer
- Assassin
- Bard
- Spellthief
- Roguelock?