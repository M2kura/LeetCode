package main

import (
	"fmt"
)

func strStr(haystack string, needle string) int {
	for i:=0;i<len(haystack);i++ {
		if haystack[i] == needle[0] && len(needle) <= len(haystack) - i {
			for j:=0;j<len(needle);j++ {
				if haystack[i+j] != needle[j] {
					break
				} else {
					if j == len(needle)-1 {
						return i
					}
				}
			}
		}
	}
	return -1
}

func main(){
	fmt.Println(strStr("sadbutsad", "sad"))
	fmt.Println(strStr("leetcode", "leeto"))
}
