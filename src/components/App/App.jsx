import React, { Component } from 'react';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import FeedBackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onHandleClick = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
      100
    ).toFixed(1);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, bad, neutral);
    const percent = `${this.countPositiveFeedbackPercentage(
      good,
      neutral,
      bad,
    )}%`;

    return (
      <div>
        <Section title="Please leave feedback" />
        <FeedBackOptions
          onLeaveFeedback={this.onHandleClick}
          name="good"
          option="Good"
        />
        <FeedBackOptions
          onLeaveFeedback={this.onHandleClick}
          name="neutral"
          option="Neutral"
        />
        <FeedBackOptions
          onLeaveFeedback={this.onHandleClick}
          name="bad"
          option="Bad"
        />
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percent}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}

export default App;
