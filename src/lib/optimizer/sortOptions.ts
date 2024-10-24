// This file tracks the mapping between various stat property references between the optimizer / worker / grid / buffer packer
// This sucks - clean up the discrepancies eventually

export type SortOptionProperties = {
  key: string
  gpuProperty: string
  basicProperty: string
  combatProperty: string
  basicGridColumn: string
  combatGridColumn: string
  isComputedRating?: boolean
}

export const SortOption: {
  ATK: SortOptionProperties
  DEF: SortOptionProperties
  HP: SortOptionProperties
  SPD: SortOptionProperties
  CR: SortOptionProperties
  CD: SortOptionProperties
  EHR: SortOptionProperties
  RES: SortOptionProperties
  BE: SortOptionProperties
  OHB: SortOptionProperties
  ERR: SortOptionProperties
  ELEMENTAL_DMG: SortOptionProperties
  EHP: SortOptionProperties
  BASIC: SortOptionProperties
  SKILL: SortOptionProperties
  ULT: SortOptionProperties
  FUA: SortOptionProperties
  DOT: SortOptionProperties
  BREAK: SortOptionProperties
  COMBO: SortOptionProperties
} = {
  ATK: {
    key: 'ATK',
    gpuProperty: 'ATK',
    basicProperty: 'ATK',
    combatProperty: 'ATK',
    basicGridColumn: 'ATK',
    combatGridColumn: 'xATK',
  },
  DEF: {
    key: 'DEF',
    gpuProperty: 'DEF',
    basicProperty: 'DEF',
    combatProperty: 'DEF',
    basicGridColumn: 'DEF',
    combatGridColumn: 'xDEF',
  },
  HP: {
    key: 'HP',
    gpuProperty: 'HP',
    basicProperty: 'HP',
    combatProperty: 'HP',
    basicGridColumn: 'HP',
    combatGridColumn: 'xHP',
  },
  SPD: {
    key: 'SPD',
    gpuProperty: 'SPD',
    basicProperty: 'SPD',
    combatProperty: 'SPD',
    basicGridColumn: 'SPD',
    combatGridColumn: 'xSPD',
  },
  CR: {
    key: 'CR',
    gpuProperty: 'CR',
    basicProperty: 'CRIT Rate',
    combatProperty: 'CRIT Rate',
    basicGridColumn: 'CRIT Rate',
    combatGridColumn: 'xCR',
  },
  CD: {
    key: 'CD',
    gpuProperty: 'CD',
    basicProperty: 'CRIT DMG',
    combatProperty: 'CRIT DMG',
    basicGridColumn: 'CRIT DMG',
    combatGridColumn: 'xCD',
  },
  EHR: {
    key: 'EHR',
    gpuProperty: 'EHR',
    basicProperty: 'Effect Hit Rate',
    combatProperty: 'Effect Hit Rate',
    basicGridColumn: 'Effect Hit Rate',
    combatGridColumn: 'xEHR',
  },
  RES: {
    key: 'RES',
    gpuProperty: 'RES',
    basicProperty: 'Effect RES',
    combatProperty: 'Effect RES',
    basicGridColumn: 'Effect RES',
    combatGridColumn: 'xRES',
  },
  BE: {
    key: 'BE',
    gpuProperty: 'BE',
    basicProperty: 'Break Effect',
    combatProperty: 'Break Effect',
    basicGridColumn: 'Break Effect',
    combatGridColumn: 'xBE',
  },
  OHB: {
    key: 'OHB',
    gpuProperty: 'OHB',
    basicProperty: 'Outgoing Healing Boost',
    combatProperty: 'Outgoing Healing Boost',
    basicGridColumn: 'Outgoing Healing Boost',
    combatGridColumn: 'xOHB',
  },
  ERR: {
    key: 'ERR',
    gpuProperty: 'ERR',
    basicProperty: 'Energy Regeneration Rate',
    combatProperty: 'Energy Regeneration Rate',
    basicGridColumn: 'Energy Regeneration Rate',
    combatGridColumn: 'xERR',
  },
  ELEMENTAL_DMG: {
    key: 'ELEMENTAL_DMG',
    gpuProperty: 'ELEMENTAL_DMG',
    basicProperty: 'ELEMENTAL_DMG',
    combatProperty: 'ELEMENTAL_DMG',
    basicGridColumn: 'ED',
    combatGridColumn: 'xELEMENTAL_DMG',
    isComputedRating: true,
  },
  EHP: {
    key: 'EHP',
    gpuProperty: 'EHP',
    basicProperty: 'EHP',
    combatProperty: 'EHP',
    basicGridColumn: 'EHP',
    combatGridColumn: 'EHP',
    isComputedRating: true,
  },
  BASIC: {
    key: 'BASIC',
    gpuProperty: 'BASIC_DMG',
    basicProperty: 'BASIC_DMG',
    combatProperty: 'BASIC_DMG',
    basicGridColumn: 'BASIC',
    combatGridColumn: 'BASIC',
    isComputedRating: true,
  },
  SKILL: {
    key: 'SKILL',
    gpuProperty: 'SKILL_DMG',
    basicProperty: 'SKILL_DMG',
    combatProperty: 'SKILL_DMG',
    basicGridColumn: 'SKILL',
    combatGridColumn: 'SKILL',
    isComputedRating: true,
  },
  ULT: {
    key: 'ULT',
    gpuProperty: 'ULT_DMG',
    basicProperty: 'ULT_DMG',
    combatProperty: 'ULT_DMG',
    basicGridColumn: 'ULT',
    combatGridColumn: 'ULT',
    isComputedRating: true,
  },
  FUA: {
    key: 'FUA',
    gpuProperty: 'FUA_DMG',
    basicProperty: 'FUA_DMG',
    combatProperty: 'FUA_DMG',
    basicGridColumn: 'FUA',
    combatGridColumn: 'FUA',
    isComputedRating: true,
  },
  DOT: {
    key: 'DOT',
    gpuProperty: 'DOT_DMG',
    basicProperty: 'DOT_DMG',
    combatProperty: 'DOT_DMG',
    basicGridColumn: 'DOT',
    combatGridColumn: 'DOT',
    isComputedRating: true,
  },
  BREAK: {
    key: 'BREAK',
    gpuProperty: 'BREAK_DMG',
    basicProperty: 'BREAK_DMG',
    combatProperty: 'BREAK_DMG',
    basicGridColumn: 'BREAK',
    combatGridColumn: 'BREAK',
    isComputedRating: true,
  },
  COMBO: {
    key: 'COMBO',
    gpuProperty: 'COMBO_DMG',
    basicProperty: 'COMBO_DMG',
    combatProperty: 'COMBO_DMG',
    basicGridColumn: 'COMBO',
    combatGridColumn: 'COMBO',
    isComputedRating: true,
  },
}
