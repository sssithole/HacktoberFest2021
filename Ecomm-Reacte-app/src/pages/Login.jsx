import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vw;
    background: linear-gradient(rgba(250,250,250,0.5),rgba(250,250,250,0.5)), url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEUBTU3rAluIAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=") center;

    display: flex;
    background-size:cover;
    align-items: center;
    justify-content: center;
    
`;
const Wrapper = styled.div`
    width: 25%;
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
    flex-direction: column;

`;
const Inputs = styled.input`
    flex: 1;
    min-width: 40%; 
    margin: 10px 0px;
    padding: 10px;
    border-radius: 10px 10px 10px 10px;
    border: 2px solid teal;
`;

const Button = styled.button`
    width: 40%;
    margin: 20px 0px;
    border:none;
    padding:15px 20px;
    border-radius: 10px 10px 10px 10px;
    background-color: teal;
    color: white;
    cursor: pointer;
    
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

function Login() {
    return (
        <Container>
            <Wrapper>
                <Title>Login</Title>
                <Form>
                    <Inputs placeholder="Enter Email"/>
                    <Inputs placeholder="Enter Password"/>
                    <Button>Login</Button>
                    <Link>DO NOT REMEMBER PASSWORD ?</Link>
                    <Link>CREATE NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
