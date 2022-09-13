const getSuperHero = () => {
  fetch('https://superheroapi.com/api.php/5581896371905787/245')
    .then(response => response.json())
    .then(json => console.log(json.name))

}
getSuperHero()