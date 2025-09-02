function appendTo(parentSelector, child) {
    const parent = document.querySelector(parentSelector);
    parent.appendChild(child);
}

function createElement(html, tag, id, className){
    const element = document.createElement(tag);
    if (html) element.innerHTML = html;
    if (id) element.id = id;
    if (className) {
        if(Array.isArray(className)){
            className.forEach(cls => element.classList.add(cls));
        } else {
            element.classList.add(className);
        }
    }
    return element;
}

function generatingUpperNavTemplate(data) {
    return `
        <div class="logo">
            <span class="etsy">
            <img src="${data.logo.src}" alt="${data.logo.alt}" />
            </span>
            <span class="categories">
            <img src="${data.categories.icon}" alt="${data.categories.label}" />
            <button>Categories</button>
            </span>
        </div>
        <div class="search-section">
            <input type="text" placeholder="${data.upperSearch.searchPlaceholder}" />
            <button class="search-btn">
            <img src="${data.upperSearch.icon}" alt="search" />
            </button>
        </div>
        <ul>
            <li><${data.actions[0].type} class="btn sign-in">${data.actions[0].label}</${data.actions[0].type}></li>
            <li>
            <button class="btn flag">
                <img src="${data.actions[1].src}" alt="${data.actions[1].alt}" />
            </button>
            </li>
            <li>
            <button class="btn like">
                <img src="${data.actions[2].src}" alt="${data.actions[2].alt}" />
            </button>
            </li>
            <li>
            <button class="btn gift-img">
                <img src="${data.actions[3].src}" alt="${data.actions[3].alt}" />
            </button>
            </li>
            <li>
            <button class="btn cart">
                <img src="${data.actions[4].src}" alt="${data.actions[4].alt}" />
            </button>
            </li>
        </ul>
    `;
}

function generatingLowerNavTemplate(data) {
    return `
        <ul>
            <li>
            <a href="#" class="gift-link">
                <img src="${data.navLinks[0].icon}" alt="" width="${data.navLinks[0].iconWidth}" />
                <span>Gifts</span>
            </a>
            </li>
            <li><a href="#" class="link1">${data.navLinks[1].label}</a></li>
            <li><a href="#" class="link2">${data.navLinks[2].label}</a></li>
            <li><a href="#" class="link3">${data.navLinks[3].label}</a></li>
            <li><a href="#" class="link4">${data.navLinks[4].label}</a></li>
        </ul>
    `;
}

function generatingLowerWithSearch(data) {
    return `
    <span><img src="${data.lowerSearch.hamburger}" alt="" /></span>
    <div class="search-section">
        <input type="text" placeholder="${data.lowerSearch.placeholder}" />
        <button class="search-btn">
        <img src="${data.lowerSearch.icon}" alt="search" />
        </button>
    </div>
    `;
}

function generatingHeroContainer(data) {
    return `
        <div class="hero-containers">
            <div class="container-get-started">
                <div class="get-started-content">
                    <div class="get-started-text">
                        <p>${data.getStartedContainer.textContainer.text1}</p>
                        <p>${data.getStartedContainer.textContainer.text2}</p>
                        <div class="get-started-link">
                            <a href="link">${data.getStartedContainer.textContainer.a.text}</a>
                        </div>
                    </div>
                </div>
                <div class="get-started-img">
                    <img src="${data.getStartedContainer.imageContainer.bgImage}" alt="image">
                </div>
            </div>
            <div class="container-shop-now">
                <p>${data.shopContainer.text1}</p>
                <span>${data.shopContainer.text2}</span>
            </div>
        </div>
    `;
}

function generatingDiscoverOurBest(data) {
    return `
        <div class="discover-contents">
          <h2>${data.contents.title}</h2>
          <div class="discover-cards">
            ${data.contents.cards.map(
                (card) => `
                <div class="card">
                    <a href="#">
                        <img src="${card.image}" alt="${card.text}">
                    </a>
                    <p>${card.text}</p>
                </div>
                `
            ).join("")}
            </div>
        </div>
    `;
}

function generatingSpecialGifts(data) {
    return `
        <div class="special-container">
          <div class="gifts-title">
            <p>${data.head.title}</p>
            <a href="link" class="link"><p>${data.head.link.text}</p></a>
          </div>
          <div class="gifts">
                ${data.gifts.map(
                    (gift) => `
                    <div class="${gift.className}">
                        <p>${gift.text}</p>
                    </div>
                    `
                ).join("")}
            </div>
          </div>
        </div>
    `;
}

function generatingGiftPriceSection(data) {
  return `
    ${data.items
      .map(
        (item) => `
          <div class="${item.className}">
            <span class="price">${item.price}</span>
            ${
              item.priceStrike
                ? `<span class="price-with-strike">${item.priceStrike}</span>`
                : ""
            }
          </div>
        `
      )
      .join("")}
  `;
}

