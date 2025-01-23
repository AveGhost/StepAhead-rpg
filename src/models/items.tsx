export enum ItemStatistics {
    attackSpeed = 'attackSpeed',
    damage = 'damage',
    arrmor = 'arrmor',
    evasion = 'evasion',
    strength = 'strength',
    dexterity = 'dexterity',
    endurance = 'endurance',
    luck = 'luck'
}
export interface Item extends ItemArrmor, ItemWeapon {
    name: string
    image: string
    type: string
    isEquipped?: boolean
    stats?: {name: ItemStatistics, value: number}[]
    price?: number
}

export interface ItemArrmor {
    evasion?: number
    arrmor?: number
}

export interface ItemWeapon {
    damage?: number
    attackSpeed?: number
}