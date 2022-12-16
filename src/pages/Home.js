import React, { useState } from 'react';
import SettingsPanelButton from '../components/SettingsPanel/SettingsPanelButton';

import smelting from '../assets/smelting.png';
import leatherworking from '../assets/leatherworking.png';
import stonecutting from '../assets/stonecutting.png';
import weaving from '../assets/weaving.png';

import { leatherworkingData } from '../utils/prices/leatherworkingData';
import { stonecuttingData } from '../utils/prices/stonecuttingData';
import { smeltingData } from '../utils/prices/smeltingData';

import Prices from '../components/Prices/Prices';
import './Page.scss';

import axios from 'axios';
import { ids } from '../utils/resourcesIds';
import { API_URL, TOKEN } from '../utils/consts';
import { weavingData } from '../utils/prices/weavingData';

const Home = () => {

  const [resourcesType, setResourcesType] = useState('Smelting');
  const [priceNumber, setPriceNumber] = useState(0);
  const [leatherPrices, setLeatherPrices] = useState([]);

  // const unit = ids.leatherworking.infused;

  // useEffect(() => {
  //   axios.get(`${API_URL}.${unit}.${TOKEN}.json`)
  //   .then(res => setPriceNumber(Number((res.data.data.sell_price_min.slice(-1) / 100).toFixed(2))))
  //   .catch(err => console.log(err))
  // },[])
  
  const downloadPrices = () => {
    for (let key in ids.leatherworking) {
      // console.log(ids.leatherworking[key]);
      axios.get(`${API_URL}.${ids.leatherworking[key]}.${TOKEN}.json`)
      .then(res => {
        console.log(Number((res.data.data.sell_price_min.slice(-1) / 100).toFixed(2)), key)
        leatherPrices.push({
          title: key,
          cost: Number((res.data.data.sell_price_min.slice(-1) / 100).toFixed(2))
        })
        // leatherPrices.push(Number((res.data.data.sell_price_min.slice(-1) / 100).toFixed(2)))
      })
      .catch(err => console.log(err))
    }
    console.log(leatherPrices)
  }

  return (
    <div className='page'>
      <h2 className='page__title'>Settings</h2>
      <div className='page__prices-selector'>
        <SettingsPanelButton icon={smelting} toggleType={setResourcesType} title={'Smelting'} />
        <SettingsPanelButton icon={leatherworking} toggleType={setResourcesType} title={'Leatherworking'} />
        <SettingsPanelButton icon={stonecutting} toggleType={setResourcesType} title={'Stonecutting'} />
        <SettingsPanelButton icon={weaving} toggleType={setResourcesType} title={'Weaving'} />
      </div>
      {/* <button className='page__prices-btn' onClick={downloadPrices}>Download Barri (EU) prices</button> */}
      {resourcesType === 'Smelting' && <Prices data={smeltingData} />}
      {resourcesType === 'Leatherworking' && <Prices data={leatherworkingData} />}
      {resourcesType === 'Stonecutting' && <Prices data={stonecuttingData} />}
      {resourcesType === 'Weaving' && <Prices data={weavingData} />}
    </div>
  )
}

export default Home