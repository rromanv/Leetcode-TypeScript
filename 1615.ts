// 1615. Maximal Network Rank

const maximalNetworkRank = (_n: number, roads: number[][]): number => {
  const cities = new Set(roads.flat().sort((a, b) => a - b))

  type Connection = {
    [key: number]: number[]
  }

  const connections: Connection = {}

  const getConnections = (node: number) => {
    const connections = roads
      .filter((road) => road.includes(node))
      .map(([l, r]) => {
        return l === node ? r : l
      })
    return connections
  }

  for (const city of cities) {
    connections[city] = getConnections(city)
  }

  let result = 0

  // Iterate over all pairs of different cities
  for (const city1 of cities) {
    for (const city2 of cities) {
      if (city1 !== city2) {
        // Find the number of connections for each city
        const connections1 = connections[city1].length
        const connections2 = connections[city2].length

        // Add the number of connections for each city, and subtract 1 if they are directly connected
        let rank = connections1 + connections2
        if (connections[city1].includes(city2)) {
          rank -= 1
        }

        // Update the result if necessary
        result = Math.max(result, rank)
      }
    }
  }
  return result
}

console.log(
  maximalNetworkRank(4, [
    [0, 1],
    [0, 3],
    [1, 2],
    [1, 3],
  ]),
) // 4

console.log(
  maximalNetworkRank(8, [
    [0, 1],
    [0, 3],
    [1, 2],
    [1, 3],
    [2, 3],
    [2, 4],
  ]),
) // 5
