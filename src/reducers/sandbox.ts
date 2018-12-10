import { reverse } from 'lodash';
import { SandBoxAction } from '../actions/sandbox';

import { ISandBoxStore } from '../types/sandBoxStore';

const initState: ISandBoxStore = {
  date: '',
  textInput: '',
};

export const sandbox = (state = initState, action: SandBoxAction): ISandBoxStore => {
  switch (action.type) {
    case 'SANDBOX_TEXT_ENTER':
      return { ...state, textInput: action.payload };
    case 'SANDBOX_CLEAR':
      return { ...initState };
    case 'SANDBOX_DATE_ENTER':
      const parsedDate = reverse(action.payload.split('-')).join('.');
      return { ...state, date: parsedDate };
    default:
      return state;
  }
};
