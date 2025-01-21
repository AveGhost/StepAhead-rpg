export interface Item {
    name: string
    image: string
    type: string
    isEquipped?: boolean
    stats?: {name: string, value: number | string}[]
}