/**
 * Created by Administrator on 2017/7/25 0025.
 */
import React from 'react';
import {Icon} from 'antd';
import styles from './BakTop.css';
//import fontStyle from '../../icon/iconfont.css'

export default class BakTop extends React.Component{
  constructor(props) {
    super(props)
  }

  bakTop() {
    let speed = 10;
    let timer = null;
    timer = setInterval(()=>{
      if (document.body.scrollTop > 0) {
        document.body.scrollTop = document.body.scrollTop - speed > 0 ? document.body.scrollTop - speed : 0
        speed += 20;
      }
      else {
        clearInterval(timer)
      }
    }, 20)

  }

  render() {
    const {bakTop} = this.props;
    return (
      <div className={bakTop ? `${styles.go_top} ${styles.active}` : styles.go_top} onClick={this.bakTop.bind(this)}>
          <i className="icon iconfont icon-top-copy"></i>
      </div>
    )
  }

}
