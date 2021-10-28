import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vw;
    background: linear-gradient(rgba(250,250,250,0.5),rgba(250,250,250,0.5)), url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEUBTU3rAluIAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=") center;

    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${ mobile ({ width:"75%" })};
`;

const Title = styled.h1`
    font-size: 20px;
    font-weight: 800;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;

`;
const Inputs = styled.input`
    flex: 1;
    min-width: 40%; 
    margin: 20px 10px 0px 0px;
    padding: 10px;
    border-radius: 10px 10px 10px 10px;
    border: 2px solid teal;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;

`;

const Button = styled.button`
    width: 40%;
    border:none;
    padding:15px 20px;
    border-radius: 10px 10px 10px 10px;
    background-color: teal;
    color: white;
    cursor: pointer;
    
`;

function Register() {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Inputs placeholder="Enter Frist Name"/>
                    <Inputs placeholder="Enter Last Name"/>
                    <Inputs placeholder="Enter Email"/>
                    <Inputs placeholder="Enter Password"/>
                    <Inputs placeholder="Confirm Password"/>
                    <Agreement>
                        By create an account, I consent to the processing of my personal data in accordance with in accordance with the <b>PRIVERCY POLICE</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
