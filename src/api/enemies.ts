import { Enemy } from "../models/characters"
export const enemies: Enemy[] = [
    {
      id: '1',
      name: 'Enemy 1',
      position: { x: Math.floor(Math.random() *  90), y: Math.floor(Math.random() *  90)},
      model: './monster.png',
      hp: 100,
      maxHp: 100,
      lvl: 1
    },
    {
      id: '2',
      name: 'Enemy 2',
      position: { x: Math.floor(Math.random() *  90), y: Math.floor(Math.random() *  90)},
      model: './monster.png',
      hp: 101,
      maxHp: 101,
      lvl: 1
    },
    {
      id: '3',
      name: 'Enemy 3',
      position: { x: Math.floor(Math.random() *  90), y: Math.floor(Math.random() *  90)},
      model: './monster.png',
      hp: 102,
      maxHp: 102,
      lvl: 2
    },
    {
      id: '4',
      name: 'Enemy 4',
      position: { x: Math.floor(Math.random() *  90), y: Math.floor(Math.random() *  90)},
      model: './monster.png',
      hp: 103,
      maxHp: 103,
      lvl: 2
    },
    {
      id: '5',
      name: 'Enemy 5',
      position: { x: Math.floor(Math.random() *  90), y: Math.floor(Math.random() *  90)},
      model: './monster.png',
      hp: 104,
      maxHp: 104,
      lvl: 3
    },
    {
      id: '6',
      name: 'Enemy 6',
      position: { x: Math.floor(Math.random() *  90), y: Math.floor(Math.random() *  90)},
      model: './monster.png',
      hp: 105,
      maxHp: 105,
      lvl: 3
    },
    {
      id: '7',
      name: 'Enemy 7',
      position: { x: Math.floor(Math.random() *  90), y: Math.floor(Math.random() *  90)},
      model: './monster.png',
      hp: 106,
      maxHp: 106,
      lvl: 3
    },
    {
      id: '8',
      name: 'Enemy 8',
      position: { x: Math.floor(Math.random() *  90), y: Math.floor(Math.random() *  90)},
      model: './monster.png',
      hp: 107,
      maxHp: 107,
      lvl: 4
    },
    { 
      id: '9',
      name: 'Enemy 9',
      position: { x: Math.floor(Math.random() *  90), y: Math.floor(Math.random() *  90)},
      model: './monster.png',
      hp: 107,
      maxHp: 107,
      lvl: 4
    },
]