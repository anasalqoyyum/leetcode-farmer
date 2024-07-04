package mincostladder_test

import (
	"testing"

	mincostladder "leetcode-farmer/746-min-cost-ladder"

	"github.com/stretchr/testify/assert"
)

func TestMinCostLadder(t *testing.T) {
	assert.Equal(t, mincostladder.MinCostClimbingStairs([]int{10, 15, 20}), 15)
}
