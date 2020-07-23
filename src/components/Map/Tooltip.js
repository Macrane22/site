import React, { Component } from 'react';
import styles from './Tooltip.module.scss';

class Tooltip extends Component {
  render() {
    return (
        <div className={styles['tooltip']}>
            <div className={styles['tooltip__country']}>
            <p>Country</p>
            </div>
            <div className={styles['tooltip__headline']}>
            <p>Headline</p>
            </div>
        </div>
    );
  }
}

export default Tooltip;