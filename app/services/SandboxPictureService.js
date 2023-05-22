import { AppState } from "../AppState.js";
import { SandboxPicture } from "../models/SandboxPicture.js";
import { api } from "./AxiosService.js";

class SandboxPictureService{
    async getPicture(){
        const res = await api.get('api/images')
        // console.log('RESPONSE', res.data);
        AppState.sandboxPicture = new SandboxPicture(res.data)
    }
    async getQuote(){
        const res = await api.get('api/quotes')
        console.log('RESPONSE', res.data);
        AppState.sandboxQuote = new SandboxPicture(res.data)
    }
}


export const sandboxPictureService = new SandboxPictureService()