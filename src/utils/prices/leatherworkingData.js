import coarse from '../../assets/icons/coarseleather.png';
import rugged from '../../assets/icons/ruggedleather.png';
import layered from '../../assets/icons/layeredleather.png';
import infused from '../../assets/icons/infusedleather.png';
import runic from '../../assets/icons/runicleather.png';
import rawhide from '../../assets/icons/rawhide.png';
import thickhide from '../../assets/icons/thickhide.png';
import ironhide from '../../assets/icons/ironhide.png';
import tannin from '../../assets/icons/tannin.png';
import smolderhide from '../../assets/icons/smolderhide.png';
import scarhide from '../../assets/icons/scarhide.png';

export const leatherworkingData = [
  {
    title: 'rawhide',
    cost: 0.30,
    id: 'ltr1',
    raw: false,
    img: rawhide,
    ingridients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'thick hide',
    cost: 0.62,
    id: 'ltr2',
    raw: false,
    img: thickhide,
    ingridients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'iron hide',
    cost: 0.38,
    id: 'ltr3',
    raw: false,
    img: ironhide,
    ingridients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'tannin',
    cost: 0.20,
    id: 'ltr4',
    raw: false,
    img: tannin,
    ingridients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'Coarse leather',
    cost: 1.35,
    id: 'ltr5',
    raw: true,
    img: coarse,
    ingridients: [
      {
        unit: 'rawhide',
        amount: '4'
      }
    ]
  },
  {
    title: 'Rugged leather',
    cost: 2.75,
    id: 'ltr6',
    raw: true,
    img: rugged,
    ingridients: [
      {
        unit: 'coarse leather',
        amount: '4'
      },
      {
        unit: 'tannin',
        amount: '1'
      }
    ]
  },
  {
    title: 'Layered leather',
    cost: 6.00,
    id: 'ltr7',
    raw: true,
    img: layered,
    ingridients: [
      {
        unit: 'thick hide',
        amount: '6'
      },
      {
        unit: 'rugged leather',
        amount: '2'
      },
      {
        unit: 'tannin',
        amount: '1'
      }
    ]
  },
  {
    title: 'Infused leather',
    cost: 14.00,
    id: 'ltr8',
    raw: true,
    img: infused,
    ingridients: [
      {
        unit: 'iron hide',
        amount: '8'
      },
      {
        unit: 'layered leather',
        amount: '2'
      },
      {
        unit: 'tannin',
        amount: '1'
      }
    ]
  },
  {
    title: 'Smolderhide',
    cost: 15.00,
    id: 'ltr9',
    raw: false,
    img: smolderhide,
    ingridients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'Scarhide',
    cost: 14.50,
    id: 'ltr10',
    raw: false,
    img: scarhide,
    ingridients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'Runic leather',
    cost: 170.50,
    id: 'ltr11',
    raw: true,
    img: runic,
    ingridients: [
      {
        unit: 'infused leather',
        amount: '5'
      },
      {
        unit: 'smolderhide',
        amount: '1'
      },
      {
        unit: 'scarhide',
        amount: '1'
      },
      {
        unit: 'tannin',
        amount: '1'
      }
    ]
  }
]