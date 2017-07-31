/**
 * Created by Administrator on 2017/7/31 0031.
 */
/**
 * Created by Administrator on 2017/7/25 0025.
 */
import React from 'react';
import {Icon} from 'antd';
import styles from './Cinema.css';
import {connect} from 'dva';

class Cinema extends React.Component{
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { id } = this.props.location.query;
    const {dispatch} = this.props;
    dispatch({type: 'cinema/fetchCinemaDetail', payload: {id: id}})
  };

  render() {
    const {} = this.props;
    return (
      <div id={styles.cinema}>
        cinema
      </div>
    )
  }

}


function mapStateToProps(state) {
  return {
    district: state.cinema.district,
    list: state.cinema.list
  };
}

export default connect(mapStateToProps)(Cinema);
