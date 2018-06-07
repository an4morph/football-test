/* eslint-disable */

export const createCounter = (from, to) => {
  const counter = []
  for (let i = from; i <= to; i += 1) {
    counter.push(i)
  }
  return counter
}
