/**
 * Created by Administrator on 2017/7/29 0029.
 */
/**
 * Created by Administrator on 2017/7/25 0025.
 */
import React from 'react';
import styles from './Slider.css';
import {Icon} from 'antd';
import {routerRedux} from 'dva/router';
import {connect} from 'dva';
import antStyle from '../../../node_modules/antd/dist/antd.css';

class Slider extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  gotoHome() {
    const {dispatch, hideFn} = this.props;
    dispatch(routerRedux.push({
      pathname: 'home'
    }));
    hideFn();
  }

  gotoFilm() {
    const {dispatch, hideFn} = this.props;
    dispatch(routerRedux.push({
      pathname: 'film'
    }));
    hideFn();
  }

  gotoCinema() {
    //let id = '1501690596752';
    /*const {dispatch, hideFn, nowPlayingList} = this.props;
    if (nowPlayingList.length > 0) {
      dispatch(routerRedux.push({
        pathname: 'cinema',
        query: {
          id: nowPlayingList[0].id
        }
      }));
    }*/

    //hideFn();
  }

  gotoLogin() {
    const {dispatch, hideFn} = this.props;
    dispatch(routerRedux.push({
      pathname: 'login'
    }));
    hideFn();
  }

  render() {
    const {show} = this.props;
    return (
      <aside className={styles.application_sidebar}>
        <div className={`${styles.sidebar_container} ${styles.sidebar_transition}`} style={show?{opacity:1,zIndex:99}:{opacity:0,zIndex:-1}}>
          <div className={styles.sidebar_overlay}>
            <nav className={styles.leftNav_transition} style={show?{right:110+'px'}:{right:320+'px'}}>
              <ul>
                <li><a onClick={this.gotoHome.bind(this)}><span>首页</span><Icon type="right"/></a></li>
                <li><a onClick={this.gotoFilm.bind(this)}><span>影片</span><Icon type="right"/></a></li>
                <li><a onClick={this.gotoCinema.bind(this)}><span>影院</span><Icon type="right"/></a></li>
                <li><a onClick={this.gotoLogin.bind(this)}><span>我的</span><Icon type="right"/></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </aside>
    );
  }

}

function mapStateToProps(state) {
  return {
    //nowPlayingList: state.film.nowPlayingList,
  };
}

export default connect(mapStateToProps)(Slider);


