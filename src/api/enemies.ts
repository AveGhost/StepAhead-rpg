import { Enemy } from "../models/characters"
import { nanoid } from "nanoid"
export const enemies: Enemy[] = [
    {
      id: nanoid(),
      name: 'Enemy 1',
      position: { x: Math.floor(Math.random() *  90), y: Math.floor(Math.random() *  90)},
      model: './monster.png',
      hp: 100,
      maxHp: 100,
      lvl: 1
    },
    {
      id: nanoid(),
      name: 'Enemy 2',
      position: { x: Math.floor(Math.random() *  90), y: Math.floor(Math.random() *  90)},
      model: './monster.png',
      hp: 101,
      maxHp: 101,
      lvl: 1
    },
    {
      id: nanoid(),
      name: 'Enemy 3',
      position: { x: Math.floor(Math.random() *  90), y: Math.floor(Math.random() *  90)},
      model: './monster.png',
      hp: 102,
      maxHp: 102,
      lvl: 2
    },
    {
      id: nanoid(),
      name: 'Enemy 4',
      position: { x: Math.floor(Math.random() *  90), y: Math.floor(Math.random() *  90)},
      model: './monster.png',
      hp: 103,
      maxHp: 103,
      lvl: 2
    },
    {
      id: nanoid(),
      name: 'Enemy 5',
      position: { x: Math.floor(Math.random() *  90), y: Math.floor(Math.random() *  90)},
      model: './monster.png',
      hp: 104,
      maxHp: 104,
      lvl: 3
    },
    {
      id: nanoid(),
      name: 'Enemy 6',
      position: { x: Math.floor(Math.random() *  90), y: Math.floor(Math.random() *  90)},
      model: './monster.png',
      hp: 105,
      maxHp: 105,
      lvl: 3
    },
    {
      id: nanoid(),
      name: 'Enemy 7',
      position: { x: Math.floor(Math.random() *  90), y: Math.floor(Math.random() *  90)},
      model: './monster.png',
      hp: 106,
      maxHp: 106,
      lvl: 3
    },
    {
      id: nanoid(),
      name: 'Enemy 8',
      position: { x: Math.floor(Math.random() *  90), y: Math.floor(Math.random() *  90)},
      model: './monster.png',
      hp: 107,
      maxHp: 107,
      lvl: 4
    },
    { 
      id: nanoid(),
      name: 'Enemy 9',
      position: { x: Math.floor(Math.random() *  90), y: Math.floor(Math.random() *  90)},
      model: './monster.png',
      hp: 107,
      maxHp: 107,
      lvl: 4
    },
]