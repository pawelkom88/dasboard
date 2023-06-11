import { handleValidation } from "./helpers/helpers";
import { inputEmailProps, inputPasswordProps } from "./utils/utils";
import InputField from "../../../common/components/input-field/InputField";
import React, { useRef, useState } from "react";
import { ApiRef, FormProps } from "./types/types";

export default function Form({ handleRegistration, title = "Login" }: FormProps) {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const apiRefEmail = useRef<ApiRef>({} as ApiRef);
  const apiRefPassword = useRef<ApiRef>({} as ApiRef);

  function handleFormSubmission(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (!userEmail.length) {
      handleValidation(apiRefEmail);
    } else {
      handleValidation(apiRefPassword);
    }

    handleRegistration();
  }

  return (
    <>
      <form onSubmit={handleFormSubmission} className="space-y-12 mx-auto">
        <div className="space-y-4">
          <InputField
            apiRef={apiRefEmail}
            inputProps={inputEmailProps}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserEmail(e.target.value)}
            value={userEmail}
          />
          <InputField
            apiRef={apiRefPassword}
            inputProps={inputPasswordProps}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserPassword(e.target.value)}
            value={userPassword}
          />
        </div>
        <button className="w-full px-3 py-2 rounded-md bg-purple-500 text-white hover:bg-purple-600">
          {title}
        </button>
      </form>
    </>
  );
}
