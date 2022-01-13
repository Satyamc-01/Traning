

var n = 4;


var a = "";


for (i = 0; i <= n; i++) {
    for (j = 0; j <= i; j++) {
        a += '*';
    }
    a+='\n';
}
console.log(a);
