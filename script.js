function demanderPaiement(methode) {
    const tonNumero = "2250749363718"; 

    const codeUnique = Math.floor(1000 + Math.random() * 9000);

    const message = "Salut Coach ! J'ai vu la vidéo sur le site. 🏀\n\n" +
                    "Je veux l'accès PRO (3500 FCFA).\n" +
                    "Paiement par : " + methode + "\n" +
                    "Code suivi : " + codeUnique;

    if (confirm("Ouvrir WhatsApp pour payer par " + methode + " ?")) {
        window.location.href = "https://wa.me/" + tonNumero + "?text=" + encodeURIComponent(message);
    }
}