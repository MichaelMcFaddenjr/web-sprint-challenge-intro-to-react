import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    font-size: 1rem;
`
const character = (props) => {
    const {character} = props

    return (
        <Wrapper>
            <h1>Name: {character.name}</h1>
            <p>Birth year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
        </Wrapper>
    )
}

export default character