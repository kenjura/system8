---
name: Maximum Hit Points
abbr: MaxHP
brief: The maximum amount of Hit Points your character can have
formula: "(level, hpPerLevel, conMod) => level * (hpPerLevel + conMod)"
---

# Maximum Hit Points (MaxHP)

Maximum Hit Points represent the upper limit of your character's health pool. This value determines how much punishment your character can take before falling unconscious.

## How It Works

Your MaxHP is calculated based on your level, your class's HP per level, and your Constitution modifier:

```
MaxHP = level × (hpPerLevel + conMod)
```

### Components

- **Level**: Your character's current level (1-20).
- **HP per Level**: Each class grants a fixed amount of HP per level:
  - d6 classes (Psion, Witch): 4 HP/level
  - d8 classes (Rogue): 5 HP/level
  - d10 classes (Fighter): 6 HP/level
  - d12 classes: 7 HP/level
- **Constitution Modifier**: Your Constitution modifier is added per level. A higher Constitution means more durability.

## Example Calculations

| Level | Class (HP/lvl) | Con Mod | MaxHP |
|-------|----------------|---------|-------|
| 1     | Psion (4)      | +2      | 6     |
| 5     | Fighter (6)    | +3      | 45    |
| 10    | Rogue (5)      | +1      | 60    |

## Increasing MaxHP

Your MaxHP can be increased through:

- **Leveling Up**: Automatically increases based on the formula above.
- **Feats**: Some feats grant bonus HP or increase your effective Constitution.
- **Magic Items**: Certain items permanently or temporarily increase MaxHP.
- **Class Features**: Some class abilities grant additional HP.

## Constitution Changes

If your Constitution modifier changes (through magic, leveling, or other means), recalculate your MaxHP retroactively. This affects all levels, not just future ones.
