# Romantic Birthday Appreciation Website

A personalized, elegant, and visually engaging birthday appreciation website designed for your girlfriend, inspired by modern editorial landing-page aesthetics, a romantic pink color palette, and your theme song: **"The Only Exception" by Paramore**.

---

## What's New: Editorial Refinements, Floral Accents & Smooth Animations

1. **Refined Hero Section**:
   - **Prominent Girlfriend Portrait**: Replaced the cluttered 3-column layout with a spacious, balanced 2-column editorial grid. Her portrait now stands tall and uninterrupted with a 28px rounded frame, subtle glass caption pill, and gentle corner floral accent.
   - **Removed Clutter**: Completely eliminated the three statistic boxes (`365+`, `10,000+`, `Memories Ahead`), the `Today's VIP` badge, and the heart button that was obscuring her face/chin.
   - **Focused Focal Point**: The birthday greeting and her natural beauty remain the primary focus, complemented by a minimal music player pill, CTA buttons, and a subtle quote from *The Only Exception*.

2. **Botanical Floral Decorations (Red Roses & White Lilies)**:
   - **Hero Section**: A delicate flat-lay sprig of velvety red roses and white lilies accenting the upper corner of her portrait frame.
   - **Appreciation Section**: A clean floral divider with fine stems and a heart emblem separating the sections with elegance.
   - **Our Memories (Collage)**: A botanical rose and lily corner piece adding depth to the layered Polaroid and collage photos.
   - **Birthday Letter**: A romantic floral arrangement placed next to the sealed envelope, creating the feeling of a handwritten letter delivered with fresh flowers.
   - **Centerpiece Final Bouquet (Section 6)**: A grand digital bouquet of hand-tied deep velvet red roses and pure white lilies set within a luminous frosted glass card, featuring a glowing aura and romantic dedication explaining that unlike real flowers, this digital bouquet will never wilt or fade.

3. **Smooth Scroll & Entrance Animations**:
   - **Intersection Observer Reveal**: Elements gently fade in with subtle upward movement (`reveal-on-scroll`) as they enter the viewport.
   - **Staggered Delays**: Cards and companion elements reveal with intentional micro-delays (`stagger-1`, `stagger-2`, etc.) so the page feels alive without overwhelming the eyes.
   - **No Distracting Re-triggers**: Once revealed, elements stay permanently in view (`obs.unobserve`), avoiding any flickering or re-animating when the user scrolls slightly up and down.
   - **Accessibility & Performance**: Respects `prefers-reduced-motion` settings and runs hardware-accelerated transforms for 60fps smoothness on desktop and mobile.

---

## Miniature Romantic Music Player: "The Only Exception" by Paramore

1. **Custom-Designed Romantic Music Card**:
   - Replaced the previous generic music button with a miniature romantic music player card in the hero section dedicated to *"The Only Exception"* by Paramore.
   - **Spinning Vinyl Disc with Album Artwork**: Features a circular vinyl record with authentic grooves, rose gold center spindle, and the official single cover artwork (`assets/images/paramore-the-only-exception.jpg`) that spins smoothly during playback.
   - **Song & Artist Meta**: Prominently displays the song title (**The Only Exception**), artist (**Paramore**), album tag (*Brand New Eyes*), and an *"OUR THEME SONG"* romantic badge.
   - **Live Status Indicator**: Features a glowing pulsing dot and live state text (*"Click to listen together"* when paused, *"Playing our song • Listen with love"* when playing).
   - **Animated Equalizer**: 4 delicate equalizer bars that bounce fluidly when music is playing and smoothly flatten when paused.
   - **Tactile Play/Pause Button**: Custom circular gradient button with smooth SVG transitions between the Play triangle and Pause bars.

2. **Official YouTube Music Integration**:
   - Integrated with the official YouTube music video for *"The Only Exception"* by Paramore (`-J7J_IWUhls`) via the YouTube IFrame Player API.
   - **Visually Unobtrusive Player**: Embedded in a 1px container so she can listen directly inside the website without redirecting or having a video frame disrupt the romantic design.
   - **Continuous Playback**: The music continues playing smoothly as she scrolls and interacts with different sections across the website, never restarting unexpectedly.
   - **Multi-Tier Audio Fallback**: If YouTube is blocked by browser restrictions, an ad blocker, or network conditions, the player seamlessly falls back to the local audio file or the custom Web Audio acoustic guitar synthesizer so music is always 100% reliable.
   - **Synchronized Controls**: Both the hero player card and the floating navigation player remain perfectly synchronized in real-time.

---

## Authentic Birthday Letter (Section 5)

Your exact message is tucked safely inside the sealed vintage envelope:

