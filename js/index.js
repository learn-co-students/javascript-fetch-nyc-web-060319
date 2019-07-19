// const app = "I don't do much.";
const token = 'YOUR_TOKEN_HERE';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json()) //first call back function
  .then(json => console.log(json)); //second callback function which gives us what we want out of the json object (the data we want to see)
