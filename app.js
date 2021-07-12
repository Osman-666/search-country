fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data));

const displayCountries = countries =>{
    const countriesDiv = document.getElementById('countries');

    countries.forEach(country => {
        let countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo = `
            <h1 class='country-name'>${country.name}</h1>
            <button onclick="showCountryDetails('${country.name}')">Details</button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
}

const showCountryDetails = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));

}

const renderCountryInfo = country =>{
    const countryDiv = document.getElementById('countryDetails');
    countryDiv.innerHTML = `
        <h1>${country.name}</h1>
        <p>population:${country.population}</p>
        <p>Area:${country.area} sq</p>
        <p>Capital:${country.capital}</p>
        <p>Region:${country.region}</p>
        <img src='${country.flag}'>
    `
}