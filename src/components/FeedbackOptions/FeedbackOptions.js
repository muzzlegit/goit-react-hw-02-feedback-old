import { ButtonBox } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {

    return (
        <div>
           { options.map(option => {
                return (
                    <ButtonBox 
                      key = {option}
                      name = {option}
                      onClick={() => onLeaveFeedback(option)}>
                      {option}
                  </ButtonBox>
                );
            })}
        </div>  
    );

}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired, 
};

export default FeedbackOptions;