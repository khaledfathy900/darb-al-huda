const quranVerses = [
    {
        arabic: quranText[112].ayahs[0] + " " + quranText[112].ayahs[1] + " " + quranText[112].ayahs[2] + " " + quranText[112].ayahs[3],
        english: "Say, 'He is Allah, [who is] One, Allah, the Eternal Refuge. He neither begets nor is born, nor is there any deity besides Him.'",
        reference: "Surah Al-Ikhlas (112:1-4)"
    },
    {
        arabic: quranText[1].ayahs[0] + " " + quranText[1].ayahs[1] + " " + quranText[1].ayahs[2] + " " + quranText[1].ayahs[3],
        english: "In the name of Allah, the Entirely Merciful, the Especially Merciful. [All] praise is [due] to Allah, Lord of the worlds. The Entirely Merciful, the Especially Merciful, Sovereign of the Day of Recompense.",
        reference: "Surah Al-Fatiha (1:1-4)"
    },
    {
        arabic: quranText[2].ayahs[0],
        english: "And [mention, O Muhammad], when your Lord said to the angels, 'Indeed, I will make upon the earth a successive authority.'",
        reference: "Surah Al-Baqarah (2:30)"
    },
    {
        arabic: quranText[94].ayahs[4] + " " + quranText[94].ayahs[5],
        english: "Indeed, with hardship comes ease. Indeed, with hardship comes ease.",
        reference: "Surah Ash-Sharh (94:5-6)"
    },
    {
        arabic: quranText[53].ayahs[41],
        english: "And that to your Lord is the final goal.",
        reference: "Surah An-Najm (53:42)"
    },
    {
        arabic: quranText[2].ayahs[151],
        english: "Remember Me; I will remember you. And be grateful to Me and do not deny Me.",
        reference: "Surah Al-Baqarah (2:152)"
    },
    {
        arabic: quranText[5].ayahs[34],
        english: "O you who have believed, fear Allah and seek the means of approach to Him.",
        reference: "Surah Al-Ma'idah (5:35)"
    },
    {
        arabic: quranText[3].ayahs[158],
        english: "Indeed, Allah loves those who rely [upon Him].",
        reference: "Surah Aal Imran (3:159)"
    },
    {
        arabic: quranText[9].ayahs[15],
        english: "And you do not will except that Allah wills.",
        reference: "Surah At-Tawbah (9:16)"
    },
    {
        arabic: quranText[20].ayahs[24] + " " + quranText[20].ayahs[25],
        english: "My Lord, expand for me my chest with ease and ease for me my matter.",
        reference: "Surah Taha (20:25-26)"
    }
];

