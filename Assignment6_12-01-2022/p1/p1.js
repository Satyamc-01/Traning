var a = "";
var n = 5;
for (i = 0; i <= n * n + 1; i++) {
    for (j = -n; j <= n; j++) {
        if (i == 0 && j == 0) {
            a += "0"

        }
          else if ((i + j) == 0 || ((i + j) == n && j <= -n + 2)) {
            a += "/"
        } else if ((i - j) == 0 || ((i - j) == n && j >= n - 2)) {
            a += "\\"

        } else if (i - Math.abs(j) >= n - 2 && i <= n || i - Math.abs(j) >= n && i <= 2 * n) {
            a += "-"

        }else if (i > 2 * n && i <= n + n + n && (j == n - 2 || j == -n + 2)) {
            a += "|"
        }else if ((i == n * n + 1 || i >= 2 * n + 1 && j == 0)) {
            a += "="

        }
        else {
            a += " "
        }
    } a += "\n"
} console.log(a);