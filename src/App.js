import React from 'react';
import logo from './to-do-list.png';
import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list : []
    };
  }

  addItem(todovalue){
    if (todovalue !==""){
      const newItem = {
        id: Date.now(),
        value: todovalue,
        isDone: false
      };
      const list = [... this.state.list];
      list.push(newItem);

      this.setState({
      list,
      newItem:""
      });
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !==id);
    this.setState({list : updatedlist})
  }

  updateinput(input){
    this.setState({newItem:input});
  }

  render(){
    return (
      <div>
        <img src={logo} width="150" height="150" className="logo" 
        />
        <h1 className="app-title"> TODO App</h1>
        <div className="container">
          Add an Item :- 
          <br/>
          <input
                 type="text" 
                 className="input-text"
                 placeholder="Write a todo list" 
                 required
                 value={this.state.newItem}
                 onChange={e => this.updateinput(e.target.value)}
                  />
            <button 
            className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled = {!this.state.newItem.length}
             >  Add TODO  </button>
            <div className="list">
              <ul>
                <li>
                <label className="">
                  <input type="checkbox"  />
                  List of your TODO's...                   
                  </label>
                  <button className="add-btn"> Delete </button>
                </li>
                {this.state.list.map(item => {
                return(
                  <li key={item.id}>
                    <input                   
                    type="checkbox"
                    name="done"
                    checked={item.isDone}
                    onchange ={item.isDone}
                    />
                    {item.value}
                    <button className="add-btn"
                            onClick={()=> this.deleteItem(item.id)}>
                      Delete
                    </button>
                  </li> 
                );
              })} <br/>
              </ul>
            </div>
        </div>
      </div>
    );
    
  }
}

export default App;