---
proficiency-bonus-formula: "1 + ceil(level / 4)"
ability-modifier-formula: "floor((score - 10) / 2)"
power-rank-formula: "floor((level - 1) / 4) + 1"
light-damage: (rank)d4 + floor((abilityMod+prof)/2)
medium-damage: (rank)d8 + (abilityMod+prof)
heavy-damage: (rank)d12 + floor(abilityMod+prof)*1.5
crit-range: 20 - crit
crit-multiplier: 2 + critPower
max-hp: "level * (class.hpPerLevel + conMod)"
attack-roll: "d20 + abilityMod + prof + hit"
damage-roll: "(base damage for light/medium/heavy) + rank * hpow"
---

  - [ ] **9.6.1** Proficiency bonus formula: `1 + ceil(level / 4)` (shared/types/character.ts)
  - [ ] **9.6.2** Ability modifier formula: `floor((score - 10) / 2)` (shared/types/character.ts)
  - [ ] **9.6.3** Power rank formula: level ranges → 1-5 (shared/types/character.ts)
  - [ ] **9.6.4** Damage die sizes: light=d4, medium=d8, heavy=d12 (shared/types/character.ts, ui-components/AttacksList)
  - [x] **9.6.5** Damage multipliers: light=0.5x, medium=1x, heavy=1.5x (shared/types/character.ts)
  - [x] **9.6.6** Crit range: base 20, expanded by crit property (shared/utils/dice.ts, ui-components/AttacksList)
  - [x] **9.6.7** Crit multiplier: `2 + critPower` (shared/utils/dice.ts, ui-components/AttacksList)
  - [ ] **9.6.8** HP formula: `level * (8 + conMod)` (vtt/utils/characterToToken.ts)
  - [ ] **9.6.9** Ability names and short codes: Strength→Str, etc. (vtt/utils/characterToToken.ts)
  - [ ] **9.6.10** Ability order for grouping: STR, DEX, CON, INT, WIS, CHA (ui-components/SkillsList)
  - [ ] **9.6.11** Default conditions list: Blinded, Charmed, etc. (vtt/interfaces/ICondition.ts)
  - [ ] **9.6.12** Power ability score: currently uses highest attribute (vtt/utils/characterToToken.ts)
  - [ ] **9.6.13** Skill-to-ability mappings: should come from system skills.json
  - [ ] **9.6.14** Implement detection: `type === 'Spellcasting Implement'` (shared/views/characterView.ts)