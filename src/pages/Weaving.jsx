import React, { useEffect, useState } from 'react';
import SettingsPanel from '../components/SettingsPanel/SettingsPanel';
import { weavingData } from '../utils/prices/weavingData';
import linen from '../assets/icons/linen.png';
import sateen from '../assets/icons/sateen.png';
import silk from '../assets/icons/silk.png';
import phoenixweave from '../assets/icons/phoenixweave.png';
import infusedSilk from '../assets/icons/infusedsilk.png';
import scalecloth from '../assets/icons/scalecloth.png';
import blisterweave from '../assets/icons/blisterweave.png';
import { ingotToHightTier, ingotToNextLvl, ingotToTopTier, oreToIngot, upToLegendaty } from '../utils/prices/formulas';
import Tier1 from '../components/Tiers/Tier1';
import Tier2 from '../components/Tiers/Tier2';
import Tier3 from '../components/Tiers/Tier3';
import Tier4 from '../components/Tiers/Tier4';
import './Page.scss';
import TierLegendary from '../components/Tiers/TierLegendary';

const Weaving = () => {

  const [type, setType] = useState('Linen');

  const [wireweavePrice, setWireweavePrice] = useState(Number(weavingData[3].cost));

  const [fibersPrice, setFibersPrice] = useState(Number(weavingData[0].cost));
  const [silkThreadsPrice, setSilkThreadsPrice] = useState(Number(weavingData[1].cost));
  const [wirefiberPrice, setWirefiberPrice] = useState(Number(weavingData[2].cost));

  const [linenPrice, setLinenPrice] = useState(Number(weavingData[4].cost));
  const [sateenPrice, setSateenPrice] = useState(Number(weavingData[5].cost));
  const [silkPrice, setSilkPrice] = useState(Number(weavingData[6].cost));
  const [infusedSilkPrice, setInfusedSilkPrice] = useState(Number(weavingData[7].cost));
  const [phoenixweavePrice, setPhoenixweavePrice] = useState(Number(weavingData[10].cost));

  const [scaleclothPrice, setScaleclothPrice] = useState(Number(weavingData[8].cost));
  const [blisterweavePrice, setBlisterweavePrice] = useState(Number(weavingData[9].cost));

  const [itemsEquipped, setItemsEquipped] = useState((JSON.parse(localStorage.getItem('bonusItems')) || []).length);

  const icons = [
    linen,
    sateen,
    silk,
    infusedSilk,
    phoenixweave
  ]

  useEffect(() => {
    let fibersPrice = localStorage.getItem('fib1');
    let silkThreadsPrice = localStorage.getItem('fib2');
    let wirefiberPrice = localStorage.getItem('fib3');

    let linenPrice = localStorage.getItem('fib5');
    let sateenPrice = localStorage.getItem('fib6');
    let silkPrice = localStorage.getItem('fib7');
    let infusedSilkPrice = localStorage.getItem('fib8');
    let phoenixweavePrice = localStorage.getItem('fib11');

    let wireweavePrice = localStorage.getItem('fib4');
    let scaleclothPrice = localStorage.getItem('fib9');
    let blisterweavePrice = localStorage.getItem('fib10');

    setFibersPrice(Number(fibersPrice));
    setSilkThreadsPrice(Number(silkThreadsPrice));
    setWirefiberPrice(Number(wirefiberPrice));

    setLinenPrice(Number(linenPrice));
    setSateenPrice(Number(sateenPrice));
    setSilkPrice(Number(silkPrice));
    setInfusedSilkPrice(Number(infusedSilkPrice));
    setPhoenixweavePrice(Number(phoenixweavePrice));

    setWireweavePrice(Number(wireweavePrice));
    setScaleclothPrice(Number(scaleclothPrice));
    setBlisterweavePrice(Number(blisterweavePrice));
  },[])

  let fibersToLinen = oreToIngot(4,fibersPrice,itemsEquipped);

  let linenToSateen = oreToIngot(4,linenPrice,itemsEquipped);
  let fibersToSateen = oreToIngot(4,fibersToLinen,itemsEquipped);

  let sateenToSilk = ingotToHightTier(sateenPrice, silkThreadsPrice, 0, wireweavePrice, itemsEquipped);
  let linenLeatherToSilk = ingotToHightTier(linenToSateen, silkThreadsPrice, 0, wireweavePrice, itemsEquipped);
  let fibersToSilk = ingotToHightTier(fibersToSateen, silkThreadsPrice, 0, wireweavePrice, itemsEquipped);

  let silkToInfusedSilk = ingotToTopTier(silkPrice, wirefiberPrice, 0, wireweavePrice, itemsEquipped, 1.13);
  let sateenToInfusedSilk = ingotToTopTier(sateenToSilk, wirefiberPrice, 0, wireweavePrice, itemsEquipped, 1.13);
  let linenToInfusedSilk = ingotToTopTier(linenLeatherToSilk, wirefiberPrice, 0, wireweavePrice, itemsEquipped, 1.13);
  let fibersToInfusedSilk = ingotToTopTier(fibersToSilk, wirefiberPrice, 0, wireweavePrice, itemsEquipped, 1.13);

  let infusedToPhoenixweave = upToLegendaty(infusedSilkPrice, 0, wireweavePrice, scaleclothPrice, blisterweavePrice, itemsEquipped);
  let silkToPhoenixweave = upToLegendaty(silkToInfusedSilk, 0, wireweavePrice, scaleclothPrice, blisterweavePrice, itemsEquipped);
  let sateenToPhoenixweave = upToLegendaty(sateenToInfusedSilk, 0, wireweavePrice, scaleclothPrice, blisterweavePrice, itemsEquipped);
  let linenToPhoenixweave = upToLegendaty(linenToInfusedSilk, 0, wireweavePrice, scaleclothPrice, blisterweavePrice, itemsEquipped);
  let fibersToPhoenixweave = upToLegendaty(fibersToInfusedSilk, 0, wireweavePrice, scaleclothPrice, blisterweavePrice, itemsEquipped);

  const titles = [
    'Linen', 
    'Sateen', 
    'Silk', 
    'Infused Silk',
    'Phoenixweave'
  ]

  return (
    <div className='page'>
      <h2 className='page__title'>Weaving</h2>
      <SettingsPanel icons={icons} toggleType={setType} titles={titles} type={type} />
      <p>{type}</p>
      {
        type === 'Linen' &&
        <Tier1 
          tpPrice={linenPrice}
          price1={fibersToLinen}
          price1text={'- Linen from Fibers'}
        />
      }
      {
        type === 'Sateen' && 
        <Tier2 
          tpPrice={sateenPrice}
          price1={linenToSateen}
          price1text={'- Sateen from Linen'}
          price2={fibersToSateen}
          price2text={'- Sateen from Fibers'}
        />
      }
      {
        type === 'Silk' && 
        <Tier3
          tpPrice={silkPrice}
          price1={sateenToSilk}
          price1text={'- Silk from Sateen'}
          price2={linenLeatherToSilk}
          price2text={'- Silk from Linen'}
          price3={fibersToSilk}
          price3text={'- Silk from Fibers'}
        />
      }
      {
        type === 'Infused Silk' && 
        <Tier4 
          tpPrice={infusedSilkPrice} 
          price1={silkToInfusedSilk}
          price1text={'- Infused Silk from Silk'}
          price2={sateenToInfusedSilk}
          price2text={'- Infused Silk from Sateen'}
          price3={linenToInfusedSilk}
          price3text={'- Infused Silk from Linen'}
          price4={fibersToInfusedSilk}
          price4text={'- Infused Silk from Fibers'}
        />
      }
      {
        type === 'Phoenixweave' && 
        <TierLegendary 
          tpPrice={phoenixweavePrice} 
          price1={infusedToPhoenixweave}
          price1text={'- Phoenixweave from Infused silk'}
          price2={silkToPhoenixweave}
          price2text={'- Phoenixweave from Silk'}
          price3={sateenToPhoenixweave}
          price3text={'- Phoenixweave from Sateen'}
          price4={linenToPhoenixweave}
          price4text={'- Phoenixweave from Linen'}
          price5={fibersToPhoenixweave}
          price5text={'- Phoenixweave from Fibers'}
        />
      }
    </div>
  )
}

export default Weaving