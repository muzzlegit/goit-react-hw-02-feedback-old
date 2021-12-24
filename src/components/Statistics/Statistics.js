const Statistics = (props) => {
    return (
            <ul>
                {(Object.entries(props)).map(prop => {
                    return (
                          <li key = {prop[0]}>{prop[0]}: {prop[1]} </li>
                        )   
                    }   
                )}
            </ul>
    )          
}

export default Statistics;