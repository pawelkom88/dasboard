import { useRef, useState } from "react";
import InputField, {
  InputProps,
  InputStyles,
} from "../modules/common/components/input-field/InputField";

export default function Login() {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const apiRefEmail = useRef<ApiRef>({} as ApiRef);

  // const inputPasswordProps: InputProps = {
  //   id: "password",
  //   name: "password",
  //   label: "Email address",
  //   onChange: e => setUserPassword(e.target.value),
  //   value: userPassword,
  //   placeholder: "*****",
  //   className: inputStyles,
  //   inputRef,
  // };

  function handleFormSubmission(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!userEmail.length) {
      apiRefEmail.current?.focus();
      apiRefEmail.current?.shake();
    }
  }

  return (
    <div className="flex flex-col w-1/3 rounded-md sm:p-10 border-2 border-purple-400 p-12">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm dark:text-gray-400">Sign in to access your account</p>
      </div>
      <form onSubmit={handleFormSubmission} className="space-y-12">
        <div className="space-y-4">
          <div>
            <InputField
              apiRef={apiRefEmail}
              inputProps={inputEmailProps}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserEmail(e.target.value)}
              value={userEmail}
            />
          </div>
          {/* <div>
            <InputField inputRef={inputRef} inputProps={inputPasswordProps} />
          </div> */}
        </div>
        <button className="w-full px-3 py-2 rounded-md bg-purple-500 text-white hover:bg-purple-600">
          Log in
        </button>
      </form>
    </div>
  );
}

const inputStyles: InputStyles = {
  label: "block mb-2 text-sm",
  input:
    "w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100",
};

const inputEmailProps: InputProps = {
  id: "email",
  name: "email",
  label: "Email address",
  placeholder: "leroy@jenkins.com",
  className: inputStyles,
};

export interface ApiRef {
  focus: () => void;
  shake: () => void;
}
