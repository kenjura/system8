---
name: Initiative
abbr: Init
brief: Determines the order of actions during combat encounters
formula: "(dexMod, bonuses) => dexMod + bonuses"
---

# Initiative

Initiative determines who acts first in combat. When combat begins, all participants roll initiative to establish the turn order for the encounter.

## How It Works

At the start of combat:

1. Each participant rolls a d20 and adds their Initiative modifier.
2. The GM ranks all results from highest to lowest.
3. Combat proceeds in this order, cycling through each round.

```
Initiative Roll = d20 + Initiative modifier
```

## Calculating Initiative Modifier

Your base Initiative modifier equals your Dexterity modifier:

```
Initiative = Dexterity modifier + bonuses
```

### Bonuses to Initiative

Various sources can improve your Initiative:

| Source | Bonus |
|--------|-------|
| Dexterity modifier | Varies |
| Alert feat | +5 |
| Class features | Varies |
| Magic items | Varies |

## Resolving Ties

When two or more combatants have the same Initiative roll:

1. **PCs vs. Monsters**: Players choose who goes first among tied PCs; GM chooses for monsters.
2. **PC vs. PC**: Compare Dexterity scores; higher goes first. If still tied, flip a coin.
3. **Monster vs. Monster**: GM decides the order.

## Special Initiative Rules

### Surprise
If one side surprises the other, surprised creatures cannot act during the first round of combat. They still roll initiative, but skip their first turn.

### Delaying
You can choose to delay your turn, acting later in the initiative order. Your new position becomes your initiative for the rest of the combat.

### Readying an Action
Instead of delaying, you can ready an action with a specific trigger. When the trigger occurs, you use your reaction to take the readied action.

## Why Initiative Matters

A high Initiative allows you to:
- Act before enemies, potentially eliminating threats early
- Position yourself advantageously before foes can react
- Apply buffs or debuffs before combat fully engages
- Control the battlefield before enemies establish their positions
