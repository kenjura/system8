---
name: Proficiency Bonus
abbr: prof
brief: A bonus added to rolls for skills, attacks, and saving throws you are proficient in
formula: "(level) => 1 + Math.ceil(level / 4)"
---

# Proficiency Bonus (prof)

The Proficiency Bonus is a scaling bonus that represents your character's growing expertise as they gain levels. It applies to any roll where you have proficiency.

## How It Works

Your Proficiency Bonus is added to:

- **Attack rolls** with weapons you're proficient with
- **Ability checks** using skills you're proficient in
- **Saving throws** you're proficient in
- **Spell attack rolls** (if you're a spellcaster)
- **Spell save DCs** (if you're a spellcaster)

## Calculating Proficiency Bonus

```
Proficiency Bonus = 1 + ceil(level / 4)
```

### Proficiency Bonus by Level

| Level | Proficiency Bonus |
|-------|-------------------|
| 1-4   | +2                |
| 5-8   | +3                |
| 9-12  | +4                |
| 13-16 | +5                |
| 17-20 | +6                |

## Proficiency Sources

You gain proficiency from various sources:

### From Your Class
- **Saving Throws**: Each class grants proficiency in two saving throws.
- **Weapons**: Classes grant proficiency with certain weapon categories.
- **Armor**: Classes grant proficiency with certain armor types.
- **Skills**: Classes let you choose proficiency in a number of skills.

### From Your Background
Backgrounds typically grant proficiency in two skills and sometimes tools.

### From Feats
Some feats grant new proficiencies in skills, weapons, armor, or tools.

### From Multiclassing
Multiclassing grants limited additional proficiencies from the new class.

## Expertise

Some features grant Expertise, which doubles your Proficiency Bonus for specific skills or tools. The doubled bonus only applies to ability checks with that skill or tool, not to other uses of proficiency.

## Non-Stacking Rule

You can never add your Proficiency Bonus more than once to a single roll, even if multiple features would grant proficiency. However, Expertise doubles the bonus rather than adding it again.

## Example Calculations

A 5th-level Rogue with Expertise in Stealth and +4 Dexterity:

- **Regular Stealth check**: d20 + 4 (Dex) + 3 (prof) = d20 + 7
- **With Expertise**: d20 + 4 (Dex) + 6 (double prof) = d20 + 10
