import React from 'react';
import './App'

const List = ({people}) => {
  
  return ( 
  <>
      {people.map((person)=>{
    const {name, age, image, id} = person;
    return (
      <article key={id} className='person'>
        <img src={image} alt=""/>
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </article>
    )
    })}
    </>
  );
};

export default List;
