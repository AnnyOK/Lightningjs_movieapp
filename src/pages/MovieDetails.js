import { Lightning, Utils } from "@lightningjs/sdk";
import { colors } from "../utils/mycolors";
import { Preview } from "../components/preview";
export class MovieDetails extends Lightning.Component{
    static _template(){
        return {
            rect:true,
            w:window.innerWidth,
            h:window.innerHeight,
            color:colors.yellow,
            src:Utils.asset('images/background.png'),
            Title:{
                text:{
                    text:"Helo",
                    textColor:colors.white,
                    fontSize:100,
                    FontFace:"Bold"
                }
            },
            Preview:{
                type:Preview,
                args:{},
                title:"series"
                //title here describes the class of movies i.e trending, series, latest,e.t.c
            }


        }
    }
    set params(args){
        console.log("this is args:",args)
        this.tag("Title").text.text =args?.name||args?.title
        this.src =  "https://image.tmdb.org/t/p/w500"+args?.poster_path
        this.tag("Preview").args=args
console.log(this.color, "this is poster_path:",args.poster_path)
    }
    _focus(){
        console.log('hello from details')
    }
}