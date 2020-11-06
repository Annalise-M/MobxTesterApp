import React from 'react';
import InstrumentList from '../components/InstrumentList';
import InstrumentInput from '../components/InstrumentInput';
import { InstrumentProvider } from '../store/FunctionStoresProvider';

const Function = () => {
  return (
    <>
      <InstrumentProvider>
        <InstrumentList />
        <InstrumentInput />
      </InstrumentProvider>
    </>
  );
};

export default Function;
