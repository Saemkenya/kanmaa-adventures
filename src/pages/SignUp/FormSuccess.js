import React from 'react';
import { FormContentRight, FormSuccessH1, FormImg2 } from "./Form.elements";
import Confirmed from "../../images/Confirmed";

const FormSuccess = () => {
  return (
    <FormContentRight>
      <FormSuccessH1>Request received by Kanmaa Adventures!</FormSuccessH1>
      <FormImg2>
      <Confirmed height={500} width={400}/>
      </FormImg2>
    </FormContentRight>
  );
};

export default FormSuccess;



