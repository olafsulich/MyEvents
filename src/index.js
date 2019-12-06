// import { eventForm } from "../src/js/controller/formController";
// import { EventDataModel } from "../src/js/models/getEvent";
// import { CategoriesView } from "../src/js/views/viewCategories";

class EventBrite {
  constructor() {
    this.authentication = "ALV5ANXJC6K7F5DSHHLE";
    this.orderby = "date";
    this.resultBox = document.querySelector(".list");
    this.errorText = document.querySelector(".content__wrapper__error");
    this.searchText = document.querySelector(".heading--1");
  }
}
const eventFormDelegation = new formControll();
eventFormDelegation.formControll();
const eventData = new EventDataModel();
eventData.getEvent();
const displayEventCategories = new CategoriesView();
displayEventCategories.displayCategories();
console.log("webpack!!#@###");
