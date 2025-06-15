function addCard(title, cName, views, monthsOld, duration, thumbnail){
    // Card
    let cont=document.querySelector(".container");
    let card=document.createElement("div");
    card.setAttribute("class", "card");
    cont.appendChild(card);

    // Card Left 
    let cardLeft=document.createElement("div")
    cardLeft.setAttribute("class", "cardLeft");
    card.appendChild(cardLeft);
    
    let image=document.createElement("img");
    image.setAttribute("src", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
    
    let p1=document.createElement("p");
    p1.setAttribute("id","duration");
    p1.innerHTML=duration;
    cardLeft.appendChild(image);
    cardLeft.appendChild(p1);

    // Card Right
    let cardRight=document.createElement("div")
    cardRight.setAttribute("class", "cardRight");
    card.appendChild(cardRight);
    
    let p2=document.createElement("p");
    p2.setAttribute("id","title");
    p2.innerHTML=title;
    cardRight.appendChild(p2);
    
    let rightBelow=document.createElement("div");
    rightBelow.setAttribute("class","rightBelow");
    cardRight.appendChild(rightBelow);
    
    let p3=document.createElement("p");
    p3.innerHTML=cName+" •";
    rightBelow.appendChild(p3);
    let p4=document.createElement("p");
    let viewsWord;
    if(views>1000000000){
        views=views/1000000000
        viewsWord=views + "B";
    }
    else if(views>1000000){
        views=views/1000000
        viewsWord=views + "M";
    }
    else if(views>1000){
        views=views/1000
        viewsWord=views + "K";
    }
    else{
        viewsWord=views;
    }
    p4.innerHTML=viewsWord+" views •";
    rightBelow.appendChild(p4);
    let p5=document.createElement("p");
    p5.innerHTML=monthsOld+" months ago";
    rightBelow.appendChild(p5);


    // let html = `<div class="card">
    // <div class="image">
    //     <img src="${thumbnail}" alt="">
    //     <div class="capsule">${duration}</div>
    // </div>
    // <div class="text">
    //     <h1>${title}</h1>
    //     <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
    //     </div>
    // </div>`

    // document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}
