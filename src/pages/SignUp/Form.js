import SignupSvg from "../../images/SignupSvg";
import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import {
  FormContainer,
  CloseBtn,
  FormContentResp,
  FormImg,
} from "./Form.elements";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <FormContainer>
        <CloseBtn>×</CloseBtn>
        <FormContentResp>
          <FormImg>
            <SignupSvg height={600} width={400} />
          </FormImg>
        </FormContentResp>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </FormContainer>
    </>
  );
};

export default Form;


