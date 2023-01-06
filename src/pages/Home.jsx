import React, { useEffect, useState } from 'react';

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

  const [resourcesType, setResourcesType] = useState('');

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


  useEffect(() => {
    setResourcesType(localStorage.getItem('savedRes') || 'Smelting');
    // if (null === localStorage.getItem('Smelting')) {
    //   createPricesVariables();
    // } 
  },[])

  return (
    <div className='page'>
      <div className='page__prices-selector'>
        <SettingsMain toggleType={setResourcesType} icons={icons} titles={titles} type={resourcesType} />
      </div>
      {resourcesType === 'Smelting' && <Prices data={smeltingData} type={titles[0]} />}
      {resourcesType === 'Leatherworking' && <Prices data={leatherworkingData} type={titles[1]} />}
      {resourcesType === 'Stonecutting' && <Prices data={stonecuttingData} type={titles[2]} />}
      {resourcesType === 'Weaving' && <Prices data={weavingData} type={titles[3]} />}
      {resourcesType === 'Woodworking' && <Prices data={woodworkingData} type={titles[4]} />}
    </div>
  )
}

export default Home