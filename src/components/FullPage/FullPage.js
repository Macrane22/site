/*
home   title   tabs
V I S U A L I Z A T I O N
*/

import React, { useRef, useEffect } from 'react';
import styles from './FullPage.module.scss';
import postStyles from '../Post/Post.module.scss';
import tabStyles from '../Tabs/Tabs.module.scss';
import { Link } from 'gatsby';

//class FullPage extends React.Component {
/*   constructor(props) {
    super(props);
    this.state = { view: 'map' };
    // const { list, map, description  } = children;
  } */

  const FullPage = (props) => {

  //render() {
    const pageRef = useRef();
    useEffect(() => {
      pageRef.current.scrollIntoView();
    });

    let mainBody;


/*     if (this.state.view === 'map') {
      mainBody = <Map />;
    } else if (this.state.view === 'about') {
      mainBody = <About />;
    } else if (this.state.view === 'list') {
      mainBody = <List />;
    } else {
      mainBody = <div></div>;
    } */

    return (
        <div ref={pageRef} className={styles['full-page']}>
            <div className={styles['full-page__header']}>
                <div className={styles['full-page__header__home']}>
                    <Link className={postStyles['post__home-button']} to="/projects">Home</Link>
                </div>
                <div className={styles['full-page__header__title']}>
                    { props.title && <h1 className={styles['full-page__title']}>{props.title}</h1>}
                </div>
                <div className={styles['full-page__header__tabs']}>
                    <button className={tabStyles['tab-list__item']}>Map</button>
                    <button className={tabStyles['tab-list__item']}>About</button>
                    <button className={tabStyles['tab-list__item']}>List</button>
{/*                 <button className='blah' onClick = {this.setState({ view: 'map' })}></button>
                    <button className='blah' onClick = {this.setState({ view: 'about' })}></button>
                    <button className='blah' onClick = {this.setState({ view: 'list' })}></button> */}
                </div>
            </div>
            <div className={styles['full-page__body']}>
                {/* {this.props.children} */}
                {mainBody}
            </div>
        </div>
    );
  }
//}

export default FullPage;