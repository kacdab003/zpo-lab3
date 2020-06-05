const { uuid } = require('uuidv4');
const testNumbers = [2,5,7,5,7,9,6,5,4,3,2,-1,-5,-7,-5,-10]
const minimalNumber = Math.min(...testNumbers);
console.log("Minimum z podanych liczb: ",minimalNumber);
const evenNumbers = testNumbers.filter((num)=>num%2===0);
console.log("Tylko liczby parzyste",evenNumbers);
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
const personOne = new Person("Osoba AZ",22)
const personTwo = new Person("Osoba B",26)
const personThree = new Person("Osoba AC",42)
const arrayOfPersons = [personTwo,personOne,personThree]
const sortPeopleByName = (p1,p2) =>{
    if(p1.name > p2.name) return 1
    if(p1.name < p2.name) return -1
    if(p1.name === p2.name) return 0 
}
const sortPeopleByAge = (p1,p2) =>{
    if(p1.name > p2.age) return 1
    if(p1.age < p2.age) return -1
    if(p1.age === p2.age) return 0 
}
const sortedByAge = arrayOfPersons.sort(sortPeopleByAge)
const sortedByNick = arrayOfPersons.sort(sortPeopleByName);
console.log("Posortowani po wieku: ", sortedByAge);
console.log("Posortowani po nicku: ", sortedByNick);
class TwoDimensionsPoint{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
class ThreeDimensionsPoint{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    mapPointToTwoDimensions=()=>new TwoDimensionsPoint(this.x,this.y);
}
const threeDimensionsPointsList = [new ThreeDimensionsPoint(6,3,2),new ThreeDimensionsPoint(6,2,3),new ThreeDimensionsPoint(11,5,5)];
const twoDimensionsPointsMapped = threeDimensionsPointsList.map(p=>p.mapPointToTwoDimensions());
console.log("Trzywymiarowe punkty",threeDimensionsPointsList);
console.log("Mapowane dwuwymiarowe punkty",twoDimensionsPointsMapped);

const eagles = [new Person("eagle1",Math.random()*100),new Person("eagle2",Math.random()*100),new Person("eagle3",Math.random()*100)];
const bikers = [new Person("biker1",Math.random()*100),new Person("biker2",Math.random()*100),new Person("biker3",Math.random()*100)];
const allNames = [...eagles,...bikers].map(el=>el.name);
console.log("Imiona wszystkich grup:", allNames);

const sum = testNumbers.reduce((prev,curr)=>curr+=prev,0);
console.log("Reduce - suma", sum);
const multiplicationResult = testNumbers.reduce((prev,curr)=>curr*=prev,1);
console.log("Reduce - iloczyn", multiplicationResult);



const createUUID = ()=>{
    const uuids=[]
    for(let i =0;i<1000000;i++){
        uuids.push(uuid());
    }
    return uuids;
}
const createUuidAsync = async()=>{
    const uuids=[]
    for(let i =0;i<500000;i++){
        uuids.push(uuid());
    }
    return Promise.resolve();
}

console.time("for loop no Promises")
createUUID();
console.log('createdUUID');
console.timeEnd("for loop no Promises");








