const navBar = document.getElementById("nav-bar")

navBar.innerHTML = `
    <button id="home-icon"></button>
    <div class="nav-bar-btn">
        <a href="../index/index.html">
            <button class="nav-btn">Home</button>
        </a>
        <a href="../policy/policy.html">
            <button class="nav-btn">Policy</button>
        </a>
        <a href="../apply/apply.html">
        <button class="nav-btn">Apply</button>
        </a>
    </div>`

