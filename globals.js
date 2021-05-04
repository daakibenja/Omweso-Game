var canvas = document.getElementById('game-area');
var ctx = canvas.getContext('2d');
var pieces = new Array(20); 

canvas.style = 'max-width:'+document.offsetWidth+'px;max-height:'+document.offsetHeight+'px;';
canvas.width = document.querySelector('canvas').offsetWidth;
canvas.height = canvas.width//document.querySelector('canvas').offsetHeight;
var canvasHeight = canvas.height - canvas.height / 7;
var canvasWidth = canvas.width - canvas.height / 7;
var breadth = canvasWidth/15;
var extX = canvasWidth/10 ;
var extY = canvasHeight/10;
var bx1 = extX;
var bx2 = canvasWidth/4 + extX;
var bx3 = canvasWidth/2 + extX;
var bx4 = canvasWidth*3/4 + extX;
var bx5 = canvasWidth + extX;
var by1 = extY;
var by2 = canvasHeight/4 + extY;
var by3 = canvasHeight/2 + extY;
var by4 = canvasHeight*3/4 + extY;
var by5 = canvasHeight +extY;

var state = 0;
var x1 = bx1;
var x2 = bx2 - breadth / 2;
var x3 = bx3 - breadth / 2;
var x4 = bx4 - breadth / 2;
var x5 = bx5 - breadth;
var y1 = by1;
var y2 = by2 - breadth / 2;
var y3 = by3 - breadth / 2;
var y4 = by4 - breadth / 2;
var y5 = by5 - breadth;

