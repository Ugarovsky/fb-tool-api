const accountsCookies = JSON.parse(getCookie('accounts'));
const accountsData = [];
console.log('asd');
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function getAccountsData () { 

    for (i = 0; accountsCookies[i]; i++){ 
        accountsData[i] = { 
            id : accountsCookies[i].id,
            name : accountsCookies.name,
            fullName : accountsCookies[i].full_name,
            accountId : accountsCookies[i].account_id,
            groupName : accountsCookies[i].group_name,
            status : accountsCookies[i].status,
        }
        renderMainTable(accountsData[i]);
    }
}

function renderMainTable (item) {
    
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

