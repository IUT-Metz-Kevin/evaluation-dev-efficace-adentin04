import { assertEquals } from "jsr:@std/assert";

function grille(){
      let point = ".";
       let bombe = "*"
    let compterBombe=0;
let ligne1= "*..";
let ligne2= "..*";
let ligne3="**.";       
for(let i of ligne1){


if(i === "*"){
  compterBombe++;

}
}
return compterBombe
}
let testGrille = grille();
Deno.test('Vérifier que il compte correctement les bombes', () => {
  assertEquals(testGrille, 1);
});

// class minesweeper{
//     constructor(){}

//     grille(){
//         for(let i=0; i<3;i++){
//             let point = "."
      
//               console.log(".");
//               if(point === ".")
//               {
//                 console.log(0);
//               }
//         }
//         for(let i=0;i<3;i++)
//     }
    
// }
// let a = new minesweeper()
// a.grille()