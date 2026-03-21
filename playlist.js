const quranPlaylist = {
    reciters: {
        'minshawi': {
            name: 'محمد صديق المنشاوي',
            server: 'minshawi'
        },
        'husary': {
            name: 'محمود خليل الحصري',
            server: 'husary'
        },
        'abdulbasit': {
            name: 'عبد الباسط عبد الصمد',
            server: 'abdulbasit'
        },
        'yasser': {
            name: 'ياسر الدوسري',
            server: 'yasser'
        },
        'afasy': {
            name: 'مشاري راشد العفاسي',
            server: 'afasy'
        },
        'shatri': {
            name: 'أبو بكر الشاطري',
            server: 'shatri'
        },
        'hani': {
            name: 'هاني الرفاعي',
            server: 'hani'
        }
    },
    
    getServerUrls: {
        'minshawi': 'https://everyayah.com/data/Minshawy_Murattal_128kbps/',
        'husary': 'https://everyayah.com/data/Husary_128kbps/',
        'abdulbasit': 'https://everyayah.com/data/Abdul_Basit_Mujawwad_128kbps/',
        'yasser': 'https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/',
        'afasy': 'https://everyayah.com/data/Alafasy_128kbps/',
        'shatri': 'https://everyayah.com/data/Abu_Bakr_Ash-Shaatree_128kbps/',
        'hani': 'https://everyayah.com/data/Hani_Rifai_192kbps/'
    },
    
    getAyahUrls: function(reciter, surahNumber, ayahCount) {
        const baseUrl = this.getServerUrls[reciter];
        if (!baseUrl) return [];
        
        const paddedSurah = String(surahNumber).padStart(3, '0');
        const urls = [];
        
        for (let i = 1; i <= ayahCount; i++) {
            const paddedAyah = String(i).padStart(3, '0');
            urls.push(baseUrl + paddedSurah + paddedAyah + '.mp3');
        }
        
        return urls;
    },
    
    getFirstAyahUrl: function(reciter, surahNumber) {
        const baseUrl = this.getServerUrls[reciter];
        if (!baseUrl) return null;
        
        const paddedSurah = String(surahNumber).padStart(3, '0');
        return baseUrl + paddedSurah + '001.mp3';
    }
};
