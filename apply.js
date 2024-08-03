const navBar = document.getElementById("nav-bar")

navBar.innerHTML = `
    <button id="home-icon"></button>
    <div class="nav-bar-btn">
        <a href="index.html">
            <button class="nav-btn">Home</button>
        </a>
        <a href="policy.html">
            <button class="nav-btn">Policy</button>
        </a>
        <a href="apply.html">
        <button class="nav-btn">Apply</button>
        </a>
    </div>`