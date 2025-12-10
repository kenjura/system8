---
name: Hit Rating
abbr: hit
brief: A bonus added to your attack rolls from enhanced weapons or abilities
formula: "(baseAttack, abilityMod, prof, hit) => baseAttack + abilityMod + prof + hit"
---

# Hit Rating (hit)

Hit Rating is an attack attribute that improves your chance to hit targets. It is typically provided by enhanced weapons, magic items, class features, or spells.

## How It Works

When you make an attack roll, your Hit Rating is added as a bonus:

```
Attack Roll = d20 + Ability Modifier + Proficiency Bonus + Hit Rating
```

A higher Hit Rating means you land attacks more consistently, even against heavily armored foes.

## Sources of Hit Rating

### Magic Weapons
Enhanced weapons typically provide +1 to +3 Hit Rating:

| Enhancement | Hit Bonus |
|-------------|-----------|
| +1 Weapon   | +1 hit    |
| +2 Weapon   | +2 hit    |
| +3 Weapon   | +3 hit    |

### Spellcasting Implements
Wands, staves, and other implements can provide Hit Rating to spell attacks.

### Class Features
Some class abilities grant bonuses to attack rolls that function as Hit Rating.

### Temporary Effects
Spells like *Bless* or bardic inspiration can provide temporary bonuses to hit.

## Hit Rating vs. Advantage

Both Hit Rating and Advantage improve your attack accuracy, but differently:

- **Hit Rating**: Flat bonus added to every attack roll
- **Advantage**: Roll 2d20 and take the higher result

Advantage is roughly equivalent to +4 or +5 hit on average, but with more variance. Hit Rating is more reliable.

## Example Calculation

A 5th-level Fighter with:
- Strength 18 (+4 modifier)
- Proficiency Bonus +3
- +1 Longsword (Hit Rating +1)

```
Attack Roll = d20 + 4 (Str) + 3 (prof) + 1 (hit) = d20 + 8
```

Against an enemy with AC 16, they need to roll an 8 or higher to hit (65% chance).

## Strategic Considerations

Hit Rating is most valuable when:
- Fighting high-AC enemies where missing is costly
- Using abilities that trigger on hit
- When you can't reliably gain advantage
- Making multiple attacks where consistent hits matter more than spike damage
