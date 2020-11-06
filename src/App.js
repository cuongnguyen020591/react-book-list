import React from 'react';
import NewBookForm from './components/BookList/BookForm';
import BookList from './components/BookList/BookList';
import NavBar from './components/BookList/Navbar';
import BookContextProvider from './components/Context/BookContext';


const App = ()=>{
  return (
    <div className="App">
      <BookContextProvider>
          <NavBar/>
          <NewBookForm/>
          <BookList/>
      </BookContextProvider>
    </div>
  );
}

export default App;



/* <BrowserRouter>
        <div className = "App">
            <Navbar/>
            <Switch>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/about"  component={About}/>
              <Route exact path="/contact" component={Contact}/>
              <Route path="/:post_id" component={Post}/>
            </Switch>
        </div>
      </BrowserRouter> */


// import AddTodo from './components/TodoList/AddTodo';
// import Todos from './components/TodoList/Todos';

//---TodoList---
  // state={
  //   todos: [
  //     {id:1, content:'buy some milk'},
  //     {id:2, content:'Go shopping'},
  //     {id:3, content:'Like swimming'},
  //   ]
  // }

  // deleteTodo = (id)=>{
  //   const todos = this.state.todos.filter(todo=>{
  //     return todo.id !== id;
  //   });
  //   this.setState({
  //     todos
  //   })
  // }

  // addTodo = (todo)=>{
  //   todo.id = Math.random();
  //   let todos = [...this.state.todos, todo]
  //   this.setState({
  //     todos
  //   })
  // }