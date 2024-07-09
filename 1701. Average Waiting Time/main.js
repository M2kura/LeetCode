/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    // first we count the time waited
    // for every customer and store them in array 
    let start_time = customers[0][0];
    let waiting_time = 0;
    let i = 0;
    for (const [arrival, time] of customers) {
        if (start_time < arrival) {
            start_time = arrival;
        }
        start_time += time;
        waiting_time += start_time - arrival;
    }
    return waiting_time / customers.length;
};

// const f = averageWaitingTime([[1,2],[2,5],[4,3]]);
// console.log(f());