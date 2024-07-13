function fightRobots(stack, robots) {
    for (robot of robots) {
        if (robot[2] === 'R' || stack.length === 0 || stack[stack.length - 1][2] === 'L') {
            stack.push(robot);
            continue;
        }

        if (robot[2] === "L") {
            let add = true;
            while (stack.length > 0 && stack[stack.length - 1][2] === 'R' && add) {
                let last_health = stack[stack.length - 1][1];
                if (last_health < robot[1]) {
                    stack.pop();
                    robot[1]--;
                } else if (last_health === robot[1]) {
                    stack.pop();
                    add = false;
                } else {
                    stack[stack.length - 1][1]--;
                    add = false;
                }
            }

            if (add) {
                stack.push(robot);
            }
        }
    }
}

var survivedRobotsHealths = function(positions, healths, directions) {
    let stack = [], robots = [], result = [];
    for (let i = 0; i < healths.length; i++) {
        robots.push([positions[i], healths[i], directions[i], i]);
    }
    robots.sort((a, b) => a[0] - b[0]);
    fightRobots(stack, robots);
    stack.sort((a, b) => a[3] - b[3]);
    for (let robot of stack) {
        result.push(robot[1]);
    }
    return result;
};