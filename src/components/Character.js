import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    background: white;
    width: 40%;
    margin: 2% auto;
    padding: 1px;
    border: 2px red solid;
`



function Character ({ character }) {
    return(
        <CardWrapper>
            <h2>Name: {character.name}</h2>
            <p>Height: {character.height}</p>
            <p>Birth Year: {character.birth_year}</p>
        </CardWrapper>
    )
}
export default Character