const btnSearch = document.getElementById('btnSearch');
const btnReset = document.getElementById('btnReset');
//const patients = [];

function ClearResults() {
    const resultDiv = document.getElementById('srch_result');
    resultDiv.innerHTML = '';
    const searchBox = document.getElementById("travel_recommend_search");
    searchBox.value = "";
}

function searchLocales() {
    let input = document.getElementById('travel_recommend_search').value.toLowerCase();
    if (input === 'country' || input === 'countries') {
        input = 'countries';
        console.log("input countries");
    } else if (input === 'beach' || input === 'beaches') {
        input = 'beaches';
        console.log("input beaches");
    } else if (input === 'temple' || input === 'temples') {
        input = 'temples';
        console.log("input temples");
    } else {
        alert("I don't understand that option")
    }

    const hdrDiv = document.getElementById('detail_info');
    hdrDiv.innerHTML='<h1>Search Results</h1>'

    const resultDiv = document.getElementById('srch_result');
    let innerHTML = '';

    if (input === "countries") {
        fetch('travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
            data.countries.forEach(country => {
                console.log("Country: ",country.name);
                country.cities.forEach(city => {
                    console.log("City: ",city.name);
                    innerHTML += `
                    <div class="card">
                        <img src="${city.imageUrl}">
                        <p><strong>${city.name}</strong></p>
                        <p>${city.description}</p>
                    </div>
                    `;
                    })
                })
                resultDiv.innerHTML = innerHTML;
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = 'An error occurred while fetching countries.';
            });
    }
    else if (input === "beaches") {
        fetch('travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
            data.beaches.forEach(beach => {
                console.log("Beach: ",beach.name);
                innerHTML += `
                <div class="card">
                    <img src="${beach.imageUrl}">
                    <p><strong>${beach.name}</strong></p>
                    <p>${beach.description}</p>
                </div>
                `;
                })
                resultDiv.innerHTML = innerHTML;
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = 'An error occurred while fetching beaches.';
            });
    }
    else if (input === "temples") {
        fetch('travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
            data.temples.forEach(temple => {
                console.log("Temples: ", temple.name);
                innerHTML += `
                <div class="card">
                    <img src="${temple.imageUrl}">
                    <p><strong>${temple.name}</strong></p>
                    <p>${temple.description}</p>
                </div>
                `;
                });
                resultDiv.innerHTML = innerHTML;
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = 'An error occurred while fetching temples.';
            });
    }

    /*document.getElementById("detail_info").style.display = "none";
    document.getElementById("search_info").style.display = "block";*/
    document.getElementById("srch_result").style.display = "grid";
}

btnSearch.addEventListener('click', searchLocales);
btnReset.addEventListener('click', ClearResults);
