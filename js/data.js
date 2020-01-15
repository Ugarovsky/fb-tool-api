var sortAccountsData = [];
var sortRMData = {
    data: [],
    id: [],
}

function getAccountsData() {

    for (i = 0; accountsData[i]; i++) {

        sortAccountsData[i] = {
            id: accountsData[i].id,
            name: accountsData.name,
            fullName: accountsData[i].full_name,
            accountId: accountsData[i].account_id,
            groupName: accountsData[i].group_name,
            status: accountsData[i].status,
        }
    }
}

function getRMData() {

    for (i = 0; sortAccountsData[i]; i++) {

        const user = sortAccountsData[i];
        const rmDataToJson = JSON.parse(rmAccountsData[user.id]);

        sortRMData.data[i] = getRMItem(rmDataToJson);
        sortRMData.id[i] = user.id;
    }
}

function getRMItem(rmDataToJson) {
    var itemData = [];

    if (rmDataToJson.data) {
        for (j = 0; rmDataToJson.data[j]; j++) {

            itemData[j] = {
                currency: rmDataToJson.data[j].currency,
                name: rmDataToJson.data[j].name,
                timeZone: rmDataToJson.data[j].timezone_name,
                id: rmDataToJson.data[j].id,
            }

            rmDataToJson.data[j].ads 
            ? itemData[j].adsData = rmDataToJson.data[j].ads
            : itemData[j].adsData = 'clear'
        }
        return itemData;
    }
    return "clear";
}

function renderMainTable(item) {
    const mainTable = document.getElementById('tbody');

    for (i = 0; item[i]; i++) {
    mainTable.innerHTML += `<tr>
    <td>${item[i].id}</td>
    <td>${item[i].name}</td>
    <td>${item[i].fullName}</td>
    <td>${item[i].accountId}</td>
    <td>${item[i].groupName}</td>
    <td>${item[i].status}</td>
    <td>${renderRMIdData(i, 'id')}</td>
    <td>${renderRMIdData(i, 'name')}</td>
    <td>${renderRMIdData(i, 'currency')}</td>
    <td>${renderRMIdData(i, 'timeZone')}</td>
    </tr>`

    }
}

function renderRMIdData(i, param) {
    var renderTemplate = ``;
    
    if (sortRMData.data[i]) {
        for (j = 0; sortRMData.data[i][j]; j++) {

            var data = (param == 'id') ? sortRMData.data[i][j].id :
            (param == 'currency') ? sortRMData.data[i][j].currency :
            (param == 'timeZone') ? sortRMData.data[i][j].timeZone :
            (param == 'name') ? sortRMData.data[i][j].name :
            false;

            if (data) {
                renderTemplate += `<strong>${j + 1}</strong>:${data}<br>`
            }

            else {
                renderTemplate = 'clear'
            }
        }
        return renderTemplate;
    }
}

getAccountsData();
getRMData();
renderMainTable(sortAccountsData);
