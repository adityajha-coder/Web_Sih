// main.js — cleaned and hardened
// Removed accidental markdown fences and added defensive checks for missing DOM elements.

const translations = {
    en: {
        appName: "CivicVoice",
        navFeatures: "Features",
        navProcess: "Process",
        navReports: "Reports",
        navRewards: "Rewards",
        navImpact: "Impact",
        navVoices: "Voices",
        navFaq: "FAQ",
        citizenLogin: "Citizen Login",
        officialLogin: "Official Login",
        navFeaturesMobile: "Features",
        navProcessMobile: "Process",
        navReportsMobile: "Reports",
        navRewardsMobile: "Rewards",
        navImpactMobile: "Impact",
        navVoicesMobile: "Voices",
        navFaqMobile: "FAQ",
        citizenLoginMobile: "Citizen Login",
        officialLoginMobile: "Official Login",
        heroTitle: "Your Voice, <br><span class=\"text-teal-600\">Our City's Future.</span>",
        heroSubtitle: "Report civic issues, track their resolution, and collaborate with your community to build a better neighborhood. It's civic engagement, simplified.",
        locationLabel: "Select your location to get started",
        selectState: "Select State",
        selectCity: "Select Area/City",
        makeReport: "Make a Report",
        featuresTag: "WHY CIVICVOICE?",
        featuresTitle: "A Platform Built for Change",
        feature1Title: "Accessible Reporting",
        feature1Desc: "Snap a photo or simply use your voice in any regional language to submit a report effortlessly.",
        feature2Title: "Transparent Tracking",
        feature2Desc: "Get real-time updates and notifications as your report moves from acknowledged to resolved.",
        feature3Title: "Community Prioritization",
        feature3Desc: "Upvote existing issues to highlight their priority. Let the authorities know what matters most.",
        feature4Title: "Hyperlocal Focus",
        feature4Desc: "Select your specific state and city to view and report issues that are relevant to your community.",
        feature5Title: "Earn Community Rewards",
        feature5Desc: "Get points for valid reports and verifications. Redeem them for cash rewards and climb the community leaderboard.",
        feature6Title: "Secure User Portals",
        feature6Desc: "Separate, secure login portals for citizens and government officials ensure data privacy and integrity.",
        processTag: "3 EASY STEPS",
        processTitle: "See It. Report It. Get It Fixed.",
        processSubtitle: "We've designed a simple, transparent process to connect you directly with the departments that can make a difference.",
        step1Title: "1. Report in Seconds",
        step1Desc: "Our intuitive form guides you to provide all necessary details quickly.",
        step2Title: "2. Direct to the Right Team",
        step2Desc: "We intelligently route your issue to the correct municipal department, saving time.",
        step3Title: "3. Close the Loop",
        step3Desc: "Get a final notification and photo proof when the issue is resolved.",
        reportsTag: "LIVE FEED",
        reportsTitle: "Live Community Reports",
        reportsSubtitle: "See what's happening in your community in real-time. Your engagement helps prioritize action.",
        ongoingIssuesTab: "Ongoing Issues",
        solvedIssuesTab: "Recently Solved",
        categoryRoads: "Roads",
        ongoingReport1Title: "Large Pothole on Main St.",
        categoryWaste: "Waste",
        ongoingReport2Title: "Garbage Overflow near Park",
        categoryInfrastructure: "Infrastructure",
        solvedReport1Title: "Broken Streetlight Fixed",
        statusResolved: "Resolved 4 days ago",
        rewardsTag: "BECOME A CHAMPION",
        rewardsTitle: "Earn Rewards for Your Contribution",
        rewardsSubtitle: "We believe active citizenship should be recognized. Our rewards system encourages you to make a tangible impact on your community.",
        reward1Title: "Report & Earn Points",
        reward1Desc: "Receive points for every valid issue you report that gets acknowledged by the authorities.",
        reward2Title: "Verify Resolutions",
        reward2Desc: "Help us confirm when an issue is properly resolved and earn bonus points for your verification.",
        reward3Title: "Redeem for Cash Rewards",
        reward3Desc: "Accumulate points and redeem them for exciting cash rewards, vouchers, and other perks.",
        redeemTitle: "Redeem Your Points",
        redeemSubtitle: "Turn your community efforts into tangible rewards. Here’s what you can get with your points.",
        yourBalance: "Your Balance",
        points: "Points",
        redeemCashTitle: "₹100 Cash Reward",
        redeemVoucherTitle: "Shopping Voucher",
        redeemButton: "Redeem",
        redeemMainButton: "Redeem Your Points",
        redeemModalTitle: "Choose Your Reward",
        redeemModalSubtitle: "Select one of the options below to redeem your points.",
        impactTitle: "Our Community's Scoreboard",
        impactSubtitle: "Small actions, when multiplied by thousands of people, can transform a city.",
        impact1: "Issues Resolved",
        impact2: "Active Citizens",
        impact3: "Average Rating",
        testimonialsTag: "REAL STORIES, REAL IMPACT",
        testimonialsTitle: "What Our Users Are Saying",
        testimonial1: "\"The overflowing garbage bin near my society was a constant problem. Reported it via CivicVoice, and the municipal team cleared it the very next day. This platform actually works!\"",
        testimonial1Location: "Mayur Vihar Resident, Delhi",
        testimonial2: "\"As a municipal officer, CivicVoice streamlines our workflow. The geotagged, photographic evidence is invaluable. It helps us prioritize and resolve citizen grievances faster than ever.\"",
        testimonial2Role: "Municipal Corporation Official",
        testimonial3: "\"It's empowering to see my report getting upvoted by neighbours. We managed to get a new streetlight installed in our lane by showing collective demand through the app.\"",
        testimonial3Location: "Dwarka Community Member",
        faqTag: "HAVE QUESTIONS?",
        faqTitle: "Frequently Asked Questions",
        faq1Question: "What kind of issues can I report?",
        faq1Answer: "You can report a wide range of non-emergency issues such as potholes, broken streetlights, garbage overflow, water logging, damaged public property, and more. If you're unsure, it's always best to report it.",
        faq2Question: "Is my data private?",
        faq2Answer: "Yes, absolutely. While the location and description of the issue are public, your personal information (name, contact details) is kept confidential and is only shared with the relevant municipal authorities for communication regarding your report.",
        faq3Question: "Is the service available in my city?",
        faq3Answer: "We are actively expanding our network of partner municipalities. Currently, we are operational in Delhi, Mumbai, and Bangalore. Sign up to be notified when we launch in your city!",
        askTitle: "Still Have Questions?",
        askSubtitle: "If you couldn't find an answer in our FAQ, feel free to ask us directly.",
        formName: "Your Name",
        formEmail: "Email Address",
        formQuestion: "Your Question",
        formSubmit: "Submit Question",
        ctaTitle: "Ready to Make a Difference?",
        ctaSubtitle: "Join thousands of citizens improving our city, one report at a time. It's free, easy, and effective.",
        ctaButton: "Sign Up & Start Reporting",
        footerAppName: "CivicVoice",
        footerSlogan: "Your Voice, Amplified.",
        footerPlatform: "Platform",
        footerFeatures: "Features",
        footerGov: "For Governments",
        footerSuccess: "Success Stories",
        footerCompany: "Company",
        footerAbout: "About Us",
        footerCareers: "Careers",
        footerContact: "Contact",
        footerLegal: "Legal",
        footerPrivacy: "Privacy Policy",
        footerTerms: "Terms of Service",
        footerConnect: "Connect",
        footerCredit: "&copy; 2025 CivicVoice. Made with ❤ in India.",
        modalCitizenTab: "Citizen",
        modalOfficialTab: "Official Login",
        modalCitizenTitle: "Welcome!",
        modalCitizenSubtitle: "Enter your details to login or sign up.",
        modalCitizenInputLabel: "Phone Number or Gmail",
        modalCitizenButton: "Send OTP",
        modalOfficialTitle: "Official Portal",
        modalOfficialSubtitle: "Login with your employee credentials.",
        modalOfficialInput1: "Employee ID",
        modalOfficialInput2: "Password",
        modalOfficialButton: "Login",
        modalForgotPassword: "Forgot password?",
        modalOtpTitle: "Enter OTP",
        modalOtpSubtitle: "An OTP has been sent to your device.",
        modalOtpButton: "Verify & Login",
        reportModalTitle: "Report a Civic Issue",
        reportStep1: "Details",
        reportStep2: "Location",
        reportStep3: "Submit",
        reportCategory: "Issue Category",
        reportPhoto: "Upload Photo",
        reportUpload: "Upload a file",
        reportDescription: "Description",
        reportLocationConfirm: "Please confirm the location of the issue.",
        reportAddress: "Address / Landmark",
        reportCurrentLocation: "Use my current location",
        reportContactInfo: "Provide your contact information (optional) to receive updates.",
        reportSuccessTitle: "Report Submitted!",
        reportSuccessSub: "Thank you for helping improve your community. Your report has been sent to the relevant department.",
        reportSuccessID: "Your Tracking ID is:",
        reportByVoice: "Record by Voice",
        listening: "Listening..."
    },
    hi: {
        appName: "सिविकवॉइस",
        navFeatures: "विशेषताएँ",
        navProcess: "प्रक्रिया",
        navReports: "रिपोर्ट",
        navRewards: "पुरस्कार",
        navImpact: "प्रभाव",
        navVoices: "आवाज़ें",
        navFaq: "FAQ",
        citizenLogin: "नागरिक लॉगिन",
        officialLogin: "आधिकारिक लॉगिन",
        navFeaturesMobile: "विशेषताएँ",
        navProcessMobile: "प्रक्रिया",
        navReportsMobile: "रिपोर्ट",
        navRewardsMobile: "पुरस्कार",
        navImpactMobile: "प्रभाव",
        navVoicesMobile: "आवाज़ें",
        navFaqMobile: "FAQ",
        citizenLoginMobile: "नागरिक लॉगिन",
        officialLoginMobile: "आधिकारिक लॉगिन",
        heroTitle: "आपकी आवाज़, <br><span class=\"text-teal-600\">हमारे शहर का भविष्य।</span>",
        heroSubtitle: "नागरिक मुद्दों की रिपोर्ट करें, उनके समाधान को ट्रैक करें, और एक बेहतर पड़ोस बनाने के लिए अपने समुदाय के साथ सहयोग करें। यह नागरिक जुड़ाव है, सरलीकृत।",
        locationLabel: "शुरू करने के लिए अपना स्थान चुनें",
        selectState: "राज्य चुनें",
        selectCity: "क्षेत्र/शहर चुनें",
        makeReport: "रिपोर्ट करें",
        featuresTag: "सिविकवॉइस क्यों?",
        featuresTitle: "बदलाव के लिए बनाया गया एक मंच",
        feature1Title: "सुलभ रिपोर्टिंग",
        feature1Desc: "एक तस्वीर खींचें या बस अपनी क्षेत्रीय भाषा में अपनी आवाज़ का उपयोग करके आसानी से रिपोर्ट दर्ज करें।",
        feature2Title: "पारदर्शी ट्रैकिंग",
        feature2Desc: "आपकी रिपोर्ट स्वीकृत होने से लेकर हल होने तक वास्तविक समय के अपडेट और सूचनाएं प्राप्त करें।",
        feature3Title: "सामुदायिक प्राथमिकता",
        feature3Desc: "मौजूदा मुद्दों को उनकी प्राथमिकता को उजागर करने के लिए अपवोट करें। अधिकारियों को बताएं कि सबसे ज्यादा क्या मायने रखता है।",
        feature4Title: "हाइपरलोकल फोकस",
        feature4Desc: "अपने समुदाय से संबंधित मुद्दों को देखने और रिपोर्ट करने के लिए अपना विशिष्ट राज्य और शहर चुनें।",
        feature5Title: "सामुदायिक पुरस्कार अर्जित करें",
        feature5Desc: "मान्य रिपोर्ट और सत्यापन के लिए अंक प्राप्त करें। उन्हें नकद पुरस्कार के लिए भुनाएं और सामुदायिक लीडरबोर्ड पर चढ़ें।",
        feature6Title: "सुरक्षित उपयोगकर्ता पोर्टल",
        feature6Desc: "नागरिकों और सरकारी अधिकारियों के लिए अलग, सुरक्षित लॉगिन पोर्टल डेटा गोपनीयता और अखंडता सुनिश्चित करते हैं।",
        processTag: "३ आसान चरण",
        processTitle: "देखें। रिपोर्ट करें। इसे ठीक करवाएं।",
        processSubtitle: "हमने आपको सीधे उन विभागों से जोड़ने के लिए एक सरल, पारदर्शी प्रक्रिया तैयार की है जो एक अंतर ला सकते हैं।",
        step1Title: "१. सेकंड में रिपोर्ट करें",
        step1Desc: "हमारा सहज ज्ञान युक्त फॉर्म आपको सभी आवश्यक विवरण जल्दी से प्रदान करने के लिए मार्गदर्शन करता है।",
        step2Title: "२. सही टीम को सीधे भेजें",
        step2Desc: "हम बुद्धिमानी से आपके मुद्दे को सही नगरपालिका विभाग में भेजते हैं, जिससे समय की बचत होती है।",
        step3Title: "३. लूप को बंद करें",
        step3Desc: "समस्या हल होने पर अंतिम सूचना और फोटो प्रमाण प्राप्त करें।",
        reportsTag: "लाइव फीड",
        reportsTitle: "लाइव सामुदायिक रिपोर्ट",
        reportsSubtitle: "देखें कि आपके समुदाय में वास्तविक समय में क्या हो रहा है। आपकी सहभागिता कार्रवाई को प्राथमिकता देने में मदद करती है।",
        ongoingIssuesTab: "चल रहे मुद्दे",
        solvedIssuesTab: "हाल ही में हल",
        categoryRoads: "सड़कें",
        ongoingReport1Title: "मुख्य सड़क पर बड़ा गड्ढा।",
        categoryWaste: "कचरा",
        ongoingReport2Title: "पार्क के पास कचरा ओवरफ्लो",
        categoryInfrastructure: "आधारभूत संरचना",
        solvedReport1Title: "टूटी स्ट्रीटलाइट ठीक हुई",
        statusResolved: "4 दिन पहले हल किया गया",
        rewardsTag: "एक चैंपियन बनें",
        rewardsTitle: "अपने योगदान के लिए पुरस्कार अर्जित करें",
        rewardsSubtitle: "हमारा मानना ​​है कि सक्रिय नागरिकता को मान्यता मिलनी चाहिए। हमारी पुरस्कार प्रणाली आपको अपने समुदाय पर एक ठोस प्रभाव डालने के लिए प्रोत्साहित करती है।",
        reward1Title: "रिपोर्ट करें और अंक अर्जित करें",
        reward1Desc: "आपके द्वारा रिपोर्ट किए गए प्रत्येक मान्य मुद्दे के लिए अंक प्राप्त करें जिसे अधिकारी स्वीकार करते हैं।",
        reward2Title: "संकल्पों को सत्यापित करें",
        reward2Desc: "जब कोई समस्या ठीक से हल हो जाए तो हमें पुष्टि करने में मदद करें और अपने सत्यापन के लिए बोनस अंक अर्जित करें।",
        reward3Title: "नकद पुरस्कार के लिए भुनाएं",
        reward3Desc: "अंक जमा करें और उन्हें रोमांचक नकद पुरस्कार, वाउचर और अन्य भत्तों के लिए भुनाएं।",
        redeemTitle: "अपने अंक भुनाएं",
        redeemSubtitle: "अपने सामुदायिक प्रयासों को वास्तविक पुरस्कारों में बदलें। यहाँ आप अपने अंकों के साथ क्या प्राप्त कर सकते हैं।",
        yourBalance: "आपका बैलेंस",
        points: "अंक",
        redeemCashTitle: "₹100 नकद इनाम",
        redeemVoucherTitle: "शॉपिंग वाउचर",
        redeemButton: "भुनाएं",
        redeemMainButton: "अपने अंक भुनाएं",
        redeemModalTitle: "अपना इनाम चुनें",
        redeemModalSubtitle: "अपने अंक भुनाने के लिए नीचे दिए गए विकल्पों में से एक का चयन करें।",
        impactTitle: "हमारे समुदाय का स्कोरबोर्ड",
        impactSubtitle: "छोटे कार्य, जब हजारों लोगों द्वारा गुणा किए जाते हैं, तो एक शहर को बदल सकते हैं।",
        impact1: "मुद्दे हल हुए",
        impact2: "सक्रिय नागरिक",
        impact3: "औसत रेटिंग",
        testimonialsTag: "असली कहानियाँ, असली प्रभाव",
        testimonialsTitle: "हमारे उपयोगकर्ता क्या कह रहे हैं",
        testimonial1: "\"मेरे समाज के पास ओवरफ्लो हो रहा कूड़ेदान एक निरंतर समस्या थी। सिविकवॉइस के माध्यम से इसकी सूचना दी, और अगले ही दिन नगर निगम की टीम ने इसे साफ कर दिया। यह मंच वास्तव में काम करता है!\"",
        testimonial1Location: "मयूर विहार निवासी, दिल्ली",
        testimonial2: "\"एक नगर निगम अधिकारी के रूप में, सिविकवॉइस हमारे वर्कफ़्लो को सुव्यवस्थित करता है। जियोटैग किए गए, फोटोग्राफिक सबूत अमूल्य हैं। यह हमें नागरिक शिकायतों को प्राथमिकता देने और तेजी से हल करने में मदद करता है।\"",
        testimonial2Role: "नगर निगम अधिकारी",
        testimonial3: "\"यह देखकर सशक्त महसूस होता है कि मेरी रिपोर्ट को पड़ोसियों द्वारा अपवोट किया जा रहा है। हमने ऐप के माध्यम से सामूहिक मांग दिखाकर अपनी गली में एक नई स्ट्रीटलाइट लगवाई।\"",
        testimonial3Location: "द्वारका समुदाय सदस्य",
        faqTag: "प्रश्न हैं?",
        faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
        faq1Question: "मैं किस तरह के मुद्दों की रिपोर्ट कर सकता हूं?",
        faq1Answer: "आप गड्ढों, टूटी स्ट्रीटलाइट्स, कचरा ओवरफ्लो, जलभराव, क्षतिग्रस्त सार्वजनिक संपत्ति, और बहुत कुछ जैसे गैर-आपातकालीन मुद्दों की एक विस्तृत श्रृंखला की रिपोर्ट कर सकते हैं। यदि आप अनिश्चित हैं, तो रिपोर्ट करना हमेशा सबसे अच्छा होता है।",
        faq2Question: "क्या मेरा डेटा निजी है?",
        faq2Answer: "हाँ, बिल्कुल। जबकि मुद्दे का स्थान और विवरण सार्वजनिक है, आपकी व्यक्तिगत जानकारी (नाम, संपर्क विवरण) गोपनीय रखी जाती है और केवल आपकी रिपोर्ट के संबंध में संचार के लिए संबंधित नगरपालिका अधिकारियों के साथ साझा की जाती है।",
        faq3Question: "क्या यह सेवा मेरे शहर में उपलब्ध है?",
        faq3Answer: "हम सक्रिय रूप से अपने भागीदार नगर पालिकाओं के नेटवर्क का विस्तार कर रहे हैं। वर्तमान में, हम दिल्ली, मुंबई और बैंगलोर में चालू हैं। जब हम आपके शहर में लॉन्च करेंगे तो अधिसूचित होने के लिए साइन अप करें!",
        askTitle: "अभी भी प्रश्न हैं?",
        askSubtitle: "यदि आपको हमारे FAQ में कोई उत्तर नहीं मिला, तो बेझižक हमसे सीधे पूछें।",
        formName: "आपका नाम",
        formEmail: "ईमेल पता",
        formQuestion: "आपका सवाल",
        formSubmit: "प्रश्न भेजें",
        ctaTitle: "एक अंतर बनाने के लिए तैयार हैं?",
        ctaSubtitle: "एक समय में एक रिपोर्ट, हमारे शहर को बेहतर बनाने में हजारों नागरिकों से जुड़ें। यह मुफ़्त, आसान और प्रभावी है।",
        ctaButton: "साइन अप करें और रिपोर्टिंग शुरू करें",
        footerAppName: "सिविकवॉइस",
        footerSlogan: "आपकी आवाज़, प्रवर्धित।",
        footerPlatform: "मंच",
        footerFeatures: "विशेषताएँ",
        footerGov: "सरकारों के लिए",
        footerSuccess: "सफलता की कहानियाँ",
        footerCompany: "कंपनी",
        footerAbout: "हमारे बारे में",
        footerCareers: "करियर",
        footerContact: "संपर्क",
        footerLegal: "कानूनी",
        footerPrivacy: "गोपनीयता नीति",
        footerTerms: "सेवा की शर्तें",
        footerConnect: "जुड़ें",
        footerCredit: "&copy; २०२५ सिविकवॉइस। भारत में ❤ के साथ बनाया गया।",
        modalCitizenTab: "नागरिक",
        modalOfficialTab: "आधिकारिक लॉगिन",
        modalCitizenTitle: "स्वागत है!",
        modalCitizenSubtitle: "लॉगिन या साइन अप करने के लिए अपना विवरण दर्ज करें।",
        modalCitizenInputLabel: "फोन नंबर या जीमेल",
        modalCitizenButton: "ओटीपी भेजें",
        modalOfficialTitle: "आधिकारिक पोर्टल",
        modalOfficialSubtitle: "अपने कर्मचारी क्रेडेंशियल्स के साथ लॉगिन करें।",
        modalOfficialInput1: "कर्मचारी आयडी",
        modalOfficialInput2: "पासवर्ड",
        modalOfficialButton: "लॉगिन",
        modalForgotPassword: "पासवर्ड भूल गए?",
        modalOtpTitle: "ओटीपी दर्ज करें",
        modalOtpSubtitle: "आपके डिवाइस पर एक ओटीपी भेजा गया है।",
        modalOtpButton: "सत्यापित करें और लॉगिन करें",
        reportModalTitle: "नागरिक समस्या की रिपोर्ट करें",
        reportStep1: "विवरण",
        reportStep2: "स्थान",
        reportStep3: "सबमिट करें",
        reportCategory: "समस्या श्रेणी",
        reportPhoto: "फोटो अपलोड करें",
        reportUpload: "एक फ़ाइल अपलोड करें",
        reportDescription: "विवरण",
        reportLocationConfirm: "कृपया समस्या का स्थान पुष्टि करें।",
        reportAddress: "पता / लैंडमार्क",
        reportCurrentLocation: "मेरे वर्तमान स्थान का उपयोग करें",
        reportContactInfo: "अपडेट प्राप्त करने के लिए अपनी संपर्क जानकारी (वैकल्पिक) प्रदान करें।",
        reportSuccessTitle: "रिपोर्ट सबमिट की गई!",
        reportSuccessSub: "अपने समुदाय को बेहतर बनाने में मदद करने के लिए धन्यवाद। आपकी रिपोर्ट संबंधित विभाग को भेज दी गई है।",
        reportSuccessID: "आपका ट्रैकिंग आईडी है:",
        reportByVoice: "आवाज़ से रिकॉर्ड करें",
        listening: "सुन रहा है..."
    }
};

