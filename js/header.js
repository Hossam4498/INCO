class IncoHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="header container">
                <a href="index.html" class="header__logo">
                    <img src="images/dark-logo.svg" alt="INCO logo">
                </a>

                <div class="header__toggle">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <nav class="nav container">
                    <div class="nav__content">
                        <div class="nav__menu__container">
                            <a href="index.html" class="nav__img">
                                <img src="images/header-logo.svg" alt="logo">
                            </a>

                            <div class="nav__menu">
                                <ul class="nav__list">
                                    <li class="nav__item"><a href="index.html" class="nav__link">Home</a></li>
                                    <li class="nav__item"><a href="about.html" class="nav__link">About</a></li>
                                    <li class="nav__item"><a href="projects.html" class="nav__link">Projects</a></li>
                                    <li class="nav__item"><a href="contact.html" class="nav__link">Contact</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="header__close">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </nav>
            </header>
        `
    }
}



customElements.define("inco-header", IncoHeader);