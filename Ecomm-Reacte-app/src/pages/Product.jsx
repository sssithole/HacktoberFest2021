import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Remove from '@material-ui/icons/Remove'
import Add from '@material-ui/icons/Add'
import { mobile } from '../Responsive';
// import { Button } from '@material-ui/core';

const Container = styled.div``; 
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${ mobile ({padding :"20px", flexDirection: "column" })};
`; 
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${ mobile ({ height:"35vh" })};
`;  
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${ mobile ({ padding:"10px" })};
`; 
const Title = styled.h1 `
    font-weight: 400;

`; 

const Desc = styled.p`
    margin: 20px 0px;
`; 
const Price = styled.span`
    font-weight: 500;
    font-size: 40px;
`; 

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${ mobile ({ width:"100%", justifyContent: "space-around" })};
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 2px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 20px;
    padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${ mobile ({ width:"100%" })};
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1.5px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    border-radius: 10px 10px 10px 10px;
    background-color: white;
    cursor: pointer;
    font-weight: 700;

    &:hover{
        background-color: teal;
        color: white;
    }
`;


function Product() {
    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://www.canterburynz.com.au/images/classics-team-hoody-p462-3015_medium.jpg"/>
                </ImgContainer>

                <InfoContainer>
                    <Title>Drip Hoody</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eveniet vitae id provident quia cum impedit cupiditate distinctio accusamus sit, natus amet eaque repudiandae ut accusantium aperiam quod error a!</Desc>
                    <Price>R340</Price>
                    
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="Black"/>
                            <FilterColor color="Blue"/>
                            <FilterColor color="Green"/>
                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                                <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Product
