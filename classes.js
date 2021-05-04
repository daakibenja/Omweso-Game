class Piece {
    constructor(ctx) {
        this.position = { 'x': 0, 'y': 0 };
        this.state = 0;
        this.king = 0;

        this.color = 'blue';
    }
    draw() {
        this.size = breadth;
        ctx.beginPath();
        ctx.arc(this.position['x'] + this.size / 2, this.position['y'] + this.size / 2, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        if (this.state) {
            this.size = breadth;
            ctx.beginPath();
            ctx.arc(this.position['x'] + this.size / 2, this.position['y'] + this.size / 2, this.size, 0, Math.PI * 2);
            ctx.strokeStyle = this.color;
            ctx.lineWidth = breadth;
            ctx.stroke();
        }
        if (this.king) {

            var image = document.getElementById('img');
            ctx.drawImage(image, this.position['x'], this.position['y'], breadth, breadth);
        }


    }
    update() {
        ctx.lineCap = 'round';
        ctx.fillStyle = this.color;

    }
    refresh() {
        ctx.clearRect(0, 0, 10, 10);
    }
}
class Player {
    constructor(pieces) {
        this.line = 1;
        // this.color='blue';
        this.won = false;
        this.state = 0;
        this.piecesChewed = 0;
    }
    intiallizeGame(a, b, c, d, e, f, g, h, i, j) {
        if (this.line == 1) {
            pieces[a].position = pieceAndPosition[a];
            present['a1'] = 1;
            pieces[b].position = pieceAndPosition[b];
            present['a2'] = 1;
            pieces[c].position = pieceAndPosition[c];
            present['a3'] = 1;
            pieces[d].position = pieceAndPosition[d];
            present['a4'] = 1;
            pieces[e].position = pieceAndPosition[e];
            present['a5'] = 1;
            pieces[f].position = pieceAndPosition[f];
            present['b1'] = 1;
            pieces[g].position = pieceAndPosition[g];
            present['b2'] = 1;
            pieces[h].position = pieceAndPosition[h];
            present['b3'] = 1;
            pieces[i].position = pieceAndPosition[i];
            present['b4'] = 1;
            pieces[j].position = pieceAndPosition[j];
            present['b5'] = 1;
        }

        else {
            pieces[a].position = pieceAndPosition[a];
            present['e1'] = 1;
            pieces[b].position = pieceAndPosition[b];
            present['e2'] = 1;
            pieces[c].position = pieceAndPosition[c];
            present['e3'] = 1;
            pieces[d].position = pieceAndPosition[d];
            present['e4'] = 1;
            pieces[e].position = pieceAndPosition[e];
            present['e5'] = 1;
            pieces[f].position = pieceAndPosition[f];
            present['d1'] = 1;
            pieces[g].position = pieceAndPosition[g];
            present['d2'] = 1;
            pieces[h].position = pieceAndPosition[h];
            present['d3'] = 1;
            pieces[i].position = pieceAndPosition[i];
            present['d4'] = 1;
            pieces[j].position = pieceAndPosition[j];
            present['d5'] = 1;
        }
        // this.draw();
    }
    draw(a, b, c, d, e, f, g, h, i, j) {
        pieces[a].draw();
        pieces[b].draw();
        pieces[c].draw();
        pieces[d].draw();
        pieces[e].draw();
        pieces[f].draw();
        pieces[g].draw();
        pieces[h].draw();
        pieces[i].draw();
        pieces[j].draw();

        // pieces[a].color=pieces[b].color=pieces[c].color=this.color;
        // pieces.forEach(element => {
        //     element.draw();
        //     element.color=this.color;
        // });
    }
    update(a, b, c, d, e, f, g, h, i, j) {
        pieces[a].update();
        pieces[b].update();
        pieces[c].update();
        pieces[d].update();
        pieces[e].update();
        pieces[f].update();
        pieces[g].update();
        pieces[h].update();
        pieces[i].update();
        pieces[j].update();

        // pieces.forEach(element=>{
        //     element.update();
        // });
    }
    refresh() {
        ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    }
}
class Board {
    constructor() {
        this.boardColor = 'black';
        this.boardSize = 1;
        this.points = {

            'a1': {
                'x': 0,
                'y': 0
            },
            'a2': {
                'x': 0,
                'y': 0
            },
            'a3': {
                'x': 0,
                'y': 0
            },
            'a4': {
                'x': 0,
                'y': 0
            },
            'a5': {
                'x': 0,
                'y': 0
            },
            'b1': {
                'x': 0,
                'y': 0
            },
            'b2': {
                'x': 0,
                'y': 0
            },
            'b3': {
                'x': 0,
                'y': 0
            },
            'b4': {
                'x': 0,
                'y': 0
            },
            'b5': {
                'x': 0,
                'y': 0
            },
            'c1': {
                'x': 0,
                'y': 0
            },
            'c2': {
                'x': 0,
                'y': 0
            },
            'c3': {
                'x': 0,
                'y': 0
            },
            'c4': {
                'x': 0,
                'y': 0
            },
            'c5': {
                'x': 0,
                'y': 0
            },
            'd1': {
                'x': 0,
                'y': 0
            },
            'd2': {
                'x': 0,
                'y': 0
            },
            'd3': {
                'x': 0,
                'y': 0
            },
            'd4': {
                'x': 0,
                'y': 0
            },
            'd5': {
                'x': 0,
                'y': 0
            },

            'e1': {
                'x': 0,
                'y': 0
            },
            'e2': {
                'x': 0,
                'y': 0
            },
            'e3': {
                'x': 0,
                'y': 0
            },
            'e4': {
                'x': 0,
                'y': 0
            },
            'e5': {
                'x': 0,
                'y': 0
            }

        };
        this.positions = {


            'a1': {
                'x': 0,
                'y': 0
            },
            'a2': {
                'x': 0,
                'y': 0
            },
            'a3': {
                'x': 0,
                'y': 0
            },
            'a4': {
                'x': 0,
                'y': 0
            },
            'a5': {
                'x': 0,
                'y': 0
            },
            'b1': {
                'x': 0,
                'y': 0
            },
            'b2': {
                'x': 0,
                'y': 0
            },
            'b3': {
                'x': 0,
                'y': 0
            },
            'b4': {
                'x': 0,
                'y': 0
            },
            'b5': {
                'x': 0,
                'y': 0
            },
            'c1': {
                'x': 0,
                'y': 0
            },
            'c2': {
                'x': 0,
                'y': 0
            },
            'c3': {
                'x': 0,
                'y': 0
            },
            'c4': {
                'x': 0,
                'y': 0
            },
            'c5': {
                'x': 0,
                'y': 0
            },
            'd1': {
                'x': 0,
                'y': 0
            },
            'd2': {
                'x': 0,
                'y': 0
            },
            'd3': {
                'x': 0,
                'y': 0
            },
            'd4': {
                'x': 0,
                'y': 0
            },
            'd5': {
                'x': 0,
                'y': 0
            },

            'e1': {
                'x': 0,
                'y': 0
            },
            'e2': {
                'x': 0,
                'y': 0
            },
            'e3': {
                'x': 0,
                'y': 0
            },
            'e4': {
                'x': 0,
                'y': 0
            },
            'e5': {
                'x': 0,
                'y': 0
            }

        };

    }
    draw() {
        ctx.beginPath();
        ctx.moveTo(boardPoints['a1']['x'], boardPoints['a1']['y']);
        ctx.lineTo(boardPoints['a5']['x'], boardPoints['a5']['y']);
        ctx.lineTo(boardPoints['e5']['x'], boardPoints['e5']['y']);
        ctx.lineTo(boardPoints['e1']['x'], boardPoints['e1']['y']);
        ctx.lineTo(boardPoints['a1']['x'], boardPoints['a1']['y']);
        //Draw the first diagonal
        ctx.moveTo(boardPoints['c3']['x'], boardPoints['c3']['y']);
        ctx.lineTo(boardPoints['a1']['x'], boardPoints['a1']['y']);
        ctx.moveTo(boardPoints['c3']['x'], boardPoints['c3']['y']);
        ctx.lineTo(boardPoints['e5']['x'], boardPoints['e5']['y']);
        //Draw the second diagonal
        ctx.moveTo(boardPoints['c3']['x'], boardPoints['c3']['y']);
        ctx.lineTo(boardPoints['a5']['x'], boardPoints['a5']['y']);
        ctx.moveTo(boardPoints['c3']['x'], boardPoints['c3']['y']);
        ctx.lineTo(boardPoints['e1']['x'], boardPoints['e1']['y']);
        //Draw the vertical lines
        ctx.moveTo(boardPoints['a2']['x'], boardPoints['a2']['y']);
        ctx.lineTo(boardPoints['e2']['x'], boardPoints['e2']['y']);

        ctx.moveTo(boardPoints['a3']['x'], boardPoints['a3']['y']);
        ctx.lineTo(boardPoints['e3']['x'], boardPoints['e3']['y']);

        ctx.moveTo(boardPoints['a4']['x'], boardPoints['a4']['y']);
        ctx.lineTo(boardPoints['e4']['x'], boardPoints['e4']['y']);

        //Draw the horizontal lines
        ctx.moveTo(boardPoints['b1']['x'], boardPoints['b1']['y']);
        ctx.lineTo(boardPoints['b5']['x'], boardPoints['b5']['y']);

        ctx.moveTo(boardPoints['c1']['x'], boardPoints['c1']['y']);
        ctx.lineTo(boardPoints['c5']['x'], boardPoints['c5']['y']);

        ctx.moveTo(boardPoints['d1']['x'], boardPoints['d1']['y']);
        ctx.lineTo(boardPoints['d5']['x'], boardPoints['d5']['y']);

        //Draw the Diamond
        ctx.moveTo(boardPoints['c1']['x'], boardPoints['c1']['y']);
        ctx.lineTo(boardPoints['a3']['x'], boardPoints['a3']['y']);

        ctx.moveTo(boardPoints['c1']['x'], boardPoints['c1']['y']);
        ctx.lineTo(boardPoints['e3']['x'], boardPoints['e3']['y']);

        ctx.moveTo(boardPoints['c5']['x'], boardPoints['c5']['y']);
        ctx.lineTo(boardPoints['a3']['x'], boardPoints['a3']['y']);

        ctx.moveTo(boardPoints['c5']['x'], boardPoints['c5']['y']);
        ctx.lineTo(boardPoints['e3']['x'], boardPoints['e3']['y']);

        ctx.lineWidth = this.boardSize; // line width
        ctx.strokeStyle = this.boardColor // line color
        ctx.stroke();
    }

}

class Game {
    constructor(pieces) {
        this.player1 = new Player([pieces[0], pieces[1], pieces[2]]);
        this.player2 = new Player([pieces[3], pieces[4], pieces[5]]);
    }
    intiallizeGame() {
        this.player1.line = 1;
        // this.player1.color="red";
        this.player1.intiallizeGame(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
        this.player2.line = 3;
        // this.player2.color="red";
        this.player2.intiallizeGame(10, 11, 12, 13, 14, 15, 16, 17, 18, 19);
    }
    update() {
        this.player1.update(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
        this.player2.update(10, 11, 12, 13, 14, 15, 16, 17, 18, 19);
    }
    refresh() {
        this.player1.refresh();
        this.player2.refresh();
    }
    draw() {
        this.player1.draw(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
        this.player2.draw(10, 11, 12, 13, 14, 15, 16, 17, 18, 19);
    }
}