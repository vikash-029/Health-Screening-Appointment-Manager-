// Get a list from the browser's storage (returns empty list if nothing saved)
function getData(key) {
    var text = localStorage.getItem(key);
    if (text == null) {
        return [];
    }
    return JSON.parse(text);
}

// Save a list into the browser's storage
function saveData(key, list) {
    localStorage.setItem(key, JSON.stringify(list));
}

// Access control: only staff can open staff pages
function checkStaff() {
    if (sessionStorage.getItem("role") != "staff") {
        alert("Staff only. Please login first.");
        window.location = "index.html";
    }
}

function logout() {
    sessionStorage.removeItem("role");
    window.location = "index.html";
}