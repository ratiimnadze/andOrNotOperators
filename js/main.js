/*
იუთუბის კომენტარები

პროგრამაში რომელიც იუთუბს აკონტროლებს, გვაქვს მოცემული ორი ცვლადი:

let userIsLoggedIn (boolean)
let videoIsCommentable (boolean)

იმისათვის რომ მომხმარებელმა შეძლოს ვიდეოზე დაკომენტარება, საჭიროა ის იყოს ავტორიზებული.
ასევე, საჭიროა რომ ვიდეოს ავტორს ჩართული ქონდეს ვიდეოზე დაკომენტარების ფუნქცია.
გამოიანგარიშეთ შედეგი და ჩაწერეთ userCanComment (boolean) ცვლადში.
*/
let userIsLoggedIn = true;
let videoIsCommentable = true;

let userCanComment = userIsLoggedIn && videoIsCommentable;
console.log(userCanComment);

/*
სოც ქსელი

პროგრამაში რომელიც სოციალურ ქსელს აკონტროლებს, გვაქვს მოცემული 2 ცვლადი:

Let userIsLoggedIn (boolean)
Let userIsBlocked (boolean)

იმისათვის რომ მომხმარებელმა სოც ქსელში დაპოსტოს, საჭიროა ქონდეს გავლილი ავტორიზაცია და თან არ იყოს დაბლოკილი.
გამოინაგარიშეთ შედეგი და ჩაწერეთ userCanPost (boolean) ცვლადში.

*/
let userIsLoggedIn2 = true;
let userIsBlocked = false;

let userCanPost = userIsLoggedIn2 && !userIsBlocked;
console.log(userCanPost);

/*
ონლაინ მაღაზია

პროგრამაში რომელიც ონლაინ მაღაზიას აკონტროლებს, გვაქვს მოცემული შემდეგი ცვლადები:

Let balance (number)
Let userCartTotal (number)

მომხმარებელმა დააჭირა ყიდვას, დათვალეთ ყოფნის თუ არა ბალანსი კალათის გადასახდელად და ჩაწერეთ შედეგი paymentComplete (boolean) ცვლადში. 
*/

let balance = 100;
let userCartTotal = 79;

let paymentComplete = balance >= userCartTotal;
console.log(paymentComplete);

/*
კომენტარის წაშლა


მომხმარებელს სურს კომენტარის წაშლა, მოცემული გვაქვს შემდეგი ინფორმაცია:

Let userIsAdmin (boolean)
Let userIsModerator (boolean)
Let userIsCommentAuthor (boolean)

იმ შემთხვევაში თუ მომხმარებელი არის ან ადმინისტრატორი, ან მოდერატორი, ანდაც კომენტარის ავტორი, მას შეუძლია კომენტარის წაშლა. სხვა შემთხვევაში ეს ეკრძალება.

გამოთვალეთ შედეგი და ჩაწერეთ ცვლადში userCanDelete (boolean)
 */
let userIsAdmin = false;
let userIsModerator = false;
let userIsCommentAuthor = true;

let userCanDelete = userIsAdmin || userIsModerator || userIsCommentAuthor;
console.log(userCanDelete);

/*
ატომური ბომბი

ატომური ბომბის გამშვები შექმნეს ცუდმა ბიძიებმა. შედეგად მათ აქვთ მასტერ გასაღები, რომელიც პრეზიდენტის, პრემიერის და არმიების გენერალის გარეშეც უშვებს ბომბს ჰაერში.
მოცემული გვაქვს შემდეგი ცვლადები:

Let presidentKey (boolean)
Let primeMinisterKey (boolean)
Let generalOfArmiesKey (boolean)
Let masterKey (boolean)

ატომური ბომბი გაეშვება 2 შემთხვევაში: 
თუ პრეზიდენტი, პრემიერი და გენერალი, სამივე ერთად არიან თანახმები.
თუ ცუდმა ბიძიებმა მასტერ გასაღები გამოიყენეს.

გამოთვალეთ შედეგი და ჩაწერეთ ცვლადში bombWillLaunch (boolean) 
 */
let presidentKey = true;
let primeMinisterKey = false;
let generalOfArmiesKey = true;
let masterkKey = false;

let bombWillLaunch = masterkKey || presidentKey && primeMinisterKey && generalOfArmiesKey;
console.log(bombWillLaunch);
