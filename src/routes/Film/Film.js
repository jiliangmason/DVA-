/**
 * Created by Administrator on 2017/7/29 0029.
 */
/**
 * Created by Administrator on 2017/7/25 0025.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Icon} from 'antd';
import {connect} from 'dva';
import styles from './Film.css';
import FormatDate from '../../utils/time';
import antStyle from '../../../node_modules/antd/dist/antd.css';

class Film extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.location.query.type ? this.props.location.query.type : 'nowPlay',
    };
    this.loadMoreHandler = this.loadMoreHandler.bind(this);
  }

  componentDidMount() {
    let {type} = this.state;
    let {dispatch, nowPlayingList, comingSoonList, nowplayPage, comingPage} = this.props;
    if ((nowplayPage == 0 && type == 'nowPlay')) {
      document.body.scrollTop = 0;
    }

    if (type == 'nowPlay' && nowPlayingList.length == 0) {
      dispatch({type: 'film/fetchNowPlayList', payload: {nowPage: ++nowplayPage}})
    }

    if (type == 'comeSoon' && comingSoonList.length == 0) {
      dispatch({type: 'film/fetchComingList', payload: {comPage: ++comingPage}})
    }

    window.addEventListener('scroll', this.loadMoreHandler, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.loadMoreHandler, false);
  }

  /*
  * 防止两次获取数据引发重渲染
  * */
  shouldComponentUpdate(nextProps, nextState) {
    if ((this.props.nowPlayingList !== nextProps.nowPlayingList) || (this.props.comingSoonList !== nextProps.comingSoonList) || this.state.type !== nextState.type) {
      return true
    }
    else {
      return false
    }

  }

  loadMoreHandler() {
    let listH = document.getElementById('container').offsetHeight;
    if (listH <= document.body.scrollTop + window.innerHeight) {
      let {nowplayPage, comingPage, getNowMore, getComMore, dispatch} = this.props;
       let {type} = this.state;
       if (type == "nowPlay" && getNowMore) {
       dispatch({type: 'film/fetchNowPlayList', payload: {nowPage: ++nowplayPage}})
       }
       else if (type == 'comeSoon' && getComMore) {
       dispatch({type: 'film/fetchComingList', payload: {comPage: ++comingPage}})
       }
      //console.log('开始加载数据', listH, document.body.scrollTop + document.body.clientHeight);
    }
  }

  gotoTicket(id) {

  };

  gotoDetail(id) {

  };

  changeTabHandler(tab) {
    let {dispatch, nowPlayingList, comingSoonList, nowplayPage, comingPage} = this.props;
    this.setState({
      type: tab
    });
    if (tab == 'nowPlay' && nowPlayingList.length == 0) {
      dispatch({type: 'film/fetchNowPlayList', payload: {nowPage: ++nowplayPage}})
    }

    if (tab == 'comeSoon' && comingSoonList.length == 0) {
      dispatch({type: 'film/fetchComingList', payload: {comPage: ++comingPage}})
    }
  }

  render() {
    const {nowPlayingList, comingSoonList} = this.props;
    const {type} = this.state;
    let nowList = nowPlayingList.length && nowPlayingList.map((item, index)=> {
        return (
          <a href="javascript:;" className={styles.item} key={index} onClick={this.gotoTicket.bind(this, item.id)}>
            <div className={styles.avater}><img src={item.poster.thumbnail} alt=""/></div>
            <div className={styles.info}>
              <h3>{item.name}</h3>
              <p>{item.intro}</p>
              <p>
                <span>{item.cinemaCount}</span>家影院上映&nbsp;&nbsp;&nbsp;&nbsp;
                <span>{item.watchCount}</span>人购票
              </p>
            </div>
            <div className={styles.count}>{item.grade}</div>
          </a>)
      });

    let comingList = comingSoonList.length && comingSoonList.map((item, index)=> {
        return (
          <a href="javascript:;" className={styles.item} key={index} onClick={this.gotoDetail.bind(this, item.id)}>
            <div className={styles.avater}><img src={item.poster.thumbnail} alt=""/></div>
            <div className={styles.info}>
              <h3>{item.name}</h3>
              <p>{item.intro}</p>
              <p><span className={styles.time}>{FormatDate.formatDate2(item.premiereAt)}</span></p>
            </div>
            <div className={styles.count}></div>
          </a>)
      });

    return (
      <div id={styles.film} ref="container">
        <div className={styles.tabs}>
          <div onClick={this.changeTabHandler.bind(this, 'nowPlay')} className={type == 'nowPlay' ? `${styles.item} ${styles.active}` : styles.item}>
            正在热映
          </div>
          <div onClick={this.changeTabHandler.bind(this, 'comeSoon')} className={type == 'comeSoon' ? `${styles.item} ${styles.active}` : styles.item}>
            即将上映
          </div>
        </div>
        <div className={styles.tab_content}>
          <div
            className={type == 'nowPlay' ? `${styles.now_playing_list} ${styles.active}` : styles.now_playing_list}>{nowList}</div>
          <div
            className={type == 'comeSoon' ? `${styles.coming_soon_list} ${styles.active}` : styles.coming_soon_list}>{comingList}</div>
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    nowPlayingList: state.film.nowPlayingList,
    comingSoonList: state.film.comingSoonList,
    nowplayPage: state.film.nowplayPage,
    comingPage: state.film.comingPage,
    getNowMore: state.film.getNowMore,
    getComMore: state.film.getComMore
  };
}

export default connect(mapStateToProps)(Film);
