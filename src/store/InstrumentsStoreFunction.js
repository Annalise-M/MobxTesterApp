import { nanoid } from 'nanoid';

export const createInstrumentStore = () => {
  return ({
    instruments: [],
    addInstrument(instrumentMakeModel) {
      this.instruments.push({
        instrumentMakeModel,
        id: nanoid(),
      });
    },
    removeInstrument(id) {
    // eslint-disable-next-line max-len
      this.instruments = this.instruments.filter((instrument) => instrument.id !== id);
    },
  });
};
