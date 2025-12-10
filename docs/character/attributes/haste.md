---
name: Haste
abbr: haste
brief: A chance to gain an extra attack or spell action immediately after attacking
formula: "(hastePercent, roll) => roll <= hastePercent"
---

# Haste

Haste is an attack attribute that grants a chance to take an additional attack or spellcasting action immediately after making an attack. Unlike other attributes, Haste is probabilistic—it doesn't always trigger, but when it does, it's extremely powerful.

## How It Works

When you make an attack or cast a spell, you have a chance equal to your Haste percentage to immediately gain another attack or spellcasting action:

```
On attack/spell: Roll d100
If roll ≤ Haste%, gain extra action
```

### Carryover Mechanic

If the Haste proc fails, the "leftover" probability carries over to your next turn:

```
Next turn Haste chance = base Haste% + carryover from previous failed rolls
```

This means if you have 20% Haste and fail the roll, next turn you effectively have 40% chance (assuming your base is still 20%). This carryover continues until you proc, at which point it resets.

## Example

Character with 25% Haste:

| Turn | Effective Chance | Roll | Result | Carryover |
|------|------------------|------|--------|-----------|
| 1    | 25%              | 42   | Miss   | 25%       |
| 2    | 50%              | 31   | Miss   | 50%       |
| 3    | 75%              | 60   | Miss   | 75%       |
| 4    | 100%             | --   | Hit!   | 0%        |

With carryover, you're guaranteed to eventually proc. Higher base Haste means more frequent procs.

## Sources of Haste

### Magic Weapons
Some enhanced weapons grant a Haste percentage:

| Enhancement | Haste |
|-------------|-------|
| Swift weapon | 10-15% |
| Speed weapon | 20-25% |
| Legendary speed weapon | 30%+ |

### Spells
The *Haste* spell grants significant action economy benefits, which may include Haste percentage.

### Class Features
Some martial classes gain speed-related abilities that function similarly to Haste.

## Strategic Considerations

Haste is most valuable when:
- You deal high damage per attack (more attacks = more total damage)
- You have abilities that trigger per attack
- Combat is long enough for the carryover to matter
- Combined with action economy abilities

## Haste vs. Other Attack Attributes

| Attribute | Effect | Reliability |
|-----------|--------|-------------|
| Hit Rating | Better accuracy | Always applies |
| Hit Power | More damage per hit | Always applies |
| Crit Rating | More critical hits | Per-attack chance |
| Crit Power | Bigger crits | When you crit |
| Haste | Extra attacks | Probabilistic, carryover |

Haste has the highest variance but potentially the highest ceiling—an extra attack is essentially doubling your output for that turn.

## Diminishing Returns

Unlike flat bonuses, Haste has some effective diminishing returns at very high levels. At 50% Haste, you average 2 attacks per turn. At 100% Haste, you'd get 2 guaranteed, but there's no benefit beyond that. Practical Haste values are usually 10-40%.
