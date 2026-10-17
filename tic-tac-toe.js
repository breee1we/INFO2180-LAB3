document.addEventListener("DOMContentLoaded", function(){
    const squares= document.querySelectorAll("#board div");

    let currentplayer="X";
    let gamestate= ["","","","","","","","",""];

    squares.forEach(function(square, index){
        square.classList.add("square");

        square.addEventListener("click", function(){
          gamestate[index]=currentplayer;
          square.textContent=currentplayer;
          square.classList.add(currentplayer);

         if (currentplayer==="X"){
            currentplayer="O";
        }else{
            currentplayer="X";
        }

        });
        square.addEventListener("mouseover", function(){
            square.classList.add("Hover");
        });

        sqaure.addEventListener("mouseout", function(){
            square.classList.remove("hover");
        });
    });
});