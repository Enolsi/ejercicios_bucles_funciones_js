const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
}

function getCapital(country) {
  // Normalizamos el nombre del país (primera letra mayúscula)
  const formattedCountry =
    country.charAt(0).toUpperCase() + country.slice(1).toLowerCase()

  if (capitals[formattedCountry]) {
    return `La capital de ${formattedCountry} es ${capitals[formattedCountry]}.`
  } else {
    return `Lo siento, no tengo información sobre la capital de ${country}.`
  }
}

// Ejemplos de prueba
console.log(getCapital('Spain'))
console.log(getCapital('italy'))
console.log(getCapital('Brazil'))
