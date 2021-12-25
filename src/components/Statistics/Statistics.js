import {Container} from './Statistics.styled';


const Statistics = (props) => {
    return (
            <Container>
                {(Object.entries(props)).map(prop => {
                    return (
                          <li key = {prop[0]}>{prop[0]}: {prop[1]} </li>
                        )   
                    }   
                )}
            </Container>
    )          
}


export default Statistics;