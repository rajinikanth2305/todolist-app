//setup constructor to take name and age
//getDescription -Name is 26 years old 





class Person
{
 constructor(name="Anonymonous",age=0)
 {
    this.name=name;
    this.age=age;
 }
 getGreeting()
 {
     //return "hii i am"+" "+this.name;
     return `hii ${this.name}`
 } 
 getDescription()
 {
     return `${this.name} is ${this.age} year(s) old`
 }  

}
class Student extends Person
{
    constructor(name,age,major)
    {
        super(name,age);
        this.major=major
    }
    hasMajor()
    {
        return !!this.major
    }
    getDecsription()
    {
        let description=super.getDescription();
        if(this.hasMajor())
        {
            description+=` Their major is ${this.major}`;
        }
        
        return description;
    }

}
//travleer ->person
//override getGreeting
//Hii i am andrew meid ,I am vsiitng from hyderabad
//hii i am andrew maid
class Traveller extends Person
{
    constructor(name,age,homeLocation)
    {
        super(name,age);
        this.homeLocation=homeLocation;
    }
    getGreeting()
    {
        let greeting=super.getGreeting();
        if(!!this.homeLocation)
        {
            greeting+=`i am visiting from ${this.homeLocation}`
        }
        return greeting;


    }
}
const me=new Traveller("Rajinikanth reddy",26,'hyderabad');
console.log(me.getGreeting());
//console.log(me.getDecsription());
const other=new Student();
console.log(other.getGreeting());