import {Container} from './Notification.styled';
import PropTypes from 'prop-types';

const Notification = ({message}) => {
    return <Container>{message}</Container>
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
  };
  
export default Notification;