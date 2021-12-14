import React from "react";
import { FormContentRight, FormSuccessH1, FormImg2 } from "./Form.elements";
import Confirmed from "../../images/Confirmed";

const UserNameInUse = () => {
  return (
    <FormContentRight>
      <FormSuccessH1>Username already exists!</FormSuccessH1>
      <FormImg2>
        <Confirmed height={500} width={400} />
      </FormImg2>
    </FormContentRight>
  );
};

export default UserNameInUse;
