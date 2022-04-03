const input = document.getElementById("read-speed");
input.addEventListener('change', updateValue);

function updateValue(e) {
    browser.storage.local.set({
        "read_speed": e.target.value
    });
}
