// EXERCISE NESTED LOOP

// PROGRAM 1
// for(var i = 1; i <= 100; i = i+10){
//     for(var j = i; j < i+10; j++){
//         document.write(j + " ")
//     }
//     document.write('<br/>')
// }

// PROGRAM 2
// for(var i = 1; i <= 5; i++){
//         for(var j = 1; j <= i; j++){
//             document.write(j );
//         }
//         document.write("<br/>")
// }

// PROGRAM 3
// for(var i = 5; i >= 1; i--){
//     for(var j = 1; j <= i; j++){
//         document.write(i )
//     }
//     document.write("<br/>")
// }

// PROGRAM 4
for(var i = 1; i <= 9; i=i+1){
    for(var j = 1; j >= i; j++){
        document.write(j + " *")
    }
}



