import React from 'react';

//css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//other imports
import { Card } from 'react-bootstrap';

// content
import { about, education, frameworks, interests, pls } from './content';

//my components
import ItemView from './components/ItemView';

export default function App() {
  const introduction = <div style = {{color:'white'}}>
      <h1>Onur ŞİMŞEK</h1>
      <h3>Software Developer</h3>
      <b >onursimsek0643@gmail.com</b>
  </div>

  return (
    <div className="App">
      {introduction}
      <div className='column'>
        <div className='row'>
          <Card className="bg-dark text-white" style={{ width: '30rem',marginRight:'2rem', marginTop:'2rem' }}>
            <Card.Img variant="top" src="./img/me.jpg" width='300' height='300' />
            <Card.Body>
              <Card.Title>About</Card.Title>
              <Card.Text>
                {about}
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="bg-dark text-white" style={{ width: '30rem',marginTop:'2rem' }}>
            <Card.Img variant="top" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/online-3412473_1920.jpeg?meGHIUut1mybIL3pem8eWqk34osmW3Zi&size=770:433" width='300' height='300'/>
            <Card.Body>
              <Card.Title>Education</Card.Title>
              <Card.Text>
                <ul>
                  {education.map(item => <li>{item}</li>)}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='row'>
          <Card className="bg-dark text-white" style={{ width: '30rem',marginRight:'2rem', marginTop:'2rem' }}>
            <Card.Img variant="top" src="https://vizyonergenc.com/storage/posts/July2019/EJRIu1ewNyVv4K4fJutn.png" width='300' height='300'/>
            <Card.Body>
              <Card.Title>Interest</Card.Title>
              <Card.Text>
                <ul>
                  {interests.map(item => <li>{item}</li>)}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="bg-dark text-white" style={{ width: '30rem', marginTop:'2rem' }}>
            <Card.Img variant="top" src="https://miro.medium.com/max/1400/1*PEijqNwBPUGJG6AzWKln7A.jpeg" width='300' height='300'/>
            <Card.Body>
              <Card.Title>Programming Languages</Card.Title>
              <Card.Text>
                <ul>
                  {pls.map(item => <li style= {{fontSize:'14px'}}>{item}</li>)}
                </ul>
              </Card.Text>
              <Card.Title>Frameworks</Card.Title>
              <Card.Text>
                <ul>
                  {frameworks.map(item => <li style= {{fontSize:'14px'}}>{item}</li>)}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

    </div>
  );
}