> "Happy birthday, baby, my love! Sorry, eto lang yung gift na kaya kong ibigay sa'yo. Hayaan mo, babawi ako sa'yo, promise.
>
> I hope you enjoy your day, nababasa mo man 'to ngayon or tapos na birthday mo na, kasi ginagawa ko pa ngayon yung website eh. HWHAAHAHAHA! Sana na-enjoy mo 'tong araw na 'to. And I hope na kahit anong mangyari, wag kang susuko. Kahit feel mo araw-araw inaapi ka ng mundo, lagi mong tandaan na nandito lang ako palagi para sa'yo.
>
> And I'm really thankful na dumating ka sa buhay ko. Hindi ko na alam kung anong gagawin ko kung hindi kita nakilala. Lagi mong tatandaan, baby, na nandito lang ako palagi para sa'yo. Mahal na mahal kita!
>
> IDK what to say kasi parang lahat naman na nasabi ko na sa'yo. HWHHAHA! I LOVE YOUUU, BABY! My wifeyy, my best friend, and my enemyyy. LOVE YOUUUUU, BABYYY! Muahh, muahhhhh!
>
> HAPPY BIRTHDAY!"

- Unfolded stationery reveals the message when the wax seal is broken.
- Features a **"Copy Letter as Keepsake"** button and a **"Seal Letter Back"** button.

---

## Minimal & Sophisticated Vector SVG Icons

All platform emojis have been removed and replaced with clean, elegant inline SVG vector icons:
- Vector hearts and stars
- Minimal filmstrip, envelope, and wax seal graphics
- Smooth rotating vinyl record disc and equalizer bars
- Clean audio controls, microphones, and breeze indicators
- Custom SVG lipstick kiss marks and floating vector hearts for the cake celebration shower

---

## Complete Photo Placement & Story Mapping (30 Photos)

