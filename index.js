// const point = [1,2,3,4,5,6,7,8,9,10];
// point.reverse();
// console.log(point);
// //const school=[Dept1=[sectionA=[{ name : "lemma", id : 01}]sectionB=],{ name : "tolosa", id : 02}],sectionB=[{ name : "abebe", id : 03}]]
// //const school=[Dept1=[sectionA=[{ name : "lemma", id : 01}],sectionB=[{ name : "tolosa", id : 02}],sectionC=[{ name : "abebe", id : 03}]],
// //Dept2=[sectionA=[{ name : "lemma", id : 01}],sectionB=[{ name : "tolosa", id : 02}],sectionC=[{ name : "abebe", id : 03}]]]
// //console.log(school)
// var school =[];

// function register (name){

//     school.push(name);

// }

// function remove (name){
//     school.pop(name);
// }



// console.log("before ::", school);


// register("abebe");
// register("tolosa");
//  remove("abebe");
// console.log("after ::", school);

function human(name){
    function sayHi(){
        console.log(`hi I am ${name}`)
    }
    function sayHowYouFeel(){
        console.log(`${name} is feeling good`)
    }
    sayHi()
    sayHowYouFeel()
}
human('sina')

// synchronize
let pizza
function orderPizza(){
    console.log('order pizza')
    pizza='pizza'
    console.log('pizza was ordered')
}
orderPizza()
console.log(`Eat ${pizza}`)

//asychronize
let Pizza
function orderPizza(){
    console.log('order pizza')
    Pizza='pizza'
    console.log('pizza was ordered')
}
orderPizza()
console.log(`Eat ${Pizza}`)
  setTimeout( () =>{ //an example of asynchronize 
    Pizza='pizza'
    console.log(`${Pizza} is ready`)
  },2000)
  console.log('pizza was ordered')
orderPizza()
console.log('Call Qoli')
console.log(`Eat ${Pizza}`)  

//callback
function orderPizza1(callback){
    setTimeout( () =>{
        const pizza1 =''
        callback()
    },2000)
}
function pizzaReady(pizza1){
    console.log(`Eat ${pizza1}`)
}
orderPizza1(pizzaReady)
console.log.log('Call Qoli')

