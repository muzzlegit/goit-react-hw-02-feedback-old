
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

export default FeedbackOptions;