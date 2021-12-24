import React, { Component } from "react";
import Section from './components/Section/Section'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

const OPTIONS = ['good', 'neutral', 'bad'];

class App extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0
  };

  onLeaveFeedback = (event) => {
    const name  = event.currentTarget.name;

    this.setState(prevState => {         
        return {[name]: prevState[name] + 1,};
    })
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;  
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback(); 
    return total? Math.round((good / total) * 100) : 0;
  }
  render () {
    const { good, neutral, bad} = this.state;
    const total = this.countTotalFeedback();   
    const positiveFeedback = this.countPositiveFeedbackPercentage(); 
    return (
      <>
        <Section title = 'Please leave feedback'>
          <FeedbackOptions options={OPTIONS} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title = 'Statistics'>
        {total > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback} />
        )}
        </Section>
        {!total && <Notification message = "There is no feedback"/>}
      </>
    );
  }
}

export default App;
