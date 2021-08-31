import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../state/actions/index';
import './NavBar.css';

const NavBar = () => {
  const state = useSelector((states) => states.changePage);
  const dispatch = useDispatch();

  const { changePage } = bindActionCreators(actions, dispatch);

  return (
    <div>
      <button type="button" onClick={() => changePage(state)}>
        Change Page
      </button>
    </div>
  );
};

export default NavBar;
