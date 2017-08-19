import React, {Component} from 'react';
import ReactDOM from 'react-dom';  


class App extends Component {

  render() {
  	console.log('hello world!')
    return (
      <div>
        <p>Hello World!</p>
      </div>
    );
  }

}

ReactDOM.render(  
	 <App />,
  document.getElementById('root')
);