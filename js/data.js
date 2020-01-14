
const accountResponseData = JSON.parse(accounts);

const accountsData = [];
const accountRMData = [];


function getAccountsData() {

    for (i = 0; accountResponseData[i]; i++) {
        accountsData[i] = {
            id: accountResponseData[i].id,
            name: accountResponseData.name,
            fullName: accountResponseData[i].full_name,
            accountId: accountResponseData[i].account_id,
            groupName: accountResponseData[i].group_name,
            status: accountResponseData[i].status,
        }
        renderMainTable(accountsData[i]);
    }
}

function getRMData() {
    for (i = 0; accountResponseData[i]; i++) {
        var searchAccId = accountResponseData[i].id;
        var RMData = JSON.parse(accounts2[searchAccId]);

        accountRMData[i] = {
            name: RMData.name,
        }
    }
}



export default function renderMainTable (item) {
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

