import React from 'react';
import Nav from './Nav';
import StoreContext from '../../StoreContext';

const NavContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState();

            return <Nav state={state} />
        }}
    </StoreContext.Consumer>
};

export default NavContainer;