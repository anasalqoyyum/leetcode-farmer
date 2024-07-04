package main

import (
	"fmt"
	"strings"
)

func main() {
	maxRepeating("ababc", "ab")
}

func maxRepeating(sequence string, word string) int {
	res := 0
	wordToTest := word

	for {
		if strings.Contains(sequence, wordToTest) {
			res++
			wordToTest += word
			continue
		}
		break
	}

	fmt.Println(res)
	return res
}
