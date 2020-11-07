import { nanoid } from 'nanoid';

export const createInstrumentStore = () => {
  return ({
    instruments: [],
    addInstrument({ 
      makeModel,
      makeYear,
      style,
      scale,
      condition,
      url,
      price
    }) {
      this.instruments.push({
        makeModel, makeYear, style, scale, condition, url, price,
        id: nanoid(),
      });
    },
    removeInstrument(id) {
    // eslint-disable-next-line max-len
      this.instruments = this.instruments.filter((instrument) => instrument.id !== id);
    },
  });
};
