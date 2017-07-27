/**
 * Created by Administrator on 2017/7/17 0017.
 */
import request from '../utils/request';
//request中的命名并没有规定

/*
* 获取首页轮播图
* */
export function fetchBannerList() {
  return request(`/api/billboard/home?t=${new Date()*1}&callback=?`);
}

export function fetchNowPlay() {
  return request(`/api/film/now-playing?_t=${new Date()*1}&page=1&count=5`);
}

export function fetchComingSoon() {
  return request(`/api/film/coming-soon?__t=${new Date()*1}&page=1&count=3`);
}


