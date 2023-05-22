import { AppState } from "../AppState.js"
import { Todo } from "../models/Todo.js"
import { api } from "./AxiosService.js"

class TodoService {
    async createTodo(formData){
        const res = await api.post('api/todos', formData)
        const newTodo = new Todo (res.data)
        AppState.todos.push(newTodo)
        AppState.emit('todos')
    }

    async deleteTodo(id){
        const res = await api.delete(`api/todos/${id}`)
        console.log('deleting this todo', res.data);
        AppState.todos = AppState.todos.filter(t => t.id !=id)
        AppState.emit('todos')
    }

    async getTodo(){
        const res = await api.get('api/todos')
        // console.log('what is the res', res.data.results);
        // console.log('RESPONSE', res.data);
        AppState.todos = res.data.map(t => new Todo(t))
        console.log('AppState', AppState.todos);
    }
     async completedTodo(id){
        const todo = AppState.todos.find(t => t.id == id)
        todo.completed = !todo.completed
        // console.log('todo', todo);
        console.log('', todo.completed);
        // console.log('todo', todo);
        let index = AppState.todos.findIndex(t => t.id == id)
        const res = await api.put('api/todos/' + id, todo)
        // console.log('', index);
        // AppState.todos.splice(index, 1, new Todo(res.data))

        // console.log('did it work', res.data);
  

        AppState.emit('todos')
     }

    
}

export const todoService = new TodoService()