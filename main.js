//const sentence = ["forever", "you", "love", "will","I"];
//function reverseArray(arr) {
   // let array= arr.reverse()
     //   return array
    
//}
//console.log(reverseArray(sentence));




//const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
//function greetAliens(aliens) {
  //  aliens.forEach(element => {
    //    console.log("Oh powerful " +element+", we humans offer our unconditional surrender!")
    //})
//}
//greetAliens(aliens);




// const coolStuff = [
//    "gameboys",
//    "skateboards",
//    "backwards hats",
//     "my room",
//     "temporary tattoos"
//   ];
//  const myStuff = [
//     "sweaters",
//    "skateboards",
//     "family-night",
//     "my room",
//   ];
//  function justCoolStuff(coolStuff, myStuff){
//    coolStuff.forEach((item) =>{
//        myStuff.forEach((element)=>{
//             if (item==element){
//                console.log(item)
//            }
//        })
//     })
//   }
//   justCoolStuff(myStuff, coolStuff);


const meal = [
    { name: "arugula", source: "plant" },
    { name: "tomatoes", source: "plant" },
    { name: "lemon", source: "plant" },
    { name: "olive oil", source: "plant" },
  ];
  const dinner = [
    { name: "hamburger", source: "meat" },
    { name: "cheese", source: "dairy" },
    { name: "ketchup", source: "plant" },
    { name: "bun", source: "plant" }
  ];
   function isTheDinnerVegan(arr) {
    let a = true
    arr.forEach((item) => {
        if (item.source == "meat"){
            a = false
        }
    })
    return a
}
  console.log(isTheDinnerVegan(meal));
  console.log(isTheDinnerVegan(dinner));