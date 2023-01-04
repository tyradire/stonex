import charcoal from '../../assets/icons/charcoal.png';
import ironOre from '../../assets/icons/ironore.png';
import silverOre from '../../assets/icons/silverore.png';
import goldOre from '../../assets/icons/goldore.png';
import platinumOre from '../../assets/icons/platinumore.png';
import starmetalOre from '../../assets/icons/starmetalore.png';
import orichalcumOre from '../../assets/icons/orichalcumore.png';
import flux from '../../assets/icons/flux.png';
import ironIngot from '../../assets/icons/ironingot.png';
import silverIngot from '../../assets/icons/silveringot.png';
import steelIngot from '../../assets/icons/steelingot.png';
import goldIngot from '../../assets/icons/goldingot.png';
import platinumIngot from '../../assets/icons/platinumingot.png';
import starmetalIngot from '../../assets/icons/starmetalingot.png';
import orichalcumIngot from '../../assets/icons/orichalcumingot.png';
import tolvium from '../../assets/icons/tolvium.png';
import cinnabar from '../../assets/icons/cinnabar.png';
import asmodeum from '../../assets/icons/asmodeumingot.png';

export const smeltingData = [
  {
    title: 'charcoal',
    cost: 0.38,
    id: 'sml1',
    raw: true,
    img: charcoal,
    ingridients: [
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
    ingridients: [
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
    ingridients: [
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
    ingridients: [
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
    ingridients: [
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
    ingridients: [
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
    ingridients: [
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
    ingridients: [
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
    ingridients: [
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
    ingridients: [
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
    ingridients: [
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
    ingridients: [
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
    ingridients: [
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
    ingridients: [
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
    ingridients: [
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
    ingridients: [
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
    ingridients: [
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
    ingridients: [
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