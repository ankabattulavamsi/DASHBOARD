import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom'
import Home from './dashboard/Home';


// const RouteData :any = [
//   {
//     component : <Buttons />,
//     path: '/buttons'
//   },
//   {
//     component : <GridC />,
//     path: '/buttons'
//   },
//   {
//     component : <Panels />,
//     path: '/buttons'
//   },
//   {
//     component : <SweetAlert />,
//     path: '/buttons'
//   },
//   {
//     component : <Notify />,
//     path: '/buttons'
//   },
//   {
//     component : <Icons />,
//     path: '/buttons'
//   },
//   {
//     component : <TypographyC />,
//     path: '/buttons'
//   }
// ]

function App() {
  return (
    <BrowserRouter>
        <Home />
    </BrowserRouter>
  );
}

export default App;
