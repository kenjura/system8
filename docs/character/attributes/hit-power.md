---
name: Hit Power
abbr: hpow
brief: A bonus added to damage rolls from enhanced weapons or abilities
formula: "(baseDamage, rank, hpow) => baseDamage + rank * hpow"
---

# Hit Power (hpow)

Hit Power is an attack attribute that increases the damage you deal with attacks. It scales with your power rank, making it increasingly valuable at higher levels.

## How It Works

Hit Power adds bonus damage to your attacks, multiplied by your power rank:

```
Bonus Damage = rank × Hit Power
```

This bonus is added to your normal damage roll.

## Damage Formula with Hit Power

The complete damage calculation for an attack:

```
Damage = Base Damage (light/medium/heavy) + (rank × hpow)
```

### Base Damage by Weight

| Weight | Die | Ability Multiplier |
|--------|-----|-------------------|
| Light  | (rank)d4 | 0.5× (abilityMod + prof) |
| Medium | (rank)d8 | 1× (abilityMod + prof) |
| Heavy  | (rank)d12 | 1.5× (abilityMod + prof) |

## Sources of Hit Power

### Magic Weapons
Enhanced weapons typically provide +1 to +3 Hit Power:

| Enhancement | Damage Bonus |
|-------------|--------------|
| +1 Weapon   | +1 hpow      |
| +2 Weapon   | +2 hpow      |
| +3 Weapon   | +3 hpow      |

### Spellcasting Implements
Wands and staves can provide Hit Power to spell damage.

### Class Features
Some abilities increase damage dealt, effectively granting Hit Power.

## Example Calculation

A 9th-level character (rank 3) with:
- +2 Longsword (hpow +2)
- Medium damage: 3d8 + (abilityMod + prof)

```
Hit Power Bonus = 3 (rank) × 2 (hpow) = +6 damage
Total Damage = 3d8 + (ability + prof) + 6
```

## Scaling Comparison

Hit Power becomes increasingly valuable at higher ranks:

| Rank | +1 hpow | +2 hpow | +3 hpow |
|------|---------|---------|---------|
| 1    | +1      | +2      | +3      |
| 2    | +2      | +4      | +6      |
| 3    | +3      | +6      | +9      |
| 4    | +4      | +8      | +12     |
| 5    | +5      | +10     | +15     |

## Strategic Considerations

Hit Power is most valuable when:
- You make frequent attacks (more chances to apply the bonus)
- Fighting low-AC enemies where you rarely miss
- At higher ranks where the scaling multiplier increases
- Combined with abilities that grant extra attacks
