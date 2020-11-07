import { useObserver } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useInstrumentStore } from '../store/FunctionStoresProvider';
import styles from './InstrumentListStyles.css';

const InstrumentInput = () => {
  const [makeModel, setMakeModel] = useState('');
  const [makeYear, setMakeYear] = useState('');
  const [style, setStyle] = useState('');
  const [scale, setScale] = useState('');
  const [condition, setCondition] = useState('');
  const [price, setPrice] = useState('');
  const [url, setUrl] = useState('');

  const instrumentStore = useInstrumentStore();
  

  const handleClick = (e) => {
    e.preventDefault();
    instrumentStore.addInstrument({ 
      makeModel,
      makeYear,
      style,
      scale,
      condition,
      url,
      price
    });

    setMakeModel('');
    setMakeYear('');
    setStyle('');
    setScale('');
    setCondition('');
    setUrl('');
    setPrice('');
  };

  return useObserver(() => (
    <div styles={styles}>
      <form>
        <input 
          value={makeModel}
          onChange={(e) => setMakeModel(e.target.value)}
          type="text"
          placeholder="Make / Model"
        />
        <input 
          value={makeYear}
          onChange={(e) => setMakeYear(e.target.value)}
          type="text"
          placeholder="Year" 
        />
        <input 
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          type="text"
          placeholder="Style"
        />
        <input 
          value={scale}
          onChange={(e) => setScale(e.target.value)}
          type="text"
          placeholder="Scale"
        />
        <input 
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          type="text"
          placeholder="Condition"
        />
        <input 
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          placeholder="Url"
        />
        <input 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="Price"
        />
        <button onClick={handleClick}>Add Instrument</button>
      </form>
    </div>
  ));
};

export default InstrumentInput;
