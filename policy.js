const navBar = document.getElementById("nav-bar")
const modPolicy = document.getElementById("mod-policy-body")

navBar.innerHTML = `
    <a href="index.html">
        <button id="home-icon"></button>
    </a>
    <div class="nav-bar-btn">
        <a href="index.html">
            <button class="nav-btn">Home</button>
        </a>
        <a href="policy.html">
            <button class="nav-btn">Rules & Policies</button>
        </a>
        <a href="apply.html">
        <button class="nav-btn">Apply</button>
        </a>
        <a href="join.html">
        <button class="nav-btn">Join Us</button>
        </a>
    </div>`
