import React from 'react';

//css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//other imports

// content
import { about, education, frameworks, interests, pls } from './content';

//my components
import ItemView from './components/ItemView';
import Introduction from './components/Introduction';
import CardCustom from './components/Card';

export default function App() {

  return (
    <div className="App">
        <Introduction name= 'Onur ŞİMŞEK' role = 'Software Developer'/>
        <div className='row'>
          <CardCustom header = 'About' imageSrc="./img/me.jpg" content= {about}/>
          <CardCustom header = 'Education' imageSrc='https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/online-3412473_1920.jpeg?meGHIUut1mybIL3pem8eWqk34osmW3Zi&size=770:433' content={education}/>
        </div>
        <div className='row'>
          <CardCustom header = 'Interest' imageSrc= 'https://vizyonergenc.com/storage/posts/July2019/EJRIu1ewNyVv4K4fJutn.png' content= {interests}/>
          <CardCustom 
          imageSrc= 'https://d1psgljc389n8q.cloudfront.net/discussions/posts/pJfxXRttq'
          content= {[{ items: pls, header: 'Programming Languages'}, {items: frameworks, header: 'Frameworks'}]}
          />
        </div>
    </div>
  );
}

