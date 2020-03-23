import React from 'react';
import FunctionalComponent from './components/functional/FunctionalComponent';
import ClassComponent from './components/classes/ClassComponent';
import CanvasComponent from './components/canvas/CanvasComponent';
import './App.css';

function App() {
  return (
    <div className="App">
    <FunctionalComponent />
    <ClassComponent />
    <CanvasComponent/>
    </div>
  );
}

export default App;
