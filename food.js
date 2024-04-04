document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const selectedItemsList = document.getElementById('selected-items');
    const totalCountSpan = document.getElementById('total-count');
    let totalCount = 0;

    function updateTotalCount() {
        totalCountSpan.textContent = totalCount;
    }

    function handleCheckboxClick(event) {
        const checkbox = event.target;
        const itemText = checkbox.parentElement.textContent.trim();

        if (checkbox.checked) {
            const li = document.createElement('li');
            li.textContent = checkbox.nextSibling.textContent.trim();
            selectedItemsList.appendChild(li);
            totalCount++;
        } else {
            const items = selectedItemsList.querySelectorAll('li');
            items.forEach(item => {
                if (item.textContent === itemText) {
                    item.remove();
                    totalCount--;
                }
            });
        }

        updateTotalCount();
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', handleCheckboxClick);
    });
});