import React from 'react';
/* a stateless functional component should be used if all the component dose is return html and have props


functions don't have 'this', so we add 'props' as an argument
We took out the 'return' to use an implicit return ... you don't have to put in a return if it's on the same line ... so we moved the perenthesis up to start on the same line and took out the brackets 
*/

const Header = (props) => (
  <header className="top">
    <h1>Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>     {/*this refers to the component instance*/}
    </h3>
  </header>
);

export default Header;