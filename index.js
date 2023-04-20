document.addEventListener("DOMContentLoaded", () => {

    let searchBtn = document.getElementById('searchBtn');
    let searchInput = document.getElementById('searchInput');

    searchBtn.addEventListener("click", () => {
        let countryName = searchInput.value;
        let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                result.innerHTML = `
                    <img src="${data[0].flags.svg}" alt="flag" class="flag">
                    <div class="country-info">
                        <h2>${data[0].name.common}</h2>
                        <p><span>Other names:</span> ${data[0].altSpellings}</p>
                        <p><span>Capital:</span> ${data[0].capital[0]}</p>
                        <p><span>Population:</span> ${data[0].population}</p>
                        <p><span>Region:</span> ${data[0].region}</p>
                        <p><span>Sub Region:</span> ${data[0].subregion}</p>
                        <p><span>Currencies:</span> ${data[0].currencies[Object.keys(data[0].currencies)[0]].name}</p>
                        <p><span>Languages:</span> ${Object.values(data[0].languages).toString().split(",").join(", ")}</p>
                        <p><span>Timezones:</span> ${data[0].timezones}</p>
                    </div>`
            });
        
    });
});
