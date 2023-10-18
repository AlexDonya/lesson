import React from 'react';
import Nav from './Nav';
// import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';

// const NavContainer = () => {
//     return <StoreContext.Consumer>
//         {(store) => {
//             let state = store.getState();

//             return <Nav state={state} />
//         }}
//     </StoreContext.Consumer>
// };

const mapStateToProps = (state) => {
    return {
        state: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer;