// arguments object no loner bound with arrow functions
//this keyword is no longer bound with arrow functions
const add=(a,b)=>
{
    //console.log(arguments);
    return a+b;

}
console.log(add(5,6,1000));
const user={
    name:"rajinikanth",
    cities:["hyderabd","New york","dublin"],
    printPlaceslived()
    {
       const cityMessages= this.cities.map((city)=>
       {
           return city+"names";
       })
        //console.log(this.name);
        //console.log(this.cities);
        this.cities.forEach((element)=>
        {
            console.log(this.name+'has lived in'+ " "+element)
        })
        console.log(cityMessages);
    }
}
user.printPlaceslived();
//challange area
//challange done using arrow functions like map and forEach
//session was good and getting points

const multiplier={
    numbers:[1,2,3],
    singleNumber:4,
    multiply:function()
    {
        return this.numbers.map((element)=>this.singleNumber*element
        )
    }
}
console.log(multiplier.multiply());