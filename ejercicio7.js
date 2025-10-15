const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
]

const songsByGenre = {}

for (const track of tracks) {
  const genre = track.genre

  // Si no existe todavía la clave del género, la creamos como un array vacío
  if (!songsByGenre[genre]) {
    songsByGenre[genre] = []
  }

  // Añadimos la canción al array correspondiente
  songsByGenre[genre].push(track)
}

console.log(songsByGenre)
