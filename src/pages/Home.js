import React, { useEffect, useState } from 'react';
import SettingsPanelButton from '../components/SettingsPanel/SettingsPanelButton';

import smelting from '../assets/smelting.png';
import leatherworking from '../assets/leatherworking.png';
import stonecutting from '../assets/stonecutting.png';

import { leatherworkingData } from '../utils/prices/leatherworkingData';
import { stonecuttingData } from '../utils/prices/stonecuttingData';
import { smeltingData } from '../utils/prices/smeltingData';

import Prices from '../components/Prices/Prices';
import './Page.scss';

import axios from 'axios';
import { ids } from '../utils/resourcesIds';

const Home = () => {

  const [resourcesType, setResourcesType] = useState('Smelting');
  const [priceNumber, setPriceNumber] = useState(0);

  const unit = ids.leatherworking.infused;
  const BASE_URL = 'https://nwdb.info/db/item/price';
  const TOKEN = 'f7792482-25c9-48b1-91fa-1b90539188a8';
  const proxy = 'https://cors-anywhere.herokuapp.com/'

  useEffect(() => {
    axios.get(`${proxy}${BASE_URL}.${unit}.${TOKEN}.json`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => setPriceNumber(Number((res.data.data.sell_price_min.slice(-1) / 100).toFixed(2))))
    .catch(err => console.log(err))
  },[])

  return (
    <div className='page'>
      <h2 className='page__title'>Settings</h2>
      <div className='page__prices-selector'>
        <SettingsPanelButton icon={smelting} toggleType={setResourcesType} title={'Smelting'} />
        <SettingsPanelButton icon={leatherworking} toggleType={setResourcesType} title={'Leatherworking'} />
        <SettingsPanelButton icon={stonecutting} toggleType={setResourcesType} title={'Stonecutting'} />
      </div>
      <p>{priceNumber}</p>
      {resourcesType === 'Smelting' && <Prices data={smeltingData} />}
      {resourcesType === 'Leatherworking' && <Prices data={leatherworkingData} />}
      {resourcesType === 'Stonecutting' && <Prices data={stonecuttingData} />}
    </div>
  )
}

export default Home