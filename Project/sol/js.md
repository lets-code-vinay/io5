1.  If lengths of three sides of a triangle are input through the
    keyboard, write a program to find the area of the triangle.

    const s1 = prompt("Enter side one");
    const s2 = prompt("Enter side two");
    const s3 = prompt("Enter side three");

    //'s' is the semi-perimeter of the triangle given by s = (a + b + c)/2.
    // calculated using the formula A = √s(s-a)(s-b)(s-c),

    const s = (Number(s1) + Number(s2) + Number(s3)) / 2;
    console.log("Semi Perimeter of", Number(s1), Number(s2), Number(s3), "is", s);

    const area = Math.sqrt(s _ (s - s1) _ (s - s2) \* (s - s3));
    console.log("area", area.toFixed(2));

2.  If a five-digit number is input through the keyboard, write a
    program to calculate the sum of its digits.
    **(Hint: Use the modulus operator ‘%’)**

    Sol
    const num = prompt("Enter any 5 digit number");
    // 12345
    let e = Math.trunc(num) % 10; // 5
    let d = Math.trunc(num / 10) % 10; //1234.5 %10 ==
    let c = Math.trunc(num / 100) % 10;
    let b = Math.trunc(num / 1000) % 10;
    let a = Math.trunc(num / 10000) % 10;

    console.log(a, b, c, d, e, "sum ", a + b + c + d + e);

3.  if a five-digit number is input through the keyboard,
    program to reverse the number.
    **(Hint: Use the modulus operator ‘%’)**

    const num = 98745;

    let a = Math.trunc(num / 10000) % 10;
    let b = Math.trunc(num / 1000) % 10;
    let c = Math.trunc(num / 100) % 10;
    let d = Math.trunc(num / 10) % 10;
    let e = num % 10;

    console.log(
    `${e}${d}${c}${b}${a}`,
    "or",
    e x 10000 + d x 1000 + c x 100 + b x 10 + a
    );

4.  If a four-digit number is input through the keyboard, write a program to obtain
    the sum of the first and last digit of this number.

    const num = 98745;

    let a = Math.trunc(num / 1000) % 10;
    let b = Math.trunc(num / 100) % 10;
    let c = Math.trunc(num / 10) % 10;
    let d = num % 10;

    console.log(
    a +d
    );

5.  Consider a currency system in which there are notes of seven denominations, namely,
    Rs. 1, Rs. 2, Rs. 5, Rs. 10, Rs. 50, Rs. 100. Is a sum of Rs. N is entered through the
    keyboard, write a program to compute the smallest number of notes that will combine to
    give Rs. N.

        let num = 98745;

        let n500 = num / 500;
        num = num % 500;
        console.log("n500", Math.trunc(n500), "remain amount", num);

        let n100 = num / 100;
        num = num % 100;
        console.log("n100", Math.trunc(n100), "remain amount", num);

        let n50 = num / 50;
        num = num % 50;
        console.log("n50", Math.trunc(n50), "remain amount", num);

        let n20 = num / 20;
        num = num % 20;
        console.log("n20", Math.trunc(n20), "remain amount", num);

        let n10 = num / 10;
        num = num % 10;
        console.log("n10", Math.trunc(n10), "remain amount", num);

        let n5 = num / 5;
        num = num % 5;
        console.log("n5", Math.trunc(n5), "remain amount", num);

        let n2 = num / 2;
        num = num % 2;
        console.log("n2", Math.trunc(n2), "remain amount", num);

        let n1 = num / 1;
        num = num % 1;
        console.log("n1", Math.trunc(n1), "remain amount", num);

        console.log(`currency of 500 - ${Math.trunc(n500)},

    100 - ${Math.trunc(n100)},
    50 - ${Math.trunc(n50)},
    20 - ${Math.trunc(n20)},
    10 - ${Math.trunc(n10)},
    5 - ${Math.trunc(n5)},
    2 - ${Math.trunc(n2)},
    1 - ${Math.trunc(n1)}`);

6.
