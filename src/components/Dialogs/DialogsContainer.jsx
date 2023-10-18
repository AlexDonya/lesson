import React from 'react';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let dialogsPage = store.getState().dialogsPage;
            return <Dialogs dialogsPage={dialogsPage} />
        }}
    </StoreContext.Consumer>
};

export default DialogsContainer;