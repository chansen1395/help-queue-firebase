import formVisibleReducer from './form-visible-reducer';
import ticketListReducer from './ticket-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import 'firebase/compat/auth';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainTicketList: ticketListReducer,
  firestore: firestoreReducer
});

export default rootReducer;