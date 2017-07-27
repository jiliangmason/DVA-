import React from 'react';
import {connect} from 'dva';
import ReactSwipe from 'react-swipe';
import { routerRedux, Link } from 'dva/router';
import styles from './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({type: 'home/fetchBanner'});
    //dispatch({type: 'home/fetchNowPlay'});
  }

  componentWillReceiveProps(nextProps) {

  }

  playLinkHandler() {
    //跳转
  }

  comingLinkHandler() {
    //跳转
  }

  linkHandler() {
    const {dispatch} = this.props;
    dispatch(routerRedux.push({
      pathname: 'film',
      query: {
        type:'nowPlay'
      }
    }))
  }

  linkMoreHandler() {
    const {dispatch} = this.props;
    dispatch(routerRedux.push({
      pathname: 'film',
      query: {
        type:'comeSoon'
      }
    }))
  }

  //事件标准化
  formatDate(time) {
    let date = new Date(time*1),
        month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1) ,
        day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();

    return `${month}月${day}日上映`
  }

  render() {
    const {banner, nowplay, coming} = this.props;
    let bannerList = banner.length &&
      banner.map((item, index)=> {
      return (<div key={index} className={styles.slide}>
        <a target="_blank" href={item.url}><img src={item.imageUrl} alt=""/></a>
      </div>)
    });

    return (
      <div id={styles.home}>
        <div className="banner">
          <ReactSwipe className={styles.banner_swiper} swipeOptions={{auto: 2000, autoHeight: true}} key={banner.length}>
            {
              bannerList
            }
          </ReactSwipe>
        </div>
        <div className={styles.now_playing}>
          {
            nowplay.length > 0
            ? nowplay.map((item, index)=> {
            return (
              <div className={styles.item} key={index} onClick={this.playLinkHandler.bind(this)}>
                <img src={item.cover.origin} alt=""/>
                <div className={styles.desc}>
                  <div className={styles.info}>
                    <h4>{item.name}</h4>
                    <p>{item.cinemaCount}家影院上映 {item.watchCount}人购票</p>
                  </div>
                  <div className={styles.count}>{item.grade}</div>
                </div>
              </div>
            )
          })
          : ''
          }
          <a href="javascript:;" className={styles.go_more} onClick={this.linkHandler.bind(this)}>更多热映电影</a>
        </div>
        <div className={styles.coming_soon}>
          {
            coming.length&&coming.map((item, index)=>{
              return (<div className={styles.item} key={index} onClick={this.comingLinkHandler.bind(this)}>
                  <img src={item.cover.origin} alt=""/>
                  <div className={styles.desc}>
                    <div className={styles.info}>
                      <h4>{item.name}</h4>
                    </div>
                    <div className={styles.time}>{this.formatDate(item.premiereAt)}</div>
                  </div>
              </div>)
            })
          }
          <a href="javascript:;" className={styles.go_more} onClick={this.linkMoreHandler.bind(this)}>更多热映电影</a>
        </div>

      </div>
    );
  }

}


function mapStateToProps(state) {
  return {
    banner: state.home.banner,
    nowplay: state.home.nowplay,
    coming: state.home.coming
  };
}

export default connect(mapStateToProps)(Home);
