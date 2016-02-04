// reducer.js
import { setEntries, next, vote } from './core';
import { SET_ENTRIES, NEXT, VOTE, INITIAL_STATE } from './constants/votingActionTypes';

export default function reducer(state = INITIAL_STATE, action){
  // figure out which function to call and call it
  switch(action.type)
  {
    case SET_ENTRIES:
      return setEntries(state, action.entries);
    case NEXT:
      return next(state);
    case VOTE:
      return state.update('vote', voteState => vote(voteState, action.entries));
  }

  return state;
}
