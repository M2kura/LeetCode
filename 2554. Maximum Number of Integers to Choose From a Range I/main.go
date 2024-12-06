package main

import (
	"fmt"
)

func isPresent(slice []int, n int) bool {
	for _, i := range slice {
		if i == n { return true }
	}
	return false
}

func sum(slice []int, n int) int {
	count := 0
	for _, i := range slice {
		count += i
	}
	return count + n
}

func maxCount(banned []int, n int, maxSum int) int {
	chosen := []int{}
	for i := 1; i <= n; i++ {
		if !isPresent(banned, i) {
			if sum(chosen, i) <= maxSum {
				chosen = append(chosen, i)
			} else {
				return len(chosen)
			}
		}
	}
	return len(chosen)
}

func main() {
	fmt.Println(maxCount([]int{1,6,5}, 5, 6))
	fmt.Println(maxCount([]int{1,2,3,4,5,6,7}, 8, 1))
	fmt.Println(maxCount([]int{11}, 7, 50))
}
