import fibers from '../../assets/icons/fibers.png';
import silkthreads from '../../assets/icons/silkthreads.png';
import wirefiber from '../../assets/icons/wirefiber.png';
import wireweave from '../../assets/icons/wireweave.png';
import linen from '../../assets/icons/linen.png';
import sateen from '../../assets/icons/sateen.png';
import silk from '../../assets/icons/silk.png';
import infused from '../../assets/icons/infusedsilk.png';
import scalecloth from '../../assets/icons/scalecloth.png';
import blisterweave from '../../assets/icons/blisterweave.png';
import phoenixweave from '../../assets/icons/phoenixweave.png';

export const weavingData = [
  {
    title: 'fibers',
    cost: 0.38,
    id: 'fib1',
    raw: false,
    img: fibers,
    ingridients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'silk threads',
    cost: 1.25,
    id: 'fib2',
    raw: false,
    img: silkthreads,
    ingridients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'wirefiber',
    cost: 0.85,
    id: 'fib3',
    raw: false,
    img: wirefiber,
    ingridients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'wireweave',
    cost: 0.05,
    id: 'fib4',
    raw: false,
    img: wireweave,
    ingridients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'linen',
    cost: 1.65,
    id: 'fib5',
    raw: true,
    img: linen,
    ingridients: [
      {
        unit: 'fibers',
        amount: '4'
      }
    ]
  },
  {
    title: 'sateen',
    cost: 2.15,
    id: 'fib6',
    raw: true,
    img: sateen,
    ingridients: [
      {
        unit: 'linen',
        amount: '4'
      },
      {
        unit: 'wireweave',
        amount: '1'
      }
    ]
  },
  {
    title: 'silk',
    cost: 7.15,
    id: 'fib7',
    raw: true,
    img: silk,
    ingridients: [
      {
        unit: 'silk threads',
        amount: '6'
      },
      {
        unit: 'sateen',
        amount: '2'
      },
      {
        unit: 'wireweave',
        amount: '1'
      }
    ]
  },
  {
    title: 'infused silk',
    cost: 17.75,
    id: 'fib8',
    raw: true,
    img: infused,
    ingridients: [
      {
        unit: 'wirefiber',
        amount: '8'
      },
      {
        unit: 'silk',
        amount: '2'
      },
      {
        unit: 'wireweave',
        amount: '1'
      }
    ]
  },
  {
    title: 'scalecloth',
    cost: 19.00,
    id: 'fib9',
    raw: false,
    img: scalecloth,
    ingridients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'blisterweave',
    cost: 19.15,
    id: 'fib10',
    raw: false,
    img: blisterweave,
    ingridients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'phoenixweave',
    cost: 155.25,
    id: 'fib11',
    raw: true,
    img: phoenixweave,
    ingridients: [
      {
        unit: 'infused silk',
        amount: '5'
      },
      {
        unit: 'scalecloth',
        amount: '1'
      },
      {
        unit: 'blisterweave',
        amount: '1'
      },
      {
        unit: 'wireweave',
        amount: '1'
      }
    ]
  }
]