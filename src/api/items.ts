import { Item } from "../models/items"
import { bows } from "./bows"
import { swords } from "./swords"
import { helmets } from "./helmets"
import { arrmors } from "./arrmors"
import { gloves } from "./gloves"
import { boots } from "./boots"

export const items: Item[] = [...bows, ...swords, ...helmets, ...arrmors, ...gloves, ...boots]