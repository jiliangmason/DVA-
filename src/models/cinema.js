import * as FetchService from '../services/fetch';
import ArrayHandler from '../utils/array';

export default {
  namespace: 'cinema',
  state: {
    list: [],
    district: []
  },
  reducers: {
    saveCinemaList(state, {payload: {data}}) {
      let disPak = [];
      let dataPak = {};

      for (let item of data) {
        dataPak = {
          name: item.district.name,
          pinyin: item.district.pinyin
        };
        disPak.push(dataPak);
      }

      disPak = ArrayHandler.unique(disPak, 'name');
      //console.log(disPak);
      disPak.sort(function (a, b) {
          return a.pinyin.localeCompare(b.pinyin)
      });

      return {...state, district: disPak, list: data}
    }
  },
  effects: {
      *fetchCinemaDetail({payload: {id}}, {put, call}) {
        const {data} = yield call(FetchService.fetCinemaDetails, id);
        console.log('cinema-detail:', data);
        yield put({type: 'saveCinemaList', payload: {data: data.data.cinemas}})
      }
  },
  subscriptions: {},
};
