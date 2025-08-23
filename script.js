// import data from './assets/data/data.json 'with { type: "json" };
// console.log(data)

// const root = document.getElementById('root')
// console.log(root)

// const renderCards = (cardData)=>{
//   const div =  document.createElement('div')
//   div.id = 'cards'
//    root.appendChild(div)
//    const html =`<div>${cardData.map(data=>`<div>${data.label}</div><img src="${data.imageUrl}" />`)}</div>`
//    root.innerHTML = html
// }

// renderCards(data.cards)


// fetch("assets/data/datas.json")
//             .then(response => response.json())
//             .then(data=> {
//                 const container = document.getElementById("root");
                
//                 // products.forEach(heading => {
//                 //     const logo = document.createElement("nav");
//                 //     logo.classList.add("logo");
                    
//                 //     card.innerHTML = `
//                 //     <img src="${heading.logo.src}" alt="${heading.alt}">
//                 //     `;
//                 //     container.appendChild(logo);
//                 // });

//                 const logoNav = document.createElement("nav");
//                 logoNav.classList.add("logo");


//                 const img = document.createElement("img");
//                 img.src = data.logo.src;
//                 img.alt = data.logo.alt;

//                 logoNav.appendChild(img);

//                 container.appendChild(logoNav);
//             })



// js function createElement(html,id:string) 
// 1, create a div inside root
// 2, inject our html into the created div

// js functions to create html for each sections
    //eg: header: generateHeaderTemplate(data){
// ... logic to create the html from data
//}


// generateHeader()

// 1 html injection | function html
// 2 html is different for each section
// 3 generateHeader, generateFooter()
//

// import data from './assets/data/data.json 'with { type: "json" };
import data from './assets/data/datas.json' with {type: "json"};
console.log(data.header.logo);

function createElement(html, id) {
    const html = document.createElement(id);
    html.classList.add(html);
}