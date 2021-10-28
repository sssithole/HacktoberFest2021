import styled from "styled-components"
import { mobile } from "../Responsive";

const Container = styled.div`
    flex: 1;
    margin: 4px;
    height: 70vh;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height:"30vh" })};
`;
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h1`
    margin-bottom: 20px;
    font-weight: bold;
`;
const Button = styled.button`
    border: none;
    padding:10px; 
    font-weight: bold;
    color: gray;
    background-color: white;
    cursor: pointer;
`;

function CategoryItem({item}) {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
