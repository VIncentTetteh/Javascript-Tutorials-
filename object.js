var person = {
    "firstName" : 'Vincent',
    "secondName": 'Tetteh',
    "birthPlace" : {
        "name" : 'Akuse',
        "date" : '23/ 08 / 1994',

    },
    "Parent":{
        "mother":'Janet Akpoka',
        "father":'John Tetteh Kwesi'
    },
    "friends":{
        "friend1":{
            "name":'edem'
        },
        "friend2":{
            "name":'prince setor'
        },
        "friend3":{
            "name":'Joan'
        },
        "friend4":{
            "name":'Alice'
        }
    },
    "schoolsAttendented":{
        "school1":{
            "name": 'Amedeka L/A'
        },
        "school2":{
            "name":'Akuse Roman Catholic '
        },
        "school3":{
            "name":'Akuse Methodist Senior High Technical'
        },
        "school4":{
            "name":'Ho Technical University'
        }
    },
    "birthday": function(){
        setTimeout(() => {
            console.log("Happy birtday Vincent Tetteh");
        }, 2000);
    }
}


//console.log(person);
// 

var personDetails = `My name is ${person.firstName} ${person.secondName}. My mothers name is ${person.Parent.mother}
 and my fathers name is ${person.Parent.father}. i was born at ${person.birthPlace.name}, I have currently graduated 
 from ${person.schoolsAttendented.school4.name} and my birthday is on the ${person.birthPlace.date}, woow ${person.birthday()}`;

console.clear();
//console.log(personDetails)
console.log(typeof(person))
console.log(typeof(personDetails))
 

