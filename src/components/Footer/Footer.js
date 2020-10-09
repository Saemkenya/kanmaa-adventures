import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa'; 
import { Button } from '../../globalStyles';
import Logo from '../../images/Logo';
import { FirstName, SecondName } from '../Footer/Footer.elements';
import { 
    FooterContainer, 
    FooterSubHeading, 
    FooterSubText,
    FooterSubscription,
    FormInput,
    Form,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from "./Footer.elements";

function Footer() {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Access your profile by logging in.
                </FooterSubHeading>
                <FooterSubText>
                    You can sign up for a new account any time by clicking SignUp.
                </FooterSubText>
                <Form>
                    <FormInput 
                    name="email" 
                    type="email" 
                    placeholder="Your Email Address" 
                    />
                    <FormInput 
                    name="password" 
                    type="password" 
                    placeholder="Your Password" 
                    />
                        <Button fontBig>Login</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>ABOUT</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How Kanmaa Adventures Work</FooterLink>
                        <FooterLink to='/'>Newsroom</FooterLink>
                        <FooterLink to='/'>Kanmaa Adventures Plus</FooterLink>
                        <FooterLink to='/'>Kanmaa Adventures Luxe</FooterLink>
                        <FooterLink to='/'>Hotel Tonight</FooterLink>
                        <FooterLink to='/'>Kanmaa Adventures for Work</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>COMMUNITY</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Diversity & Belonging</FooterLink>
                        <FooterLink to='/'>Accessibility</FooterLink>
                        <FooterLink to='/'>Kanmaa Adventures Associates</FooterLink>
                        <FooterLink to='/'>Frontline Stays</FooterLink>
                        <FooterLink to='/'>Invite Friends</FooterLink>
                        <FooterLink to='/'>Gift Cards</FooterLink>
                    </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>HOST</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Host your home</FooterLink>
                        <FooterLink to='/'>Host an Experience</FooterLink>
                        <FooterLink to='/'>Message From CEO</FooterLink>
                        <FooterLink to='/'>Responsible hosting</FooterLink>
                        <FooterLink to='/'>Open Homes</FooterLink>
                        <FooterLink to='/'>Resource Center</FooterLink>
                        <FooterLink to='/'>Community Center</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>SUPPORT</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Help Center</FooterLink>
                        <FooterLink to='/'>Cancellation options</FooterLink>
                        <FooterLink to='/'>Heighbourhood Support</FooterLink>
                        <FooterLink to='/'>Trust and Safety</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <Logo height={60} width={60} />
                        <FirstName>Kanmaa</FirstName>
                        <SecondName>Adventures</SecondName>
                    </SocialLogo>
                    <WebsiteRights>
                        Kanmaa Adventures © 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                            <FaFacebook color={"orange"}/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                            <FaInstagram color={"green"}/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Youtube" rel="noopener" noreferrer>
                            <FaYoutube color={"orange"}/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                            <FaTwitter color={"green"}/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
                            <FaLinkedin color={"orange"}/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
