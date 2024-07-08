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
        start = (start + k - 1) % friends.length;
        friends.splice(start, 1);
        // console.log(friends);
    }
    return friends[0];
};

// console.log(findTheWinner(6, 5));