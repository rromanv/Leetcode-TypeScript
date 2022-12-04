// 1404. Number of Steps to Reduce a Number in Binary Representation to One

const numSteps = (s: string): number => {
  let decimal = 0n

  while (s.length > 1) {
    const current = Number(s.at(0))
    s = s.slice(1)
    if (current > 0) decimal += BigInt(Math.pow(2, s.length) * current)
  }

  if (s === '1') decimal++

  let steps = 0

  while (decimal > 1n) {
    decimal = decimal % 2n === 0n ? decimal / 2n : decimal + 1n

    steps++
  }

  return steps
}

console.log(numSteps('1101')) // 6
