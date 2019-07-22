const app = "I don't do much.";
const token = 'd128fefacfa11bac53fd85c22c7b0c55bde971ab';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
