---
name: Crit Power
abbr: cpow
brief: Increases your critical hit damage multiplier
formula: "(baseCritMultiplier, cpow) => 2 + cpow"
---

# Crit Power (cpow)

Crit Power increases the damage multiplier applied when you score a critical hit. While the base critical multiplier is 2×, Crit Power can increase this to devastating levels.

## How It Works

When you score a critical hit, your damage is multiplied:

```
Critical Multiplier = 2 + Crit Power
```

The multiplier applies to your damage dice (not flat bonuses, typically):

| Crit Power | Multiplier | Effect |
|------------|------------|--------|
| 0          | 2×         | Double damage dice |
| 1          | 3×         | Triple damage dice |
| 2          | 4×         | Quadruple damage dice |
| 3          | 5×         | Quintuple damage dice |

## Critical Hit Damage Calculation

When calculating critical damage:

1. **Roll damage dice** as normal
2. **Multiply** by your critical multiplier
3. **Add** flat bonuses (ability mod, etc.) — typically only once

Example with Crit Power 1 (3× multiplier):
```
Normal damage: 2d8 + 5
Critical damage: (2d8) × 3 + 5 = 6d8 + 5
```

## Sources of Crit Power

### Magic Weapons
Certain enhanced weapons increase critical damage rather than hit or crit range.

### Class Features
- **Brutal Critical**: Some martial classes gain extra dice on crits.
- **Sneak Attack**: Rogues roll sneak attack dice on crits (doubled).

### Weapon Properties
Weapons described as "brutal" or "devastating" may have innate Crit Power.

### Feats
Some feats increase your effectiveness with critical hits.

## Synergy with Crit Rating

Crit Power and Crit Rating work together:

- **Crit Rating**: Increases how often you crit
- **Crit Power**: Increases how much damage crits deal

The expected damage increase from Crit Power depends on your crit chance:

| Crit Rating | Crit Chance | Value of +1 cpow |
|-------------|-------------|------------------|
| 0           | 5%          | +5% avg damage   |
| 1           | 10%         | +10% avg damage  |
| 2           | 15%         | +15% avg damage  |
| 3           | 20%         | +20% avg damage  |

## Strategic Considerations

Crit Power is most valuable when:
- You already have high Crit Rating (more crits = more multiplied damage)
- Using weapons with many damage dice
- Combined with abilities that add dice on crits (Sneak Attack, Smite)
- You can generate advantage reliably (doubled chance to crit)

## Example Scenario

A Rogue with:
- Sneak Attack: 3d6
- Rapier: 1d8 + 4
- Crit Rating 2 (18-20 range, 15% chance)
- Crit Power 1 (3× multiplier)

Normal hit: 1d8 + 4 + 3d6 = ~18 damage average
Critical hit: (1d8 + 3d6) × 3 + 4 = ~51 damage average

With 15% crit chance, expected damage per attack:
```
0.85 × 18 + 0.15 × 51 ≈ 23 damage
```
