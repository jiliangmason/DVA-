import * as FetchService from '../services/fetch';

export default {
  namespace: 'film',
  state: {
    nowPlayingList:[],
    comingSoonList:[],
    nowplayPage: 0,
    comingPage: 0,
    getNowMore: true,
    getComMore: true
  },
  reducers: {
    saveNowPlayList(state, {payload: {nowPlayData, pageNum}}) {
      return {
        ...state,
        nowPlayingList: state.nowPlayingList.concat(nowPlayData),
        getNowMore: (pageNum.current < pageNum.total),
        nowplayPage: pageNum.current
      }
    },

    saveComingList(state, {payload: {comPlayData, comPageNum}}) {
      return {
        ...state,
        comingSoonList: state.comingSoonList.concat(comPlayData),
        getComMore: (comPageNum.current < comPageNum.total),
        comingPage: comPageNum.current
      }
    }
  },
  effects: {
    *fetchNowPlayList({payload: {nowPage}}, {call, put}) {
      const {data} = yield call(FetchService.fetchNowPlayItems, nowPage);
      console.log('now-PlayList:', data);
      yield put({type: 'saveNowPlayList', payload: {nowPlayData: data.data.films, pageNum: data.data.page}})
    },

    *fetchComingList({payload: {comPage}}, {call, put}) {
      const {data} = yield call(FetchService.fetchComingItems, comPage);
      console.log('com-SoonList:', data);
      yield put({type: 'saveComingList', payload: {comPlayData: data.data.films, comPageNum: data.data.page}})
    }
  },
  subscriptions: {},
};
