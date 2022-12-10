const productDatas = [
    {
        id: 1, title: 'SPRITE® LYMONADE', img: 'img/Products/1.png',
        description: 'Just a splash makes all the difference. Sprite + Lemonade.',
        Factimg: 'img/Products/11.png',

        par1: 'A lemon-lime soda with a splash of lemonade.',
        par2: 'Sprite Lymonade is available in 7.5 oz mini cans, 12 oz cans, 20 oz bottles, 24 oz bottles, and multi-packs.',
        par3: 'A lemon-lime soda with a splash of lemonade.',

        factDetail: 'CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, CLARIFIED LEMON JUICE FROM CONCENTRATE, CITRIC ACID, NATURAL FLAVORS, SODIUM BENZOATE (TO PROTECT TASTE), SODIUM CITRATE, POTASSIUM SORBATE (TO PROTECT TASTE), MODIFIED FOOD STARCH, GLYCEROL ESTER OF ROSIN, YELLOW 5.'
    },
    {
        id: 2, title: 'SPRITE® CHERRY', img: 'img/Products/2.png',
        description: 'You were already drinking it with Coca-Cola Freestyle, so we bottled it. Ice-cold refreshment with just the right amount of cherry.',
        Factimg: 'img/Products/22.png',

        par1: 'A lemon-lime cherry pop with 100% natural flavors.',
        par2: 'The perfect balance of lemon-lime Sprite with cherry.',
        par3: 'Sprite Cherry is available in 7.5 oz mini cans, 12 oz cans, 20 oz bottles, 24 oz bottles, and multi-packs.',

        factDetail: 'CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, CITRIC ACID, NATURAL FLAVORS, SODIUM CITRATE, SODIUM BENZOATE (TO PROTECT TASTE).'
    },
    {
        id: 3, title: 'SPRITE® ZERO SUGAR', img: 'img/Products/3.png',
        description: 'Who says you can’t do more with less? The iconic great taste of Sprite with zero sugar.',
        Factimg: 'img/Products/33.png',

        par1: 'A lemon-lime soda with 100% natural flavors.',
        par2: 'Sprite Zero Sugar is a diet Sprite with no sugar.',
        par3: 'Sprite soda is available in 7.5 oz mini cans, 12 oz cans, 16.9 oz bottles, 20 oz bottles, 2-liter bottles, 12 oz bottle 8 packs, and a variety of multi-packs.',

        factDetail: 'CARBONATED WATER, CITRIC ACID, POTASSIUM CITRATE, NATURAL FLAVORS, POTASSIUM BENZOATE (TO PROTECT TASTE), ASPARTAME, ACESULFAME POTASSIUM.VERY LOW SODIUM ZERO CALORIES 100% natural flavors perfectly clear'
    },
    {
        id: 4, title: 'SPRITE®', img: 'img/Products/4.png',
        description: 'The OG, the flavor that started it all—classic, cool, crisp lemon-lime taste that’s caffeine free with 100% natural flavors.',
        Factimg: 'img/Products/44.png',

        par1: 'A lemon-lime soda with 100% natural flavors.',
        par2: 'Sprite soda is available in 7.5 oz mini cans, 8 oz bottles, 12 oz cans, 12 oz bottles,13.2 oz bottles, 16 oz cans, 16.9 oz bottles, 20 oz bottles, 1 literbottles, 1.25 liter bottles, 2 liter bottles, 3 liter bottles, and a variety of multi-packs.',
        par3: 'Sprite Zero Sugar is also available.',

        factDetail: 'CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, CITRIC ACID, NATURAL FLAVORS, SODIUM CITRATE, SODIUM BENZOATE (TO PROTECT TASTE).100% NATURAL FLAVORS NO CAFFEINE'
    },
    {
        id: 5, title: 'SPRITE® TROPICAL MIX', img: 'img/Products/7.png',
        description: 'An ode to our past for all the Sprite Remix fans from the early 2000s. Rediscover the combination of the crisp, familiar Sprite lemon-lime taste with delicious strawberry and pineapple flavors.',
        Factimg: 'img/Products/55.png',

        par1: 'A lemon-lime soda with 100% natural flavors.',
        par2: 'The perfect balance of lemon-lime Sprite with strawberry and pineapple flavors.',
        par3: 'Sprite Tropical Mix is available in 20 oz. bottles.',

        factDetail: 'CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, CITRIC ACID, NATURAL FLAVORS, SODIUM CITRATE, SODIUM BENZOATE'
    },
    {
        id: 6, title: 'SPRITE® WINTER SPICED CRANBERRY', img: 'img/Products/6.png',
        description: 'Unwrap the spiciest Sprite of the year. Sprite Winter Spiced Cranberry infuses the crisp lemon-lime flavor of Sprite with a warm spice blend and tart Cranberry flavor.',
        Factimg: 'img/Products/66.png',

        par1: 'Sprite Winter Spiced Cranberry infuses the crisp lemon-lime flavor of Sprite with a spice blend and tart Cranberry flavor.',
        par2: 'NO CAFFEINE',
        par3: 'the crisp lemon-lime flavor of Sprite',

        factDetail: 'CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, NATURAL FLAVORS, CITRIC ACID, SODIUM CITRATE, SODIUM BENZOATE (TO PROTECT TASTE).'
    },
    {
        id: 7, title: 'SPRITE® WINTER SPICED CRANBERRY ZERO SUGAR', img: 'img/Products/5.png',
        description: 'Unwrap the spiciest Sprite of the year, now available with zero sugar and zero calories. Sprite Winter Spiced Cranberry Zero Sugar infuses the crisp lemon-lime flavor of Sprite with a spice blend and tart Cranberry flavor, best served ice-cold.',
        Factimg: 'img/Products/77.png',

        par1: 'Sprite Winter Spiced Cranberry Zero Sugar infuses the crisp lemon-lime flavor of Sprite with a spice blend and tart Cranberry flavor.',
        par2: 'Zero sugar and zero calories',
        par3: 'NO CAFFEINE',

        factDetail: 'CARBONATED WATER, LESS THAN 2% OF: CITRIC ACID, NATURAL FLAVORS, POTASSIUM CITRATE, POTASSIUM BENZOATE (TO PROTECT TASTE),  ASPARTAME, ACESULFAME POTASSIUM.'
    },
]

