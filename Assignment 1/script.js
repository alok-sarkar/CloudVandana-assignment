let topAddButton = document.querySelector("#addTopBtn");
let bottomAddButton = document.querySelector("#addBottomBtn");
let saveButton = document.querySelector("#saveDataBtn");
let cancelButton = document.querySelector("#cancelBtn");
let table = document.querySelector("table").getElementsByTagName("tbody")[0];

saveButton.style.display = "none";
cancelButton.style.display = "none";


topAddButton.addEventListener('click', () => {
    addRow(table.insertRow(0), 1);
    var rows = table.children;
    for (let i = 1; i < table.childElementCount; i++) {
        rows[i].getElementsByTagName("td")[0].innerHTML = i + 1;
    }
    toglleButtons();

});
bottomAddButton.addEventListener('click', () => {
    addRow(table.insertRow(), table.childElementCount);
    toglleButtons();

});
saveButton.addEventListener('click', () => {
    let f_name = document.querySelector("#f_name").value.trim();
    let l_name = document.querySelector("#l_name").value.trim();
    let city = document.querySelector("#city").value.trim();
    let country = document.querySelector("#country").value.trim();
    if (f_name === "" && l_name === "" && city === "" && country === "") {
        emptyValueWarning();

    } else {
        for (let i = 0; i < table.childElementCount; i++) {
            var rows = table.children;
            if (rows[i].classList.contains("editable")) {
                var cols = rows[i].children;
                cols[1].innerHTML = f_name;
                cols[2].innerHTML = l_name;
                cols[3].innerHTML = city;
                cols[4].innerHTML = country;
                rows[i].classList.remove("editable");
            }

        }
        toglleButtons();
    }


});
cancelButton.addEventListener('click', () => {
    var deleted = 0;
    var rows = table.children;
    for (let i = 0; i < table.childElementCount; i++) {
        if (rows[i].classList.contains("editable")) {
            table.deleteRow(i);
        }

        if (typeof(rows[i]) != 'undefined' && rows[i] != null)
            rows[i].getElementsByTagName("td")[0].innerHTML = i + 1;
    }
    toglleButtons();
});

function emptyValueWarning() {
    alert("Empty fields!!");

}

function toglleButtons() {
    if (bottomAddButton.style.display === "none") {
        bottomAddButton.style.display = "initial";
        topAddButton.style.display = "initial";
        saveButton.style.display = "none";
        cancelButton.style.display = "none";
    } else {
        bottomAddButton.style.display = "none";
        topAddButton.style.display = "none";
        saveButton.style.display = "initial";
        cancelButton.style.display = "initial";
    }


}

function addRow(row, sl_no) {
    row.classList.add("editable");
    row.insertCell(0).innerHTML = sl_no;
    row.insertCell(1).innerHTML = "<input type=\"text\" id=\"f_name\">";
    row.insertCell(2).innerHTML = "<input type=\"text\" id=\"l_name\">";
    row.insertCell(3).innerHTML = "<input type=\"text\" id=\"city\">";
    row.insertCell(4).innerHTML = "<input type=\"text\" id=\"country\">";
}