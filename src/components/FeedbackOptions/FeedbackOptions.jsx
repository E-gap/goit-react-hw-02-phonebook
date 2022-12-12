import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttons = Object.keys(options);

  return (
    <div className={css.title}>
      <ul className={css.buttonsList}>
        {buttons.map(button => (
          <li key={uuidv4()}>
            <button
              key={uuidv4()}
              className={css.button}
              type="button"
              name={button}
              onClick={onLeaveFeedback}
            >
              {button}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
