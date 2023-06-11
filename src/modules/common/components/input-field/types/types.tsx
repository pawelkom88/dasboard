import { ApiRef } from "modules/authentication/components/form/types/types";
import { MutableRefObject } from "react";

export interface Props {
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
}
