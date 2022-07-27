'use strict'; //Деректива, мы пишем на стандарте ES6

/*
$(function(){
    function abc(){
            $('div').css({
                'color': 'red',
                'font-size': '30px',
                'font-weight': 'bold'
            });
    }
    
    $('button').on('click', function(){
        abc();
    });

    $('textarea').on('blur', function(){
        abc();
    });
});
//mouseover типа hover
//mouseout срабатывает когда убераешь мышь

//click быр рет басканда
//dblclick екы рет басканда

//keyup work with textarea when end clicking button in keyboard
//keydown when start clicking button in keyboard

//focus 
//blur anti-focus
*/

/*
$(function(){
    function abc(){
            $('div').css({
                'color': 'red',
                'font-size': '30px',
                'font-weight': 'bold'
            });
    }
    
    $('textarea').on('keydown', function(event){
        if(event.which < 96 || event.which > 105){
            return false;
        };
    });//you can type only number 
});
*/


//object
/*
var a = {
    name: "Aibek",
    surename: "Abdrakhman",
    age: 18,
    Is_Marride: false
};

// console.log(a.name);
// console.log(a["age"]);

// var arr = [56, 6 , 5 , 7];
// let i = 0;
// console.log(arr[i+1]);
*/


//confirm()
/*
let answer = confirm("Are you gay?");
if(!answer){
    console.log("Yeah it's cool");
}
else{
    console.log("Лох");
}
*/


//prompt()
/*
let answer = prompt("Are you gay?", "No");
console.log(answer);
*/




/*
Git — мощная и сложная распределенная система контроля версий. 
    Понимание всех возможностей git открывает для разработчика новые горизонты в управлении исходным кодом. 
*/



let a = +prompt("Ваш бюджет на месяц?");
console.log(a);
let b = prompt("Введите дату в формате YYYY-MM-DD");
console.log(b);

let c = +prompt("Введите обязательную статью расходов в этом месяце");
console.log(c);
let d = +prompt("Во сколько обойдется?");
console.log(d);

var expenses = {
    exp: c / d
}

var appData = {
    budget: a,
    timeData: b,
    expenses: expenses.exp,
    optionalExpenses: "",
    income: "",
    savings: false
}

alert(appData.budget / 30);