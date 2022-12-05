// 1304. Find N Unique Integers Sum up to Zero

const sumZero = (n: number): number[] => {
  const result: number[] = n % 2 === 0 ? [] : [0]

  for (let i = 1; i <= n / 2; i++) result.push(i, -i)

  return result
}

console.log(sumZero(5)) // [0, 1, -1, 2, -2]
console.log(sumZero(3)) // [0, 1, -1]
console.log(sumZero(1)) // [0]
console.log(sumZero(8)) //[1, -1, 2, -2, 3, -3, 4, -4]
