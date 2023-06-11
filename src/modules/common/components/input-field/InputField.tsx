import { useLayoutEffect, useRef, useState } from "react";
import { Props } from "./types/types";

export default function InputField({ inputProps, onChange, value, apiRef }: Props) {
  const [shouldShake, setShouldShake] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const { name, label, id, placeholder } = inputProps;

  const shakeAnimation: string = shouldShake ? "shake-animation" : "";

  useLayoutEffect(() => {
    if (apiRef) {
      apiRef.current = {
        focus: () => inputRef.current?.focus(),
        shake: () => setShouldShake(true),
      };
    }
  }, [apiRef]);

  return (
    <div>
      <label className="block mb-2 text-sm" htmlFor={id}>
        {label}
      </label>
      <input
        onAnimationEnd={() => setShouldShake(false)}
        id={id}
        ref={inputRef}
        name={name}
        className={`${shakeAnimation} w-full px-3 py-2 border-2 rounded-md`}
        type="text"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
