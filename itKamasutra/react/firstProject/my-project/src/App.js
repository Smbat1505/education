import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/ethereum-classic-logo-651759.png"
          alt=""
        />
      </header>
      <nav className="navigation">
        <ul>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="">Messages</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Music</a>
          </li>
          <li>
            <a href="">Settings</a>
          </li>
        </ul>
      </nav>
      <div className="body-app">
        <div>
          <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            alt=""
          />
        </div>
        <div className="ava description">description</div>
        <div className="my-post">
          post
          <div className="new-post">new</div>
          <div className="post1">post1</div>
          <div className="post2">post2</div>
        </div>
        Main content
      </div>
    </div>
  );
}

// ! this is component React >>>

export default App;