const productOfMain = [
    {
        id: 1, title: 'SPRITE® LYMONADE', img: 'img/Products/1.png',

    },
    {
        id: 2, title: 'SPRITE® CHERRY', img: 'img/Products/2.png',

    },
    {
        id: 3, title: 'SPRITE® ZERO SUGAR', img: 'img/Products/3.png',

    },
    {
        id: 4, title: 'SPRITE®', img: 'img/Products/4.png',

    },
]

const creators = [
    {
        id: 1, name:'AKUA', link:'INSTAGRAM', img:'img/creators/1.png',
        description:'Akua Shabaka is an artist primarily known for her fashion label as part of the mother-daughter design duo, House of Aama- which explores black history and folklore within the Southern states and African Diaspora. Akua was born and raised in Los Angeles with southern and Caribbean’s roots. Growing up with Pan African entrepreneurial parents and a long.'
    },

    {
        id: 2, name: 'AUSAR', link: 'INSTAGRAM', img:'img/creators/2.jpg',
        description: 'Ausar is a rapper and singer from Chicago’s South Side and South Suburbs. He fell in love with music at a young age, initially gaining inspiration from the gospel. With cosigns from Lupe Fiasco, 9th Wonder, Rakim, and a premiere on Netflix’s Rhythm + Flow — Ausars performed and worked .'
    },
    {
        id: 3, name:'SAGE', link:'INSTAGRAM', img:'img/creators/3.jpg',
        description:'Sage Guillory is a transformative artist from Atlanta, GA. In his childhood, Sage felt like he didn’t fit in anywhere which led to him perusing art and self enlightenment on his own terms. After leaving art school, he cultivated his creative vision through various mediums, and has centered most '
    },
    {
        id: 4, name:'DOROTHY', link:'INSTAGRAM', img:'img/creators/4.jpg',
        description:'Brooklyn, NY based fashion designer Dorothy Lawes is just getting started. Apart from collaborating with Sprite at the age of 18, she has sewn a great amount of garments for important events such as Adidas Boost your Style and was even granted the opportunity to work with model Aweng Choul.'
    },
    {
        id: 5, name:'JAMAL WADE', link:'WEBSITE', img:'img/creators/5.png',
        description:'Jamal is a cross disciplinary artist from Louisiana based in Los Angeles. His background in performance and dance fuels his passion for visual narratives that move people from the inside out. Drawing from his southern roots and love of fantasy, Jamal loves creating worlds that defy the '
    },
    {
        id: 6, name:'YVETTE GLASCO', link:'INSTAGRAM', img:'img/creators/6.jpg',
        description:'Yvette Glasco is an Atlanta-based Creative. She specializes in film and photography. In 2013, she graduated with a Bachelors in Digital Filmmaking and TV Production. Since then she has concentrated on creating content to enhance artist and brand visual content. Her artistry lies in her .'
    },
    {
        id: 7, name:'ASAKA THE RENEGADE', link:'SONGWHIP', img:'img/creators/7.png',
        description:'Born and raised in the city of Detroit, up-and-coming artist Asaka The Renegades distinct sound pairs his lyrical flow with a tapestry of funk, R&B, and trap sounds.'
    },
    {
        id: 8, name:'ANONYMUZ', link:'SPOTIFY', img:'img/creators/8.png',
        description:'Broward County, Florida artist and producer Anonymuz built a cult base by releasing free music on the internet. He made his official debut with the release of his 2016 album "Vice City."'
    },
    {
        id: 9, name:'AIROSPACE', link:'SPOTIFY', img:'img/creators/9.png',
        description:'Airospace is a galactic hip hop experience wrapped in multi-dimensional production and beautiful imagery. Hailing from Washington, DC, he describes himself as a "sad rap boy with goth girl features" and creates music guided by emotion and honest expression.'
    },
    {
        id: 10, name:'A9E', link:'SPOTIFY', img:'img/creators/10.png',
        description:'A9E (Pronounced Age) is a rising artist out of Moreno Valley, California. From his infectious beats and hooks to his passionate delivery, his music is universal. He worked closely with Sprite under SpriteWay.'
    },
    {
        id: 11, name:'BINO', link:'LINKTR.EE', img:'img/creators/11.png',
        description:'Bino Corleone’s clever bars and wavy sound took him from recording his first demo on his cell phone to performing with Cardi B, Migos, and Lil Baby on the Sprite BETX stage'
    },
    {
        id: 12, name:'BEMYFIASCO', link:'WEBSITE', img:'img/creators/12.png',
        description:'Bianca "BeMyFiasco" Rodriguez is a singer/songwriter from Dallas, TX. She has been creating since the age of 3. Her smooth buttery vocals shone on her 2013 debut project "Solitude" and her 2016 sophomore release "Layers." Her influences include Anita Baker, DAngelo, Minnie Riperton, Chaka Khan and SWV.'
    },
    {
        id: 13, name:'BARBARA', link:'WEBSITE', img:'img/creators/13.png',
        description:'Barbara Rego is a multimedia artist from Atlanta and based in Los Angeles. She is most recognized for her collage designs but specializes in creative direction, graphics, and video. She hopes people see her art journey as inspiration to create their own opportunities and work to be the best version of themselves.'
    },
    {
        id: 14, name:'AUDI SHAWTY', link:'APPLE MUSIC', img:'img/creators/14.png',
        description:'Audi Shawty is a music artist from the Eastern Shore of Virginia. He uses his pain from his past to create songs that really hit home. His inspiration? Lil Durk and Gunna. He hopes to collab with both of them one day.'
    },
    {
        id: 15, name:'CAM THE ARTISAN', link:'SPOTIFY', img:'img/creators/15.png',
        description:'21-year-old rapper Cam The Artisan is an eclectic standout breaking through the crowded Atlanta field as one of its most refreshing new acts. In a city known for gritty, 808-heavy trap music, Cam makes a perfect blend of neo-soul and hip-hop that has gained him a loyal fanbase.'
    },
    {
        id: 16, name:'BRAYLEN', link:'WEBSITE', img:'img/creators/16.png',
        description:'Braylen Dion is a filmmaker and photographer based in Atlanta, Georgia. He creates dreamy, cinematic images to change the narrative of how Black people are represented in media.'
    },
    {
        id: 17, name:'ESTE', link:'SPOTIFY', img:'img/creators/17.png',
        description:'Este is a new age rapper with many influences, including his Mexican and Cuban roots and Atlanta upbringing. His fundamentals come from boom-bap and pop, which he incorporates into his music along with occasional Latino slang and rhythm. His newest project comes in a three-part series called “Angels,” which explores many corners within hip-hop.'
    },
    {
        id: 18, name:'ELAN', link:'WEBSITE', img:'img/creators/18.png',
        description:'Elan Watson is a visual artist from Oakland, California. His main goal is to show the beauty of life through his photos and collages.'
    },
    {
        id: 19, name:'CHOKER', link:'INSTAGRAM', img:'img/creators/19.png',
        description:'Choker is an independent artist who sings, produces and writes music inspired by all art forms.'
    },
    {
        id: 20, name:'ECLIPSE DARKNESS', link:'SPOTIFY', img:'img/creators/20.png',
        description:'Eclipse Darkness captured audiences and the judges when he showcased his tongue twisting freestyling skills on the hit reality show Americas Got Talent. Since then, he has continued to rise in the music industry, collaborating with iconic legends like Busta Rhymes and Twista.'
    },
    {
        id: 21, name:'JERMISDOPE', link:'SPOTIFY', img:'img/creators/21.png',
        description:'Jermisdope is a Hip-Hop/Pop artist from Ferndale, Michigan. His musical influences include Tyler, the Creator, Steve Lacy, A$AP Mob and Schoolboy Q. Jerm spends his time performing in the Detroit area and writing songs for other artists.'
    },
    {
        id: 22, name:'HUNDO', link:'SPOTIFY', img:'img/creators/22.png',
        description:'This Atlanta born, San Fernando Valley-repping MC received the name "Hundo" because of his reputation for speaking truth in raw form. Sonically, this shows up through his mix of hard hitting rhymes and breezy melodies. Get in touch with what this community-leading, former youth pastor is doing by hearing his latest project, "Quarantine EP."'
    },
    {
        id: 23, name:'GERMAINE', link:'WEBSITE', img:'img/creators/23.png',
        description:'Coming from California, artist and songwriter Germaines catchy flow and heavy hooks has kept him busy with brand deals and new projects.'
    },
    {
        id: 24, name:'MULAMANDAM', link:'WEBSITE', img:'img/creators/24.png',
        description:'Karsheam Simpkins, better known by his stage name MulaManDam, is an artist from Long Island, NY. In 2015 he was struck by a vehicle, nearly losing his life. He recovered miraculously and vowed that he would work on his passion 110% by taking advantage of every moment.'
    },
    {
        id: 25, name:'MILLEZ313', link:'SPOTIFY', img:'img/creators/25.png',
        description:'Millez313 is an artist based out of Detroit, Michigan. He wants to put his music and the underground Detroit music scene on the map.'
    },
    {
        id: 26, name:'KINGTREY', link:'SPOTIFY', img:'img/creators/26.png',
        description:'KingTrey is a 20-year-old artist from Chicago, IL. He started gaining traction early in 2019 after landing a partnership with Sprite. He has now amassed over half a million streams on Spotify alone.'
    },
    {
        id: 27, name:'PROHAIZE', link:'WEBSITE', img:'img/creators/27.png',
        description:'Prohaize is an Atlanta raised artist with Ghanaian roots. He cites Andre 3000, Burna Boy and Old Kanye as artists that inspire him. His latest project "Dear 20 Something" released in February 2020 embodies his passion to connect with people through storytelling and great music.'
    },
    {
        id: 28, name:'OH HI ALI', link:'SPOTIFY', img:'img/creators/28.png',
        description:'Oh Hi Ali is a Delaware native whose captivating voice, undeniable ugliness and playful take on contemporary rap has put him on the edge of major success. His debut effort, A Very Ugly Story, paints the picture of Ali as the worlds ugliest man.'
    },
    {
        id: 29, name:'OBASI JACKSON', link:'SPOTIFY', img:'img/creators/29.png',
        description:'Obasi Jackson is a vibe. A Canarsie, Brooklyn native, he has experimented with many forms of music throughout his journey. Rock, pop, neo-soul, reggae, hip-hop and r&b have all molded his sound into what he shares with us today.'
    },
    {
        id: 30, name:'NAJII PERSON', link:'SPOTIFY', img:'img/creators/30.png',
        description:'Najii Person is one of St. Louis’ most celebrated underground rappers/producers. Drawing inspiration from gospel music and modern day hip-hop, hes opened up for acts like Big Boi and Slum Village.'
    },

]


export { productDatas, productOfMain ,creators }