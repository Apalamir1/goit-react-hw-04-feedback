import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.list}>
      {options.map(option => (
        <li className={css.item} key={option.name}>
          <button
            type="button"
            name={option.name}
            className={css.btn}
            onClick={onLeaveFeedback}
          >
            {option.title}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
