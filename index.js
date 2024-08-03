const navBar = document.getElementById("nav-bar")

navBar.addEventListener("click", function() {

})

navBar.innerHTML = `
    <button id="home-icon"></button>
    <div class="nav-bar-btn">
        <button class="nav-btn">Home</button>
        <button class="nav-btn">Policy</button>
        <button class="nav-btn">Apply</button>
    </div>
`