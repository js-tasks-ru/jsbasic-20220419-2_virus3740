let calculator = {
  read: function(num1, num2){
    this.num1 = num1;
    this.num2 = num2;
  },
  sum: function(){
    let sum = this.num1 + this.num2;
    return sum;
  },
  mul: function(){
    let sum = this.num1 * this.num2;
    return sum;
  },
};
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
