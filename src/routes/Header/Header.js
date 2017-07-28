/**
 * Created by Administrator on 2017/7/25 0025.
 */
import React from 'react';
import styles from './Header.css';
import {Icon} from 'antd';
import antStyle from '../../../node_modules/antd/dist/antd.css';

export default class Header extends React.Component {
  static defaultProps = {
      title: '卖座电影'
  };

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render() {
    const {title} = this.props;
    return (
      <div id={styles.header}>
        <a className={styles.go_menu} href="javascript:;"><Icon type="bars"/></a>
        <div className={styles.title}>
          <p>{title}</p>
          <a className={styles.go_city}>北京<Icon type="down"/></a>
        </div>
        <a className={styles.go_mine}><Icon type="user"/></a>
      </div>
    );
  }

}


