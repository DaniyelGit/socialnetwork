import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';

import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";

import {DialogsPropsType} from "./DialogsContainer";


export const Dialogs = (props: DialogsPropsType) => {

   const {
      dialogs: dialogsData,
      messages: messageData,
      newMessageText,
   } = props.dialogsState

   const mappedDialogsElements = dialogsData.map(item => {
      return <DialogItem key={item.id} id={item.id} name={item.name}/>
   });

   const mappedMessagesElements = messageData.map(item => {
      return <MessageItem key={item.id} message={item.message}/>
   });

   const addMessageHandler = () => {
      props.addMessage();
   }

   const updateMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.updateMessageText(e.currentTarget.value);
   }


   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItem}>
            {mappedDialogsElements}
         </div>

         <div className={s.messages}>
            <div>{mappedMessagesElements}</div>
            <div>
               <div>
                  <textarea
                     value={newMessageText}
                     placeholder={'Enter your message'}
                     onChange={updateMessageTextHandler}
                  />
               </div>
               <div>
                  <button onClick={addMessageHandler}>Send</button>
               </div>
            </div>
         </div>
      </div>
   );
};