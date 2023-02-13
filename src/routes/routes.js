// import { Router,Utils } from "@lightningjs/sdk";
import { Boot } from "../pages/Boot";
import { Home } from "../pages/Home";
import { MovieDetails } from "../pages/MovieDetails";
import { Movies } from "../pages/Movies";
// import { MovieCard } from "../widgets/movieCard";
export default {
    root:"$",
    routes:[
        {
        path:"$",
        component: Boot,
        // widget:['Menu']
    },
    {
        path:"home",
        component: Home,
        widgets:['Menu']
    },
    {
        path:"movies",
        component:Movies,
        widgets:['Menu']
    },
    {
        path:"movies/:id",
        component:MovieDetails,
        widgets:['Menu']
    },
    ],
    beforeEachRoute(from,to){
        return new Promise(resolve=>{
            let loggedin =true
if(to._hash ==="about" && loggedin){
    resolve(from)
}else{
    resolve(true)
}

        })

    },
    afterEachRoute(from){
        console.log("this is where "+ from)
    }
}