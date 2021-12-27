import React from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistic from '../Statistics/Statistics';
import Notification from '../Statistics/Notification';

class Logics extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  handleGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    const countTotalFeedback = this.state.good + this.state.neutral + this.state.bad;
    const positivePercentage = Math.round((this.state.good / countTotalFeedback) * 100);
    return (
      <div>
        <FeedbackOptions
          handleGood={this.handleGood}
          handleNeutral={this.handleNeutral}
          handleBad={this.handleBad}
        />
        {countTotalFeedback === 0 ? (
          <Notification message={'There is no feedback'}></Notification>
        ) : (
          <Statistic
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={countTotalFeedback}
            positivePercentage={positivePercentage}
          />
        )}
      </div>
    );
  }
}

export default Logics;
