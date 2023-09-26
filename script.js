document.addEventListener('DOMContentLoaded', () => {
    getJokes()
})




function getJokes() {
    const ul = document.getElementById('jokes');
  
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json' // Request JSON response from the API
      }
    })
      .then(res => res.json())
      .then(data => {
        // Check if the API response contains a joke
        if (data.joke) {
          // Create a new list item and add the joke as its text content
          const li = document.createElement('li');
          li.textContent = data.joke;
  
          // Append the list item to the unordered list
          ul.appendChild(li);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

     

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


  }
