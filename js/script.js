let first_number = ''; // used basically for first number in mathematical operation
let char = ''; // used to keep mathemaical operator like '-, +, /, *, %, √'
let second_number = ''; // used to keep second number in mathematical operation
const screen = document.getElementById('screen')

function Number(number) { // function used set number for first_number and second_number
    if (['+', '-', '/', '*', '%', 'x'].includes(char)) {
        second_number += number
        screen.textContent = second_number
    } else {
        first_number += number
        screen.textContent = first_number
    }
}

function Char(chosen_char) {  // function used to set char like '-, +, /, *, %, √'
    char = chosen_char
    if (char == '√') {
        count()
    }
}

function count() { // function used to count answer
    switch (char) {
        case '-': // case for subtract
            first_number = parseFloat(first_number)
            second_number = parseFloat(second_number)
            screen.textContent = first_number - second_number
            first_number = ''
            second_number = ''
            char = ''
            break;
        case '+': // case for adding
            first_number = parseFloat(first_number)
            second_number = parseFloat(second_number)
            screen.textContent = first_number + second_number
            first_number = ''
            second_number = ''
            char = ''
            break;
        case '/': // case for division
            first_number = parseFloat(first_number)
            second_number = parseFloat(second_number)
            screen.textContent = first_number / second_number
            first_number = ''
            second_number = ''
            char = ''
            break;
        case 'x': // case for multiplication
            first_number = parseFloat(first_number)
            second_number = parseFloat(second_number)
            screen.textContent = first_number * second_number
            first_number = ''
            second_number = ''
            char = ''
            break;
        case '%': // case for percentage of a number from a number
            first_number = parseFloat(first_number)
            second_number = parseFloat(second_number)
            screen.textContent = (first_number / second_number) * 100 + '%'
            first_number = ''
            second_number = ''
            char = ''
            break;
        case '√': // case for square root
            first_number = parseFloat(first_number)
            screen.textContent = Math.sqrt(first_number)
            first_number = ''
            second_number = ''
            char = ''
            break
        default:
            break;
    }
}

function Cclear() { // function for clear one variable
    if (['+', '-', '/', '*', '%', 'x'].includes(char)) {
        second_number = ''
        screen.textContent = second_number
    } else {
        first_number =  ''
        screen.textContent = first_number
    }
}

function CEclear() { // function for clear all variables
    first_number = ''
    second_number = ''
    char = ''
    screen.textContent = 0
}

function appendDot() { // function for adding '.'
    if (['+', '-', '/', '*', '%', 'x'].includes(char)) {
        if (!second_number.includes('.')) {
            if (second_number === "") {
                second_number = "0."; 
            } else {
                second_number += '.';
            }
        }
        screen.textContent = second_number
    } else {
        if (!first_number.includes('.')) {
            if (first_number === "") {
                first_number = "0."; 
            } else {
                first_number += '.';
            }
        }
        screen.textContent = first_number
    }
}
