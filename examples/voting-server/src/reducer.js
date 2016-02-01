// reducer.js
import { setEntries, next, vote } from './core';
import { SET_ENTRIES, NEXT, VOTE } from './constants/votingActionTypes';

export default function reducer(state, action){
  // figure out which function to call and call it
  switch(action.type)
  {
    case SET_ENTRIES:
      return setEntries(state, action.entries);
    case NEXT:
      return next(state);
    case VOTE:
      return vote(state, action.entries);
  }
}
