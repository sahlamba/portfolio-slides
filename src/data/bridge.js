import { section } from './store.json';

const getAllSectionData = (delay = 0) => {
  return new Promise(resolve => setTimeout(() => resolve({ section }), delay));
};

export { getAllSectionData };
