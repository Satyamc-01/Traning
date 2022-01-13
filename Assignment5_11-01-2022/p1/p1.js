var n = 10;
var a = "";
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        if (i == j || i + j == n-1) {
            a += "#"
        } else {
            a += "*"
        }
    }
    a += '\n'
}
console.log(a)