import { Lightning } from "@lightningjs/sdk";
import { colors } from "../utils/mycolors";
export class MovieDetails extends Lightning.Component{
    static _template(){
        return {
            rect:true,
            w:window.innerWidth,
            h:window.innerHeight,
            color:colors.yellow,
            src:"",
            Title:{
                text:{
                    text:"Helo",
                    textColor:colors.white,
                    fontSize:100,
                    FontFace:"Bold"
                }
            },


        }
    }
    set params(args){
        console.log("this is args:",args)
        this.tag("Title").text.text =args.movie.name
        this.src =  "https://image.tmdb.org/t/p/w500"+args.movie.poster_path
console.log(this.color)
    }
    _focus(){
        console.log('hello from details')
    }
}