const duas = {
    morning: [
        {
            arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ",
            translation: "We have entered the morning and the kingdom belongs to Allah, and all praise is for Allah. There is none worthy of worship except Allah alone.",
            meaning: "Morning Remembrance"
        },
        {
            arabic: "اَللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
            translation: "O Allah, by Your name we enter the morning and by Your name we enter the evening, by Your name we live and by Your name we die, and to You is our return.",
            meaning: "Morning Dua"
        },
        {
            arabic: "اَللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ",
            translation: "O Allah, I ask You for forgiveness and well-being in this world and the next.",
            meaning: "Seeking Forgiveness & Well-being"
        },
        {
            arabic: "اَللَّهُمَّ عَافِنِي فِي بَدَنِي، اَللَّهُمَّ عَافِنِي فِي سَمْعِي، اَللَّهُمَّ عَافِنِي فِي بَصَرِي",
            translation: "O Allah, grant me wellness in my body, O Allah, grant me wellness in my hearing, O Allah, grant me wellness in my sight.",
            meaning: "Protection for Body Parts"
        },
        {
            arabic: "سُبْحَانَ اللهِ وَبِحَمْدِهِ",
            translation: "Glory and praise be to Allah.",
            meaning: "Morning Dhikr"
        },
        {
            arabic: "لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            translation: "There is no god but Allah alone, He has no partner. His is the sovereignty and His is the praise, and He is over all things omnipotent.",
            meaning: "Tawheed Declaration"
        }
    ],
    evening: [
        {
            arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ للهِ، وَالْحَمْدُ للهِ، لَا إِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ",
            translation: "We have entered the evening and the kingdom belongs to Allah, and all praise is for Allah. There is none worthy of worship except Allah alone.",
            meaning: "Evening Remembrance"
        },
        {
            arabic: "اَللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ",
            translation: "O Allah, by Your name we enter the evening and by Your name we enter the morning, by Your name we live and by Your name we die, and to You is our final destination.",
            meaning: "Evening Dua"
        },
        {
            arabic: "اَللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ",
            translation: "O Allah, I seek refuge in You from anxiety and sorrow.",
            meaning: "Seeking Refuge from Worry"
        },
        {
            arabic: "أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
            translation: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
            meaning: "Protection from Evil"
        },
        {
            arabic: "اَللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ",
            translation: "O Allah, I ask You for forgiveness and well-being in this world and the next.",
            meaning: "Forgiveness & Well-being"
        }
    ],
    sleep: [
        {
            arabic: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا",
            translation: "In Your name my Lord, I lie down and in Your name I rise. If You take my soul, have mercy on it.",
            meaning: "Sleeping Dua"
        },
        {
            arabic: "اَللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
            translation: "O Allah, protect me from Your punishment on the day You raise Your servants.",
            meaning: "Protection from Punishment"
        },
        {
            arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
            translation: "In Your name, O Allah, I die and I live.",
            meaning: "Life and Death"
        },
        {
            arabic: "اَللَّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا",
            translation: "O Allah, in Your name I die and live.",
            meaning: "Sleeping Dua"
        },
        {
            arabic: "سُبْحَانَ اللهِ",
            translation: "Glory be to Allah.",
            meaning: "Dhikr Before Sleep"
        }
    ],
    travel: [
        {
            arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",
            translation: "Glory to Him who has subjected this to us, and we could never have it subdued. And indeed we shall return to our Lord.",
            meaning: "While Traveling"
        },
        {
            arabic: "لاَ إِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            translation: "There is none worthy of worship except Allah alone, no partner with Him. His is the sovereignty and His is the praise, and He is over all things omnipotent.",
            meaning: "Talbiyah/Travel Supplication"
        },
        {
            arabic: "سُبْحَانَكَ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي",
            translation: "Glory be to You, I have wronged myself, so forgive me.",
            meaning: "Seeking Forgiveness"
        }
    ],
    food: [
        {
            arabic: "بِسْمِ اللهِ، وَعَلَى بَرَكَةِ اللهِ",
            translation: "In the name of Allah, and with the blessing of Allah.",
            meaning: "Before Eating"
        },
        {
            arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ",
            translation: "All praise is due to Allah who fed us, gave us drink, and made us Muslims.",
            meaning: "After Eating"
        },
        {
            arabic: "الْلَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",
            translation: "O Allah, bless what You have provided us and protect us from the punishment of the Fire.",
            meaning: "Blessing for Food"
        }
    ],
    bathroom: [
        {
            arabic: "الْلَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبَائِثِ",
            translation: "O Allah, I seek refuge in You from male and female devils.",
            meaning: "Entering Bathroom"
        },
        {
            arabic: "غُفْرَانَكَ",
            translation: "I ask Your forgiveness.",
            meaning: "Leaving Bathroom"
        }
    ]
};

const islamicEvents = [
    {
        name: "New Islamic Year",
        arabic: "رأس السنة الهجرية",
        date: "1 محرم",
       
    },
    {
        name: "عاشوراء",
        arabic: "عاشوراء",
        date: "10 محرم"
    },
    {
        name: "المولد النبوي",
        arabic: "المولد النبوي الشريف",
        date: "12 ربيع الأول",
        
    },
    {
        name: "الإسراء والمعراج",
        arabic: "الإسراء والمعراج",
        date: "27 رجب",
        
    },
    {
        name: "ليلة النصف من شعبان",
        arabic: "ليلة النصف من شعبان",
        date: "15 شعبان",
       
    },
    {
        name: "بداية رمضان",
        arabic: "أول يوم من رمضان",
        date: "1 رمضان",
        
    },
    {
        name: "ليلة القدر",
        arabic: "ليلة القدر",
        date: "27 رمضان",
        
    },
    {
        name: "عيد الفطر",
        arabic: "عيد الفطر السعيد",
        date: "1 شوال",
        
    },
    {
        name: "يوم عرفة",
        arabic: "يوم عرفة",
        date: "9 ذو الحجة",
        
    },
    {
        name: "عيد الأضحى",
        arabic: "عيد الأضحى المبارك",
        date: "10 ذو الحجة",
        
    },
    {
        name: "أيام التشريق",
        arabic: "أيام التشريق",
        date: "11-13 ذو الحجة",
        
    },
    {
        name: "غزوة بدر",
        arabic: "غزوة بدر الكبرى",
        date: "17 رمضان",
        
    },
    {
        name: "فتح مكة",
        arabic: "فتح مكة",
        date: "20 رمضان",
       
    }
];

