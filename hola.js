const apiKey = "417390b221e44959848516f93177b905";

fetch(`https://api.rawg.io/api/games?key=${apiKey}`)
  .then(res => res.json())
  .then(data => console.log(data));