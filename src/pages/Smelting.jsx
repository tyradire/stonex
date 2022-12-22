import React, { useEffect, useState } from 'react';
import { oreToIngot, ingotToNextLvl, ingotToHightTier, ingotToTopTier, upToLegendaty } from '../utils/prices/formulas';
import { smeltingData } from '../utils/prices/smeltingData';
import SettingsPanel from '../components/SettingsPanel/SettingsPanel';
import ironIngot from '../assets/icons/ironingot.png';
import steelIngot from '../assets/icons/steelingot.png';
import starmetalIngot from '../assets/icons/starmetalingot.png';
import orichalcumIngot from '../assets/icons/orichalcumingot.png';
import asmodeumIngot from '../assets/icons/asmodeumingot.png';
import Tier4 from '../components/Tiers/Tier4';
import Tier3 from '../components/Tiers/Tier3';
import Tier2 from '../components/Tiers/Tier2';
import Tier1 from '../components/Tiers/Tier1';

import './Page.scss';
import TierLegendary from '../components/Tiers/TierLegendary';

const Smelting = () => {

  const [type, setType] = useState('Iron');

  const [ironOrePrice, setIronOrePrice] = useState(Number(smeltingData[2].cost));
  const [starmetalOrePrice, setStarmetalOrePrice] = useState(Number(smeltingData[5].cost));
  const [orichalcumOrePrice, setOrichalcumOrePrice] = useState(Number(smeltingData[6].cost));

  const [ironIngotPrice, setIronIngotPrice] = useState(Number(smeltingData[8].cost));
  const [steelIngotPrice, setSteelIngotPrice] = useState(Number(smeltingData[10].cost));
  const [starmetalIngotPrice, setStarmetalIngotPrice] = useState(Number(smeltingData[13].cost));
  const [orichalcumIngotPrice, setOrichalcumIngotPrice] = useState(Number(smeltingData[14].cost));
  const [asmodeumIngotPrice, setAsmodeumIngotPrice] = useState(Number(smeltingData[17].cost));

  const [charcoalPrice, setCharcoalPrice] = useState(Number(smeltingData[0].cost))
  const [fluxPrice, setFluxPrice] = useState(Number(smeltingData[7].cost))
  const [tolviumPrice, setTolviumPrice] = useState(Number(smeltingData[15].cost))
  const [cinnabarPrice, setCinnabarPrice] = useState(Number(smeltingData[16].cost))

  const [itemsEquipped, setItemsEquipped] = useState((JSON.parse(localStorage.getItem('bonusItems')) || []).length);

  const icons = [
    ironIngot,
    steelIngot,
    starmetalIngot,
    orichalcumIngot,
    asmodeumIngot
  ]

  useEffect(() => {
    let valIronOre = localStorage.getItem('sml2');
    let valStarmetalOre = localStorage.getItem('sml6');
    let valOruchalcumOre = localStorage.getItem('sml7');

    let valIronIngot = localStorage.getItem('sml9');
    let valSteelIngot = localStorage.getItem('sml11');
    let valStarmetalIngot = localStorage.getItem('sml14');
    let valOrichalcumIngot = localStorage.getItem('sml15');
    let valAsmodeumIngot = localStorage.getItem('sml18');

    let valCharcoal = localStorage.getItem('sml1');
    let fluxCost = localStorage.getItem('sml8');
    let tolviumCost = localStorage.getItem('sml16');
    let cinnabarCost = localStorage.getItem('sml17');

    setIronOrePrice(Number(valIronOre));
    setStarmetalOrePrice(Number(valStarmetalOre));
    setOrichalcumOrePrice(Number(valOruchalcumOre));

    setIronIngotPrice(Number(valIronIngot));
    setSteelIngotPrice(Number(valSteelIngot));
    setStarmetalIngotPrice(Number(valStarmetalIngot));
    setOrichalcumIngotPrice(Number(valOrichalcumIngot));
    setAsmodeumIngotPrice(Number(valAsmodeumIngot));
    
    setCharcoalPrice(Number(valCharcoal));
    setFluxPrice(Number(fluxCost));
    setTolviumPrice(Number(tolviumCost));
    setCinnabarPrice(Number(cinnabarCost));
  },[])

  let ironOreToIronIngot = oreToIngot(4,ironOrePrice,itemsEquipped);

  let ironIngotToSteelIngot = ingotToNextLvl(3,ironIngotPrice, charcoalPrice, fluxPrice, itemsEquipped);
  let ironOreToSteelIngot = ingotToNextLvl(3,ironOreToIronIngot, charcoalPrice, fluxPrice, itemsEquipped);

  let steelIngotToStarmetalIngot = ingotToHightTier(steelIngotPrice, starmetalOrePrice, charcoalPrice, fluxPrice, itemsEquipped);
  let ironIngotToStarmetalIngot = ingotToHightTier(ironIngotToSteelIngot, starmetalOrePrice, charcoalPrice, fluxPrice, itemsEquipped);
  let ironOreToStarmetalIngot = ingotToHightTier(ironOreToSteelIngot, starmetalOrePrice, charcoalPrice, fluxPrice, itemsEquipped);

  let starmetalIngotToOrichalcumIngot = ingotToTopTier(starmetalIngotPrice, orichalcumOrePrice, charcoalPrice, fluxPrice, itemsEquipped, 1.13);
  let steelIngotToOrichalcumIngot = ingotToTopTier(steelIngotToStarmetalIngot, orichalcumOrePrice, charcoalPrice, fluxPrice, itemsEquipped, 1.13);
  let ironIngotToOrichalcumIngot = ingotToTopTier(ironIngotToStarmetalIngot, orichalcumOrePrice, charcoalPrice, fluxPrice, itemsEquipped, 1.13);
  let ironOreToOrichalcumIngot = ingotToTopTier(ironOreToStarmetalIngot, orichalcumOrePrice, charcoalPrice, fluxPrice, itemsEquipped, 1.13);

  let orichalcumIngotToAsmodeumIngot = upToLegendaty(orichalcumIngotPrice, charcoalPrice, fluxPrice, tolviumPrice, cinnabarPrice, itemsEquipped);
  let starmetalIngotToAsmodeumIngot = upToLegendaty(starmetalIngotToOrichalcumIngot, charcoalPrice, fluxPrice, tolviumPrice, cinnabarPrice, itemsEquipped);
  let steelIngotToAsmodeumIngot = upToLegendaty(steelIngotToOrichalcumIngot, charcoalPrice, fluxPrice, tolviumPrice, cinnabarPrice, itemsEquipped);
  let ironIngotToAsmodeumIngot = upToLegendaty(ironIngotToOrichalcumIngot, charcoalPrice, fluxPrice, tolviumPrice, cinnabarPrice, itemsEquipped);
  let ironOreToAsmodeumIngot = upToLegendaty(ironOreToOrichalcumIngot, charcoalPrice, fluxPrice, tolviumPrice, cinnabarPrice, itemsEquipped);

  const titles = [
    'Iron', 
    'Steel', 
    'Starmetal', 
    'Orichalcum',
    'Asmodeum'
  ]

  return (
    <div className='page'>
      <h2 className='page__title'>Smelting</h2>
      <SettingsPanel toggleType={setType} icons={icons} titles={titles} type={type} />
      <p className='page__subtitle'>{type} Ingot</p>
      {
        type === 'Iron' &&
        <Tier1 
          tpPrice={ironIngotPrice}
          price1={ironOreToIronIngot}
          price1text={'- Iron ingot from Iron ore'}
        />
      }
      {
        type === 'Steel' && 
        <Tier2 
          tpPrice={steelIngotPrice}
          price1={ironIngotToSteelIngot}
          price1text={'- Steel ingot from Iron ingot'}
          price2={ironOreToSteelIngot}
          price2text={'- Steel ingot from Iron ore'}
        />
      }
      {
        type === 'Starmetal' && 
        <Tier3
          tpPrice={starmetalIngotPrice}
          price1={steelIngotToStarmetalIngot}
          price1text={'- Starmetal ingot from Steel ingot'}
          price2={ironIngotToStarmetalIngot}
          price2text={'- Starmetal ingot from Iron ingot'}
          price3={ironOreToStarmetalIngot}
          price3text={'- Starmetal ingot from Iron ore'}
        />
      }
      {
        type === 'Orichalcum' && 
        <Tier4 
          tpPrice={orichalcumIngotPrice} 
          price1={starmetalIngotToOrichalcumIngot}
          price1text={'- Orichalcum ingot from Starmetal ingot'}
          price2={steelIngotToOrichalcumIngot}
          price2text={'- Orichalcum ingot from Steel ingot'}
          price3={ironIngotToOrichalcumIngot}
          price3text={'- Orichalcum ingot from Iron ingot'}
          price4={ironOreToOrichalcumIngot}
          price4text={'- Orichalcum ingot from Iron ore'}
        />
      }
      {
        type === 'Asmodeum' && 
        <TierLegendary 
          tpPrice={asmodeumIngotPrice} 
          price1={orichalcumIngotToAsmodeumIngot}
          price1text={'- Asmodeum ingot from Orichalcum ingot'}
          price2={starmetalIngotToAsmodeumIngot}
          price2text={'- Asmodeum ingot from Starmetal ingot'}
          price3={steelIngotToAsmodeumIngot}
          price3text={'- Asmodeum ingot from Steel ingot'}
          price4={ironIngotToAsmodeumIngot}
          price4text={'- Asmodeum ingot from Iron ingot'}
          price5={ironOreToAsmodeumIngot}
          price5text={'- Asmodeum ingot from Iron ore'}
        />
      }
    </div>
  )
}

export default Smelting