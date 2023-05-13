// 56. Merge Intervals

const merge = (intervals: number[][]): number[][] => {
  return intervals.sort((a, b) => a[0] - b[0]).reduce(
    (result, current, index) => {
      if (index === 0) return [current]

      const last = result[result.length - 1]

      if (current[0] <= last[1]) last[1] = Math.max(last[1], current[1])
      else result.push(current)

      return result
    },
    new Array<number[]>(),
  )
}

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])) // [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]

console.log(merge([[1, 4], [4, 5]])) // [ [ 1, 5 ] ]

console.log(merge([[1, 4], [2, 3]])) // [ [ 1, 4 ] ]
