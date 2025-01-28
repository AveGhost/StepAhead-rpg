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
    id?: string
    name: string
    image: string
    type: string
    isEquipped?: boolean
    stats?: {name: ItemStatistics, value: number}[]
    price?: number
    isOnSale?: boolean
    rarity?: string
}

export interface ItemArrmor {
    evasion?: number
    arrmor?: number
}

export interface ItemWeapon {
    damage?: number
    attackSpeed?: number
}