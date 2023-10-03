

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
            ul.appendChild(jokeList).addEventListener('click', () => {
            const punchLine = document.createElement('p');
            punchLine.innerHTML =
            `<h3>${joke.punchline}</h3>`
            jokeList.appendChild(punchLine)

            })
        })
            })

            
       
     

      // Create a new image element
const image = document.createElement('img');

// Set the image source (URL)
image.src = 'https://media.istockphoto.com/id/505893097/vector/smiling-retro-man-face-portrait.jpg?s=1024x1024&w=is&k=20&c=7Gys2q10GzrIl1SweuIQO0W2frayDrL-g1a7P44tCk8='; // Replace with the actual image URL

// Set alt text for accessibility
image.alt = 'Image Description'; // Replace with a meaningful description

// Get the container element where you want to add the image
const container = document.getElementById('image-container');

// Append the image to the container
container.appendChild(image);


const button = document.createElement('button');
button.innerHTML = 'That is a good one!';
const buttonContainer = document.getElementById('likeButton');
buttonContainer.appendChild(button);

const addJokeButton = document.createElement('button');
addJokeButton.innerHTML = 'I can do better!';
buttonContainer.appendChild(addJokeButton);

button.addEventListener('click', ()  => {
    if (heartIcon.style.display === 'none') {
        heartIcon.style.display = 'inline'; // Show the heart icon
    } else {
        heartIcon.style.display = 'none'; // Hide the heart icon
    }
});



/*const jokeFormContainer = document.querySelector(".container")
addJokeButton.addEventListener('click', () => {
    addJoke = !addJoke
    if (addJoke) {
        jokeFormContainer.style.display = "block";
    }
    else {
        jokeFormContainer.style.display = "none";
    }
}) */

const jokeFormContainer = document.querySelector('.container');

addJokeButton.addEventListener('click', () => {
    // Toggle the form's visibility using CSS class
    const jokeForm = document.getElementById('jokeForm');
    jokeForm.style.display = jokeForm.style.display === 'none' ? 'block' : 'none';
});


const jokeForm = document.getElementById('jokeForm');
const jokeInput = document.getElementById('jokeInput');
const userInputJokeContainer = document.getElementById('userInputJoke'); //to display joke
const jokePunchline = document.getElementById('jokePunchline');

jokeForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    const userInput = jokeInput.value; // Get the user's input
    const userPunchline = jokePunchline.value;
    // Create a new <p> element to display the user's input joke
    const userInputJokeElement = document.createElement('p');
    userInputJokeElement.textContent = `"${userInput}"`;
    const userInputJokePunchline = document.createElement('p');
    userInputJokePunchline.textContent = `"${userPunchline}"`

    // Append the <p> element to the container for user input jokes
    userInputJokeContainer.appendChild(userInputJokeElement);
    userInputJokeContainer.appendChild(userInputJokePunchline);

    // Clear the input field
    jokeInput.value = '';
    jokePunchline.value = '';
});

}








