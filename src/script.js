modalOverlay = document.querySelector(".modal-overlay");
cards = document.querySelectorAll(".card");

for(let card of cards){
    card.addEventListener("click", function(){
        var title = card.querySelector("h3").innerText;
        var info = card.querySelector("p").innerText;
        modalOverlay.querySelector("h4").innerHTML = title;
        modalOverlay.querySelector("p").innerHTML = info;

        modalOverlay.querySelector("img").src = card.querySelector("img").src;
        
        modalOverlay.classList.add("active-modal");
    })
}


modalOverlay.querySelector(".modal-close").addEventListener("click", function(){
    modalOverlay.classList.remove("active-modal");
})