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