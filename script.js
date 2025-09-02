function appendTo(parentSelector, child) {
    const parent = document.querySelector(parentSelector);
    parent.appendChild(child);
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
    `
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
    `
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
    `
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
