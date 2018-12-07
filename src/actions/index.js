import types from './types'
import { db } from '../firebase'

export function getAllMessages() {
   return function (dispatch) {
      const dbRef = db.ref('/messages')
      dbRef.on('value', (snapshot) => {
         dispatch({
            type: types.GET_CHAT_MESSAGES,
            messages: snapshot.val()
         });
      });
      return dbRef;
   }
}

export const sendMessage = msg => async dispatch => {
   return db.ref('/messages').push({
      message: msg,
      name: localStorage.getItem('chat_name')
   })
}

