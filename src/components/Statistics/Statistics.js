import {Container, Item} from './Statistics.styled';


const Statistics = (props) => {
    return (
            <Container>
                {(Object.entries(props)).map(prop => {
                    return (
                          <Item key = {prop[0]}>{prop[0]}: {prop[1]} </Item>
                        )   
                    }   
                )}
            </Container>
    )          
}


export default Statistics;