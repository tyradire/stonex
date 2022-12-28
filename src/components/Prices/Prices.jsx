import React, { useEffect, useState } from 'react';
import Price from './Price';
import PricesBottomPanel from './PricesBottomPanel';
import localforage from 'localforage';
import './Prices.scss';

const Prices = ({ data, type }) => {

  const [rawResources, setRawResources] = useState([]);
  const [finishedResources, setFinishedResources] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  const createPrices = () => {
    let array = data.map(el => {
        let result = {};
        result.id = el.id;
        result.title = el.title;
        result.cost = el.cost;
        result.raw = el.raw;
        result.img = el.img;
        return result
      });
      setRawResources(array.filter(elem => elem.raw));
      setFinishedResources(array.filter(elem => !elem.raw));
    localforage.setItem(`${type}`, array);
  }

  useEffect(() => {
    setTimeout(() => {setShowSpinner(true)}, 250);
    localforage.getItem(type)
    .then((value) => {
      if (value === null) {
        createPrices();
      } else {
        setRawResources(value.filter(elem => elem.raw));
        setFinishedResources(value.filter(elem => !elem.raw));
      }
    })
    .catch((err) => {
      console.log(err);
    });
  },[])

  return (
    <>
    {
      !showSpinner ? <div className='prices__spinner'></div>
      :
      <>
        <div className='prices'>
          <form className='prices__column'>
            {
              rawResources.map(({title, cost, id, img}) => 
                <Price title={title} cost={cost} id={id} key={id} img={img} type={type} changePrice={changePrice} />
              )
            }
          </form>
          <form className='prices__column'>
            {
              finishedResources.map(({title, cost, id, img}) => 
                <Price title={title} cost={cost} id={id} key={id} img={img} type={type} changePrice={changePrice} />
              )
            }
          </form>
        </div>
        <PricesBottomPanel />
      </>
    }
    </>
  )
}

export default Prices