import { Lightning, Router } from '@lightningjs/sdk'
import { colors } from '../utils/mycolors'
import { getMovies } from '../utils/fetch'
import { MovieCard } from '../widgets/movieCard'
export class Movies extends Lightning.Component {
  static _template() {
    return {
      rect:true,
      x:10,
      y:10,
      w:1920,
      h:1080,
      Wrapper: {
        rect: true,
        color: colors.yellow,
        w: window.innerWidth,
        h: window.innerHeight,
        flex: {
          direction: 'row',
          justifyContent: 'space-evenly',
          padding: 10,
          margin: 10,
          wrap: true,
        },
      },
    }
  }
  async _init() {
    this.index = 0
    const url='https://api.themoviedb.org/3/trending/all/day?api_key=de0899aa16afe6194686261edae40a52'
    const { data } = await getMovies(
      url
    )
    // console.log('expected data', data.results)
    const movies = data.results.map((movie) => {
      // console.log(movie)
      const ImgUrl ='https://image.tmdb.org/t/p/w500'+movie.poster_path
      return {
        movie:movie,
        image:ImgUrl,
          type: MovieCard,
          title: movie.original_title||movie.name,
          description:movie.overview
      }
    })
    this.dataLength = movies.length
    console.log(this.dataLength)
    this.tag('Wrapper').children = movies
  }

  static _states() {
    return [
      class Wrapper extends this {
        _handleUp() {
          if (this.index - 4 < 0) {
            this.index = 0
          } else {
            this.index -= 4
          }
        }

        _handleDown() {
          if (this.index + 4 > this.moviesCount - 1) {
            this.index = this.moviesCount - 1
          } else {
            this.index += 4
          }
        }

        _handleRight() {
          if (this.index + 1 > this.moviesCount - 1) {
            this.index = 0
          } else {
            this.index += 1
          }
        }

        _handleLeft() {
          if (this.index - 1 < 0) {
            this.index = 0
          } else {
            this.index -= 1
          }
        }

        _getFocused() {
          // console.log( "this wrapper child",this.tag('Wrapper').children[this.index]._getHash())
          return this.tag('Wrapper').children[this.index]
          // return this.tag('Container').children[this.index]

        }
      },
    ]
  }

  _handleEnter() {
  
    this._setState('Wrapper')
  }

  _handleBack() {
    Router.navigate('home')
  }
}
