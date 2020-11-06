import React from 'react';
import { useObserver } from 'mobx-react-lite';
import { useInstrumentStore } from '../store/FunctionStoresProvider';

const InstrumentList = () => {
  const instrumentStore = useInstrumentStore();

  return useObserver(() => (
    <ul>
      {instrumentStore.instruments.map((instrument) => {
        return (
          <li key={instrument.id}>
            {instrument.instrumentMakeModel}
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
