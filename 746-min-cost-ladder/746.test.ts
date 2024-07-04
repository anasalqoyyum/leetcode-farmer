import { describe, expect, test } from 'vitest'
import { minCostClimbingStairs } from './746'

describe('minCostClimbingStairs', () => {
  test('example valid cases', () => {
    expect(minCostClimbingStairs([10, 15, 20])).toBe(15)
    expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6)
  })
})
