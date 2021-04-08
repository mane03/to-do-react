import React from "react";
import './styles/main.scss';
import List from './Components/List';
import Form from "./Components/Form";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        inputValue: "",
        items: [],
    }
  }

  handleChangeInput = (e) => {
    e.preventDefault()
     this.setState({
         inputValue: e.target.value,
     })
  }

  addItem = (e) => {
      e.preventDefault()

      let itemArr = this.state.items;
      if(this.state.inputValue !== "") {
          itemArr.push(this.state.inputValue)
      }

      this.setState({
          items: itemArr
      })

      // console.log(this.state.items)
  }

    // createTasks = () => {
    //     let x = this.state.items.map(item => (
    //     <li className="list-item">
    //         <span>1</span>
    //         <div className="todo-text">{item}</div>
    //         <div>
    //             <button className="btn btn-edit">Edit</button>
    //             <button className="btn btn-delete">Delete</button>
    //         </div>
    //     </li>
    //     ))
    //
    //     this.setState({
    //         item: x
    //     })
    // }


  render(){
      return (
        <div className="main-container">
          <Form addItem={this.addItem} handleChangeInput={this.handleChangeInput}/>
          <List createTasks={this.state.items}/>
        </div>
      )
    }
}

export default App