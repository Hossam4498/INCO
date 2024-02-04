class IncoFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer" id="footer">
                <div class="container">
                    <div class="grid">
                        <div class="img-box">
                            <a href="index.html"><img src="images/header-logo.svg" alt="footer logo" class="logo-footer"></a>
                            <div class="footer-about">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  </p>
                            </div>
                        </div>

                        <div>
                        </div>

                        <div class="useful-link">
                            <h2>Useful Links</h2>
                            <div class="use-links">
                                <li><a href="index.html"><i class="fa-solid fa-angles-right"></i> Home</a></li>
                                <li><a href="about.html"><i class="fa-solid fa-angles-right"></i> About</a></li>
                                <li><a href="projects.html"><i class="fa-solid fa-angles-right"></i> Projects</a></li>
                                <li><a href="contact.html"><i class="fa-solid fa-angles-right"></i> Contact</a></li>
                            </div>
                        </div>

                        <div class="social-links">
                            <h2>Follow Us</h2>
                            <div class="social-icons">
                                <li><a href=""><i class="fa-brands fa-facebook-f"></i> Facebook</a></li>
                                <li><a href=""><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                                <li><a href=""><i class="fa-brands fa-tiktok"></i> Tiktok</a></li>
                                <li><a href=""><i class="fa-brands fa-linkedin-in"></i> Linkedin</a></li>
                            </div>
                        </div>

                        <div class="address">
                            <h2>Address</h2>
                            <div class="address-box">
                                <li><span><i class="fa-solid fa-map-pin"></i> Cairo, Egypt.</span></li>
                                <li><a href="mailto:incoarchitects.eg@gmail.com"><i class="fa-solid fa-envelope"></i> inco</a></li>
                                <li><a href="tel:+201100200818"><i class="fa-solid fa-phone"></i> +201100200818</a></li>
                                <li><a href=""><i class="fa-solid fa-shield-halved"></i> Privacy Policy</a></li>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="copyright"><i class="fa-solid fa-copyright"></i> 2021 - 2024 Inco, inc. All rights reserved.
                    <p>
                        Created By <a href="https://hossam4498.github.io/Portfolio/">Hossam El Den</a>
                    </p> 
                </div>
            </footer>
        `
    }
}


customElements.define("inco-footer", IncoFooter);