import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './card';
import {robots as Robot} from './robots'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='Containers'>
      <Card key={Robot[0].id} username={Robot[0].username} name={Robot[0].name} mail={Robot[0].email} />
      <Card key={Robot[1].id} username={Robot[1].username} name={Robot[1].name} mail={Robot[1].email} />
      <Card key={Robot[2].id} username={Robot[2].username} name={Robot[2].name} mail={Robot[2].email} />
      <Card key={Robot[3].id} username={Robot[3].username} name={Robot[3].name} mail={Robot[3].email} />
      <Card key={Robot[4].id} username={Robot[4].username} name={Robot[4].name} mail={Robot[4].email} />
      <Card key={Robot[5].id} username={Robot[5].username} name={Robot[5].name} mail={Robot[5].email} />
      <Card key={Robot[6].id} username={Robot[6].username} name={Robot[6].name} mail={Robot[6].email} />
      <Card key={Robot[7].id} username={Robot[7].username} name={Robot[7].name} mail={Robot[7].email} />
      <Card key={Robot[8].id} username={Robot[8].username} name={Robot[8].name} mail={Robot[8].email} />
      <Card key={Robot[9].id} username={Robot[9].username} name={Robot[9].name} mail={Robot[9].email} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
