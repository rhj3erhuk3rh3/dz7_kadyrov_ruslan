import React from 'react';
import AboutPage from "./pages/aboutPage/AboutPage";
import BlockPage from "./pages/blockPage/BlockPage";
import HomePage from "./pages/homePage/HomePage";
import {Routes, Route,link} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App  ()  {
  return (
      <>
          <Header/>
          {/*<header>*/}
          {/*    <link to="/" Home></link >*/}
          {/*    <link to="/" Block></link>*/}
          {/*    <link to="/" About></link>*/}
          {/*</header>*/}
          {/*<div>*/}
          {/*    <h1>Get started with React Router Dom</h1>*/}
          {/*</div>*/}

          {/*<HomePage/>*/}
          {/*<BlockPage/>*/}
          {/*<AboutPage/>*/}


          <Routes>
              <Route path = "/" element={<HomePage/>}/>
              <Route path = "/About" element={<AboutPage/>}/>
              <Route path = "/Post" element={<BlockPage/>}/>
          </Routes>
          <Footer/>
      </>
  );
};

export default App;
