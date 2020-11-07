import { useObserver } from 'mobx-react-lite';
import React from 'react';
import { useInstrumentStore } from '../store/FunctionStoresProvider';

const InstrumentList = () => {
  const instrumentStore = useInstrumentStore();

  return useObserver(() => (
    <ul>
      {instrumentStore.instruments.map((instrument) => {
        return (
          <li key={instrument.id}>
            {instrument.makeModel}
            {instrument.makeYear}
            {instrument.style}
            {instrument.scale}
            {instrument.condition}
            {instrument.price}
            <img src={instrument.url} />
            <button 
              onClick={() => instrumentStore.removeInstrument(instrument.id)}>
                X
            </button>
          </li>
        );
      })}
    </ul>
  ));
};

export default InstrumentList;
