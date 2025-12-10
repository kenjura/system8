---
name: Rank
abbr: rank
brief: Your character's overall level of power and experience, which influences many other attributes
formula: "(level) => floor((level-1)/4)+1"
---

# Rank

Rank represents your character's overall level of power and experience. It is a key attribute that influences various aspects of your character, including damage output, spell effectiveness, and certain class features.

## How It Works
Your Rank is determined by your character's level:

```
Rank = floor((Level - 1) / 4) + 1
```
This means that your Rank increases by 1 for every 4 levels you gain:   
| Level | Rank |
|-------|------|
| 1-4   | 1    |
| 5-8   | 2    |
| 9-12  | 3    |
| 13-16 | 4    |
| 17-20 | 5    |        

## Impact of Rank
Rank affects several key aspects of your character:
- **Damage Dice**: The size of damage dice for light, medium, and heavy attacks scales with Rank.
- **Spell Effects**: Some spells and abilities scale in power or effectiveness based on your Rank
- **Class Features**: Certain class features and abilities may have Rank-based enhancements or effects.

## Example
A 7th-level character has Rank 2. If they use a medium weapon that deals 1d8 damage at Rank 1, it would deal 2d8 damage at Rank 2.