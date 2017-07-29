/**
 * Created by Administrator on 2017/7/29 0029.
 */
/**
 * Created by Administrator on 2017/7/25 0025.
 */
import React from 'react';
import {Icon} from 'antd';
import {connect} from 'dva';
import styles from './Film.css';
import antStyle from '../../../node_modules/antd/dist/antd.css';

class Film extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.location.query.type ? this.props.location.query.type : 'nowPlay',
    }
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

  }

  render() {
    const {} = this.props;
    return (
      <div>

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
      getNowMore: state.film.getNowMore
  };
}

export default connect(mapStateToProps)(Film);
