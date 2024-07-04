function spiralOrder(matrix: number[][]): number[] {
  const elementsOrder: number[] = []
  while (matrix.length > 0 && matrix[0][0] !== undefined) {
    // @ts-expect-error
    elementsOrder.push(...matrix.shift())
    matrix.forEach((row) => elementsOrder.push(row.pop()))
    matrix.reverse().map((row) => row.reverse())
  }
  return elementsOrder
}

spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
])
