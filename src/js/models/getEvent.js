// import EventBrite from "../../index";

class EventDataModel {
  constructor() {
    this.authentication = "ALV5ANXJC6K7F5DSHHLE";
    this.orderby = "date";
    this.resultBox = document.querySelector(".list");
    this.errorText = document.querySelector(".content__wrapper__error");
    this.searchText = document.querySelector(".heading--1");
  }
  async getEvent(eventName, eventCategory) {
    try {
      const eventURL = `http://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${this.orderby}&categories=${eventCategory}&token=${this.authentication}`;
      const eventsResponse = await fetch(eventURL);
      const eventsData = await eventsResponse.json();
      console.log(eventsData);
      return { eventsData };
    } catch {
      this.errorText.classList.add("content__wrapper__error-show");
      this.searchText.classList.add("heading--1-hide");
    }
  }
}
