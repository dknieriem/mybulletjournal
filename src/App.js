import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//an item has text and optionally a date and a checkbox
class Item extends Component {

 constructor(props){
    super(props);
    this.state = {
      value: null,
      dateValue: null,
      checkboxValue: null,
    };
  }

  render(){
    return(
      <li>
      <input type="text" value="{this.state.value}" />
      <p>
        {this.state.dateValue}
      </p>
      <p>
        {this.state.checkboxValue}
      </p>
      </li>
    );
  }

}

//A list has items
class List extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: Array(1).fill(
        ['your entry here', false, "2012-04-21T18:25:43-05:00"]),
    };
  }

  // renderItem(i){
  //   const val = this.state.items[i].slice();
  //   <Item value={val[0]} checkboxValue={val[1]} dateValue={val[2]}
  //   />
  // }

  render(){
    var i = 0;
    return (
      <ul>
      {this.state.items.map((item, index) => (
          <Item value={item[0]} checkboxValue={item[1]} dateValue={item[2]}
          />
      ))}
      //<AddItemButton />
      </ul>

      );
  }
}

//A page displays a list using a specific view
class Page extends Component {

  constructor(props){
    super(props);
    this.state = {
      list: null,
      view: null,
    };
  }

  addList(list) {
    const views = this.state.view.slice();
    var unique = require('array-unique');
    var mergedList = this.state.list.slice().concat(list);
    const lists = unique(mergedList);
    this.setState({
      list: lists,
      view: views,
    });
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <List />
      </div>
    );
  }
}
 
export default App;
