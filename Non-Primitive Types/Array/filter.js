// مثال ساده      -------------------------------------------
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6]

//مثال با آرایه‌ای از آبجکت‌ها  -------------------------------------------
const users = [
  { id: 1, name: "Ali", age: 22 },
  { id: 2, name: "Sara", age: 18 },
  { id: 3, name: "Reza", age: 30 },
];

const adults = users.filter((user) => user.age >= 21);

console.log(adults);
// [
//   { id: 1, name: 'Ali', age: 22 },
//   { id: 3, name: 'Reza', age: 30 }
// ]

// ----------------------------------------------------------------------
// متد های مشابه

// 1. find()
// ✅ پیدا کردن اولین عنصری که شرط را برقرار می‌کند.
// ❌ بر خلاف filter
// ، فقط یک مقدار (نه آرایه) برمی‌گرداند.
const numbers = [1, 2, 3, 4, 5];
const result = numbers.find((num) => num > 3);

console.log(result); // 4

// 2. map()
//
// ✅ برای تبدیل یا دستکاری عناصر یک آرایه.
// ❌ همه عناصر را نگه می‌دارد، حتی اگر شرط برقرار نباشد.
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6]

// 3. reduce()
//
// ✅ برای جمع‌آوری یا خلاصه‌سازی کل آرایه به یک مقدار.
// ❌ از لحاظ عملکرد خیلی متفاوت است، اما می‌توان با آن هم فیلتر انجام داد.

const numbers = [1, 2, 3, 4];
const evens = numbers.reduce((acc, num) => {
  if (num % 2 === 0) acc.push(num);
  return acc;
}, []);

console.log(evens); // [2, 4]

// 4. some() و every()
//
// ✅ برای بررسی اینکه آیا برخی یا همه‌ی عناصر شرط را دارند.
// ❌ مقدار boolean برمی‌گردانند.
numbers.some((num) => num > 3); // true
numbers.every((num) => num > 3); // false

// جمع بندی
// اگر می‌خواهی چند عنصر مطابق شرط را انتخاب کنی ➤ filter

// اگر دنبال اولین عنصر مطابق شرط هستی ➤ find

// اگر می‌خواهی هر عنصر را تغییر دهی ➤ map
