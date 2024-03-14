import { useState } from 'react'
import reactLogo from './assets/react.svg'
import TabMenu from './TabMenu';
import './App.css'
import './styles/main.scss'

function App() {
  return (
    <>
      <TabMenu resources={resources} />
    </>
  );
}

export default App;
