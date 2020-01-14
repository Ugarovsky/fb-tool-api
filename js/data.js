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

        renderMainTable(sortAccountsData[i], sortRMData.data[i]);
    }
}

function getRMData() {

    for (i = 0; sortAccountsData[i]; i++) {

        const user = sortAccountsData[i];
        const rmDataToJson = JSON.parse(rmAccountsData[user.id]);

        getRMItem(rmDataToJson);

        sortRMData.data[i] = getRMItem(rmDataToJson);
        sortRMData.id[i] = user.id;
    }

}

function getRMItem(rmDataToJson) {
    var itemData = []

    if (rmDataToJson.data) {

        for (j = 0; rmDataToJson.data[j]; j++) {
            
            itemData[j] = {
                currency: rmDataToJson.data[j].currency,
                name: rmDataToJson.data[j].name,
                timeZone: rmDataToJson.data[j].timezone_name,
                id: rmDataToJson.data[j].id,
            }
        
        }
        return itemData;
    }
    return "clear";
}

function renderMainTable(item) {
    const mainTable = document.getElementById('tbody');
    mainTable.innerHTML += `<tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.fullName}</td>
    <td>${item.accountId}</td>
    <td>${item.groupName}</td>
    <td>${item.status}</td>
    </tr>`
}


getAccountsData();
getRMData();

