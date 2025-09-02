import data from './assets/data/data.json' with { type: "json" };

// Utility function to append a child to a parent selector
function appendTo(parentSelector, child) {
    const parent = document.querySelector(parentSelector);
    parent.appendChild(child);
}

// Create Upper Nav
function createUpperNav(data) {
    const nav = document.createElement("nav");
    nav.classList.add("upper");

    // Logo section
    const logoDiv = document.createElement("div");
    logoDiv.classList.add("logo");

    const etsySpan = document.createElement("span");
    etsySpan.classList.add("etsy");
    const etsyImg = document.createElement("img");
    etsyImg.src = data.logo.src;
    etsyImg.alt = data.logo.alt;
    etsySpan.appendChild(etsyImg);

    const categoriesSpan = document.createElement("span");
    categoriesSpan.classList.add("categories");
    const catImg = document.createElement("img");
    catImg.src = data.categories.icon;
    catImg.alt = data.categories.label;
    const catBtn = document.createElement("button");
    catBtn.textContent = "Categories";
    categoriesSpan.append(catImg, catBtn);

    logoDiv.append(etsySpan, categoriesSpan);

    // Search section
    const searchDiv = document.createElement("div");
    searchDiv.classList.add("search-section");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = data.upperSearch.searchPlaceholder;
    const searchBtn = document.createElement("button");
    searchBtn.classList.add("search-btn");
    const searchImg = document.createElement("img");
    searchImg.src = data.upperSearch.icon;
    searchImg.alt = "search";
    searchBtn.appendChild(searchImg);
    searchDiv.append(input, searchBtn);

    // Actions
    const ul = document.createElement("ul");
    data.actions.forEach((action, index) => {
        const li = document.createElement("li");
        if (index === 0) { // Sign in
            const btn = document.createElement(action.type);
            btn.classList.add("btn", "sign-in");
            btn.textContent = action.label;
            li.appendChild(btn);
        } else {
            const btn = document.createElement("button");
            btn.classList.add("btn");
            if (action.type) btn.classList.add(action.type);
            const img = document.createElement("img");
            img.src = action.src;
            img.alt = action.alt;
            btn.appendChild(img);
            li.appendChild(btn);
        }
        ul.appendChild(li);
    });

    nav.append(logoDiv, searchDiv, ul);
    return nav;
}

// Create Lower Nav
function createLowerNav(data) {
    const nav = document.createElement("nav");
    nav.classList.add("lower");

    const ul = document.createElement("ul");
    data.navLinks.forEach((link, index) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";

        // First link is gift-link with img and span
        if (index === 0) {
            a.classList.add("gift-link");
            const img = document.createElement("img");
            img.src = link.icon;
            img.alt = "";
            if (link.iconWidth) img.width = link.iconWidth;
            const span = document.createElement("span");
            span.textContent = "Gifts";
            a.append(img, span);
        } else {
            a.classList.add(`link${index}`);
            a.textContent = link.label;
        }

        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    return nav;
}

// Create Lower with Search
function createLowerWithSearch(data) {
    const div = document.createElement("div");
    div.classList.add("lower-with-search");

    const span = document.createElement("span");
    const img = document.createElement("img");
    img.src = data.lowerSearch.hamburger;
    img.alt = "";
    span.appendChild(img);

    const searchDiv = document.createElement("div");
    searchDiv.classList.add("search-section");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = data.lowerSearch.placeholder;
    const searchBtn = document.createElement("button");
    searchBtn.classList.add("search-btn");
    const searchImg = document.createElement("img");
    searchImg.src = data.lowerSearch.icon;
    searchImg.alt = "search";
    searchBtn.appendChild(searchImg);
    searchDiv.append(input, searchBtn);

    div.append(span, searchDiv);
    return div;
}

// Create header and append all sections
const header = document.createElement("header");
appendTo("body", header);

header.appendChild(createUpperNav(data.header));
header.appendChild(createLowerNav(data.header));
header.appendChild(createLowerWithSearch(data.header));

console.log("Dynamic header generated successfully!");
