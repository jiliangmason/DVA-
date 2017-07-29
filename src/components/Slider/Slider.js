/**
 * Created by Administrator on 2017/7/29 0029.
 */
/**
 * Created by Administrator on 2017/7/25 0025.
 */
import React from 'react';
import styles from './Slider.css';
import {Icon} from 'antd';
import antStyle from '../../../node_modules/antd/dist/antd.css';

export default class Slider extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const {show} = this.props;
    return (
      <aside className={styles.application_sidebar}>
        <div className={`${styles.sidebar_container} ${styles.sidebar_transition}`} style={show?{opacity:1,zIndex:99}:{opacity:0,zIndex:-1}}>
          <div className={styles.sidebar_overlay}>
            <nav className={styles.leftNav_transition} style={show?{right:110+'px'}:{right:320+'px'}}>
              <ul>
                <li><a><span>首页</span><Icon type="right"/></a></li>
                <li><a><span>影片</span><Icon type="right"/></a></li>
                <li><a><span>影院</span><Icon type="right"/></a></li>
                <li><a><span>我的</span><Icon type="right"/></a></li>
                <li><a><span>卖座网查询</span><Icon type="right"/></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </aside>
    );
  }

}


