import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: aqua;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px
`;


function Announcement() {
    return (
        <Container>
            super deal for sale 20% off
        </Container>
    )
}

export default Announcement
