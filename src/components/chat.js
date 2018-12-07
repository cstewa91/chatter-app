import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { getAllMessages, sendMessage } from '../actions';
import Input from './input'

class Chat extends Component {

   componentDidMount() {
      if (!localStorage.getItem('chat_name')) {
         return this.props.history.push('/set-name')
      }
      this.dbRef = this.props.getAllMessages();
   }
   componentWillUnmount() {
      if(this.dbRef) {
         this.dbRef.off();
      }
   }
   handleSentMessage = async ({message}) => {
      await this.props.sendMessage(message)
      this.props.reset();
   }
   render() {
      const { messages, handleSubmit } = this.props;
      const messageElements = Object.keys(messages).map(key => {
         const msg = messages[key];
         return (
            <li key={key} className='collection-item'>
               <b>{msg.name}: </b>{msg.message}
            </li>
         )
      })
      return (
         <div>
            <div className="right-align grey-text">Logged in as {localStorage.getItem('chat_name')}</div>
            <h1 className="center">Chat Room</h1>
            <ul className="collection">
               {messageElements}
            </ul>
            <form onSubmit={handleSubmit(this.handleSentMessage)}>
               <div className="row">
                  <Field name="message" labe="Message" component={Input} />
               </div>
            </form>
         </div>
      )
   }
}

const validate = ({ message }) => message ? {} : { message: 'Please enter a message' }

function mapStateToProps(state) {
   return {
      messages: state.chat.messages
   }
}

Chat = reduxForm({
   form: 'new-message',
   validate
})(Chat)

export default connect(mapStateToProps, {
   getAllMessages,
   sendMessage
})(Chat);