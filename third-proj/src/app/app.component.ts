import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // inputvalue ='';
  // todo=[];
   color:string='';
  show :boolean=true;
   title = 'third-proj';
   player:string []=["Akash","Yash","Rohit","Nitesh"];
   students= [
    {
      id: 1,
      firstName: 'Akash',
      lastName: 'Yadav',
      email: 'akash.yadav@gmail.com',
    },
    {
      id: 2,
      firstName: 'Yash',
      lastName: 'Shinde',
      email: 'yash.shinde@gmail.com',
    },
    {
      id: 3,
      firstName: 'Rohit',
      lastName: 'Sabat',
      email: 'rohit.sabat@gmail.com',
    },
  ];
    
  // newTodo: string = '';
  // todos: string[] = [];

  // addTodo() {
    
  //     this.todos.push(this.newTodo);
  //     this.newTodo = '';
    
  // }

  // deleteTodo(index: number) {
  //   if (index >= 0 && index < this.todos.length) {
  //     this.todos.splice(index, 1);
  //   }
  // }

  inputvalue: string = '';
  todos: string[] = [];
  completedTodos: string[] = [];

  addTodo() {
    
      this.todos.push(this.inputvalue);
      this.inputvalue = '';
    
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  completeTodo(index: number) {
    const completedTodo = this.todos[index];
    this.completedTodos.push(completedTodo);
    this.deleteTodo(index);
  }

  deleteCompleted(index: number) {
    this.completedTodos.splice(index, 1);
  }
}



    //
  
  
  
  
  
  
  
  



