import { Lightning, Router } from '@lightningjs/sdk'
import { colors } from '../utils/mycolors'
import { MenuItem } from './MenuItem'
export class Menu extends Lightning.Component {
  static _template() {
    return {
      x: -500,//1200,
      transitions: {
        x: {
          duration: 0.5,
          timingFunction: 'cubic-bezier(0.47,1.45,.41,.8)',
        },
      },
      Background: {
        rect:true,
        w: 500,
        h: 1280,
        x: 0,
        mount: 0,
        color: 0xff5733ff,
        // color: 0xffffffff,
      },
      MenuItems: {
        x: 150,
        y: 540,
        padding: 100,
        mountY: 0.5,
        flex: {
          direction: 'column',
        },
        Item1: {
          type: MenuItem,
          pageName: 'home',
        },
        Item2: {
          type: MenuItem,
          pageName: 'movie',
        },
      },
    }
  }
  _init() {
    this.index = 0
  }
  _handleLeft() {
  }
  _handleUp(){
    console.log(this.index)
    if(this.index>0){
      this.index --
      // this.patch({MenuItems:{Item1:{textColor:colors.Ox}}})
    }
  }
  _handleDown(){
    console.log(this.index)

    if(this.index< this.tag("MenuItems").children.length-1){
      this.index ++
    }
  }
  _handleRight() {
    Router.focusPage()

  }
  _handleEnter() {
    Router.focusPage()

  }
  // _unfocus() {}
  // _focus() {}
  getActiveItem() {
    return this.tag("MenuItems").children[this.index];
  }
  _getFocused() {
    return this.getActiveItem()
  }

    _focus() {
        this.patch({
            smooth: {
                x: 0
            }
        });
    }

    _unfocus() {
        this.patch({
            smooth: {
                x: -500
            }
        });
    }
}
