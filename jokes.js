
// Defining an array of 20 jokes with their respective author.
const myJokesArray = [
    { text: "Why don't dads tell secrets on farms? Because the potatoes have eyes and the corn has ears!", author: "Anonymous" },
    { text: "Why did the scarecrow become a good dad? Because he was outstanding in his field!", author: "Armaan Singh" },
    { text: "Why did the dad bring a ladder to the bar? He heard the drinks were on the house!", author: "Armaan Singh" },
    { text: "Why can't a bike stand on its own, because it is two tired.", author: "Armaan Singh" },
    { text: "Why did the dad sit on the clock? He wanted to be on time!", author: "Armaan Singh" },
    { text: "Why don’t dads ever get lost? Because they always follow the beaten path!", author: "Anonymous" },
    { text: "What do you call a dad who can’t tell a joke? A step-funny!", author: "Anonymous" },
    { text: "Why do fathers make terrible detectives? They always crack under pressure!", author: "Anonymous" },
    { text: "Why did the dad put his money in the blender? He wanted to make liquid assets!", author: "Anonymous" },
    { text: "Why don't dads play hide and seek? Because good luck hiding from dad jokes!", author: "Anonymous" },
    { text: "Why do dads bring extra pencils to meetings? Just in case they need to draw conclusions!", author: "Anonymous" },
    { text: "Why was the dad so good at baseball? He always knew how to hit home runs!", author: "Anonymous" },
    { text: "Why did the dad build a clock out of pancakes? He wanted to see if time really flies when you’re having fun!", author: "Anonymous" },
    { text: "Why don't dads tell jokes about pizza? Because they might get too cheesy!", author: "Anonymous" },
    { text: "Why did the dad bring string to the party? He wanted to tie one on!", author: "Anonymous" },
    { text: "Why did the dad take up gardening? He wanted to grow his own sense of humor!", author: "Anonymous" },
    { text: "Why don't dads trust elevators? They don't like being taken up!", author: "Anonymous" },
    { text: "Why did the dad put his car in the oven? He wanted to see how the Rolls-Royce!", author: "Anonymous" },
    { text: "Why was the dad always cold at the football game? He forgot his jumper cables!", author: "Anonymous" },
    { text: "Why did the dad take a hammer to bed? He wanted to hit the hay!", author: "Anonymous" },
];

// Creating a function to get a random joke from the array
function gettingRandomJoke() {
    const randomIndex = Math.floor(Math.random() * myJokesArray.length);
    return myJokesArray[randomIndex];
}

// Function to fetch and display a random joke 
function displayingRandomJoke() {
    const randomJoke = gettingRandomJoke();
    const jokeText = document.getElementById('jokeText');
    const jokeCreator = document.getElementById('jokeCreator');
    jokeText.innerText = randomJoke.text;
    jokeCreator.innerText = "- " + randomJoke.author;
}

// Call displayingRandomJoke() once the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    displayingRandomJoke();
});