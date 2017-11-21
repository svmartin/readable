import React from 'react';

const Category = (props) => {
  return (
    <div className="column">
      <p className={props.customClass}>{ props.title }</p>
    </div>
  );
}

export default Category;