let currentVerseIndex = 0;
let tasbeehCount = 0;
let currentDuaCategory = 'morning';
let dhikrCounts = {
    subhanallah: 0,
    alhamdullilah: 0,
    allahuakbar: 0,
    laillahaillallah: 0,
    astaghfirullah: 0
};
let currentDhikr = 'subhanallah';

let audioPlayer = new Audio();
let currentPlayingSurah = null;
let currentAyahIndex = 0;
let ayahUrls = [];

const reciterUrls = {
    'minshawi': 'https://everyayah.com/data/Minshawy_Murattal_128kbps/',
    'husary': 'https://everyayah.com/data/Husary_128kbps/',
    'abdulbasit': 'https://everyayah.com/data/Abdul_Basit_Murattal_192kbps/',
    'afasy': 'https://everyayah.com/data/Alafasy_128kbps/',
    'shatri': 'https://everyayah.com/data/Abu_Bakr_Ash-Shaatree_128kbps/',
    'dosari': 'https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/',
    'rifai': 'https://everyayah.com/data/Hani_Rifai_192kbps/'
};

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initPrayerTimes();
    initQuranVerses();
    initDuas();
    initAdkar();
    initEvents();
    initTasbeeh();
    initScrollAnimations();
    initModals();
    initAudioPlayer();
    updateCurrentDate();
    updateHijriDate();
});

function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.querySelector('.theme-icon').textContent = '☀️';
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        if (newTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.querySelector('.theme-icon').textContent = '☀️';
            showToast('Dark mode enabled');
        } else {
            document.documentElement.removeAttribute('data-theme');
            themeToggle.querySelector('.theme-icon').textContent = '🌙';
            showToast('Light mode enabled');
        }
        
        localStorage.setItem('theme', newTheme);
    });
}

function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (window.scrollY > 50) {
            navbar.style.background = isDark ? 'rgba(26, 26, 46, 0.98)' : 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = isDark ? 'rgba(26, 26, 46, 0.95)' : 'rgba(255, 255, 255, 0.95)';
        }
    });
}

function initPrayerTimes() {
    const prayerCards = document.querySelectorAll('.prayer-card');
    
    prayerCards.forEach(card => {
        card.addEventListener('click', () => {
            prayerCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            showToast(`${card.dataset.prayer} selected`);
        });
    });

    updatePrayerCountdowns();
    setInterval(updatePrayerCountdowns, 1000);
    updateNextPrayer();
    setInterval(updateNextPrayer, 60000);
}

function updatePrayerCountdowns() {
    const prayers = ['fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'];
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    
    const prayerTimes = {
        fajr: 4 * 60 + 30,
        sunrise: 5 * 60 + 58,
        dhuhr: 11 * 60 + 56,
        asr: 15 * 60 + 22,
        maghrib: 18 * 60 + 5,
        isha: 19 * 60 + 23
    };

    prayers.forEach(prayer => {
        const countdownEl = document.getElementById(`${prayer}Countdown`);
        const card = document.querySelector(`[data-prayer="${prayer}"]`);
        const prayerMinutes = prayerTimes[prayer];
        
        let diffMinutes;
        if (prayerMinutes > currentMinutes) {
            diffMinutes = prayerMinutes - currentMinutes;
            card.classList.remove('active');
            card.classList.add('upcoming');
        } else {
            diffMinutes = (24 * 60 - currentMinutes) + prayerMinutes;
            card.classList.remove('upcoming');
            card.classList.add('active');
        }
        
        const hours = Math.floor(diffMinutes / 60);
        const minutes = diffMinutes % 60;
        
        if (hours > 0) {
            countdownEl.textContent = `${hours}h ${minutes}m`;
        } else {
            countdownEl.textContent = `${minutes}m`;
        }
    });
}

function updateNextPrayer() {
    const prayers = ['fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'];
    const prayerNames = {
        fajr: 'Fajr',
        sunrise: 'Sunrise',
        dhuhr: 'Dhuhr',
        asr: 'Asr',
        maghrib: 'Maghrib',
        isha: 'Isha'
    };

    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const prayerTimes = {
        fajr: 4 * 60 + 30,
        sunrise: 5 * 60 + 58,
        dhuhr: 11 * 60 + 56,
        asr: 15 * 60 + 22,
        maghrib: 18 * 60 + 5,
        isha: 19 * 60 + 23
    };

    let nextPrayer = 'fajr';
    let nextPrayerMinutes = prayerTimes.fajr + 24 * 60;

    for (const prayer of prayers) {
        if (prayerTimes[prayer] > currentMinutes) {
            nextPrayer = prayer;
            nextPrayerMinutes = prayerTimes[prayer];
            break;
        }
    }

    const diffMinutes = nextPrayerMinutes - currentMinutes;
    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;
    let timeString = '';
    
    if (hours > 0) {
        timeString = `${hours} hour${hours > 1 ? 's' : ''} ${minutes} minutes`;
    } else {
        timeString = `${minutes} minutes`;
    }

    document.getElementById('nextPrayerName').textContent = prayerNames[nextPrayer];
    document.getElementById('nextPrayerTime').textContent = `in ${timeString}`;
}

