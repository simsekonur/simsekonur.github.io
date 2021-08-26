import me from './img/me.jpg';
import {about, education, frameworks, interests, pls} from './content';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <button>
          <a href='/'>
            <span>Home</span>
          </a>
        </button>
        {/* <a href='./files/cv.pdf' download>
            CV
          </a> */}
       
        {/* <button  onclick={handlePdfOpen}>Resume</button> */}
        </div>
      </header>
        <img src={me}  alt="logo" width = '200' height='200'/>
      <h1>
        Onur ŞİMŞEK
      </h1>
      <h3>Software Developer</h3>
      <b>onursimsek0643@gmail.com</b>
      <div className= 'column'>
        <div className= 'row'>
          <div >
            <h3>About</h3>
            <p>{about}
            </p>
          </div>
          <div >
            <h3>Education</h3>
            <ul>
              <li>{education[0]}</li>
              <li>{education[1]}</li>
            </ul>
          </div>
        </div>
        <div className= 'row'>
        <div>
            <h3>Interest</h3>
            <ul>
              <li>{interests[0]}</li>
              <li>{interests[1]}</li>
            </ul>
          </div>
            <div >
              <h3>Programming Languages</h3>
              <ul>
                <li>{pls[0]}</li>
                <li>{pls[1]}</li>
                <li>{pls[2]}</li>
                <li>{pls[3]}</li>
              </ul>
              <h3>Frameworks</h3>
              <ul>
                <li>{frameworks[0]}</li>
                <li>{frameworks[1]}</li>
              </ul>
            </div>
        </div>
      </div>
  
    </div>
  );
}

export default App;
