import React from 'react';
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redux/store/store";
import {connect} from "react-redux";
import {addMessage, updateMessageText} from "../../redux/actionsCreator/actionsForDialogs";
import {InitialStateDialogsType} from "../../redux/reducer/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

/*type DialogsContainerType = {}

export const DialogsContainer = (props: DialogsContainerType) => {
   return (
      <StoreContext.Consumer>
         {
            (store: StoreType) => {
               return (
                  <Dialogs state={store.getState().dialogsPage} dispatch={store.dispatch}/>
               );
            }
         }
      </StoreContext.Consumer>
   );
};*/ // самописный контейнер

type MapStateToPropsType = {
   dialogsState: InitialStateDialogsType
};
type MapDispatchToPropsType = {
   updateMessageText: (messageText: string) => void
   addMessage: () => void
};
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
   return {
     dialogsState: state.dialogsPage,
   };
}

/*const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
   return {
      updateMessageText: (messageText: string) => {
         dispatch(updateMessageTextAC(messageText));
      },
      addMessage: () => {
         dispatch(addMessageAC());
      }
   };
}*/

const WithRedirect = withAuthRedirect<DialogsPropsType>(Dialogs);

export const DialogsContainer = connect(mapStateToProps, {
   addMessage,updateMessageText
})(WithRedirect);