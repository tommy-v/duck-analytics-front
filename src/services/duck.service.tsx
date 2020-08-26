import api from '../utils/api';

export default {
  createNewReport: async (newReport: any) => {
    return await simulateApiCall();
  },
};

const simulateApiCall = (time = 3000) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
