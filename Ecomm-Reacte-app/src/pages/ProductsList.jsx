import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { mobile } from '../Responsive'

const Container = styled.div``;
const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    Display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${ mobile ({ margin:"0px 20px", display:"flex", flexDirection: "column" })};
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${ mobile ({ marginRight:"0px" })};
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${ mobile ({ margin:"10px 0px" })};
`;

const Option = styled.option`
    
`;

function ProductsList() {
    return (
       <Container>
           <Navbar/>
           <Title>Hoodies</Title>
           <FilterContainer>
                <Filter>
                    <FilterText>Filter Product</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Yello</Option>
                        <Option>Red</Option>
                        <Option>Black</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>

                <Filter>
                    <FilterText>Sort Product</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
           </FilterContainer>
           <Products/>
           <NewsLetter/>
           <Footer/>
       </Container>
    )
}

export default ProductsList
