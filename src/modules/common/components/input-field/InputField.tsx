import { MutableRefObject, useLayoutEffect, useRef, useState } from "react";
import { ApiRef } from "../../../../pages/Login";

export default function InputField({ inputProps, onChange, value, apiRef }: Props) {
  const [shouldShake, setShouldShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const { className, name, label, id, placeholder } = inputProps;

  const shakeAnimation = shouldShake ? "shake-animation" : "";

  useLayoutEffect(() => {
    if (apiRef) {
      apiRef.current = {
        focus: () => inputRef.current?.focus(),
        shake: () => setShouldShake(true),
      };
    }
  }, [apiRef]);

  return (
    <>
      <label className={className.label} htmlFor={id}>
        {label}
      </label>
      <input
        onAnimationEnd={() => setShouldShake(false)}
        id={id}
        ref={inputRef}
        name={name}
        className={(className.input, shakeAnimation)}
        type="text"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
}

interface Props {
  inputProps: InputProps;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  apiRef: MutableRefObject<ApiRef>;
}

export interface InputProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  className: InputStyles;
}

export type InputStyles = {
  label: string;
  input: string;
};
