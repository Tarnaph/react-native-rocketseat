/* Actions Types */
export const Types = {
  SHOW: 'modal/SHOW',
  HIDE: 'modal/HIDE',
  SET: 'modal/SET',
  ADD: 'modal/ADD',
  REMOVE: 'modal/REMOVE',
  SEARCH: 'modal/SEARCH',
  ERROR: 'modal/ERROR',
  HIDEERROR: 'modal/HIDEERROR',
  LOADING: 'modal/LOADING',
};

/* Reducer */
const initialState = {
  visibilityModal: false,
  local: [],
  marker: [],
  error: false,
  loading: false,
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case Types.LOADING:
      return { ...state, loading: true };
    case Types.SHOW:
      return { ...state, visibilityModal: true };
    case Types.HIDE:
      return { ...state, visibilityModal: false };
    case Types.SET:
      const { latitude, longitude } = action.payload.e;
      return { ...state, latitude, longitude };
    case Types.ADD:
      return {
        ...state,
        marker: [...state.marker, action.payload.marker],
        error: false,
        visibilityModal: false,
        loading: false,
      };
    case Types.REMOVE:
      return {
        ...state,
        marker: state.marker.filter(marker => marker.user.id !== action.payload.id),
        loading: false,
      };
    case Types.ERROR:
      return {
        ...state,
        visibilityModal: false,
        error: true,
        loading: false,
      };
    case Types.HIDEERROR:
      return {
        ...state,
        error: false,
        loading: false,
      };
    default:
      return state;
  }
}

/* Actions Creators */
export function showModal() {
  return {
    type: Types.SHOW,
  };
}

export function hideModal() {
  return {
    type: Types.HIDE,
  };
}

export function hideError() {
  return {
    type: Types.HIDEERROR,
  };
}

export function setCoord(e) {
  return {
    type: Types.SET,
    payload: {
      e,
    },
  };
}

export function searchUser(user, local) {
  return {
    type: Types.SEARCH,
    payload: {
      marker: {
        user,
        local,
      },
    },
  };
}

export function removeUser(id) {
  return {
    type: Types.REMOVE,
    payload: {
      id,
    },
  };
}

