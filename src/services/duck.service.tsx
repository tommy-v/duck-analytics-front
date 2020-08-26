import api from '../utils/api';

// TODO Create two seperate services later if the app get bigger.

export default {
  createNewReport: async (newReport: any) => {
    const res = await api.post('/report/create', newReport);
    return res.data;
  },
  getAll: async () => {
    const res = await api.get('/food/all');
    return res.data;
  }
};

const simulateApiCall = (time = 3000) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
