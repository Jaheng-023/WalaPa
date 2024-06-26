document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");
    const employeeTable = document.getElementById("employee-table");

    function searchEmployees() {
        const filter = searchInput.value.toLowerCase();
        const rows = employeeTable.getElementsByTagName("tr");

        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName("td");
            if (cells.length > 0) {
                const name = cells[1].textContent || cells[1].innerText;
                if (name.toLowerCase().indexOf(filter) > -1) {
                    rows[i].style.display = "";
                } else {
                    rows[i].style.display = "none";
                }
            }
        }
    }

    searchButton.addEventListener("click", searchEmployees);


    searchInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            searchEmployees();
        }
    });
});
