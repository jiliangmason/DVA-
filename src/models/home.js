import * as FetchService from '../services/fetch';

export default {
  namespace: 'home',
  state: {
    banner: [],
    nowplay: [],
    coming: []
  },
  reducers: {
    saveBannerList(state, {payload: {billboards}}) {
      //console.log('save1', billboards);
      return {...state, banner: billboards}
    },

    saveNowPlay(state, {payload: {films}}) {
      return {...state, nowplay: films}
    },

    saveComingSoon(state, {payload: {films}}) {
      return {...state, coming: films}
    }
  },
  effects: {
    *fetchBanner({}, {put, call}) {
      const {data} = yield call(FetchService.fetchBannerList);
      console.log('bannerList:', data);
      yield put({type: 'saveBannerList', payload: {billboards: data.data.billboards}});
      yield put({type: 'fetchNowPlay'});
    },

    *fetchNowPlay({}, {call, put}) {
      const {data} = yield call(FetchService.fetchNowPlay);
      console.log('nowPlay:', data);
      yield put({type: 'saveNowPlay', payload: {films: data.data.films}});
      yield put({type: 'fetchComing'})
    },

    *fetchComing({}, {call, put}) {
      const {data} = yield call(FetchService.fetchComingSoon);
      console.log('comingSoon:', data);
      yield put({type: 'saveComingSoon', payload: {films: data.data.films}})
    }
  },
  subscriptions: {},
};
