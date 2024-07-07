int numWaterBottles(int numBottles, int numExchange) {
    int count = numBottles;
    while (numBottles / numExchange != 0)
    {
        int i = 0;
        while (numBottles % numExchange != 0) {
            numBottles--;
            i++;
        }
        count += numBottles / numExchange;
        numBottles = (numBottles / numExchange) + i;
    }
    return count;
}