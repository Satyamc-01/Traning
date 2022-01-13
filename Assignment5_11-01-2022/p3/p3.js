var n = 9; var a = ""
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        if (i == j) {            
            if (i == ((n-1)/2) && j == ((n-1)/2)) {
                a += "o"
            }
            else {
                a += "\\"
            }
        }
        else if (i + j == n-1) {
            a += "/";

        }
        else if ((i == 0 || i == n-1) && j < n-1 && j > 0) {
            a += "-"
        }
        else if ((j == 0 || j == n-1) && i < n-1 && i > 0) {
            a += "|"
        }
        else {
            a += " "
        }
    }
    a += '\n'
}
console.log(a)