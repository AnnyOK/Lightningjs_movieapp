import axios from "axios"

export const getMovies = async(url)=>{
const result = await axios.get(url)
return result
}
//
//
//
// const movies =data.results.map(movie=>{
//     return class movieCard extends this{
//       static _template(){
//        return {

//         rect: true,
//             w: 400,
//             h: 300,
//             mount: 0.5,
//             color: colors.yellow,
//             padding: 10,
//             // Box:{
    
//             Title: {
//               text: {
//                 text: movie.title,
//                 textColor: colors.red,
//                 padding: 20,
//               },
//               // },
//               Description: {
//                 text: {
//                   text: movie.overview,
//                   fontSize: 14,
//                 },
//               },
//             },
//             _focus(){
//               this.patch({
//                 Title:{text:{textColor:colors.blue}}
//               })
//             }
//           }
//         // })
  