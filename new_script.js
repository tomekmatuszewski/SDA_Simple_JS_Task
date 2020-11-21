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
        else if (key === 'website' || key === 'phone') {}
        else {
            cell = document.createElement('td')
            if (key === 'address') {
                cell.innerText = `${element[key].city}`
            }
            else if (key == 'company') {
                cell.innerText = `${element[key].name}`
            }
            else {
                cell.innerText = `${element[key]}`
            }
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

