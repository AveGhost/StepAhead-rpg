import { Enemy } from "../models/characters"
import { nanoid } from "nanoid"
import { ItemDrop } from "../mixins/itemDrop"
import { getRandomModifier } from "../mixins/getRandomModifier"

const hpValue = getRandomModifier(100,200)

export const mediumLvlEnemies: Enemy[] = [
  {
    "id": nanoid(),
    "name": "Goblin Grunt",
    "position": { "x": Math.floor(Math.random() * 80), "y": Math.floor(Math.random() * 80) },
    "model": "./monsters/18.png",
    "hp": hpValue,
    "maxHp": hpValue,
    "lvl": getRandomModifier(10,30),
    "luck": getRandomModifier(3,15),
    "arrmor": getRandomModifier(5,35),
    "attackSpeed": getRandomModifier(1,5),
    "evasion": getRandomModifier(3,35),
    "damage": getRandomModifier(15,75),
    "exp": getRandomModifier(40,200),
    "gold": getRandomModifier(15,80),
    "item": ItemDrop()
  },
  {
    "id": nanoid(),
    "name": "Cave Spider",
    "position": { "x": Math.floor(Math.random() * 80), "y": Math.floor(Math.random() * 80) },
    "model": "./monsters/21.png",
    "hp": hpValue,
    "maxHp": hpValue,
    "lvl": getRandomModifier(10,30),
    "luck": getRandomModifier(3,15),
    "arrmor": getRandomModifier(5,35),
    "attackSpeed": getRandomModifier(1,5),
    "evasion": getRandomModifier(3,35),
    "damage": getRandomModifier(15,75),
    "exp": getRandomModifier(40,200),
    "gold": getRandomModifier(15,80),
    "item": ItemDrop()
  },
  {
    "id": nanoid(),
    "name": "Forest Troll",
    "position": { "x": Math.floor(Math.random() * 80), "y": Math.floor(Math.random() * 80) },
    "model": "./monsters/29.png",
    "hp": hpValue,
    "maxHp": hpValue,
    "lvl": getRandomModifier(10,30),
    "luck": getRandomModifier(3,15),
    "arrmor": getRandomModifier(5,35),
    "attackSpeed": getRandomModifier(1,5),
    "evasion": getRandomModifier(3,35),
    "damage": getRandomModifier(15,75),
    "exp": getRandomModifier(40,200),
    "gold": getRandomModifier(15,80),
    "item": ItemDrop()
  },
  {
    "id": nanoid(),
    "name": "Shadow Wraith",
    "position": { "x": Math.floor(Math.random() * 80), "y": Math.floor(Math.random() * 80) },
    "model": "./monsters/38.png",
    "hp": hpValue,
    "maxHp": hpValue,
    "lvl": getRandomModifier(10,30),
    "luck": getRandomModifier(3,15),
    "arrmor": getRandomModifier(5,35),
    "attackSpeed": getRandomModifier(1,5),
    "evasion": getRandomModifier(3,35),
    "damage": getRandomModifier(15,75),
    "exp": getRandomModifier(40,200),
    "gold": getRandomModifier(15,80),
    "item": ItemDrop()
  },
  {
    "id": nanoid(),
    "name": "Fire Imp",
    "position": { "x": Math.floor(Math.random() * 80), "y": Math.floor(Math.random() * 80) },
    "model": "./monsters/60.png",
    "hp": hpValue,
    "maxHp": hpValue,
    "lvl": getRandomModifier(10,30),
    "luck": getRandomModifier(3,15),
    "arrmor": getRandomModifier(5,35),
    "attackSpeed": getRandomModifier(1,5),
    "evasion": getRandomModifier(3,35),
    "damage": getRandomModifier(15,75),
    "exp": getRandomModifier(40,200),
    "gold": getRandomModifier(15,80),
    "item": ItemDrop()
  },
  {
    "id": nanoid(),
    "name": "Swamp Serpent",
    "position": { "x": Math.floor(Math.random() * 80), "y": Math.floor(Math.random() * 80) },
    "model": "./monsters/64.png",
    "hp": hpValue,
    "maxHp": hpValue,
    "lvl": getRandomModifier(10,30),
    "luck": getRandomModifier(3,15),
    "arrmor": getRandomModifier(5,35),
    "attackSpeed": getRandomModifier(1,5),
    "evasion": getRandomModifier(3,35),
    "damage": getRandomModifier(15,75),
    "exp": getRandomModifier(40,200),
    "gold": getRandomModifier(15,80),
    "item": ItemDrop()
  },
  {
    "id": nanoid(),
    "name": "Ice Golem",
    "position": { "x": Math.floor(Math.random() * 80), "y": Math.floor(Math.random() * 80) },
    "model": "./monsters/66.png",
    "hp": hpValue,
    "maxHp": hpValue,
    "lvl": getRandomModifier(10,30),
    "luck": getRandomModifier(3,15),
    "arrmor": getRandomModifier(5,35),
    "attackSpeed": getRandomModifier(1,5),
    "evasion": getRandomModifier(3,35),
    "damage": getRandomModifier(15,75),
    "exp": getRandomModifier(40,200),
    "gold": getRandomModifier(15,80),
    "item": ItemDrop()
  },
  {
    "id": nanoid(),
    "name": "Venomous Bat",
    "position": { "x": Math.floor(Math.random() * 80), "y": Math.floor(Math.random() * 80) },
    "model": "./monsters/79.png",
    "hp": hpValue,
    "maxHp": hpValue,
    "lvl": getRandomModifier(10,30),
    "luck": getRandomModifier(3,15),
    "arrmor": getRandomModifier(5,35),
    "attackSpeed": getRandomModifier(1,5),
    "evasion": getRandomModifier(3,35),
    "damage": getRandomModifier(15,75),
    "exp": getRandomModifier(40,200),
    "gold": getRandomModifier(15,80),
    "item": ItemDrop()
  },
  {
    "id": nanoid(),
    "name": "Lava Beast",
    "position": { "x": Math.floor(Math.random() * 80), "y": Math.floor(Math.random() * 80) },
    "model": "./monsters/96.png",
    "hp": hpValue,
    "maxHp": hpValue,
    "lvl": getRandomModifier(10,30),
    "luck": getRandomModifier(3,15),
    "arrmor": getRandomModifier(5,35),
    "attackSpeed": getRandomModifier(1,5),
    "evasion": getRandomModifier(3,35),
    "damage": getRandomModifier(15,75),
    "exp": getRandomModifier(40,200),
    "gold": getRandomModifier(15,80),
    "item": ItemDrop()
  },
  {
    "id": nanoid(),
    "name": "Dark Sorcerer",
    "position": { "x": Math.floor(Math.random() * 80), "y": Math.floor(Math.random() * 80) },
    "model": "./monster.png",
    "hp": hpValue,
    "maxHp": hpValue,
    "lvl": getRandomModifier(10,30),
    "luck": getRandomModifier(3,15),
    "arrmor": getRandomModifier(5,35),
    "attackSpeed": getRandomModifier(1,5),
    "evasion": getRandomModifier(3,35),
    "damage": getRandomModifier(15,75),
    "exp": getRandomModifier(40,200),
    "gold": getRandomModifier(15,80),
    "item": ItemDrop()
  },
  {
    "id": nanoid(),
    "name": "Thunder Beast",
    "position": { "x": Math.floor(Math.random() * 80), "y": Math.floor(Math.random() * 80) },
    "model": "./monster.png",
    "hp": hpValue,
    "maxHp": hpValue,
    "lvl": getRandomModifier(10,30),
    "luck": getRandomModifier(3,15),
    "arrmor": getRandomModifier(5,35),
    "attackSpeed": getRandomModifier(1,5),
    "evasion": getRandomModifier(3,35),
    "damage": getRandomModifier(15,75),
    "exp": getRandomModifier(40,200),
    "gold": getRandomModifier(15,80),
    "item": ItemDrop()
  },
  {
    "id": nanoid(),
    "name": "Ancient Treant",
    "position": { "x": Math.floor(Math.random() * 80), "y": Math.floor(Math.random() * 80) },
    "model": "./monster.png",
    "hp": hpValue,
    "maxHp": hpValue,
    "lvl": getRandomModifier(10,30),
    "luck": getRandomModifier(3,15),
    "arrmor": getRandomModifier(5,35),
    "attackSpeed": getRandomModifier(1,5),
    "evasion": getRandomModifier(3,35),
    "damage": getRandomModifier(15,75),
    "exp": getRandomModifier(40,200),
    "gold": getRandomModifier(15,80),
    "item": ItemDrop()
  },
  {
    "id": nanoid(),
    "name": "Plague Rat",
    "position": { "x": Math.floor(Math.random() * 80), "y": Math.floor(Math.random() * 80) },
    "model": "./monster.png",
    "hp": hpValue,
    "maxHp": hpValue,
    "lvl": getRandomModifier(10,30),
    "luck": getRandomModifier(3,15),
    "arrmor": getRandomModifier(5,35),
    "attackSpeed": getRandomModifier(1,5),
    "evasion": getRandomModifier(3,35),
    "damage": getRandomModifier(15,75),
    "exp": getRandomModifier(40,200),
    "gold": getRandomModifier(15,80),
    "item": ItemDrop()
  },
  {
    "id": nanoid(),
    "name": "Crystal Guardian",
    "position": { "x": Math.floor(Math.random() * 80), "y": Math.floor(Math.random() * 80) },
    "model": "./monster.png",
    "hp": hpValue,
    "maxHp": hpValue,
    "lvl": getRandomModifier(10,30),
    "luck": getRandomModifier(3,15),
    "arrmor": getRandomModifier(5,35),
    "attackSpeed": getRandomModifier(1,5),
    "evasion": getRandomModifier(3,35),
    "damage": getRandomModifier(15,75),
    "exp": getRandomModifier(40,200),
    "gold": getRandomModifier(15,80),
    "item": ItemDrop()
  },
  {
    "id": nanoid(),
    "name": "Necrotic Revenant",
    "position": { "x": Math.floor(Math.random() * 80), "y": Math.floor(Math.random() * 80) },
    "model": "./monster.png",
    "hp": hpValue,
    "maxHp": hpValue,
    "lvl": getRandomModifier(10,30),
    "luck": getRandomModifier(3,15),
    "arrmor": getRandomModifier(5,35),
    "attackSpeed": getRandomModifier(1,5),
    "evasion": getRandomModifier(3,35),
    "damage": getRandomModifier(15,75),
    "exp": getRandomModifier(40,200),
    "gold": getRandomModifier(15,80),
    "item": ItemDrop()
  }
]
