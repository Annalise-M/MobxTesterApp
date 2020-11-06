import { useObserver } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useInstrumentStore } from '../store/FunctionStoresProvider';

const InstrumentInput = () => {
  const [instrument, setInstrument] = useState('');
  const instrumentStore = useInstrumentStore();

  const handleClick = () => {
    instrumentStore.addInstrument(instrument);
    setInstrument('');
  };

  return useObserver(() => (
    <>
      <input 
        value={instrument}
        onChange={(e) => setInstrument(e.target.value)}
        type="text" 
      />
      <button onClick={handleClick}>Add Instrument</button>
    </>
  ));
};

export default InstrumentInput;
