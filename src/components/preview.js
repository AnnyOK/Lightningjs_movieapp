import { Lightning, Utils } from '@lightningjs/sdk'
import { colors } from '../utils/mycolors'
import { Iconitem,NameCard } from './iconItem'
export class Preview extends Lightning.Component {
  static _template() {
    return {
    //   rect: true,
    x:100,
    // mount:0.5,
      w: 800,
      h: 800,
    //   src: this.bindProp('src'),
    //   color: 0xff000000,
      flex: {
        direction: 'column',
        justifyContent: 'center',
      },
      Name: {
        // rect: true,
        // x: 400,
        h: 200,
        w: 800,
        flex: {
          direction: 'row',
          justifyContent: 'space-around',
        },
        Icon: {
          type: Iconitem,
        //   src: this.bindProp('src'),
        },
        Name: {
          type: NameCard,
          title: this.bindProp('title'),
        },
      },
      Label: {
        text: {
          text: this.bindProp('label'),
          textColor: colors.red,
          fontSize: 120,
          FontFace: 'Bold',
        },
      },
      Button: {
        // rect:true,
        w: 200,
        h: 100,
        flex: {
          direction: 'row',
          justifyContent: 'space-around',
        },
        Play: {
        //   rect: true,
          w: 150,
          h: 100,
          mount:0.5,
          shader: { type: Lightning.shaders.RoundedRectangle, radius: 15 },
          flex:{direction:"row",justifyContent:"space-around"},
          icon: {
            w: 40,
            h: 1000,
            shader: { type: Lightning.shaders.RoundedRectangle, radius: 50% },
            src: Utils.asset('images/play.png'),
          },
          text: {
            w:100,
            fontSize:50,
            textColor:colors.yellow,
            text: 'play',
          },
        },
        Plus: {
          rect: true,
          w: 40,
          h: 40,
          src: Utils.asset('images/plus.svg'),
        },
        Hot: {
          rect: true,
          w: 40,
          h: 40,
          src: Utils.asset('images/hot.jpeg'),
        },
      },
    }
  }
}
