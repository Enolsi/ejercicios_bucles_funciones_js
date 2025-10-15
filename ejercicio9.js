const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
]

function findOldestXMen(xMen) {
  let oldest = xMen[0] // Empezamos con el primero como el más antiguo

  for (const member of xMen) {
    if (member.year < oldest.year) {
      oldest = member // Actualizamos si encontramos uno más antiguo
    }
  }

  return oldest
}

const oldestMember = findOldestXMen(xMen)
console.log(
  'El miembro más antiguo de los X-Men es:',
  oldestMember.name,
  '(',
  oldestMember.year,
  ')'
)
