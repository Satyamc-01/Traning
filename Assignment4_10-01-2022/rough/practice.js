// var n = 4;


// var a = "";


// for (i = 0; i <= n; i++) {
//     for (j = 0; j <= n; j++) {
//         if (i > 1&&j==0) {
            
//             a += i + 1;
//         } 
//         else {           
//             a += "_";
//         }

//     }
//     a += '\n';
// }
// console.log(a);

var n = 3;
var count = 0;
var num="";
var w = n - 1;

for (i = 0; i < n; i++) {
    for (j = 0; j <  n; j++) {
        if ((i + j) >= w && (j - i) <= w) {
            if (j <= w) {
                count++;
                num += count;
            }
            else {
                count--;
                num += count;
            }
        }
        else {
            num += " "
            count = 0;
        }


    }
    console.log(num);
    num = "";
}
