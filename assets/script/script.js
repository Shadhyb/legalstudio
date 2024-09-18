function handleTranslate(language) {
  let enBtn = document.getElementById("en");
  let itBtn = document.getElementById("it");

  fetch("assets/script/language.json")
    .then((response) => response.json())
    .then((data) => {
      const translations = data[language];
      if (language === "en") {
        enBtn.classList.add("hidden");
        itBtn.classList.remove("hidden");
      } else {
        enBtn.classList.remove("hidden");
        itBtn.classList.add("hidden");
      }
      nav_who.innerHTML = translations.nav_who;
      nav_services.innerHTML = translations.nav_services;
      nav_cont.innerHTML = translations.nav_cont;
      hero.innerHTML = translations.hero;
      btn_contact.innerHTML = translations.btn_contact;
      who_title.innerHTML = translations.who_title;
      who_text.innerHTML = translations.who_text;
      services_title.innerHTML = translations.services_title;
      services_text.innerHTML = translations.services_text;
      legal_title.innerHTML = translations.legal_title;
      legal_text.innerHTML = translations.legal_text;
      family_title.innerHTML = translations.family_title;
      family_text.innerHTML = translations.family_text;
      commercial_title.innerHTML = translations.commercial_title;
      commercial_text.innerHTML = translations.commercial_text;
      estate_title.innerHTML = translations.estate_title;
      estate_text.innerHTML = translations.estate_text;
      labor_title.innerHTML = translations.labor_title;
      labor_title.innerHTML = translations.labor_title;
      labor_text.innerHTML = translations.labor_text;
      contact_title.innerHTML = translations.contact_title;
      contact_text.innerHTML = translations.contact_text;
      label_name.innerHTML = translations.label_name;
      label_surname.innerHTML = translations.label_surname;
      label_date.innerHTML = translations.label_date;
      btn_form.innerHTML = translations.btn_form;
      phone.innerHTML = translations.phone;
    })
    .catch((error) => {
      console.error(
        "Si è verificato un errore durante il recupero delle traduzioni:",
        error
      );
    });
}
