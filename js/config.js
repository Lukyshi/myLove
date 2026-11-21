/**
 * Personalized Birthday Website Configuration
 * -------------------------------------------
 * Personalized with all 19 real photographs including the original digital
 * Photoism photobooth strip, date night candids, and sweet memories.
 * Inspired by our theme song: "The Only Exception" by Paramore.
 */

const BIRTHDAY_CONFIG = {
  // --- Personal Details ---
  girlfriendName: "My Love",
  girlfriendNickname: "Sweetheart",
  boyfriendName: "Forever Yours",
  monogram: "K & L",
  birthdayDate: "November 21",
  birthYearOrAge: "",

  // --- Theme & Song Settings ---
  // "The Only Exception" by Paramore — Our Theme Song
  music: {
    title: "The Only Exception",
    artist: "Paramore",
    album: "Brand New Eyes",
    tagline: "Our Theme Song",
    youtubeVideoId: "-J7J_IWUhls",
    albumArtwork: "assets/images/paramore-the-only-exception.jpg",
    audioUrl: "assets/audio/the-only-exception.mp3"
  },
  customAudioUrl: "assets/audio/the-only-exception.mp3",
  songTitle: "The Only Exception",

  // false = Natural vibrant colors (preserves skin tones and lighting)
  // true = Stylized romantic duotone pink filter inspired by reference
  enableDuotoneFilter: false,

  // --- Hero Section ---
  hero: {
    tag: "A SPECIAL CELEBRATION • TODAY IS ALL ABOUT YOU",
    heading: "Happy Birthday, to the Light of My Life",
    intro: "Every day with you is a gift, but today is the most special of all. In a world where love can feel fragile and uncertain, you became the only exception I would choose a million times over.",
    themeSongNotice: "Our Theme Song • The Only Exception by Paramore",
    stats: [
      { number: "365+", label: "Days Cherished Every Year" },
      { number: "10,000+", label: "Smiles Given to Me" },
      { number: "∞", label: "Memories Still Ahead" }
    ],
    portraitImage: "assets/images/her-sunlit-glasses-portrait.jpg",
    portraitCaption: "The girl who became my only exception"
  },

  // --- Section 2: Appreciation ("Things I Love About You") ---
  appreciation: [
    {
      id: "reason-1",
      number: "01",
      category: "smile",
      title: "The Radiance of Your Smile",
      shortDescription: "No matter how heavy the world feels, one gentle glance at you glowing in that gorgeous white outfit instantly puts my heart at peace.",
      fullNote: "Your smile has this effortless magic. It's not just how breathtaking you look—it's the genuine warmth behind it. Whenever you smile, my whole day is made. I hope this year brings you endless reasons to shine that beautiful smile.",
      image: "assets/images/her-portrait-white-lace.jpg",
      featured: true // Wide card like in reference
    },
    {
      id: "reason-2",
      number: "02",
      category: "smile",
      title: "The Way You Look Back at Me",
      shortDescription: "Turning your shoulder at dinner, catching my eye with that soft, captivating glance that makes my heart skip a beat.",
      fullNote: "Sitting across from you at dinner, seeing you turn your head with those warm lights glowing behind you—it’s like a scene straight out of a classic movie. You look so effortlessly beautiful, and in that moment, I'm reminded how lucky I am to be yours.",
      image: "assets/images/her-restaurant-lookback.jpg",
      featured: false
    },
    {
      id: "reason-3",
      number: "03",
      category: "dates",
      title: "Sweet Treats & Late-Night Dates",
      shortDescription: "Spontaneous stops for strawberry tanghulu, smiling under bright neon signs, and making sweet memories together.",
      fullNote: "Those random evening adventures where we hunt down sweet treats, pose in front of glowing Korean signs, and make each other laugh. It's not about what we eat—it's about the pure joy of experiencing every little thing with you.",
      image: "assets/images/her-neon-tanghulu-peace.jpg",
      featured: false
    },
    {
      id: "reason-4",
      number: "04",
      category: "moments",
      title: "Your Endearing Curiosity",
      shortDescription: "How you get so fascinated by little things—like browsing the toy car aisle—with that cute, focused look on your face.",
      fullNote: "Some of my favorite moments are just watching you be completely yourself. Standing in the store aisle, checking out the Hot Wheels rack with total concentration. You find joy in the little details, and that makes life with you so charming.",
      image: "assets/images/her-candid-hotwheels.jpg",
      featured: false
    },
    {
      id: "reason-5",
      number: "05",
      category: "dates",
      title: "Dreaming of Our Future Together",
      shortDescription: "Walking through home stores, looking at cozy furniture, and quietly imagining the warm home we'll build one day.",
      fullNote: "Every time we walk through furniture aisles, looking at beds and lamps and decor, I don't just see furniture—I see our future. A cozy place filled with our laughter, quiet mornings, and endless love.",
      image: "assets/images/her-store-profile-poised.jpg",
      featured: false
    },
    {
      id: "reason-6",
      number: "06",
      category: "moments",
      title: "Our Quiet Cafe Dates",
      shortDescription: "Resting your chin on your hand, sharing sweet whispers, and losing track of time in cozy corners together.",
      fullNote: "I love the quiet moments just as much as the grand adventures. Sitting across from you, watching you lost in thought, and talking about everything under the sun. With you, even silence feels intimate and warm.",
      image: "assets/images/her-candid-cafe.jpg",
      featured: false
    },
    {
      id: "reason-7",
      number: "07",
      category: "moments",
      title: "Your Cute Everyday Pouts",
      shortDescription: "Those adorable candid expressions you make on busy transit rides that always make me want to reach over and hold your hand.",
      fullNote: "Even when the commute is long, the weather is warm, or we're tired, having you right beside me in your glasses with that cute serious expression makes every trip an adventure I wouldn't trade for anything.",
      image: "assets/images/her-candid-glasses-bus.jpg",
      featured: false
    },
    {
      id: "reason-8",
      number: "08",
      category: "smile",
      title: "Your Breathtaking Elegance",
      shortDescription: "The undeniable grace, beauty, and confidence you carry effortlessly in every single look.",
      fullNote: "You take my breath away every single day. Whether you're all dressed up with your hair styled and jewelry gleaming or relaxing in a casual tee, you are the most stunning girl in any room.",
      image: "assets/images/her-glam-blonde-portrait.jpg",
      featured: false
    },
    {
      id: "reason-9",
      number: "09",
      category: "smile",
      title: "Your Playful & Feisty Spirit",
      shortDescription: "The energetic, silly, and vibrant spark that keeps our relationship exciting and full of laughter.",
      fullNote: "You are my best friend, my rock, and my favorite adventure. Your playful humor, your spontaneity, and the sweet way you love me unconditionally mean more to me than words can ever capture.",
      image: "assets/images/her-dark-hair-playful.jpg",
      featured: false
    },
    {
      id: "reason-10",
      number: "10",
      category: "smile",
      title: "Your Dedication & Bright Ambition",
      shortDescription: "Seeing you in your BulSU uniform, studying hard and pursuing your goals with that sweet, radiant smile.",
      fullNote: "I admire your drive and perseverance so much, baby. Every time I see you in your uniform, balancing your studies, your goals, and everything life throws at you, I feel so proud to be by your side cheering you on.",
      image: "assets/images/her-bulsu-uniform-smile.jpg",
      featured: false
    },
    {
      id: "reason-11",
      number: "11",
      category: "smile",
      title: "The Cutest Smile in the Room",
      shortDescription: "Looking up in your black beanie with both hands, giving me that sweet smile that melts my heart in a second.",
      fullNote: "You have this effortless way of being the most adorable human being on the planet. One sweet look up at me in that beanie, and literally any stress or worry I had just disappears.",
      image: "assets/images/her-beanie-close-smile.jpg",
      featured: false
    },
    {
      id: "reason-12",
      number: "12",
      category: "moments",
      title: "Sunlit Afternoons With You",
      shortDescription: "Resting your chin in your hand under the golden afternoon sun, looking so serene and breathtaking.",
      fullNote: "The afternoon sunlight hitting your face while you rest your cheek on your hand—you look like an angel. Those quiet, unhurried moments together are the ones I replay in my head when I miss you.",
      image: "assets/images/her-sunny-campus-portrait.jpg",
      featured: false
    },
    {
      id: "reason-13",
      number: "13",
      category: "moments",
      title: "Safe Rides Home in the Quiet Night",
      shortDescription: "Sharing wired earphones in the car, watching city lights pass by, knowing I'm right where I'm meant to be.",
      fullNote: "Late-night car rides, tired after a long day, sharing music through earphones while looking at each other in the soft dashboard light. It's the peaceful feeling of being completely safe and loved.",
      image: "assets/images/her-car-night-dreamy.jpg",
      featured: false
    },
    {
      id: "reason-14",
      number: "14",
      category: "dates",
      title: "Late-Night Strolls & Street Market Food",
      shortDescription: "Walking under warm fairy lights, browsing street stalls, and sharing little snacks with you under the stars.",
      fullNote: "Some of my favorite memories are just walking around with you at night markets with the string lights glowing above us. It doesn't matter where we are—as long as I'm walking next to you, it feels like the best place on earth.",
      image: "assets/images/her-night-market-full.jpg",
      featured: true
    }
  ],

  // --- Section 3: A Little Reminder ---
  reminder: {
    accentText: "A gentle reminder for your heart",
    heading: "No Matter How Many Candles on Your Cake, You Shine the Brightest",
    body: "If you ever doubt how deeply appreciated and adored you are, remember that to me, you are irreplaceable. In a world where love can feel like too great a risk, loving you became the easiest and truest thing I have ever done.",
    quote: "“I had sworn to myself that I was content with loneliness... but you are the only exception.”",
    photo: "assets/images/her-nha-sweet-smile.jpg",
    photoCaption: "My radiant only exception • The smile that lights up my whole world",
    photoBack: "assets/images/her-nha-pout-glasses.jpg",
    photoBackCaption: "Even your cute everyday pouts are pure poetry"
  },

  // --- Section 4: Our Memories Together (Layered Collage) ---
  memories: {
    sectionTag: "CHAPTERS OF OUR STORY",
    heading: "Every Single Moment With You is a Keepsake",
    storyText: "From the very first day we began talking to every spontaneous adventure since, my favorite memories all have one thing in common: you are in them. Here are just a few little glimpses of our journey so far.",
    photos: [
      {
        id: "mem-1",
        title: "Everyday Adventures",
        date: "Sunny Walks",
        badge: "Everyday Best Friends",
        caption: "Sunny walks, cap on, water bottles in hand, and the easiest smiles with each other.",
        image: "assets/images/couple-outdoor-walk.jpg"
      },
      {
        id: "mem-2",
        title: "Where My Heart Belongs",
        date: "Sweet Dates",
        badge: "10/10 In Love",
        caption: "Leaning close together, smiling at the camera, knowing I found my favorite person.",
        image: "assets/images/couple-sweet-close-up.jpg"
      },
      {
        id: "mem-3",
        title: "Flash Mirror Candids",
        date: "Night Memories",
        badge: "Forever Favorite",
        caption: "Late-night photobooths and flash mirror selfies that capture our world in gold.",
        image: "assets/images/couple-flash-mirror.jpg"
      }
    ]
  },

  // --- Photobooth & Playful Keepsakes Gallery ---
  keepsakes: {
    tag: "ORIGINAL PHOTOBOOTH & KEEPSAKES",
    heading: "Because With You, Every Moment is Pure Joy",
    subheading: "Featuring our original digital Photoism photobooth strip, bridal veils, dinosaur headbands, fish hats, and silly diner candids.",
    originalStrip: {
      image: "assets/images/original-photoism-strip.jpg",
      badge: "ORIGINAL DIGITAL SCAN • PHOTOISM",
      title: "Our 4-Pose Wedding Photobooth Strip",
      desc: "Veil, bouquet, sweet hugs, and silly smiles preserved in high-res black and white."
    },
    items: [
      {
        title: "The Printed Strips in Hand",
        badge: "TANGIBLE KEEPSAKES",
        desc: "Holding up our printed Photoism photo strips together.",
        image: "assets/images/couple-photostrips-photoism.jpg"
      },
      {
        title: "Playing Bride & Groom",
        badge: "MY FUTURE BRIDE",
        desc: "You in the bridal veil with the pearl headband, me with the green dinosaur and flowers.",
        image: "assets/images/couple-photobooth-veil-flowers.jpg"
      },
      {
        title: "Fish Headband Adventures",
        badge: "MATCHING SILLINESS",
        desc: "Trying on plush yellow fish headbands and laughing at how silly we look together.",
        image: "assets/images/couple-fish-headbands.jpg"
      },
      {
        title: "Never Too Serious, Always in Love",
        badge: "DINER CANDIDS",
        desc: "Sticking our tongues out across the table—our love is genuine, silly, and 100% us.",
        image: "assets/images/couple-silly-tongues.jpg"
      },
      {
        title: "Campus Silliness",
        badge: "ADORABLE TONGUE OUT",
        desc: "Sticking your tongue out with that cute look in your BulSU uniform—always keeping me laughing.",
        image: "assets/images/her-bulsu-uniform-tongue.jpg"
      },
      {
        title: "Chic Beanie Date",
        badge: "COZY CAFE CORNER",
        desc: "Lounging at the high table in your black beanie and off-shoulder tee, looking effortlessly stylish.",
        image: "assets/images/her-cafe-beanie-full.jpg"
      },
      {
        title: "Floral Bucket Hat & Earphones",
        badge: "NIGHT ADVENTURES",
        desc: "Sharing playlists through wired earphones while you rock your floral bucket hat with that sweet pout.",
        image: "assets/images/her-floral-buckethat-night.jpg"
      },
      {
        title: "Midnight Glow",
        badge: "EFFORTLESS BEAUTY",
        desc: "Late-night flash portraits with dark hair and soft eyeliner—simply stunning from every angle.",
        image: "assets/images/her-moody-night-glam.jpg"
      }
    ]
  },

  // --- Section 5: A Letter for You ---
  letter: {
    envelopeTo: "For My Beloved Girlfriend",
    envelopeDeliveryNote: "Delivered with infinite love • On your birthday",
    envelopeStampText: "SPECIAL\nDELIVERY",
    salutation: "To My Dearest Baby,",
    paragraphs: [
      "Happy birthday, baby, my love! Sorry, eto lang yung gift na kaya kong ibigay sa'yo. Hayaan mo, babawi ako sa'yo, promise.",
      "I hope you enjoy your day, baka ngayon mo palang nababasa to tapos na birthday mo, kasi ginagawa ko pa ngayon yung website eh. HWHAAHAHAHA! Sana na-enjoy mo 'tong araw na 'to. And I hope na kahit anong mangyari, wag kang susuko. Kahit feel mo araw-araw inaapi ka ng mundo, lagi mong tandaan na nandito lang ako palagi para sa'yo.",
      "And I'm really thankful na dumating ka sa buhay ko. Hindi ko na alam kung anong gagawin ko kung hindi kita nakilala. Lagi mong tatandaan, baby, na nandito lang ako palagi para sa'yo. Mahal na mahal kita!",
      "IDK what to say kasi parang lahat naman na nasabi ko na sa'yo. HWHHAHA! I LOVE YOUUU, BABY! My wifeyy, my best friend, and my enemyyy. LOVE YOUUUUU, BABYYY! Muahh, muahhhhh!",
      "HAPPY BIRTHDAY!"
    ],
    signOff: "With all my love and devotion,",
    signature: "Always Yours"
  },

  // --- Section 6: Interactive Birthday Cake Surprise ---
  cakeSurprise: {
    instruction: "Make a wish and blow out the candles!",
    surpriseMessage: "Happy Birthday, to My Only Exception",
    surpriseSubtext: "Sending you a shower of a thousand sweet kisses. May every wish whispered in your heart today come true, my love."
  },

  // --- Section 6: Final Section Promises ---
  finalSection: {
    tag: "BEFORE YOUR SPECIAL DAY CONCLUDES",
    heading: "Make a Birthday Wish, Sweetheart",
    subheading: "Close your eyes, think of something your heart desires most, and blow out the candles below.",
    promises: [
      {
        number: "01",
        title: "Always Be Your Biggest Fan",
        description: "I promise to celebrate your wins, cheer you on through your doubts, and remind you of how extraordinary you are every day."
      },
      {
        number: "02",
        title: "Listen with a Patient Heart",
        description: "I promise to always give you a safe place to speak your mind, be vulnerable, cry when you need to, and laugh without holding back."
      },
      {
        number: "03",
        title: "Choose You, Every Single Day",
        description: "Through every season of life, through the sunny days and the stormy skies, my hand and heart remain faithfully yours."
      }
    ]
  }
};

window.BIRTHDAY_CONFIG = BIRTHDAY_CONFIG;
