import { Lightning, Router, Utils } from '@lightningjs/sdk'
import { colors } from '../utils/mycolors'
export class MovieCard extends Lightning.Component {
  pageTransition(){
    return "left"
  }
  _handleEnter(){
    // console.log(this.movie)
    Router.navigate(`movies/${this.movie.id}`,this.movie)
  }
  static _template() {
    return {
      rect: true,
      x:10,
      y:10,
      src: this.bindProp('image'),
      margin:10,
      w: 500,
      h: 400,
      flexItem:{margin:10,},
      shader:{type:Lightning.shaders.RoundedRectangle,radius:[15, 15, 15, 0]},
      Title: {
        x: 24,
        y: 310,
        // mountY:1,
        text: {
          text: this.bindProp('title'),
          wordWrap: true,
          wordWrapWidth: 500,
          maxLines: 1,
          textColor: colors.red,
          padding: 20,
        },
       
      },
      Description:{
        rect:true,
        w:500,
        h:300,
        y:250,
        alpha:0,
        shader:{
          type:Lightning.shaders.RoundedRectangle,radius:8
        },
        text:{
          text:this.bindProp('description'),
          textColor: colors.white,
          wordWrap:true,
          wordWrapWidth:450,
          maxLines:3
          
        }
      }
    }
  }

  _focus() {
  
    this.patch({
          shader:{type:Lightning.shaders.RoundedRectangle,radius:50},
          Description:{alpha:1}
    })
  }
  _unfocus() {
    this.patch({
          shader:{type:Lightning.shaders.RoundedRectangle,radius:[15, 15, 15, 0]},
          Description:{alpha:0}
    })
  }
}
