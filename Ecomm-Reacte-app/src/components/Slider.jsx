import React from 'react'
import styled from 'styled-components'
import ArrowLeftOutLined from "@material-ui/icons/ArrowLeftOutlined"
import ArrowRightOutLined from "@material-ui/icons/ArrowRightOutlined"
import {useState} from "react";
import {sliderItems} from '../data'
import {mobile}from '../Responsive'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display:"none" })};

`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    background-color: #fff7f7;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    z-index: 2;
`;

const Wrapper = styled.div`
    height:100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;

const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 80%; 
`;

const InforContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 60px;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500px;
    letter-spacing: 2px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20p;
    cursor: pointer;
    background-color: transparent;
`;


function Slider() {
    // const [slideIndex, setSlideIndex] =  useState(0)
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) =>{
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
        }else{
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutLined/>
            </Arrow >

            <Wrapper slideIndex={slideIndex}>
                { sliderItems.map(item =>(
                    <Slide key={item.id}>
                    <ImageContainer>
                        <Image src={item.img}/>
                    </ImageContainer>
                    <InforContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>Shop Now</Button>
                    </InforContainer>
                    </Slide>
                )) }
            </Wrapper>

            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutLined/>
            </Arrow>
        </Container>
    )
}

export default Slider
