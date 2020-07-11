import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import Root from 'Root';
import { BrowserRouter, Route } from 'react-router-dom';



ReactDOM.render(
<Root>
 <React.StrictMode>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </React.StrictMode>
</Root>,
  document.getElementById('root')
);


