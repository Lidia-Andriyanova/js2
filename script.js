// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
function task1() {
    
    const num1 = Number(prompt('Введите первое число'))
    const num2 = Number(prompt('Введите второе число'))

    if (num1 <= 1) {
        console.log(`Первое число ${num1} не больше 1`);
    } else {
        console.log(`Первое число ${num1} больше 1`);
    }

    if (num2 >= 3) {
        console.log(`Второе число ${num2} не меньше 3`);
    } else {
        console.log(`Второе число ${num2} меньше 3`);
    }    
}

// Задание 2
// Перепишите код к тернарному оператору
function task2() {

    let test = true;
    console.log(test === true ? '+++' : '---');
}

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. 
// Определите вкакую декаду месяца попадает это число (в первую, вторую или третью).
function task3() {
    
    const dayMonth = Number(prompt('Введите день месяца (от 1 до 31)'))
    
    switch (true) {
        case (dayMonth >= 1 && dayMonth <= 10):
            console.log(`День месяца ${dayMonth} в первой декаде`);
            break;
        case (dayMonth >= 11 && dayMonth <= 20):
            console.log(`День месяца ${dayMonth} во второй декаде`);
            break;
        case (dayMonth >= 30 && dayMonth <= 31):
            console.log(`День месяца ${dayMonth} в третьей декаде`);
            break;
        default:
            console.log(`Число ${dayMonth} не день месяца`);
      }
}

// Задание 4
// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.
function task4() {
    
    const userAnswer = Number(prompt('Введите число'))   
    let num = userAnswer;

    let mod1 = num % 10;

    num = (num - mod1) / 10;
    let mod10 = num % 10;

    let mod100 = (num - mod10) / 10;

    console.log(`Число ${userAnswer}:
    сотен ${mod100}
    десятков ${mod10}
    единиц ${mod1}`);
}