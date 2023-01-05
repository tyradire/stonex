import green from '../../assets/icons/greenwood.png';
import aged from '../../assets/icons/agedwood.png';
import wyrdwood from '../../assets/icons/wyrdwood.png';
import ironwood from '../../assets/icons/ironwood.png';
import sandpaper from '../../assets/icons/sandpaper.png';
import timber from '../../assets/icons/timber.png';
import lumber from '../../assets/icons/lumber.png';
import wyrdwoodPl from '../../assets/icons/wyrdwoodplanks.png';
import ironwoodPl from '../../assets/icons/ironwoodplanks.png';
import wildwood from '../../assets/icons/wildwood.png';
import barbvine from '../../assets/icons/barbvine.png';
import glittering from '../../assets/icons/glitteringebony.png';

export const woodworkingData = [
  {
    title: 'green wood',
    cost: 0.18,
    id: 'woo1',
    raw: false,
    img: green,
    ingredients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'aged wood',
    cost: 0.18,
    id: 'woo2',
    raw: false,
    img: aged,
    ingredients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'wyrdwood',
    cost: 1.85,
    id: 'woo3',
    raw: false,
    img: wyrdwood,
    ingredients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'ironwood',
    cost: 1.55,
    id: 'woo4',
    raw: false,
    img: ironwood,
    ingredients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'sandpaper',
    cost: 0.25,
    id: 'woo5',
    raw: false,
    img: sandpaper,
    ingredients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'timber',
    cost: 0.80,
    id: 'woo6',
    raw: true,
    img: timber,
    ingredients: [
      {
        unit: 'green wood',
        amount: '4'
      }
    ]
  },
  {
    title: 'lumber',
    cost: 1.25,
    id: 'woo7',
    raw: true,
    img: lumber,
    ingredients: [
      {
        unit: 'aged wood',
        amount: '4'
      },
      {
        unit: 'timber',
        amount: '2'
      },
      {
        unit: 'sandpaper',
        amount: '1'
      }
    ]
  },
  {
    title: 'wyrdwood planks',
    cost: 12.00,
    id: 'woo8',
    raw: true,
    img: wyrdwoodPl,
    ingredients: [
      {
        unit: 'wyrdwood',
        amount: '6'
      },
      {
        unit: 'lumber',
        amount: '2'
      },
      {
        unit: 'sandpaper',
        amount: '1'
      }
    ]
  },
  {
    title: 'ironwood planks',
    cost: 23.00,
    id: 'woo9',
    raw: true,
    img: ironwoodPl,
    ingredients: [
      {
        unit: 'ironwood',
        amount: '8'
      },
      {
        unit: 'wyrdwood planks',
        amount: '2'
      },
      {
        unit: 'sandpaper',
        amount: '1'
      }
    ]
  },
  {
    title: 'wildwood',
    cost: 8.50,
    id: 'woo10',
    raw: false,
    img: wildwood,
    ingredients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'barbvine',
    cost: 9.00,
    id: 'woo11',
    raw: false,
    img: barbvine,
    ingredients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'glittering ebony',
    cost: 175.00,
    id: 'woo12',
    raw: true,
    img: glittering,
    ingredients: [
      {
        unit: 'ironwood planks',
        amount: '5'
      },
      {
        unit: 'wildwood',
        amount: '1'
      },
      {
        unit: 'barbvine',
        amount: '1'
      },
      {
        unit: 'sandpaper',
        amount: '1'
      }
    ]
  }
]