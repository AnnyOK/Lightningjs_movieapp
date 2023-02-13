import { Lightning } from '@lightningjs/sdk'
import { colors } from '../utils/mycolors'

export class MenuItem extends Lightning.Component {
  static _template() {
    return {
      h: 100,
      alpha: 0.5,
      text: {
        text: this.bindProp('pageName'),
        textColor: colors.white,
        fontSize: 50,
      },
      flexItem: {
        padding: 10,
      },
    }
  }

  _focus() {
    this.patch({
      alpha: 1,
      text: {
        fontSize: 60,
      },
    })
  }

  _unfocus() {
    this.patch({
      alpha: 0.5,
      text: {
        fontSize: 56,
      },
    })
  }
}
