import { START_RECORDING,
         STOP_RECORDING,
         ADD_NOTES
       } from '../actions/tracks_actions';

import merge from 'lodash/merge';

let currTrackId = 0;

const tracksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case START_RECORDING:
      currTrackId++;
      return merge({}, oldState, { [currTrackId]: {
        id: currTrackId,
        name: `Track ${currTrackId}`,
        roll: [],
        timeStart: action.timeStart
      }});
    case STOP_RECORDING:
      return merge({}, oldState, { [currTrackId]:
        merge({}, oldState[currTrackId], {
        roll: [
          ...oldState[currTrackId].roll,
          { notes: [], timeSlice: action.timeNow - oldState[currTrackId].timeStart }
        ]
      })
      });
    case ADD_NOTES:
      return merge({}, oldState, { [currTrackId]:
        merge({}, oldState[currTrackId], {
        roll: [
          ...oldState[currTrackId].roll,
          { notes: action.notes, timeSlice: action.timeNow - oldState[currTrackId].timeStart }
        ]
      })
      });
    default:
      return oldState;
  }
};
export default tracksReducer;
