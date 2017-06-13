import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Button from '../../components/common/Button/Button';

import './TopNav.css';

class TopNav extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { btnText, onBtnClick } = this.props;
    return (
      <div className="TopNav">
        <h1 className="title"> Memo board</h1>
        <Button text={btnText} onClick={onBtnClick}/>
      </div>
    );
  }
}

TopNav.propTypes = {
  onBtnClick: PropTypes.func,
  btnText: PropTypes.string
};

export default TopNav;
