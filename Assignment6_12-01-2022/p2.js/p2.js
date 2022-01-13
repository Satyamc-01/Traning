var a = ""
n = 5
for (i = -n - 1; i <= n + 1; i++) {
    for (j = -n - 1; j <= n + 1; j++) {
        if (j == -n - 1 || j == n + 1 || (i == 0 && j == 0)) {
            a += "o"

        } else if (i == -n - 1 || i == n + 1) {
            a += "0"

        } else if ((Math.abs(i) - Math.abs(j) >= 0)&&(i > 0 && j > 0 || i < 0 && j < 0)) {
            a+=Math.abs(j)
        } else if ((Math.abs(i) - Math.abs(j) <= 0)&&((i > 0 && j < 0) || (i < 0 && j > 0)) ){
            a+=(n-Math.abs(j))+1
        }           
        else {
            a += " "
        }
    } a += "\n"
} console.log(a);


