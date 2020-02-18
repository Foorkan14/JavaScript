// let regex = new RegExp("digital crafts");
// let regex2 = /digitalcrafts/;
// //to use these u need a string of text to be able to search thru//

// let someString = "sdlfnsngafm;sdm digital crafts aekfnkaenfk.anf/NAFE.K EFN.Egn.sng" ;


// let result = regex.test(someString);
// console.log(result);


//example two

// let pattern = /Furqan/;
// let someString = "dfjbkabsfjdsfb Furqan ealfnleknf.nef"

// let result = pattern.test(someString);
// console.log(result);



//to make case insensitive outside of the / put a i

//Match
// let pattern = /Furqan/ig; //i makes it immune to case sensitive and g makes the word global so it'll look globally for all occurances of it
// let someString = "dfjbkabsfjdsfb Furqan ealfnleknf.nef"
// someString.match(pattern)
// let result = someString.match(pattern)
// console.log(result);

//pipe operator allows u to search for multiple things at once

// let pattern = /batman | tina fey/ig;
// let str = "batman is really cool, but not as cool as tina fey";
// let result = str.match(pattern);
// console.log(result);


// grouping with parenthesis

// let phonePattern = /\d\d\d\-\d\d\d-\d\d\d\d/g;
// let someString = "sdskmgsg.sg.s g. 832-713-1800 sgn.sa/g .sgr.m  sgrknsrng.s.g 281-213-0000";
// let result = someString.match(phonePattern);
// console.log(result);

//if i want to retrieve within the list of things given to me i wanna retrieve my area code

// let phonePattern = /(\d\d\d)\-\d\d\d-\d\d\d\d/; //just add parenthesis to group  the first 3 numbers also known as the area code in a phone number, if i also wanted the last four numbers i can just put parenthesis around them just as i put parenthesis around the first three numbers//
// let someString = "sdskmgsg.sg.s g. 832-713-1800 sgn.sa/g .sgr.m  sgrknsrng.s.g 281-213-0000";
// let result = someString.match(phonePattern);
// console.log(result);

/// searching for multiple combinations of a word so bat can woman attached with it or mobile or man etc. 

// let pattern = /Bat(man|woman|mobile|copter|bat)/i;
// let str = "batwoman is so cool"
// let result = str.match(pattern);
// console.log(result);

//optional patterns how to code phone number so it cn be accepted regardless of how user inputs it

// let pattern = /\d\d\d(-)?(.)?\d\d\d(-)?(.)?\d\d\d\d/g
// let str = "this is a phone number : 3333333333";
// let result = str.match(pattern);
// console.log(result);

//* Matching Zero or More with the Star basically to match one or more occurances of a word
// let pattern = /bat(wo)*man/ig; //basically return however many occurances of a wo there is as long as it is preceded by bat and ends with man there 

// let str = "batwoman batman batwowowowowowowowoman"
// let result = str.match(pattern);
// console.log(result);


//