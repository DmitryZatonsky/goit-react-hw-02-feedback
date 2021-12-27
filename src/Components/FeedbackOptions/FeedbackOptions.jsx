import PropTypes from 'prop-types';

const FeedbackOptions = ({ handleGood, handleNeutral, handleBad }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <button type="button" onClick={handleGood}>
        Good
      </button>
      <button type="button" onClick={handleNeutral}>
        Neutral
      </button>
      <button type="button" onClick={handleBad}>
        Bad
      </button>
      <h2>Statistics</h2>
    </div>
  );
};

FeedbackOptions.propTypes = {
  handleGood: PropTypes.number.isRequired,
  handleNeutral: PropTypes.number.isRequired,
  handleBad: PropTypes.number.isRequired,
};

export default FeedbackOptions;
