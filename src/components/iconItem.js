import { Lightning, Utils } from "@lightningjs/sdk";
import { colors } from "../utils/mycolors";
export class Iconitem extends Lightning.Component{
    static _template(){
        return {
            rect:true,
            w:10,
            h:10,
            src:Utils.asset("images/ikenga.jpeg")
        }
    }
}
export class NameCard extends Lightning.Component{
    static _template(){
        return {
            rect:true,
            w:10,
            h:10,
            color:colors.yellow,
            text:{
                text:this.bindProp('title')
            }
        }
    }
}