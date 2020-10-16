import styled, { createGlobalStyle } from "styled-components";


export const FormContentRight = styled.div`
border-radius: 0 10px 10px 0;
position: relative;
background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgba(17, 17, 17) 100%);
`;

export const MainForm = styled.form`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const FormH1 = styled.h1`
font-size: 1rem;
text-align: start;
width: 80%;
margin-bottom: 1rem;
color: #fff;
`;

export const FormInputs = styled.div`
margin-bottom: 0.5rem;
width: 80%;
`;

export const FormLabel = styled.label`
display: inline-block;
font-size: 0.8rem;
margin-bottom: 6px;
color: #fff;
`;

export const FormInput = styled.input`
display: block;
padding-left: 10px;
outline: none;
border-radius: 2px;
height: 40px;
width: 100%;
border: none;
`;

export const FormInputLogin = styled.span`
font-size: 0.8rem;
margin-top: 10px;
color: #fff;
width: 80%;
text-align: center;
`;

export const FormContainer = styled.div`
margin: 100px auto;
width: 1000px;
box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
position: relative;
border-radius: 10px;
height: 600px;
display: grid;
grid-template-columns: 1fr 1fr;
`;

export const CloseBtn = styled.span`
position: absolute;
top: 2%;
right: 3%;
font-size: 1.5rem;
z-index: 1;
color: #fff;
`;

export const FormContentLeft = styled.div`
background: linear-gradient(
    90deg,
    rgb(39, 176, 255) 0%,
    rgb(0, 232, 236) 100%
);
border-radius: 10px 0 0 10px;
position: relative;
`;

export const FormContentResp = styled.div`
background: linear-gradient(
    90deg,
    rgb(39, 176, 255) 0%,
    rgb(0, 232, 236) 100%
);
border-radius: 10px 0 0 10px;
position: relative;

@media screen and (max-width: 728px) {
    display: none;
}
`;

export const FormImg = styled.div`
width: 80%;
height: 80%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

@media screen and (max-width: 720px) {
    display: none;
}
`;

export const FormImg2 = styled.div`
width: 60%;
height: 60%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;


export const FormInputsP = styled.p`
font-size: 0.8rem;
margin-top: 0.5rem;
color: orange;
`;

export const MainStyle = createGlobalStyle`
body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'PT Sans', sans-serif;
}
`;

export const FormSuccessH1 = styled.h1`
text-align: center;
font-size: 24px;
margin-top: 80px;
color: #fff;
`;

export const FormInputButton = styled.button`
width: 80%;
height: 50px;
margin-top: 10px;
border-radius: 2px;
background: linear-gradient(
    90deg,
    rgb(39, 176, 255) 0%,
    rgb(0, 232, 236) 100%
);
outline: none;
border: none;
color: #fff;
font-size: 1rem;
`;


