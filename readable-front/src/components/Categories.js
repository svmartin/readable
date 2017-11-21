import React from "react";
import Menu from './Menu';
import Category from './Category'

const Categories = () => {
  return (
    <div>
      <div className="columns">
        <Category customClass={"notification is-info title"} title={"React"}/>
        <Category customClass={"notification is-success title"} title={"Redux"}/>
        <Category customClass={"notification is-warning title"} title={"Udacity"}/>
      </div>
    </div>
  );
}

export default Categories;
