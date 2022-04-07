'use strict';

function Homepage() {
  return (

  <div>
    <p>Welcome to Trading Cards!</p>
    <a href = "/cards">Click here to view the trading cards</a>
    <br></br>
    <img src ="/static/img/balloonicorn.jpg"/>
  </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
