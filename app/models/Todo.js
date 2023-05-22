export class Todo {
    constructor(data){
        this.id = data.id        
        this.description = data.description
        this.completed = data.completed || false
        this.imgUrl = data.largeImgUrl
        this.creatorId = data.creatorId
        this.creator = data.creator
    }


    get TodoListTemplate(){
        return/*html*/ `
        
        <section class="ps-5  justify-content-center" >
            <div class="d-flex col-2 pictureList">
                <input type="checkbox" onchange="app.TodoController.completedTodo('${this.id}')" ${this.completedCheckbox}>
                <p>${this.description}</p>
                <button onclick="app.TodoController.deleteTodo('${this.id}')"> <i class="mdi mdi-delete"></i> </button>
            </div>
    </section>
        `
    }

    get completedCheckbox(){
        return this.completed ? 'checked' : ''
    }

    get PictureTemplate(){
        return /*html*/ `
        <div class="col-6 text-light ">
            <div class="pictureTitle text-end">
              
            </div>
            <div class="pictureDescription p-3 text-start">
              <p>${this.description}</p>
            </div>
          </div>
        `
    }

    static CreateTodoButton(){
        return /*html*/ `
        <div class="col-6 ps-5">
        
      <form action="" onsubmit="app.TodoController.createTodo()">
        <label for="Todo"></label> 
        <input type="text" name="description" placeholder="Add todo">
        <button type="submit" ><i class="mdi mdi-plus-thick"></i></button>
      </form>
    </div>`
    }
}