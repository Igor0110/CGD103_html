//hw6
document.write("HW6 : ");

var num = 50;
var oddSum = 0;
var evenSum = 0;


for (i = 0; i <= num; i++){
    if (i%2==0){
        evenSum+=i;
    }else{
        oddSum+=i;
    };
    total = oddSum + evenSum;
}
document.write(" evenSum : ", evenSum , " oddSum : ", oddSum , " Total : ", total, "<br>");

//hw7
document.write("HW7 : ","<br>");

var sum = 0;
for (i=1; i<= 10; i++){
    draw = Math.floor(Math.random()*11)*100;
    document.write(draw,"<br>");
    sum += draw;
}
document.write("Total : ", sum,"<br>");

//hw8
document.write("HW8 : ",);

var sum = 0;
var i =0;

do {
    draw = Math.floor(Math.random()*11)*100;
    sum += draw;
    i++;
} while(draw !== 0 && i <=10)   //兩個條件都要達成才能繼續
document.write("Draw : ", i , "Total : ", sum, "<br>");

//hw9
document.write("HW9 : <br>");

for (i = 1; i<=6;i++){
    for (j = 1; j<=i; j++){
        document.write("*");
    }
    document.write("<br>");
}

//hw10
document.write("HW10 : <br>");
var n = 6;
for (i = 1; i<=n;i++){
    for (j = 1; j<=i; j++){
        document.write("*");
    }
    document.write("<br>");
}
for (i = 1; i <= n; n-- ){
    for (j = 2; j<=n; j++){
        document.write("*");
    }
    document.write("<br>");
}

//hw11
document.write("HW11 : <br>");

for (i = 1; i<=6;i++){
    for (j = 1; j<=i; j++){
        document.write(j);
    }
    document.write("<br>");
}

//hw12
document.write("HW12 : <br>");

var sum = 0;
for(i = 1;i<=10;i++){
    sum+=i;
    for(j=1; j<=i;j++){
        document.write(j);
        if(i!=1 ){
            document.write("+");
        }
    }
    document.write("=", sum,"<br>");
}

//hw 13
document.write("HW13 : <br>");

var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49];
    rng = [];
    i = 0;
    n = 0;

while (n<6) {
    i = Math.floor(Math.random() * (nums.length));
    rng.push(nums.splice(i,1));
    n++
}
document.write(rng); 