import React from 'react';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

//import {lazy, Suspense} from 'react';

//const Header = lazy(() => import('../Header'));
//const Main =  lazy(() => import('../Main'));
//const Footer = lazy(() => import('../Footer'));

const App = () => {
    return(
        <>
        
        <Header/>
         <Main/>
        <Footer/>
       
        </>
    );
}
export default App;