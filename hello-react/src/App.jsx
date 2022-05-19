// App.js

import menuTop from './images/menu-top-xs.png';
import ironhackLogo from './images/ironhack-logo-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <section className="cover">
        <nav>
          <img src={ironhackLogo} alt="IH logo" width="50" />
          <img src={menuTop} alt="menuTop" />
        </nav>

        <div className="content-container">
          <h1>Say hello to react</h1>
          <p>
            You wil learn how to use the most popular frontend library, and
            become a super Ninja Developer
          </p>
          <button>Awesome!</button>
        </div>
      </section>

      <section className="logo-container">
        <div className="logo1">
          <img src={icon1} alt=" Icon 1" width="100" />
          <h3>Declarative</h3>
        </div>

        <div className="logo1">
          <p>React makes it painless to create interactive UIs.</p>
          <img src={icon2} alt=" Icon 2" width="100" />
        </div>

        <div className="logo2">
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="logo3">
          <img src={icon3} alt=" Icon 3" width="100" />
          <h3>Single-Way</h3>
          <p>A set of immutable values re passed to the component's.</p>
        </div>

        <div className="logo4">
          <img src={icon4} alt=" Icon 4" width="100" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
