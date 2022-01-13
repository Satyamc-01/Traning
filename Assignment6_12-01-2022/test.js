var a = "";
var n = 6;

for (i = 0; i < 1; i++) {
    for (j = -n; j <= n; j++) {
        if (i == 0 && j == 0) {
            a += "0"

        } else {
            a += " "
        }
    } a += "\n"
}
for (k = 0; k <= n - 2; k++) {
    for (i = 1; i <= n; i++) {
        for (j = -n; j < n + 1; j++) {
            if ((i + j) == 0) {
                a += "/"

            } else if ((i - Math.abs(j) >= 1 && i <= n)) {
                a += Math.abs(j)
            }

            else if ((i - Math.abs(j)) == 0) {
                a += "\\"

            } else {
                a += " "
            }
        } a += "\n"
    }
}

for (i = 0; i <= n; i++) {
    for (j = -n; j <= n; j++) {
        if (Math.abs(j) == 1 && i < n) {
            a += "|"
        } else if ((i == n) || Math.abs(j) == 0) {
            a += "="
        }
        else {
            a += " "
        }
    } a += "\n"
} console.log(a);