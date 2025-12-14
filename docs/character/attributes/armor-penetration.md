---
name: Armor Penetration
abbr: ap
brief: Reduces the target's effective Armor Class when you attack
formula: "(targetAC, ap) => targetAC - ap"
---

# Armor Penetration (ap)

Armor Penetration is an attack attribute that reduces the target's effective Armor Class when you make attacks. This makes it easier to hit heavily armored foes.

## How It Works

When you attack a target, your Armor Penetration reduces their AC for that attack:

```
Effective AC = Target's AC - your Armor Penetration
```

This means an attack roll that would normally miss might hit against a high-AC target.

## Example

Attacking an enemy with AC 20:
- With 0 AP: Must roll 20 or higher (after modifiers) to hit
- With 2 AP: Effective AC 18, must roll 18 or higher to hit
- With 5 AP: Effective AC 15, must roll 15 or higher to hit

## Armor Penetration vs. Hit Rating

Both AP and Hit Rating improve your chance to hit, but they work differently:

| Attribute | Mechanic | Effect |
|-----------|----------|--------|
| Hit Rating | Adds to your attack roll | +1 hit = +1 to roll |
| Armor Penetration | Reduces target AC | +1 ap = -1 to target AC |

**Mathematically, they're equivalent** for hitting a single target. +1 hit has the same effect as +1 AP. However, there are subtle differences:

### When AP is Better
- Against abilities that have minimum AC thresholds
- If enemies have effects that scale off their AC
- Thematically for "armor-piercing" weapons

### When Hit Rating is Better
- Against effects that trigger on attack roll values
- For abilities that care about how high you rolled
- More universally applicable

## Sources of Armor Penetration

### Weapon Properties
Some weapons are designed to pierce armor:

| Weapon Type | Typical AP |
|-------------|------------|
| Armor-piercing ammunition | 2-5 AP |
| Specialized piercing weapons | 1-3 AP |
| Siege weapons | 5-10 AP |

### Class Features
Some martial abilities grant armor penetration against specific targets.

### Tactical Positioning
Flanking or attacking from certain angles might grant AP in some systems.

## Interaction with Low-AC Targets

Armor Penetration can reduce effective AC below 10, but typically not below a creature's minimum AC (usually 10 + Dex modifier, or natural minimums for some creatures).

Against unarmored targets with low AC, AP may be wasted. Consider this when choosing gear:

| Target AC | Value of +2 AP | Value of +2 Hit |
|-----------|----------------|-----------------|
| AC 10     | Possibly wasted | Always useful |
| AC 15     | Useful | Useful |
| AC 20     | Very useful | Useful |
| AC 25     | Essential | Useful |

## Strategic Considerations

Armor Penetration is most valuable when:
- Fighting heavily armored enemies (high AC from armor)
- You already hit reliably against low-AC targets
- Enemies have abilities that reference their AC value
- Combined with high-frequency attacks

AP is less valuable against:
- Unarmored foes with natural agility (Dex-based AC)
- Creatures whose AC comes from magical sources
- Targets you already hit easily
