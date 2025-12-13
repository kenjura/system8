---
name: Strength
default-value: 10
modifier: floor((score - 10) / 2)
brief: Physical power and forcefulness. Used for melee attacks, lifting, and breaking objects.
player-character-validation:
    base-max: 16
    base-values: [3, 2, 1, 0, 0, 0]
    base-adjustment: "May apply -1 to one score to gain +1 to another (max twice, cannot increase 3 to 4)"
    asi:
        levels: [4, 8, 12, 16, 20]
        bonus-per-level: 2
        distribution: "Two +1 bonuses to two different scores"
        can-exceed-base-max: true
    feat-bonuses:
        source: "ancestry/background feats"
        can-exceed-base-max: true
        note: "See individual feat descriptions for specific bonuses"
---

# Strength

Strength measures your physical power and forcefulness. It is a key attribute for characters who rely on melee combat, heavy lifting, and physical feats of endurance.

## Validation Rules for Character Builders

When validating a player character's Strength score:

1. **Base Score Cap**: The base ability score (before ASIs and feat bonuses) cannot exceed 16.
2. **Starting Values**: Players distribute values from the array `[3, 2, 1, 0, 0, 0]` across the six ability scores.
3. **Base Adjustments**: Players may optionally apply -1 to one score to gain +1 to another, up to twice. The highest value (3) cannot be increased this way.
4. **ASI Progression**: At levels 4, 8, 12, 16, and 20, the character gains +1 to two different ability scores. These bonuses **can** exceed the base cap of 16.
5. **Feat Bonuses**: Certain ancestry and background feats grant ability score bonuses as noted in their descriptions. These also can exceed the base cap.