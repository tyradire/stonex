import React, { useEffect, useState } from 'react';
import { upToFirstStage, upToSecondStage, upToThirdStage, upToFourthStage, upToLegendaty, ingotToGold, ingotToPlat } from '../utils/prices/formulas';
import { smeltingData } from '../utils/prices/smeltingData';
import SettingsPanel from '../components/SettingsPanel/SettingsPanel';
import SortedList from '../components/Tiers/SortedList';

import ironIngot from '../assets/icons/ironingot.png';
import silverIngot from '../assets/icons/silveringot.png';
import steelIngot from '../assets/icons/steelingot.png';
import goldIngot from '../assets/icons/goldingot.png';
import platinumIngot from '../assets/icons/platinumingot.png';
import starmetalIngot from '../assets/icons/starmetalingot.png';
import orichalcumIngot from '../assets/icons/orichalcumingot.png';
import asmodeumIngot from '../assets/icons/asmodeumingot.png';

import './Page.scss';
import localforage from 'localforage';

const Smelting = () => {

  const [type, setType] = useState('Iron');

  const [ironOrePrice, setIronOrePrice] = useState(Number(smeltingData[1].cost));
  const [silverOrePrice, setSilverOrePrice] = useState(Number(smeltingData[2].cost));
  const [goldOrePrice, setGoldOrePrice] = useState(Number(smeltingData[3].cost));
  const [platOrePrice, setPlatOrePrice] = useState(Number(smeltingData[4].cost));
  const [starmetalOrePrice, setStarmetalOrePrice] = useState(Number(smeltingData[5].cost));
  const [orichalcumOrePrice, setOrichalcumOrePrice] = useState(Number(smeltingData[6].cost));

  const [ironIngotPrice, setIronIngotPrice] = useState(Number(smeltingData[8].cost));
  const [silverIngotPrice, setSilverIngotPrice] = useState(Number(smeltingData[9].cost));
  const [goldIngotPrice, setGoldIngotPrice] = useState(Number(smeltingData[11].cost));
  const [steelIngotPrice, setSteelIngotPrice] = useState(Number(smeltingData[10].cost));
  const [platIngotPrice, setPlatIngotPrice] = useState(Number(smeltingData[12].cost));
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
    silverIngot,
    steelIngot,
    goldIngot,
    platinumIngot,
    starmetalIngot,
    orichalcumIngot,
    asmodeumIngot
  ]

  useEffect(() => {
    localforage.getItem('Smelting').then(function(value) {
    setIronOrePrice(Number(value.filter(el => el.id === 'sml2')[0].cost));
    setSilverOrePrice(Number(value.filter(el => el.id === 'sml3')[0].cost));
    setGoldOrePrice(Number(value.filter(el => el.id === 'sml4')[0].cost));
    setPlatOrePrice(Number(value.filter(el => el.id === 'sml5')[0].cost));
    setStarmetalOrePrice(Number(value.filter(el => el.id === 'sml6')[0].cost));
    setOrichalcumOrePrice(Number(value.filter(el => el.id === 'sml7')[0].cost));

    setIronIngotPrice(Number(value.filter(el => el.id === 'sml9')[0].cost));
    setSilverIngotPrice(Number(value.filter(el => el.id === 'sml10')[0].cost));
    setSteelIngotPrice(Number(value.filter(el => el.id === 'sml11')[0].cost));
    setGoldIngotPrice(Number(value.filter(el => el.id === 'sml12')[0].cost));
    setPlatIngotPrice(Number(value.filter(el => el.id === 'sml13')[0].cost));
    setStarmetalIngotPrice(Number(value.filter(el => el.id === 'sml14')[0].cost));
    setOrichalcumIngotPrice(Number(value.filter(el => el.id === 'sml15')[0].cost));
    setAsmodeumIngotPrice(Number(value.filter(el => el.id === 'sml18')[0].cost));
    
    setCharcoalPrice(Number(value.filter(el => el.id === 'sml1')[0].cost));
    setFluxPrice(Number(value.filter(el => el.id === 'sml8')[0].cost));
    setTolviumPrice(Number(value.filter(el => el.id === 'sml16')[0].cost));
    setCinnabarPrice(Number(value.filter(el => el.id === 'sml7')[0].cost));
  }).catch(function(err) {

      console.log(err);
  });

  },[])

  let ironOreToIronIngot = upToFirstStage(4,ironOrePrice,0.01,itemsEquipped);

  let silverOreToSilverIngot = upToFirstStage(4,silverOrePrice,0.01,itemsEquipped);

  let ironIngotToSteelIngot = upToSecondStage(3,ironIngotPrice, charcoalPrice, fluxPrice, itemsEquipped);
  let ironOreToSteelIngot = upToSecondStage(3,ironOreToIronIngot, charcoalPrice, fluxPrice, itemsEquipped);

  let silverIngotToGoldIngot = ingotToGold(silverIngotPrice, goldOrePrice, fluxPrice, itemsEquipped);
  let silverOreToGoldIngot = ingotToGold(silverOreToSilverIngot, goldOrePrice, fluxPrice, itemsEquipped);

  let steelIngotToStarmetalIngot = upToThirdStage(steelIngotPrice, starmetalOrePrice, charcoalPrice, fluxPrice, itemsEquipped);
  let ironIngotToStarmetalIngot = upToThirdStage(ironIngotToSteelIngot, starmetalOrePrice, charcoalPrice, fluxPrice, itemsEquipped);
  let ironOreToStarmetalIngot = upToThirdStage(ironOreToSteelIngot, starmetalOrePrice, charcoalPrice, fluxPrice, itemsEquipped);

  let goldIngotToPlatIngot = ingotToPlat(goldIngotPrice, platOrePrice, fluxPrice, itemsEquipped);
  let silverIngotToPlatIngot = ingotToPlat(silverIngotPrice, platOrePrice, fluxPrice, itemsEquipped);
  let silverOreToPlatIngot = ingotToPlat(silverOreToGoldIngot, platOrePrice, fluxPrice, itemsEquipped);

  let starmetalIngotToOrichalcumIngot = upToFourthStage(starmetalIngotPrice, orichalcumOrePrice, charcoalPrice, fluxPrice, itemsEquipped, 1.13);
  let steelIngotToOrichalcumIngot = upToFourthStage(steelIngotToStarmetalIngot, orichalcumOrePrice, charcoalPrice, fluxPrice, itemsEquipped, 1.13);
  let ironIngotToOrichalcumIngot = upToFourthStage(ironIngotToStarmetalIngot, orichalcumOrePrice, charcoalPrice, fluxPrice, itemsEquipped, 1.13);
  let ironOreToOrichalcumIngot = upToFourthStage(ironOreToStarmetalIngot, orichalcumOrePrice, charcoalPrice, fluxPrice, itemsEquipped, 1.13);

  let platToOrichalcumIngot = upToFourthStage(platIngotPrice*1.5, orichalcumOrePrice, charcoalPrice, fluxPrice, itemsEquipped, 1.13);
  let goldIngotToOrichalcumIngot = upToFourthStage(goldIngotToPlatIngot*1.5, orichalcumOrePrice, charcoalPrice, fluxPrice, itemsEquipped, 1.13);
  let silverIngotToOrichalcumIngot = upToFourthStage(silverIngotToPlatIngot*1.5, orichalcumOrePrice, charcoalPrice, fluxPrice, itemsEquipped, 1.13);
  let silverOreToOrichalcumIngot = upToFourthStage(silverOreToPlatIngot*1.5, orichalcumOrePrice, charcoalPrice, fluxPrice, itemsEquipped, 1.13);

  let orichalcumIngotToAsmodeumIngot = upToLegendaty(orichalcumIngotPrice, charcoalPrice, fluxPrice, tolviumPrice, cinnabarPrice, itemsEquipped);
  let starmetalIngotToAsmodeumIngot = upToLegendaty(starmetalIngotToOrichalcumIngot, charcoalPrice, fluxPrice, tolviumPrice, cinnabarPrice, itemsEquipped);
  let platIngotToAsmodeumIngot = upToLegendaty(platToOrichalcumIngot, charcoalPrice, fluxPrice, tolviumPrice, cinnabarPrice, itemsEquipped);
  let steelIngotToAsmodeumIngot = upToLegendaty(steelIngotToOrichalcumIngot, charcoalPrice, fluxPrice, tolviumPrice, cinnabarPrice, itemsEquipped);
  let goldIngotToAsmodeumIngot = upToLegendaty(goldIngotToOrichalcumIngot, charcoalPrice, fluxPrice, tolviumPrice, cinnabarPrice, itemsEquipped);
  let silverIngotToAsmodeumIngot = upToLegendaty(silverIngotToOrichalcumIngot, charcoalPrice, fluxPrice, tolviumPrice, cinnabarPrice, itemsEquipped);
  let ironIngotToAsmodeumIngot = upToLegendaty(ironIngotToOrichalcumIngot, charcoalPrice, fluxPrice, tolviumPrice, cinnabarPrice, itemsEquipped);
  let silverOreToAsmodeumIngot = upToLegendaty(silverOreToOrichalcumIngot, charcoalPrice, fluxPrice, tolviumPrice, cinnabarPrice, itemsEquipped);
  let ironOreToAsmodeumIngot = upToLegendaty(ironOreToOrichalcumIngot, charcoalPrice, fluxPrice, tolviumPrice, cinnabarPrice, itemsEquipped);

  const titles = [
    'Iron',
    'Silver',
    'Steel',
    'Gold',
    'Platinum',
    'Starmetal', 
    'Orichalcum',
    'Asmodeum'
  ]

  return (
    <div className='page'>
      <SettingsPanel toggleType={setType} icons={icons} titles={titles} type={type} />
      <p className='page__subtitle'>{type} Ingot</p>
      {
        type === 'Iron' &&
        <SortedList
          prices={[
            ironIngotPrice,
            ironOreToIronIngot
          ]}
          texts={[
            '- Price on trade post',
            '- Iron ingot from Iron ore'
          ]}
        />
      }
      {
        type === 'Silver' &&
        <SortedList
          prices={[
            silverIngotPrice,
            silverOreToSilverIngot
          ]}
          texts={[
            '- Price on trade post',
            '- Silver ingot from Silver ore'
          ]}
        />
      }
      {
        type === 'Steel' && 
        <SortedList
          prices={[
            steelIngotPrice,
            ironIngotToSteelIngot,
            ironOreToSteelIngot
          ]}
          texts={[
            '- Price on trade post',
            '- Steel ingot from Iron ingot',
            '- Steel ingot from Iron ore'
          ]}
        />
      }
      {
        type === 'Gold' && 
        <SortedList 
          prices={[
            goldIngotPrice,
            silverIngotToGoldIngot,
            silverOreToGoldIngot
          ]}
          texts={[
            '- Price on trade post',
            '- Gold ingot from Silver ingot',
            '- Gold ingot from Silver ore'
          ]}
        />
      }
      {
        type === 'Platinum' && 
        <SortedList
          prices={[
            platIngotPrice,
            goldIngotToPlatIngot,
            silverIngotToPlatIngot,
            silverOreToPlatIngot
          ]}
          texts={[
            '- Price on trade post',
            '- Platinum ingot from Gold ingot',
            '- Platinum ingot from Silver ingot',
            '- Platinum ingot from Silver ore'
          ]}
        />
      }
      {
        type === 'Starmetal' && 
        <SortedList
          prices={[
            starmetalIngotPrice,
            steelIngotToStarmetalIngot,
            ironIngotToStarmetalIngot,
            ironOreToStarmetalIngot
          ]}
          texts={[
            '- Price on trade post',
            '- Starmetal ingot from Steel ingot',
            '- Starmetal ingot from Iron ingot',
            '- Starmetal ingot from Iron ore'
          ]}
        />
      }
      {
        type === 'Orichalcum' &&
        <SortedList
          prices={[orichalcumIngotPrice, 
            starmetalIngotToOrichalcumIngot,
            platToOrichalcumIngot,
            goldIngotToOrichalcumIngot,
            steelIngotToOrichalcumIngot,
            silverIngotToOrichalcumIngot,
            ironIngotToOrichalcumIngot,
            silverOreToOrichalcumIngot,
            ironOreToOrichalcumIngot
          ]}
          texts={[
            '- Price on trade post',
            '- Orichalcum ingot from Starmetal ingot',
            '- Orichalcum ingot from Platinum ingot',
            '- Orichalcum ingot from Gold ingot',
            '- Orichalcum ingot from Steel ingot',
            '- Orichalcum ingot from Silver ingot',
            '- Orichalcum ingot from Iron ingot',
            '- Orichalcum ingot from Silver ore',
            '- Orichalcum ingot from Iron ore'
          ]}
        />
      }
      {
        type === 'Asmodeum' && 
        <SortedList 
          prices={[asmodeumIngotPrice, 
            orichalcumIngotToAsmodeumIngot,
            starmetalIngotToAsmodeumIngot,
            platIngotToAsmodeumIngot,
            steelIngotToAsmodeumIngot,
            goldIngotToAsmodeumIngot,
            silverIngotToAsmodeumIngot,
            ironIngotToAsmodeumIngot,
            silverOreToAsmodeumIngot,
            ironOreToAsmodeumIngot
          ]}
          texts={[
            '- Price on trade post',
            '- Asmodeum ingot from Orichalcum ingot',
            '- Asmodeum ingot from Starmetal ingot',
            '- Asmodeum ingot from Platinum ingot',
            '- Asmodeum ingot from Steel ingot',
            '- Asmodeum ingot from Gold ingot',
            '- Asmodeum ingot from Silver ingot',
            '- Asmodeum ingot from Iron ingot',
            '- Asmodeum ingot from Silver ore',
            '- Asmodeum ingot from Iron ore'
          ]}
        />
      }
    </div>
  )
}

export default Smelting