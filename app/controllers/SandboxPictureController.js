import { AppState } from "../AppState.js"
import { sandboxPictureService } from "../services/SandboxPictureService.js"
import { setHTML } from "../utils/Writer.js"



function _drawPicture(){
    const sandboxPicture = AppState.sandboxPicture
    document.body.style.backgroundImage = `url(${sandboxPicture.imgUrl})`
    setHTML('pictureInfo', sandboxPicture.PictureTemplate)
}

function _drawQuote(){
    const sandboxQuote = AppState.sandboxQuote
    setHTML('pictureInfo', sandboxQuote.PictureTemplate)
}


function currentTime() {
    let date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()
    let session = "AM"
  
    if(hh == 0){
        hh = 12
    }
    if(hh > 12){
        hh = hh - 12
        session = "PM"
     }
  
     hh = (hh < 10) ? "0" + hh : hh
     mm = (mm < 10) ? "0" + mm : mm
     ss = (ss < 10) ? "0" + ss : ss
      
     let time = hh + ":" + mm  + " " + session
  
    document.getElementById("clock").innerText = time;
    let t = setTimeout(function(){ currentTime() }, 1000)
  }
  currentTime()


 


export class SandboxPictureController{
    constructor(){
        // console.log('hello from sandbox controller');
        this.getSandboxPicture()
        this.getSandboxQuote()
        AppState.on('sandboxPicture', _drawPicture)
        AppState.on('sandboxPicture', _drawQuote)
        currentTime()
    }


    async getSandboxPicture(){
        try {
            await sandboxPictureService.getPicture()
        } catch (error) {
            
        }
    }

    async getSandboxQuote(){
        try {
            await sandboxPictureService.getQuote()
        } catch (error) {
            
        }
    }
}