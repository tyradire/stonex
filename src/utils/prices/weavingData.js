import fibers from '../../assets/icons/fibers.webp';
import silkthreads from '../../assets/icons/silkthreads.webp';
import wirefiber from '../../assets/icons/wirefiber.webp';
import wireweave from '../../assets/icons/wireweave.webp';
import linen from '../../assets/icons/linen.webp';
import sateen from '../../assets/icons/sateen.webp';
import silk from '../../assets/icons/silk.webp';
import infused from '../../assets/icons/infusedsilk.webp';
import scalecloth from '../../assets/icons/scalecloth.webp';
import blisterweave from '../../assets/icons/blisterweave.webp';
import phoenixweave from '../../assets/icons/phoenixweave.webp';

export const weavingData = [
  {
    title: 'fibers',
    cost: 0.38,
    id: 'fib1',
    raw: false,
    img: fibers,
    ingredients: [
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
    ingredients: [
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
    ingredients: [
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
    ingredients: [
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
    ingredients: [
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
    ingredients: [
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
    ingredients: [
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
    ingredients: [
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
    ingredients: [
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
    ingredients: [
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
    ingredients: [
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