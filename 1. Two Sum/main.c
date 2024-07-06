/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    int* solution = (int* )malloc(2 * sizeof(int));
    int i = 0;
    int j = 1;
    while (i < numsSize - 1) {
        while (j < numsSize) {
            if (nums[i] + nums[j] == target) {
                solution[0] = i;
                solution[1] = j;
                *returnSize = 2;
                return solution;
            }
            j++;
        }
        i++;
        j = i + 1;
    }
    free(solution);
    *returnSize = 0;
    return NULL;
}