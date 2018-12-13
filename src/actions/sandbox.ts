export type inputType = string;

export type SandBoxAction =
  | { type: 'SANDBOX_TASK_ENTER'; payload: inputType }
  | { type: 'SANDBOX_DATE_ENTER'; payload: inputType }
  | { type: 'SANDBOX_CLEAR'; };

export const updateSandBox = (flag: string = 'task', data: inputType): SandBoxAction =>
  flag === 'date'
    ? { type: 'SANDBOX_DATE_ENTER', payload: data  }
    : { type: 'SANDBOX_TASK_ENTER', payload: data };

export const clearSandBox = (): SandBoxAction =>
  ({ type: 'SANDBOX_CLEAR' });
