---
name: Crit Rating
abbr: crit
brief: Expands your critical hit range, allowing you to crit on lower rolls
formula: "(baseCritRange, crit) => 20 - crit"
---

# Crit Rating (crit)

Crit Rating expands your critical hit range, allowing you to score critical hits on die rolls lower than the standard 20. This increases your chance of dealing devastating blows.

## How It Works

Normally, you score a critical hit only on a natural 20. Crit Rating lowers this threshold:

```
Critical Hit Range = 20 - Crit Rating
```

For example:
- Crit Rating 0: Crit on 20 (5% chance)
- Crit Rating 1: Crit on 19-20 (10% chance)
- Crit Rating 2: Crit on 18-20 (15% chance)
- Crit Rating 3: Crit on 17-20 (20% chance)

## Crit Range Table

| Crit Rating | Crit Range | Crit Chance |
|-------------|------------|-------------|
| 0           | 20         | 5%          |
| 1           | 19-20      | 10%         |
| 2           | 18-20      | 15%         |
| 3           | 17-20      | 20%         |
| 4           | 16-20      | 25%         |
| 5           | 15-20      | 30%         |

## Sources of Crit Rating

### Magic Weapons
Some enhanced weapons specifically improve critical threat range.

### Class Features
- **Champion Fighter**: Improved Critical feature grants effective Crit Rating.
- **Assassin Rogue**: Assassinate feature auto-crits against surprised foes.

### Weapon Properties
Some weapon types (like rapiers or keen weapons) may have inherent Crit Rating.

### Spells and Abilities
Certain buffs can temporarily improve your critical hit range.

## Critical Hit Effects

When you score a critical hit:

1. **Double Damage Dice**: Roll all damage dice twice (or roll once and double).
2. **Apply Crit Power**: Your critical multiplier may be higher than 2× (see Crit Power).
3. **Special Abilities**: Some features trigger additional effects on critical hits.

## Strategic Considerations

Crit Rating is most valuable when:
- Combined with high base damage or extra crit damage effects
- Using weapons with many damage dice
- You have abilities that trigger on critical hits
- Fighting enemies where raw damage matters more than consistency
- Combined with advantage (more chances to roll within the crit range)

## Crit Rating vs. Hit Rating

| Attribute | Effect | Best Against |
|-----------|--------|--------------|
| Hit Rating | More consistent hits | High-AC enemies |
| Crit Rating | Higher damage spikes | Low-AC enemies, when you hit reliably |

Often, balanced itemization includes both, but prioritize based on your typical combat scenarios.
