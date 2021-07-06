import { TOGGLE_PERSONAL, TOGGLE_ORGANIZATION,} from './types';

export const toggleOrganization = () => {
  return {
    type: TOGGLE_ORGANIZATION
  };
};

export const togglePersonal = () => {
  return {
    type: TOGGLE_PERSONAL
  };
};

