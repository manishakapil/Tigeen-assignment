import React, { useState}  from 'react';
import './App.css';
import Header from './Header';
import LabTabs from './LabTabs';
import Footer from './Footer';
import CSS from './Context';

function App() {
  const state = useState();
  return (
    <>

<CSS.Provider value={state}>
      <Header/> 
      <LabTabs/>
      <Footer/>
  </CSS.Provider>
    </>
  );
}

export default App;
export {CSS}
