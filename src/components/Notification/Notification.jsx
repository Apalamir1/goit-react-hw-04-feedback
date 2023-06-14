import PropTypes from 'prop-types';
import css from './Notification.module.css';

function Notification({ message }) {
  return <h2 className={css.title}>{message}</h2>;
}
export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
