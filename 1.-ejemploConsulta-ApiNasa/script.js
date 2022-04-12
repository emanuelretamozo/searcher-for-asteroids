let results_container = document.getElementById('results_container');

function buscar_asteroides() {
    let date = document.getElementById("fecha").value;

    let config = {
        metod: 'get',
        url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=g3hVcuD1amSP3zHq3I0ldMPsxFYXmjJEb056MenE`,
        headers: {}
    }

    axios(config)
        .then(response => {
            let objects = response.data.near_earth_objects[date]
            console.log(objects)
        
            let html = ""
            for(let i = 0; i < objects.length; i++) {
                html += `<tr>
                                    <td>${objects[i].id}</td>
                                    <td>${objects[i].name}</td>
                                    <td>${objects[i].is_potentially_hazardous_asteroid}</td>
                                </tr>`
            }

            results_container.innerHTML = html
        })
    }
