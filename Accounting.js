document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('transaction-form');
    const tableBody = document.querySelector('#transaction-table tbody');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const date = form.elements['birthday'].value;
        const category = form.elements['category'].value;
        let amount = form.elements['amount'].value;
        const description = form.elements['description'].value;

        if (amount.endsWith('php')) {
            amount = amount.slice(0, -3).trim();
        }

        if (date && category && amount && description) {

            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${date}</td>
                <td>${category}</td>
                <td>${amount} php</td>
                <td>${description}</td>
            `;

            tableBody.appendChild(newRow);


            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
