let object={
    name:"raj",
    age:"22",
    courses:["html","css","react","js"],
    run:function(){
        console.log("speed runner");
    },
    hobbies:{
        cricket:"player",
        shuttle:"pro"
    }
}
console.log(object['age']);
object["class"]="MCA";
console.log(object['class']);
console.log(object['courses']);
console.log(object.run);
console.log(object.hobbies);
