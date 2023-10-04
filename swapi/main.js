const residentsBtn = document.querySelector('#residents')

const baseURL = `https://swapi.dev/api`

let myDiv = document.querySelector('div')




function clicked() {
    axios.get(`${baseURL}/planets/?search=alderaan`)
    .then((res) => {
        // console.log(res.data.results[0].residents)

        for (let i = 0; i < res.data.results[0].residents.length; i++) {
            axios.get(res.data.results[0].residents[i])
            .then((residentRes) => {
                // console.log(residentRes.data)

                let newElement = document.createElement('h2')

                newElement.innerHTML = residentRes.data.name

                myDiv.appendChild(newElement)


            })
            .catch(() => {
                console.log('There was an error.')
            })
        }
    }) 

    
    .catch(() => {
        console.log('there was an error!')
    }) 

    
}

residentsBtn.addEventListener('click', clicked)

