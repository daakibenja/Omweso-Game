

function playGame() {
    if (notifier % 2) {
        activated = selectPiece({ 'x': event.offsetX, 'y': event.offsetY });
        console.log({ 'x': event.offsetX, 'y': event.offsetY });
        if (pieces[activated]) {
            pieces[activated].state = 1;
            notifier++;
        }
    }
    else {
        console.log('Movement');
        console.log( 'x: ' + event.clientX + '  y: ' + event.clientY);
        if (pieces[activated]) {
            movePieceToAppropriatePosition(pieces[activated], { 'x': event.offsetX, 'y': event.offsetY });
            pieces[activated].state = 0;
            console.log('piece moved');
        }
        notifier++;
        detectWin();
        //     //director.innerText='Player'+i+' Wins';
        //     canvas.style.display='none';
        //     document.getElementById('game-settings').style.display='none';
        //     document.getElementById('game-start').style.display = 'block';
        // }
    }
    // console.log('X: ' + (event.offsetX) + " Y: " + event.offsetY);
}

/*We should be able to know which piece is in which position*/
function selectPiece(clickedPosition) {
    if (isNear(clickedPosition, allPositions['e1'])) {
        //director.innerText = 'Selection e1';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['e1']) {
                return i;
            }
        }

    }
    else if (isNear(clickedPosition, allPositions['e2'])) {
        //director.innerText = 'Selection e2';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['e2']) {
                return i;
            }
        }

    }
    else if (isNear(clickedPosition, allPositions['e3'])) {
        //director.innerText = 'Selection e3';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['e3']) {
                return i;
            }
        }
    }
    else if (isNear(clickedPosition, allPositions['e4'])) {
        //director.innerText = 'Selection e4';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['e4']) {
                return i;
            }
        }
    }
    else if (isNear(clickedPosition, allPositions['e5'])) {
        //director.innerText = 'Selection e5';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['e5']) {
                return i;
            }
        }
    }
    /////
    else if (isNear(clickedPosition, allPositions['d1'])) {
        //director.innerText = 'Selection d1';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['d1']) {
                return i;
            }
        }

    }
    else if (isNear(clickedPosition, allPositions['d2'])) {
        //director.innerText = 'Selection d2';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['d2']) {
                return i;
            }
        }

    }
    else if (isNear(clickedPosition, allPositions['d3'])) {
        //director.innerText = 'Selection d3';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['d3']) {
                return i;
            }
        }
    }
    else if (isNear(clickedPosition, allPositions['d4'])) {
        //director.innerText = 'Selection d4';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['d4']) {
                return i;
            }
        }
    }
    else if (isNear(clickedPosition, allPositions['d5'])) {
        //director.innerText = 'Selection d5';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['d5']) {
                return i;
            }
        }
    }
    //
    else if (isNear(clickedPosition, allPositions['c1'])) {
        //director.innerText = 'Selection c1';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['c1']) {
                return i;
            }
        }

    }
    else if (isNear(clickedPosition, allPositions['c2'])) {
        //director.innerText = 'Selection c2';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['c2']) {
                return i;
            }
        }

    }
    else if (isNear(clickedPosition, allPositions['c3'])) {
        //director.innerText = 'Selection c3';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['c3']) {
                return i;
            }
        }
    }
    else if (isNear(clickedPosition, allPositions['c4'])) {
        //director.innerText = 'Selection c4';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['c4']) {
                return i;
            }
        }
    }
    else if (isNear(clickedPosition, allPositions['c5'])) {
        //director.innerText = 'Selection c5';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['c5']) {
                return i;
            }
        }
    }
    else if (isNear(clickedPosition, allPositions['b1'])) {
        //director.innerText = 'Selection b1';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['b1']) {
                return i;
            }
        }
    }
    else if (isNear(clickedPosition, allPositions['b2'])) {
        //director.innerText = 'Selection b2';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['b2']) {
                return i;
            }
        }
    }
    else if (isNear(clickedPosition, allPositions['b3'])) {
        //director.innerText = 'Selection b3';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['b3']) {
                return i;
            }
        }
    }
    else if (isNear(clickedPosition, allPositions['b4'])) {
        //director.innerText = 'Selection b4';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['b4']) {
                return i;
            }
        }
    }
    else if (isNear(clickedPosition, allPositions['b5'])) {
        //director.innerText = 'Selection b5';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['b5']) {
                return i;
            }
        }
    }
    else if (isNear(clickedPosition, allPositions['a1'])) {
        //director.innerText = 'Selection a1';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['a1']) {
                return i;
            }
        }
    }
    else if (isNear(clickedPosition, allPositions['a2'])) {
        //director.innerText = 'Selection a2';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['a2']) {
                return i;
            }
        }
    }
    else if (isNear(clickedPosition, allPositions['a3'])) {
        //director.innerText = 'Selection a3';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['a3']) {
                return i;
            }
        }
    }
    else if (isNear(clickedPosition, allPositions['a4'])) {
        //director.innerText = 'Selection a2';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['a4']) {
                return i;
            }
        }
    }
    else if (isNear(clickedPosition, allPositions['a5'])) {
        //director.innerText = 'Selection a1';
        for (var i in pieces) {
            if (pieces[i].position == allPositions['a5']) {
                return i;
            }
        }
    }
    else {
        //director.innerText = 'No Selection';
        return 0;
    }

}
function updatePositions(prevPosition) {

    switch (prevPosition) {
        case allPositions['a1']:
            present['a1'] = 0;
            break;
        case allPositions['a2']:
            present['a2'] = 0;
            return
            break;
        case allPositions['a3']:
            present['a3'] = 0;
            break;
        case allPositions['a4']:
            present['a4'] = 0;
            break;
        case allPositions['a5']:
            present['a5'] = 0;
            break;
        case allPositions['b1']:
            present['b1'] = 0;
            break;
        case allPositions['b2']:
            present['b2'] = 0;
            break;
        case allPositions['b3']:
            present['b3'] = 0;
            break;
        case allPositions['b4']:
            present['b4'] = 0;
            break;
        case allPositions['b5']:
            present['b5'] = 0;
            break;
        case allPositions['c1']:
            present['c1'] = 0;
            break;
        case allPositions['c2']:
            present['c2'] = 0;
            break;
        case allPositions['c3']:
            present['c3'] = 0
            break;
        case allPositions['c4']:
            present['c4'] = 0
            break;
        case allPositions['c4']:
            present['c4'] = 0
            break;
        case allPositions['c5']:
            present['c5'] = 0
            break;
        case allPositions['d1']:
            present['d1'] = 0;
            break;
        case allPositions['d2']:
            present['d2'] = 0;
            break;
        case allPositions['d3']:
            present['d3'] = 0
            break;
        case allPositions['d4']:
            present['d4'] = 0
            break;
        case allPositions['d4']:
            present['d4'] = 0
            break;
        case allPositions['d5']:
            present['d5'] = 0
            break;
        case allPositions['e1']:
            present['e1'] = 0;
            break;
        case allPositions['e2']:
            present['e2'] = 0;
            break;
        case allPositions['e3']:
            present['e3'] = 0
            break;
        case allPositions['e4']:
            present['e4'] = 0
            break;
        case allPositions['e4']:
            present['e4'] = 0
            break;
        case allPositions['e5']:
            present['e5'] = 0
            break;
    }
}
function detectWin() {
    
    if(game.player1.piecesChewed == 10){
        document.body.style.backgroundColor = pieces[11].color;
        alert('player 2 wins');
    }
    else if(game.player2.piecesChewed == 10){
        document.body.style.backgroundColor = pieces[0].color;
        alert('player 2 wins');
    }
   console.log(game.player1.piecesChewed+"and"+game.player2.piecesChewed); 
}
function ispart(position, index) {
    if (index == 1) {
        for (var i = 0; i < 10; i++) {
            if (pieces[i].position == position) {
                return 1;
            }
        }
    }
    else if (index == 2) {
        for (var i = 10; i < 20; i++) {
            if (pieces[i].position == position) {
                return 1;
            }
        }
    }
}
/*This function determines all the possible possition
a piece can occupy and returns 1 if the desired 
position is possible and 0 if impossible*/
function isPossible(currentPosition, wantedPosition) {
    
    var possible;
    switch (currentPosition) {

        case allPositions['a1']: {
            
            possible = ['a2', 'b1', 'b2'];
            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    return 1;
                }
            }
            if (wantedPosition == 'a3' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['a2'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['a2'])], 'a2');
                return 1;
            }
            else if (wantedPosition == 'c1' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['b1'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['b1'])], 'b1');
                return 1;
            }
            else if (wantedPosition == 'c3' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['b2'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['b2'])], 'b2');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'c1', 'c3', 'd1', 'd4', 'e1', 'e5'];
                for(var i in possible )
                if (possible[i] == wantedPosition) {
                    return 1;
                }
            }

            //director.innerText = 'Imposible';
            return 0;

        }
        case allPositions['a2']: {
            possible = ['a1', 'a3', 'b2'];
            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    return 1;
                }
            }
            if (wantedPosition == 'a4' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['a3'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['a3'])], 'a3');
                return 1;
            }
            else if (wantedPosition == 'c2' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['b2'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['b2'])], 'b2');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['a1', 'a3', 'a4', 'a5','b2', 'c2','d2','e2'];
                possible = ['a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'c1', 'c3', 'd1', 'd4', 'e1', 'e5'];
                for (var i in possible){
                    if (possible[i] == wantedPosition) {
                        return 1;
                    }
                }
            }
            //director.innerText = 'Imposible';
            return 0;
        }
        case allPositions['a3']: {
            possible = ['a2', 'a4', 'b2', 'b3', 'b4'];
            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    return 1;
                }
            }
            if (wantedPosition == 'a1' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['a2'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['a2'])], 'a2');
                return 1;
            }
            else if (wantedPosition == 'a5' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['a4'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['a4'])], 'a4');
                return 1;
            }
            else if (wantedPosition == 'c1' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['b2'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['b2'])], 'b2');
                return 1;
            }
            else if (wantedPosition == 'c5' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['b4'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['b4'])], 'b4');
                return 1;
            }
            else if (wantedPosition == 'c3' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['b3'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['b3'])], 'b3');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['a1', 'a2', 'a4', 'a5', 'b2','b3','b4','c1','c3','c5','d3','e3'];
                for (var i in possible) {
                    if (possible[i] == wantedPosition) {
                        return 1;
                    }
                }
            }
            //director.innerText = 'Imposible';
            return 0;
        }
        case allPositions['a4']: {
            possible = ['a3', 'a5', 'b4'];
            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    return 1;
                }
            }
            if (wantedPosition == 'a2' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['a3'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['a3'])], 'a3');
                return 1;
            }
            else if (wantedPosition == 'c4' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['b4'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['b4'])], 'b4');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['a1', 'a2', 'a3', 'a5', 'b4','c4','d4','e4'];
                for (var i in possible) {
                    if (possible[i] == wantedPosition) {
                        return 1;
                    }
                }
            }
            //director.innerText = 'Imposible';
            return 0;
        }
        case allPositions['a5']: {
            possible = ['a4', 'b5', 'b4'];
            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    return 1;
                }
            }
            if (wantedPosition == 'a3' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['a4'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['a4'])], 'a4');
                return 1;
            }
            else if (wantedPosition == 'c3' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['b4'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['b4'])], 'b4');
                return 1;
            }
            else if (wantedPosition == 'c5' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['b5'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['b5'])], 'b5');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['a1', 'a2', 'a3', 'a4', 'b4', 'b5', 'c3', 'c5', 'd2', 'd5', 'e1', 'e5'];
                for (var i in possible) {
                    if (possible[i] == wantedPosition) {
                        return 1;
                    }
                }
            }
            //director.innerText = 'Imposible';
            return 0;
        }
        case allPositions['b1']: {
            if (belongsTo1(pieces[activated])||pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['b2', 'a1', 'c1'];
            }
            else {
                possible = ['b2', 'a1'];
            }

            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    return 1;
                }
            }
            if (wantedPosition == 'b3' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['b2'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['b2'])], 'b2');
                return 1;
            }
            else if (wantedPosition == 'd1' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['c1'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['c1'])], 'c1');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['d1','e1','b3','b4','b5']
                for (var i in possible) {
                    if (possible[i] == wantedPosition) {
                        return 1;
                    }
                }
            }
            //director.innerText = 'Imposible';
            return 0;
        }
        case allPositions['b2']: {
            if (belongsTo1(pieces[activated])||pieces[indexOfPieceAt(currentPosition)].king) {

                possible = ['a1', 'a2', 'a3', 'b1', 'b3', 'c1', 'c2', 'c3'];
            }
            else {

                possible = ['a1', 'a2', 'a3', 'b1', 'b3'];
            }
            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    return 1;
                }
            }
            if (wantedPosition == 'b4' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['b3'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['b3'])], 'b3');
                return 1;
            }
            else if (wantedPosition == 'd2' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['c2'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['c2'])], 'c2');
                return 1;
            }
            else if (wantedPosition == 'd4' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['c3'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['c3'])], 'c3');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['a1','a2','a3','b1','b3','b4','b5','c1','c2','c3','d2','d4','e2','e5'];
                for (var i in possible) {
                    if (possible[i] == wantedPosition) {
                        return 1;
                    }
                }
            }
            //director.innerText = 'Imposible';
            return 0;
        }
        case allPositions['b3']: {
            if (belongsTo1(pieces[activated])||pieces[indexOfPieceAt(currentPosition)].king) {

                possible = ['b2', 'b4', 'a3', 'c3'];
            }
            else {

                possible = ['b2', 'b4', 'a3'];
            }
            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    return 1;
                }
            }
            if (wantedPosition == 'b1' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['b2'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['b2'])], 'b2');
                return 1;
            }
            else if (wantedPosition == 'b5' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['b4'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['b4'])], 'b4');
                return 1;
            }
            else if (wantedPosition == 'd3' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['c3'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['c3'])], 'c3');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['a3','b1','b2','b4','b5','c3','d3','e3'];
                for (var i in possible) {
                    if (possible[i] == wantedPosition) {
                        return 1;
                    }
                }
            }
            //director.innerText = 'Imposible';
            return 0;
        }
        case allPositions['b4']: {
            if (belongsTo1(pieces[activated])||pieces[indexOfPieceAt(currentPosition)].king) {

                possible = ['a3', 'a4', 'a5', 'b3', 'b5', 'c3', 'c4', 'c5'];
            }
            else {

                possible = ['a3', 'a4', 'a5', 'b3', 'b5'];
            }
            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    return 1;
                }
            }
            if (wantedPosition == 'b2' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['b3'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['b3'])], 'b3');
                return 1;
            }
            else if (wantedPosition == 'd2' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['c3'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['c3'])], 'c3');
                return 1;
            }
            else if (wantedPosition == 'd4' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['c4'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['c4'])], 'c4');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b5', 'c3', 'c4', 'c5', 'd2', 'd4', 'e1', 'e4'];
                for (var i in possible) {
                    if (possible[i] == wantedPosition) {
                        return 1;
                    }
                }
            }
            //director.innerText = 'Imposible';
            return 0;
        }
        case allPositions['b5']: {
            if (belongsTo1(pieces[activated])||pieces[indexOfPieceAt(currentPosition)].king) {

                possible = ['b4', 'a5', 'c5'];
            }
            else {

                possible = ['b4', 'a5'];
            }
            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    return 1;
                }
            }
            if (wantedPosition == 'b3' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['b4'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['b4'])], 'b4');
                return 1;
            }
            else if (wantedPosition == 'd5' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['c5'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['c5'])], 'c5');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['a5','b1', 'b2', 'b3', 'b4', 'c5', 'd5', 'e5'];
                for (var i in possible) {
                    if (possible[i] == wantedPosition) {
                        return 1;
                    }
                }
            }
            //director.innerText = 'Imposible';
            return 0;
        }
        case allPositions['c1']: {
            if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['c2', 'd1', 'd2', 'b1', 'b2'];
            }
            else if (belongsTo1(pieces[activated])||pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['c2', 'd1', 'd2'];
            }
            else {
                possible = ['b1', 'b2', 'c2'];
            }
            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    //director.innerText = 'Posible';
                    return 1;
                }
            }
            if (wantedPosition == 'a1' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['b1'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['b1'])], 'b1');
                return 1;
            }
            else if (wantedPosition == 'a3' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['b2'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['b2'])], 'b2');
                return 1;
            }
            else if (wantedPosition == 'e1' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['d1'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['d1'])], 'd1');
                return 1;
            }
            else if (wantedPosition == 'e3' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['d2'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['d2'])], 'd2');
                return 1;
            }
            else if (wantedPosition == 'c3' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['c2'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['c2'])], 'c2');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['a1','a3','b1','b2','c2','c3','c4','c5','d1','d2','e1','e3'];
                for (var i in possible) {
                    if (possible[i] == wantedPosition) {
                        return 1;
                    }
                }
            }
            //director.innerText = 'Imposible';
            return 0;
        }
        case allPositions['c2']: {
            if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['b2','c1', 'c3', 'd2'];
            }
            else if (belongsTo1(pieces[activated])||pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['c1', 'c3', 'd2'];
            }
            else {
                possible = ['c1', 'c3', 'b2'];
            }

            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    return 1;
                }
            }
            if (wantedPosition == 'a2' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['b2'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['b2'])], 'b2');
                return 1;
            }
            else if (wantedPosition == 'e2' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['d2'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['d2'])], 'd2');
                return 1;
            }
            else if (wantedPosition == 'c4' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['c3'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['c3'])], 'c3');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['a2','b2','c1','c3','c4','c5','d2','e2'];
                for (var i in possible) {
                    if (possible[i] == wantedPosition) {
                        return 1;
                    }
                }
            }
            //director.innerText = 'Imposible';
            return 0;
        }
        case allPositions['c3']: {
            if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['c2', 'c4', 'd2', 'd3', 'd4', 'b3', 'b4', 'b2'];
            }
            else if (belongsTo1(pieces[activated])||pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['c2', 'c4', 'd2', 'd3', 'd4'];
            }
            else {
                possible = ['c2', 'b3', 'b4', 'c4', 'b2'];
            }
            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    return 1;
                }
            }
            if (wantedPosition == 'a1' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['b2'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['b2'])], 'b2');
                return 1;
            }
            else if (wantedPosition == 'a3' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['b3'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['b3'])], 'b3');
                return 1;
            }
            else if (wantedPosition == 'a5' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['b4'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['b4'])], 'b4');
                return 1;
            }
            else if (wantedPosition == 'c1' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['c2'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['c2'])], 'c2');
                return 1;
            }
            else if (wantedPosition == 'c5' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['c4'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['c4'])], 'c4');
                return 1;
            }
            else if (wantedPosition == 'e1' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['d2'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['d2'])], 'd2');
                return 1;
            }
            else if (wantedPosition == 'e3' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['d3'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['d3'])], 'd3');
                return 1;
            }
            else if (wantedPosition == 'e5' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['d4'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['d4'])], 'd4');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['a1','a3','a5','b2','b3','b4','c1','c2','c4','c5','d2','d3','d4','e1','e3','e5'];
                for (var i in possible){
                    if (possible[i] == wantedPosition) {
                        return 1;
                    }
                }
            }
            //director.innerText = 'Imposible';
            return 0;
        }
        case allPositions['c4']: {
            if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['c3', 'd4', 'b4', 'c5'];
            }
            else if (belongsTo1(pieces[activated])||pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['c3', 'd4', 'c5'];
            }
            else {
                possible = ['c3', 'b4', 'c5'];
            }
            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    return 1;
                }
            }
            if (wantedPosition == 'a4' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['b4'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['b4'])], 'b4');
                return 1;
            }
            else if (wantedPosition == 'e4' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['d4'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['d4'])], 'd4');
                return 1;
            }
            else if (wantedPosition == 'c2' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['c3'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['c3'])], 'c3');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['a4', 'b4', 'c1', 'c2', 'c3', 'c5', 'd4', 'e4'];
                for (var i in possible){
                    if (possible[i] == wantedPosition) {
                        return 1;
                    }
                }
            }
            //director.innerText = 'Imposible';
            return 0;
        }
        case allPositions['c5']: {
            if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['c4', 'd4', 'd5','b4', 'b5'];
            }
            else if (belongsTo1(pieces[activated])||pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['c4', 'd4', 'd5'];
            }
            else {
                possible = ['c4', 'b4', 'b5'];
            }
            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    return 1;
                }
            }
            if (wantedPosition == 'a5' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['b5'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['b5'])], 'b5');
                return 1;
            }
            else if (wantedPosition == 'a3' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['b4'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['b4'])], 'b4');
                return 1;
            }
            else if (wantedPosition == 'e3' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['d4'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['d4'])], 'd4');
                return 1;
            }
            else if (wantedPosition == 'e5' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['d5'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['d5'])], 'd5');
                return 1;
            }
            else if (wantedPosition == 'c3' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['c4'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['c4'])], 'c4');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['a5', 'a3', 'b4', 'b5', 'c1', 'c2', 'c3', 'c4', 'd4', 'd5', 'e3', 'e5'];
                for (var i in possible){
                    if (possible[i] == wantedPosition) {
                        return 1;
                    }
                }
            }
            //director.innerText = 'Imposible';
            return 0;
        }
        case allPositions['d1']: {
            if (pieces[indexOfPieceAt(currentPosition)].king){
                possible = ['c1', 'd2', 'e1'];
            }

            else if (belongsTo1(pieces[activated])) {
                possible = ['d2', 'e1'];
            }
            else {
                possible = ['c1', 'd2', 'e1'];
            }

            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    //director.innerText = 'Posible';
                    return 1;
                }
            }
            if (wantedPosition == 'd3' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['d2'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['d2'])], 'd2');
                return 1;
            }
            else if (wantedPosition == 'b1' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['c1'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['c1'])], 'c1');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['e1', 'd2', 'd3', 'd4', 'd5', 'c1', 'b1', 'a1'];
                for (var i in possible){
                    if (possible[i] == wantedPosition) {
                        return 1;
                    }
                }
            }

            //director.innerText = 'Imposible';
            return 0;
        }
        case allPositions['d2']: {
            if (pieces[indexOfPieceAt(currentPosition)].king) {

                possible = ['c1', 'c2', 'c3', 'd1', 'd3', 'e1', 'e2', 'e3'];
            }

            else if (belongsTo1(pieces[activated])||pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['d1', 'd3', 'e1', 'e2', 'e3'];
            }
            else {
                possible = ['c1', 'c2', 'c3', 'd1', 'd3', 'e1', 'e2', 'e3'];
            }
            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    return 1;
                }
            }
            if (wantedPosition == 'd4' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['d3'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['d3'])], 'd3');
                return 1;
            }
            else if (wantedPosition == 'b2' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['c2'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['c2'])], 'c2');
                return 1;
            }
            else if (wantedPosition == 'b4' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['c3'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['c3'])], 'c3');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['e1', 'e2', 'e3', 'd1', 'd3', 'd4', 'd5', 'c1', 'c2', 'c3', 'b2', 'b4', 'a2', 'a5'];
                for (var i in possible){
                    if (possible[i] == wantedPosition) {
                        return 1;
                    }
                }
            }

            //director.innerText = 'Imposible';
            return 0;
        }
        case allPositions['d3']: {
            if (pieces[indexOfPieceAt(currentPosition)].king) {

                possible = ['c3', 'd2', 'd4', 'e3'];
            }

            else if (belongsTo1(pieces[activated])||pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['d2', 'd4', 'e3'];
            }
            else {
                possible = ['c3', 'd2', 'd4', 'e3'];
            }
            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    return 1;
                }
            } if (wantedPosition == 'd1' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['d2'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['d2'])], 'd2');
                return 1;
            }
            else if (wantedPosition == 'd5' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['d4'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['d4'])], 'd4');
                return 1;
            }
            else if (wantedPosition == 'b3' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['c3'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['c3'])], 'c3');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['e3', 'd1', 'd2', 'd4', 'd5', 'c3', 'b3', 'a3'];
                for (var i in possible){
                    if (possible[i] == wantedPosition) {
                        return 1;
                    }
                }
            }

            //director.innerText = 'Imposible';
            return 0;
        }
        case allPositions['d4']: {
            if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['c3', 'c4', 'c5', 'd3', 'd5', 'e3', 'e4', 'e5'];
            }

            else if (belongsTo1(pieces[activated])||pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['d3', 'd5', 'e3', 'e4', 'e5'];
            }
            else {
                possible = ['c3', 'c4', 'c5', 'd3', 'd5', 'e3', 'e4', 'e5'];
            }
            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    return 1;
                }
            }
            if (wantedPosition == 'd2' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['d3'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['d3'])], 'd3');
                return 1;
            }
            else if (wantedPosition == 'b2' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['c3'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['c3'])], 'c3');
                return 1;
            }
            else if (wantedPosition == 'b4' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['c4'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['c4'])], 'c4');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['e3', 'e4', 'e5', 'd1', 'd2', 'd3', 'd5', 'c3', 'c4', 'c5', 'b2', 'b4', 'a1', 'a4'];
                for (var i in possible){
                    if (possible[i] == wantedPosition) {
                        return 1;
                    }
                }
            }
            //director.innerText = 'Imposible';
            return 0;
        }
        case allPositions['d5']: {
            if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['c5', 'd4', 'e5'];
            }

            else if (belongsTo1(pieces[activated])) {
                possible = ['d4', 'e5'];
            }
            else {
                possible = ['c5', 'd4', 'e5'];
            }
            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    return 1;
                }
            }
            if (wantedPosition == 'd3' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['d4'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['d4'])], 'd4');
                return 1;
            }
            else if (wantedPosition == 'b5' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['c5'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['c5'])], 'c5');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['e5', 'd1', 'd2', 'd3', 'd4', 'c5', 'b5', 'a5'];
                if (possible[i] == wantedPosition) {
                    return 1;
                }
            }
            //director.innerText = 'Imposible';
            return 0;
        }
        case allPositions['e1']: {
            possible = ['d1', 'd2', 'e2'];
            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    //director.innerText = 'Posible';
                    return 1;
                }
            }
            if (wantedPosition == 'e3' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['e2'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['e2'])], 'e2');
                return 1;
            }
            else if (wantedPosition == 'c1' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['d1'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['d1'])], 'd1');
                return 1;
            }
            else if (wantedPosition == 'c3' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['d2'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['d2'])], 'd2');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['e2', 'e3', 'e4', 'e5', 'd1', 'd2', 'c1', 'c3', 'b1', 'b4', 'a1', 'a5'];
                for (var i in possible){
                    if (possible[i] == wantedPosition) {
                        return 1;
                    }
                }
            }
            //director.innerText = 'Imposible';
            return 0;
        }
        case allPositions['e2']: {
            possible = ['d2', 'e1', 'e3'];
            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    return 1;
                }
            }
            if (wantedPosition == 'e4' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['e3'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['e3'])], 'e3');
                return 1;
            }
            else if (wantedPosition == 'c2' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['d2'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['d2'])], 'd2');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['e1', 'e3', 'e4', 'e5', 'd2', 'c2', 'b2', 'a2'];
                for (var i in possible){
                    if (possible[i] == wantedPosition) {
                        return 1;
                    }
                }
            }
            //director.innerText = 'Imposible';
            return 0;
        }
        case allPositions['e3']: {
            possible = ['d2', 'd3', 'd4', 'e2', 'e4'];
            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    return 1;
                }
            }
            if (wantedPosition == 'e1' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['e2'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['e2'])], 'e2');
                return 1;
            }
            else if (wantedPosition == 'e5' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['e4'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['e4'])], 'e4');
                return 1;
            }
            else if (wantedPosition == 'c1' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['d2'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['d2'])], 'd2');
                return 1;
            }
            else if (wantedPosition == 'c5' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['d4'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['d4'])], 'd4');
                return 1;
            }
            else if (wantedPosition == 'c3' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['d3'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['d3'])], 'd3');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['e1', 'e2', 'e4', 'e5', 'd2', 'd3', 'd4', 'c1', 'c3', 'c5', 'b3', 'a3'];
                for (var i in possible){
                    if (possible[i] == wantedPosition) {
                        return 1;
                    }
                }
            }

            //director.innerText = 'Imposible';
            return 0;
        }
        case allPositions['e4']: {
            possible = ['d4', 'e3', 'e5'];
            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    return 1;
                }
            } if (wantedPosition == 'e2' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['e3'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['e3'])], 'e3');
                return 1;
            }
            else if (wantedPosition == 'c4' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['d4'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['d4'])], 'd4');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['e1', 'e2', 'e3', 'e5', 'd4', 'c4', 'b4', 'a4'];
                for (var i in possible){
                    if (possible[i] == wantedPosition) {
                        return 1;
                    }
                }
            }
            //director.innerText = 'Imposible';
            return 0;
        }
        case allPositions['e5']: {
            possible = ['d4', 'd5'];
            for (i in possible) {
                if (possible[i] == wantedPosition) {
                    return 1;
                }
            }
            if (wantedPosition == 'e3' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['e4'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['e4'])], 'e4');
                return 1;
            }
            else if (wantedPosition == 'c3' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['d4'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['d4'])], 'd4');
                return 1;
            }
            else if (wantedPosition == 'c5' && !belongToSamePlayer(pieces[indexOfPieceAt(currentPosition)], pieces[indexOfPieceAt(allPositions['d5'])])) {
                chewPiece(pieces[indexOfPieceAt(allPositions['d5'])], 'd5');
                return 1;
            }
            else if (pieces[indexOfPieceAt(currentPosition)].king) {
                possible = ['e1', 'e2', 'e3', 'e4', 'd4', 'd5', 'c3', 'c5', 'b2', 'b5', 'a1', 'a5'];
                for (var i in possible){
                    if (possible[i] == wantedPosition) {
                        return 1;
                    }
                }
            }

            //director.innerText = 'Imposible';
            return 0;
        }
    }
}
function movePieceToAppropriatePosition(piece, position) {
    var currentPosition = piece.position;
    if (isNear(position, allPositions['a1']) && !present['a1'] && isPossible(currentPosition, 'a1')) {
        updatePositions(piece.position);
        piece.position = allPositions['a1'];
        present['a1'] = 1;
        if (!ispart(allPositions['a1'], 1)) {
            piece.king = 1;
        }
    }
    else if (isNear(position, allPositions['a2']) && !present['a2'] && isPossible(currentPosition, 'a2')) {
        updatePositions(piece.position);
        piece.position = allPositions['a2'];
        present['a2'] = 1;
        if (!ispart(allPositions['a2'], 1)) {
            piece.king = 1;
        }
    }
    else if (isNear(position, allPositions['a3']) && !present['a3'] && isPossible(currentPosition, 'a3')) {
        updatePositions(piece.position);
        piece.position = allPositions['a3'];
        present['a3'] = 1;
        if (!ispart(allPositions['a3'], 1)) {
            piece.king = 1;
        }
    }
    else if (isNear(position, allPositions['a4']) && !present['a4'] && isPossible(currentPosition, 'a4')) {
        updatePositions(piece.position);
        piece.position = allPositions['a4'];
        present['a4'] = 1;
        if (!ispart(allPositions['a4'], 1)) {
            piece.king = 1;
        }
    }
    else if (isNear(position, allPositions['a5']) && !present['a5'] && isPossible(currentPosition, 'a5')) {
        updatePositions(piece.position);
        piece.position = allPositions['a5'];
        present['a5'] = 1;
        if (!ispart(allPositions['a5'], 1)) {
            piece.king = 1;
        }
    }
    else if (isNear(position, allPositions['b1']) && !present['b1'] && isPossible(currentPosition, 'b1')) {
        updatePositions(piece.position);
        piece.position = allPositions['b1'];
        present['b1'] = 1;
    }
    else if (isNear(position, allPositions['b2']) && !present['b2'] && isPossible(currentPosition, 'b2')) {
        updatePositions(piece.position);
        piece.position = allPositions['b2'];
        present['b2'] = 1;
    }
    else if (isNear(position, allPositions['b3']) && !present['b3'] && isPossible(currentPosition, 'b3')) {
        updatePositions(piece.position);
        piece.position = allPositions['b3'];
        present['b3'] = 1;
    }
    else if (isNear(position, allPositions['b4']) && !present['b4'] && isPossible(currentPosition, 'b4')) {
        updatePositions(piece.position);
        piece.position = allPositions['b4'];
        present['b4'] = 1;
    }
    else if (isNear(position, allPositions['b5']) && !present['b5'] && isPossible(currentPosition, 'b5')) {
        updatePositions(piece.position);
        piece.position = allPositions['b5'];
        present['b5'] = 1;
    }
    else if (isNear(position, allPositions['c1']) && !present['c1'] && isPossible(currentPosition, 'c1')) {
        updatePositions(piece.position);
        piece.position = allPositions['c1'];
        present['c1'] = 1;
    }
    else if (isNear(position, allPositions['c2']) && !present['c2'] && isPossible(currentPosition, 'c2')) {
        updatePositions(piece.position);
        piece.position = allPositions['c2'];
        present['c2'] = 1;
    }
    else if (isNear(position, allPositions['c3']) && !present['c3'] && isPossible(currentPosition, 'c3')) {
        updatePositions(piece.position);
        piece.position = allPositions['c3'];
        present['c3'] = 1;
    }
    else if (isNear(position, allPositions['c4']) && !present['c4'] && isPossible(currentPosition, 'c4')) {
        updatePositions(piece.position);
        piece.position = allPositions['c4'];
        present['c4'] = 1;
    }
    else if (isNear(position, allPositions['c5']) && !present['c5'] && isPossible(currentPosition, 'c5')) {
        updatePositions(piece.position);
        piece.position = allPositions['c5'];
        present['c5'] = 1;
    }

    else if (isNear(position, allPositions['d1']) && !present['d1'] && isPossible(currentPosition, 'd1')) {
        updatePositions(piece.position);
        piece.position = allPositions['d1'];
        present['d1'] = 1;
    }
    else if (isNear(position, allPositions['d2']) && !present['d2'] && isPossible(currentPosition, 'd2')) {
        updatePositions(piece.position);
        piece.position = allPositions['d2'];
        present['d2'] = 1;
    }
    else if (isNear(position, allPositions['d3']) && !present['d3'] && isPossible(currentPosition, 'd3')) {
        updatePositions(piece.position);
        piece.position = allPositions['d3'];
        present['d3'] = 1;
    }
    else if (isNear(position, allPositions['d4']) && !present['d4'] && isPossible(currentPosition, 'd4')) {
        updatePositions(piece.position);
        piece.position = allPositions['d4'];
        present['d4'] = 1;
    }
    else if (isNear(position, allPositions['d5']) && !present['d5'] && isPossible(currentPosition, 'd5')) {
        updatePositions(piece.position);
        piece.position = allPositions['d5'];
        present['d5'] = 1;
    }
    else if (isNear(position, allPositions['e1']) && !present['e1'] && isPossible(currentPosition, 'e1')) {
        updatePositions(piece.position);
        piece.position = allPositions['e1'];
        present['e1'] = 1;
        if (ispart(allPositions['e1'], 1)) {
            piece.king = 1;
        }
    }
    else if (isNear(position, allPositions['e2']) && !present['e2'] && isPossible(currentPosition, 'e2')) {
        updatePositions(piece.position);
        piece.position = allPositions['e2'];
        present['e2'] = 1;
        if (ispart(allPositions['e2'], 1)) {
            piece.king = 1;
        }
    }
    else if (isNear(position, allPositions['e3']) && !present['e3'] && isPossible(currentPosition, 'e3')) {
        updatePositions(piece.position);
        piece.position = allPositions['e3'];
        present['e3'] = 1;
        if (ispart(allPositions['e3'], 1)) {
            piece.king = 1;
        }
    }
    else if (isNear(position, allPositions['e4']) && !present['e4'] && isPossible(currentPosition, 'e4')) {
        updatePositions(piece.position);
        piece.position = allPositions['e4'];
        present['e4'] = 1;
        if (ispart(allPositions['e4'], 1)) {
            piece.king = 1;
        }
    }
    else if (isNear(position, allPositions['e5']) && !present['e5'] && isPossible(currentPosition, 'e5')) {
        updatePositions(piece.position);
        piece.position = allPositions['e5'];
        present['e5'] = 1;
        if (ispart(allPositions['e5'], 1)) {
            piece.king = 1;
        }
    }
    else {
        piece.position = currentPosition;
    }
}
function belongsTo1(piece) {
    for (var i = 10; i < 20; i++) {
        if (pieces[i] === piece) {
            return 0;
        }
    }
    return 1;
}
function isNear(approxPosition, realPosition) {
    
    if (Math.abs(approxPosition['x'] - realPosition['x']) <= errorMargin['x'] 
    && Math.abs(approxPosition['y'] - realPosition['y']) <= errorMargin['y']) {
        //console.log("x1-x2=" + Math.abs(approxPosition['x'] - realPosition['x']) + "\n y1-y2=" + Math.abs(approxPosition['y'] - realPosition['y']));
        return true;
    }
    else {
        // console.log("x1-x2=" + Math.abs(approxPosition['x'] - realPosition['x']) + "\n y1-y2=" + Math.abs(approxPosition['y'] - realPosition['y']));
        
        return false;
    }
}
function chewPiece(piece, position) {
    piece.position = { 'x': -1000, 'y': -1000 };
    if(belongsTo1(piece)){
        game.player1.piecesChewed++;
    }
    else{
        game.player2.piecesChewed++;
    }
    present[position] = 0;
}
function indexOfPieceAt(position = allPositions['c1']) {
    for (var i in pieces) {
        if (pieces[i].position == position) {
            return i;
        }
    }
}
function belongToSamePlayer(piece1, piece2) {
    if (belongsTo1(piece1) && belongsTo1(piece2) || !belongsTo1(piece1) && !belongsTo1(piece2)) {
        return 1;
    }
    else {
        return 0;
    }
}

function drawBoard(ctx = document.querySelector('canvas').getContext('2d')) {
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

    ctx.lineWidth = 1; // line width
    ctx.strokeStyle = "black" // line color
    ctx.stroke();
}

function gameLoop() {
    game.refresh();
    drawBoard(ctx);
    game.draw();   
    game.update(); 
    //detectWin();
    requestAnimationFrame(gameLoop);
}
function pause(){
    localStorage.setItem('piece1x', pieces[0].position['x']);
    localStorage.setItem('piece1y', pieces[0].position['y']);
    
}
function play(){
    pieces[0].position['x'] = localStorage.getItem('piecex');
    pieces[0].position['y'] = localStorage.getItem('piecey');
}
function replay(){

}
function quit(){
    window.close();
}
function settings(){

}