function initQuranVerses() {
    displayVerse(currentVerseIndex);
    renderSurahList();

    document.getElementById('prevVerse').addEventListener('click', () => {
        currentVerseIndex = (currentVerseIndex - 1 + quranVerses.length) % quranVerses.length;
        displayVerse(currentVerseIndex);
        animateVerseChange();
    });

    document.getElementById('nextVerse').addEventListener('click', () => {
        currentVerseIndex = (currentVerseIndex + 1) % quranVerses.length;
        displayVerse(currentVerseIndex);
        animateVerseChange();
    });

    initQuranSearch();
}

function renderSurahList() {
    const surahList = document.getElementById('surahList');
    surahList.innerHTML = '';
    
    for (let i = 1; i <= 114; i++) {
        const surah = quranText[i];
        const card = document.createElement('div');
        card.className = 'surah-card';
        card.dataset.surah = i;
        card.innerHTML = `
            <span class="surah-number">${i}</span>
            <div class="surah-info">
                <h3 class="surah-arabic-name">${surah.name}</h3>
                <span class="surah-ayah-count">${surah.ayahCount} آية</span>
            </div>
            <button class="surah-play-btn" onclick="event.stopPropagation(); playSurah(${i})" title="استماع">▶️</button>
        `;
        card.addEventListener('click', () => openSurahModal(i));
        surahList.appendChild(card);
    }
}

