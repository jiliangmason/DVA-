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
    super(props);
    this.state = {
      area: ''
    }
  }

  componentDidMount() {
    const { id } = this.props.location.query;
    const {dispatch} = this.props;
    dispatch({type: 'cinema/fetchCinemaDetail', payload: {id: id}})
  };

  shouldComponentUpdate(nextProps, nextState) {
    return ((nextProps.district !== this.props.district) || (nextProps.list !== this.props.list) || (nextState.area !== this.state.area))
  }

  changeDistrict(pinyin) {
    this.setState({
      area: this.state.area == pinyin ? '' : pinyin
    })
  }

  render() {
    const {district, list} = this.props;
    const {id} = this.props.location.query;

    let disList = district.length && district.map((items, index)=>{
          return (<div key={index} className={styles.item}>
            <div className={styles.title} onClick={this.changeDistrict.bind(this, items.pinyin)}>
              {items.name}
            </div>
            <div className={this.state.area == items.pinyin ? `${styles.list} ${styles.active}` : styles.list}>
              {
                list.length && list.map((item, index)=>{
                  if (items.pinyin == item.district.pinyin) {
                    return (<div key={index} className={styles.shop}>
                      <a href={`http://m.maizuo.com/v4/?co=maizuo#!/film/${id}/cinema`} >
                        <div className={styles.desc}>
                          <div className={styles.title}>{item.name} <span>座</span>{(item.itemTypes.length>3)&&<span>通</span>}</div>
                          <div className={styles.tip}>
                            {
                              item.labels.length && item.labels.map((ele, index)=>{
                                return (<span key={index} className={ele.type.toLocaleLowerCase() == 'sundry' ? styles.sundry : styles.discount}>{ele.name}</span>)
                              })
                            }
                          </div>
                          <div className={styles.area}>{item.address}</div>
                          <div className={styles.extra}>距离未知 | 剩余{item.avaliableSchedule}场</div>
                        </div>
                        <div className={styles.price}>￥{item.minimumPrice}</div>
                      </a>
                    </div>)
                  }

                })
              }
            </div>
          </div>)
      });
    return (
      <div id={styles.cinema}>
        {disList}
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
