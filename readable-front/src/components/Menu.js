import React from "react";

const Menu = () => {
  return (
    <div>
      <nav className="nav">
        <div className="nav-left">
          <a className="nav-item is-brand main-logo" href="#">
            <img src={require('../images/bulma.png')} alt="Amerigreen logo" />
          </a>
        </div>

        <label className="nav-toggle" htmlFor="nav-toggle-state">
          <span />
          <span />
          <span />
        </label>

        <input type="checkbox" id="nav-toggle-state" />

        <div className="nav-right nav-menu">
          <a className="nav-item" href="#">
            React
          </a>
          <a className="nav-item" href="#">
            Redux
          </a>
          <a className="nav-item" href="#">
            Udacity
          </a>


        </div>
      </nav>
    </div>
  );
}

export default Menu;
