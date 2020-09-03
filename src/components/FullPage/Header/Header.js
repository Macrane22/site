import React, { useRef, useEffect } from 'react';
import styles from './Header.module.scss';
import { Link } from 'gatsby';
import postStyles from '../../Post/Post.module.scss';
import tabStyles from '../../Tabs/Tabs.module.scss';
import Map from '../../Map/Map';
import About from '../About/About';
import Table from '../Table/Table';

class Header extends React.Component { // const Header = (props) => {
  constructor(props) {
    super(props);
    this.state = { view: 'map' };
    console.log(this.state);
  }

  toggleView(_view) {
    this.setState({ view: _view });
  }

  render() {
    let mainBody;

    if (this.state.view === 'map') {
      mainBody = <Map />;
    } else if (this.state.view === 'about') {
      mainBody = <About />;
    } else if (this.state.view === 'table') {
      mainBody = <Table />;
    } else {
      mainBody = <div></div>;
    }

    return (
    <>
    <div className={styles['header__list']}>
        <div></div>
        <div className={styles['full-page__header__home']}>
            <Link className={styles['header__list__home-button']} to="/projects">Home</Link>
        </div>
        <div className={styles['full-page__header__center-padding']}></div>
        <div className={styles['full-page__header__title']}>
            { this.props.title && <h1 className={styles['full-page__title']}>{this.props.title}</h1>}
        </div>
{/*         <div className={styles['full-page__header__subsection']}>
              <h3 className={styles['full-page__title']}>{this.state.view.charAt(0).toUpperCase() + this.state.view.slice(1)}</h3>
        </div> */}
        <div className={styles['full-page__header__tabs']}>
            <button className={this.state.view === 'map' ? tabStyles['tab-list__item__active'] : tabStyles['tab-list__item'] }
            onClick = {() => {this.toggleView('map');}}>Map</button>
            <button className={this.state.view === 'about' ? tabStyles['tab-list__item__active'] : tabStyles['tab-list__item'] }
             onClick = {() => this.toggleView('about')}>About</button>
            <button className={this.state.view === 'table' ? tabStyles['tab-list__item__active'] : tabStyles['tab-list__item'] }
             onClick = {() => this.toggleView('table')}>Table</button>
        </div>
        <div></div>
    </div>

    <div className={styles['full-page']}>
        { mainBody }
    </div>

    </>
    );
  }
}

export default Header;