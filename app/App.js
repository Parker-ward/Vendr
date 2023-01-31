import { ValuesController } from "./Controllers/ValuesController.js";
import { VendrController } from "./Controllers/VendrController.js";

class App {
  valuesController = new ValuesController();

vendrController = new  VendrController();  
}

window["app"] = new App();
