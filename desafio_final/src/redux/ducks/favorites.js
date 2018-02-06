/* Actions Types */
export const Types = {
  ADD: 'favorites/ADD',
  REMOVE: 'favorites/REMOVE',
  SEARCH: 'favorites/SEARCH',
};

/* Reducer */
const initialState = [];
export default function favorites(state = initialState, action) {
  switch (action.type) {
    case Types.ADD:
      return [...state, action.payload.repository];
    case Types.REMOVE:
      return [...state.filter(repository => repository.id !== action.payload.id)];
    default:
      return state;
  }
}

/* Actions Creators */
export function addFavorite(repositoryName) {
  return {
    type: Types.SEARCH,
    payload: {
      repositoryName,
    },
  };
}

