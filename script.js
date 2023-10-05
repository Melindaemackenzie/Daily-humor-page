

document.addEventListener('DOMContentLoaded', () => {
    getJokes()
})




function getJokes() {
    const ul = document.getElementById('jokes');
    fetch('https://official-joke-api.appspot.com/jokes/ten')
      .then(res => res.json())
      .then(jokes => {
        jokes.forEach(joke => {
            const jokeList = document.createElement('li');
            jokeList.innerHTML =
            `<h2>${joke.setup}</h2>`
            ul.appendChild(jokeList);


            //Display punchline when "add your own" button is clicked
            let punchlineDisplayed = false;
            jokeList.addEventListener('click', () => {
                if (!punchlineDisplayed) {
            const punchLine = document.createElement('p');
            punchLine.innerHTML =
            `<h3>${joke.punchline}</h3>`
            jokeList.appendChild(punchLine)
            punchlineDisplayed = true;
           
           //Create like button & Add your own joke butto
            const likeButton = document.createElement('button');
            likeButton.innerHTML = 'That is a good one!';
            punchLine.appendChild(likeButton)
            const addJokeButton = document.createElement('button');
            addJokeButton.innerHTML = 'I can do better!';
            punchLine.appendChild(addJokeButton);
            likeButton.addEventListener('click', ()  => {
                const heartIcon = document.getElementById('heartIcon')
                if (heartIcon.style.display === 'none') {
                    heartIcon.style.display = 'inline'; // Show the heart icon
                }
                //Hearticon display below like button
                likeButton.appendChild(heartIcon)
            });
            // Display "add joke form" when Add Joke Button is clicked
            addJokeButton.addEventListener('click', () => {
                const jokeForm = document.getElementById('jokeForm');
            jokeForm.style.display = jokeForm.style.display === 'none' ? 'block' : 'none';
                    })

                }

            })
        })
            })

 // Create a new image element
const image = document.createElement('img');
// Set the image source (URL)
image.src = 'https://media.istockphoto.com/id/505893097/vector/smiling-retro-man-face-portrait.jpg?s=1024x1024&w=is&k=20&c=7Gys2q10GzrIl1SweuIQO0W2frayDrL-g1a7P44tCk8='; // Replace with the actual image URL
// Set alt text for accessibility
image.alt = 'Laughing face'; // Replace with a meaningful description
// Get the container element where you want to add the image
const container = document.getElementById('image-container');
// Append the image to the container
container.appendChild(image);

const jokeFormContainer = document.querySelector('.container');
const jokeForm = document.getElementById('jokeForm');
const jokeInput = document.getElementById('jokeInput');
const userInputJokeContainer = document.getElementById('userInputJoke'); //to display joke
const jokePunchline = document.getElementById('jokePunchline');
const jokeListDisplay = document.createElement('ul')

jokeForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    const userInput = jokeInput.value; // Get the user's input
    const userPunchline = jokePunchline.value;
    // Create a new <p> element to display the user's input joke
    const userInputJokeElement = document.createElement('li');
    userInputJokeElement.textContent = `"${userInput}"`;
    const userInputJokePunchline = document.createElement('p');
    userInputJokePunchline.textContent = `"${userPunchline}"`
    // Append the <p> element to the container for user input jokes
    userInputJokeContainer.appendChild(jokeListDisplay);
    jokeListDisplay.appendChild(userInputJokeElement)
    userInputJokeElement.appendChild(userInputJokePunchline);
    // Clear the input field
    jokeInput.value = '';
    jokePunchline.value = '';
});

}








