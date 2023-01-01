import React, { useEffect, useState } from 'react';
import { upToThirdStage, upToSecondStage, upToFourthStage, upToFirstStage, upToLegendaty } from '../utils/prices/formulas';
import { leatherworkingData } from '../utils/prices/leatherworkingData';
import SettingsPanel from '../components/SettingsPanel/SettingsPanel';
import SortedList from '../components/Tiers/SortedList';

import coarse from '../assets/icons/coarseleather.png';
import rugged from '../assets/icons/ruggedleather.png';
import layered from '../assets/icons/layeredleather.png';
import infused from '../assets/icons/infusedleather.png';
import runic from '../assets/icons/runicleather.png';

import './Page.scss';
import localforage from 'localforage';

const Leatherworking = () => {

  const [type, setType] = useState('Coarse');

  const [tanninPrice, setTanninPrice] = useState(Number(leatherworkingData[3].cost));

  const [rawhidePrice, setRawhidePrice] = useState(Number(leatherworkingData[0].cost));
  const [thickhidePrice, setThickPrice] = useState(Number(leatherworkingData[1].cost));
  const [ironPrice, setIronPrice] = useState(Number(leatherworkingData[2].cost));

  const [coarsePrice, setCoarsePrice] = useState(Number(leatherworkingData[4].cost));
  const [ruggedPrice, setRuggedPrice] = useState(Number(leatherworkingData[5].cost));
  const [layeredPrice, setLayeredPrice] = useState(Number(leatherworkingData[6].cost));
  const [infusedPrice, setInfusedPrice] = useState(Number(leatherworkingData[7].cost));
  const [runicPrice, setRunicPrice] = useState(Number(leatherworkingData[10].cost));

  const [smolderhidePrice, setSmolderhidePrice] = useState(Number(leatherworkingData[8].cost));
  const [scarhidePrice, setScarhidePrice] = useState(Number(leatherworkingData[9].cost));

  const [itemsEquipped, setItemsEquipped] = useState((JSON.parse(localStorage.getItem('bonusItems')) || []).length);

  const icons = [
    coarse,
    rugged,
    layered,
    infused,
    runic
  ]

  useEffect(() => {
    localforage.getItem('Leatherworking').then(function(value) {
      setRawhidePrice(Number((value.filter(el => el.id === 'ltr1')[0].cost)));
      setThickPrice(Number((value.filter(el => el.id === 'ltr2')[0].cost)));
      setIronPrice(Number((value.filter(el => el.id === 'ltr3')[0].cost)));
  
      setCoarsePrice(Number((value.filter(el => el.id === 'ltr5')[0].cost)));
      setRuggedPrice(Number((value.filter(el => el.id === 'ltr6')[0].cost)));
      setLayeredPrice(Number((value.filter(el => el.id === 'ltr7')[0].cost)));
      setInfusedPrice(Number((value.filter(el => el.id === 'ltr8')[0].cost)));
      setRunicPrice(Number((value.filter(el => el.id === 'ltr11')[0].cost)));
  
      setTanninPrice(Number((value.filter(el => el.id === 'ltr4')[0].cost)));
      setSmolderhidePrice(Number((value.filter(el => el.id === 'ltr9')[0].cost)));
      setScarhidePrice(Number((value.filter(el => el.id === 'ltr10')[0].cost)))
    });
  },[])

  let rawhideToCoarseLeather = upToFirstStage(4,rawhidePrice,0.01,itemsEquipped);

  let coarseLeatherToRuggedLeather = upToSecondStage(4,coarsePrice, 0, tanninPrice, itemsEquipped);
  let rawhideToRuggedLeather = upToSecondStage(4,rawhideToCoarseLeather, 0, tanninPrice, itemsEquipped);

  let ruggedLeatherToLayeredLeather = upToThirdStage(2, ruggedPrice, 6, thickhidePrice, 0, tanninPrice, itemsEquipped);
  let coarseLeatherToLayeredLeather = upToThirdStage(2, coarseLeatherToRuggedLeather, 6, thickhidePrice, 0, tanninPrice, itemsEquipped);
  let rawhideToLayeredLeather = upToThirdStage(2, rawhideToRuggedLeather, 6, thickhidePrice, 0, tanninPrice, itemsEquipped);

  let layeredLeatherToInfusedLeather = upToFourthStage(2, layeredPrice, 8, ironPrice, 0, tanninPrice, itemsEquipped, 1.13);
  let ruggedLeatherToInfusedLeather = upToFourthStage(2, ruggedLeatherToLayeredLeather, 8, ironPrice, 0, tanninPrice, itemsEquipped, 1.13);
  let coarseLeatherToInfusedLeather = upToFourthStage(2, coarseLeatherToLayeredLeather, 8, ironPrice, 0, tanninPrice, itemsEquipped, 1.13);
  let rawhideToInfusedLeather = upToFourthStage(2, rawhideToLayeredLeather, 8, ironPrice, 0, tanninPrice, itemsEquipped, 1.13);

  let infusedToRunic = upToLegendaty(infusedPrice, 0, tanninPrice, smolderhidePrice, scarhidePrice, itemsEquipped);
  let layeredToRunic = upToLegendaty(layeredLeatherToInfusedLeather, 0, tanninPrice, smolderhidePrice, scarhidePrice, itemsEquipped);
  let ruggedToRunic = upToLegendaty(ruggedLeatherToInfusedLeather, 0, tanninPrice, smolderhidePrice, scarhidePrice, itemsEquipped);
  let coarseToRunic = upToLegendaty(coarseLeatherToInfusedLeather, 0, tanninPrice, smolderhidePrice, scarhidePrice, itemsEquipped);
  let rawhideToRunic = upToLegendaty(rawhideToInfusedLeather, 0, tanninPrice, smolderhidePrice, scarhidePrice, itemsEquipped);

  const titles = [
    'Coarse', 
    'Rugged', 
    'Layered', 
    'Infused',
    'Runic'
  ]

  return (
    <div className='page'>
      <SettingsPanel icons={icons} toggleType={setType} titles={titles} type={type} />
      <p className='page__subtitle'>{type} Leather</p>
      {
        type === 'Coarse' &&
        <SortedList
          prices={[
            coarsePrice,
            rawhideToCoarseLeather
          ]}
          texts={[
            '- Price on trade post',
            '- Coarse leather from Rawhide'
          ]}
        />
      }
      {
        type === 'Rugged' && 
        <SortedList
          prices={[
            ruggedPrice,
            coarseLeatherToRuggedLeather,
            rawhideToRuggedLeather
          ]}
          texts={[
            '- Price on trade post',
            '- Rugged Leather from Coarse leather',
            '- Rugged Leather from Rawhide'
          ]}
        />
      }
      {
        type === 'Layered' && 
        <SortedList
          prices={[
            layeredPrice,
            ruggedLeatherToLayeredLeather,
            coarseLeatherToLayeredLeather,
            rawhideToLayeredLeather
          ]}
          texts={[
            '- Price on trade post',
            '- Layered leather from Rugged leather',
            '- Layered leather from Coarse leather',
            '- Layered leather from Rawhide'
          ]}
        />
      }
      {
        type === 'Infused' && 
        <SortedList
          prices={[
            infusedPrice,
            layeredLeatherToInfusedLeather,
            ruggedLeatherToInfusedLeather,
            coarseLeatherToInfusedLeather,
            rawhideToInfusedLeather
          ]}
          texts={[
            '- Price on trade post',
            '- Infused leather from Layered leather',
            '- Infused leather from Rugged leather',
            '- Infused leather from Coarse leather',
            '- Infused leather from Rawhide'
          ]}
        />
      }
      {
        type === 'Runic' && 
        <SortedList
          prices={[
            runicPrice,
            infusedToRunic,
            layeredToRunic,
            ruggedToRunic,
            coarseToRunic,
            rawhideToRunic
          ]}
          texts={[
            '- Price on trade post',
            '- Runic leather from Infused leather',
            '- Runic leather from Layered leather',
            '- Runic leather from Rugged leather',
            '- Runic leather from Coarse leather',
            '- Runic leather from Rawhide'
          ]}
        />
      }
    </div>
  )
}

export default Leatherworking