function initAudioPlayer() {
    const playBtn = document.getElementById('playCurrentBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    
    if (playBtn) {
        playBtn.addEventListener('click', () => {
            if (currentPlayingSurah) {
                audioPlayer.play();
                showToast(`جاري التشغيل: سورة ${quranText[currentPlayingSurah].name}`);
            } else {
                showToast('اختر سورة لتشغيلها');
            }
        });
    }
    
    if (pauseBtn) {
        pauseBtn.addEventListener('click', () => {
            audioPlayer.pause();
            showToast('تم الإيقاف المؤقت');
        });
    }
    
    if (stopBtn) {
        stopBtn.addEventListener('click', () => {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
            currentPlayingSurah = null;
            currentAyahIndex = 0;
            ayahUrls = [];
            document.getElementById('currentSurahName').textContent = 'اختر سورة';
            document.getElementById('audioTime').textContent = '00:00 / 00:00';
            document.getElementById('audioProgress').style.width = '0%';
            showToast('تم الإيقاف');
        });
    }
    
    audioPlayer.addEventListener('timeupdate', () => {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        document.getElementById('audioProgress').style.width = `${progress}%`;
        
        const currentMin = Math.floor(audioPlayer.currentTime / 60);
        const currentSec = Math.floor(audioPlayer.currentTime % 60);
        const totalMin = Math.floor(audioPlayer.duration / 60);
        const totalSec = Math.floor(audioPlayer.duration % 60);
        const ayahNum = currentAyahIndex + 1;
        const totalAyahs = ayahUrls.length;
        
        document.getElementById('audioTime').textContent = 
            `آية ${ayahNum}/${totalAyahs} • ${String(currentMin).padStart(2, '0')}:${String(currentSec).padStart(2, '0')} / ${String(totalMin).padStart(2, '0')}:${String(totalSec).padStart(2, '0')}`;
    });
    
    audioPlayer.addEventListener('ended', () => {
        if (currentAyahIndex < ayahUrls.length - 1) {
            currentAyahIndex++;
            audioPlayer.src = ayahUrls[currentAyahIndex];
            audioPlayer.play().catch(err => {
                console.error('Audio error:', err);
            });
        } else {
            showToast('انتهت السورة');
            document.getElementById('audioProgress').style.width = '0%';
            currentPlayingSurah = null;
            currentAyahIndex = 0;
            ayahUrls = [];
        }
    });
}

function playSurah(surahNumber) {
    const reciter = document.getElementById('reciterSelect').value;
    const baseUrl = reciterUrls[reciter];
    
    const paddedSurah = String(surahNumber).padStart(3, '0');
    const surah = quranText[surahNumber];
    
    ayahUrls = [];
    for (let i = 1; i <= surah.ayahCount; i++) {
        const paddedAyah = String(i).padStart(3, '0');
        ayahUrls.push(`${baseUrl}${paddedSurah}${paddedAyah}.mp3`);
    }
    
    currentAyahIndex = 0;
    audioPlayer.src = ayahUrls[0];
    audioPlayer.play().catch(err => {
        showToast('حدث خطأ في تحميل الصوت');
        console.error('Audio error:', err);
    });
    currentPlayingSurah = surahNumber;
    
    const surahName = surah.name;
    document.getElementById('currentSurahName').textContent = surahName;
    
    showToast(`جاري التشغيل: ${surahName}`);
}

function openSurahModal(surahNumber) {
    const surah = quranText[surahNumber];
    
    let content = `<div class="surah-header" style="text-align:center; margin-bottom:30px;">
        <h3 style="color:var(--primary); font-family:'Amiri',serif; font-size:2rem;">${surah.name}</h3>
        <p style="color:var(--gray);">${surah.englishName} - ${surah.ayahCount} Verses</p>
    </div>`;
    
    content += '<div class="surah-text" style="font-family:\'Amiri\', serif; font-size:1.8rem; line-height:2.5; text-align:right; direction:rtl;">';
    
    if (surahNumber !== 9) {
        content += `<div class="bismillah-display" style="text-align:center; margin-bottom:20px; padding-bottom:20px; border-bottom:1px solid rgba(128,128,128,0.2); font-size:1.5rem;">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>`;
    }
    
    surah.ayahs.forEach((ayah, index) => {
        const ayahNumber = index + 1;
        content += `<span class="ayah" data-ayah="${ayahNumber}" id="ayah-${ayahNumber}">${ayah} ﴿${ayahNumber}﴾ </span>`;
    });
    
    content += '</div>';
    
    showModal(`Surah ${surahNumber}`, content);
}

function displayVerse(index) {
    const verse = quranVerses[index];
    document.getElementById('verseArabic').textContent = verse.arabic;
    document.getElementById('verseEnglish').textContent = verse.english;
    document.getElementById('verseReference').textContent = verse.reference;
    document.getElementById('verseCounter').textContent = `${index + 1} / ${quranVerses.length}`;
}

function animateVerseChange() {
    const verseContainer = document.querySelector('.quran-verse');
    verseContainer.style.opacity = '0';
    verseContainer.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        verseContainer.style.transition = 'all 0.5s ease';
        verseContainer.style.opacity = '1';
        verseContainer.style.transform = 'translateY(0)';
    }, 100);
}

function initDuas() {
    renderDuas('morning');

    document.querySelectorAll('.dua-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.dua-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentDuaCategory = tab.dataset.category;
            renderDuas(currentDuaCategory);
        });
    });
}

function renderDuas(category) {
    const container = document.getElementById('duasContainer');
    container.innerHTML = '';

    duas[category].forEach((dua, index) => {
        const card = document.createElement('div');
        card.className = 'dua-card animate-on-scroll';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="dua-arabic">${dua.arabic}</div>
            <p class="dua-translation">"${dua.translation}"</p>
            <p class="dua-meaning">${dua.meaning}</p>
        `;
        container.appendChild(card);
    });

    setTimeout(() => {
        document.querySelectorAll('.dua-card').forEach(card => {
            card.classList.add('visible');
        });
    }, 100);
}

function initEvents() {
    const eventsGrid = document.getElementById('eventsGrid');
    
    islamicEvents.forEach((event, index) => {
        const card = document.createElement('div');
        card.className = 'event-card animate-on-scroll';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <span class="event-date">${event.date}</span>
            <h3>${event.arabic}</h3>
            <h4>${event.name}</h4>
            <p>${event.description || ''}</p>
        `;
        eventsGrid.appendChild(card);
    });

    setTimeout(() => {
        document.querySelectorAll('.event-card').forEach(card => {
            card.classList.add('visible');
        });
    }, 100);
}

