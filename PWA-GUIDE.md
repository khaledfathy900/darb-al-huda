# PWA Integration Guide - درب الهدى

## Files Created/Updated

### 1. manifest.json
Complete PWA manifest with:
- App name and description in Arabic/English
- All required icon sizes (48, 72, 96, 144, 192, 512px)
- Home screen shortcuts for quick access
- Theme colors and display settings

### 2. sw.js (Service Worker)
Enhanced service worker with:
- **Static caching**: App shell, HTML, CSS, JS, fonts
- **Dynamic caching**: Quran audio files from everyayah.com
- **Offline fallback**: Works without internet
- **Automatic cache management**: Cleans old caches on update

### 3. index.html
Updated with:
- Complete PWA meta tags
- Install prompt UI
- Improved service worker registration with update detection
- RTL support for Arabic

### 4. styles.css
Added:
- Install prompt styling
- Mobile-responsive design

---

## Integration Steps

### Step 1: Host on HTTPS
PWA requires HTTPS. Options:
- GitHub Pages (free)
- Netlify (free)
- Vercel (free)
- Any web host with SSL

### Step 2: Create icons (Optional but Recommended)
For best results, replace SVG icons with PNG images:

```
icons/
├── icon-48x48.png
├── icon-72x72.png
├── icon-96x96.png
├── icon-144x144.png
├── icon-192x192.png
└── icon-512x512.png
```

Update manifest.json to reference these:
```json
"icons": [
  {
    "src": "./icons/icon-192x192.png",
    "sizes": "192x192",
    "type": "image/png",
    "purpose": "any maskable"
  }
]
```

### Step 3: Test Locally
1. Open in Chrome DevTools (F12)
2. Go to Application tab
3. Check Manifest and Service Workers sections
4. Look for install prompt or "Add to Home Screen" option

### Step 4: Deploy
Upload all files to your web host:
- index.html
- styles.css
- script.js
- quran_text.js
- manifest.json
- sw.js

---

## Features Enabled

### Offline Support
- App loads without internet
- Quran text and duas work offline
- Audio may require internet (cached when played)

### Add to Home Screen
- Users can install app like native app
- Appears with app icon on device home screen
- Works in standalone mode (no browser chrome)

### Fast Loading
- Static assets cached on first visit
- Subsequent visits load instantly from cache
- Background updates for new content

### Shortcuts
Quick access to:
- Quran section
- Prayer Times
- Daily Duas
- Adkar Counter

---

## Testing Checklist

- [ ] App loads without internet (disable wifi/network)
- [ ] "Add to Home Screen" option appears (Chrome)
- [ ] App installs and opens in standalone mode
- [ ] All features work offline
- [ ] Service Worker registered successfully
- [ ] Manifest loads without errors
- [ ] Icons display correctly

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | Full |
| Edge | Full |
| Safari | Full (iOS 11+) |
| Firefox | Full |
| Samsung Internet | Full |

---

## Troubleshooting

### "Add to Home Screen" not showing?
1. Ensure HTTPS is enabled
2. Check browser console for errors
3. Verify manifest.json is valid JSON
4. Ensure icons are accessible

### Offline not working?
1. Check Service Worker in DevTools Application tab
2. Verify sw.js is being served correctly
3. Clear site data and re-register

### Install prompt not appearing?
- Shows after 5 seconds on first visit
- User can dismiss with "Later" button
- Stored in localStorage to not show again
