
let totalScore = 0;

function game() {
              
    const click = document.createElement('button');
    click.textContent = '+ ';
    click.addEventListener('click', pointsClick);

    gameDiv.append(click);

}

function pointsClick() {
   totalScore++;
   score.innerText = totalScore;
}

game();


