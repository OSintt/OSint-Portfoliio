import React from 'react';
import { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import av from '../assets/croav.webp';

function random() {
	let stuff = ["MEVN x MERN", "Donuts", "ES6", "SPAs", "0 8 0 0", "Node.js", "Hker$hit", "$", "Mxnly"];
	return stuff[Math.floor(Math.random() * stuff.length)];
}
function Home(props) {
  const [stuff, setStuff] = useState(random());
  let [clicks, setClicks] = useState(0);
  return (
    <div>
      <Slide bottom>
        <div>
          <div className="container">
          <img src={av} alt="C.R.O Avatar" onClick={() => {
            if (!window.localStorage.easter) {
              let newClicks = clicks + 1; 
              setClicks(newClicks);
              if (clicks === 50) {
                localStorage.setItem('easter', true);
                alert("yoks puto");
              }
            } else {
              return;
            }
          }}/>
            	<h1>O$int#0800</h1>
            	<div className="body">
              	<hr/>
              	<p>Fullstack Developer
                		<br/>
                		<code>{stuff}</code>
                		<button className="doughnut" onClick={() => setStuff(random())}>
                			<code>🍩</code>
                		</button>
              	</p>
              	<Link to="/projects"><button>Projects</button></Link>
              	<Link to="/about"><button>About me</button></Link>
              	<Link to="/contact"><button>Contact</button></Link>
            	</div>
            	<code className="copyright">© Hker$hit</code>
              
          </div>
          <Link to="/comments" className="comment-button">See people's opinion!</Link>
        </div>
      </Slide>
    </div>
  );
}

export default Home;