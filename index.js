// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
name=name.toUpperCase();
console.log(name);

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
function titleCase(str) {
  str = str.toLowerCase().split(" ").map(function(val) { return val.replace(/( |^)[a-z]/g, function(L) {return L.toUpperCase();}); }).join(" ");
  return str;
}
;
console.log(titleCase(sentence));
// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
console.log(money.replace('￥',''));
