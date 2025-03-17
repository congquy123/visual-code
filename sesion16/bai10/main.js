let firstNumber = +prompt("Nhập số thứ nhất: ");
let secondNumber = +prompt("Nhập số thứ hai: ");
let randomNumber = (Math.floor(Math.random()*secondNumber)+firstNumber);
document.writeln("Số random trong khoảng là: "+ randomNumber);