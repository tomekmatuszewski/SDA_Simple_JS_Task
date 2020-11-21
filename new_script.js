async function getData(url) {
    const response = await fetch(url, {
        method: 'GET',
    }
    );
    return response.json();
}


const createRow = (element) => {
    row = document.createElement("tr")

    for (key in element) {
        if (key === 'id'){
            cell = document.createElement('th')
            cell.scope = "row"
            cell.innerText = `${element[key]}`
            row.appendChild(cell)
        }
        else if (key === 'address') {
            cell = document.createElement('td')
            cell.innerText = `${element[key].city}`
            row.appendChild(cell)
        }
        else if (key === 'company') {
            cell = document.createElement('td')
            cell.innerText = `${element[key].name}`
            row.appendChild(cell)
        }
        else if (key === 'website' || key === 'phone') {}
        else {
            cell = document.createElement('td')
            cell.innerText = `${element[key]}`
            row.appendChild(cell)
        }
    }

    return row

}


const putDatatoTable = (data) => {

    table_body = document.querySelector(".table.table-bordered .table-body")

    data.forEach(element => {
        row = createRow(element)
        table_body.appendChild(row)
    });
}



getData('https://jsonplaceholder.typicode.com/users').then(data => putDatatoTable(data))

