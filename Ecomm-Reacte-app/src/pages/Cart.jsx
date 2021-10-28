import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'
import Footer from '../components/Footer'
import { mobile } from '../Responsive'
// import { Button } from '@material-ui/core'

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 20px;
    ${ mobile ({ padding :"10px" })};
`;
const Title = styled.h1`
    font-weight: 400;
    text-align: center; 
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
`;

const TopButton = styled.button`
    padding: 20px;
    font-weight: 300;
    cursor: pointer;
    border: ${props=>props.type === 'filled' ? 'none': 'none'};
    background-color: ${props=>props.type === 'filled' ? 'black' : "teal"};
    color: ${props=>props.type === 'filled' ? 'white': 'white'};
    border-radius: 10px 10px 10px 10px;
`;

const TopTexts = styled.div`
    ${ mobile ({ display:"none" })};
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${ mobile ({ flexDirection:"column" })};
`;
const Info =styled.div`
    flex: 3;
`;
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px 10px 10px 10px;
    padding: 20px;
    height; 50vh;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${ mobile ({ flexDirection:"column" })};
`;

const ProudctDetails = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;


const ProductID = styled.span``;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`;

const PriceDetails =styled.span`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const ProductSize = styled.span`

`;

const ProductAmount = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    ${ mobile ({ margin:"5px 15px" })};
`;
const Amount = styled.div`
    font-size: 24px;
    margin: 5px;
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 250;
    ${ mobile ({ marginBottom:"20px" })};
`;


const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItems = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between; 
    font-weight: ${props=>props.type === 'total' && "600"};
    font-size: ${props=>props.type === 'total' && "25px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: 600;
`;

function Cart() {
    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(4)</TopText>
                        <TopText>Your Wish List(1)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>CHECK OUT </TopButton>
                </Top>

                <Bottom>
                    <Info>
                        <Product>
                            <ProudctDetails>
                                <Image src='https://www.canterburynz.com.au/images/classics-team-hoody-p462-3015_medium.jpg'/>
                                <Details>
                                    <ProductName><b>Product : </b> Hoody hoo</ProductName>
                                    <ProductID><b>ID : </b> 98755313527</ProductID>
                                    <ProductColor color='Blue'/>
                                    <ProductSize><b>Size : </b>L</ProductSize>
                                </Details>
                            </ProudctDetails>
                            <PriceDetails>
                                <ProductAmount>
                                    <Add/>
                                        <Amount>2</Amount>
                                    <Remove />
                                </ProductAmount>
                                <ProductPrice>
                                    R399
                                </ProductPrice>
                            </PriceDetails>
                        </Product>

                        <Hr/>

                        <Product>
                            <ProudctDetails>
                                <Image src='https://cdn1.brandability.co.za/2015/02/31141018/Shady-Bucket-Hat-Yellow.jpg'/>
                                <Details>
                                    <ProductName><b>Product : </b> Hat</ProductName>
                                    <ProductID><b>ID : </b> 98755313527</ProductID>
                                    <ProductColor color='Yellow'/>
                                    <ProductSize><b>Size : </b>L</ProductSize>
                                </Details>
                            </ProudctDetails>
                            <PriceDetails>
                                <ProductAmount>
                                    <Add/>
                                        <Amount>1</Amount>
                                    <Remove />
                                </ProductAmount>
                                <ProductPrice>
                                    R149.99
                                </ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItems>
                            <SummaryItemText>SUB TOTAL</SummaryItemText>
                            <SummaryItemPrice>R 550</SummaryItemPrice>
                        </SummaryItems>

                        <SummaryItems>
                            <SummaryItemText>Est Shipping</SummaryItemText>
                            <SummaryItemPrice>R 60</SummaryItemPrice>
                        </SummaryItems>

                        <SummaryItems type="total" >
                            <SummaryItemText >TOTAL</SummaryItemText>
                            <SummaryItemPrice>R 610</SummaryItemPrice>
                        </SummaryItems>
                        <SummaryButton>CHECK OUT NOW</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
