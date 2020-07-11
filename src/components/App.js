import React from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import {Route, Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeAuth } from 'actions';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth)
  const renderButton = () => {
      if(auth) {
        return <button onClick={() => dispatch(changeAuth(false))} >Sign Out</button>
      }else {
        return <button onClick={() => dispatch(changeAuth(true))}>Sign In</button>
      }
  }

  const renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>
          {renderButton()}
        </li>
      </ul>
    )
  }

  return (
    <div className="App">
        {renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/"  exact component={CommentList} />
    </div>
  );
}

export default App;
