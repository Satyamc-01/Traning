n = 5
var a = ""
n = 5
for (i = -n - 1; i <= n + 1; i++) {
    for (j = -n - 1; j <= n + 1; j++) {
        if (j == -n - 1 || j == n + 1) {
            a += "|"

        } else if (i == 0 && j == 0) {
            a += "x"
        }
        else if (i == -n - 1 || i == n + 1) {
            a += "="
        } else if (j == 0) {
            a += "0"
        } else if (i == 0) {
            a += "o"
        } else if (i == j) {
            a += "\\"
        } else if (i + j == 0) {
            a += "/"
        } else if (Math.abs(i) - Math.abs(j) >= 0) {
            if (i < 0 && j < 0) {
                a += Math.abs(j)
            } else if (i > 0 && j > 0) {
                a += j
            } else {
                a += String.fromCharCode(Math.abs(i) - Math.abs(j) + 97)
            }
        
        } else if (j > 0 && i < 0 || i > 0 && j < 0) {
            a += (n - Math.abs(j) + 1)
        }


        else {
            a += String.fromCharCode(n-Math.abs(j)+98)
        }
    } a += "\n"
} console.log(a);

