import React from 'react';
import {BrowserRouter,Route , Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Add from './Pages/Add';
import Edit from './Pages/Edit';
import Detail from './Pages/Detail';
import Signin from './Pages/Signin';
import NotFound from './Pages/NotFound';
import Error from './Pages/Error';
import { ErrorBoundary } from 'react-error-boundary';

const App = () => {
  return (
    <ErrorBoundary fallback={<Error />}>
      <BrowserRouter>
        <Routes>
          <Route path="/edit:id" element={<Edit />}/>
          <Route path="/book:id" element={<Detail />}/>
          <Route path="/add" element={<Add />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>

  )
}

export default App;
