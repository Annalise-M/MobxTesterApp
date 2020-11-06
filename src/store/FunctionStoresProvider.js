/* eslint-disable max-len */
import React, { useContext, createContext } from 'react';
import { createInstrumentStore } from './InstrumentsStoreFunction';
import { useLocalObservable } from 'mobx-react-lite';

const InstrumentContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const InstrumentProvider = ({ children }) => {
  const instrumentStore = useLocalObservable(() => createInstrumentStore());

  return (
    <InstrumentContext.Provider value={instrumentStore}>
      {children}
    </InstrumentContext.Provider>
  );
};

export const useInstrumentStore = () => useContext(InstrumentContext);
