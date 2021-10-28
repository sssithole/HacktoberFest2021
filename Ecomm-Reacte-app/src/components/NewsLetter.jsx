import React from 'react'
import styled from 'styled-components'
import Send from '@material-ui/icons/Send'
import { mobile } from '../Responsive';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex; 
    align-items:center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h2`
    font-size: 50px;
    margin-bottom: 20px;
`;
const Desc = styled.div`
    font-size: 25px;
    font-weight: 300;
    margin-bottom: 20px;
    ${ mobile ({ textAlign:"center" })};
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    display: flex;
    background-color: white;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width:"80%" })};
`;
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 30px;
`;
const Button = styled.button`
    flex: 1; 
    border: none;
    color: white;
    background-color: teal;
`;

function NewsLetter() {
    return (
       <Container>
           <Title>News letter</Title>
           <Desc>get updates on new products</Desc>
           <InputContainer>
                <Input placeholder='Your Email'/>
                <Button>
                    <Send />
                </Button>
           </InputContainer>
       </Container>
    )
}

export default NewsLetter
