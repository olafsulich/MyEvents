// import EventBrite from "../../index";
// import EventDataModel from "../models/getEvent";
// import EventEventViewDataModel from "../views/viewEvent";

class formControll {
  constructor() {
    this.authentication = "ALV5ANXJC6K7F5DSHHLE";
    this.orderby = "date";
    this.resultBox = document.querySelector(".list");
    this.errorText = document.querySelector(".content__wrapper__error");
    this.searchText = document.querySelector(".heading--1");
  }
  formControll() {
    const form = document.querySelector(".search__button");
    form.addEventListener("submit", e => {
      e.preventDefault();
      const eventName = document.querySelector(".search__input").value;
      const eventCategory = document.querySelector(".header__select").value;
      this.getEvent(eventName, eventCategory).then(events => {
        const eventsList = events.events.events;
        this.displayEvents(eventsList);
      });
    });
  }
}
