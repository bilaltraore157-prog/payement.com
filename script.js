function demanderPaiement(methode) {
    // ⚠️ METS TON NUMÉRO ICI (Exemple: 2250700000000)
    const tonNumero = "2250749363718"; 

    const codeUnique = Math.floor(1000 + Math.random() * 9000);

    const message = "Salut Coach ! Je veux l'accès PRO automatique pour BasquetsProMath (3500 FCFA). " +
                    "Comment je fais pour payer par " + methode + " ? " +
                    "Mon code de suivi est : " + codeUnique;

    if (confirm("Générer mon code de suivi unique (" + codeUnique + ") ?")) {
        window.location.href = "https://wa.me/" + tonNumero + "?text=" + encodeURIComponent(message);
    }
}