import React from "react";
import ReactDOM from 'react-dom';
import TileGrid from './components/TileGrid'

export default function App() {
  return (
    <TileGrid />
  )
}

let root = document.getElementById("app");

ReactDOM.render(<App />, root);