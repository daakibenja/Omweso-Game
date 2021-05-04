
for(var i=0;i<20;i++){
    pieces[i] = new Piece(ctx);
}
var game=new Game(pieces);

for(var i=0;i<10;i++){
    pieces[i].color='green';
}


game.intiallizeGame();
canvas.addEventListener('click', playGame);
requestAnimationFrame(gameLoop);