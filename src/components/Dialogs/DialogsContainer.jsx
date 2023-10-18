import React from 'react';
import Dialogs from './Dialogs';
// import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';

// const DialogsContainer = () => {
//     return <StoreContext.Consumer>
//         {(store) => {
//             let dialogsPage = store.getState().dialogsPage;
//             return <Dialogs dialogsPage={dialogsPage} />
//         }}
//     </StoreContext.Consumer>
// };

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;