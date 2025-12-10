---
name: Speed
abbr: Spd
brief: The distance your character can move in a single turn
formula: "(baseSpeed, bonuses, penalties) => baseSpeed + bonuses - penalties"
---

# Speed

Speed represents how far your character can move on their turn. It is measured in feet and determines your tactical options in combat and exploration.

## How It Works

On your turn, you can move a distance up to your Speed. You can break up your movement, using some before and some after your action.

```
Movement Available = Speed (in feet)
```

## Base Speed by Race

Different races have different base walking speeds:

| Race | Base Speed |
|------|------------|
| Human | 30 ft. |
| Elf | 30 ft. |
| Dwarf | 25 ft. |
| Halfling | 25 ft. |
| Others | Varies |

## Movement Types

Characters may have multiple movement types:

### Walking Speed
Your default land speed. This is the Speed referenced in most rules.

### Climbing Speed
Movement while climbing. Without a climbing speed, climbing costs 2 feet of movement per 1 foot climbed.

### Swimming Speed
Movement while swimming. Without a swimming speed, swimming costs 2 feet of movement per 1 foot swum.

### Flying Speed
Movement through the air. Flying creatures must keep moving or fall (unless they can hover).

### Burrowing Speed
Movement through earth or loose material.

## Modifiers to Speed

### Bonuses
| Source | Effect |
|--------|--------|
| Monk class features | +10 to +30 ft. |
| Longstrider spell | +10 ft. |
| Haste spell | Doubled speed |
| Magic items | Varies |

### Penalties
| Condition | Effect |
|-----------|--------|
| Difficult terrain | Costs 2 ft. per 1 ft. moved |
| Prone | Crawling costs 2 ft. per 1 ft. |
| Grappled | Speed becomes 0 |
| Restrained | Speed becomes 0 |
| Exhaustion (2+) | Speed halved |
| Heavy armor (no proficiency) | Speed reduced by 10 ft. |

## Dash Action

You can take the Dash action to gain additional movement equal to your Speed for that turn. This effectively doubles your movement for the turn.

## Opportunity Attacks

Moving out of an enemy's reach provokes an opportunity attack unless you:
- Use the Disengage action
- Are moved by an external force (shoved, teleported)
- Use a special ability that prevents opportunity attacks
