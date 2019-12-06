// import EventBrite from "../../index";

class CategoriesDataModel {
  constructor() {
    this.authentication = "ALV5ANXJC6K7F5DSHHLE";
    this.orderby = "date";
    this.resultBox = document.querySelector(".list");
    this.errorText = document.querySelector(".content__wrapper__error");
    this.searchText = document.querySelector(".heading--1");
  }
  async getCategoriesEvent() {
    try {
      const categoriesURL = `https://www.eventbriteapi.com/v3/categories/?token=${this.authentication}`;
      const categoriesResponse = await fetch(categoriesURL);
      const categoriesData = await categoriesResponse.json();
      return { categoriesData };
    } catch {
      this.errorText.classList.add("content__wrapper__error-show");
      this.searchText.classList.add("heading--1-hide");
    }
  }
}
