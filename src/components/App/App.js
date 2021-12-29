import React, { Component } from "react";
import Section from '../Section/Section'
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";

import {Container} from './App.styled';


const OPTIONS = ['good', 'neutral', 'bad'];

class App extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0
  };

  onLeaveFeedback = feedback => {
    this.setState(prevState => {         
        return {[feedback]: prevState[feedback] + 1,};
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
      <Container>
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
      </Container>
    );
  }
}

export default App;
