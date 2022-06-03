//task1
/*let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;*/
let user = {};
user.name = 'Yusif';
user.lastname = 'Huseynov';
user.age = 24;
console.log(user);
Object.prototype.Delete = function (name) {
    let result = [];
    Object.entries(user).forEach(element => {
        element[0];
        element[1];
        if (element[1] !== name) {
            result.push(element)
        }
    });
    return result;
}
console.log(Delete(user.name));


console.log('---------------------------------------------------------------')


//task2
/*let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false*/

let objectempty = {};
let objectused = [3, 45, 53, 22, 95];
console.log(objectused);
function isempty(anyobject) {
    for (let i = 0; i < anyobject.length; i++) {
        return false;
    }
    return true;
}
console.log(isempty(objectused));
console.log(isempty(objectempty));


console.log('---------------------------------------------------------------')


//task3
/* let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum.
 Should be 390 in the example above.*/

let salaries = {
    john: 100,
    ann: 160,
    pete: 130,
}
function getAllSalaries(anyfile) {
    let finish = [];
    Object.entries(anyfile).forEach(element => {
        element[0];
        element[1];
        finish.push(element[1])
    })
    let result = 0;
    for (let i = 0; i < finish.length; i++) {
        result += finish[i];
    }
    return result;
}
console.log(getAllSalaries(salaries));


console.log('---------------------------------------------------------------')


//task4
/*// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
}; */
let menu = {
    width: 200,
    height: 300,
    title: "my menu"
}
function multiplyNumeric(object) {
    let x = JSON.stringify(object);
    Object.entries(x).forEach(element => {
        element[0];
        element[1];
        if (element[1] === Number) {
            element[1] = element[1] * 2
        }
        x.push(element);
    })

    return x;
}
console.log(multiplyNumeric(menu));















