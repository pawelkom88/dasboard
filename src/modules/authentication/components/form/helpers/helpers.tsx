import { ApiRef } from "../types/types";

export function handleValidation(ref: React.MutableRefObject<ApiRef>): void {
  ref.current?.focus();
  ref.current?.shake();
}
