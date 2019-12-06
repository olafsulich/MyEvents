// import EventBrite from "../../index";

class EventView {
  constructor() {
    this.authentication = "ALV5ANXJC6K7F5DSHHLE";
    this.orderby = "date";
    this.resultBox = document.querySelector(".list");
    this.errorText = document.querySelector(".content__wrapper__error");
    this.searchText = document.querySelector(".heading--1");
  }
  displayEvents(events) {
    const resultBox = document.querySelector(".list");
    let template = ``;
    events.forEach(({ url, logo, start: { local }, name, description }) => {
      template += `
              <li class="list__item">
                  <a href="${url}">
                     <figure class="list__item__box">
                        <img class="list__item__box__img" src="${
                          logo !== null ? logo.url : ""
                        }">

                    </figure>
                    <article class="list__item__article event__info">
                         <span class="event__info__date">${local}</span>
                         <h2 class="event__info__heading">${name.text.substring(
                           0,
                           20
                         )}...</h2>
                         <p class="event__info__description">${description.text.substring(
                           0,
                           40
                         )}...</p>
                    </article>
                  </a>
                    <button class="likes">
                        <img class="likes__img" src="./like.svg" alt="Liked" />
                    </button>
                </li>
      `;
    });
    resultBox.innerHTML = template;
  }
}
