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
            const locale = data.countries.forEach(country => {
                console.log("Country: ",country.name);
                country.cities.forEach(city => {
                    console.log("City: ",city.name);
                    resultDiv.innerHTML += `<p><strong>${city.name}</p></strong>`;
                    resultDiv.innerHTML += `<img src="${city.imageUrl}">`;
                    resultDiv.innerHTML += `<p>${city.description}</p>`;
    
                })
            })

            if (locale) {
            } else {
                resultDiv.innerHTML = 'cities not found.';
            }
            console.log(locale)
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = 'An error occurred while fetching data.';
            });
    }
    else if (input === "beaches") {
        fetch('travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
            const locale = data.countries.find(item => cities.name);

            if (locale) {
            } else {
                resultDiv.innerHTML = 'beaches not found.';
            }
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = 'An error occurred while fetching data.';
            });
    }
    else if (input === "temples") {
        fetch('travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
            const locale = data.countries.find(item => cities.name);

            if (locale) {
            } else {
                resultDiv.innerHTML = 'Temples not found.';
            }
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = 'An error occurred while fetching data.';
            });
    }
}

btnSearch.addEventListener('click', searchLocales);
btnReset.addEventListener('click', ClearResults);
