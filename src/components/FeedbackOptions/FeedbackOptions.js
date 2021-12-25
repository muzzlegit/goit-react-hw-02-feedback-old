// import {Container} from './Section.styled';
import PropTypes from 'prop-types';

const FeedBackButton = ({option, feedback, onLeaveFeedback}) => {
    return (
            <button 
                key = {option}
                name = {feedback}
                onClick={onLeaveFeedback}>
                {feedback}
            </button>
    );
}
const FeedbackOptions = ({options, onLeaveFeedback}) => {

    return (
        <div>
           { options.map(option => {
               return<FeedBackButton key = {option} feedback = {option} onLeaveFeedback = {onLeaveFeedback}/>
            })}
        </div>  
    );

}

FeedBackButton.propTypes = {
    option: PropTypes.string,
    feedback: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func,
  };

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired, 
};

export default FeedbackOptions;