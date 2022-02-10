import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

  const cards = document.querySelector(".cards");

  function getUserCard(user, parent){
    axios.get(`https://api.github.com/users/${user}`)
    .then(resp => {
      const userCard = userCardMaker(resp.data);
      parent.appendChild(userCard);
    })
    .catch(err => {
      console.error(err);
    })
  }

  

  getUserCard("MichaelJG95", cards);
  
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];
followersArray.forEach(follower => {
  getUserCard(follower, cards);
})
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function userCardMaker({ avatar_url, name, login, location, html_url, followers, following, bio }){
  //instantiate elements
  const userCard = document.createElement("div");
  const userImage = document.createElement("img");
  const cardInfo = document.createElement("div");
  const headingName = document.createElement("h3");
  const usernameP = document.createElement("p");
  const locationP = document.createElement("p");
  const profileP = document.createElement("p");
  const profileLink = document.createElement("a");
  const followersP = document.createElement("p");
  const followingP = document.createElement("p");
  const bioP = document.createElement("p");

  //set classes, attributes, and text
  userImage.src = avatar_url;
  headingName.textContent = name;
  usernameP.textContent = login;
  locationP.textContent = `Location: ${location}`;
  profileP.textContent = "Profile:";
  profileLink.href = html_url;
  profileLink.textContent = html_url;
  followersP.textContent = `Followers: ${followers}`;
  followingP.textContent = `Following: ${following}`;
  bioP.textContent = bio;
  
  userCard.classList.add("card");
  cardInfo.classList.add("card-info");
  headingName.classList.add("name");
  usernameP.classList.add("username");

  //create hierarchy
  userCard.appendChild(userImage);
  userCard.appendChild(cardInfo);
  cardInfo.appendChild(headingName);
  cardInfo.appendChild(usernameP);
  cardInfo.appendChild(locationP);
  cardInfo.appendChild(profileP);
  profileP.appendChild(profileLink);
  cardInfo.appendChild(followersP);
  cardInfo.appendChild(followingP);
  cardInfo.appendChild(bioP);
  
  //return the userCard
  return userCard;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
