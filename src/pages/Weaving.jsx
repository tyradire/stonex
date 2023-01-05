import React, { useEffect, useRef, useState } from 'react';
import { upToThirdStage, upToFourthStage, upToFirstStage, upToLegendaty, upToSecondStage } from '../utils/prices/formulas';
import { weavingData } from '../utils/prices/weavingData';
import SettingsPanel from '../components/SettingsPanel/SettingsPanel';
import SortedList from '../components/SortedList/SortedList';

import linen from '../assets/icons/linen.png';
import sateen from '../assets/icons/sateen.png';
import silk from '../assets/icons/silk.png';
import phoenixweave from '../assets/icons/phoenixweave.png';
import infusedSilk from '../assets/icons/infusedsilk.png';

import './Page.scss';
import localforage from 'localforage';
import PopupInfo from '../UI/PopupInfo';

const Weaving = () => {

  const [type, setType] = useState('linen');
  const [popupOpened, setPopupOpened] = useState(false);
  const [ingredients, setIngridients] = useState([{}]);

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
    localforage.getItem('Weaving').then(function(value) {
      setFibersPrice(Number((value.filter(el => el.id === 'fib1')[0].cost)));
      setSilkThreadsPrice(Number((value.filter(el => el.id === 'fib2')[0].cost)));
      setWirefiberPrice(Number((value.filter(el => el.id === 'fib3')[0].cost)));
      setLinenPrice(Number((value.filter(el => el.id === 'fib5')[0].cost)));
      setSateenPrice(Number((value.filter(el => el.id === 'fib6')[0].cost)));
      setSilkPrice(Number((value.filter(el => el.id === 'fib7')[0].cost)));
      setInfusedSilkPrice(Number((value.filter(el => el.id === 'fib8')[0].cost)));
      setPhoenixweavePrice(Number((value.filter(el => el.id === 'fib11')[0].cost)));
      setWireweavePrice(Number((value.filter(el => el.id === 'fib4')[0].cost)));
      setScaleclothPrice(Number((value.filter(el => el.id === 'fib9')[0].cost)));
      setBlisterweavePrice(Number((value.filter(el => el.id === 'fib10')[0].cost)));
    });
  },[])

  let fibersToLinen = upToFirstStage(4,fibersPrice,0.01,itemsEquipped);

  let linenToSateen = upToSecondStage(4,linenPrice,0,wireweavePrice,itemsEquipped);
  let fibersToSateen = upToSecondStage(4,fibersToLinen,0,wireweavePrice,itemsEquipped);

  let sateenToSilk = upToThirdStage(2, sateenPrice, 6, silkThreadsPrice, 0, wireweavePrice, itemsEquipped);
  let linenLeatherToSilk = upToThirdStage(2, linenToSateen, 6, silkThreadsPrice, 0, wireweavePrice, itemsEquipped);
  let fibersToSilk = upToThirdStage(2, fibersToSateen, 6, silkThreadsPrice, 0, wireweavePrice, itemsEquipped);

  let silkToInfusedSilk = upToFourthStage(2, silkPrice, 8, wirefiberPrice, 0, wireweavePrice, itemsEquipped, 1.13);
  let sateenToInfusedSilk = upToFourthStage(2, sateenToSilk, 8, wirefiberPrice, 0, wireweavePrice, itemsEquipped, 1.13);
  let linenToInfusedSilk = upToFourthStage(2, linenLeatherToSilk, 8, wirefiberPrice, 0, wireweavePrice, itemsEquipped, 1.13);
  let fibersToInfusedSilk = upToFourthStage(2, fibersToSilk, 8, wirefiberPrice, 0, wireweavePrice, itemsEquipped, 1.13);

  let infusedToPhoenixweave = upToLegendaty(infusedSilkPrice, 0, wireweavePrice, scaleclothPrice, blisterweavePrice, itemsEquipped);
  let silkToPhoenixweave = upToLegendaty(silkToInfusedSilk, 0, wireweavePrice, scaleclothPrice, blisterweavePrice, itemsEquipped);
  let sateenToPhoenixweave = upToLegendaty(sateenToInfusedSilk, 0, wireweavePrice, scaleclothPrice, blisterweavePrice, itemsEquipped);
  let linenToPhoenixweave = upToLegendaty(linenToInfusedSilk, 0, wireweavePrice, scaleclothPrice, blisterweavePrice, itemsEquipped);
  let fibersToPhoenixweave = upToLegendaty(fibersToInfusedSilk, 0, wireweavePrice, scaleclothPrice, blisterweavePrice, itemsEquipped);

  const titles = [
    'linen', 
    'sateen', 
    'silk', 
    'infused silk',
    'phoenixweave'
  ]

  useEffect(() => {
    setIngridients(weavingData.filter(el => el.title === type)[0].ingredients);
  }, [type])

  const modalWvButtonRef = useRef(null);

  return (
    <div className='page'>
      <PopupInfo popupOpened={popupOpened} setPopupOpened={setPopupOpened} modalButtonRef={modalWvButtonRef} title={type} ingredients={ingredients} data={weavingData} />
      <SettingsPanel icons={icons} toggleType={setType} titles={titles} type={type} />
      <div className='page__title-wrapper'>
        <p className='page__subtitle'>{type[0].toUpperCase() + type.slice(1)}</p>
        <button 
          className={!popupOpened ? 'page__subtitle-btn' : 'page__subtitle-btn page__subtitle-btn_opened'} 
          onClick={() => setPopupOpened(!popupOpened)}
          ref={modalWvButtonRef}
        >
          <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path fill="none" d="M0 0h24v24H0z"/>
              <path fill="#6988a5" d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"/>
            </g>
          </svg>
        </button>
      </div>
      {
        type === 'linen' &&
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
        type === 'sateen' && 
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
        type === 'silk' && 
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
        type === 'infused silk' && 
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
        type === 'phoenixweave' && 
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