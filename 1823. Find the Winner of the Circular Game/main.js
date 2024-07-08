/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let friends = Array(n).fill(0).map((_, i) => i + 1);
    // console.log(friends);
    let start = 0;
    while (friends.length > 1) {
        for (i = k; i > 1; i--) {
            if (start === friends.length - 1) {
                start = 0;
            } else {
                start++;
            }
        }
        friends.splice(start, 1);
        if (start === friends.length) {
            start = 0;
        }
        // console.log(friends);
    }
    return friends[0];
};

// console.log(findTheWinner(5, 2));