function initAdkar() {
    const tasbeehBtn = document.getElementById('tasbeehBtn');
    const tasbeehCounter = document.getElementById('tasbeehCounter');
    const dhikrButtons = document.querySelectorAll('.tasbeeh-dhikr');
    
    if (tasbeehBtn) {
        tasbeehBtn.addEventListener('click', () => {
            tasbeehCount++;
            tasbeehCounter.textContent = tasbeehCount;
            animateCounter(tasbeehCounter);
            
            dhikrCounts[currentDhikr]++;
            updateDhikrCount(currentDhikr);
            
            checkMilestone();
        });
    }
    
    dhikrButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            dhikrButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentDhikr = btn.dataset.dhikr;
            showToast(`Selected: ${btn.textContent}`);
        });
    });
    
    const setBtn = document.getElementById('setBtn');
    if (setBtn) {
        setBtn.addEventListener('click', () => {
            const goal = prompt('Set your daily goal (default: 100):', '100');
            if (goal && !isNaN(goal)) {
                showToast(`Goal set to ${goal}`);
            }
        });
    }
}

function updateDhikrCount(dhikr) {
    const goals = {
        subhanallah: 33,
        alhamdullilah: 33,
        allahuakbar: 33,
        laillahaillallah: 100,
        astaghfirullah: 100
    };
    
    const countEl = document.getElementById(`${dhikr}Count`);
    if (countEl) {
        countEl.textContent = `${dhikrCounts[dhikr]} / ${goals[dhikr]}`;
        
        if (dhikrCounts[dhikr] >= goals[dhikr]) {
            countEl.style.color = 'var(--primary)';
            showToast(`${dhikr} completed!`);
        }
    }
}

function countDhikr(dhikr) {
    dhikrCounts[dhikr]++;
    updateDhikrCount(dhikr);
    
    tasbeehCount++;
    const counterDisplay = document.getElementById('tasbeehCounter');
    counterDisplay.textContent = tasbeehCount;
    animateCounter(counterDisplay);
    
    checkMilestone();
}

function animateCounter(element) {
    element.style.transform = 'scale(1.2)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 100);
}

function checkMilestone() {
    if (tasbeehCount === 33) {
        showToast('SubhanAllah: 33 completed!');
    } else if (tasbeehCount === 66) {
        showToast('Alhmadulillah: 66 completed!');
    } else if (tasbeehCount === 99) {
        showToast('Allahu Akbar: 99 completed!');
    } else if (tasbeehCount === 100) {
        showToast('MashaAllah! 100 remembrances!');
    } else if (tasbeehCount === 500) {
        showToast('Amazing! 500 remembrances!');
    } else if (tasbeehCount === 1000) {
        showToast('SubhanAllah! 1000 remembrances!');
    }
}

function initTasbeeh() {
    const counterDisplay = document.getElementById('tasbeehCounter');
    const incrementBtn = document.getElementById('incrementBtn');
    const resetBtn = document.getElementById('resetBtn');

    if (incrementBtn) {
        incrementBtn.addEventListener('click', () => {
            tasbeehCount++;
            counterDisplay.textContent = tasbeehCount;
            animateCounter(counterDisplay);

            dhikrCounts[currentDhikr]++;
            updateDhikrCount(currentDhikr);
            checkMilestone();
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            tasbeehCount = 0;
            counterDisplay.textContent = tasbeehCount;
            dhikrCounts = {
                subhanallah: 0,
                alhamdullilah: 0,
                allahuakbar: 0,
                laillahaillallah: 0,
                astaghfirullah: 0
            };
            document.querySelectorAll('.adkar-count').forEach(el => {
                el.textContent = '0 / 33';
                el.style.color = 'var(--secondary)';
            });
            showToast('Counter reset');
        });
    }
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    window.addEventListener('scroll', () => {
        document.querySelectorAll('.section-header, .prayer-cards, .surah-list').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('visible');
            }
        });
    });
}

function initModals() {
    const modal = document.getElementById('quranModal');
    const closeModal = document.getElementById('closeModal');
    const openQuranBtn = document.getElementById('openQuranBtn');
    const todaysDuasBtn = document.getElementById('todaysDuasBtn');

    openQuranBtn.addEventListener('click', () => {
        showModal('Holy Quran', generateQuranContent());
    });

    todaysDuasBtn.addEventListener('click', () => {
        showModal('Daily Duas', generateDuasContent());
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
        }
    });
}

function showModal(title, content) {
    const modal = document.getElementById('quranModal');
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalBody').innerHTML = content;
    modal.classList.add('active');
}

