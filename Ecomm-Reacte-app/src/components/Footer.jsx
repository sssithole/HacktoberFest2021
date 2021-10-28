import React from 'react'
import styled from 'styled-components'
import Facebook from '@material-ui/icons/Facebook'
import Instergram from '@material-ui/icons/Instagram'
import Twitter from '@material-ui/icons/Twitter'
import Whatsapp from '@material-ui/icons/WhatsApp'
import MailOutLine from '@material-ui/icons/MailOutline'
import { mobile } from '../Responsive'

const Container = styled.div`
    display:flex;
    ${ mobile({ flexDirection:"column" })};
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px
`;


const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3``;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor:"lightgray" })};
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

// const List = styled.ul``;
// const ListItem = styled.li``;

function Footer() {
    return (
        <Container>
            <Left>
                <Logo>Drip Gang</Logo>
                <Desc>The Hotest Brand you will get in ZAR</Desc>
                {/* <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook/>
                    </SocialIcon>

                    <SocialIcon color='E4405f'>
                        <Instergram/>
                    </SocialIcon>

                    <SocialIcon color='55ACEE'>
                        <Twitter/>
                    </SocialIcon>

                </SocialContainer> */}
            </Left>
            <Center>
            <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook/>
                    </SocialIcon>

                    <SocialIcon color='E4405f'>
                        <Instergram/>
                    </SocialIcon>

                    <SocialIcon color='55ACEE'>
                        <Twitter/>
                    </SocialIcon>

                </SocialContainer>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Whatsapp style={{marginRight:"10px"}}/>000 000 0000
                </ContactItem>

                <ContactItem>
                    <MailOutLine style={{marginRight:"10px"}}/>dripgang@gmail.com
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer
