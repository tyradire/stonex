import React, { useEffect, useState } from 'react';
import { ingotToHightTier, ingotToTopTier, oreToIngot, upToLegendaty } from '../utils/prices/formulas';
import { weavingData } from '../utils/prices/weavingData';
import SettingsPanel from '../components/SettingsPanel/SettingsPanel';
import SortedList from '../components/Tiers/SortedList';

import linen from '../assets/icons/linen.png';
import sateen from '../assets/icons/sateen.png';
import silk from '../assets/icons/silk.png';
import phoenixweave from '../assets/icons/phoenixweave.png';
import infusedSilk from '../assets/icons/infusedsilk.png';

import './Page.scss';

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
      <SettingsPanel icons={icons} toggleType={setType} titles={titles} type={type} />
      <p className='page__subtitle'>{type}</p>
      {
        type === 'Linen' &&
        <SortedList
          prices={[
            linenPrice,
            fibersToLinen
          ]}
          texts={[
            '- Price on trade post',
            '- Linen from Fibers'
          ]}
        />
      }
      {
        type === 'Sateen' && 
        <SortedList 
          prices={[
            sateenPrice,
            linenToSateen,
            fibersToSateen
          ]}
          texts={[
            '- Price on trade post',
            '- Sateen from Linen',
            '- Sateen from Fibers'
          ]}
        />
      }
      {
        type === 'Silk' && 
        <SortedList
          prices={[
            silkPrice,
            sateenToSilk,
            linenLeatherToSilk,
            fibersToSilk
          ]}
          texts={[
            '- Price on trade post',
            '- Silk from Sateen',
            '- Silk from Linen',
            '- Silk from Fibers'
          ]}
        />
      }
      {
        type === 'Infused Silk' && 
        <SortedList
          prices={[
            infusedSilkPrice,
            silkToInfusedSilk,
            sateenToInfusedSilk,
            linenToInfusedSilk,
            fibersToInfusedSilk
          ]}
          texts={[
            '- Price on trade post',
            '- Infused Silk from Silk',
            '- Infused Silk from Sateen',
            '- Infused Silk from Linen',
            '- Infused Silk from Fibers'
          ]}
        />
      }
      {
        type === 'Phoenixweave' && 
        <SortedList
          prices={[
            phoenixweavePrice,
            infusedToPhoenixweave,
            silkToPhoenixweave,
            sateenToPhoenixweave,
            linenToPhoenixweave,
            fibersToPhoenixweave
          ]}
          texts={[
            '- Price on trade post',
            '- Phoenixweave from Infused silk',
            '- Phoenixweave from Silk',
            '- Phoenixweave from Sateen',
            '- Phoenixweave from Linen',
            '- Phoenixweave from Fibers'
          ]}
        />
      }
    </div>
  )
}

export default Weaving