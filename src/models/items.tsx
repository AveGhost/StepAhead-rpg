export interface Item {
    name: string
    image: string
    type: string
    stats: {name: string, value: number | string}[]
}