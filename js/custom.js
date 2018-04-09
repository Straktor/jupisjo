function PresentOui() {
    document.getElementById('reponsePresentNon').style.display = 'none';
    document.getElementById('reponsePresentOui').style.display = 'block';
    document.getElementById('allergieOui').required = true;
    document.getElementById('accompagneOui').required = true;
    document.getElementById('hebergementOui').required = true;
    document.getElementById('allergieNon').required = true;
    document.getElementById('accompagneNon').required = true;
    document.getElementById('hebergementNon').required = true;
}

function PresentNon() {
    document.getElementById('reponsePresentNon').style.display = 'block';
    document.getElementById('reponsePresentOui').style.display = 'none';
    document.getElementById('allergieOui').required = false;
    document.getElementById('accompagneOui').required = false;
    document.getElementById('hebergementOui').required = false;
    document.getElementById('allergieNon').required = false;
    document.getElementById('accompagneNon').required = false;
    document.getElementById('hebergementNon').required = false;
    ResetPresent();
}

function AllergieOui() {
    document.getElementById('reponseAllergie').style.display = 'block';
}

function AllergieNon() {
    document.getElementById('reponseAllergie').style.display = 'none';
    ResetAllergie();
}

function AccompagneOui() {
    document.getElementById('reponseAccompagne').style.display = 'block';

    document.getElementById('nomInvite').required = true;
    document.getElementById('allergieInviteOui').required = true;
    document.getElementById('allergieInviteNon').required = true;
}

function AccompagneNon() {
    document.getElementById('reponseAccompagne').style.display = 'none';
    document.getElementById('nomInvite').required = false;
    document.getElementById('allergieInviteOui').required = false;
    document.getElementById('allergieInviteNon').required = false;
    document.getElementById('reponseAllergieInvite').style.display = 'none';
    ResetAccompagne();
}

function AllergieInviteOui() {
    document.getElementById('reponseAllergieInvite').style.display = 'block';
}

function AllergieInviteNon() {
    document.getElementById('reponseAllergieInvite').style.display = 'none';
    ResetAllergieInvite();
}

function HebergementOui() {
    document.getElementById('reponseHebergement').style.display = 'block';
}

function HebergementNon() {
    document.getElementById('reponseHebergement').style.display = 'none';
    ResetHebergement();
}

function ResetPresent() {
    document.getElementById('allergieOui').checked = false;
    document.getElementById('accompagneOui').checked = false;
    document.getElementById('hebergementOui').checked = false;
    document.getElementById('allergieNon').checked = false;
    document.getElementById('accompagneNon').checked = false;
    document.getElementById('hebergementNon').checked = false;
    document.getElementById('brunchOui').checked = false;
    document.getElementById('brunchNon').checked = false;
    document.getElementById('selectPayment').selectedIndex = 0;
    document.getElementById('paymentMoreValue').value = '';
    document.getElementById('paymentMore').style.display = 'none';
    document.getElementById('infosupp').value = '';
    document.getElementById('chanson').value = '';
    HebergementNon();
    AccompagneNon();
    AllergieNon();
}

function ResetAllergie() {
    document.getElementById('allergies').value = '';
    document.getElementById('selectParticularite').selectedIndex = 0;
}

function ResetAccompagne() {
    document.getElementById('allergieInviteOui').checked = false;
    document.getElementById('allergieInviteNon').checked = false;
    document.getElementById('nomInvite').value = '';
    AllergieInviteNon();
}

function ResetAllergieInvite() {
    document.getElementById('allergiesInvite').value = '';
    document.getElementById('selectParticulariteInvite').selectedIndex = 0;
}

function ResetHebergement() {
    document.getElementById('selectHebergement').selectedIndex = 0;
}

$('#selectPayment').change(function() {
    var index = document.getElementById('selectPayment').selectedIndex;

    if (index === 3) {
        document.getElementById('paymentMore').style.display = 'block';
    } else {
        document.getElementById('paymentMore').style.display = 'none';
        document.getElementById('paymentMoreValue').value = '';
    }
});

$("form").submit(function(event) {
    var recaptcha = $("#g-recaptcha-response").val();
    if (recaptcha === "") {
        event.preventDefault();
        alert('S.V.P. cocher le "Je ne suis pas un robot" reCAPTCHA');
    }
});
