var sortRMData = {
    data: [],
    id: [],
}

const sortAccountsData = getAccountsData();

function getAccountsData() {
    const sortAccountsData = Object.values(accountsData).map(item => {
        return {
            id: item.id,
            name: item.name,
            fullName: item.full_name,
            accountId: item.account_id,
            groupName: item.group_name,
            status: item.status,
        }
    });
    sortAccountsData.pop();
    return sortAccountsData;
}


function getRMData() {

    sortAccountsData.forEach((item, i, arr) => {
        const userId = item.id;
        const rmDataToJson = JSON.parse(rmAccountsData[userId]);

        sortRMData.data[i] = getRMItem(rmDataToJson);
        sortRMData.id[i] = userId;
    });
}


function getRMItem(rmDataToJson) {
    if (rmDataToJson.data) {
        var itemData = Object.values(rmDataToJson.data).map(item => {
            return {
                currency: item.currency,
                name: item.name,
                timeZone: item.timezone_name,
                id: item.id,

                itemData: item.ads
                    ? item.ads
                    : 'clear'
            }
        })
        return itemData;
    }
    return 'clear'
}

function renderMainTable(item) {
    const mainTable = document.getElementById('tbody');
    const validationErrorStr = 'Error validating access token: The session has been invalidated because the user changed their password or Facebook has changed';

    for (i = 0; item[i]; i++) {
        mainTable.innerHTML += `<tr>
    <td>${item[i].id}
    <td>${item[i].name}
    <td>${item[i].fullName}
    <td>${item[i].accountId}
    <td>${item[i].groupName}
    <td>${item[i].status.replace(validationErrorStr, 'Validation Error')}
    <td>${renderRMIdData(i, 'id')}
    <td>${renderRMIdData(i, 'name')}
    <td>${renderRMIdData(i, 'currency')}
    <td>${renderRMIdData(i, 'timeZone')}
    <td>${renderRMIdData(i, 'stausOne')}
    <td class="long">${renderRMIdData(i, 'insights')}
    </tr>`

    }
}

function renderRMIdData(i, param) {
    var renderTemplate = ``;

    if (sortRMData.data[i]) {
        for (j = 0; sortRMData.data[i][j]; j++) {

            const data = (param == 'id') ? sortRMData.data[i][j].id :
            (param == 'insights') ? sortRMData.data[i][j].itemData ? 
            sortRMData.data[i][j].itemData.data ? 
            sortRMData.data[i][j].itemData.data.map( item => { return `${item.insights.data[0].date_start}/${item.insights.data[0].date_stop}`}).join(`<br>`) + '<br>' : false : false :
            (param == 'currency') ? sortRMData.data[i][j].currency :
            (param == 'timeZone') ? sortRMData.data[i][j].timeZone :
            (param == 'name') ? sortRMData.data[i][j].name :
            (param == 'stausOne') ? sortRMData.data[i][j].itemData ? 
            sortRMData.data[i][j].itemData.data ? 
            sortRMData.data[i][j].itemData.data.map( (item,i) => { return `${item.effective_status}(${item.name}),` }).join(`<br>`) + '<br>' : false : false : 
            false;

            renderTemplate += data ? `${j + 1}:${data.replace(' ', '-')}<br>` : ` `
        }
    }
    return renderTemplate;
}

getRMData();
renderMainTable(sortAccountsData);
