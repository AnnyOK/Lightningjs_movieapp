/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Lightning, Router, Utils } from '@lightningjs/sdk'
import { default as routes } from './routes/routes'
import { Menu } from './widgets/Menu'

export default class App extends Router.App {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }
  _setup() {
    Router.startRouter(routes, this)
  }
  static _template() {
    console.log("loaded successfully",super._template())
    return {
      ...super._template(),
        Widgets:{
          Menu:{
            type:Menu
          }
      }
    }
  }

}
