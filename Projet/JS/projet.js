window.onload = function() {
    // Récupérer le bouton et la fenêtre modale
    const modal = document.getElementById("modal");
    const btn = document.getElementById("openModalBtn");
    const closeBtn = document.getElementsByClassName("close")[0];

    // Ouvrir la fenêtre modale lors du clic sur le bouton
    btn.onclick = function() {
        loadModalContent('../interfaceConnection/login.html', modal);
        modal.style.display = "block";
    }

    // Fermer la fenêtre modale lors du clic sur le bouton de fermeture
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Fermer la fenêtre modale lorsque l'utilisateur clique en dehors de celle-ci
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

function loadModalContent(url, modal) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Insérer le contenu du fichier HTML dans la fenêtre modale
            modal.innerHTML = xhr.responseText;

            // Si le fichier chargé est 'login.html', charger le fichier CSS spécifique
            if (url.endsWith('login.html')) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = '../interfaceConnection/login.css';
                modal.appendChild(link); // Ajouter le lien CSS à la fenêtre modale
            }
        }
    };
    xhr.send();
}