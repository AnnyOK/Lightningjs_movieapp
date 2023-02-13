import { Lightning,Router,Utils } from '@lightningjs/sdk'
import { colors } from '../utils/mycolors'

export class Home extends Lightning.Component {
  static _template() {
    return {
      // rect:true,
      // w:1920,
      // h:1080,
      // color: colors.red,
      Background: {
        rect: true,
        w: 1920,
        h: 1280,
        src: Utils.asset('images/rose.jpeg'),
        color: colors.white,
      },
      Title: {
        x: 960,
        y: 100,
        // w:1800,
        // h:200,
        mount:0.5,
        // rotation:Math.PI*.76,
        text: {
          text: 'Welcome to my tv',
          fontSize: 64,
          textColor: colors.Ox,
        },
      },
      Logo:{
        x:960,
        y: 640,
        w:800,
        h:1080,
        mount:0,
        // src: Utils.asset('images/rose.jpeg'),
        // rotation:Math.PI*.76,
      },
      NavIndicator: {
        rect:true,
        w:500,
        mount:0,
        x: 150,
        y: 800,
        flex: {
          direction: 'row',
          justifyContent: 'space-around',
          alignContent: 'center',
          // padding:20
        },
        text: {
          text: 'Movies',
          mount:1,
          fontSize: 45,
          textColor: colors.red,
        },
        Icon: {
          w:100,
          h:100,
          mount: 0,
          src: Utils.asset('images/chevron.png'),
        },
      },
    }
  }
  // _init(){
  //   this.index=0
  // }
  _handleLeft(){
    Router.focusWidget('Menu')
    console.log(this._hash)
  }
  _handleRight(){
    console.log(this.index)

    Router.navigate("movies")

    
  }
}