const locations = {
    "Andaman and Nicobar Islands": ["Port Blair"],
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati"],
    "Arunachal Pradesh": ["Itanagar", "Tawang", "Ziro"],
    "Assam": ["Guwahati", "Dibrugarh", "Silchar"],
    "Bihar": ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga", "Madhubani"],
    "Chandigarh": ["Chandigarh"],
    "Chhattisgarh": ["Raipur", "Bilaspur", "Durg"],
    "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa"],
    "Delhi": ["New Delhi", "North Delhi", "North West Delhi", "West Delhi", "South West Delhi", "South Delhi", "South East Delhi", "Central Delhi", "North East Delhi", "Shahdara", "East Delhi"],
    "Goa": ["Panaji", "Margao", "Vasco da Gama"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
    "Haryana": ["Gurgaon", "Faridabad", "Chandigarh", "Panipat"],
    "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala"],
    "Jammu and Kashmir": ["Srinagar", "Jammu"],
    "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad"],
    "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi"],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode"],
    "Ladakh": ["Leh", "Kargil"],
    "Lakshadweep": ["Kavaratti"],
    "Madhya Pradesh": ["Indore", "Bhopal", "Jabalpur", "Gwalior"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane"],
    "Manipur": ["Imphal"],
    "Meghalaya": ["Shillong"],
    "Mizoram": ["Aizawl"],
    "Nagaland": ["Kohima", "Dimapur"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela"],
    "Puducherry": ["Puducherry"],
    "Punjab": ["Ludhiana", "Amritsar", "Jalandhar"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
    "Sikkim": ["Gangtok"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
    "Telangana": ["Hyderabad", "Warangal", "Nizamabad"],
    "Tripura": ["Agartala"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Noida", "Agra", "Varanasi"],
    "Uttarakhand": ["Dehradun", "Haridwar", "Rishikesh"],
    "West Bengal": ["Kolkata", "Howrah", "Asansol", "Silguri"]
};

// Utility: get element by id, returns null-safe element
function el(id) {
    if (!id) return null;
    return document.getElementById(id);
}

function on(elm, event, handler) {
    if (!elm) return;
    elm.addEventListener(event, handler);
}

// Single modal setup function
function setupModal(modalId, openBtns = [], closeBtnId) {
    const modal = el(modalId);
    if (!modal) return { open: () => {}, close: () => {} };

    const overlay = modal.querySelector('.modal-overlay');
    const content = modal.querySelector('.modal-content');
    const closeBtn = el(closeBtnId);

    function open() {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            if (overlay) overlay.classList.remove('opacity-0');
            if (content) content.classList.remove('opacity-0', 'translate-y-8');
        }, 10);
    }

    function close() {
        if (overlay) overlay.classList.add('opacity-0');
        if (content) content.classList.add('opacity-0', 'translate-y-8');
        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }, 300);
    }

    openBtns.forEach(b => { if (b) on(b, 'click', e => { e && e.preventDefault(); open(); }); });
    if (closeBtn) on(closeBtn, 'click', close);
    if (overlay) on(overlay, 'click', close);

    return { modal, open, close };
}

