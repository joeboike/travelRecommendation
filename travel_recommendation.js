const addPatientButton = document.getElementById("addPatient");
const report = document.getElementById("report");
const btnSearch = document.getElementById('btnSearch');
const patients = [];

function ClearResults() {
    document.getElementById("name").value = "";
	document.querySelector('input[name="gender"]:checked').checked = false;
	document.getElementById("age").value = "";
	document.getElementById("condition").value = "";
}

function searchLocales() {
    const input = document.getElementById('travel_recommend_search').value.toLowerCase();
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
            const locale = data.countries.find(item => cities.name.toLowerCase());

            if (locale) {
                const symptoms = condition.symptoms.join(', ');
                const prevention = condition.prevention.join(', ');
                const treatment = condition.treatment;

                resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
                resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;

                resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
                resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
                resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
            } else {
                resultDiv.innerHTML = 'Condition not found.';
            }
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
            const locale = data.countries.find(item => cities.name.toLowerCase());

            if (locale) {
                const symptoms = condition.symptoms.join(', ');
                const prevention = condition.prevention.join(', ');
                const treatment = condition.treatment;

                resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
                resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;

                resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
                resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
                resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
            } else {
                resultDiv.innerHTML = 'Condition not found.';
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
            const locale = data.countries.find(item => cities.name.toLowerCase());

            if (locale) {
                const symptoms = condition.symptoms.join(', ');
                const prevention = condition.prevention.join(', ');
                const treatment = condition.treatment;

                resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
                resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;

                resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
                resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
                resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
            } else {
                resultDiv.innerHTML = 'Condition not found.';
            }
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = 'An error occurred while fetching data.';
            });
    }
}

btnSearch.addEventListener('click', searchCondition);

addPatientButton.addEventListener("click", addPatient);