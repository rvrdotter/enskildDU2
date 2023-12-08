

function render_header(parent) {
  // Funktionen tar emot referensen till container-noden för headern.
  // Funktionsanropet finns redan på plats i index.js. Studera argumentet som skickas där.
  // Funktionen skapar de nödvändiga HTML-elementen så att headern ser ut
  // som den på videon: Tre random bilder och texten centrerad.
  let header = document.createElement("div");
  header.id = "headerDiv"
  header.innerHTML = `
    <div class="headerPicture"></div>
    <div class="headerPicture">
      <h1>Utbytesstudier<br>Missa inte chansen!</h1>
    </div>
    <div class="headerPicture"></div>
  `;
  let citiesOrCountries = [COUNTRIES, CITIES];

  randomCitiesOrCountriesOne = array_random_element(citiesOrCountries);
  randomCitiesOrCountriestwo = array_random_element(citiesOrCountries);
  randomCitiesOrCountriesThree = array_random_element(citiesOrCountries);

  let first = header.querySelector("div:nth-child(1)");
  let second = header.querySelector("div:nth-child(2)");
  let third = header.querySelector("div:nth-child(3)");

  let picOne = array_random_element(randomCitiesOrCountriesOne);
  picOne = array_random_element(picOne.imagesNormal);
  let picScnd = array_random_element(randomCitiesOrCountriestwo);
  picScnd = array_random_element(picScnd.imagesNormal);
  let picThrd = array_random_element(randomCitiesOrCountriesThree);
  picThrd = array_random_element(picThrd.imagesNormal);

  first.style.backgroundImage = "url(media/geo_images/" + picOne + ")";
  second.style.backgroundImage = "url(media/geo_images/" + picScnd + ")";
  third.style.backgroundImage = "url(media/geo_images/" + picThrd + ")";
  parent.append(header);


  // Krav:
  // Nyckeln *style* får i denna kod endast användas för att ange bakgrundsbild-filen.
  // Det går dock såklart även att lösa det hela med <img> istället för att ha bilderna
  // som bakgrundsbilder. I så fall får inte nyckeln *style* användas alls i koden här.

  // Glöm inte: Du måste även fylla i header.css så att headern ser ut som den på videon. Se header.css
}