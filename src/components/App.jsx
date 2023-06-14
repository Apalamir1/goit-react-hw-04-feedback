import React, { Component } from 'react';
import Statistics from './Statistic/Statistic';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Section/Section.jsx';
import Notification from './Notification/Notification';

const options = [
  { name: 'good', title: 'Good' },
  { name: 'neutral', title: 'Neutral' },
  { name: 'bad', title: 'Bad' },
];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onClickBtn = event => {
    this.setState(previosState => ({
      [event.target.name]: previosState[event.target.name] + 1,
    }));
  };
  countTotalFeedback = () => {
    const total = Object.values(this.state);
    return total.reduce((acc, value) => (acc += value), 0);
  };
  countPositiveFeedbackPercentage = () => {
    const totalPercents = this.countTotalFeedback();
    return ((this.state.good / totalPercents) * 100).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalPer = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <Section title="Leave feedback message">
        <FeedbackOptions options={options} onLeaveFeedback={this.onClickBtn} />

        {totalPer === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalPer}
            positivePercentage={positive}
          />
        )}
      </Section>
    );
  }
}
export default App;
