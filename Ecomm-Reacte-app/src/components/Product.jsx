import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import React from 'react'
import styled from 'styled-components';
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import FavoriteBorderOutLined from '@material-ui/icons/FavoriteBorderOutlined';

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity:0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
    cursor: pointer; 
`;

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height:200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;
const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: white;
    transition: all 0.5s ease;
    margin: 10px;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1, 1.1);
    }
`;

function Product({item}) {
    return (
        <Container>
            <Circle/>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>

                <Icon>
                    <SearchOutlined/>
                </Icon>
                
                <Icon>
                    <FavoriteBorderOutLined/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
