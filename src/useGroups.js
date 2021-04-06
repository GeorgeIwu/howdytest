import React, { useReducer } from "react";
import { groups } from "./utils"

export const initialState = { groups };

export const reducer = (state, action) => {
  switch (action.type) {
    case "search":
      {
        const newGroups = groups.filter(({ title }) =>
          title.toLowerCase().indexOf(action.search.toLowerCase()) > -1)

        return {
          groups: newGroups,
        };
      }
    default:
      return state;
  }
};

const useGroups = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    groups: state.groups,
    onSearch: search => dispatch({type: "search", search }),
  };
};

export default useGroups
