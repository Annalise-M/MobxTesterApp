import { createInstrumentStore } from './InstrumentStoreFunction';

describe('createInstrumentStore', () => {
  it('returns an object that is the Instrument store', () => {
    const InstrumentStore = createInstrumentStore();
    expect(InstrumentStore).toEqual({
      Instruments: [],
      addInstrument: InstrumentStore.addInstrument,
      removeInstrument: InstrumentStore.removeInstrument
    });
  });
});
