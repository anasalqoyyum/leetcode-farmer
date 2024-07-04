function maxRepeating(sequence: string, word: string): number {
  let res = 0
  let test = word
  while (true) {
    if (sequence.includes(test)) {
      test += word
      res++
      continue
    }
    break
  }
  return res
}

maxRepeating('ababc', 'ab')
