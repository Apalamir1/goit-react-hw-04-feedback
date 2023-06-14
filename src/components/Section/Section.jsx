import PropTypes from 'prop-types';
import css from './Section.module.css';

function Section({ title, children }) {
  return (
    <div className={css.section}>
      {title && <h1 className={css.title}>{title}</h1>}
      {children}
    </div>
  );
}
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
