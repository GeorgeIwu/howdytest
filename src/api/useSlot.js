import React, { useEffect, useState, useReducer } from "react";
import { v4 as uuidv4 } from "uuid"
import { getSlots } from "../utils/slotAPI"

export const initialState = {
  slots: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "initialize":
      {
        return {
          slots: action.data,
        };
      }
    case "add":
      {
        const dateKey = action.date.valueOf()
        const count = state.slots[dateKey] ? Number(state.slots[dateKey].count) + 1 : 1
        const newSlot = {
          id: uuidv4(),
          description: "18LO1A1E",
          is_archived: false,
          time_stamp: action.date,
          duration: "30",
          count: count.toString(),
        };
        return {
          slots: { ...state.slots, [dateKey]: newSlot },
        };
      }
    case "remove":
      {
        const slots = { ...state.slots }
        delete slots[action.id]

        return {
          slots,
        };
      }
    default:
      return state;
  }
};

const useSlot = (fromDate) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    (async () => {
      setLoading(true)

      const response = await getSlots()
      dispatch({type: "initialize", data: response})

      setLoading(false)
    })();
  }, []);

  return {
    loading,
    slots: state.slots,
    onAdd: slot => dispatch({type: "add", date: slot.date, user: slot.user }),
    onRemove: slot => dispatch({type: "remove", date: slot.date, user: slot.user }),
  };
};

export default useSlot
