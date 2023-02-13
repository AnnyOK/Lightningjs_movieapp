import { Lightning, Router, Utils } from '@lightningjs/sdk'
import { colors } from '../utils/mycolors'
export  class Boot extends Lightning.Component {
  static _template() {
    // console.log(colors)
    return {
      // rect:true,
      // w:1920,
      // h:1080,
      // zIndex:1,
      // color: 0xffc70039,
      Background: {
        rect: true,
        h: 1280,
        w: 1920,
        color: 0xc700ff39, //colors.blue
      },
      Title: {
        x: 760,
        y:540,
        mount: 0,
        text: {
          text: `Welcome`,
          fontSize: 164,
          fontWeight:"Bold",
          // textColor: colors.black,
        },
      },
      Text: {
        x:960,
        y: 1000,
        w:600,
        h:300,
        mount: 0.5,
        text:{
          text: '[click enter to continue]',
          fontSize:50,
          textColor:colors.red
        }
      },
    }
  }
  // _init() {}
  _handleEnter() {
    Router.navigate('home')
  }
}
