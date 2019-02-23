import siteConfig from './store.json';

const getAllSectionData = (delay = 0) => {
  return new Promise(resolve => setTimeout(() => resolve(siteConfig), delay));
};

export { getAllSectionData };
