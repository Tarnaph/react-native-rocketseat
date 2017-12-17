/* Actions Types */
export const Types = {
  ADD: 'issues/ADD',
  SEARCH: 'issues/SEARCH',
};

/* Reducer */
const initialState = [];
export default function issues(state = initialState, action) {
  switch (action.type) {
    case Types.ADD:
      return [action.payload.issues];
    default:
      return state;
  }
}

/* Actions Creators */
export function addIssues(repositoryName) {
  return {
    type: Types.SEARCH,
    payload: {
      repositoryName,
    },
  };
}
