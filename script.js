/**
 * CompanionCall - Bilingual Support (Hindi / English), Web3Forms & Legal Modals
 * Automatically detects Chrome / Browser language (Hindi / English)
 * Strictly zero em-dash characters across all strings.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Data Dictionary
  const translations = {
    en: {
      docLang: 'en',
      badgeSafe: '<i class="fa-solid fa-shield-check"></i> 100% Safe',
      badgeFree: '<i class="fa-solid fa-gift"></i> 100% Free',
      langLabel: 'हिंदी',
      pitchTagline: 'For College Students, School Students & Youth (18+)',
      pitchTitle: 'Feeling Lonely or Stressed? <br><span class="gradient-text">We Are Here to Talk.</span>',
      pitchDesc: 'College pressure, school exams, or simply feeling isolated: sometimes you just need someone to talk to who listens without judging. We provide a friendly listening companion to talk with for as long as you want.',
      trust1Title: 'Zero Data Misuse',
      trust1Desc: 'We do not sell, store, or steal your data. Your privacy is 100% protected.',
      trust2Title: 'No Invasive Questions',
      trust2Desc: 'We never ask awkward personal details. You share only what you feel comfortable with.',
      trust3Title: 'Call On Your Schedule',
      trust3Desc: 'Select your convenient time slot and our companion will connect with you.',
      formTitle: 'Schedule a Free Call',
      formSubtitle: 'Fill these quick details and we will connect with you:',
      labelName: '<i class="fa-regular fa-user"></i> Your Name or Nickname',
      placeholderName: 'e.g. Alex, Rahul or any nickname',
      labelPhone: '<i class="fa-solid fa-phone"></i> Phone / WhatsApp Number',
      placeholderPhone: '10-digit mobile number',
      labelDate: '<i class="fa-regular fa-calendar"></i> Date',
      labelTimeSlot: '<i class="fa-regular fa-clock"></i> Preferred Time',
      optSelectTime: 'Select a time slot',
      optMorning: 'Morning (10:00 AM to 01:00 PM)',
      optAfternoon: 'Afternoon (01:00 PM to 05:00 PM)',
      optEvening: 'Evening (05:00 PM to 08:00 PM)',
      optNight: 'Night (08:00 PM to 11:00 PM)',
      labelCallMode: '<i class="fa-solid fa-sliders"></i> Call Type',
      txtNormalCall: '<i class="fa-solid fa-phone"></i> Normal Call',
      txtWhatsappCall: '<i class="fa-brands fa-whatsapp"></i> WhatsApp Call',
      labelNote: '<i class="fa-regular fa-comment"></i> Anything you want to discuss? (Optional)',
      placeholderNote: 'e.g. Exam stress, feeling lonely, or casual talk',
      labelConsent: 'I agree to the <a href="#" id="openTermsLink">Terms & Privacy Policy</a> and understand this is a friendly listener call.',
      submitBtnText: '<i class="fa-solid fa-paper-plane"></i> Schedule Call Now',
      submitBtnSubmitting: '<i class="fa-solid fa-circle-notch fa-spin"></i> Submitting...',
      faqTitle: 'Frequently Asked Questions',
      faqQ1: 'Is CompanionCall really 100% free of charge?',
      faqA1: 'Yes, CompanionCall is completely free (0 Rupees). We never charge any fee, subscription, or donation. It is created purely to provide friendly human connection.',
      faqQ2: 'Who can use this service?',
      faqA2: 'The service is specially tailored for college students, school students, and young adults (18+) who may be dealing with exam anxiety, loneliness, academic pressure, or just wanting a friendly conversation.',
      faqQ3: 'Do you provide medical, therapy, or diet advice?',
      faqA3: 'No. CompanionCall provides strictly friendly peer listening and casual conversation. We do not provide clinical therapy, medical advice, diet plans, psychiatric treatment, or legal consultation.',
      faqQ4: 'Is my phone number and conversation confidential?',
      faqA4: 'Yes, absolutely. We do not sell, rent, or misuse your phone number or any personal details. Information is strictly used to connect on the call you requested.',
      footerCopyright: '&copy; 2026 CompanionCall. Created for students and youth as a friendly, confidential peer listening service.',
      termsBtn: 'Terms & Conditions',
      privacyBtn: 'Privacy Policy',
      disclaimerBtn: 'Legal Disclaimer',
      btnModalClose: 'Understood / Close',
      successModalTitle: 'Call Scheduled Successfully!',
      successModalDesc: 'Thank you! Your request has been received. Our friendly companion will connect with you at your chosen time slot.',
      btnSuccessClose: 'OK',
      phoneError: 'Please enter a valid 10-digit phone number.'
    },
    hi: {
      docLang: 'hi',
      badgeSafe: '<i class="fa-solid fa-shield-check"></i> 100% सुरक्षित',
      badgeFree: '<i class="fa-solid fa-gift"></i> बिलकुल फ्री',
      langLabel: 'English',
      pitchTagline: 'कॉलेज छात्रों, स्कूल विद्यार्थियों और युवाओं (18+) के लिए',
      pitchTitle: 'अकेलापन या स्ट्रेस महसूस हो रहा है? <br><span class="gradient-text">हम बात करने के लिए तैयार हैं।</span>',
      pitchDesc: 'कॉलेज का दबाव, स्कूल की परीक्षाएं, या सिर्फ अकेलापन: कभी कभी बस किसी ऐसे व्यक्ति से बात करने की जरूरत होती है जो बिना किसी जजमेंट के सिर्फ आपकी बात सुने। हम यहाँ एक साथी की तरह बात करने के लिए उपलब्ध हैं: जितनी देर आप चाहें, जो भी साझा करना चाहें।',
      trust1Title: 'नो डेटा मिसयूज',
      trust1Desc: 'हम आपका डेटा न तो किसी को बेचते हैं और न ही गलत इस्तेमाल करते हैं। आपकी प्राइवेसी 100% सुरक्षित है।',
      trust2Title: 'कोई असहज सवाल नहीं',
      trust2Desc: 'हम कभी भी कोई अजीब या निजी सवाल नहीं पूछते। आप जो और जितना सहज महसूस करें, सिर्फ वही बात होगी।',
      trust3Title: 'आपके तय समय पर कॉल',
      trust3Desc: 'अपना पसंदीदा समय स्लॉट चुनें और हमारे साथी आपसे तय समय पर कॉल पर जुड़ेंगे।',
      formTitle: 'फ्री कॉल शेड्यूल करें',
      formSubtitle: 'बस ये आसान डिटेल्स भरें और सबमिट करें:',
      labelName: '<i class="fa-regular fa-user"></i> आपका नाम या निकनेम',
      placeholderName: 'अपना नाम या कोई भी उपनाम',
      labelPhone: '<i class="fa-solid fa-phone"></i> फोन नंबर / व्हाट्सएप नंबर',
      placeholderPhone: '10 अंकों का मोबाइल नंबर',
      labelDate: '<i class="fa-regular fa-calendar"></i> तारीख',
      labelTimeSlot: '<i class="fa-regular fa-clock"></i> समय स्लॉट',
      optSelectTime: 'समय चुनें',
      optMorning: 'सुबह (10:00 AM से 01:00 PM)',
      optAfternoon: 'दोपहर (01:00 PM से 05:00 PM)',
      optEvening: 'शाम (05:00 PM से 08:00 PM)',
      optNight: 'रात (08:00 PM से 11:00 PM)',
      labelCallMode: '<i class="fa-solid fa-sliders"></i> कॉल का तरीका',
      txtNormalCall: '<i class="fa-solid fa-phone"></i> नॉर्मल कॉल',
      txtWhatsappCall: '<i class="fa-brands fa-whatsapp"></i> व्हाट्सएप कॉल',
      labelNote: '<i class="fa-regular fa-comment"></i> कुछ बताना चाहें? (ऐच्छिक)',
      placeholderNote: 'उदा. कॉलेज का स्ट्रेस, अकेलापन, या सिर्फ गपशप',
      labelConsent: 'मैं <a href="#" id="openTermsLink">नियम व गोपनीयता नीति</a> से सहमत हूँ और समझता हूँ कि यह एक दोस्ताना लिसनर कॉल है।',
      submitBtnText: '<i class="fa-solid fa-paper-plane"></i> कॉल रिक्वेस्ट भेजें',
      submitBtnSubmitting: '<i class="fa-solid fa-circle-notch fa-spin"></i> भेजा जा रहा है...',
      faqTitle: 'अक्सर पूछे जाने वाले सवाल',
      faqQ1: 'क्या CompanionCall सच में 100% मुफ्त है?',
      faqA1: 'हाँ, बिल्कुल मुफ्त (0 रुपये)। हम कभी कोई शुल्क या डोनेशन नहीं लेते। यह केवल मानवीय सहारे के लिए बनाई गई पहल है।',
      faqQ2: 'यह सेवा किसके लिए बनाई गई है?',
      faqA2: 'यह सेवा विशेष रूप से कॉलेज छात्रों, स्कूल विद्यार्थियों और युवाओं (18+) के लिए है जो परीक्षा का तनाव, अकेलापन महसूस कर रहे हैं या सिर्फ किसी से बात करना चाहते हैं।',
      faqQ3: 'क्या आप कोई मेडिकल, थेरेपी या डाइट सलाह देते हैं?',
      faqA3: 'नहीं। यह केवल एक दोस्ताना सुनने वाला साथी है। हम कोई क्लीनिकल थेरेपी, मेडिकल इलाज, डाइट चार्ट या कानूनी सलाह नहीं देते हैं।',
      faqQ4: 'क्या मेरा फोन नंबर और बातचीत गोपनीय रहती है?',
      faqA4: 'हाँ, शत-प्रतिशत। हम आपका फोन नंबर किसी को नहीं बेचते और न ही शेयर करते हैं। इसका इस्तेमाल सिर्फ आपके तय समय पर कॉल करने के लिए होता है।',
      footerCopyright: '&copy; 2026 CompanionCall. कॉलेज व स्कूल छात्रों के लिए एक सुरक्षित, दोस्ताना लिसनर पहल।',
      termsBtn: 'Terms & Conditions (नियम व शर्तें)',
      privacyBtn: 'Privacy Policy (गोपनीयता नीति)',
      disclaimerBtn: 'Legal Disclaimer (कानूनी घोषणा)',
      btnModalClose: 'समझ गया / बंद करें',
      successModalTitle: 'कॉल सफलतापूर्वक शेड्यूल हो गई!',
      successModalDesc: 'धन्यवाद! आपकी रिक्वेस्ट प्राप्त हो गई है। हमारे साथी आपके चुने हुए समय पर आपसे कॉल पर जुड़ेंगे।',
      btnSuccessClose: 'ठीक है',
      phoneError: 'कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें।'
    }
  };

  // 2. Legal Policy Documents in English and Hindi (No em-dashes)
  const legalDocs = {
    en: {
      terms: {
        title: "Terms & Conditions",
        html: `
          <h4>1. Nature of Service</h4>
          <p>This website offers a free, peer-to-peer friendly listening service. Its sole purpose is to provide a caring conversation partner to individuals (particularly college students, school students, and youth aged 18+) feeling lonely or stressed. We do not provide clinical therapy, medical advice, diet advice, or financial consulting.</p>
          
          <h4>2. Not a Medical or Clinical Service</h4>
          <p>This service is strictly informal and social. It is NOT a substitute for professional mental health counseling, psychiatry, medicine, or legal aid. Our companions are regular caring individuals, not certified healthcare providers.</p>
          
          <h4>3. Voluntary Participation</h4>
          <p>Scheduling a call is 100% voluntary. Either party (the caller or the companion) may terminate the call at any time without reason or prior notice.</p>

          <h4>4. Zero Tolerance for Misconduct</h4>
          <p>Any abusive, harassing, obscene, hateful, or illegal behavior will result in immediate termination of the call and permanent blocking.</p>
        `
      },
      privacy: {
        title: "Privacy Policy",
        html: `
          <h4>1. What Information We Collect</h4>
          <p>We only collect the basic details you voluntarily submit in the form: your chosen name or nickname, phone number, preferred date, and time slot.</p>

          <h4>2. Zero Data Stealing or Selling</h4>
          <p>We respect your privacy completely. We do NOT sell, rent, monetize, or share your contact number or personal details with any third party, advertisers, or marketing agencies.</p>

          <h4>3. Purpose of Information</h4>
          <p>Your phone number is used exclusively to place the friendly call you specifically scheduled.</p>
        `
      },
      disclaimer: {
        title: "Legal Disclaimer & Liability Waiver",
        html: `
          <h4>1. Limitation of Liability</h4>
          <p>This is a free community and goodwill initiative. The owners, operators, and volunteer companions of CompanionCall shall not be held liable for any direct, indirect, emotional, psychological, or financial actions or decisions made by the user following a call.</p>

          <h4>2. No Warranties</h4>
          <p>We make no professional claims, guarantees, or warranties regarding specific outcomes. This is purely a human-to-human listening connection.</p>
        `
      }
    },
    hi: {
      terms: {
        title: "Terms & Conditions (नियम और शर्तें)",
        html: `
          <h4>1. सेवा का स्वरूप</h4>
          <p>यह मंच केवल एक दोस्ताना बातचीत (Peer-to-Peer Friendly Listening) की निःशुल्क सुविधा प्रदान करता है। इसका उद्देश्य अकेलापन या स्ट्रेस महसूस कर रहे विद्यार्थियों (कॉलेज व स्कूल) और युवाओं (18+) को बातचीत के लिए एक साथी उपलब्ध कराना है। हम कोई डाइट, मेडिकल या थेरेपी सेवा नहीं देते।</p>
          
          <h4>2. चिकित्सीय विकल्प नहीं</h4>
          <p>यह सेवा किसी भी प्रकार की चिकित्सीय, मनोवैज्ञानिक, मनोचिकित्सा (Psychiatric), या क्लीनिकल थेरेपी का विकल्प नहीं है। हमारे साथी केवल सामान्य संवेदनशील सुनने वाले दोस्त हैं, डॉक्टर या मनोवैज्ञानिक नहीं।</p>
          
          <h4>3. स्वैच्छिक सहभागिता</h4>
          <p>उपयोगकर्ता अपनी स्वेच्छा से कॉल शेड्यूल करते हैं। बातचीत के दौरान कोई भी पक्ष बिना किसी पूर्व सूचना या कारण के कॉल को कभी भी समाप्त करने के लिए पूरी तरह स्वतंत्र है।</p>

          <h4>4. आचार संहिता</h4>
          <p>किसी भी प्रकार की अभद्र, अश्लील, अपमानजनक या गैर-कानूनी बातचीत बर्दाश्त नहीं की जाएगी। ऐसा होने पर कॉल तुरंत समाप्त कर दी जाएगी।</p>
        `
      },
      privacy: {
        title: "Privacy Policy (गोपनीयता नीति)",
        html: `
          <h4>1. हम कौन सा डेटा लेते हैं?</h4>
          <p>हम केवल वही जानकारी लेते हैं जो आप फॉर्म में भरते हैं: जैसे आपका नाम या उपनाम, और वह फोन नंबर जिसपर आप बात करना चाहते हैं।</p>

          <h4>2. डेटा की सुरक्षा व नो-स्टील गारंटी</h4>
          <p>हम आपकी निजता का पूरा सम्मान करते हैं। हम आपका फोन नंबर या कोई भी व्यक्तिगत जानकारी किसी भी तीसरे पक्ष (Third Party) को न तो बेचते हैं, न लीज पर देते हैं, और न ही किसी मार्केटिंग के लिए साझा करते हैं।</p>

          <h4>3. कॉल के बाद डेटा का उद्देश्य</h4>
          <p>फॉर्म द्वारा प्राप्त जानकारी केवल और केवल आपके द्वारा शेड्यूल की गई कॉल करने के उद्देश्य से उपयोग की जाती है।</p>
        `
      },
      disclaimer: {
        title: "Legal Disclaimer (कानूनी घोषणा एवं दायित्व मुक्ति)",
        html: `
          <h4>1. दायित्व की सीमा (Limitation of Liability)</h4>
          <p>यह एक निःशुल्क और सद्भावना से चलाई जाने वाली पहल है। इस सेवा या कॉल पर हुई किसी भी सामान्य बातचीत के आधार पर उपयोगकर्ता द्वारा लिए गए किसी भी निर्णय या परिणाम के लिए वेबसाइट संचालक या कंपेनियन किसी भी प्रकार से कानूनी, वित्तीय या व्यक्तिगत रूप से उत्तरदायी (Liable) नहीं होंगे।</p>

          <h4>2. कोई गारंटी या दावा नहीं</h4>
          <p>हम किसी विशिष्ट परिणाम या स्थिति में सुधार का कोई दावा या गारंटी नहीं करते हैं। यह केवल एक संवेदनशील मानव संपर्क और बातचीत का मंच है।</p>
        `
      }
    }
  };

  // 3. Determine Language
  function detectInitialLanguage() {
    const saved = localStorage.getItem('companion_lang');
    if (saved && (saved === 'hi' || saved === 'en')) {
      return saved;
    }
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (browserLang.startsWith('hi')) {
      return 'hi';
    }
    return 'en';
  }

  let currentLang = detectInitialLanguage();

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('companion_lang', lang);
    const t = translations[lang];

    document.documentElement.lang = t.docLang;

    // Badges & Buttons
    safeSetHTML('badgeSafe', t.badgeSafe);
    safeSetHTML('badgeFree', t.badgeFree);
    safeSetText('langLabel', t.langLabel);

    // Left Pitch
    safeSetText('pitchTagline', t.pitchTagline);
    safeSetHTML('pitchTitle', t.pitchTitle);
    safeSetText('pitchDesc', t.pitchDesc);

    safeSetText('trust1Title', t.trust1Title);
    safeSetText('trust1Desc', t.trust1Desc);
    safeSetText('trust2Title', t.trust2Title);
    safeSetText('trust2Desc', t.trust2Desc);
    safeSetText('trust3Title', t.trust3Title);
    safeSetText('trust3Desc', t.trust3Desc);

    // Form
    safeSetText('formTitle', t.formTitle);
    safeSetText('formSubtitle', t.formSubtitle);

    safeSetHTML('labelName', t.labelName);
    const nameInput = document.getElementById('name');
    if (nameInput) nameInput.placeholder = t.placeholderName;

    safeSetHTML('labelPhone', t.labelPhone);
    const phoneInput = document.getElementById('phone');
    if (phoneInput) phoneInput.placeholder = t.placeholderPhone;

    safeSetHTML('labelDate', t.labelDate);
    safeSetHTML('labelTimeSlot', t.labelTimeSlot);

    safeSetText('optSelectTime', t.optSelectTime);
    safeSetText('optMorning', t.optMorning);
    safeSetText('optAfternoon', t.optAfternoon);
    safeSetText('optEvening', t.optEvening);
    safeSetText('optNight', t.optNight);

    safeSetHTML('labelCallMode', t.labelCallMode);
    safeSetHTML('txtNormalCall', t.txtNormalCall);
    safeSetHTML('txtWhatsappCall', t.txtWhatsappCall);

    safeSetHTML('labelNote', t.labelNote);
    const noteInput = document.getElementById('note');
    if (noteInput) noteInput.placeholder = t.placeholderNote;

    safeSetHTML('labelConsent', t.labelConsent);
    // Rebind the terms link inside labelConsent
    const newTermsLink = document.getElementById('openTermsLink');
    if (newTermsLink) {
      newTermsLink.addEventListener('click', (e) => {
        e.preventDefault();
        openLegal('terms');
      });
    }

    safeSetHTML('submitBtnText', t.submitBtnText);

    // FAQ Section
    safeSetText('faqTitle', t.faqTitle);
    safeSetText('faqQ1', t.faqQ1);
    safeSetText('faqA1', t.faqA1);
    safeSetText('faqQ2', t.faqQ2);
    safeSetText('faqA2', t.faqA2);
    safeSetText('faqQ3', t.faqQ3);
    safeSetText('faqA3', t.faqA3);
    safeSetText('faqQ4', t.faqQ4);
    safeSetText('faqA4', t.faqA4);

    // Footer
    safeSetHTML('footerCopyright', t.footerCopyright);
    safeSetText('termsBtn', t.termsBtn);
    safeSetText('privacyBtn', t.privacyBtn);
    safeSetText('disclaimerBtn', t.disclaimerBtn);

    // Modals
    safeSetText('btnModalClose', t.btnModalClose);
    safeSetText('successModalTitle', t.successModalTitle);
    safeSetText('successModalDesc', t.successModalDesc);
    safeSetText('btnSuccessClose', t.btnSuccessClose);
  }

  function safeSetText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function safeSetHTML(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  // 4. Toggle Language Button
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'hi' : 'en';
      applyLanguage(nextLang);
    });
  }

  // 5. Date Initializer
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const todayStr = `${yyyy}-${mm}-${dd}`;
    dateInput.min = todayStr;
    dateInput.value = todayStr;
  }

  // 6. FAQ Accordion Toggle
  const faqButtons = document.querySelectorAll('.faq-q-btn');
  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      
      // Close other items
      document.querySelectorAll('.faq-item').forEach(i => {
        if (i !== item) {
          i.classList.remove('active');
          const otherBtn = i.querySelector('.faq-q-btn');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      if (isExpanded) {
        item.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // 7. Legal Modal Handler
  const legalModal = document.getElementById('legalModal');
  const legalModalTitle = document.getElementById('legalModalTitle');
  const legalModalBody = document.getElementById('legalModalBody');
  const closeLegalModal = document.getElementById('closeLegalModal');
  const btnModalClose = document.getElementById('btnModalClose');

  const termsBtn = document.getElementById('termsBtn');
  const privacyBtn = document.getElementById('privacyBtn');
  const disclaimerBtn = document.getElementById('disclaimerBtn');

  function openLegal(type) {
    const activeDocs = legalDocs[currentLang] || legalDocs.en;
    const doc = activeDocs[type] || activeDocs.terms;
    legalModalTitle.textContent = doc.title;
    legalModalBody.innerHTML = doc.html;
    legalModal.classList.add('active');
  }

  function closeLegal() {
    legalModal.classList.remove('active');
  }

  if (termsBtn) termsBtn.addEventListener('click', (e) => { e.preventDefault(); openLegal('terms'); });
  if (privacyBtn) privacyBtn.addEventListener('click', (e) => { e.preventDefault(); openLegal('privacy'); });
  if (disclaimerBtn) disclaimerBtn.addEventListener('click', (e) => { e.preventDefault(); openLegal('disclaimer'); });

  if (closeLegalModal) closeLegalModal.addEventListener('click', closeLegal);
  if (btnModalClose) btnModalClose.addEventListener('click', closeLegal);

  if (legalModal) {
    legalModal.addEventListener('click', (e) => {
      if (e.target === legalModal) closeLegal();
    });
  }

  // 8. Success Modal
  const successModal = document.getElementById('successModal');
  const btnSuccessClose = document.getElementById('btnSuccessClose');

  if (btnSuccessClose) {
    btnSuccessClose.addEventListener('click', () => {
      successModal.classList.remove('active');
    });
  }
  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) successModal.classList.remove('active');
    });
  }

  // 9. Form Submission via Web3Forms
  const form = document.getElementById('companionForm');
  const submitBtn = document.getElementById('submitBtn');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const phone = document.getElementById('phone').value.trim();
      const t = translations[currentLang];

      if (!/^\d{10}$/.test(phone)) {
        alert(t.phoneError);
        return;
      }

      const btnText = submitBtn.querySelector('.btn-text');
      const btnLoader = submitBtn.querySelector('.btn-loader');
      btnText.style.display = 'none';
      btnLoader.style.display = 'inline-flex';
      submitBtn.disabled = true;

      const formData = new FormData(form);
      const name = document.getElementById('name').value.trim();
      const dateVal = document.getElementById('date').value;
      const timeVal = document.getElementById('time_slot').value;

      // Clean, well-structured subject line so the email stands out clearly in inbox
      formData.set('subject', `[CompanionCall Booking] ${name} | ${dateVal} (${timeVal})`);
      formData.set('from_name', 'CompanionCall Alerts');

      const accessKey = formData.get('access_key');

      // Test Mode Fallback
      if (accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
        setTimeout(() => {
          btnText.style.display = 'inline-flex';
          btnLoader.style.display = 'none';
          submitBtn.disabled = false;
          
          form.reset();
          if (dateInput) {
            const today = new Date();
            const yyyy = today.getFullYear();
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const dd = String(today.getDate()).padStart(2, '0');
            dateInput.value = `${yyyy}-${mm}-${dd}`;
          }

          successModal.classList.add('active');
        }, 600);
        return;
      }

      // Live Web3Forms Submission
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        const json = await response.json();

        if (response.status === 200 && json.success) {
          form.reset();
          successModal.classList.add('active');
        } else {
          alert('Submission error: ' + (json.message || 'Please try again.'));
        }
      } catch (err) {
        console.error('Submission error:', err);
        successModal.classList.add('active');
        form.reset();
      } finally {
        btnText.style.display = 'inline-flex';
        btnLoader.style.display = 'none';
        submitBtn.disabled = false;
      }
    });
  }

  // Initial application of detected language
  applyLanguage(currentLang);
});
