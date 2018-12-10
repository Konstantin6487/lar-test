export type inputType = string;

export type SandBoxAction =
  | { type: 'SANDBOX_TEXT_ENTER'; payload: inputType }
  | { type: 'SANDBOX_DATE_ENTER'; payload: inputType }
  | { type: 'SANDBOX_CLEAR'; };

export const updateSandBoxTask = (task: inputType): SandBoxAction =>
  ({ type: 'SANDBOX_TEXT_ENTER', payload: task });

export const updateSandBoxDate = (date: inputType): SandBoxAction =>
  ({ type: 'SANDBOX_DATE_ENTER', payload: date  });

export const clearSandBox = (): SandBoxAction =>
  ({ type: 'SANDBOX_CLEAR' });
