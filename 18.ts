const fourSum = (numbers: number[], target: number): number[][] => {
  const results: number[][] = []
  const uniqueCombinations = new Set()

  if (numbers.length < 4) return results

  let [idx1, idx2, idx3, idx4] = [0, 1, 2, numbers.length - 1]

  numbers.sort((a, b) => a - b)

  while (idx1 < idx2) {
    while (idx2 < idx3) {
      while (idx3 < idx4) {
        while (idx4 > idx3) {
          const combination = [
            numbers[idx1],
            numbers[idx2],
            numbers[idx3],
            numbers[idx4],
          ]
          if (!uniqueCombinations.has(combination.join(','))) {
            uniqueCombinations.add(combination.join(','))
            const sum = combination.reduce((a, c) => a + c, 0)
            if (sum <= target) {
              if (sum === target) {
                results.push(combination)
              }
              break
            }
          }
          idx4--
        }
        idx4 = numbers.length - 1
        idx3++
      }
      idx2++
      idx3 = idx4 - idx2 > 1 ? idx2 + 1 : idx3
    }
    idx1++
    idx2 = idx3 - idx1 > 1 ? idx1 + 1 : idx2
    idx3 = idx4 - idx2 > 1 ? idx2 + 1 : idx3
  }
  return results
}
console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
console.log(fourSum([2, 2, 2, 2, 2], 8))
console.log(
  fourSum(
    [
      -500, -499, -486, -474, -470, -462, -426, -426, -411, -409, -366, -361,
      -359, -355, -350, -349, -303, -297, -255, -238, -222, -215, -203, -201,
      -198, -193, -193, -187, -179, -156, -150, -139, -99, -93, -87, -58, -54,
      -8, -2, 1, 5, 6, 8, 9, 15, 31, 37, 48, 50, 95, 128, 181, 201, 206, 235,
      244, 251, 272, 285, 287, 289, 305, 308, 338, 357, 367, 386, 391, 392, 395,
      395, 402, 410, 449, 458, 466, 478, 485, 488,
    ],
    -2701,
  ),
)
