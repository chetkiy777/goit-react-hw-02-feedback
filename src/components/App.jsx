import React from 'react';
import Control from './Control/Control';
import Section from './Section/Section';
import Statistic from './Statistic/Statistic';
import Notification from './Notification/Notification';

export class App extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedBack: 0,
  };

  

  // incrementValue = (param) => {
  //   const keys = Object.keys(this.state)
  //   for (let paramName of keys) {
  //     if (paramName === param) {
  //       this.setState((prevState) => {
  //         return {[paramName]: prevState[paramName] + 1}
  //       }, this.countTotalFeedback() )
  //     }
  //   }
  // }

    incrementValue = (param) => {
        this.setState((prevState) => {
          return {[param]: prevState[param] + 1}
        }, this.countTotalFeedback)
    }
    
  countTotalFeedback = () =>
    this.setState({
        total: this.state.good + this.state.neutral + this.state.bad,
      }, this.countPositiveFeedbackPercentage
    );

  countPositiveFeedbackPercentage = () =>
    this.setState({
      positiveFeedBack: (this.state.good / this.state.total) * 100,
    });

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <Control
            incrementValue={this.incrementValue}
            params={this.state}
          />
        </Section>
        {this.state.total ? (
          <Section title="Statistics">
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positiveFeedBack={this.state.positiveFeedBack}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}