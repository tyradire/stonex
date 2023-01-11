import charcoal from '../../assets/icons/charcoal.webp';
import ironOre from '../../assets/icons/ironore.webp';
import silverOre from '../../assets/icons/silverore.webp';
import goldOre from '../../assets/icons/goldore.webp';
import platinumOre from '../../assets/icons/platinumore.webp';
import starmetalOre from '../../assets/icons/starmetalore.webp';
import orichalcumOre from '../../assets/icons/orichalcumore.webp';
import flux from '../../assets/icons/flux.webp';
import ironIngot from '../../assets/icons/ironingot.webp';
import silverIngot from '../../assets/icons/silveringot.webp';
import steelIngot from '../../assets/icons/steelingot.webp';
import goldIngot from '../../assets/icons/goldingot.webp';
import platinumIngot from '../../assets/icons/platinumingot.webp';
import starmetalIngot from '../../assets/icons/starmetalingot.webp';
import orichalcumIngot from '../../assets/icons/orichalcumingot.webp';
import tolvium from '../../assets/icons/tolvium.webp';
import cinnabar from '../../assets/icons/cinnabar.webp';
import asmodeum from '../../assets/icons/asmodeumingot.webp';

export const smeltingData = [
  {
    title: 'charcoal',
    cost: 0.38,
    id: 'sml1',
    raw: true,
    img: charcoal,
    ingredients: [
      {
        unit: 'any wood',
        amount: '2'
      }
    ]
  },
  {
    title: 'iron ore',
    cost: 0.50,
    id: 'sml2',
    raw: false,
    img: ironOre,
    ingredients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'silver ore',
    cost: 0.27,
    id: 'sml3',
    raw: false,
    img: silverOre,
    ingredients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'gold ore',
    cost: 0.55,
    id: 'sml4',
    raw: false,
    img: goldOre,
    ingredients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'platinum ore',
    cost: 0.75,
    id: 'sml5',
    raw: false,
    img: platinumOre,
    ingredients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'starmetal ore',
    cost: 0.95,
    id: 'sml6',
    raw: false,
    img: starmetalOre,
    ingredients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'orichalcum ore',
    cost: 1.39,
    id: 'sml7',
    raw: false,
    img: orichalcumOre,
    ingredients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'flux',
    cost: 0.28,
    id: 'sml8',
    raw: false,
    img: flux,
    ingredients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'iron ingot',
    cost: 1.65,
    id: 'sml9',
    raw: true,
    img: ironIngot,
    ingredients: [
      {
        unit: 'iron ore',
        amount: '4'
      }
    ]
  },
  {
    title: 'silver ingot',
    cost: 0.55,
    id: 'sml10',
    raw: true,
    img: silverIngot,
    ingredients: [
      {
        unit: 'silver ore',
        amount: '4'
      }
    ]
  },
  {
    title: 'steel ingot',
    cost: 3.20,
    id: 'sml11',
    raw: true,
    img: steelIngot,
    ingredients: [
      {
        unit: 'iron ingot',
        amount: '3'
      },
      {
        unit: 'charcoal',
        amount: '2'
      },
      {
        unit: 'flux',
        amount: '1'
      }
    ]
  },
  {
    title: 'gold ingot',
    cost: 2.40,
    id: 'sml12',
    raw: true,
    img: goldIngot,
    ingredients: [
      {
        unit: 'gold ore',
        amount: '5'
      },
      {
        unit: 'silver ingot',
        amount: '2'
      },
      {
        unit: 'flux',
        amount: '1'
      }
    ]
  },
  {
    title: 'platinum ingot',
    cost: 5.90,
    id: 'sml13',
    raw: true,
    img: platinumIngot,
    ingredients: [
      {
        unit: 'platinum ore',
        amount: '6'
      },
      {
        unit: 'gold ingot',
        amount: '2'
      },
      {
        unit: 'flux',
        amount: '1'
      }
    ]
  },
  {
    title: 'starmetal ingot',
    cost: 10.64,
    id: 'sml14',
    raw: true,
    img: starmetalIngot,
    ingredients: [
      {
        unit: 'starmetal ore',
        amount: '6'
      },
      {
        unit: 'steel ingot',
        amount: '2'
      },
      {
        unit: 'charcoal',
        amount: '2'
      },
      {
        unit: 'flux',
        amount: '1'
      }
    ]
  },
  {
    title: 'orichalcum ingot',
    cost: 22.50,
    id: 'sml15',
    raw: true,
    img: orichalcumIngot,
    ingredients: [
      {
        unit: 'orichalcum ore',
        amount: '8'
      },
      {
        unit: 'starmetal ingot',
        amount: '2'
      },
      {
        unit: 'charcoal',
        amount: '2'
      },
      {
        unit: 'flux',
        amount: '1'
      }
    ]
  },
  {
    title: 'tolvium',
    cost: 18.50,
    id: 'sml16',
    raw: false,
    img: tolvium,
    ingredients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'cinnabar',
    cost: 18.50,
    id: 'sml17',
    raw: false,
    img: cinnabar,
    ingredients: [
      {
        unit: '',
        amount: ''
      }
    ]
  },
  {
    title: 'asmodeum ingot',
    cost: 225.50,
    id: 'sml18',
    raw: true,
    img: asmodeum,
    ingredients: [
      {
        unit: 'orichalcum ingot',
        amount: '5'
      },
      {
        unit: 'tolvium',
        amount: '1'
      },
      {
        unit: 'cinnabar',
        amount: '1'
      },
      {
        unit: 'charcoal',
        amount: '2'
      },
      {
        unit: 'flux',
        amount: '1'
      }
    ]
  },
]