function generateQuranContent() {
    let content = '<div class="quran-verse">';
    quranVerses.forEach(verse => {
        content += `
            <div style="margin-bottom: 30px; padding-bottom: 30px; border-bottom: 1px solid var(--gray); opacity: 0.3;">
                <div class="verse-arabic" style="color:var(--dark);">${verse.arabic}</div>
                <div class="verse-english" style="text-align: left; direction: ltr; color:var(--gray);">${verse.english}</div>
                <div class="verse-reference" style="color:var(--secondary);">${verse.reference}</div>
            </div>
        `;
    });
    content += '</div>';
    content += '<p style="text-align:center; color:var(--gray); margin-top:20px;">Click on a Surah below to read the complete text</p>';
    return content;
}

function generateDuasContent() {
    let content = '<div style="display: flex; flex-direction: column; gap: 20px;">';
    
    Object.values(duas).flat().forEach(dua => {
        content += `
            <div class="dua-card" style="margin-bottom: 0;">
                <div class="dua-arabic">${dua.arabic}</div>
                <div class="dua-translation">"${dua.translation}"</div>
                <div class="dua-meaning">${dua.meaning}</div>
            </div>
        `;
    });
    
    content += '</div>';
    return content;
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function updateCurrentDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const englishDate = now.toLocaleDateString('en-US', options);
    document.getElementById('currentDate').textContent = englishDate;
}

function updateHijriDate() {
    const hijriMonths = ['محرّم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الأولى', 
                         'جمادى الثانية', 'رجب', 'شعبان', 'رمضان', 'شوال', 
                         'ذو القعدة', 'ذو الحجة'];
    
    const hijriDate = gregorianToHijri(new Date());
    const hijriYear = hijriDate.year;
    const hijriMonth = hijriMonths[hijriDate.month - 1];
    const hijriDay = hijriDate.day;
    
    document.getElementById('currentHijri').textContent = `${hijriDay} ${hijriMonth} ${hijriYear}هـ`;
}

function gregorianToHijri(date) {
    const gregorianDate = new Date(date);
    const gYear = gregorianDate.getFullYear();
    const gMonth = gregorianDate.getMonth() + 1;
    const gDay = gregorianDate.getDate();
    
    let jd = Math.floor((1461 * (gYear + 4800 + Math.floor((gMonth - 14) / 12))) / 4) +
             Math.floor((367 * (gMonth - 2 - 12 * Math.floor((gMonth - 14) / 12))) / 12) -
             Math.floor((3 * Math.floor((gYear + 4900 + Math.floor((gMonth - 14) / 12)) / 100)) / 4) +
             gDay - 32075;
    
    let l = jd - 1948440 + 10632;
    let n = Math.floor((l - 1) / 10631);
    l = l - 10631 * n + 354;
    let j = Math.floor((10985 - l) / 5316) * Math.floor((50 * l) / 17719) + Math.floor(l / 5670) * Math.floor((43 * l) / 15238);
    l = l - Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) - Math.floor(j / 16) * Math.floor((15238 * j) / 43) + 29;
    let hMonth = Math.floor((24 * l) / 709);
    let hDay = l - Math.floor((709 * hMonth) / 24);
    let hYear = 30 * n + j - 30;
    
    return { year: hYear, month: hMonth, day: hDay };
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

function initQuranSearch() {
    const searchInput = document.getElementById('quranSearchInput');
    const searchResults = document.getElementById('searchResults');
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query.length < 1) {
            searchResults.classList.remove('active');
            searchResults.innerHTML = '';
            return;
        }
        
        const results = searchQuran(query);
        displaySearchResults(results, query);
    });
    
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim().length > 0) {
            searchResults.classList.add('active');
        }
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.quran-search')) {
            searchResults.classList.remove('active');
        }
    });
}

function searchQuran(query) {
    const results = { surahs: [], ayahs: [] };
    
    if (!query || query.trim().length < 1) {
        return { surahs: [], ayahs: [], totalSurahs: 0, totalAyahs: 0 };
    }
    
    const queryClean = query.trim();
    
    for (let surahNum = 1; surahNum <= 114; surahNum++) {
        const surah = quranText[surahNum];
        
        const englishMatch = surah.englishName.toLowerCase().includes(queryClean.toLowerCase());
        const arabicMatch = surah.name.includes(queryClean);
        const numberMatch = surahNum.toString() === queryClean;
        
        if (englishMatch || arabicMatch || numberMatch) {
            results.surahs.push({
                surah: surahNum,
                name: surah.englishName,
                arabicName: surah.name,
                ayahCount: surah.ayahCount,
                matchType: englishMatch ? 'english' : (arabicMatch ? 'arabic' : 'number')
            });
        }
        
        surah.ayahs.forEach((ayah, index) => {
            if (ayah.includes(queryClean)) {
                results.ayahs.push({
                    surah: surahNum,
                    ayah: index + 1,
                    name: surah.englishName,
                    text: ayah
                });
            }
        });
    }
    
    return {
        surahs: results.surahs.slice(0, 10),
        ayahs: results.ayahs.slice(0, 40),
        totalSurahs: results.surahs.length,
        totalAyahs: results.ayahs.length
    };
}

