import React from 'react';
import styled from "styled-components";

function Login() {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="ctaLogo" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription.
                        As of 03/05/21, the price of Disney+ and The Disney Bundle will increase by $1.
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt="ctaLogoTwo" />
                </CTA>
                <BackgroundImage />
            </Content>
        </Container>
    )
};

export default Login;


const Container = styled.section`
    flex-direction: column;
    overflow: hidden;
    display: flex;
    height: 100vh;
    text-align: center;
`;

const Content = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 10vw;
    padding: 80px 40px;
    height: 100%;
    box-sizing: border-box;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const BackgroundImage =styled.div`
    height: 100%;
    background-position: top;
    background-image: url("/images/login-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const CTA = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2vw;
    max-width: 650px;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    
`;

const CTALogoOne = styled.img`
    width: 100%;
    display: block;
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;

`;

const SignUp = styled.a`
    width: 100%;
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    letter-spacing: 1.5px;
    margin-bottom: 12px;
    font-size: 18px;
    padding: 16px 0;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover{
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    letter-spacing: 1.4px;
    line-height: 1.5;
`;

const CTALogoTwo = styled.img`
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
`;