// Main DOM initialization
(function init() {
    // Must run after DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
        // Initialize lucide icons safely
        if (window.lucide && typeof lucide.createIcons === 'function') {
            try { lucide.createIcons(); } catch (e) { console.warn('lucide.createIcons failed', e); }
        }

        // Mobile menu
        const mobileMenuButton = el('mobile-menu-button');
        const mobileMenu = el('mobile-menu');
        if (mobileMenuButton && mobileMenu) {
            on(mobileMenuButton, 'click', () => mobileMenu.classList.toggle('hidden'));
        }

        // Reveal on scroll (if elements exist)
        const revealEls = document.querySelectorAll('.reveal-on-scroll');
        if (revealEls && revealEls.length) {
            try {
                const observer = new IntersectionObserver((entries, obs) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            obs.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });

                revealEls.forEach(s => observer.observe(s));
            } catch (e) {
                // IntersectionObserver may not be available in older browsers
                // Fall back: just add is-visible
                revealEls.forEach(s => s.classList.add('is-visible'));
            }
        }

        // FAQ Accordion
        const faqBtns = document.querySelectorAll('.faq-question');
        if (faqBtns && faqBtns.length) {
            faqBtns.forEach(button => on(button, 'click', () => {
                const faqItem = button.parentElement;
                if (faqItem) faqItem.classList.toggle('open');
            }));
        }

        // Location selector
        const stateSelect = el('state-select');
        const citySelect = el('city-select');
        if (stateSelect && citySelect) {
            stateSelect.addEventListener('change', (e) => {
                const selectedState = e.target.value;
                citySelect.innerHTML = '<option selected disabled>Select Area/City</option>';
                if (selectedState && locations[selectedState]) {
                    citySelect.disabled = false;
                    locations[selectedState].forEach(city => {
                        const option = document.createElement('option');
                        option.value = city;
                        option.textContent = city;
                        citySelect.appendChild(option);
                    });
                } else {
                    citySelect.disabled = true;
                }
            });
        }

        // Report modal setup
        const makeReportBtn = el('make-report-btn');
        const makeReportHeroBtn = el('make-report-btn-hero');
        const reportModalSetup = setupModal('report-modal', [makeReportBtn, makeReportHeroBtn], 'close-report-modal-btn');
        const closeSuccessBtn = el('close-success-btn');
        if (closeSuccessBtn) on(closeSuccessBtn, 'click', reportModalSetup.close);

        // Report form behavior (safe guards)
        const reportForm = el('report-form');
        const reportFormContent = el('report-form-content');
        const reportSuccessMessage = el('report-success-message');
        if (reportForm && reportFormContent && reportSuccessMessage) {
            on(reportForm, 'submit', (e) => {
                e.preventDefault();
                reportFormContent.classList.add('hidden');
                reportSuccessMessage.classList.remove('hidden');
            });
        }

        // Voice recording simulation
        const recordVoiceBtn = el('record-voice-btn');
        const stopRecordingBtn = el('stop-recording-btn');
        const reportStep1Form = el('report-step-1-form');
        const voiceRecordingUI = el('voice-recording-ui');
        const issueDescription = el('issue-description');

        if (recordVoiceBtn && reportStep1Form && voiceRecordingUI) {
            on(recordVoiceBtn, 'click', () => {
                reportStep1Form.classList.add('hidden');
                voiceRecordingUI.classList.remove('hidden');
            });
        }
        if (stopRecordingBtn && reportStep1Form && voiceRecordingUI && issueDescription) {
            on(stopRecordingBtn, 'click', () => {
                issueDescription.value = "Simulated voice input: 'There is a large pothole in the middle of the road which is causing traffic issues.'";
                voiceRecordingUI.classList.add('hidden');
                reportStep1Form.classList.remove('hidden');
            });
        }

        // Auth modal logic (if present)
        const authModalEl = el('auth-modal');
        if (authModalEl) {
            const openAuthBtn = el('login-signup-btn-desktop');
            const authSetup = setupModal('auth-modal', [openAuthBtn], 'close-auth-modal-btn');

            const loginTab = el('login-tab');
            const signupTab = el('signup-tab');
            const loginFormContainer = el('login-form-container');
            const signupFormContainer = el('signup-form-container');
            const loginForm = el('login-form');
            const signupForm = el('signup-form');

            if (loginTab && signupTab && loginFormContainer && signupFormContainer) {
                on(loginTab, 'click', () => {
                    loginTab.classList.add('border-teal-500', 'text-teal-600');
                    loginTab.classList.remove('border-transparent', 'text-gray-500');
                    signupTab.classList.add('border-transparent', 'text-gray-500');
                    signupTab.classList.remove('border-teal-500', 'text-teal-600');
                    loginFormContainer.classList.remove('hidden');
                    signupFormContainer.classList.add('hidden');
                });

                on(signupTab, 'click', () => {
                    signupTab.classList.add('border-teal-500', 'text-teal-600');
                    signupTab.classList.remove('border-transparent', 'text-gray-500');
                    loginTab.classList.add('border-transparent', 'text-gray-500');
                    loginTab.classList.remove('border-teal-500', 'text-teal-600');
                    signupFormContainer.classList.remove('hidden');
                    loginFormContainer.classList.add('hidden');
                });
            }

            // Login submit (example only)
            if (loginForm) {
                on(loginForm, 'submit', async (e) => {
                    e.preventDefault();
                    const email = el('login-email') ? el('login-email').value : '';
                    const password = el('login-password') ? el('login-password').value : '';
                    console.log('Logging in with:', { email, password });
                    alert('Login functionality goes here!');
                    authSetup.close();
                });
            }

            // Signup submit (attempt register)
            if (signupForm) {
                on(signupForm, 'submit', async (e) => {
                    e.preventDefault();
                    const username = el('signup-username') ? el('signup-username').value : '';
                    const email = el('signup-email') ? el('signup-email').value : '';
                    const password = el('signup-password') ? el('signup-password').value : '';

                    try {
                        const response = await fetch('http://localhost:5000/api/users/register', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ username, email, password })
                        });

                        if (response.ok) {
                            alert('Registration successful! Please login.');
                            if (loginTab) loginTab.click();
                        } else {
                            const errorMessage = await response.text();
                            alert(`Registration failed: ${errorMessage}`);
                        }
                    } catch (err) {
                        alert('Registration failed: ' + err.message);
                    }
                });
            }
        }

        // Redeem modal (if present)
        setupModal('redeem-modal', [el('open-redeem-modal-btn')], 'close-redeem-modal-btn');

        // Live reports tabs
        const ongoingTab = el('ongoing-tab');
        const solvedTab = el('solved-tab');
        const ongoingGrid = el('ongoing-issues-grid');
        const solvedGrid = el('solved-issues-grid');

        if (ongoingTab && solvedTab && ongoingGrid && solvedGrid) {
            on(ongoingTab, 'click', () => {
                ongoingTab.classList.add('active');
                solvedTab.classList.remove('active');
                ongoingGrid.classList.remove('hidden');
                solvedGrid.classList.add('hidden');
            });
            on(solvedTab, 'click', () => {
                solvedTab.classList.add('active');
                ongoingTab.classList.remove('active');
                solvedGrid.classList.remove('hidden');
                ongoingGrid.classList.add('hidden');
            });
        }

        // Language translation logic
        const languageSelector = el('language-selector');
        if (languageSelector) {
            const translatePage = (language) => {
                const langData = Object.assign({}, translations.en, translations[language] || {});
                document.querySelectorAll('[data-translate]').forEach(element => {
                    const key = element.getAttribute('data-translate');
                    if (langData && langData[key]) element.innerHTML = langData[key];
                });
            };
            on(languageSelector, 'change', (e) => translatePage(e.target.value));
        }

        // Ensure no uncaught errors bubble up from non-critical code
        window.addEventListener('error', (ev) => {
            console.error('Uncaught error:', ev.error || ev.message);
        });

    });
})();