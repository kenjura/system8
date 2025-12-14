---
name: Armor Class
abbr: AC
brief: A measure of how difficult it is to hit your character with an attack
formula: "(baseAC, dexMod, armorBonus, shieldBonus, otherBonuses) => baseAC + dexMod + armorBonus + shieldBonus + otherBonuses"
---

# Armor Class (AC)

Armor Class represents how difficult it is to land a damaging hit on your character. It combines your ability to dodge attacks, the protection provided by armor, and other defensive factors.

## How It Works

When an attacker makes an attack roll against you, they must meet or exceed your AC to hit. The attack roll is:

```
Attack Roll = d20 + attacker's modifiers
```

If the attack roll ≥ your AC, the attack hits.

## Calculating AC

Your base AC depends on your armor type:

### Unarmored
```
AC = 10 + Dexterity modifier
```

### Light Armor
```
AC = 10 + proficiency bonus + Dexterity modifier
```

### Heavy Armor
```
AC = 10 + proficiency bonus + Strength modifier
```


## Flat-Footed and Touch AC

Some attacks target specific aspects of your defense:

- **Touch AC**: Ignores armor and shield bonuses; used by some spells and abilities.
- **Flat-Footed AC**: Ignores Dexterity bonus; applies when you're caught unaware.
