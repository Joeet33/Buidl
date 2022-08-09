import { useState } from "react";
import { FormChange } from "../../interfaces/formChange";
import { DisplayForm } from "../displayForm";

export const EditForm = (props: FormChange) => {
  return <button onClick={props.formChange}>Edit Profile</button>;
};
