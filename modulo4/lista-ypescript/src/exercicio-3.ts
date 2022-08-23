// Exercício 3

// Você foi contratado por um serviço de streaming para organizar o sistema 
// de catálogos de filmes. Cada filme possui 3 informações essenciais: 1. nome 
// do filme; 2. ano de lançamento e 3. gênero do filme. Os gêneros da plataforma 
// se limitam aqueles encontrados no seguinte `ENUM` de gêneros:

enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

// Além dessas informações presentes em todos os filmes, alguns deles possuem 
// uma informação opcional: 4. pontuação em site de resenha (ex. Metacritic, 
// RotenTomatoes).

// Considerando todas estas informações, crie uma função que receba todas essas 
// informações como parâmetros( 3 essenciais + 1 opcional) e retorne todas 
// informações organizadas em um `type`

const films = (name: string, year: number, genre: GENERO, punctuation?: number): object => {
    if (punctuation) {
        type film = {
            nameFilm: string,
            yearFilm: number,
            genreFilm: string,
            punctuationFilm: number
        }
        const film1: film = {
            nameFilm: name,
            yearFilm: year,
            genreFilm: genre,
            punctuationFilm: punctuation
        }
        return film1
    } else {
        type film = {
            nameFilm: string,
            yearFilm: number,
            genreFilm: string
        }
        const film1: film = {
            nameFilm: name,
            yearFilm: year,
            genreFilm: genre,
        }
        return film1
    }
}
console.log(films('300', 2004, GENERO.ACAO, 290))