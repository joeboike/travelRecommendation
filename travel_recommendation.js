const btnSearch = document.getElementById('btnSearch');
const btnReset = document.getElementById('btnReset');
//const patients = [];

function ClearResults() {
    document.getElementById("name").value = "";
	document.querySelector('input[name="gender"]:checked').checked = false;
	document.getElementById("age").value = "";
	document.getElementById("condition").value = "";
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

    const resultDiv = document.getElementById('srch_result');
    resultDiv.innerHTML = '';

    if (input === "countries") {
        fetch('travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
            data.countries.forEach(country => {
                console.log("Country: ",country.name);
                country.cities.forEach(city => {
                    console.log("City: ",city.name);
                    resultDiv.innerHTML += `<div class="card">`;
                    resultDiv.innerHTML += `<p><strong>${city.name}</strong></p>`;
                    resultDiv.innerHTML += `<img src="${city.imageUrl}">`;
                    resultDiv.innerHTML += `<p>${city.description}</p></div>`;
                    })
                })
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
                resultDiv.innerHTML += `<div class="card">`;
                resultDiv.innerHTML += `<p><strong>${beach.name}</strong></p>`;
                resultDiv.innerHTML += `<img src="${beach.imageUrl}">`;
                resultDiv.innerHTML += `<p>${beach.description}</p></div>`;
                })
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
                resultDiv.innerHTML += `<div class="card">`;
                resultDiv.innerHTML += `<p><strong>${temple.name}</strong></p>`;
                resultDiv.innerHTML += `<img src="${temple.imageUrl}">`;
                resultDiv.innerHTML += `<p>${temple.description}</p></div>`;
                });
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = 'An error occurred while fetching temples.';
            });
    }
}

btnSearch.addEventListener('click', searchLocales);
btnReset.addEventListener('click', ClearResults);
