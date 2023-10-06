/**
 * String
 */
// What is string
// String is datatype
// written between --> double quotes("" )
// single quotes --> ('')
// backticks- (template literals) (``)
//  /string/i, /string/g

// const str1 =
//   "Very Short Stories with Morals
//    in English are the
//     best ways to teach moral education for kids and adults. You can teach short stories with moral values in a very short time.In this story page, very short stories in English with moral are given with pictures and PDFs to download. ";

/**
 * length : to find the length of string
 * str[4] : to check the element or character
 * str.at(4) : to check the element or character
 * str.charAt(4) : to check the element or character
 * str.toUpperCase() : to convert string to capitals
 * str.toLowerCase() : to convert string to small letters
 * String() : to change any datatype to string
 * str.toString() : to change any datatype to string
 * str.replace('toReplace', 'with') : to replace any value, It will replace only first finding
 * str.replaceAll('toReplace', 'with') : it will replace all findings
 * String.fromCharCode() : to convert the ASCII code
 * String.fromCodePoint() : to convert the ASCII code
 * str.concat(str1) :: to concat two or more strings
 * `${str} ${str2}` :: to concat two or more strings
 * str + " " +str2 :: to concat two or more strings
 * str.includes()  :: check if string is available or not
 * str.search()  :: check if string is available or not and return the index value
 * str.split()  :: to make array from string
 * str.reverse()  :: to reverse array of string (array prototype)
 * str.join()  :: to join array of string (array prototype)
 * str.repeat(2) :: is used to repeat any string as per given number
 * str.indexOf('') :: is used to get the index value of any string character
 * str.lastIndexOf('') :: is used to get the index value from the end of any string character
 * str.startsWith('') :: is used to check the characters are in starting or not
 * str.endsWith('') :: is used to check the characters are in ending or not
 * str.trim() :: is used to remove extra spaces from start and end of string.
 * str.trimStart() :: is used to remove extra spaces from start of string.
 * str.trimEnd() :: is used to remove extra spaces from  end of string.
 * str.padStart(length++ , '*') :: add extra characters at starting when string length got exceed
 * str.padEnd(length++ , '*') :: add extra characters at end when string length got exceed
 * str.slice(2) :: use to cut/slice string and return the string after the given index
 * str.slice(2, 6) :: use to cut/slice string and return the string in between the given index
 * str.subString(2) :: use to cut/slice string and return the string after the given index
 * str.subString(2, 6) :: use to cut/slice string and return the string in between the given index
 
 */
const str = `Very Short Stories 
with Morals in English are the best ways to teach moral education for kids and adults. You can teach short stories with moral values in a very short time.
In this story page, very short stories in English with moral are given with pictures and PDFs to download in English.          `;

console.log("1--- length", str.length);

let str1 = "I have an Iphone";

console.log(`2--- at`, str[56]);
console.log(`3--- at`, str.at(56));
console.log(`4--- at`, str.charAt(56));

console.log(`5--> uppercase`, str.toUpperCase());
console.log(`6--> lowercase`, str.toLowerCase());

const num = 78454187485;
console.log(
  "7--- typeof ",
  typeof num,
  typeof "vinay",
  typeof true,
  typeof null,
  typeof undefined,
  typeof [4, 5.65, 7],
  typeof { name: "vinay", class: "45" },
  typeof Date()
);
let str2 = String(num);
let str3 = String(true);
console.log("8----", num, str2, typeof str2);
console.log("9----", str3, typeof str3);

let str4 = num.toString();
let str5 = true.toString();
console.log("10----", num, str4, typeof str4);
console.log("11----", str5, typeof str5);

console.log("12---> replace", str.replaceAll("English", "Math"));

let str6 = "very short stories in English with moral are given with pictures";
console.log(`13----replaceAll`, str6.replaceAll("e", "$").replaceAll("a", "%"));

console.log("14--- split()", str6.split(""));
console.log("15--- split()", str6.split(" "));
console.log("16--- split()", str6.split("i"));
console.log("17--- fromCharCode", String.fromCharCode(50));
console.log("18--- fromCodePoint", String.fromCodePoint(86, 105, 110, 97, 121));

