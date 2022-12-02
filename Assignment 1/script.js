let topAddButton = document.querySelector("#addTop");
let bottomAddButton = document.querySelector("#addBottom");

let f_name = document.querySelector("#f_name");
let l_name = document.querySelector("#l_name");
let city = document.querySelector("#city");
let country = document.querySelector("#country");
let table = document.querySelector("table").getElementsByTagName("tbody")[0];

topAddButton.addEventListener('click', () => {
    if (f_name.value.trim() === "" && l_name.value.trim() === "" && city.value.trim() === "" && country.value.trim() === "") {
        emptyValueWarning();
    } else {
        addRow(table.insertRow(0), 1);
        var rows = table.children;
        for (let i = 1; i <= table.childElementCount; i++) {
            rows[i].getElementsByTagName("td")[0].innerHTML = i + 1;
        }
    }

});
bottomAddButton.addEventListener('click', () => {
    if (f_name.value.trim() === "" && l_name.value.trim() === "" && city.value.trim() === "" && country.value.trim() === "") {
        emptyValueWarning();
    } else {
        addRow(table.insertRow(), table.childElementCount);
    }
});

function emptyValueWarning() {
    alert("Empty fields!!");

}

function addRow(row, sl_no) {
    row.insertCell(0).innerHTML = sl_no;
    row.insertCell(1).innerHTML = f_name.value.trim();
    row.insertCell(2).innerHTML = l_name.value.trim();
    row.insertCell(3).innerHTML = city.value.trim();
    row.insertCell(4).innerHTML = country.value.trim();
    f_name.value = "";
    l_name.value = "";
    city.value = "";
    country.value = "";
}