
//                                            task 1
let a = 'test'

if (a === 'test') {
    console.log('verno')
}  else {
    console.log('neverno')
}



//                                            task 2
let number
data = false;
data === true ? number = 2 : number = 3;
console.log(number)



//                                                                       task 3
let store = prompt('Когда вы собираетесь пойти в магазин?')
switch (store) {
    case  '23' :
    case  '00' :
    case  '1' :
    case  '2' :
    case  '3' :
    case  '4' :
    case  '5' :
    case  '6' :
    case  '7' :
    case  '8' :
        console.log('В это время мы не работаем.')
        break
    case '9' :
    case '10' :
    case '11' :
        console.log('Мы будем рады вас видеть!')
        break
    case '12' :
        console.log('У нас обед.')
        break
    case '13' :
    case '14' :
    case '15' :
    case '16' :
    case '17' :
    case '18' :
    case '19' :
    case '20' :
    case '21' :
    case '22' :
        console.log('Мы будем рады вас видеть!')
}
//



// //                                 task 4
let n
let m = 60

if (m > 50) {
    n = 'big'
}  else {
    n = 'small'
}
console.log(n)



// //                                                              task 5
let A = 5
A === 2 ? A = A + 7 : A === 0 ? A = A + 7 : A = A / 10
console.log(A)



//                                                      task 6
let age = confirm('Есть ли вам 18?')

if (age === true) {
    console.log('Есть')
}  else {
    console.log('Нет')
}


//                                   task 7
let e = 3
let b = 5

if (e <= 1, b >= 3) {
    console.log(e + b)
}  else {
    console.log(e - b)
}

//                               task 8
//                          НЕ ПОНЯЛ УСЛОВИЯ





//                                                     task 10
let time
if (time >= 0, time <= 15) {
    console.log('Время относится к четверти часа')
}  else if (time > 15, time <= 30) {
    console.log('Время относится к половине часа')
}  else if (time > 30, time <= 45) {
    console.log('Время относится к 3/4 часа')
}  else if (time > 45, time <= 60) {
    console.log('Время относится к целому часу')
}  else {
    console.log('Не известный диапазон')
}
