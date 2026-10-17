document.addEventListener("DOMContentLoaded", function(){
    const squares= document.querySelectorAll("#board div");
    const status= document.getElementById("status");
    const newGameBtn= document.querySelector(".btn");
    const startMessage= status.textContent;

    let currentplayer="X";
    let gamestate= ["","","","","","","","",""];

    const winningLines=[
        [0,1,2], [3,4,5],[6,7,8],
        [0,3,6], [1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    
    ];

    squares.forEach(function(square, index){
        square.classList.add("square");

        square.addEventListener("click", function(){
          gamestate[index]=currentplayer;
          square.textContent=currentplayer;
          square.classList.add(currentplayer);

          checkWinner();

         if (currentplayer==="X"){
            currentplayer="O";
        }else{
            currentplayer="X";
        }

        });
        square.addEventListener("mouseover", function(){
            square.classList.add("hover");
        });

        square.addEventListener("mouseout", function(){
            square.classList.remove("hover");
        });
    });

    newGameBtn.addEventListener("click", function(){
        gamestate=["","","","","","","","",""];
        currentplayer= "X";

        squares.forEach(function(square){
            square.textContent= "";
            square.classList.remove("X", "O");
        });
        status.textContent= startMessage;
        status.classList.remove("you-won");
    });
    function checkWinner(){
        for(const line of winningLines){
            const a= line[0];
            const b= line[1];
            const c= line[2];
            
            if (gamestate[a]!== "" &&
                gamestate[a]===gamestate[b]&&
                gamestate[a]=== gamestate[c]){
                status.textContent= " Congratulations! " + gamestate[a]+ " is the winner!";
                status.classList.add("you-won");
                return;
                }
            
        }
    }
});