// Write a program to draw a pattern given below from 0-100.
// E.g. if n==5


var n = 5;
var a = "";
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        a += "*";
    }
    a = a + "\n";
}
console.log(a);
