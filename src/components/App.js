import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'

function App() {
  return (
    <>
      <div className="pane top-pane">
        <Editor 
        language="xml" 
        displayName="HTml" 
        value={} 
        onChange={} />
        <Editor />
        <Editor />
      </div>
      <div className="pane">
        <iframe
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
        />
      </div>
    </>
  );
}

export default App;
