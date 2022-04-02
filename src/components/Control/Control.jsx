import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Control = props => {

  const paramsName = Object.keys(props.params).splice(0, 3)

  return (
    <div>
      {paramsName.map(param => <button key={param} onClick={() => props.incrementValue(param)}>{param}</button>)}
    </div>
  );
};

export default Control;

