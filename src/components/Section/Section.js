import {Container, SectionTitle} from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({title, children}) => {
    return <Container>
        <SectionTitle>{title}</SectionTitle>
        {children}
    </Container>
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
  };


export default Section;