import { useState } from 'react';
import Statistics from './Statistic/Statistic';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Section/Section.jsx';
import Notification from './Notification/Notification';

const options = [
  { name: 'good', title: 'Good' },
  { name: 'neutral', title: 'Neutral' },
  { name: 'bad', title: 'Bad' },
];
export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickBtn = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(previosState => previosState + 1);
        break;
      case 'neutral':
        setNeutral(previosState => previosState + 1);
        break;
      case 'bad':
        setBad(previosState => previosState + 1);
        break;
      default:
        return;
    }
  };

  const total = good + neutral + bad;
  let positivePercentage = ((good / total) * 100).toFixed(0);
  return (
    <Section title="Leave feedback message">
      <FeedbackOptions options={options} onLeaveFeedback={onClickBtn} />

      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      )}
    </Section>
  );
}
