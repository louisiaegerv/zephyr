var React = require('react');

var Header = React.createElement({
   render: function () {
       return (
        <div id="header">
          <ul>
            <a href="#"><li className="li underline">About</li></a>
            <a href="#"><li className="li underline">Work</li></a>
            <a href="#"><li className="li underline">Team</li></a>
            <a href="#"><li className="li underline">Contact</li></a>
          </ul>
        </div>
       );
   } 
});

export default Header;