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
          <h1>Say hello to ReactJS</h1>
          <p>
            You wil learn how to use <br />
            the most popular frontend library,
            <br />
            and become a super Ninja Developer
          </p>
          <button>Awesome!</button>
        </div>
      </section>

      <section className="bottom-section">
        <div className="logo">
          <img src={icon1} alt=" Icon 1" width="100" />
          <h3>Declarative</h3>
          <p>
            React makes it <br />
            painless to create
            <br />
            interactive UIs.
          </p>
        </div>

        <div className="logo">
          <img src={icon2} alt=" Icon 2" width="100" />
          <h3>Components</h3>
          <p>
            Build encapsulated
            <br />
            components that manage
            <br />
            their state.
          </p>
        </div>

        <div className="logo">
          <img src={icon3} alt=" Icon 3" width="100" />
          <h3>Single-Way</h3>
          <p>
            A set of immutable
            <br />
            values re passed to
            <br />
            the component's.
          </p>
        </div>

        <div className="logo">
          <img src={icon4} alt=" Icon 4" width="100" />
          <h3>JSX</h3>
          <p>
            Statically-typed,
            <br /> designed to run on
            <br /> modern browsers.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
