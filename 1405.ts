// 1405. Longest Happy String

const longestDiverseString = (a: number, b: number, c: number): string => {
  const result: string[] = []

  const letters = { a, b, c }

  const push = (letter: string, count: number, repeat: number): number => {
    for (let i = 0; i < repeat; i++) {
      result.push(letter)
    }
    return count - repeat
  }

  const twoLettersDone = () => {
    let lettersDone = 0
    if (letters.a === 0) lettersDone++
    if (letters.b === 0) lettersDone++
    if (letters.c === 0) lettersDone++
    return lettersDone === 2
  }

  const getMaxValueKey = (
    obj: { [key: string]: number },
    filterOut?: string,
  ): string => {
    const objKeys = []
    if (filterOut)
      objKeys.push(...Object.keys(obj).filter((k) => k !== filterOut))
    else objKeys.push(...Object.keys(obj))

    return objKeys.reduce((a, b) => (obj[a] > obj[b] ? a : b))
  }

  while (!twoLettersDone()) {
    const biggerLetter = getMaxValueKey(letters)
    if (result[result.length - 1] !== biggerLetter) {
      letters[biggerLetter as keyof typeof letters] = push(
        biggerLetter,
        letters[biggerLetter as keyof typeof letters],
        letters[biggerLetter as keyof typeof letters] > 1 ? 2 : 1,
      )
    } else {
      const otherLetter = getMaxValueKey(letters, biggerLetter)
      letters[otherLetter as keyof typeof letters] = push(
        otherLetter,
        letters[otherLetter as keyof typeof letters],
        1,
      )
    }
  }

  const pendingLetter = getMaxValueKey(letters)

  letters[pendingLetter as keyof typeof letters] = push(
    pendingLetter,
    letters[pendingLetter as keyof typeof letters],
    letters[pendingLetter as keyof typeof letters] > 1 ? 2 : 1,
  )
  if (letters[pendingLetter as keyof typeof letters] > 0) {
    for (let idx = 0; idx < result.length - 1; idx++) {
      if (letters[pendingLetter as keyof typeof letters] === 0) break
      if (result[idx] !== pendingLetter && result[idx + 1] !== pendingLetter) {
        result.splice(idx + 1, 0, pendingLetter)
        letters[pendingLetter as keyof typeof letters]--
        idx += 2
      }
    }
  }

  return result.join('')
}

console.log(longestDiverseString(1, 1, 7)) // ccbccacc
console.log(longestDiverseString(2, 2, 1)) // bbaac
console.log(longestDiverseString(0, 8, 11)) // ccbccbccbbccbbccbbc
