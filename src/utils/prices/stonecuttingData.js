import stone from '../../assets/icons/stone.png';
import lodestone from '../../assets/icons/lodestone.png';
import extra from '../../assets/icons/extralodestone.png';
import sandpaper from '../../assets/icons/sandpaper.png';
import stoneblock from '../../assets/icons/stoneblock.png';
import stonebrick from '../../assets/icons/stonebrick.png';
import lodestonebrick from '../../assets/icons/lodestonebrick.png';
import obsidian from '../../assets/icons/obsidianlodestone.png';
import rune from '../../assets/icons/runestone.png';

export const stonecuttingData = [
  {
    title: 'Stone',
    cost: 0.20,
    id: 'stn1',
    raw: false,
    img: stone,
    ingridients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'Lodestone',
    cost: 1.20,
    id: 'stn2',
    raw: false,
    img: lodestone,
    ingridients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'Extra lodestone',
    cost: 1.70,
    id: 'stn3',
    raw: false,
    img: extra,
    ingridients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'Sandpaper',
    cost: 0.05,
    id: 'stn4',
    raw: false,
    img: sandpaper,
    ingridients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'Stone block',
    cost: 0.60,
    id: 'stn5',
    raw: true,
    img: stoneblock,
    ingridients: [
      {
        unit: 'stone',
        amount: '4'
      }
    ]
  },
  {
    title: 'Stone brick',
    cost: 1.20,
    id: 'stn6',
    raw: true,
    img: stonebrick,
    ingridients: [
      {
        unit: 'stone block',
        amount: '4'
      },
      {
        unit: 'sandpaper',
        amount: '1'
      }
    ]
  },
  {
    title: 'Lodestone brick',
    cost: 6.50,
    id: 'stn7',
    raw: true,
    img: lodestonebrick,
    ingridients: [
      {
        unit: 'lodestone',
        amount: '6'
      },
      {
        unit: 'stone brick',
        amount: '2'
      },
      {
        unit: 'sandpaper',
        amount: '1'
      }
    ]
  },
  {
    title: 'Obsidian voidstone',
    cost: 36.35,
    id: 'stn8',
    raw: true,
    img: obsidian,
    ingridients: [
      {
        unit: 'lodestone brick',
        amount: '8'
      },
      {
        unit: 'lodestone',
        amount: '2'
      },
      {
        unit: 'sandpaper',
        amount: '1'
      },
      {
        unit: 'extra lodestone',
        amount: '1'
      }
    ]
  },
  {
    title: 'Runestone',
    cost: 122.00,
    id: 'stn9',
    raw: true,
    img: rune,
    ingridients: [
      {
        unit: 'obsidian voidstone',
        amount: '5'
      },
      {
        unit: 'sandpaper',
        amount: '1'
      },
      {
        unit: 'extra lodestone',
        amount: '1'
      }
    ]
  }
]