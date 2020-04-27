//Sending a roveer to Mars
//We will be able to send a series of instructions from Earth
//NASA has placed the rover on a 10x10 grid to make sure all is well before we ship it off to Mars


// Obstacles & Rover Objects
let obstacles = [{x:1,y:1}, {x:0,y:1}];

let obstacleX = []
let obstacleY = []

for (i = 0; i < obstacles.length; i++){
    obstacleX.push(obstacles[i].x);
    obstacleY.push(obstacles[i].y);
}

let theRover ={
    direction : 'N',
    x: 0,
    y: 0,
    travelLog: [{x:0,
                y:0}]
}


// Functions
function turnning(rover,command){
    if (command == 'L'){
    switch (rover.direction){
        case 'N':
            rover.direction = 'E';
            break;
        case 'W':
            rover.direction = 'N';
            break;
        case 'S':
            rover.direction = 'W';
            break;
        case 'E':
            rover.direction = 'S';
            break;
    }
    console.log(`turnLeft was called!\nRover is facing ${rover.direction}`);
    } else {
    switch (rover.direction){
        case 'N':
            rover.direction = 'W';
            break;
        case 'W':
            rover.direction = 'S';
            break;
        case 'S':
            rover.direction = 'E';
            break;
        case 'E':
            rover.direction = 'N';
            break;
    }
    console.log(`turnRight was called!\nRover is facing ${rover.direction}`);
    }
}

function moveForward(rover){
    switch(rover.direction){
    case 'N':
        rover.y--;
        break;
    case 'W':
        rover.x++;
        break;
    case 'S':
        rover.y++;
        break;
    case 'E':
        rover.x--;
        break;
    } if ((rover.y >= 0 && rover.y <= 10 && rover.x >= 0 && rover.x <= 10) && (!(obstacleX.includes(rover.x) && obstacleY.includes(rover.y)))){
        let newposition = {x:rover.x,y:rover.y};
        rover.travelLog.push(newposition);
        console.log(`moveForward was called\nRover current position is (${rover.x};${rover.y})`);
        } else {
            console.log("You may have faced an obstacle!");
    }
}

function moveBackward(rover){
    switch(rover.direction){
    case 'N':
        rover.y++;
        break;
    case 'W':
        rover.x--;
        break;
    case 'S':
        rover.y--;
        break;
    case 'E':
        rover.x++;
        break;
    } if ((rover.y >= 0 && rover.y <= 10 && rover.x >= 0 && rover.x <= 10) && (!(obstacleX.includes(rover.x) && obstacleY.includes(rover.y)))){
        let newposition = {x:rover.x,y:rover.y};
        rover.travelLog.push(newposition);
        console.log(`moveBackward was called\nRover current position is (${rover.x};${rover.y})`);
        } else {
        console.log("You can't place rover outside the board");
    }
}

//Function Command
function command(rover, orders) {
    for (i = 0; i < orders.length; i++){
        let order = orders[i];
        switch (order){
            case 'L':
                turnning(rover,'L');
                break;
            case 'R':
                turnning(rover,'R');
                break;
            case 'F':
                moveForward(rover);
                break;
            case 'B':
                moveBackward(rover);
                break;
        }
    } //console.log(`Rover final postion is (${rover.travelLog[orders.length]},${rover.travelLog[orders.length]})`);
    console.log(`Rover\`s full travel history is:`);
    console.log(rover.travelLog);
}

//User's Command
command(theRover,'RFRF');