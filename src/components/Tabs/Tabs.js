import React, { Component } from 'react';
// import PropTypes from "prop-types"
import styles from './Tabs.module.scss';

import Tab from './Tab';

class Tabs extends Component {
/*   static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  } */

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: { children, alignment },
      state: { activeTab },
    } = this;

    let className;

   if (alignment === 'full-page__tabs_right') {
     className = styles[alignment];
   }

   else {
     className = styles['tab-list'];
   }

   console.log("Alignment: ", alignment);

    return (
      <div>
        <ol className={className}>
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div>
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            // console.log("bbbbbb", child.props)
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
