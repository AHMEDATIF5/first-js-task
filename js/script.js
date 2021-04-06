// program 1
function myFunction()
{
    var x = document.getElementById("input1").value ;

    document.getElementById("print").innerHTML = x;
}
// program 2 

function divide()
{
    var z = Number(document.getElementById("input2").value) ;

    if( (z % 3) == 0  && (z % 4) == 0 )
    {
        document.getElementById("print1").innerHTML = true;
    }
    else
    {
        document.getElementById("print1").innerHTML = false;
    }
}
// program 3
function Bigger()
{
    var a = Number(document.getElementById("input3").value) ,
        b = Number(document.getElementById("input4").value);
    
    if( a > b )
    {
        document.getElementById("print2").innerHTML = a;
    }
    else{
        document.getElementById("print2").innerHTML = b;
    }
}

// program 4 
function negative()
{
    var user =  Number(document.getElementById("input5").value) ;

        if( user > 0 )
        {
            document.getElementById("print3").innerHTML = "Positive";
        }
        else
        {
            document.getElementById("print3").innerHTML = "Negative";
        }
}

// program 5 

function max()
{
    var c =  Number(document.getElementById("input6").value) ;
        d =  Number(document.getElementById("input7").value) ;
        e =  Number(document.getElementById("input8").value) ;

        if ( c > d && c > e) 
        {
            document.getElementById("print4").innerHTML = c ;
        }
        else if ( d > c && d > e)
        {
            document.getElementById("print4").innerHTML = d;
        }
        else if ( e > c && e > d)
        {
            document.getElementById("print4").innerHTML = e;
        }else
        {
            document.getElementById("print4").innerHTML = "equal";
        }

        if ( c < d && c < e) 
        {
            document.getElementById("print5").innerHTML = c ;
        }
        else if ( d < c && d < e)
        {
            document.getElementById("print5").innerHTML = d;
        }
        else if ( e < c && e < d)
        {
            document.getElementById("print5").innerHTML = e;
        }
}

// program 6 / 7

function even()
{
    var f =  Number(document.getElementById("input9").value) ;

        if( (f % 2) == 0 )
        {
            document.getElementById("print6").innerHTML = "even";
        }
        else
        {
            document.getElementById("print6").innerHTML = "odd";
        }
}

// program 8

function vowel()
{
    var g = document.getElementById("input10").value ;

        if( g == "a" || g == "e" || g == "i" || g == "o" || g == "u" )
        {
            document.getElementById("print7").innerHTML = "vowel";
        }
        else
        {
            document.getElementById("print7").innerHTML = "Consonant";
        }
}

// program  9 

function between() {

    var h =  Number(document.getElementById("input11").value) ;

    for (let i = 1; i <= h; i++) {
        
        document.getElementById("print8").innerHTML += i + "/";
        
    }
    
}

// program  10 

function  multiplication() {

    var k =  Number(document.getElementById("input12").value) ;

    for (let i = k; i <= (k * 12); i= i + k) {
        
        document.getElementById("print9").innerHTML += i + "-" ;
        
    }
    
}

// program  11

function  allEven() {

    var m =  Number(document.getElementById("input13").value) ;

    for (let i = 1; i <= m ; i= i + 1) {
        
        if ((i % 2) == 0) {

            document.getElementById("print10").innerHTML += i + "-"
            
        } 
        
    }
    
}

// program  12 a

function  power() {

    var n =  Number(document.getElementById("input14").value) ,
        o = Number(document.getElementById("input15").value) ,
        result = 1;

            for (let i = 1; i <= o; i++) {
                
                result *= n;

                document.getElementById("print11").innerHTML = result
            }
}

// program  12 b

function  Total() {

    var A =  Number(document.getElementById("input16").value) ,
        B = Number(document.getElementById("input17").value) ,
        C = Number(document.getElementById("input18").value) ,
        D = Number(document.getElementById("input19").value) ,
        E = Number(document.getElementById("input20").value) ,

        myArray = [A , B , C , D , E],
        
        result = 0;

            for (let i = 0; i < myArray.length; i++) {
                
                    result += myArray[i]

                document.getElementById("print12").innerHTML = result
            }
}

function  Average() {

    var A =  Number(document.getElementById("input16").value) ,
        B = Number(document.getElementById("input17").value) ,
        C = Number(document.getElementById("input18").value) ,
        D = Number(document.getElementById("input19").value) ,
        E = Number(document.getElementById("input20").value) ,

        myArray = [A , B , C , D , E],
        
        result = 0;

            for (let i = 0; i < myArray.length; i++) {
                
                    result += myArray[i]
            }

            average = result/myArray.length;

            document.getElementById("print12").innerHTML = average
}

function  Percentage() {

    var A =  Number(document.getElementById("input16").value) ,
        B = Number(document.getElementById("input17").value) ,
        C = Number(document.getElementById("input18").value) ,
        D = Number(document.getElementById("input19").value) ,
        E = Number(document.getElementById("input20").value) ,

        myArray = [A , B , C , D , E],
        
        result = 0;

            for (let i = 0; i < myArray.length; i++) {
                
                    result += myArray[i]
            }

            percentage  = (result/500)*100;

            document.getElementById("print12").innerHTML = percentage 
}

// program 13 

function  month() {

    var x =  Number(document.getElementById("input21").value) ;

    if (x == 1 || x == 3 || x == 5 || x == 7 || x == 8 || x == 10 || x == 12) {
        
        document.getElementById("print13").innerHTML = "31 days"
    }
    else if (x == 4 || x == 6 || x == 9 || x == 11) {

        document.getElementById("print13").innerHTML = "30 days"
    }
    else if (x == 2) {

        document.getElementById("print13").innerHTML = "28/29 days"
    }
    else{
        document.getElementById("print13").innerHTML = "please write a number between 1 and 12"
    }
    
}

// program 14 
function  grade() {

    var A =  Number(document.getElementById("input22").value) ,
        B = Number(document.getElementById("input23").value) ,
        C = Number(document.getElementById("input24").value) ,
        D = Number(document.getElementById("input25").value) ,
        E = Number(document.getElementById("input26").value) ,

        myArray = [A , B , C , D , E],
        
        result = 0;

            for (let i = 0; i < myArray.length; i++) {
                
                    result += myArray[i]

                    percentage  = (result/500)*100;
            }
            document.getElementById("print14").innerHTML = percentage + "%";

            if (percentage >= 90) {
                
                document.getElementById("print14").innerHTML = "Grade A"
            }
            else if (percentage >= 80) {
                document.getElementById("print14").innerHTML = "Grade B"
            }
            else if (percentage >= 70 ) {
                
                document.getElementById("print14").innerHTML = "Grade C"
            }
            else if (percentage >= 60) {
                
                document.getElementById("print14").innerHTML = "Grade D"
            }
            else if (percentage >= 40) {
                
                document.getElementById("print14").innerHTML = "Grade E"
            }
            else
            {
                document.getElementById("print14").innerHTML = "Grade F (fantastic)"
            }

}

// program 15 



function calc() {

    const operator = prompt('Enter operator ( either +, -, * or / ): ');

const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;


        if (operator == '+') {
            result = number1 + number2;
        }
        else if (operator == '-') {
            result = number1 - number2;
        }
        else if (operator == '*') {
            result = number1 * number2;
        }
        else {
            result = number1 / number2;
        }
    
        document.getElementById("print15").innerHTML = `${number1} ${operator} ${number2} = ${result}`
}

