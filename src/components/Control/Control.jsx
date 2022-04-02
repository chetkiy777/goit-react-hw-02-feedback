import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Control = props => {

  const paramsName = Object.keys(props.params).splice(0, 3)

  return (
    <div>
      {paramsName.map(param => 
        <button 
          className={styles.btn} 
          key={param} 
          onClick={() => props.incrementValue(param)}>
          {param}
        </button>)}
    </div>
  );
};

Control.propTypes = {
  incrementValue: PropTypes.func,
  params: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positiveFeedBack: PropTypes.any,
  })
}

export default Control;

