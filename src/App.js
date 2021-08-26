import me from './img/me.jpg';
import './App.css';
const handlePdfOpen = (params) => {
  window.open('./files/Onur-ŞİMŞEK-EN.pdf');
}

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
        <a href='./files/cv.pdf' download>
            CV
          </a>
       
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
          <div className= 'div1'>
            <h3>About</h3>
            <p> My name is Onur ŞİMŞEK. I have graduated from the Computer Engineering Deparment of Middle East
              Technical University. I am from Ankara, Turkey and I am 24 years old. Currently, I am a Full Stack
              Software Developer at Avena Information Technologies.
            </p>
          </div>
          <div className= 'div2'>
            <h3>Education</h3>
            <ul>
              <li>Middle East Technical University</li>
              <li>Aydınlıkevler Anatolian High School</li>
            </ul>
          </div>
        </div>
        <div className= 'row'>
        <div className= 'div3'>
            <h3>Interest</h3>
            <ul>
              <li>Desktop Application Development</li>
              <li>Web Application Development</li>
            </ul>
          </div>
            <div className= 'div4'>
              <h3>Programming Languages</h3>
              <ul>
                <li>C/C++</li>
                <li>C#</li>
                <li>Java</li>
                <li>JavaScript</li>
              </ul>
              <h3>Frameworks</h3>
              <ul>
                <li>Qt</li>
                <li>React</li>
              </ul>
            </div>
        </div>
      </div>
  
    </div>
  );
}

export default App;