function findASCIICode() {
  let enteredVal = prompt("Please enter a ASCII Code");

  if (isNaN(enteredVal)) {
    return console.log("Please enter a valid ASCII code from 0-127");
  }

  if (enteredVal >= 0 && enteredVal <= 127) {
    if (enteredVal >= 65 && enteredVal <= 90) {
      return console.log(
        `You have entered ${enteredVal} which is cap letter -- ${String.fromCharCode(
          enteredVal
        )}`
      );
    } else if (enteredVal >= 97 && enteredVal <= 122) {
      return console.log(
        `You have entered ${enteredVal} which is small letter---- ${String.fromCharCode(
          enteredVal
        )}`
      );
    } else if (enteredVal >= 48 && enteredVal <= 57) {
      return console.log(
        `You have entered ${enteredVal} which is a digit -- ${String.fromCharCode(
          enteredVal
        )}`
      );
    } else if (
      (enteredVal >= 0 && enteredVal <= 47) || // condition -1
      (enteredVal >= 58 && enteredVal <= 64) || // condition -2
      (enteredVal >= 91 && enteredVal <= 96) || // condition -3
      (enteredVal >= 123 && enteredVal <= 127) // condition -1
    ) {
      return console.log(
        `You have entered ${enteredVal} which is a special character -- ${String.fromCharCode(
          enteredVal
        )}`
      );
    } else {
      console.log("Please enter a valid number");
    }
  } else {
    console.log(
      `You have entered ${enteredVal}, please enter a number between 0-127`
    );
  }
}
// findASCIICode();

// string concat
const str7 = "javaScript";
const str8 = "Python";
const str9 = 555;

console.log("19--", str7 + " " + str8 + str9);
console.log("20---", str7.concat(str8).concat(str9));
console.log("21---", `${str7} ${str8} ${str9} So here it is`);

let str10 = "very short stories in English with moral are given with pictures";
console.log("22 --->includes--", str10.includes("short"));
console.log("23 --->includes--", str10.includes("Short"));
console.log("24 --->includes--", str10.includes("Math"));
console.log("25 --->includes--", str10.includes("a"));
console.log("26 --->includes--", str10.includes("morala"));

console.log("27 --->search--", str10.search("ery"));

console.log("28 ---> split <---", str10.split(""));

const splittedStr = str10.split(" ");
// console.log("29 ---> splittedStr <---", splittedStr);

const revString = splittedStr.reverse();
console.log("29.1 ---> reverse <---", revString);
console.log("29.2 ---> join <---", revString.join(" "));

// console.log("30 ---> split <---", str10.split("a"));

// 1. split
// 2. reverse
// 3. join

let name;
name = "Vinay Maurya"; // ayruaM yaniV  // Maurya Vinay
let num1 = 567891; // 198765

name = String(name).split("");
name = name.reverse();
name = name.join("");

console.log(" 30-=-->", name);

let str11 = " Remote";
console.log("31----> repeat() <--", str11.repeat(15));
console.log(`i said give me${str11.repeat(3)}`);

const str12 =
  "pictures with given are moral with English in stories with short very";
console.log("32 ---> indexOf--", str12.indexOf("with"));
console.log("33 ---> lastIndexOf--", str12.lastIndexOf("with"));

const str13 = "My name is Johny!";
console.log("34---> startsWith < ==", str13.startsWith("My name"));
console.log("35---> endsWith < ==", str13.endsWith("sunny!"));
console.log("36---> endsWith < ==", str13.endsWith("Johny!"));
console.log("37---> endsWith < ==", str13.endsWith("!"));

const str14 = "   My name is Johny!      ";
console.log(`38---->`, str14.trim());

const str15 = "         My name is Sunny !            ";
console.log(`39---->`, str15.trimStart());

const str16 = "         My name is Sunny !            ";
console.log(`39---->`, str16.trimEnd());

const str17 = "The burning desires!!"; // XXXXThe burning desires!! // 21
const strPadding = str17.padStart(str17.length + 1, "*");
console.log(`40---->`, strPadding);

const str18 = "The burning desires!!"; // The burning desires!! // 21
const strPaddingEnd = str18.padEnd(str18.length + 5, "*");
console.log(`41---->`, strPaddingEnd);

const str19 = "The burning desires!!";
const slicedStr = str19.slice(6, 12);
console.log("42----> sliced---", slicedStr);

const str20 = "The burning desires!!";
let subStr20 = str20.substring(6);
console.log("43----> substring---", str20.at(15), subStr20);

subStr20 = str20.substring(6, 15);
console.log("44----> substring---", subStr20);
