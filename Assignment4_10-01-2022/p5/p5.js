var n = 5;


var a = "";


for (i = 0; i <= n; i++) {
    for (j = 0; j <= n; j++) {
        if (i + j > n) {
            a += "*";
        } else {
            a += " ";
        }
    }
    a += '\n';
}
console.log(a);