var errorMargin = { 'x': breadth, 'y': breadth };
//Specifies which piece is activated
var activated = 0;
//This notifies when selection is to occur and when movemonet is to occur
var notifier = 1;
var allPositions = {
    'a1': {
        'x': x1,
        'y': y1
    },
    'a2': {
        'x': x2,
        'y': y1
    },
    'a3': {
        'x': x3,
        'y': y1
    },
    'a4': {
        'x': x4,
        'y': y1
    },
    'a5': {
        'x': x5,
        'y': y1
    },
    'b1': {
        'x': x1,
        'y': y2
    },
    'b2': {
        'x': x2,
        'y': y2
    },
    'b3': {
        'x': x3,
        'y': y2
    },
    'b4': {
        'x': x4,
        'y': y2
    },
    'b5': {
        'x': x5,
        'y': y2
    },
    'c1': {
        'x': x1,
        'y': y3
    },
    'c2': {
        'x': x2,
        'y': y3
    },
    'c3': {
        'x': x3,
        'y': y3
    },
    'c4': {
        'x': x4,
        'y': y3
    },
    'c5': {
        'x': x5,
        'y': y3
    },
    'd1': {
        'x': x1,
        'y': y4
    },
    'd2': {
        'x': x2,
        'y': y4
    },
    'd3': {
        'x': x3,
        'y': y4
    },
    'd4': {
        'x': x4,
        'y': y4
    },
    'd5': {
        'x': x5,
        'y': y4
    },

    'e1': {
        'x': x1,
        'y': y5
    },
    'e2': {
        'x': x2,
        'y': y5
    },
    'e3': {
        'x': x3,
        'y': y5
    },
    'e4': {
        'x': x4,
        'y': y5
    },
    'e5': {
        'x': x5,
        'y': y5
    }
}
var currentPositions = allPositions = {
    'a1': {
        'x': x1,
        'y': y1
    },
    'a2': {
        'x': x2,
        'y': y1
    },
    'a3': {
        'x': x3,
        'y': y1
    },
    'a4': {
        'x': x4,
        'y': y1
    },
    'a5': {
        'x': x5,
        'y': y1
    },
    'b1': {
        'x': x1,
        'y': y2
    },
    'b2': {
        'x': x2,
        'y': y2
    },
    'b3': {
        'x': x3,
        'y': y2
    },
    'b4': {
        'x': x4,
        'y': y2
    },
    'b5': {
        'x': x5,
        'y': y2
    },
    'c1': {
        'x': x1,
        'y': y3
    },
    'c2': {
        'x': x2,
        'y': y3
    },
    'c3': {
        'x': x3,
        'y': y3
    },
    'c4': {
        'x': x4,
        'y': y3
    },
    'c5': {
        'x': x5,
        'y': y3
    },
    'd1': {
        'x': x1,
        'y': y4
    },
    'd2': {
        'x': x2,
        'y': y4
    },
    'd3': {
        'x': x3,
        'y': y4
    },
    'd4': {
        'x': x4,
        'y': y4
    },
    'd5': {
        'x': x5,
        'y': y4
    },

    'e1': {
        'x': x1,
        'y': y5
    },
    'e2': {
        'x': x2,
        'y': y5
    },
    'e3': {
        'x': x3,
        'y': y5
    },
    'e4': {
        'x': x4,
        'y': y5
    },
    'e5': {
        'x': x5,
        'y': y5
    }
}; 
var boardPoints = {
    'a1': {
        'x': bx1,
        'y': by1
    },
    'a2': {
        'x': bx2,
        'y': by1
    },
    'a3': {
        'x': bx3,
        'y': by1
    },
    'a4': {
        'x': bx4,
        'y': by1
    },
    'a5': {
        'x': bx5,
        'y': by1
    },
    'b1': {
        'x': bx1,
        'y': by2
    },
    'b2': {
        'x': bx2,
        'y': by2
    },
    'b3': {
        'x': bx3,
        'y': by2
    },
    'b4': {
        'x': bx4,
        'y': by2
    },
    'b5': {
        'x': bx5,
        'y': by2
    },
    'c1': {
        'x': bx1,
        'y': by3
    },
    'c2': {
        'x': bx2,
        'y': by3
    },
    'c3': {
        'x': bx3,
        'y': by3
    },
    'c4': {
        'x': bx4,
        'y': by3
    },
    'c5': {
        'x': bx5,
        'y': by3
    },
    'd1': {
        'x': bx1,
        'y': by4
    },
    'd2': {
        'x': bx2,
        'y': by4
    },
    'd3': {
        'x': bx3,
        'y': by4
    },
    'd4': {
        'x': bx4,
        'y': by4
    },
    'd5': {
        'x': bx5,
        'y': by4
    },

    'e1': {
        'x': bx1,
        'y': by5
    },
    'e2': {
        'x': bx2,
        'y': by5
    },
    'e3': {
        'x': bx3,
        'y': by5
    },
    'e4': {
        'x': bx4,
        'y': by5
    },
    'e5': {
        'x': bx5,
        'y': by5
    }
}
var present = {
    'a1': 0,
    'a2': 0,
    'a3': 0,
    'a4': 0,
    'a5': 0,
    'b1': 0,
    'b2': 0,
    'b3': 0,
    'b4': 0,
    'b5': 0,
    'c1': 0,
    'c2': 0,
    'c3': 0,
    'c4': 0,
    'c5': 0,
    'd1': 0,
    'd2': 0,
    'd3': 0,
    'd4': 0,
    'd5': 0,
    'e1': 0,
    'e2': 0,
    'e3': 0,
    'e4': 0,
    'e5': 0
}
var pieceAndPosition = {
    0: allPositions['a1'],
    1: allPositions['a2'],
    2: allPositions['a3'],
    3: allPositions['a4'],
    4: allPositions['a5'],
    5: allPositions['b1'],
    6: allPositions['b2'],
    7: allPositions['b3'],
    8: allPositions['b4'],
    9: allPositions['b5'],
    10: allPositions['e1'],
    11: allPositions['e2'],
    12: allPositions['e3'],
    13: allPositions['e4'],
    14: allPositions['e5'],
    15: allPositions['d1'],
    16: allPositions['d2'],
    17: allPositions['d3'],
    18: allPositions['d4'],
    19: allPositions['d5']
}
