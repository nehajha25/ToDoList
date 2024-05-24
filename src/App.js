import React, {Component} from 'react';

export default class App extends Component {
  constructor(props){
    super(props);
  
  this.state = {
    userName:'Neha',
    todoItems:[
      {action:'bird food', done:false},
      
    ],
    newtodo:''
  };
  }

  toggleDone=(todo)=>
    this.setState({
      todoItems: this.state.todoItems.map((item)=>
        item.action === todo.action ?{...item,done:!item.done}:item

      ),
    })
  

  todorows= ()=>
    this.state.todoItems.map((item)=>(
      <tr key={item.action}>
        <td>{item.action}</td>
        <td><input type='checkbox' checked={item.done} onChange={()=>this.toggleDone(item)}/></td>
      </tr>


    ));

    updatevalue = (event)=>{
      this.setState({newtodo:event.target.value});
    };

    newtodo = ()=>{
      this.setState({
        todoItems:[...this.state.todoItems,
          {action:this.state.newtodo, done:false},
        ]
      })
    }
  render = ()=>(
    <div className='container'>   
      <div className ='row'>
        <div className ='col-12'>
         
          
          <h2 className ='bg-success text-white text-center'>{this.state.userName} To Do List</h2>
          <input className='form-control' value={this.state.newtodo} onChange={this.updatevalue}/>
          <button className='btn btn-primary' onClick={this.newtodo}>Add</button>
          <div className='col-12'>
          <table className='table'>
            <thead>
              <tr>
                <th>Task</th>
                <th>Complete</th>
              </tr>
            </thead>
            <tbody>{this.todorows()}</tbody>
          </table>
          </div>

          
        </div>
      </div>
    </div>
  );
}