import React, { Component } from 'react';
import logo from './logo.svg';
import P from "./P"
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
         <h1 className="Centre" >hi</h1>
       <P ImgUrl="https://i.redd.it/p9vaquod1hj21.jpg"/>
       <P ImgUrl="https://i.redd.it/62xielpejbi21.jpg" />
       <P ImgUrl="https://external-preview.redd.it/6jDsNiuTA64plLT2qb5HcE-D3XIBKqqqilfAKXNT_Vg.jpg?auto=webp&s=6c134352b23f518966f19b7bb79de7d55cffe840" />
      </div>     

      
 
    )
  }
}

export default App
