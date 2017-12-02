import React from "react";
import { Route, Link } from 'react-router-dom';
import Menu from './Menu';
import Category from './Category'

const Categories = () => {
  return (
    <div>
      <div className="columns">
        <Link to="/react"><Category
          customClass={"notification is-info title"}
          title={"React"}/></Link>
        <Link to="redux"><Category
          customClass={"notification is-success title"}
          title={"Redux"}/></Link>
        <Link to="udacity"><Category customClass={"notification is-warning title"} title={"Udacity"}/></Link>

        <Route path="/react" component={ReactPosts}/>
        <Route path="/topics" component={ReduxPosts}/>
        <Route path="/topics" component={UdacityPosts}/>
      </div>
    </div>
  );
}

export default Categories;