| # | Section | File Name | Story & Placement Description |
|---|---|---|---|
| **1** | **Hero Section** | `her-sunlit-glasses-portrait.jpg` | Featured Hero Portrait: Daytime sunlight, soft smile, and glasses: *"The girl who became my only exception"*. |
| **2** | **Appreciation Card 01** *(Wide)* | `her-portrait-white-lace.jpg` | *Reason #01: The Radiance of Your Smile* — Her chic white lace outfit, highlighting her elegance and warmth. |
| **3** | **Appreciation Card 02** | `her-restaurant-lookback.jpg` | *Reason #02: The Way You Look Back at Me* — Her breathtaking glance over her shoulder at dinner under warm ambient lights. |
| **4** | **Appreciation Card 03** | `her-neon-tanghulu-peace.jpg` | *Reason #03: Sweet Treats & Spontaneous Dates* — Smiling in front of the glowing red MS TANGHULU neon sign with a peace sign. |
| **5** | **Appreciation Card 04** | `her-candid-hotwheels.jpg` | *Reason #04: Your Endearing Curiosity* — Looking at the toy cars rack, showing her playful and inquisitive heart. |
| **6** | **Appreciation Card 05** | `her-store-profile-poised.jpg` | *Reason #05: Dreaming of Our Future Together* — Browsing home decor and quietly envisioning the warm home you'll build together. |
| **7** | **Appreciation Card 06** | `her-candid-cafe.jpg` | *Reason #06: Our Quiet Cafe Dates* — Her thoughtful profile resting chin in hand at a cafe table. |
| **8** | **Appreciation Card 07** | `her-candid-glasses-bus.jpg` | *Reason #07: Your Cute Everyday Pouts* — Candid commute selfie with glasses and adorable pout. |
| **9** | **Appreciation Card 08** | `her-glam-blonde-portrait.jpg` | *Reason #08: Your Breathtaking Elegance* — Glamorous portrait with wavy hair and jewelry. |
| **10** | **Appreciation Card 09** | `her-dark-hair-playful.jpg` | *Reason #09: Your Playful & Feisty Spirit* — Confident portrait with hand sign, full of energy and fun. |
| **11** | **Appreciation Card 10** | `her-bulsu-uniform-smile.jpg` | *Reason #10: Your Dedication & Bright Ambition* — Smiling warmly in her BulSU uniform on campus steps, pursuing her bright future. |
| **12** | **Appreciation Card 11** | `her-beanie-close-smile.jpg` | *Reason #11: The Cutest Smile in the Room* — Looking up in her black beanie with both hands, melting hearts with that soft smile. |
| **13** | **Appreciation Card 12** | `her-sunny-campus-portrait.jpg` | *Reason #12: Sunlit Afternoons With You* — Resting cheek in hand under golden afternoon campus sunlight, looking ethereal. |
| **14** | **Appreciation Card 13** | `her-car-night-dreamy.jpg` | *Reason #13: Safe Rides Home in the Quiet Night* — Sharing wired earphones in the car with that peaceful, loving gaze. |
| **15** | **Appreciation Card 14** *(Wide)* | `her-night-market-full.jpg` | *Reason #14: Late-Night Strolls & Street Market Food* — Full-length night market walk under hanging fairy lights with sneakers & off-shoulder tee. |
| **16** | **Section 3: Reminder Front** | `her-nha-sweet-smile.jpg` | *My Radiant Only Exception* — Front polaroid cameo: radiant direct smile with glasses and chin in hand. |
| **17** | **Section 3: Reminder Back** | `her-nha-pout-glasses.jpg` | *Even Your Pouts Are Poetry* — Tilted layered polaroid: adorable cheek-in-hand pout with glasses. |
| **18** | **Section 4: Memories Collage 1** | `couple-outdoor-walk.jpg` | Back-tall collage card: Sunny outdoor walk together with caps and water bottles (*Everyday Best Friends*). |
| **19** | **Section 4: Memories Collage 2** | `couple-sweet-close-up.jpg` | Overlapping sweet close-up selfie of the two of you leaning together (*10/10 In Love*). |
| **20** | **Section 4: Memories Collage 3** | `couple-flash-mirror.jpg` | Overlapping flash mirror selfie capturing your late-night memories (*Forever Favorite*). |
| **21** | **Photobooth Feature Card** | `original-photoism-strip.jpg` | **THE ORIGINAL DIGITAL PHOTOBOOTH STRIP**: Direct high-resolution digital scan of the 4-panel Photoism wedding veil and bouquet strip. |
| **22** | **Photobooth Keepsakes 1** | `couple-photostrips-photoism.jpg` | *The Printed Strips in Hand* — Holding up the physical Photoism photo strips together. |
| **23** | **Photobooth Keepsakes 2** | `couple-photobooth-veil-flowers.jpg` | *Playing Bride & Groom* — Bridal veil with pearls and dinosaur headpiece with flowers! |
| **24** | **Photobooth Keepsakes 3** | `couple-fish-headbands.jpg` | *Fish Headband Adventures* — The two of you wearing matching plush yellow fish headbands. |
| **25** | **Photobooth Keepsakes 4** | `couple-silly-tongues.jpg` | *Never Too Serious, Always in Love* — Silly diner candids with tongues out. |
| **26** | **Photobooth Keepsakes 5** | `her-bulsu-uniform-tongue.jpg` | *Campus Silliness* — Playfully sticking tongue out in her BulSU uniform! |
| **27** | **Photobooth Keepsakes 6** | `her-cafe-beanie-full.jpg` | *Chic Beanie Date* — Relaxing at our cozy cafe counter table with black beanie and off-shoulder shirt. |
| **28** | **Photobooth Keepsakes 7** | `her-floral-buckethat-night.jpg` | *Floral Bucket Hat & Earphones* — Sweet night adventures with wired earphones and a cute subtle pout. |
| **29** | **Photobooth Keepsakes 8** | `her-moody-night-glam.jpg` | *Midnight Glow* — Moody nighttime flash portrait with soft eyeliner and dark hair. |
| **30** | **Keepsake Archive** | `her-dreamy-hoodie-film.jpg` | *December Memories* — Nostalgic film-timestamped photo preserved in the archive. |

---

## Interactive Features

- **Microphone Blow Detection**: Uses Web Audio API to detect breath turbulence when blowing into the microphone to extinguish the candles.
- **Sealed Envelope Reveal**: Clicking the wax seal flips the envelope flap in 3D and reveals the personal letter with sound effects and confetti.
- **Natural Colors by Default**: Preserves original photo lighting and natural skin tones, with an optional pink duotone filter toggle in the navigation bar.
- **High-Resolution Lightbox**: Click any photo across the site to view in full resolution.
- **Responsive Floating Navigation**: Fixed and streamlined navbar that never wraps or scrambles across any screen size. Desktop screens enjoy full links and badges; laptops adapt spacing cleanly; tablets and mobile devices seamlessly collapse into an animated hamburger menu with a frosted glass dropdown drawer. On small phones, action buttons adapt into sleek circular icons so everything stays in a single row.

---

## How to View

1. Open your project folder:
   `C:\Users\johnl\OneDrive\Attachments\Desktop\myLove`
2. **Double-click** `index.html`. It opens directly in your browser without any build process.
3. If you have an MP3 file of *"The Only Exception"*, save it as `assets/audio/the-only-exception.mp3` for studio recording playback.
