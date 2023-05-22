import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { SandboxPictureController } from "./controllers/SandboxPictureController.js";
import { TodoController } from "./controllers/TodoController.js";

export const router = [
  // {
  //   path: '',
  //   controller: HomeController
  // },
  {
    path: '',
    controller: [TodoController, SandboxPictureController]
  }
]