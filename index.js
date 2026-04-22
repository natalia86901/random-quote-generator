const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const quotes = [
"This is a wonderful day. You feel emotionally strong.",
"Your energy is running high and you have a great deal of fire that you can use to transform anything.",
"Your emotions and actions are well aligned, meaning that you're likely to do things that are more in tune with your true beliefs.",
"You may feel emotionally stuck. Perhaps you feel your sensitive, loving nature isn't fully appreciated. Today is energetic and lively, but you'd rather sit home and relax.",
"Your energy may be a bit scattered. Although your days are jam-packed with activities, you still go to bed every night feeling like you didn't get anything done. It's time to prioritize."
]

button.addEventListener("click", () => {
let quote = quotes[Math.floor(Math.random() * quotes.length)];
par.textContent = quote;
par.style.display = "block";
})