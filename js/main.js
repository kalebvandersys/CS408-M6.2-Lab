/**
 * showSelected()
 * -----------------
 * This function checks all radio buttons in the group named "choice"
 * and finds which one (if any) is selected.
 * - If a radio button is selected, it displays an alert with the option's value.
 * - If no option is selected, it alerts the user to select an option first.
 */
function showSelected() {
    const radios = document.getElementsByName("choice");
    let selected = null;

    for (let r of radios) {
        if (r.checked) {
            selected = r.value;
            break;
        }
    }

    if (selected) {
        alert("You selected: " + selected);
    } else {
        alert("Please select an option first!");
    }
}