function displaySearchResults(results, query) {
    const searchResults = document.getElementById('searchResults');
    
    if (results.surahs.length === 0 && results.ayahs.length === 0) {
        searchResults.innerHTML = `
            <div class="search-no-results">
                <p>لا توجد نتائج لـ "${query}"</p>
                <p style="font-size:0.85rem; margin-top:5px;">جرّب البحث بالعربية أو الإنجليزية</p>
            </div>`;
        searchResults.classList.add('active');
        return;
    }
    
    let html = '';
    
    if (results.surahs.length > 0) {
        html += `<div class="search-section-title">السور (${results.totalSurahs})</div>`;
        results.surahs.forEach(surah => {
            html += `
                <div class="search-result-item" onclick="goToSurah(${surah.surah})">
                    <div class="search-result-number">${surah.surah}</div>
                    <div class="search-result-content">
                        <div class="search-result-arabic">${surah.arabicName}</div>
                        <div class="search-result-title">${surah.name}</div>
                        <div class="search-result-subtitle">${surah.ayahCount} آية</div>
                    </div>
                </div>
            `;
        });
    }
    
    if (results.ayahs.length > 0) {
        html += `<div class="search-section-title">الآيات (${results.totalAyahs})</div>`;
        results.ayahs.forEach(ayah => {
            const highlighted = highlightMatch(ayah.text, query);
            html += `
                <div class="search-result-item" onclick="goToAyah(${ayah.surah}, ${ayah.ayah})">
                    <div class="search-result-number">${ayah.surah}:${ayah.ayah}</div>
                    <div class="search-result-content">
                        <div class="search-result-arabic">سورة ${ayah.name}</div>
                        <div class="search-result-ayah">${highlighted}</div>
                    </div>
                </div>
            `;
        });
    }
    
    searchResults.innerHTML = html;
    searchResults.classList.add('active');
}

function highlightMatch(text, query) {
    const regex = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    return text.replace(regex, '<span class="highlight">$&</span>');
}

function goToSurah(surahNum) {
    document.getElementById('searchResults').classList.remove('active');
    document.getElementById('quranSearchInput').value = '';
    openSurahModal(surahNum);
}

function goToAyah(surahNum, ayahNum) {
    document.getElementById('searchResults').classList.remove('active');
    document.getElementById('quranSearchInput').value = '';
    const surah = quranText[surahNum];
    
    let content = `<div class="surah-header" style="text-align:center; margin-bottom:30px;">
        <h3 style="color:var(--primary); font-family:'Amiri',serif; font-size:2rem;">${surah.name}</h3>
        <p style="color:var(--gray);">${surah.englishName} - ${surah.ayahCount} Verses</p>
    </div>`;
    
    content += '<div class="surah-text" style="font-family:\'Amiri\', serif; font-size:1.8rem; line-height:2.5; text-align:right; direction:rtl;">';
    
    if (surahNum !== 9) {
        content += `<div class="bismillah-display" style="text-align:center; margin-bottom:20px; padding-bottom:20px; border-bottom:1px solid rgba(128,128,128,0.2); font-size:1.5rem;">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>`;
    }
    
    surah.ayahs.forEach((ayah, index) => {
        const ayahNumber = index + 1;
        let style = '';
        if (ayahNum === ayahNumber) {
            style = 'background:rgba(201, 162, 39, 0.4); border-radius:8px; padding:5px 10px; display:inline-block; margin:5px 0;';
        }
        content += `<span class="ayah" data-ayah="${ayahNumber}" id="ayah-${ayahNumber}" style="${style}">${ayah} ﴿${ayahNumber}﴾ </span>`;
    });
    
    content += '</div>';
    
    showModal(`Surah ${surahNum}`, content);
    
    setTimeout(() => {
        const ayahElement = document.getElementById(`ayah-${ayahNum}`);
        if (ayahElement) {
            ayahElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 100);
}

function initOfflineSupport() {
    const offlineIndicator = document.getElementById('offlineIndicator');
    
    function updateOnlineStatus() {
        if (!navigator.onLine) {
            offlineIndicator.classList.add('show');
        } else {
            offlineIndicator.classList.remove('show');
        }
    }
    
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    
    if (!navigator.onLine) {
        updateOnlineStatus();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initOfflineSupport();
});
