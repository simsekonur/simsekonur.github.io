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
import Introduction from './components/Introduction';

export default function App() {

  return (
    <div className="App">
      <Introduction name= 'Onur ŞİMŞEK' role = 'Software Developer'/>
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
                <dl>
                  {education.map(item => <dd>{item}</dd>)}
                </dl>
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
                <dl>
                  {interests.map(item => <dd>{item}</dd>)}
                </dl>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="bg-dark text-white" style={{ width: '30rem', marginTop:'2rem' }}>
            <Card.Img variant="top" src="https://d1psgljc389n8q.cloudfront.net/discussions/posts/pJfxXRttq" width='300' height='300'/>
            <Card.Body>
              <Card.Title>Programming Languages</Card.Title>
              <Card.Text>
                <dl>
                  {pls.map(item => <dd style= {{fontSize:'14px'}}>{item}</dd>)}
                </dl>
              </Card.Text>
              <Card.Title>Frameworks</Card.Title>
              <Card.Text>
                <dl>
                  {frameworks.map(item => <dd style= {{fontSize:'14px'}}>{item}</dd>)}
                </dl>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

    </div>
  );
}

