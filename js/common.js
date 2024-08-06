var languagesArry = [
  { name: "EN", code: "english", selected: true },
  { name: "GR", code: "greek", selected: false },
  { name: "FR", code: "french", selected: false },
  { name: "ES", code: "spanish", selected: false },
  { name: "DE", code: "german", selected: false },
  { name: "IT", code: "italian", selected: false },
];
function changeLanguage() {
  var languages = {
    english: {
      homePage: {
        topBar: "",
        centerMsg: "Are you able to find the mosaic?",
        buttonOne: "Click and Target",
        buttonTwo: "About Us",
      },
      infoPop: {
        lineOne:
          "Bridge of Love is a mosaic of pictures connecting people & places",
        lineTwo: "Upload your own picture & share it with others",
        lineThree:
          "Search Pictures & find your own images & explore pictures from other cities",
      },
      mosiacPage: {
        lineOne: "Zoom in on the mosaic to see all images",
        lineTwo: "Share the mosiac on social media",
        lineThree: "Search pictures in the mosiac",
        buttonText: "Be a part of the mosaic",
      },
      signInInfoPage: {
        signInBtn: " Sign In",
        paraLIne: "--  or sign in with  --",
        dontAcntLine: "Don't have an account ?",
        signUpBtn: "Sign Up",
        center: "Subscribe Here",
      },
      signInPage: {
        signInLabel: "Sign In",
        orLabel: "or",
        userNameLabel: "Don't have an account ?",
        passwordLabel: "Password",
        signinBtn: "Sign In",
      },
      signUpPage: {
        subscriptionLabel: "Subscription",
        orLabel: "or",
        firstNameLabel: "First Name",
        lastNameLabel: "Last Name",
        emailLabel: "Email Address",
        mobileLabel: "Mobile Number",
        passwordLabel: "Password",
        privacyPara: "I agree with the icons4good privacy policy",
        privacyanchor: "Privacy Policy",
        termsPara: "I agree with the icons4good terma and conditions",
        termsAnchor: "Terms & Conditions",
        declarationPara: "I confirm that I am 18 old or older",
        submitBtn: "Submit",
      },
      thankPage: {
        thankMsg:
          "Thank you for submitting your picture You will receive an email when it will be added to the mosaic ",
        back: "Add more pictures",
      },
      mosiacSecondPage: {
        uploadBtn: "Upload Image",
        choseFileUpld: "Choose file to upload",
        addPhotoBtn: "Add Photo File",
        confrmMsg:
          "confirm that I have the right to use the image file that I am uploading",
      },
      paymentPage: {
        paymentParaOne: "Add your image to the mosaic and keep it there",
        paymentParaTwo: "Pay Now",
        paymentParaThree: "€ 2.00",
        paymentParaFour:
          "Let us give a part of the amount to a charity of our choice",
        paymentbuttonOne: "Payment",
        paymentBtnTwo: "Without Donation",
      },
    },
    greek: {
      homePage: {
        topBar: "",
        centerMsg: "Μπορείτε να βρείτε το μωσαϊκό;",
        buttonOne: "Κάντε κλικ και στόχευση",
        buttonTwo: "Σχετικά με εμάς",
      },
      infoPop: {
        lineOne:
          "είναι ένα μωσαϊκό από εικόνες που συνδέουν ανθρώπους και μέρη",
        lineTwo: "Ανεβάστε τη δική σας εικόνα και μοιραστείτε τη με άλλους",
        lineThree:
          "Αναζητήστε εικόνες και βρείτε τις δικές σας εικόνες και εξερευνήστε εικόνες από άλλες πόλεις",
      },
      mosiacPage: {
        lineOne: "Κάντε ζουμ στο μωσαϊκό για να δείτε όλες τις εικόνες",
        lineTwo: "Αναζήτηση εικόνων στο μωσαϊκό Ονόματα πόλεων",
        lineThree:
          "Εγγραφείτε / συνδεθείτε μεταφορτώστε φωτογραφίες στο μωσαϊκ",
        buttonText: "Γίνετε μέρος του μωσαϊκού",
      },
      signInInfoPage: {
        signInBtn: "Συνδεθείτε",
        paraLIne: "--  ή συνδεθείτε με  --",
        dontAcntLine: "Δεν έχετε λογαριασμό ?",
        signUpBtn: "Εγγραφείτε",
      },
      signInPage: {
        signInLabel: "Συνδεθείτε",
        orLabel: "ή",
        userNameLabel: "Ονομα χρήστη",
        passwordLabel: "Κωδικός πρόσβασης",
        signinBtn: "Συνδεθείτε",
      },
      signUpPage: {
        subscriptionLabel: "Συνδρομή",
        orLabel: "ή",
        firstNameLabel: "Ονομα",
        lastNameLabel: "Επίθετο",
        emailLabel: "Διεύθυνση ηλεκτρονικού ταχυδρομείου",
        mobileLabel: "Αριθμός κινητού",
        passwordLabel: "Κωδικός πρόσβασης",
        privacyPara: "Συμφωνώ με την πολιτική απορρήτου icons4good",
        privacyanchor: "Πολιτική Απορρήτου",
        termsPara: "Συμφωνώ με τους όρους και προϋποθέσεις του icons4good",
        termsAnchor: "όροι και Προϋποθέσεις",
        declarationPara: "Επιβεβαιώνω ότι είμαι 18 ετών και άνω",
        submitBtn: "υποβάλλουν",
      },
      thankPage: {
        thankMsg:
          "Σας ευχαριστούμε που υποβάλατε την εικόνα σας Θα λάβετε ένα email όταν θα προστεθεί στο μωσαϊκό",
        back: "Προσθέστε περισσότερες φωτογραφίες",
      },
      mosiacSecondPage: {
        uploadBtn: "Μεταφόρτωση εικόνας",
        choseFileUpld: "Επιλέξτε αρχείο για μεταφόρτωση",
        addPhotoBtn: "Προσθήκη αρχείου φωτογραφίας",
        confrmMsg:
          "επιβεβαιώστε ότι έχω το δικαίωμα να χρησιμοποιήσω το αρχείο εικόνας που ανεβάζω",
      },
      paymentPage: {
        paymentParaOne:
          "Προσθέστε την εικόνα σας στο μωσαϊκό και κρατήστε την εκεί",
        paymentParaTwo: "Πλήρωσε τώρα",
        paymentParaThree: "€ 2.00",
        paymentParaFour:
          "Ας δώσουμε ένα μέρος του ποσού σε φιλανθρωπικό ίδρυμα της επιλογής μας",
        paymentbuttonOne: "Πληρωμή",
        paymentBtnTwo: "Χωρίς Δωρεά",
      },
    },
    french: {
      homePage: {
        topBar: "",
        centerMsg: "Parvenez-vous à trouver la mosaïque ?",
        buttonOne: "Cliquez et ciblez",
        buttonTwo: "À propos de nous",
      },
      infoPop: {
        lineOne:
          "Bridge of Love est une mosaïque d'images reliant les gens et les lieux",
        lineTwo: "Téléchargez votre propre photo et partagez-la avec d'autres",
        lineThree:
          "Recherchez des images, trouvez vos propres images et explorez des images d'autres villes.",
      },
      mosiacPage: {
        lineOne: "Zoomez sur la mosaïque pour voir toutes les images",
        lineTwo: "Rechercher des images dans la mosaïque Noms des villes",
        lineThree:
          "S'inscrire / se connecter télécharger des images dans la mosaïque",
        buttonText: "Faites partie de la mosaïque",
      },
      signInInfoPage: {
        signInBtn: " Se connecter",
        paraLIne: "-- ou connectez-vous avec --",
        dontAcntLine: "Vous n'avez pas de compte ?",
        signUpBtn: "S'inscrire",
      },
      signInPage: {
        signInLabel: "Se connecter",
        orLabel: "ou",
        userNameLabel: "Vous n'avez pas de compte ?",
        passwordLabel: "Mot de passe",
        signinBtn: "Se connecter",
      },
      signUpPage: {
        subscriptionLabel: "Abonnement",
        orLabel: "ou",
        firstNameLabel: "Prénom",
        lastNameLabel: "Nom de famille",
        emailLabel: "Adresse e-mail",
        mobileLabel: "Numéro de portable",
        passwordLabel: "Mot de passe",
        privacyPara: "J'accepte la politique de confidentialité d'icons4good",
        privacyanchor: "politique de confidentialité",
        termsPara: "e suis d'accord avec les termes et conditions d'icons4good",
        termsAnchor: "termes et conditions",
        declarationPara: "Je confirme que j'ai 18 ans ou plus",
        submitBtn: "Soumettre",
      },
      thankPage: {
        thankMsg:
          "Merci d'avoir soumis votre photo Vous recevrez un email lorsqu'elle sera ajoutée à la mosaïque",
        back: "Ajouter plus de photos",
      },
      mosiacSecondPage: {
        uploadBtn: "Télécharger une image",
        choseFileUpld: "Choisissez le fichier à télécharger",
        addPhotoBtn: "Ajouter un fichier photo",
        confrmMsg:
          "confirmer que j'ai le droit d'utiliser le fichier image que je télécharge",
      },
      paymentPage: {
        paymentParaOne: "Ajoutez votre image à la mosaïque et conservez-la",
        paymentParaTwo: "Payez maintenant",
        paymentParaThree: "€ 2.00",
        paymentParaFour:
          "Donnons une partie du montant à un organisme de bienfaisance de notre choix",
        paymentbuttonOne: "Paiement",
        paymentBtnTwo: "Sans don",
      },
    },
    spanish: {
      homePage: {
        topBar: "",
        centerMsg: "¿Eres capaz de encontrar el mosaico?",
        buttonOne: "Haga clic y apunte",
        buttonTwo: "Sobre nosotros",
      },
      infoPop: {
        lineOne:
          "Bridge of Love es un mosaico de imágenes que conectan personas y lugares.",
        lineTwo: "Sube tu propia imagen y compártela con otros",
        lineThree:
          "Busque imágenes, encuentre sus propias imágenes y explore imágenes de otras ciudades",
      },
      mosiacPage: {
        lineOne: "Haz zoom en el mosaico para ver todas las imágenes.",
        lineTwo: "Busca imágenes en el mosaico Nombres de pueblos",
        lineThree: "Registrarse / iniciar sesión subir fotos en el mosaico",
        buttonText: "Sé parte del mosaico",
      },
      signInInfoPage: {
        signInBtn: " Iniciar sesión",
        paraLIne: "-- o inicia sesión con --",
        dontAcntLine: "¿No tienes una cuenta?",
        signUpBtn: "Inscribirse",
      },
      signInPage: {
        signInLabel: "Iniciar sesión",
        orLabel: "o",
        userNameLabel: "¿No tienes una cuenta?",
        passwordLabel: "Contraseña",
        signinBtn: "Iniciar sesión",
      },
      signUpPage: {
        subscriptionLabel: "Suscripción",
        orLabel: "o",
        firstNameLabel: "Nombre de pila",
        lastNameLabel: "Apellido",
        emailLabel: "Dirección de correo electrónico",
        mobileLabel: "Número de teléfono móvil",
        passwordLabel: "Contraseña",
        privacyPara: "Acepto la política de privacidad de Icons4good",
        privacyanchor: "política de privacidad",
        termsPara:
          "Estoy de acuerdo con los términos y condiciones de Icons4good",
        termsAnchor: "Términos y condiciones",
        declarationPara: "Confirmo que tengo 18 años o más",
        submitBtn: "Entregar",
      },
      thankPage: {
        thankMsg:
          "Gracias por enviar su imagen. Recibirá un correo electrónico cuando se agregará al mosaico.",
        back: "Añadir más fotos",
      },
      mosiacSecondPage: {
        uploadBtn: "Cargar imagen",
        choseFileUpld: "Elige un archivo para subir",
        addPhotoBtn: "Agregar archivo de foto",
        confrmMsg:
          "Confirmo que tengo derecho a utilizar el archivo de imagen que estoy subiendo.",
      },
      paymentPage: {
        paymentParaOne: "Añade tu imagen al mosaico y mantenla allí.",
        paymentParaTwo: "Pagar ahora",
        paymentParaThree: "€ 2.00",
        paymentParaFour:
          "Demos una parte del importe a una organización benéfica de nuestra elección.",
        paymentbuttonOne: "Pago",
        paymentBtnTwo: "Sin donación",
      },
    },
    german: {
      homePage: {
        topBar: "",
        centerMsg: "Können Sie das Mosaik finden?",
        buttonOne: "Klicken und zielen",
        buttonTwo: "Über uns",
      },
      infoPop: {
        lineOne:
          "Bridge of Love ist ein Mosaik aus Bildern, die Menschen und Orte verbinden",
        lineTwo:
          "Laden Sie Ihr eigenes Bild hoch und teilen Sie es mit anderen",
        lineThree:
          "Suchen Sie nach Bildern, finden Sie Ihre eigenen Bilder und erkunden Sie Bilder aus anderen Städten",
      },
      mosiacPage: {
        lineOne: "Vergrößern Sie das Mosaik, um alle Bilder zu sehen",
        lineTwo: "Suchen Sie nach Bildern im Mosaik Namen Städte",
        lineThree: "Registrieren / anmelden Bilder im Mosaik hochladen",
        buttonText: "Werden Sie Teil des Mosaiks",
      },
      signInInfoPage: {
        signInBtn: "Anmelden",
        paraLIne: "-- oder melden Sie sich an mit --",
        dontAcntLine: "Sie haben noch kein Konto?",
        signUpBtn: "Melden Sie sich an",
      },
      signInPage: {
        signInLabel: "Anmelden",
        orLabel: "oder",
        userNameLabel: "Sie haben noch kein Konto?",
        passwordLabel: "Passwort",
        signinBtn: "Anmelden",
      },
      signUpPage: {
        subscriptionLabel: "Abonnement",
        orLabel: "oder",
        firstNameLabel: "Vorname",
        lastNameLabel: "Familienname, Nachname",
        emailLabel: "E-Mail-Adresse",
        mobileLabel: "Handynummer",
        passwordLabel: "Passwort",
        privacyPara: "Ich stimme der Datenschutzrichtlinie vonicons4good zu",
        privacyanchor: "Datenschutzrichtlinie",
        termsPara:
          "Ich stimme den allgemeinen Geschäftsbedingungen vonicons4good zu",
        termsAnchor: "Terms & amp; Bedingungen",
        declarationPara: "Ich bestätige, dass ich mindestens 18 Jahre alt bin",
        submitBtn: "Einreichen",
      },
      thankPage: {
        thankMsg:
          "Vielen Dank für die Übermittlung Ihres Bildes. Sie erhalten eine E-Mail, wenn es dem Mosaik hinzugefügt wird",
        back: "Fügen Sie weitere Bilder hinzu",
      },
      mosiacSecondPage: {
        uploadBtn: "Bild hochladen",
        choseFileUpld: "Datei zum Hochladen auswählen",
        addPhotoBtn: "Fotodatei hinzufügen",
        confrmMsg:
          "Bestätige, dass ich das Recht habe, die von mir hochgeladene Bilddatei zu verwenden",
      },
      paymentPage: {
        paymentParaOne:
          "Fügen Sie Ihr Bild dem Mosaik hinzu und behalten Sie es dort",
        paymentParaTwo: "Zahlen Sie jetzt",
        paymentParaThree: "€ 2.00",
        paymentParaFour:
          "Lassen Sie uns einen Teil des Betrags an eine Wohltätigkeitsorganisation unserer Wahl spenden",
        paymentbuttonOne: "Zahlung",
        paymentBtnTwo: "Ohne Spende",
      },
    },
    italian: {
      homePage: {
        topBar: "",
        centerMsg: "Riesci a trovare il mosaico?",
        buttonOne: "Fai clic e scegli come target",
        buttonTwo: "Chi siamo",
      },
      infoPop: {
        lineOne:
          "Bridge of Love è un mosaico di immagini che collega persone e luoghi",
        lineTwo: "Carica la tua foto e condividila con gli altri",
        lineThree:
          "Cerca immagini e trova le tue immagini ed esplora immagini di altre città",
      },
      mosiacPage: {
        lineOne: "Ingrandisci il mosaico per vedere tutte le immagini",
        lineTwo: "Cerca le immagini nel mosaico Nomi città",
        lineThree: "Iscriviti/accedi carica le immagini nel mosaico",
        buttonText: "Diventa parte del mosaico",
      },
      signInInfoPage: {
        signInBtn: "Registrazione",
        paraLIne: "-- oppure accedi con --",
        dontAcntLine: "Non hai un account?",
        signUpBtn: "Iscrizione",
      },
      signInPage: {
        signInLabel: "Registrazione",
        orLabel: "O",
        userNameLabel: "Non hai un account?",
        passwordLabel: "Parola d'ordine",
        signinBtn: "Registrazione",
      },
      signUpPage: {
        subscriptionLabel: "Sottoscrizione",
        orLabel: "O",
        firstNameLabel: "Nome di battesimo",
        lastNameLabel: "Cognome",
        emailLabel: "Indirizzo e-mail",
        mobileLabel: "Numero di cellulare",
        passwordLabel: "Parola d'ordine",
        privacyPara:
          "Sono d'accordo con l'informativa sulla privacy di Icons4Good",
        privacyanchor: "politica sulla riservatezza",
        termsPara: "Sono d'accordo con i termini e le condizioni di Icons4Good",
        termsAnchor: "Termini & Condizioni",
        declarationPara: "Confermo di avere almeno 18 anni",
        submitBtn: "Invia",
      },
      thankPage: {
        thankMsg:
          "Grazie per aver inviato la tua foto Riceverai un'e-mail quando verrà aggiunta al mosaico",
        back: "Aggiungi altre immagini",
      },
      mosiacSecondPage: {
        uploadBtn: "Carica immagine",
        choseFileUpld: "Scegli il file da caricare",
        addPhotoBtn: "Aggiungi file di foto",
        confrmMsg:
          "confermo di avere il diritto di utilizzare il file immagine che sto caricando",
      },
      paymentPage: {
        paymentParaOne: "Aggiungi la tua immagine al mosaico e mantienila lì",
        paymentParaTwo: "Paga ora",
        paymentParaThree: "€ 2.00",
        paymentParaFour:
          "Diamo una parte dell'importo a un ente di beneficenza di nostra scelta",
        paymentbuttonOne: "Pagamento",
        paymentBtnTwo: "Senza donazione",
      },
    },
  };

  var value =
    $("#selectLanguageId").val() || localStorage.getItem("storedLanguage");
  $(".paraTopCLs").empty().append(languages[value]?.homePage?.topBar);
  $(".centerParaCLs").empty().append(languages[value]?.homePage?.centerMsg);
  $(".buttonOne").empty().append(languages[value]?.homePage?.buttonOne);
  $(".buttonTwo").empty().append(languages[value]?.homePage?.buttonTwo);
  $(".infoLineOne").empty().append(languages[value]?.infoPop?.lineOne);
  $(".infoLineTwo").empty().append(languages[value]?.infoPop?.lineTwo);
  $(".infoLineThree").empty().append(languages[value]?.infoPop?.lineThree);
  $(".mosiacLineOne").empty().append(languages[value]?.mosiacPage?.lineOne);
  $(".mosiacLineTwo").empty().append(languages[value]?.mosiacPage?.lineTwo);
  $(".mosiacLineThree").empty().append(languages[value]?.mosiacPage?.lineThree);
  $(".mosiacButton").empty().append(languages[value]?.mosiacPage?.buttonText);
  $(".signInInforSignInBtn")
    .empty()
    .append(languages[value]?.signInInfoPage?.signInBtn);
  $(".signInInforParaLine")
    .empty()
    .append(languages[value]?.signInInfoPage?.paraLIne);
  $(".signInInforDontaccnt")
    .empty()
    .append(languages[value]?.signInInfoPage?.dontAcntLine);
  $(".signInInforSignUp")
    .empty()
    .append(languages[value]?.signInInfoPage?.signUpBtn);
  $(".signInInsignLabl")
    .empty()
    .append(languages[value]?.signInPage?.signInLabel);
  $(".signInInorLabl").empty().append(languages[value]?.signInPage?.orLabel);
  $(".signInInUserLabl")
    .empty()
    .append(languages[value]?.signInPage?.userNameLabel);
  $(".signInInPwdLabl")
    .empty()
    .append(languages[value]?.signInPage?.passwordLabel);
  $(".signInInSignIn").empty().append(languages[value]?.signInPage?.signinBtn);
  $(".signUpsubsLabel")
    .empty()
    .append(languages[value]?.signUpPage?.subscriptionLabel);
  $(".signUpOrlabel").empty().append(languages[value]?.signUpPage?.orLabel);
  $(".signUpFirstNameLabel")
    .empty()
    .append(languages[value]?.signUpPage?.firstNameLabel);
  $(".signUpLastNameLabel")
    .empty()
    .append(languages[value]?.signUpPage?.lastNameLabel);
  $(".signUpEmailLabel")
    .empty()
    .append(languages[value]?.signUpPage?.emailLabel);
  $(".signUpMobileLabel")
    .empty()
    .append(languages[value]?.signUpPage?.mobileLabel);
  $(".signUpPasswordLabel")
    .empty()
    .append(languages[value]?.signUpPage?.passwordLabel);
  $(".signUpPrivecyPara")
    .empty()
    .append(
      languages[value]?.signUpPage?.privacyPara +
        ' <a class="colorCls" href="policy.html" > ' +
        languages[value]?.signUpPage?.privacyanchor +
        "</a>"
    );
  $(".signUpTermsPara")
    .empty()
    .append(
      languages[value]?.signUpPage?.termsPara +
        '<a class="colorCls signUpTermsAnchor" href="tearmsAndCondition.html" > ' +
        languages[value]?.signUpPage?.termsAnchor +
        "</a>"
    );
  $(".signUpDeclerationPara")
    .empty()
    .append(languages[value]?.signUpPage?.declarationPara);
  $(".signUpBtn").empty().append(languages[value]?.signUpPage?.submitBtn);
  $(".thankMsg").empty().append(languages[value]?.thankPage?.thankMsg);
  $(".backBtn").empty().append(languages[value]?.thankPage?.back);
  $(".mosiacSecondUploadBtn")
    .empty()
    .append(
      '<img src="images/Upload.png"  class="w-30px " alt="Image 1" />' +
        languages[value]?.mosiacSecondPage?.uploadBtn
    );
  $(".mosiacSecondChoseFIleUpldBtn")
    .empty()
    .append(languages[value]?.mosiacSecondPage?.choseFileUpld);
  $(".mosiacSecondAddPhotoBtn")
    .empty()
    .append(languages[value]?.mosiacSecondPage?.addPhotoBtn);
  $(".mosiacSecondCnfrmMsg")
    .empty()
    .append(languages[value]?.mosiacSecondPage?.confrmMsg);
  $(".paymentParaOne")
    .empty()
    .append(languages[value]?.paymentPage?.paymentParaOne);
  $(".paymentParaTwo")
    .empty()
    .append(languages[value]?.paymentPage?.paymentParaTwo);
  $(".paymentParaThree")
    .empty()
    .append(languages[value]?.paymentPage?.paymentParaThree);
  $(".paymentParaFour")
    .empty()
    .append(languages[value]?.paymentPage?.paymentParaFour);
  $(".paymentBtnOne")
    .empty()
    .append(languages[value]?.paymentPage?.paymentbuttonOne);
  $(".paymentBtnTwo")
    .empty()
    .append(languages[value]?.paymentPage?.paymentBtnTwo);
  $(".centerParaCLsInfo")
    .empty()
    .append(languages[value]?.signInInfoPage?.center);

  localStorage.setItem("storedLanguage", value);
}