function generatingAccessoriesSection(data) {
    return `
        <div class="access-title">
            <h2>${data.title}</h2>
        </div>
        <div class="access">
            ${data.accessContainers.map(
                (container)=>`
                    <div class="${container.className}">
                        <div class="${container.subClass}">
                            <img src="${container.image}" alt="">
                            <span>${container.text}</span>
                        </div>
                    </div>
                `
            )
        .join("")}
        </div>
    `;
}

function generatingMostLovedSection(data) {
    return `
    <div class="loved-title">
        <h2>${data.title}</h2>
    </div>
    <div class="loved-container">
        ${data.containers.map(
            (container) => `
                <div class="${container.className}">
                    <img src="${container.image}" alt="img">
                    <span>${container.text}</span>
                </div>
            `
        )
    .join("")}
    </div>
    `;
}

function generatingKidsFavouriteSection(data) {
    return `
        <div class="kids-section-title">
          <p>${data.title}</p>
          <h2>${data.mainTitle}</h2>
          <div class="kids-section-link">
            <a href="link">${data.link.text}</a>
            <img src="${data.link.image}" alt="right-arrow">
          </div>
        </div>
        ${data.containers.map(
            (container) => 
                `<div class="${container.className}">
                    <div class="kid-section-price">
                        <span class="kid-item-price">${container.price}</span>
                        ${
                            container.priceStrike
                                ? `<span class="price-with-strike">${container.priceStrike}</span>`
                                : ""
                            }
                    </div>  
                </div>`
            
        )
        .join("")}
        <p class="dptn">${data.description}</p>
        <div class="see-more">
          <span>${data.seeMore.text}</span>
          <img src="${data.seeMore.image}" alt="right-arrow">
        </div>
    `;
}

function generatingStandOutSection(data) {
  return `
    <div class="standout-title">
      <h2>${data.title}</h2>
    </div>
    <div class="standout-containers">
      ${data.containers
        .map(
          (container) => `
            <div class="${container.className}">
              <img src="${container.image}" alt="img">
              <span>${container.text1}</span>
              <span>${container.text2}</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

import data from './assets/data/data.json' with {type: "json"}
console.log(data); 

// Creating header inside body
const header = document.createElement("header");
appendTo("body", header);

// creating upperNav inside the header
const upperNav = generatingUpperNavTemplate(data.header);
const upper = createElement(upperNav, "nav", null, "upper");
appendTo("header", upper);

// creating lower inside the header
const lowerNav = generatingLowerNavTemplate(data.header);
const lower = createElement(lowerNav, "nav", null, "lower");
appendTo("header", lower);

// creating lower-with-search inside the header 
const lowerSearch = generatingLowerWithSearch(data.header);
const lowerWithSearch = createElement(lowerSearch, "div", null, "lower-with-search");
appendTo("header", lowerWithSearch);

const heroContainer = generatingHeroContainer(data.heroSection);
const heroSection = createElement(heroContainer, "section", null, "hero-section");
appendTo("body", heroSection);

const discoverSpacer = createElement(null, "div", null, "discover-spacer");
appendTo("body", discoverSpacer);

const discoverSection = generatingDiscoverOurBest(data.discoverOurBest);
const discoverOurBest = createElement(discoverSection, "section", null, "discover-our-best");
appendTo("body", discoverOurBest);

const specialGiftSpacer = createElement(null, "div", null, "spacer");
appendTo("body", specialGiftSpacer);

const specialGiftSection = generatingSpecialGifts(data.specialGifts);
const specialGifts = createElement(specialGiftSection, "section", null, "special-container");
appendTo("body", specialGifts);

const giftPriceSection = generatingGiftPriceSection(data.giftsAndPrice);
const giftsAndPrice = createElement(giftPriceSection, "section", null, "gifts-and-price");
appendTo("body", giftsAndPrice);

const otherAccessoriesSection = generatingAccessoriesSection(data.otherAccessories);
const otherAccessories = createElement(otherAccessoriesSection, "section", null, "other-accessories");
appendTo("body", otherAccessories);

const lovedSpacer = createElement(null, "div", null, "spacer");
appendTo("body", lovedSpacer);

const mostLovedSection = generatingMostLovedSection(data.mostLoved);
const lovedContainer = createElement(mostLovedSection, "section", null, "most-loved");
appendTo("body", lovedContainer);

const kidSpacer = createElement(null, "div", null, "Kids-spacer");
appendTo("body", kidSpacer);

const kidsFavouriteSection = generatingKidsFavouriteSection(data.kidsFavourite);
const kidsFavourite = createElement(kidsFavouriteSection, "section", null, "kids-favourite");
appendTo("body", kidsFavourite);

const standoutStyleSection = generatingStandOutSection(data.standoutStyles);
const standoutStyles = createElement(standoutStyleSection, "section", null, "standout-styles");
appendTo("body", standoutStyles);


