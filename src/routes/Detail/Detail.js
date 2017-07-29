import React from 'react';
import { connect } from 'dva';
import {routerRedux} from 'dva/router'
import styles from './Detail.css';
import FormatDate from '../../utils/time';

class Detail extends React.Component{
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {location, dispatch} = this.props;
    console.log('电影id：', location.query.id);
    dispatch({type: 'detail/fetchFilmDetail', payload: {id: location.query.id}})
  }

  /*
  * 防止页面获取两次detail触发重新渲染，优化性能
  * */
  shouldComponentUpdate(nextProps) {
    if (this.props.detail == nextProps.detail) {
      return false
    }
    else {
      return true
    }
  }

  gotoTicket(filmId) {
    const {dispatch} = this.props;
    dispatch(routerRedux.push({
      pathname: 'cinema',
      query: {
        id: filmId
      }
    }))
  }

  render() {
    const {detail} = this.props;
    let nameList = detail.actors && detail.actors.map((item, index)=>{
        return (<span key={index}>{item.name}</span>)
      });

    return (JSON.stringify(detail)!=='{}') ? (
      <div id={styles.detail}>
        <div className={styles.cover}><img src={detail.cover.origin} /></div>
        <div className={styles.desc}>
          <div className={styles.title}>影片简介</div>
          <div className={styles.info}>
            <p>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：{detail.director}</p>
            <p>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：{nameList}</p>
            <p>地区语言：{detail.nation}({detail.language})</p>
            <p>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：{detail.category}</p>
            <p>上映日期：{FormatDate.formatDate(detail.premiereAt)}</p>
            <p className={styles.p}>{detail.synopsis}</p>
          </div>
        </div>
        <a className={styles.go_pay} style={{display:detail.isNowPlaying?'block':'none'}} onClick={this.gotoTicket.bind(this, detail.id)}>立即购票</a>
      </div>
      ) :
      (<div id={styles.detail}>
      <p className={styles.no_tip}>正在查询该影片详情</p>
    </div>)
  }

}

function mapStateToProps(state) {
  return {
    detail: state.detail.filmDetail
  };
}

export default connect(mapStateToProps)(Detail);
