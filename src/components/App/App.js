/**
 * Created by Administrator on 2017/7/25 0025.
 */
/*
 * 根目录所对应的root组件
 * */
import React from 'react';
import Header from '../../routes/Header/Header';
import Slider from '../../components/Slider/Slider';
import BakTop from '../../components/BakTop/BakTop';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTop: false,
      showSlider: false
    };
    this.flag = false;
    this.scrollHandler = this.scrollHandler.bind(this);
    this.watchSliderStatus = this.watchSliderStatus.bind(this)
  }

  scrollHandler() {
    if (this.flag) {
        if (document.body.scrollTop > 200) {
          this.setState({
            showTop: true
          })
        }

        else {
          this.setState({
            showTop: false
          })
        }
    }

  }

  componentDidMount() {
    this.flag = true;
    window.addEventListener('scroll', this.scrollHandler, false)
  }

  componentWillUnmount() {
    this.flag = false;
    window.removeEventListener('scroll', this.scrollHandler, false);
  }

  watchSliderStatus(status) {
    this.setState({
      showSlider: status
    })
  }

  render() {
    return (
      <div>
        <Header statusFn={this.watchSliderStatus}/>
        <Slider show={this.state.showSlider}/>
        <ReactCSSTransitionGroup transitionName="page" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          <div id="container" className={styles.container} key={this.props.location.pathname}>
            {this.props.children}
          </div>
        </ReactCSSTransitionGroup>
        <BakTop bakTop={this.state.showTop}/>
      </div>
    );
  }

}

