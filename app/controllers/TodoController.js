import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { todoService } from "../services/TodoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


// function _drawPicture(){
//     // // const picture = AppState.randomPicture
//     // document.body.style.backgroundImage = `url(${picture.imgUrl})`
//     // setHTML('pictureInfo', picture.PictureTemplate)
// }







function _drawCreateTodoButton(){
    setHTML('createTodo', Todo.CreateTodoButton())
}

function _drawTodo(){
    let template = ''
    AppState.todos.forEach(t => {
        template += t.TodoListTemplate
    })
    setHTML('todoList', template)
    // setHTML('total', filterTodos.length)
   
}

// function _drawRemaining(){
//     let template = /*html*/ ` <div>
//   Remaining ${AppState.todos.filter(t => t.completed).length}
//     Todos Remaining: <span id="total">0</span>
//   </div>`
//   }

export class TodoController{
    constructor(){
        // console.log('hello from user todo controller');
        AppState.on('account', _drawTodo)
        AppState.on('account', _drawCreateTodoButton)
        AppState.on('account', this.getTodo)
        AppState.on('todos', _drawTodo)
        // AppState.on('todos', _drawRemaining)
        // this.getPicture()
        // AppState.on('picture', _drawPicture)
        // this.getTodo()
        // _drawTodo()

    }

    async getTodo(){
        try {
            await todoService.getTodo()
        } catch (error) {
            Pop.error(error)
        }
    }

    async completedTodo(id){
        try {
            await todoService.completedTodo(id)
        } catch (error) {
            Pop.error(error)
        }
    }

    async deleteTodo(id){
        try {
            const yes = await Pop.confirm('Do you want to delete this todo?')
            if (!yes){
                return
            }
            await todoService.deleteTodo(id)
        } catch (error) {
            Pop.error(error)
        }
    }


    async createTodo(){
        window.event?.preventDefault()
        const form = window.event?.target
        const formData = getFormData(form)
        // console.log('what is in the form data', formData);
        await todoService.createTodo(formData)
        form.reset()

    }


}