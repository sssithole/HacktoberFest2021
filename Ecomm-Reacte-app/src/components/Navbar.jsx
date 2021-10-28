import React from 'react'
import 'core-js'
import Search from "@material-ui/icons/Search";
import ShoipingCartOutline from "@material-ui/icons/ShoppingCartOutlined"
import styled from 'styled-components'
import { Badge } from '@material-ui/core';
import { mobile } from '../Responsive'

const Container = styled.div`
    height: 90px;
    align-items: center;   
    justify-content: center;
    ${mobile({ height: "90px"})}  
 
`

const Wrapper = styled.div`
    padding: 10px 20px;
    align-items: center;
    display: flex;
    justify-content: space-around;
    ${mobile({ padding:"10px 0px" })};
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display:"none" })};
`
//not aligning the seach icon to the center 
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    border-radius: 15px 15px 15px 15px;
    display: flex;
    align-items: center;
    margin: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    ${mobile({ width:"50px" })};
`

const Center =styled.div`
    flex: 1;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize:"20px" })};
`;

const Right =styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent:"center" })};
`;

const ManuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize:"13px", marginLeft:"10px" })};
`;

function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>ENG</Language>
                    <SearchContainer>
                        <Input/>
                        <Search style={{color:"gray", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Drip Gang</Logo>
                </Center>
                <Right>
                    <ManuItems>Register</ManuItems>
                    <ManuItems>Log In</ManuItems>

                    <ManuItems>
                        <Badge badgeContent={4} color='primary'>
                            <ShoipingCartOutline />
                        </Badge>
                    </ManuItems>

                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
