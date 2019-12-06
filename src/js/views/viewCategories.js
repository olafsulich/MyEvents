// import EventBrite from "../../index";
// import CategoriesDataModel from "../models/getCategories";

class CategoriesView {
  constructor() {
    this.authentication = "ALV5ANXJC6K7F5DSHHLE";
    this.orderby = "date";
    this.resultBox = document.querySelector(".list");
    this.errorText = document.querySelector(".content__wrapper__error");
    this.searchText = document.querySelector(".heading--1");
  }
  displayCategories() {
    this.getCategoriesEvent()
      .then(categoriesData => {
        const categoriesList = categoriesData.categories;
        const categoriesSelect = document.querySelector(".header__select");
        categoriesList.forEach(category => {
          const option = document.createElement("option");
          option.value = category.id;
          option.appendChild(document.createTextNode(category.name));
          categoriesSelect.appendChild(option);
        });
      })
      .catch(() => {
        this.errorText.classList.add("content__wrapper__error-show");
        this.searchText.classList.add("heading--1-hide");
      });
  }
}
