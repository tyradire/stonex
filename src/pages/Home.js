import React, { useState } from 'react';
import SettingsPanelButton from '../components/SettingsPanel/SettingsPanelButton';

import smelting from '../assets/smelting.png';
import leatherworking from '../assets/leatherworking.png';
import stonecutting from '../assets/stonecutting.png';
import weaving from '../assets/weaving.png';
import woodworking from '../assets/woodworking.png';

import { leatherworkingData } from '../utils/prices/leatherworkingData';
import { stonecuttingData } from '../utils/prices/stonecuttingData';
import { smeltingData } from '../utils/prices/smeltingData';
import { woodworkingData } from '../utils/prices/woodworkingData';

import Prices from '../components/Prices/Prices';
import './Page.scss';

import { weavingData } from '../utils/prices/weavingData';
import SettingsMain from '../components/SettingsPanel/SettingsMain';

const Home = () => {

  const [resourcesType, setResourcesType] = useState('Smelting');
  const [priceNumber, setPriceNumber] = useState(0);
  const [leatherPrices, setLeatherPrices] = useState([]);

  const icons = [
    smelting,
    leatherworking,
    stonecutting,
    weaving,
    woodworking
  ]

  const titles = [
    'Smelting',
    'Leatherworking',
    'Stonecutting',
    'Weaving',
    'Woodworking'
  ]

  return (
    <div className='page'>
      <h2 className='page__title'>Settings</h2>
      <div className='page__prices-selector'>
        <SettingsMain toggleType={setResourcesType} icons={icons} titles={titles} type={resourcesType} />
        {/* <SettingsPanelButton icon={smelting} toggleType={setResourcesType} title={'Smelting'} type={resourcesType} />
        <SettingsPanelButton icon={leatherworking} toggleType={setResourcesType} title={'Leatherworking'} type={resourcesType} />
        <SettingsPanelButton icon={stonecutting} toggleType={setResourcesType} title={'Stonecutting'} type={resourcesType} />
        <SettingsPanelButton icon={weaving} toggleType={setResourcesType} title={'Weaving'} type={resourcesType} />
        <SettingsPanelButton icon={woodworking} toggleType={setResourcesType} title={'Woodworking'} type={resourcesType} /> */}
      </div>
      {resourcesType === 'Smelting' && <Prices data={smeltingData} />}
      {resourcesType === 'Leatherworking' && <Prices data={leatherworkingData} />}
      {resourcesType === 'Stonecutting' && <Prices data={stonecuttingData} />}
      {resourcesType === 'Weaving' && <Prices data={weavingData} />}
      {resourcesType === 'Woodworking' && <Prices data={woodworkingData} />}
    </div>
  )
}

export default Home