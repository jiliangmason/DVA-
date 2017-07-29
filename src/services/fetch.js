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

/*
* 获取电影详情信息
* */
export function fetchFilmDetails(id) {
  return request(`/api/film/${id}/?__t=${new Date()*1}`)
}

/*
* 获取NowPlayList的指定页数据
* */
export function fetchNowPlayItems(page) {
  return request(`/api/film/now-playing?page=${page}&count=10`)
}

/*
* 获取即将上映电影指定页
* */
export function fetchComingItems(page) {
  return request(`/api/film/coming-soon?page=${page}&count=10`)
}


