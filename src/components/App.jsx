import React from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Statistics from './Statistics/Statistics.jsx';
import Section from './Section/Section.jsx';
import Notification from './Notification/Notification.jsx';

export class App extends React.Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  handleFeedback = event => {
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
  };

  countTotal = () => {
    const arrayValuesState = Object.values(this.state);
    const total = arrayValuesState.reduce((acc, el) => {
      return acc + el;
    }, 0);
    return total;
  };

  countPercentage = () => {
    const arrayValuesState = Object.values(this.state);
    const total = arrayValuesState.reduce((acc, el) => {
      return acc + el;
    }, 0);
    return Math.round((this.state.Good * 100) / total);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          //display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.state.Good || this.state.Neutral || this.state.Bad ? (
            <Statistics
              good={this.state.Good}
              neutral={this.state.Neutral}
              bad={this.state.Bad}
              total={this.countTotal()}
              positivePercentage={this.countPercentage()}
            />
          ) : (
            <Notification message="Начинаем второе задание" />
          )}
        </Section>
      </div>
    );
  }
}
