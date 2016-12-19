import React from 'react';

var Footer = React.createClass({
   render: function () {
       return(
        <div id="footer" className="container">
          <div className="copyright">
            <p>© ZEPHYR 2016</p>
          </div>
          <div className="creator">
            <pre>Coded with   ♥    by Louis Iaeger V</pre>
          </div>
        </div>
       );
   } 
});

export default Footer;