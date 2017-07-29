import * as FetchService from '../services/fetch';

export default {
  namespace: 'detail',
  state: {
      filmDetail: {}
  },
  reducers: {
    saveFilmDetail(state, {payload: {data}}) {
      return {...state, filmDetail: data}
    }
  },
  effects: {
    *fetchFilmDetail({payload: {id}}, {call, put}) {
      const {data} = yield call(FetchService.fetchFilmDetails, id);
      console.log('film-detail:', data);
      yield put({type: 'saveFilmDetail', payload: {data: data.data.film}})
    }
  },
  subscriptions: {},
};
