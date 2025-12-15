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
1     | Sneak Attack, Maneuvers, Feats
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
- [Inspiring Melody](../feats/class/rogue/inspiring-melody): Grant allies inspiration dice to boost their rolls.
- [Fascinating Performance](../feats/class/rogue/fascinating-performance): Captivate non-combatants with your mesmerizing performance.
- [Power of Suggestion](../feats/class/rogue/power-of-suggestion): Compel fascinated subjects to follow your suggestions.
- [Countersong](../feats/class/rogue/countersong): Counter hostile sound-based effects with your performance.



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




# Feats
1 per level


## Assassin
- [Poisoner](../feats/class/rogue/poisoner): Craft and apply poisons to weapons.
- [Soul Blade](../feats/class/rogue/soul-blade): Gain soul shards from successful Sneak Attacks.
- [Soul Gem](../feats/class/rogue/soul-gem): Trap souls to prevent resurrection or use their power.
- [Lifesense](../feats/class/rogue/lifesense): See living creatures in darkness and gain critical range.

## Bard
- [Inspiring Melody](../feats/class/rogue/inspiring-melody): Grant allies inspiration dice to boost their rolls.
- [Fascinating Song](../feats/class/rogue/fascinating-song): Captivate non-combatants with your mesmerizing performance.
- [Power of Suggestion](../feats/class/rogue/power-of-suggestion): Compel fascinated subjects to follow your suggestions.
- [Countersong](../feats/class/rogue/countersong): Counter hostile sound-based effects with your performance.


## Cool Rogue
- [Cunning Action](../feats/class/rogue/cunning-action): Use Dash, Disengage, or Hide as a swift action.
- [Evasion](../feats/class/rogue/evasion): Dodge area effects by leaping to safety.
- [Preparation](../feats/class/rogue/preparation): Enter Stealth and move before combat begins.
- [Uncanny Dodge](../feats/class/rogue/uncanny-dodge): Dodge without spending reactions, even against unseen attacks.
- [Lightfoot](../feats/class/rogue/lightfoot): Gain +3 movement and resist falling damage.
- [Tactical Insertion](../feats/class/rogue/tactical-insertion): Deploy to an advantageous position at the start of combat.
- [Trap Sense](../feats/class/rogue/trap-sense): Detect and avoid traps with enhanced awareness.


## Shadowdancer
- [Cloak of Shadows](../feats/class/rogue/cloak-of-shadows): Gain AC and save bonuses in dimness or darkness.
- [Shadowsight](../feats/class/rogue/shadowsight): Move freely and pinpoint enemies in darkness.

## Spellthief
- [Spell Lock](../feats/class/rogue/spell-lock): Use Steal Spell as a reaction to lock out a spell school.
- [Spell Mastery](../feats/class/rogue/spell-mastery): Permanently learn spells you steal.

## Also...
- Shadowdancer
- Assassin
- Bard
- Spellthief
- Roguelock?