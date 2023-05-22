export class SandboxPicture {
    constructor(data){
        this.id = data.id        
        this.description = data.description
        this.completed = data.completed || false
        this.imgUrl = data.largeImgUrl
        this.author = data.author
        this.query = data.query
        this.quote = data.content
        this.tags = data.tags
        this.creatorId = data.creatorId
        this.creator = data.creator
    }


    get PictureTemplate(){
        return  /*html*/ `
        <section class="row col-12 justify-content-center align-items:flex-end" >
        <div class="col-6 text-light text-center ">
            

            <div class="pictureTag pt-5">
            <h3>"${this.quote}"</h3>
            </div>

            <div class="pictureAuthor">
            <p>Image by ${this.author}</p>
            </div>

            
          </div> 
          </section>`
    }

    // get QuoteTemplate(){
    //   return  /*html*/ `
    //   <div class="col-6 text-light ">
    //       <div class="pictureTitle text-end">
    //       <p>Image by ${this.author}</p>
    //       <p>${this.tags}</p>
            
    //       </div>
    //       <div class="pictureDescription p-3 text-start">
            
    //       </div>
    //     </div>
    //   `
    // }
}