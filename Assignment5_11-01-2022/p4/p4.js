// P4:- Write a program to draw a pattern given below from 0-9.  (max 2 loop allowed) [Don't Reveal this one pre handed]
// E.g. if n==5 

// 0 0 0 0 0 0 0 0 0 0 0 0 0    -6
// 0 a b c d e f 5 4 3 2 1 0    -5
// 0   a b c d e 4 3 2 1   0    -4
// 0     a b c d 3 2 1     0    -3
// 0       a b c 2 1       0    -2
// 0         a b 1         0    -1
// 0           a           0     0
// 0         1 b a         0     1
// 0       1 2 c b a       0     2
// 0     1 2 3 d c b a     0     3
// 0   1 2 3 4 e d c b a   0     4
// 0 1 2 3 4 5 f e d c b a 0     5
// 0 0 0 0 0 0 0 0 0 0 0 0 0     6

//-6-5-4-3-2-1 0 1 2 3 4 5 6

var n = 5; var a = ""
aArray = ["a", "b", "c", "d", "e", "f"]

for (i = -n - 1; i <= n + 1; i++) {
    for (j = -n - 1; j <= n + 1; j++) {
        if (i == n + 1 || j == (n + 1) || i == (-n - 1) || j == (-n - 1)) {
            a += "0"

        } else if (Math.abs(i) - Math.abs(j) >= 0) {

            if (i < 0 && j > 0 || i > 0 && j < 0) {
                a += ( Math.abs(i) - Math.abs(j) ) + 1
            } else {
                a += aArray[ (Math.abs(i) - Math.abs(j)) ]
                // a += String.fromCharCode(Math.abs(i) - Math.abs(j) + 97) 
            }
        }
        else {
            a += " "
        }
    } a += "\n"
} console.log(a);


