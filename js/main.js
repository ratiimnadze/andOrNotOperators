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

/* პინ კოდი

მომხმარებელს საბანკო ბარათზე სურს პინ კოდის შეცვლა. მოცემული გვაქვს შემდეგი ცვლადები:

Const userPinCode (number) მომხმარებლის ამჟამინდელი პინ კოდი

პროგრამაში მოვიდა მომხმარებლის მიერ შეყვანილი ინფორმაცია:

Const currentPinCode  (number) - მომხმარებელს ბანკომატმა კითხა თავის ამჟამინდელი პინ კოდი
Const newPinCode (number) - ახალი პინი, რისი დაყენებაც სურს
Const retypeNewPinCode (number) - შეცდომის გამორიცხვის მიზნით, ბანკომატმა ახალი პინ კოდი იკითხა ორჯერ

პინ კოდი უნდა შიცვალოს მხოლოდ მაშინ, თუ მომხმარებელმა შეიყვანა სწორად არსებული პინი, პლუს ახალი პინი ორივე ჯერზე შეიყვანა ერთი და იგივე.
გამოთვალეთ შედეგი და ჩაწერეთ ცვლადში:

Const pinChangeComplete (boolean)
*/
const userPinCode = 1995;
const currentPinCode =Number (prompt('შეიყვანეთ PIN-კოდი'));
const newPinCode = Number (prompt('შეიყვანეთ ახალი PIN-კოდი'));
const retypeNewPinCode = Number (prompt('გაიმეორეთ ახალი PIN-კოდი'));

const pinChangeComplete = userPinCode == currentPinCode && newPinCode == retypeNewPinCode;

if(pinChangeComplete){
    console.log('PIN-კოდი წარმატებით შეიცვალა!');
} else {
    console.log('PIN-კოდის ცვლილებისას დაფიქსირდა შეცდომა');
}

/*
GAME OVER

თამაშის გმირს უნდა გადაუწყვიტოთ, მორჩა თუ არა მისთვის თამაში. მოცემული გვაქვს შემდეგი ცვლადები:

Let health (number) - 0-დან 100-მდე რიცხვი
Let lives (number) - 0-დან 3-მდე რიცხვი

თამაში მორჩება იმ შემთხვევაში, თუ მოთამაშეს 3-ივე სიცოცხლე უკვე დახარჯული აქვს, პლუს health-იც ამოეწურა მიმდინარე ტურში.

მოცემული ცვლადებით გამოთვალეთ შედეგი:

Const gameOver (boolean)
*/
let health = 0;
let lives = 0;

const gameOver = health == 0 && lives == 0;

if (gameOver){
    console.log('Game Over')
}else {
    console.log(`Health = ${health} and Lives = ${lives}`)
}

/*
Meama-ს ყავა

მომხმარებელს სურს ყავის შეძენა, მოცემული გვაქვს შემდეგი ცვლადები:

Let capsuleCount (number) - რამდენი კაფსულაა ხელმისაწვდომი
Let capsulePrice (number) - კაფსულის ღირებულება

Let userBalance (number) - მომხმარებლის ბალანსი
Let creditCardStatus (boolean) - თუ მომხმარებელს ბალანსზე თანხა არ აქვს, ბარათიდან ჩამოჭრას ცდის სისტემა და სტატუსს ჩაწერს ამ ცვლადში.

გამოთვალეთ შედეგი და ჩაწერეთ ცვლადში 

Const paymentComplete (boolean)
*/
let capsuleCount =50;
let capsulePrice = 2;
let customerOrder = 5;
let userBalance = 20;

let creditCardStatus = capsuleCount >= customerOrder && userBalance >= (capsulePrice * customerOrder);

if (creditCardStatus){
    console.log('გადახდა წარმატებით განხორციელდა');
} else {
    console.log('არ გაქვთ საკმარისი თანხა ანგარიშზე');
}

/*
Hotel booking

მომხმარებელს სურს სასტუმროს დაჯავშნა. მოცემული გვაქვს შემდეგი ცვლადები:

Let availableRooms (number) - თავისუფალი ოთახების რაოდენობა
Let roomPrice (number) - ოთახის ღირებულება
Let discount (number) - დისქაუნთის რაოდენობა თანხაში (ვისაც გართულება გინდათ, დისქაუნთი გააპროცენტეთ :)) )

Let userBalance (number) - მომხმარებლის ბალანსი
Let userHasDiscount (boolean) - აქვს თუ არა მომხმარებელს დისქაუნთი
Let userRoomCount (number) - რამდენი ოთახი მოითხოვა მომხმარებელმა

მომხმარებელმა დააჭირა გადახდას, გამოთვალეთ შედეგი და ჩაწერეთ ცვლადში:

Const paymentComplete (boolean)
 */

let availableRooms = 50;
let roomPrice =200;
let userRoomCount = 5;
let discount =userRoomCount * roomPrice * 0.25 ; // 25% - ფასდაკლება
console.log(`ფასდაკლება = ${discount}`);

let userBalance2 = 2000;
let userHasDiscount = true;
const fullMoneyAmount = userRoomCount * roomPrice - discount; // მომხმარებლის გადასახდელი თანხა
console.log(`გადასახდელი თანხა = ${fullMoneyAmount}`) ;

const paymentComplete2 = (availableRooms >= userRoomCount)  && (userBalance2 >= fullMoneyAmount);

if (paymentComplete2){
    console.log('გადახდა წარმატებით განხორციელდა');
} else {
    console.log('არ გაქვთ საკმარისი თანხა ანგარიშზე');
}

