// movie dataset 
const moviesDataset = {
    Action: [
      {
        title: "Mad Max: Fury Road",
        poster:
          "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10854488_p_v8_ac.jpg",
        description:
          "Set in a post-apocalyptic desert wasteland where petrol and water are scarce commodities, Fury Road follows Max Rockatansky (Hardy), who joins forces with Imperator Furiosa (Theron) against warlord Immortan Joe (Keays-Byrne) and his army, leading to a lengthy road battle.",
        trailer: "https://www.youtube.com/watch?v=FVswuip0-co",
      },
  
      {
        title: "Die Hard",
        poster:
          "https://m.media-amazon.com/images/I/819cf1ZR2WL._AC_UF1000,1000_QL80_.jpg",
        description:
          "Die Hard follows New York City police detective John McClane (Willis) who is caught up in a terrorist takeover of a Los Angeles skyscraper while visiting his estranged wife.",
        trailer: "https://www.youtube.com/watch?v=gYWvwkXreaI",
      },
  
      {
        title: "The Dark Knight",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
        description:
          "The plot follows the vigilante Batman, police lieutenant James Gordon, and district attorney Harvey Dent, who form an alliance to dismantle organized crime in Gotham City",
        trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
      },
  
      {
        title: "John Wick",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg",
        description:
          "John Wick is a retired assassin who returns to his old ways after a group of Russian gangsters steal his car and kill a puppy which was given to him by his late wife Helen",
        trailer: "https://www.youtube.com/watch?v=C0BMx-qxsP4",
      },
  
      {
        title: "Deadpool & Wolverine",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/4/4c/Deadpool_%26_Wolverine_poster.jpg",
        description:
          "Marvel Studios' ”Deadpool & Wolverine” finds Wade Wilson with his past as the morally flexible Deadpool behind him, until he suddenly finds himself in a fight for the survival of his homeworld and must suit-up again—and convince a reluctant Wolverine to help him.",
        trailer: "https://www.youtube.com/watch?v=73_1biulkYk",
      },
  
      {
        title: " Martin",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/3/36/Martin_2023_film_poster.jpg",
        description:
          "A journey of a man discovering himself, finding love and fighting for his motherland.",
        trailer: "https://www.youtube.com/watch?v=oge3BfIoG-c",
      },
  
      {
        title: "Brothers",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbkSvU-SQ98MyT3ZYu5761-AMv4STWUSvGTA&s",
        description:
          "Marine Capt. Sam Cahill (Tobey Maguire) is going to Afganistan on another tour leaving behind his wife Grace (Natalie Portman) and their two young daughters.",
        trailer: "https://www.youtube.com/watch?v=XVnfFsMKbMo",
      },
  
      {
        title: " Jigra",
        poster:
          "https://m.media-amazon.com/images/M/MV5BY2Y4NzdlYjYtNGFmZC00NzA2LTk5OWUtN2U1MDc4YmZmNTBjXkEyXkFqcGc@._V1_.jpg",
        description:
          "A Fabulously Fierce Alia Bhatt Anchors a Beautifully Crafted but Narratively Uneven Hindi Thriller. The 'Heart of Stone' star plays a young woman who goes to extraordinary lengths to rescue her brother from a foreign prison in Vasan Bala's Indian action film.",
        trailer: "https://www.youtube.com/watch?v=3uE0RuQndZc",
      },
  
      {
        title: "The Batman",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdVBCxvq6f7CYvgD6aFktRc1sy_Es92XdlQ&s",
        description:
          "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues. As the scale of the perpetrator's plans become clear, he must bring justice to the abuse of power and corruption that plagues the metropolis.",
        trailer: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
      },
  
      {
        title: "Venom: The Last Dance",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/a/a3/Venom_The_Last_Dance_Poster.jpg",
        description:
          "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
        trailer: "https://www.youtube.com/watch?v=HyIyd9joTTc",
      },
  
      {
        title: "Vettaiyan",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/6/68/Vettaiyan_poster.jpg",
        description:
          "The film stars Rajinikanth as Athiyan, a senior police officer, who accidentally shoots an innocent person during an encounter killing, while investigating the murder of a teacher.",
        trailer: "https://www.youtube.com/watch?v=zPqMbwmGC1U",
      },
  
      {
        title: "Transformers One",
        poster:
          "https://image.tmdb.org/t/p/original/qbkAqmmEIZfrCO8ZQAuIuVMlWoV.jpg",
        description:
          "The film depicts how the Transformers gained the ability to transform, an idea Cooley found appealing. He felt that there was fun in seeing the characters learn and adapt to their new powers",
        trailer: "https://www.youtube.com/watch?v=0rmJXXKDrsM",
      },
  
      {
        title: "Gladiator II",
        poster:
          "https://yc.cldmlk.com/efmm2z50m9vrkwmgyt4jv8j1r0/uploads/vertical_2e562bfd-01d8-49ad-9978-a08c46c41433.jpg",
        description:
          "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.",
        trailer: "https://www.youtube.com/watch?v=Ts0N8swyWFI",
      },
  
      {
        title: "Hellboy: The Crooked Man",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Hellboy_The_Crooked_Man_poster.jpg/220px-Hellboy_The_Crooked_Man_poster.jpg",
        description:
          "Plot. In the 1950s, B.P.R.D. agents Hellboy and Bobbie Jo Song are tasked with transporting via train a toxic supernatural spider to their headquarters.",
        trailer: "https://www.youtube.com/watch?v=4fw2PIpndnM",
      },
  
      {
        title: "Bad Boys: Ride or Die",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg",
        description:
          "When their late police captain gets linked to drug cartels, wisecracking Miami cops Mike Lowrey and Marcus Burnett embark on a dangerous mission to clear his name.",
        trailer: "https://www.youtube.com/watch?v=hRFY_Fesa9Q",
      },
  
      {
        title: "Uprising",
        poster:
          "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQZiSR2eb2IeUiYgy_eFWkZWfoehDxMid67__STc4qKQpfZA4LQrCx1IxX72adJsEsDEby6YYbdGE8OYwaehkbmvDWyftfnf5vPj-f0CwTVMoyLbSOtkRKGlkRU7zUNDIPRMJadFiegB6AXNgXbR6Z8bg.jpg?r=d61",
        description:
          "Set in the Joseon era during a tumultuous time in the aftermath of war, take a journey through the lives of two childhood friends-turned-adversaries: Cheon Yeong, a slave with remarkable martial prowess; and Jong Ryeo, Cheon Yeng's master and scion of Joseon's most influential military family. An era of chaos.",
        trailer: "https://www.youtube.com/watch?v=TqfaCAA1UeE",
      },
  
      {
        title: "The Shadow Strays",
        poster:
          "https://images.ctfassets.net/22n7d68fswlw/47S2qOWcpBM6WkhiC2Aois/d93c312678a5024b54e0e45f6e062ff5/The-Shadow-Strays_Poster.jpg",
        description:
          " 13 (Aurora Ribero) is a young member of a secretive assassin group that works in the shadows. Trained by ruthless and unwavering mentors, she decides to defect in order to save a young boy from brutal gangsters.",
        trailer: "https://www.youtube.com/watch?v=jsKo8nvOfck",
      },
  
      {
        title: "Twisters",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/2/24/Twisters_Official_US_Theatrical_Poster.jpg",
        description:
          "It follows clashing groups of storm chasers who investigate a tornado outbreak in Oklahoma. Talks for a sequel to Twister began in 2020, with Kosinski pitching an idea to Universal and Helen Hunt, who starred in the original, also expressing interest in a follow-up that was ultimately rejected.",
        trailer: "https://www.youtube.com/watch?v=wdok0rZdmx4",
      },
  
      {
        title: "Civil War",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/0/0d/Civil_War_2024_film_poster.jpeg",
        description:
          "The plot follows a team of war journalists traveling from New York City to Washington, D.C. during a civil war fought across the United States between a despotic federal government and secessionist movements, to interview the president before rebels take the capital city.",
        trailer: "https://www.youtube.com/watch?v=aDyQxtg0V2w",
      },
  
      {
        title: "Devara Part 1",
        poster:
          "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/04/devara-part-1-2024.jpg",
        description:
          "The plot follows Devara (Rao), chieftain of a coastal village who is engaged in bloody feud with his counterpart Bhaira (Khan) over smuggling. The conflict, which starts as a personal vendetta, quickly escalates into a much larger power play that threatens to disrupt the entire region.",
        trailer: "https://www.youtube.com/watch?v=NcCYq3bvlJM",
      },
  
      {
        title: "Furiosa: A Mad Max Saga",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/3/34/Furiosa_A_Mad_Max_Saga.jpg",
        description:
          "Snatched from the Green Place of Many Mothers, young Furiosa falls into the hands of a great biker horde led by the warlord Dementus. Sweeping through the Wasteland, they come across the Citadel, presided over by the Immortan Joe.",
        trailer: "https://www.youtube.com/watch?v=FVswuip0-co",
      },
  
      {
        title: "The Ministry of Ungentlemanly Warfare",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQteByDXQnEQbABpnEFVrwCtoZa06o_Fnj2VQ&s",
        description:
          "Based upon recently declassified files of the British War Department and inspired by true events, THE MINISTRY OF UNGENTLEMANLY WARFARE is an action-comedy that tells the story of the first-ever special forces organization formed during WWII by UK Prime Minister Winston Churchill and a small group of military officials ...",
        trailer: "https://www.youtube.com/watch?v=zvwDen1Wrx8",
      },
  
      {
        title: "Carry On",
        poster:
          "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQSMJq9fHmS-7ke0AyOT3QkFYAgfm9gDcMiaGRdQFEJ-VVcdmmbVrt0V4LIt3IdsG4_Is_9P-PtUXUv4wIlouuoAVG53Ca7O2bL54zhzVa-zrmuDdPdRjrJU_HZMDH0NAeYwunDIKzj2N-Ueb9_Ktvjp4.jpg?r=d34",
        description:
          "follows a young TSA agent as he fights to outsmart a mysterious traveler who blackmails him into letting a dangerous package slip onto a Christmas Eve flight.",
        trailer: "https://www.youtube.com/watch?v=aYOW0z43hyQ",
      },
  
      {
        title: "The Predator",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMjM5MDk2NDIxMF5BMl5BanBnXkFtZTgwNjU5NDk3NTM@._V1_FMjpg_UX1000_.jpg",
        description:
          "A Predator ship crash-lands on Earth. Army Ranger sniper Quinn McKenna (Boyd Holbrook) and his team are attacked by the Predator on a hostage retrieval mission. McKenna incapacitates the Predator and has its armor mailed off. At the behest of government agent Will Traeger (Sterling K.",
        trailer: "https://www.youtube.com/watch?v=WaG1KZqrLvM",
      },
  
      {
        title: "Rebel Ridge",
        poster:
          "https://miro.medium.com/v2/resize:fit:450/1*5kHvY81JqYnsoMESWDQuAQ.jpeg",
        description:
          "The film stars Aaron Pierre as Terry Richmond, a former Marine who has the funds needed to post bail for his cousin unjustly seized via civil forfeiture by a small town's corrupt police force.",
        trailer: "https://www.youtube.com/watch?v=gF3gZicntIw",
      },
  
      {
        title: "The Dark Knight",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
        description:
          "The plot follows the vigilante Batman, police lieutenant James Gordon, and district attorney Harvey Dent, who form an alliance to dismantle organized crime in Gotham City. ",
        trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
      },
  
      {
        title: "Dune: Part Two",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
        description:
          "will explore the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
        trailer: "https://www.youtube.com/watch?v=Way9Dexny3w",
      },
  
      {
        title: "Superman",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/5/50/Man_of_Steel_%28film%29_poster.jpg",
        description:
          "An alien orphan is sent from his dying planet to Earth, where he grows up to become his adoptive home's first and greatest superhero.",
        trailer: "https://www.youtube.com/watch?v=gX-B3HMlMfY",
      },
  
      {
        title: "Trouble",
        poster:
          "https://m.media-amazon.com/images/M/MV5BOTMwZmFkZjctOGJhMi00ZmQyLTk4ODAtYTM0OTFlNjkyZTVlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description:
          "Wrongfully convicted of murder, a clumsy electronics salesman faces police corruption and criminal conspiracies in an attempt to prove his innocence.",
        trailer: "https://www.youtube.com/watch?v=8HnmZAPjsqQ",
      },
  
      {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMXlw-hbiLoNgY5FUBdJLoADwJ39RtdL-tw&s",
        description:
          "ynopsis The future of civilization rests in the fate of the One Ring, which has been lost for centuries. Powerful forces are unrelenting in their search for it. But fate has placed it in the hands of a young Hobbit named Frodo Baggins (Elijah Wood), who inherits the Ring and steps into legend.",
        trailer: "https://www.youtube.com/watch?v=V75dMMIW2B4",
      },
  
      {
        title: " Gladiator",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png",
        description:
          "Gladiator takes place in ad 180 and is loosely based on historical figures. Roman forces, led by the general Maximus (Crowe), defeat Germanic tribes, bringing temporary peace to the Roman Empire.",
        trailer: "https://www.youtube.com/watch?v=P5ieIbInFpg",
      },
  
      {
        title: "The Fall Guy",
        poster:
          "https://m.media-amazon.com/images/M/MV5BM2U0MTJiYTItMjNiZS00MzU4LTkxYTAtYTU0ZGY1ODJhMjRhXkEyXkFqcGc@._V1_.jpg",
        description:
          "The plot follows a stuntman (Ryan Gosling) working on his ex-girlfriend's (Emily Blunt) directorial debut action film, only to find himself involved in a conspiracy surrounding the film's lead actor (Aaron Taylor-Johnson). The cast also features Hannah Waddingham, Teresa Palmer, Stephanie Hsu, and Winston Duke.",
        trailer: "https://www.youtube.com/watch?v=j7jPnwVGdZ8",
      },
  
      {
        title: "Pixels",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMzIyNTc1NmUtOTBlNS00YzEwLTlkZTMtZjJkMGM2YzNkYmY3XkEyXkFqcGc@._V1_.jpg",
        description:
          "When aliens misinterpret video feeds of classic arcade games as a declaration of war against them, they attack the Earth using games like PAC-MAN, Donkey Kong, Galaga, Centipede and Space Invaders as models for their various assaults.",
        trailer: "https://www.youtube.com/watch?v=XAHprLW48no",
      },
  
      {
        title: "Azrael",
        poster:
          "https://m.media-amazon.com/images/M/MV5BN2JmOGJiYTEtYjVlOC00YzFkLTliODAtOTI3OGVlNDc2MmZmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description:
          "Recaptured by its ruthless leaders, Azrael is due to be sacrificed to pacify an ancient evil deep within the surrounding wilderness - but she'll stop at nothing to ensure her own survival. Azrael makes a savage bid for freedom as her escape accelerates towards a vicious, revenge-fueled showdown.",
        trailer: "https://www.youtube.com/watch?v=XWtKsBGWsig",
      },
  
      {
        title: "Ready or Not",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTViMDA4YjgtZDQ4NC00ZDk2LTg0MWItOTc4MTkwMmVkZWRmXkEyXkFqcGc@._V1_.jpg",
        description:
          "A bride's wedding night takes a sinister turn when her eccentric new in-laws force her to take part in a terrifying game. A bride's wedding night takes a sinister turn when her eccentric new in-laws force her to take part in a terrifying game.",
        trailer: "https://www.youtube.com/watch?v=ZtYTwUxhAoI",
      },
  
      {
        title: "Red One",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZmFkMjE4NjQtZTVmZS00MDZjLWE2ZmEtZTkzODljNjhlNWUxXkEyXkFqcGc@._V1_.jpg",
        description:
          "Code Name: RED ONE -- is kidnapped, the North Pole's Head of Security (Dwayne Johnson) must team up with the world's most infamous bounty hunter (Chris Evans) in a globe-trotting, action-packed mission to save Christmas.",
        trailer: "https://www.youtube.com/watch?v=U8XH3W0cMss",
      },
  
      {
        title: "Van Helsing",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/5/55/Van_Helsing_poster.jpg",
        description:
          "Anna Valerious (Kate Beckinsale) reveals that Dracula has formed an unholy alliance with Dr. Frankenstein's monster (Shuler Hensley) and is hell-bent on exacting a centuries-old curse on her family. Together Anna and Van Helsing set out to destroy their common enemy, but uncover some unsettling secrets along the way.",
        trailer: "https://www.youtube.com/watch?v=3fdRKme00uI",
      },
  
      {
        title: "Borderlands",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Borderlands_Teaser_Poster.jpg/220px-Borderlands_Teaser_Poster.jpg",
        description:
          "On the planet of Pandora, Roland, a mercenary soldier apparently gone rogue, kidnaps teenager Tiny Tina with the help of Krieg, a 'Psycho' who was institutionalized in the same facility.",
        trailer: "https://www.youtube.com/watch?v=lU_NKNZljoQ",
      },
  
      {
        title: "Karate Kid: Legends",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwiK-z4VD_Pllo_UPOaJ-R9Sfg_UOarKXkA&s",
        description:
          "The film will explore a unique blend of karate and kung fu, with high-energy action sequences that fans of both the original Karate Kid films and Cobra Kai will surely appreciate.",
        trailer: "https://www.youtube.com/watch?v=8catHm7b17U",
      },
      {
        title: "Inception",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
        description:
          "It starred Leonardo DiCaprio as a corporate spy who steals secrets via a technology that allows him to enter people's dreams. The film turns on this character's attempt to move past the boundaries of the technology in order to actually plant an idea in a dreamer's head.",
        trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
      },
  
      {
        title: "Dungeons & Dragons: Honor Among Thieves",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/0/03/Theatrical_poster_for_Dungeons_and_Dragons%2C_Honor_Among_Thieves.jpg",
        description:
          " A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
        trailer: "https://www.youtube.com/watch?v=IiMinixSXII",
      },
      {
        title: "The Killer's Game",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc7Gz8kafE_2yl6APDWwGYP2cYnrqwPBrwqQ&s",
        description:
          "when top hitman Joe Flood (Dave Bautista) is diagnosed with a terminal illness, he decides to take matters into his own hands – by taking a hit out on himself.",
        trailer: "https://www.youtube.com/watch?v=ZHK6WghyWGY",
      },
  
      {
        title: "Revenge",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYzQzMzk5YjctNjdiMC00ZTIxLTg2MTUtNTNhNjg1YWJmNTViXkEyXkFqcGc@._V1_.jpg",
        description:
          "A woman left for dead in the desert after a harrowing assault embarks on a brutal and bloody quest for revenge against the three men who betrayed her.",
        trailer: "https://www.youtube.com/watch?v=sU3TRJiRobs",
      },
      {
        title: "Uglies",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/0/0f/Uglies_film_poster.jpg",
        description:
          "In a futuristic world that imposes a cosmetic surgery at 16, Tally is eager to join the rest of society. But when a friend runs away, Tally embarks on a journey to save her that upends everything she thought she wanted. Uglies was first published in 2005, but King believes its power has only grown over the years.",
        trailer: "https://www.youtube.com/watch?v=OhcOHkgTrQQ",
      },
  
      {
        title: "Unhinged",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/6/6d/Unhinged2020Poster.jpeg",
        description:
          "After a confrontation with an unstable man at an intersection, a woman becomes the target of his rage. After a confrontation with an unstable man at an intersection, a woman becomes the target of his rage.",
        trailer: "https://www.youtube.com/watch?v=vdxDXoODKN8",
      },
      {
        title: "My Hero Academia: You're Next",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNGVmZDJhNjItYzdlOC00ODA2LWFkYjctY2NmMzNiZTQ2NTVjXkEyXkFqcGc@._V1_QL75_UY281_CR5,0,190,281_.jpg",
        description:
          "A superhero-admiring boy enrolls in a prestigious hero academy and learns what it really means to be a hero, after the strongest superhero grants him his own powers.",
        trailer: "https://www.youtube.com/watch?v=EPVkcwyLQQ8",
      },
      {
        title: "The Lord of the Rings: The Return of the King",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_.jpg",
        description:
          "The surviving Fellowship is happily reunited in Minas Tirith. Aragorn is crowned King of Gondor and marries Arwen; they and everyone else present bow to the hobbits. The hobbits return home to the Shire, where Sam marries Rosie Cotton.",
        trailer: "https://www.youtube.com/watch?v=r5X-hFf6Bwo",
      },
  
      {
        title: "The Crow",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZTI1YTY4MDUtYTk5ZC00OTQ1LWI5NTgtOGMwN2FhNzNhYzAxXkEyXkFqcGc@._V1_.jpg",
        description:
          "It stars Brandon Lee in his final film role, as Eric Draven, a rock musician who is resurrected from the dead to seek vengeance against the gang who murdered him and his fiancée",
        trailer: "https://www.youtube.com/watch?v=djSKp_pwmOA",
      },
      {
        title: " Bullet Train",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/1/13/Bullet_Train_%28poster%29.jpeg",
        description:
          "Five assassins aboard a swiftly-moving bullet train find out that their missions have something in common. Unlucky assassin Ladybug (Brad Pitt) is determined to do his job peacefully after one too many gigs has gone off the rails.",
        trailer: "https://www.youtube.com/watch?v=0IOsk2Vlc4o",
      },
      {
        title: "Jurassic World Rebirth",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/3/3b/Jurassic_World_Rebirth_Logo.jpg",
        description:
          "Five years post-Jurassic World Dominion, an expedition braves isolated equatorial regions to extract DNA from three massive prehistoric creatures for a groundbreaking medical breakthrough.",
        trailer: "https://www.youtube.com/watch?v=8jaIlRkTtu4",
      },
      {
        title: "Ghostbusters",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/3/31/Ghostbusters_%282024%29_poster.jpg",
        description:
          "Ghostbusters, the first film in the series, is a 1984 sci-fi comedy film about three New York City scientists. After they are fired from Columbia University, they start their own business investigating and capturing ghosts.",
        trailer: "https://www.youtube.com/watch?v=HpOBXh02rVc",
      },
      {
        title: "The Dark Knight Rises",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg",
        description:
          "Bane, an imposing terrorist, attacks Gotham City and disrupts its eight-year-long period of peace. This forces Bruce Wayne to come out of hiding and don the cape and cowl of Batman again. Bane, an imposing terrorist, attacks Gotham City and disrupts its eight-year-long period of peace.",
        trailer: "https://www.youtube.com/watch?v=g8evyE9TuYk",
      },
      {
        title: "Kingdom of the Planet of the Apes",
        poster:
          "https://the-telescope.com/wp-content/uploads/2024/05/MV5BNDcxM2RiOWMtMGEzMC00NDEyLTgzMjEtOWZjYzVhN2E2ZjcyXkEyXkFqcGdeQXVyMTkxNjU-810x1200.jpg",
        description:
          "As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
        trailer: "https://www.youtube.com/watch?v=XtFI7SNtVpY",
      },
    ],
    Adventure: [
      {
        title: "The Electric State",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYmVhYTBjNWItMjYyYy00MTM4LWE3ZmEtZDgyNTA2NTk3YzEwXkEyXkFqcGc@._V1_.jpg",
        description:
          "The Electric State is a 2018 dystopian science fiction illustrated novel by Simon Stålenhag depicting an alternate reality of the year 1997, in which a teenaged girl and her toy robot journey through a technologically ravaged Southwestern United States. In 2017, the Russo brothers acquired the film rights to the book.",
        trailer: "https://www.youtube.com/watch?v=CV5uZkXlE4g",
      },
      {
        title: "Inside Out 2",
        poster:
          "https://lumiere-a.akamaihd.net/v1/images/p_insideout2_now_available_disneyplus_d24c051c.jpeg",
        description:
          "On the cusp of entering high school, Riley's world is about to change from the inside out. If Joy and the rest of Riley's Emotions thought her toddler years were tough – they're in for a wild ride. New friends, tryouts, and puberty – all while navigating a complex set of new emotions… what could go wrong?",
        trailer: "https://www.youtube.com/watch?v=LEjhY15eCx0",
      },
      {
        title: " Twisters",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/2/24/Twisters_Official_US_Theatrical_Poster.jpg",
        description:
          "It follows clashing groups of storm chasers who investigate a tornado outbreak in Oklahoma. Talks for a sequel to Twister began in 2020, with Kosinski pitching an idea to Universal and Helen Hunt, who starred in the original, also expressing interest in a follow-up that was ultimately rejected.",
        trailer: "https://www.youtube.com/watch?v=wdok0rZdmx4",
      },
      {
        title: "Furiosa: A Mad Max Saga",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/3/34/Furiosa_A_Mad_Max_Saga.jpg",
        description:
          "Snatched from the Green Place of Many Mothers, young Furiosa falls into the hands of a great biker horde led by the warlord Dementus. Sweeping through the Wasteland, they come across the Citadel, presided over by the Immortan Joe.",
        trailer: "https://www.youtube.com/watch?v=XJMuhwVlca4",
      },
      {
        title: "The Legend of Ochi",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYjlmYzU1Y2EtMGI0Ni00ZDE0LWJmZjYtOTliZDc3ZGNmZjA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description:
          "In a remote village, a young girl is raised to never go outside after dark and fear the reclusive forest creatures known as the ochi. When a baby ochi is left behind by its pack, she embarks on an adventure to reunite it with its family.",
        trailer: "https://www.youtube.com/watch?v=_jTFLg3arYU",
      },
      {
        title: "The Predator",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/9/97/The_Predator_official_poster.jpg",
        description:
          "The universe's most lethal hunters are stronger, smarter and deadlier than ever before, having genetically upgraded themselves with DNA from other species. When a boy accidentally triggers their return to Earth, only a ragtag crew of ex-soldiers and an evolutionary biologist can prevent the end of the human race.",
        trailer: "https://www.youtube.com/watch?v=WaG1KZqrLvM",
      },
      {
        title: "Interstellar",
        poster:
          "https://resizing.flixster.com/47rDB5jGZrHWyRMRYMZKenbTcHU=/fit-in/705x460/v2/https://resizing.flixster.com/Y_sqtbGDcspx4oob3nD-lojSLjc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YyMWZjZTQ2LWQwZGItNGRhMi1hZjg3LWFhZDQ1YWU1OTQ2NC53ZWJw",
        description:
          "Interstellar is about Earth's last chance to find a habitable planet before a lack of resources causes the human race to go extinct. The film's protagonist is Cooper (Matthew McConaughey), a former NASA pilot who is tasked with leading a mission through a wormhole to find a habitable planet in another galaxy",
        trailer: "https://www.youtube.com/watch?v=2LqzF5WauAw",
      },
      {
        title: "Harry Potter and the Sorcerer's Stone",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_.jpg",
        description:
          "Summaries. An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world. On his eleventh birthday, Harry Potter (Daniel Radcliffe) discovers that he is no ordinary boy.",
        trailer: "https://www.youtube.com/watch?v=mNgwNXKBEW0",
      },
      {
        title: "The Boy and the Heron",
        poster:
          "https://cvhsnews.org/wp-content/uploads/2024/01/the-boy-and-the-heron-1.jpg",
        description:
          "“The Boy and the Heron” is the ultimate Miyazaki film, full of his signature color, magic, beauty, and sadness. It follows the story of a young boy, Mahito, who after the death of his mother, flees 1940s Tokyo for an estate in the countryside",
        trailer: "https://www.youtube.com/watch?v=t5khm-VjEu4",
      },
  
      {
        title: "Gladiator",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png",
        description:
          "(in ancient Rome) a person, often a slave or captive, who was armed with a sword or other weapon and compelled to fight to the death in a public arena against another person or a wild animal, for the entertainment of the spectators.",
        trailer: "https://www.youtube.com/watch?v=P5ieIbInFpg",
      },
  
      {
        title: "Ghostbusters: Frozen Empire",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/3/31/Ghostbusters_%282024%29_poster.jpg",
        description:
          "When the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must join forces to protect their home and save the world from a second ice age.",
        trailer: "https://www.youtube.com/watch?v=HpOBXh02rVc",
      },
  
      {
        title: " Red One",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdS6vHeOn_k4Dn4vBEKSNEmaeIGoB11XZzpQ&s",
        description:
          "Synopsis After Santa Claus -- Code Name: RED ONE -- is kidnapped, the North Pole's Head of Security (Dwayne Johnson) must team up with the world's most infamous bounty hunter (Chris Evans) in a globe-trotting, action-packed mission to save Christmas.",
        trailer: "https://www.youtube.com/watch?v=7l3hfD74X-4",
      },
  
      {
        title: "Borderlands",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/7/7c/Borderlands_Teaser_Poster.jpg",
        description:
          "Borderlands is an action role-playing first-person looter shooter video game franchise in a space Western science fantasy setting, created and produced by Gearbox Software and published by 2K for multiple platforms.",
        trailer: "https://www.youtube.com/watch?v=lU_NKNZljoQ",
      },
  
      {
        title: "Inception",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
        description:
          "Synopsis. Dominick Dom Cobb (Leonardo DiCaprio) and business partner Arthur (Joseph Gordon-Levitt) are extractors, people who perform corporate espionage using an experimental military technology to infiltrate the subconscious of their targets and extract information while experiencing shared dreaming.",
        trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
      },
  
      {
        title: "Uglies",
        poster:
          "https://m.media-amazon.com/images/M/MV5BOGEyYmQxNjQtNDlkYy00MDlkLTgyNDUtZDA0NGY3ZTNlZWU0XkEyXkFqcGc@.V1.jpg",
        description:
          "Uglies is about a world where everyone normal is ugly. In order to turn pretty you have to turn sixteen years old. This book starts out when a girl named Tally decides to sneak in to a party in New Pretty Town to see her friend who is three months older than her and had just gotten his operation to turn pretty.",
        trailer: "https://www.youtube.com/watch?v=OhcOHkgTrQQ",
      },
  
      {
        title: "Despicable Me 4",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNzY0ZTlhYzgtOTgzZC00ZTg2LTk4NTEtZDllM2E2NGE5Njg2XkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
        description:
          "The world's favorite supervillain-turned-Anti-Villain-League-agent returns for a bold new era of Minions mayhem in Illumination's Despicable Me 4. Gru, Lucy and their girls welcome a new member to the family—Gru Jr. —who is intent on tormenting his dad, as a new nemesis shows up and forces the family to go on the run.",
        trailer: "https://www.youtube.com/watch?v=qQlr9-rF32A",
      },
  
      {
        title: "The Lord of the Rings: The Return of the King",
        poster:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654216226i/61215384.jpg",
        description:
          "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        trailer: "https://www.youtube.com/watch?v=r5X-hFf6Bwo",
      },
  
      {
        title: " Jurassic World Rebirth",
        poster:
          "https://m.media-amazon.com/images/M/MV5BOTk5Yzk5N2MtYjZkMS00YTU4LTlmMjktYWMwNGQ4MzdiZDMyXkEyXkFqcGc@.V1.jpg",
        description:
          "Five years post-Jurassic World Dominion, an expedition braves isolated equatorial regions to extract DNA from three massive prehistoric creatures for a groundbreaking medical breakthrough.",
        trailer: "https://www.youtube.com/watch?v=EKOobUmLU5s",
      },
  
      {
        title: "Moana 2",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0vHUUiV74eAzBzjLNR-oSxvJCTzvDbon7w&s",
        description:
          "This takes audiences on an expansive new voyage with Moana, Maui and a brand-new crew of unlikely seafarers. After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
        trailer: "https://www.youtube.com/watch?v=hDZ7y8RP5HE",
      },
  
      {
        title: "Inside Out",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/0/0a/Inside_Out_%282015_film%29_poster.jpg",
        description:
          "Inside Out is an animated comedy about a girl named Riley (voice of Kaitlyn Dias), who is uprooted from her life in the US Midwest when her father gets a new job in San Francisco. Riley is largely guided by her emotions, each of which is shown as an actual character.",
        trailer:
          "https://www.youtube.com/results?sp=mAEB&search_query=Inside+Out+trailer",
      },
      {
        title: "Kingdom of the Planet of the Apes",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/c/cf/Kingdom_of_the_Planet_of_the_Apes_poster.jpg",
        description:
          "As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
        trailer: "https://www.youtube.com/watch?v=XtFI7SNtVpY",
      },
  
      {
        title: "Dune: Part One",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvUAGSqFTET2Xm-yXBtIT2Kh75utCVM__2hQ&s",
        description:
          "A mythic and emotionally charged hero's journey, Dune tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people.",
        trailer: "https://www.youtube.com/watch?v=n9xhJrPXop4",
      },
  
      {
        title: "Aliens",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/f/fb/Aliens_poster.jpg",
        description:
          "Plot. Ellen Ripley has been in stasis for 57 years aboard an escape shuttle after destroying her ship, the Nostromo, to escape an alien creature that slaughtered the rest of the crew.",
        trailer: "https://www.youtube.com/watch?v=oSeQQlaCZgU",
      },
  
      {
        title: "Avengers: Endgame",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfYcQpknaOkUKemynEhrEkYjcvaBfHGMHH3w&s",
        description:
          "AVENGERS: ENDGAME is set after Thanos' catastrophic use of the Infinity Stones randomly wiped out half of Earth's population in Avengers: Infinity War. Those left behind are desperate to do something -- anything -- to bring back their lost loved ones",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
  
      {
        title: "Barbie",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
        description:
          "Barbie is an 11-inch- (29-cm-) tall plastic doll with the figure of an adult woman that was originally modeled on the Lilli doll (produced in West Germany from 1955 to 1964), a risqué gag gift for men. The Barbie target demographic is young children. Barbie's full name is Barbara Millicent Roberts.",
        trailer: "https://www.youtube.com/watch?v=pBk4NYhWNMM",
      },
  
      {
        title: "Inglourious Basterds",
        poster:
          "https://m.media-amazon.com/images/M/MV5BODZhMWJlNjYtNDExNC00MTIzLTllM2ItOGQ2NGVjNDQ3MzkzXkEyXkFqcGc@.V1.jpg",
        description:
          "Aldo Raine (Brad Pitt) assembles a team of Jewish soldiers to commit violent acts of retribution against the Nazis, including the taking of their scalps. He and his men join forces with Bridget von Hammersmark, a German actress and undercover agent, to bring down the leaders of the Third Reich.",
        trailer: "https://www.youtube.com/watch?v=KnrRy6kSFF0",
      },
  
      {
        title: "Troy",
        poster:
          "https://images.moviesanywhere.com/a048589916e0da0383cbb18a63e4cf08/9179305f-0547-465d-a8aa-3e9571c7b28e.jpg",
        description:
          "Troy II and Troy VI provide characteristic examples of an ancient oriental city in an Aegean context, with a majestic fortified citadel enclosing palaces and administrative buildings, surrounded by an extensive fortified lower town.",
        trailer: "https://www.youtube.com/watch?v=6FG3BfPuwBA",
      },
  
      {
        title: "Jurassic Park",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg",
        description:
          "Jurassic Park, later also referred to as Jurassic World, is an American science fiction media franchise created by Michael Crichton and centered on a disastrous attempt to create a theme park of cloned dinosaurs.",
        trailer:
          "https://www.youtube.com/results?sp=mAEB&search_query=jurassic+park+traile",
      },
  
      {
        title: "Sonic the Hedgehog 3",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/9/9d/Sonic_the_Hedgehog_3_poster.jpg",
        description:
          "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
        trailer: "https://www.youtube.com/watch?v=OSOyFiOiNd4",
      },
  
      {
        title: "No Time to Die",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUmo4-juEXPJnjKDVU5N1I1qGNIiY8c4-EtQ&s",
        description:
          "In No Time To Die, Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help.",
        trailer: "https://www.youtube.com/watch?v=BIhNsAtPbPI",
      },
  
      {
        title: "The Lord of the Rings: The War of the Rohirrim",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Y_3rWx1vPfjiAndibBdhmsmyeRMzbE4IEg&s",
        description:
          "Set 183 years before the events of the Peter Jackson's The Lord of the Rings film trilogy, The War of the Rohirrim tells the story of Helm Hammerhand, a legendary king of Rohan, and his family as they defend their kingdom against an army of Dunlendings. Helm goes on to be the namesake for the stronghold Helm's Deep.",
        trailer: "https://www.youtube.com/watch?v=gCUg6Td5fgQ",
      },
  
      {
        title: "Miss Peregrine's Home for Peculiar Children",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTU0Nzc5NzI5NV5BMl5BanBnXkFtZTgwNTk1MDE4MDI@.V1.jpg",
        description:
          "A mysterious island. An abandoned orphanage. And a strange collection of very curious photographs. It all waits to be discovered in Miss Peregrine's Home for Peculiar Children, an unforgettable novel that mixes fiction and photography in a thrilling reading experience.",
        trailer: "https://www.youtube.com/watch?v=tV_IhWE4LP0",
      },
  
      {
        title: "Venom",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxreORHNiRp7GA-vqRqD-M94pUf2_wvWPuhA&s",
        description:
          "Venom is a subset of poisons that is actively delivered. Yes (pedants, pay attention) – venom is a specialised form of poison. Other poisons might be absorbed across the skin or toxic when ingested, but venom is associated with a specialised delivery system like fangs or a stinger.",
        trailer: "https://www.youtube.com/watch?v=HyIyd9joTTc",
      },
  
      {
        title: "Scooby-Doo",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9z8yQJcB1PZ9xYQlddJB2kMc3Us5MOVn3Qw&s",
        description:
          "He has a black nose and wears an off-yellow, diamond-shaped-tagged blue collar with an SD (his initials) and has four toes on each foot. Unlike other dogs, Scooby only has one pad on each of his paws, a trait that was added to make it easier to draw in the Scooby-Doo Annuals.",
        trailer: "https://www.youtube.com/watch?v=o3dbeI0BU1k",
      },
  
      {
        title: "Thunderbolts*",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/9/90/Thunderbolts%2A_poster.jpg",
        description:
          "Thunderbolts* is an upcoming American superhero film based on the Marvel Comics team Thunderbolts. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is intended to be the 36th film in the Marvel Cinematic Universe (MCU).",
        trailer: "https://www.youtube.com/watch?v=v-94Snw-H4o",
      },
  
      {
        title: "The Count of Monte-Cristo",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2i1cjVWtMGaOvZh-lWJXlvImcRCcu_CYdoQ&s",
        description:
          "The Count of Monte Cristo is the story of betrayal, love, and redemption. The story follows Edmund Dantes through imprisonment, freedom, and revenge spanning nearly his entire life. After meeting Abbe Faria, the priest, while imprisoned, Dantes learns the location of the treasure of Monte Cristo",
        trailer: "https://www.youtube.com/watch?v=UJPyF8i0y1U",
      },
  
      {
        title: "Spider-Man: No Way Home",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Spider-Man_No_Way_Home_%E2%80%93_The_More_Fun_Stuff_Version_poster.jpeg/210px-Spider-Man_No_Way_Home_%E2%80%93_The_More_Fun_Stuff_Version_poster.jpeg",
        description:
          "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear. Peter Parker's secret identity is revealed to the entire world. Desperate for help, Peter turns to Doctor Strange to make the world forget that he is Spider-Man.",
        trailer: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
      },
  
      {
        title: "The Goonies",
        poster:
          "https://capecinema.org/wp-content/uploads/2023/05/NickCharge_Goonies.webp",
        description:
          "In the film, a group of kids who live in the Goon Docks neighborhood of Astoria, Oregon, attempt to save their homes from foreclosure and in doing so they discover an old treasure map that takes them on an adventure to unearth the long-lost fortune of One-Eyed Willy, a legendary 17th-century pirate.",
        trailer: "https://www.youtube.com/watch?v=hJ2j4oWdQtU",
      },
    ],
  
    Comedy: [
      {
        title: "Superbad",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/8/8b/Superbad_Poster.png",
        description:
          "High school seniors Seth and Evan have high hopes for a graduation party. The co-dependent teens plan to score booze and babes so they can become part of the in-crowd, but separation anxiety and two bored police officers complicate the pair's self-proclaimed mission.",
        trailer: "https://www.youtube.com/watch?v=4eaZ_48ZYog",
      },
  
      {
        title: "The Hangover",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/b/b9/Hangoverposter09.jpg",
        description:
          "Two days before his wedding, Doug (Justin Bartha) and three friends (Bradley Cooper, Ed Helms, Zach Galifianakis) drive to Las Vegas for a wild and memorable stag party. In fact, when the three groomsmen wake up the next morning, they can't remember a thing; nor can they find Doug.",
        trailer: "https://www.youtube.com/watch?v=tlize92ffnY",
      },
  
      {
        title: "Step Brothers",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/d/d9/StepbrothersMP08.jpg",
        description:
          "Plot. 39-year-old Brennan Huff and 40-year-old Dale Doback are immature adults still living at home. Brennan lives with his divorced mother, Nancy, and Dale lives with his widowed father, Robert. Robert and Nancy meet, fall in love, and marry, forcing Brennan and Dale to live together as step brothers.",
        trailer: "https://www.youtube.com/watch?v=CewglxElBK0",
      },
  
      {
        title: "Dumb and Dumber",
        poster:
          "https://www.rogerebert.com/wp-content/uploads/2024/03/Dumb-and-Dumber.jpg",
        description:
          "Starring Jim Carrey and Jeff Daniels, it tells the story of Lloyd Christmas (Carrey) and Harry Dunne (Daniels), two dumb but well-meaning friends from Providence, Rhode Island, who set out on a cross-country road trip to Aspen, Colorado, to return a briefcase full of money to its owner, thinking it was abandoned as a kid",
        trailer: "https://www.youtube.com/watch?v=l13yPhimE3o",
      },
  
      {
        title: "Beetlejuice Beetlejuice",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/b/ba/Beetlejuice_Beetlejuice_poster.jpg",
        description:
          "A tragedy sends Lydia, Astrid, and Delia Deetz (Catherine O'Hara) back to their home, where a chance encounter leads them on a twisted path involving rogue demons, demonic possessions, sham marriages, ghost cops, and ultimately into the clutches of the Ghost with the Most, Beetlejuice (Michael Keaton).",
        trailer: "https://www.youtube.com/watch?v=CoZqL9N6Rx4",
      },
  
      {
        title: "Saturday Night",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJ6wfcQkLANIf_hQWSCF3Dt-Z7jtGgpWG4g&s",
        description:
          "Saturday Night is a 2024 American biographical comedy-drama film, directed by Jason Reitman, about the night of the 1975 premiere of NBC's Saturday Night, later known as Saturday Night Live. The script was written by Reitman and Gil Kenan, with both also co-producing it alongside Jason Blumenfeld and Peter Rice.",
        trailer: "https://www.youtube.com/watch?v=iZ9O_tl5Npk",
      },
  
      {
        title: "It's What's Inside",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNDkxOTZmZTYtYTNmNS00MDk3LWE0MDAtMzY5M2Y5YmU1MmI2XkEyXkFqcGc@._V1_.jpg",
        description:
          "A teenage girl swaps bodies with a local serial killer; she wants her body back, but the killer finds it's easier to lure in unsuspecting victims as a teenage girl, so he wants to keep it. It's What's Inside has eight characters all swapping around each other's bodies, and they don't all want to switch back.",
        trailer: "https://www.youtube.com/watch?v=RJBNi0CjX5I",
      },
  
      {
        title: "Anora",
        poster: "https://i.ytimg.com/vi/ahX0lbMgQbs/maxresdefault.jpg",
        description:
          "An exotic dancer from Brighton Beach, Anora (Mikey Madison) — or Ani, as she likes to be called — gets paired one evening with a young man, Ivan (Mark Eydelshteyn), who requests a Russian speaker. She can speak a little and understand everything and they quickly hit it off, embarking on a whirlwind ride together.",
        trailer: "https://www.youtube.com/watch?v=8m6UrWMl18M",
      },
  
      {
        title: "Brothers",
        poster:
          "https://static0.srcdn.com/wordpress/wp-content/uploads/2024/09/brothers-2024-official-poster.jpg",
        description:
          " Jady (Peter Dinklage) and Moke Munger (Josh Brolin) are twin BROTHERS. They've been career criminals since they were kids, mainly out of necessity due to an absent mother. They're now adults, and Moke is married to Abby (Taylour Paige)—they have a baby on the way, and Moke is trying to go straight.",
        trailer: "https://www.youtube.com/watch?v=XVnfFsMKbMo",
      },
  
      {
        title: "Hocus Pocus",
        poster:
          "https://lumiere-a.akamaihd.net/v1/images/p_hocuspocus_19880_e000b013.jpeg",
        description:
          "A teenage boy named Max and his little sister move to Salem, where he struggles to fit in before awakening a trio of diabolical witches that were executed in the 17th century.",
        trailer: "https://www.youtube.com/watch?v=F4e6YQFrt1s",
      },
  
      {
        title: "Bad Boys: Ride or Die",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg",
        description:
          "The film opens in Miami, as Detectives Mike Lowrey (Will Smith) and Marcus Burnett (Martin Lawrence) are speeding through the streets on the way to an event. Marcus complains about being nauseous, and Mike allows him to take a quick time to get a ginger ale. Marcus gets the ginger ale, plus Skittles and a hot dog.",
        trailer: "https://www.youtube.com/watch?v=hRFY_Fesa9Q",
      },
  
      {
        title: "Challengers",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaqRW4zZaDBLr4lhYRAtXHdXJU1RKue-4rgQ&s",
        description:
          "It follows the love triangle between an injured tennis star-turned-coach (Zendaya), her low-circuit tennis player ex-boyfriend (Josh O'Connor), and her tennis champion husband (Mike Faist) across 13 years of their shared relationship, culminating in the latter two's match at the ATP Challenger Tour.",
        trailer: "https://www.youtube.com/watch?v=VobTTbg-te0",
      },
  
      {
        title: "Stree 2: Sarkate Ka Aatank",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpkp74pmwzpUv-Uy39iyP-byX98cqrUnHqdg&s",
        description:
          "After the events of Stree, the town of Chanderi is being haunted again. This time, women are mysteriously abducted by a terrifying headless entity. Once again, it's up to Vicky and his friends to save their town and loved ones.",
        trailer: "https://www.youtube.com/watch?v=KVnheXywIbY",
      },
  
      {
        title: "Piece by Piece",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlKgLrjCqvcFn-VkfAPz_xZgPBcExMOh56vA&s",
        description:
          " It follows the life and career of American musician Pharrell Williams, who stars in the film, through the lens of Lego animation.",
        trailer: "https://www.youtube.com/watch?v=7Bc6trBc1kc",
      },
  
      {
        title: " Vicky Vidya Ka Woh Wala Video",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Vicky_Vidya_Ka_Woh_Wala_Video.jpg/220px-Vicky_Vidya_Ka_Woh_Wala_Video.jpg",
        description:
          "A newly married couple's relationship and reputation are put at risk when their private video CD is stolen. The story follows their frantic and roller coaster journey to recover the CD, navigating a series of unexpected difficulties along the way.",
        trailer: "https://www.youtube.com/watch?v=0xXa9a2rHoQ",
      },
  
      {
        title: "Kinds of Kindness",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/9/9c/Kinds_of_Kindness_film_poster.jpg",
        description:
          "KINDS OF KINDNESS is a triptych fable, following a man without choice who tries to take control of his own life; a policeman who is alarmed that his wife who was missing-at-sea has returned and seems a different person; and a woman determined to find a specific someone with a special ability, who is destined to become a prodigious spiritual leader.",
        trailer: "https://www.youtube.com/watch?v=NGOL2_mI9Hw",
      },
  
      {
        title: "The Ministry of Ungentlemanly Warfare",
        poster:
          "https://lionsgate.brightspotcdn.com/bf/3d/f8826dac4b17bc1521edfe5ddd0b/the-ministry-of-ungentlemanly-warfare-movies-he-bg-mbl-01.jpg",
        description:
          "is a mediocre film if removed from its title, the fact that this is a new film by Guy Ritchie and that the main role is played by Henry Cavill. Henry Cavill is the only one who tries and tries, but there is too little on the screen.",
        trailer: "https://www.youtube.com/watch?v=zvwDen1Wrx8",
      },
  
      {
        title: "A Man Called Otto",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGjHezo8YqH42Mvurq714ONsvxSXXi68RrA&s",
        description:
          "Otto is a grump who's given up on life following the loss of his wife and wants to end it all. When a young family moves in nearby, he meets his match in quick-witted Marisol, leading to a friendship that will turn his world around.",
        trailer: "https://www.youtube.com/watch?v=eFYUX9l-m5I",
      },
  
      {
        title: "Khel Khel Mein",
        poster:
          "https://m.media-amazon.com/images/M/MV5BN2YyY2ZjZjAtNTAwMi00OTZkLTgzMmItODU1OTU1MzQ1M2I1XkEyXkFqcGc@._V1_.jpg",
        description:
          "A group of friends decides to put their phones on the table, and any messages or calls they receive must be shared openly with everyone. What begins as a fun game quickly turns into a rollercoaster of emotions, with lighthearted moments, laughter, secrets unveiled, and conflicts sparked.",
        trailer: "https://www.youtube.com/watch?v=RKZJtoFoaQg",
      },
  
      {
        title: "Trouble",
        poster:
          "https://m.media-amazon.com/images/M/MV5BOTMwZmFkZjctOGJhMi00ZmQyLTk4ODAtYTM0OTFlNjkyZTVlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description:
          "Wrongfully convicted of murder, a clumsy electronics salesman faces police corruption and criminal conspiracies in an attempt to prove his innocence.",
        trailer: "https://www.youtube.com/watch?v=hdbBfoLqhc0",
      },
  
      {
        title: "The Addams Family",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13ITVAJFS6lkvr1Vth6qrq-kliHN-Ifh4tA&s",
        description:
          "Con artists plan to fleece an eccentric family using an accomplice who claims to be their long-lost uncle. When a man claiming to be Fester, Gomez Addams' missing brother, arrives at the Addams' home, the family is thrilled.",
        trailer: "https://www.youtube.com/watch?v=c95edsw17QE",
      },
  
      {
        title: "Casper",
        poster:
          "https://resizing.flixster.com/Tb459dZPTPBnfgylZc6HcmgB-eE=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16786_v_v13_bd.jpg",
        description:
          " An afterlife therapist and his daughter meet a friendly young ghost when they move into a crumbling mansion in order to rid the premises of wicked spirits. Dr. James Harvey and his daughter, Kat, head to an old mansion that is haunted by ghosts.",
        trailer: "https://www.youtube.com/watch?v=1RM2TV4vDUY",
      },
  
      {
        titile: "The Fall Guy",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQefU1kWlVXJ1CBJFgeyrU7mt-D8SYd-lZzAQ&s",
        description:
          "The plot follows a stuntman (Ryan Gosling) working on his ex-girlfriend's (Emily Blunt) directorial debut action film, only to find himself involved in a conspiracy surrounding the film's lead actor (Aaron Taylor-Johnson). The cast also features Hannah Waddingham, Teresa Palmer, Stephanie Hsu, and Winston Duke.",
        trailer: "https://www.youtube.com/watch?v=j7jPnwVGdZ8",
      },
  
      {
        title: "Once Upon a Time... in Hollywood",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMzMzNmViNjYtN2ViNi00NDM3LWFlMmItNDYyMGIzY2EzZjE2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description:
          "Actor Rick Dalton gained fame and fortune by starring in a 1950s television Western, but is now struggling to find meaningful work in a Hollywood that he doesn't recognize anymore. He spends most of his time drinking and palling around with Cliff Booth, his easygoing best friend and longtime stunt double. Rick also happens to live next door to Roman Polanski and Sharon Tate -- the filmmaker and budding actress whose futures will forever be altered by members of the Manson Family.",
        trailer: "https://www.youtube.com/watch?v=ELeMaP8EPAA",
      },
  
      {
        title: "Practical Magic",
        poster:
          "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p21981_p_v8_ae.jpg",
        description:
          "Sally (Sandra Bullock) and Gillian Owens (Nicole Kidman), born into a magical family, have mostly avoided witchcraft themselves. But when Gillian's vicious boyfriend, Jimmy Angelov (Goran Visnjic), dies unexpectedly, the Owens sisters give themselves a crash course in hard magic.",
        trailer: "https://www.youtube.com/watch?v=1pmSzGEqobo",
      },
  
      {
        title: "Pixels",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlN8cLWzg0SBt_gwr85pLtm5FlogQcWs2LHA&s",
        description:
          "When aliens misinterpret video feeds of classic arcade games as a declaration of war against them, they attack the Earth using games like PAC-MAN, Donkey Kong, Galaga, Centipede and Space Invaders as models for their various assaults.",
        trailer: "https://www.youtube.com/watch?v=XAHprLW48no",
      },
  
      {
        title: "Poor Things",
        poster:
          "https://uploads.counterfire.org/uploads/2024/01/poor-things-lg.jpg",
        description:
          "the incredible tale and fantastical evolution of Bella Baxter (Stone), a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter (Willem Dafoe). Under Baxter's protection, Bella is eager to learn.",
        trailer: "https://www.youtube.com/watch?v=RlbR5N6veqw",
      },
  
      {
        title: "IF",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/a/a7/IF_%28film%29_poster_2.jpg",
        description:
          "IF is about a girl who discovers that she can see everyone's imaginary friends -- and what she does with that superpower -- as she embarks on a magical adventure to reconnect forgotten IFs with their kids.",
        trailer: "https://www.youtube.com/watch?v=mb2187ZQtBE",
      },
  
      {
        title: "Anyone But You",
        poster:
          "https://grhsjournalist.com/wp-content/uploads/2024/02/MV5BNDYzYzc0MDYtMGM2MC00YzNjLWJhMjYtYzJhMWViMjgxZTcwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
        description:
          " the ex-lovers reunite at a wedding. So the wedding goes smoothly, they fake their relationship.",
        trailer: "https://www.youtube.com/watch?v=UtjH6Sk7Gxs",
      },
  
      {
        title: "Ready or Not",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTViMDA4YjgtZDQ4NC00ZDk2LTg0MWItOTc4MTkwMmVkZWRmXkEyXkFqcGc@._V1_.jpg",
        description:
          "A bride's wedding night takes a sinister turn when her eccentric new in-laws force her to take part in a terrifying game. A bride's wedding night takes a sinister turn when her eccentric new in-laws force her to take part in a terrifying game",
        trailer: "https://www.youtube.com/watch?v=ZtYTwUxhAoI",
      },
  
      {
        title: " Ghostbusters: Frozen Empire",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2Y0hRalUk17ZJv8UYws9k01kVmz3g_ebzg&s",
        description:
          "When the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must join forces to protect their home and save the world from a second ice age.",
        trailer: "https://www.youtube.com/watch?v=HpOBXh02rVc",
      },
  
      {
        title: " Red One",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdS6vHeOn_k4Dn4vBEKSNEmaeIGoB11XZzpQ&s",
        description:
          "Synopsis After Santa Claus -- Code Name: RED ONE -- is kidnapped, the North Pole's Head of Security (Dwayne Johnson) must team up with the world's most infamous bounty hunter (Chris Evans) in a globe-trotting, action-packed mission to save Christmas.",
        trailer: "https://www.youtube.com/watch?v=7l3hfD74X-4",
      },
  
      {
        title: "Addams Family Values",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOtP8rTu0u4c_HzYyaIvw6O16s-jf_EM8Rww&s",
        decription:
          "The film revolves around the family's adjustments to the birth of new baby Pubert. Subplots include Fester Addams marrying Pubert's nanny Debbie Jellinsky, who is a serial killer intending to murder him for his inheritance; and teenagers Wednesday and Pugsley Addams being sent to summer camp.",
        trailer: "https://www.youtube.com/watch?v=Bb2FTulPpOA",
      },
  
      {
        title: "The Wolf of Wall Street",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg",
        description:
          "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
        trailer: "https://www.youtube.com/watch?v=iszwuX1AK6A",
      },
  
      {
        title: "Borderlands",
        poster:
          "https://images.flickdirect.com/movies/borderlands/borderlands-box-art.jpg",
        description:
          " On the planet of Pandora, Roland, a mercenary soldier apparently gone rogue, kidnaps teenager Tiny Tina with the help of Krieg, a Psycho who was institutionalized in the same facility. Meanwhile, on another planet, bounty hunter Lilith is contacted by Atlas, a powerful corporate magnate.",
        trailer: "https://www.youtube.com/watch?v=lU_NKNZljoQ",
      },
  
      {
        title: "Trick 'r Treat",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDw6_Kk-iW4uJz-XgmYHzr916seKd1kseKBw&s",
        description:
          "In TRICK 'R TREAT, we witness several intertwining stories as they unfold on Halloween night, all of them witnessed by a mysterious trick-or-treater in footie pajamas and a burlap mask called Sam.",
        trailer: "https://www.youtube.com/watch?v=NJ66Htmmq4M",
      },
  
      {
        title: "Hocus Pocus 2",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/f/f4/Hocus_Pocus_2_Logo.jpg",
        description:
          "In 2022, twenty-nine years after the sisters were resurrected by the Black Flame Candle, local Salem teenagers Becca and Izzy prepare to celebrate Halloween and Becca's 16th birthday, but turn down a party invite from their former friend, Cassie Traske.",
        trailer: "https://www.youtube.com/watch?v=idc0EOmKr30",
      },
  
      {
        title: "The Killer's Game",
        poster:
          "https://m.media-amazon.com/images/M/MV5BODg4MTBiOGQtN2I5Yi00MWY2LWI1ODktZTUzZjhlYmZjMjFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description:
          "In the new action-comedy THE KILLER'S GAME, when top hitman Joe Flood (Dave Bautista) is diagnosed with a terminal illness, he decides to take matters into his own hands – by taking a hit out on himself.",
        trailer: "https://www.youtube.com/watch?v=I6Mo7rUGGko",
      },
  
      {
        title: "A Different Man",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/4/44/A_Different_Man_poster.jpg",
        description:
          "An aspiring actor undergoes a radical medical procedure to transform his appearance. But his dream new face soon turns into a nightmare. But his dream new face soon turns into a nightmare.An aspiring actor undergoes a radical medical procedure to transform his appearance.",
        trailer: "https://www.youtube.com/watch?v=_9CmC5Rmsdw",
      },
  
      {
        title: "Emilia Pérez",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMGM0OGNhMzktZGFlNC00NDRmLWJmOTgtYmQ0N2JlZGJhMzQyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description:
          "A Mexican lawyer is offered an unusual job to help a notorious cartel boss retire and transition into living as a woman, fulfilling a long-held desire.",
        trailer: "https://www.youtube.com/watch?v=Qlbr7gJgBus",
      },
  
      {
        title: "My Old Ass",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs--w-9zcftouM2XeHh4k7WSh7Cwc72OfqKg&s",
        description:
          "A mushroom trip brings free-spirited Elliott face-to-face with her 39-year-old self. But when Elliott's old ass delivers warnings to her younger self, Elliott realizes she has to rethink everything about her family, life and love. What would you ask your older self?",
        trailer: "https://www.youtube.com/watch?v=Yvks3SeCDOs",
      },
  
      {
        title: "Haunted Mansion",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Haunted_Mansion_%282023%29_poster.jpg/220px-Haunted_Mansion_%282023%29_poster.jpg",
        description:
          "Widowed doctor Gabbie and her son Travis move into the abandoned Gracey Manor, planning to turn the mansion into a bed and breakfast, only to discover that it is infested with ghosts. Father Kent, an exorcist helping Gabbie, hires Ben to photograph Gracey Manor's ghosts.",
        trailer: "https://www.youtube.com/watch?v=AjLKTz81bj8",
      },
  
      {
        title: "The Rocky Horror Picture Show",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXG9ghR8IVaWuk0qUmQsb6e-U5NTwUJy1iQ&s",
        description:
          " sweethearts Brad (Barry Bostwick) and Janet (Susan Sarandon), stuck with a flat tire during a storm, discover the eerie mansion of Dr. Frank-N-Furter (Tim Curry), a transvestite scientist.",
        trailer: "https://www.youtube.com/watch?v=4plqh6obZW4",
      },
  
      {
        title: "Hit Man",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNDY5MzhhNjItZDAxYy00NzdhLWEyZjItMThkMzM2MGFkNzhhXkEyXkFqcGc@._V1_.jpg",
        description:
          "It follows an undercover New Orleans police contractor who poses as a reliable hitman as he tries to save a woman in need.",
        trailer: "https://www.youtube.com/watch?v=QpupjEg16Ao",
      },
  
      {
        title: "Despicable Me 4",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNzY0ZTlhYzgtOTgzZC00ZTg2LTk4NTEtZDllM2E2NGE5Njg2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description:
          " In DESPICABLE ME 4, Gru (voiced by Steve Carell) and his wife, Lucy (Kristen Wiig), now have a baby boy in addition to their three girls, Margo (Miranda Cosgrove), Edith (Dana Gaier), and Agnes (Madison Polan). After Gru arrests the person who bullied him in high school, supervillain Maxime Le Mal",
        trailer: "https://www.youtube.com/watch?v=qQlr9-rF32A",
      },
  
      {
        title: "Sing",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLpDtR8Qq2rKqHMe2eKMZA6MzDUQBAvnwTw&s",
        Description:
          "The movie features talking animals living their lives like a human would and when Buster the Koala needs money to save his opera house, he holds a singing competition where the animals compete for the grand prize.",
        trailer: "https://www.youtube.com/watch?v=9qPgK_u4vX8",
      },
      {
        title: "Corpse Bride",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Corpse_Bride_film_poster.jpg/220px-Corpse_Bride_film_poster.jpg",
        description:
          "Victor (Johnny Depp) and Victoria's (Emily Watson) families have arranged their marriage. Though they like each other, Victor is nervous about the ceremony. While he's in a forest practicing his lines for the wedding, a tree branch becomes a hand that drags him to the land of the dead.",
        trailer: "https://www.youtube.com/watch?v=AGACeWVdFqo",
      },
  
      {
        title: "Ghostbusters",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/2/2f/Ghostbusters_%281984%29_theatrical_poster.png",
        description:
          "Ghostbusters is a 1984 American supernatural comedy film directed by Ivan Reitman and written by Dan Aykroyd and Harold Ramis. It stars Bill Murray, Aykroyd, and Ramis as Peter Venkman, Ray Stantz, and Egon Spengler, three eccentric parapsychologists who start a ghost-catching business in New York City.",
        trailer: "https://www.youtube.com/watch?v=HpOBXh02rVc",
      },
    ],
  
    Drama: [
      {
        title: "The Shawshank Redemption",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5N680AMvuh33yyFnX8AIL8FQauY-ZbxK7A&s",
        description:
          "a banker in Maine, is convicted of murdering his wife and her lover, a golf pro. Since the state of Maine has no death penalty, he is given two consecutive life sentences and sent to the notoriously harsh Shawshank Prison.",
        trailer: "https://www.youtube.com/watch?v=NmzuHjWmXOc",
      },
  
      {
        title: "Forrest Gump",
        poster:
          "https://static0.srcdn.com/wordpress/wp-content/uploads/2023/05/forrest-gump-movie-poster.jpg",
        description:
          "Tom Hanks as Forrest Gump: At an early age, Forrest is deemed to have a below-average IQ of 75. He has an endearing character and shows devotion to his loved ones and duties, character traits that bring him into many life-changing situations.",
        trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg",
      },
  
      {
        title: "The Godfather",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWU4BB_TIirPXQyr6BJpNkh0aYJ3HuhOxlg&s",
        description:
          "The Godfather is set in the 1940s and takes place entirely within the world of the Corleones, a fictional New York Mafia family. It opens inside the dark office of the family patriarch, Don Vito Corleone (also known as the Godfather and played by Brando), on the wedding day of his daughter, Connie (Talia Shire).",
        trailer: "https://www.youtube.com/watch?v=UaVTIH8mujA",
      },
  
      {
        title: "Fight Club",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
        description:
          "The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention.",
        trailer: "https://www.youtube.com/watch?v=BdJKm16Co6M",
      },
  
      {
        title: "The Substance",
        poster:
          "https://acrn.com/wp-content/uploads/2024/10/the_substance-265285928-large.jpg",
        description:
          "The Substance is a 2024 satirical body horror film written, directed, and co-produced by Coralie Fargeat. It follows a fading celebrity (Demi Moore) who uses a black market drug that creates a much younger version of herself (Margaret Qualley) with unexpected side effects.",
        trailer: "https://www.youtube.com/watch?v=LNlrGhBpYjc",
      },
  
      {
        title: "Joker: Folie à Deux  ",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNTRlNmU1NzEtODNkNC00ZGM3LWFmNzQtMjBlMWRiYTcyMGRhXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
        description:
          "Arthur Fleck is in custody at Arkham State Hospital awaiting trial for the crimes he committed two years prior. His lawyer, Maryanne Stewart, plans to argue that Arthur suffers from dissociative identity disorder and that his Joker personality is responsible for the crimes.",
        trailer: "https://www.youtube.com/watch?v=_OKAwz2MsJs",
      },
  
      {
        title: "Caddo Lake",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY5eMhZtuiPQG2FAtBUKpMkcYZA_qv9vXx1w&s",
        description:
          "Caddo Lake is a slow-burn psychological thriller that delves deep into the murky waters of a family's past and the haunting mysteries of a vanishing girl. This film, directed by Celine Held and Logan George, offers a chilling exploration of grief, guilt, and the unsettling power of the unknown.",
        trailer:
          "https://www.google.com/search?q=caddo+lake+movie+trailer&oq=caddo+lake+movie+trai&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIICAIQABgWGB4yDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyDQgFEAAYhgMYgAQYigUyCggGEAAYgAQYogQyCggHEAAYgAQYogQyCggIEAAYgAQYogTSAQoxNTY4MWowajE1qAIIsAIB&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:e50e3fe0,vid:Y_Lp0RY7JGQ,st:0",
      },
  
      {
        title: "The Apprentice",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/6/67/The_Apprentice_%282024_film%29_poster.jpg",
        description:
          "determined to emerge from his powerful father's shadow and make a name for himself in Manhattan real estate, aspiring mogul Donald J. Trump is in the earliest days of his career when he encounters the man who will become one of the most important figures in his life: political fixer Roy Cohn.",
        trailer: "https://www.youtube.com/watch?v=0tXEN0WNJUg",
      },
  
      {
        title: "Saturday Night",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS79MJqoqD7lYwVCjcUnnGxkzhqnVwrWiMZrw&s",
        description:
          "Saturday Night is a 2024 American biographical comedy-drama film, directed by Jason Reitman, about the night of the 1975 premiere of NBC's Saturday Night, later known as Saturday Night Live. The script was written by Reitman and Gil Kenan, with both also co-producing it alongside Jason Blumenfeld and Peter Rice.",
        trailer: "https://www.youtube.com/watch?v=iZ9O_tl5Npk",
      },
  
      {
        title: "Lonely Planet",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/d/d5/Lonely_Planet_film_poster.jpg",
        description:
          "The story follows Katherine Loewe, played by the wonderful Laura Dern, an accomplished novelist who finds herself at a crossroads—or more accurately, a dead-end. After being kicked out of her ex's home, Katherine decides to escape to a picturesque writers' retreat in Marrakesh, Morocco",
        trailer: "https://www.youtube.com/watch?v=lTu7j2GOGwQ",
      },
      {
        title: "Woman of the Hour",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH3X7b-hklzzr3_qBbItBjeR9pjVjcSbzyug&s",
        description:
          "This movie follows the true story of a serial killer that goes on a dating show (with some embellishments, of course). We see the perspective of the woman on the show, as well as his experiences with murder. If you're looking for a fast paced, energetic thriller that has tons of action going on- this isn't it.",
        trailer: "https://www.youtube.com/watch?v=ODUdpwddTQk",
      },
  
      {
        title: "Speak No Evil",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMWI2OWFjNjgtOTQ2Zi00MjlmLTg2MGYtNmE4MjMyZjIzMDA0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description:
          "Its plot follows an American family who are invited to stay at a remote farmhouse of a British couple for the weekend, and the hosts soon begin to test the limits of their guests as the situation escalates. Jason Blum serves as a producer through his Blumhouse Productions banner.",
        trailer: "https://www.youtube.com/watch?v=FjzxI6uf8H8",
      },
  
      {
        title: "Martin",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvlNhP8fa8iDsHi7RWXKwm0IvwSZaErwpqIA&s",
        description:
          "In Pakistan, a mysterious person is injected with drugs, where he loses his memory and becomes aggressive. The person's aggressiveness leads him to get captured and imprisoned.",
        trailer: "https://www.youtube.com/watch?v=fqLCas2sWW0",
      },
  
      {
        title: "Anora",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYThiN2M0NTItODRmNC00NDhlLWFiYTgtMWM2YTEyYzI3ZTY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description:
          "Sean Baker's 'Anora' plays with expectations in the best way In Anora, Mikey Madison plays a sex worker who dances at a strip club and meets — and marries — the son of a Russian oligarch. Filmmaker Sean Baker seems to anticipate and avoid conventions about on-screen violence",
        trailer: "https://www.youtube.com/watch?v=p1HxTmV5i7c",
      },
  
      {
        title: " We Live in Time",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/3/32/We_live_in_time_poster.jpg",
        description:
          "Told mostly nonlinearly, it follows a couple, Tobias (Garfield) and Almut (Pugh), as they grapple with the struggles life throws at their relationship, including complications around Almut's pregnancy and her battle with cancer while trying to maintain her job as an esteemed chef",
        trailer: "https://www.youtube.com/watch?v=bS0Clau5700",
      },
  
      {
        title: "Megalopolis ",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/f/f3/Megalopolis_%28film%29_poster.jpg",
        description:
          " brilliant artist in favor of an Utopian future, and the greedy mayor Franklyn Cicero. Between them is Julia Cicero, with her loyalty divided between her father and her beloved",
        trailer: "https://www.youtube.com/watch?v=pq6mvHZU0fc",
      },
  
      {
        title: "The Electric State ",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYmVhYTBjNWItMjYyYy00MTM4LWE3ZmEtZDgyNTA2NTk3YzEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description:
          "The Electric State' follows an orphaned teenager who ventures across the American West with a cartoon-inspired robot, a smuggler, and his sidekick",
        trailer: "https://www.youtube.com/watch?v=9gUDaPTPxwo",
      },
  
      {
        title: "The Batman",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlKULNrwrMeHmBf73e2n5lGgNoNFvEhYU9oA&s",
        description:
          "The film sees Batman, in his second year fighting crime in Gotham City, uncover corruption with ties to his own family while pursuing the Riddler (Dano), a mysterious serial killer targeting the city's elite. Development began after Ben Affleck was cast as Batman in the DC Extended Universe (DCEU) in 2013",
        trailer: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
      },
  
      {
        title: "Vettaiyan",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXc5lCnSKoubY6LXRlAiNtvMXcFMXsPS0lfw&s",
        description:
          "an investigative thriller that explores themes of justice and corruption within the police force. Rajinikanth plays a cop known for his aggressive methods, while Amitabh Bachchan portrays Justice Dr. Sathyadev Bramhadutt Pande from the National Human Rights Commission",
        trailer: "https://www.youtube.com/watch?v=pE1qTi_Lt8E",
      },
  
      {
        title: "Inside Out 2",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg",
        description:
          "A sequel that features Riley entering puberty and experiencing brand new, more complex emotions as a result.",
        trailer: "https://www.youtube.com/watch?v=LEjhY15eCx0",
      },
  
      {
        title: "Joker",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Joker_%282019_film%29_poster.jpg/220px-Joker_%282019_film%29_poster.jpg",
        description:
          "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him.",
        trailer: "https://www.youtube.com/watch?v=t433PEQGErc",
      },
      {
        title: "It Ends with Us",
        poster:
          "https://www.ahlahasa.com/wp-content/uploads/2024/10/It-Ends-With-Us-movie-1.jpg",
        description:
          "ells the story of Lily Bloom, a woman who overcomes a traumatic childhood to embark on a new life in Boston and chase a lifelong dream of opening her own business.",
        trailer: "https://www.youtube.com/watch?v=DLET_u31M4M",
      },
  
      {
        title: "Gladiator II ",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxaiWi96_-JTl6iCZGilDzV_V7Izygm97dZg&s",
        description:
          "Roman soldiers led by General Marcus Acacius invade, killing his wife and forcing Lucius into slavery. Inspired by the story of Maximus, Lucius resolves to fight as a gladiator under the teaching of Macrinus, a former slave who plots to overthrow the young emperors Caracalla and Geta.",
        trailer: "https://www.youtube.com/watch?v=Ts0N8swyWFI",
      },
  
      {
        title: "Lee",
        poster:
          "https://preview.redd.it/first-poster-of-lee-starring-kate-winslet-v0-7rgo71pqs1cd1.png?width=1080&crop=smart&auto=webp&s=41e93d0de51ec7cb2a92454094d02e95a6e6c370",
        description:
          "The story of action star Bruce Lee's life in the days leading up to untimely death. The story of action star Bruce Lee's life in the days leading up to untimely death.",
        trailer: "https://www.youtube.com/watch?v=DmFYkiUAAA8",
      },
  
      {
        title: "Challengers",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR_H__j52zxkh2iTzkSpUYDvECP8W2MHYWsQ&s",
        description:
          "Tashi, a former tennis prodigy turned coach, transformed her husband into a champion. But to overcome a recent losing stre",
        trailer: "https://www.youtube.com/watch?v=VobTTbg-te0",
      },
      {
        title: "Uprising",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Rnv4W_U90utuzbksoia71rZCKcPX4t6hXg&s",
        description:
          " this movie is about an uprising that began because of a master",
        trailer: "https://www.youtube.com/watch?v=TqfaCAA1UeE",
      },
  
      {
        title: "Killer Heat",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYmI2MzhmZmEtZjMyZC00MzJiLTlkZTEtNGNhZDEwYWVmMWZhXkEyXkFqcGc@._V1_.jpg",
        description:
          "On the sunny island of Crete, twin brothers (Madden) are caught in a violent love triangle. A damaged detective, Nick Bali, also known as",
        trailer: "https://www.youtube.com/watch?v=ADGSIaE6nzE",
      },
  
      {
        title: "Devara Part 1 ",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZWEwNmYwYTAtMmQxYS00ZTgwLWE0NmUtNGIwZDEyZmYwN2EwXkEyXkFqcGc@._V1_.jpg",
        description:
          "The conflict, which starts as a personal vendetta, quickly escalates into a much larger power play that threatens to disrupt the entire region",
        trailer: "https://www.youtube.com/watch?v=5cx7rvMvAWo",
      },
  
      {
        title: "The Shawshank Redemption ",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5mH7_PAsq7t_5O0bWZ9dMH2N_tSr3blYsNg&s",
        description:
          "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.",
        trailer: "https://www.youtube.com/watch?v=NmzuHjWmXOc",
      },
  
      {
        title: "Kinds of Kindness ",
        poster: "https://i.redd.it/gkkpd2afjk6d1.jpeg",
        description:
          " a policeman who is alarmed that his wife who was missing-at-sea has returned and seems a different person; and a woman determined to find a specific someone with a special ability, who is destined to become ...",
        trailer: "https://www.youtube.com/watch?v=NGOL2_mI9Hw",
      },
  
      {
        title: "A Man Called Otto ",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZDU3ZTI0MTItOTBlMS00ODY2LWI1MzctODZkZTllZDU1ZTg2XkEyXkFqcGc@._V1_.jpg",
        description:
          "Otto is a grump who's given up on life following the loss of his wife and wants to end it all. When a young family moves in nearby, he meets his match in quick-witted Marisol, leading to a friendship that will turn his world around.",
        trailer: "https://www.youtube.com/watch?v=eFYUX9l-m5I",
      },
  
      {
        title: "The Godfather ",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg",
        description:
          "The Godfather is set in the 1940s and takes place entirely within the world of the Corleones, a fictional New York Mafia family. It opens inside the dark office of the family patriarch, Don Vito Corleone (also known as the Godfather and played by Brando), on the wedding day of his daughter, Connie (Talia Shire).",
        trailer: "https://www.youtube.com/watch?v=UaVTIH8mujA",
      },
  
      {
        title: "Carry On ",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNDVmOGRiMjMtZWRhOS00Y2Y4LWI2MDktYzk4MDk5MjQ2YWQ3XkEyXkFqcGc@._V1_.jpg",
        description:
          "Carry-On follows a young TSA agent as he fights to outsmart a mysterious traveler who blackmails him into letting a dangerous package slip",
        trailer: "https://www.youtube.com/watch?v=aYOW0z43hyQ",
      },
  
      {
        title: "Rebel Ridge ",
        poster:
          "https://miro.medium.com/v2/resize:fit:450/1*5kHvY81JqYnsoMESWDQuAQ.jpeg",
        description:
          "The film stars Aaron Pierre as Terry Richmond, a former Marine who has the funds needed to post bail for his cousin unjustly seized via civil forfeiture by a small town's corrupt police force.",
        trailer: "https://www.youtube.com/watch?v=gF3gZicntIw",
      },
      {
        title: "A Complete Unknown",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/d/d5/A_Complete_Unknown_poster.jpg",
        description:
          "The film is about the controversy surrounding the switch to electrically amplified instrumentation by Bob Dylan. Timothée Chalamet stars as Dylan and also serves as producer. It also stars Edward Norton, Elle Fanning, and Monica Barbaro. Dylan Goes Electric!",
        trailer: "https://www.youtube.com/watch?v=FdV-Cs5o8mc",
      },
  
      {
        title: "The Fall Guy",
        poster:
          "https://m.media-amazon.com/images/M/MV5BM2U0MTJiYTItMjNiZS00MzU4LTkxYTAtYTU0ZGY1ODJhMjRhXkEyXkFqcGc@._V1_.jpg",
        description:
          "The plot follows a stuntman (Ryan Gosling) working on his ex-girlfriend's (Emily Blunt) directorial debut action film, only to find himself involved in a conspiracy surrounding the film's lead actor (Aaron Taylor-Johnson). The cast also features Hannah Waddingham, Teresa Palmer, Stephanie Hsu, and Winston Duke.",
        trailer: "https://www.youtube.com/watch?v=j7jPnwVGdZ8",
      },
  
      {
        title: "Oppenheimer",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
        description:
          "Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history.",
        trailer: "https://www.youtube.com/watch?v=uYPbbksJxIg",
      },
  
      {
        title: "A Quiet Place: Day One",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMDdjZTljZWMtMDIwNi00MTA5LTkxZmItNmY0NDA3ZDM0N2M2XkEyXkFqcGc@._V1_.jpg",
        description:
          "A Quiet Place: Day One follows a woman named Sam (Lupita Nyong'o) who is dying from cancer. She lives in hospice care and one day, she's been convinced to go out into Manhattan to enjoy a show. The invasion of the alien creatures begins during the show. Lots of people start to die",
        trailer: "https://www.youtube.com/watch?v=YPY7J-flzE8",
      },
  
      {
        title: "Once Upon a Time",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/a/a6/Once_Upon_a_Time_in_Hollywood_poster.png",
        description:
          "It features a large ensemble cast led by Leonardo DiCaprio, Brad Pitt, and Margot Robbie. Set in 1969 Los Angeles, the film follows a fading actor and his stunt double as they navigate the rapidly changing film industry, with the threat of the Tate murders looming.",
        trailer: "https://www.youtube.com/watch?v=ELeMaP8EPAA",
      },
      {
        title: "Love",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIjAqcFMgP0SN1ny4sRVL8Bzmqjtrj1DMGKg&s",
        description:
          "Murphy is an American living in Paris who enters a highly sexually and emotionally charged relationship with Electra. Unaware of the effect it will have on their relationship, they invite their pretty neighbor into their bed.",
        trailer: "https://www.youtube.com/watch?v=0zB7UGwEZ0M",
      },
  
      {
        title: "Practical Magic",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/6/68/Practical_magicposter.jpg",
        description:
          "Sally (Sandra Bullock) and Gillian Owens (Nicole Kidman), born into a magical family, have mostly avoided witchcraft themselves. But when Gillian's vicious boyfriend, Jimmy Angelov (Goran Visnjic), dies unexpectedly, the Owens sisters give themselves a crash course in hard magic.",
        trailer: "https://www.youtube.com/watch?v=R7uixLkpjPs",
      },
  
      {
        title: "The Silence of the Lambs",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZTk5NTYzMGEtMDE2OS00ODYxLWJiNjQtNGMyMmM2MTE0M2QxXkEyXkFqcGc@._V1_QL75_UX160_.jpg",
        description:
          "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims",
        trailer: "https://www.youtube.com/watch?v=6iB21hsprAQ",
      },
  
      {
        title: "Poor Things",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYWU2MjRjZTYtMjVkMS00MTBjLWFiMTAtYmZlYTk1YjkyMWFkXkEyXkFqcGc@._V1_.jpg",
        description:
          "From filmmaker Yorgos Lanthimos and producer Emma Stone comes the incredible tale and fantastical evolution of Bella Baxter (Stone), a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter (Willem Dafoe). Under Baxter's protection, Bella is eager to learn.",
        trailer: "https://www.youtube.com/watch?v=zC0P5-z52Yk",
      },
    ],
  
    Fantasy: [
      {
        title: " Beetlejuice Beetlejuice",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAb-iWsU9ZRCcjC1Zp-Xi6ltk4iY5v5Yhl5Q&s",
        description:
          "The story followed the Deetz family moving to Hawaii, where Charles is developing a resort. They soon discover that his company is building on the burial ground of an ancient Hawaiian Kahuna. The spirit comes back from the afterlife to cause trouble, and Betelgeuse becomes a hero by winning a surf contest with magic.",
        trailer: "https://www.youtube.com/watch?v=CoZqL9N6Rx4",
      },
  
      {
        title: "Megalopolis",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/f/f3/Megalopolis_%28film%29_poster.jpg",
        description:
          "Megalopolis is a 2024 science fiction drama film directed by Francis Ford Coppola about a visionary architect who wants to rebuild New York City as a utopia after a disaster. The film stars Adam Driver as Cesar Catilina, the architect, and Giancarlo Esposito as Mayor Franklyn Cicero, who opposes Catilina's plans: ",
        trailer: "https://www.youtube.com/watch?v=pq6mvHZU0fc",
      },
  
      {
        title: "Inside Out 2",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg",
        description:
          "As Riley tries to adapt to her teenage years, her old emotions try to adapt to the possibility of being replaced.A sequel that features Riley entering puberty and experiencing brand new, more complex emotions as a result.",
        trailer: "https://www.youtube.com/watch?v=LEjhY15eCx0",
      },
  
      {
        title: "Wicked",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaynaS5qI6kh39Vc256d9tQIDYuQkVuFzTmQ&s",
        description:
          "The movie is a prequel to The Wizard of Oz that tells the story of Elphaba, who becomes the Wicked Witch of the West, and her friendship with Glinda, the Good Witch. The movie follows the two women from their time at Shiz University, where they start as roommates and eventually become friends and political enemies",
        trailer: "https://www.youtube.com/watch?v=6COmYeLsz4c",
      },
  
      {
        title: "Hocus Pocus",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3mnuC2ddpF5wI8xdvB7SozYj-hUKOIDJ9Q&s",
        description:
          "The Sanderson sisters, played by Bette Midler, Sarah Jessica Parker, and Kathy Najimy, are hanged for murdering a young girl and cursing her brother to become an immortal cat. However, a boy named Max Dennison (Omri Katz) accidentally resurrects them by lighting a bewitched candle. Max, his sister Dani (Thora Birch), and his girlfriend Allison (Vinessa Shaw) must stop the witches with the help of Thackery Binx, a boy who was turned into a cat for interfering with the witches centuries earlier.",
        trailer: "https://www.youtube.com/watch?v=F4e6YQFrt1s",
      },
  
      {
        title: "Girl Haunts Boy",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKKbG4s-mDwDQF_XKAO9oqEEqfMSWaYiDPA&s",
        description:
          "Cole, a teen grieving the loss of his dad, forms an unlikely bond with Bea, a ghost. As they navigate life and death, they must break an ancient curse.",
        trailer: "https://www.youtube.com/watch?v=-2aErEe7XZc",
      },
  
      {
        title: "Transformers One",
        poster:
          "https://dx35vtwkllhj9.cloudfront.net/paramountpictures/transformers-one/images/regions/us/onesheet.jpg",
        description:
          "Transformers One is a 2024 animated film that tells the origin story of Optimus Prime and Megatron, who were once friends but became sworn enemies:",
        trailer: "https://www.youtube.com/watch?v=5a09yJU-mCI",
      },
  
      {
        title: "The Nightmare Before Christmas",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZZRYZdu9OO4lHMrzMxrhoHa30XxO8N23fvw&s",
        description:
          "The Nightmare Before Christmas is a 1993 stop-motion animated film about Jack Skellington, the Pumpkin King of Halloween Town, who discovers Christmas Town and tries to bring Christmas to his home",
        trailer: "https://www.youtube.com/watch?v=wr6N_hZyBCk",
      },
  
      {
        title: "The Legend of Ochi",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkNMQc5Z_pMdAv-jsr4mb2RsYxYgzDhwY1dg&s",
        description:
          "In a remote village, a young girl is raised to never go outside after dark and fear the reclusive forest creatures known as the ochi. When a baby ochi is left behind by its pack, she embarks on an adventure to reunite it with its family.",
        trailer: "https://www.youtube.com/watch?v=_jTFLg3arYU",
      },
  
      {
        title: "Harry Potter and the Sorcerer's Stone",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@.V1.jpg",
        description:
          " The story begins when 11-year-old orphan Harry discovers that his parents were wizards and he starts his education in magic at Hogwart's School of Witchcraft and Wizardry. There he makes two close friends, Ron and Hermione, who share his adventures.",
        trailer: "https://www.youtube.com/watch?v=VyHV0BRtdxo",
      },
  
      {
        title: "The Boy and the Heron",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCh9a6rRJCDn7PY0MAqBoQ_h_zZXZyX-tCA&s",
        description:
          "Mahito, a young 12-year-old boy, struggles to settle in a new town after his mother's death. However, when a talking heron informs Mahito that his mother is still alive, he enters an abandoned tower in search of her, which takes him to another world.",
        trailer: "https://www.youtube.com/watch?v=t5khm-VjEu4",
      },
  
      {
        title: "The Addams Family",
        poster:
          "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13571_p_v12_an.jpg",
        description:
          "The striking movie follows Barbara (Geena Davis) and Adam Maitland (Alec Baldwin) alongside teenager Lydia Deetz (Winona Ryder) as they clash with the titular Beetlejuice (Michael Keaton). We first meet Barbara and Adam enjoying a staycation, but they soon die in a car accident, leaving them to haunt their own home.",
        trailer: "https://www.youtube.com/watch?v=CoZqL9N6Rx4",
      },
  
      {
        title: "Casper",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdBiNQXVamzeB5LWWv_IqwfpeQz6o9WZQgw&s",
        description:
          "A therapist who helps spirits pass on to the afterlife and his daughter move into a mansion to rid it of evil spirits. The therapist, Dr. James Harvey (Bill Pullman), is hired by Carrigan Crittenden (Cathy Moriarty) to exorcise the ghosts from her recently inherited mansion. While there, Dr. Harvey's daughter, Kat (Christina Ricci), meets Casper, a friendly young ghost who falls in love with her",
        trailer: "https://www.youtube.com/watch?v=wrVk-ajlKSY",
      },
  
      {
        title: "Practical Magic",
        poster:
          "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p21981_p_v8_ae.jpg",
        description:
          "The sisters are raised by their aunts after their parents die from a family curse. They learn practical magic from their aunts and how to deal with ridicule. However, a curse on the Owens family means that any man who falls for an Owens woman will die",
        trailer: "https://www.youtube.com/watch?v=1pmSzGEqobo",
      },
  
      {
        title: "Pixels",
        poster:
          "https://www.commonsensemedia.org/sites/default/files/styles/ratio_2_3_medium/public/product-images/csm-movie/pixels-0-min-min.jpg",
        description:
          "The aliens use the games as models for their attacks, launching assaults on Earth using games like Pac-Man, Donkey Kong, Galaga, Centipede, and Space Invaders",
        trailer: "https://www.youtube.com/watch?v=XAHprLW48no",
      },
  
      {
        title: "Bram Stoker's Dracula",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7LYkPjUgbJm7jicAJGXgQHwjskP5iBo2s7A&s",
        description:
          "Adaptation of Bram Stoker's classic vampire novel. Gary Oldman plays Dracula whose lonely soul is determined to reunite with his lost love, Mina (Winona Ryder). In Britain, Dracula begins a reign of terror and seduction draining the life from her closest friend, Lucy (Sadie Frost).",
        trailer: "https://www.youtube.com/watch?v=CjgwUB1CXek",
      },
  
      {
        title: "Ghostbusters: Frozen Empire",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRasknWp98XlN2krxAQz-31xjL911lVed49gw&s",
        description:
          "The Spenglers and the original Ghostbusters must work together to save the world from a second ice age after discovering an ancient artifact that unleashes an evil force",
        trailer: "https://www.youtube.com/watch?v=HpOBXh02rVc",
      },
  
      {
        title: "Sleepy Hollow",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/0/09/Sleepy_hollow_ver2.jpg",
        description:
          "Ichabod Crane (Johnny Depp), an 18th-century detective, is sent to Sleepy Hollow to investigate the murders. Crane is skeptical of the supernatural, but he must analyze evidence and venture into the dark woods to find the truth.",
        trailer: "https://www.youtube.com/watch?v=6RsKwn_Je1k",
      },
  
      {
        title: "Red One",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZmFkMjE4NjQtZTVmZS00MDZjLWE2ZmEtZTkzODljNjhlNWUxXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
        description:
          "After Santa Claus (code name: Red One) is kidnapped, the North Pole's Head of Security (Dwayne Johnson) must team up with the world's most infamous bounty hunter (Chris Evans) in a globe-trotting, action-packed mission to save Christmas.",
        trailer: "https://www.youtube.com/watch?v=U8XH3W0cMss",
      },
  
      {
        title: "Addams Family Values",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rCkLA9LwkrEQHIaKcgp_eEiSEV9GHA2ITA&s",
        description:
          "his gold-digging new love, a black widow named Debbie. When an adorable baby boy is added to the Addams household, Wednesday and Pugsley do not hate him, they just aren't necessarily excited about his existence.",
        trailer: "https://www.youtube.com/watch?v=Bb2FTulPpOA",
      },
  
      {
        title: "It Chapter Two",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXib0GLRjX2i9g-KsNBX_ZFkV0iprbNdlJDA&s",
        description:
          "The movie takes place 27 years after the original It film, when Pennywise returns to terrorize Derry, Maine. The Losers' Club, a group of six friends who defeated Pennywise before, are called back to Derry by Mike Hanlon, who has dedicated his life to studying Pennywise. The friends must face their past fears and conquer Pennywise, who is more powerful than ever.",
        trailer: "https://www.youtube.com/watch?v=xhJ5P7Up3jA",
      },
  
      {
        title: "Van Helsing",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-FGbIzBxUMR_d5eaMHbyi_-bjkkIsCEfLA&s",
        description:
          "In the late 19th century, the Vatican sends monster hunter Gabriel Van Helsing (Hugh Jackman) and his sidekick Carl to Transylvania to stop Count Dracula. There, Van Helsing teams up with Anna Valerious (Kate Beckinsale), a vampire-killer from an ancient Romanian clan, to defeat Dracula. However, they face an army of undead minions, Frankenstein's monster, Dracula's brides, and the Wolf Man",
        trailer: "https://www.youtube.com/watch?v=3fdRKme00uI",
      },
  
      {
        title: "Hocus Pocus 2",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/f/f4/Hocus_Pocus_2_Logo.jpg",
        description:
          "In 2022, twenty-nine years after the sisters were resurrected by the Black Flame Candle, local Salem teenagers Becca and Izzy prepare to celebrate Halloween and Becca's 16th birthday, but turn down a party invite from their former friend, Cassie Traske.",
        trailer: "https://www.youtube.com/watch?v=idc0EOmKr30",
      },
  
      {
        title: "Doctor Sleep",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbTG6I8d1k70BKhQkyRe5tkbstNDCAsIj46A&s",
        description:
          "Dan Torrance, traumatized by his childhood at the Overlook Hotel, struggles with alcoholism and tries to find peace. He meets Abra Stone, a teenager with a powerful extrasensory gift, and they form an alliance to fight the True Knot, a cult that preys on children with psychic abilities.",
        trailer: "https://www.youtube.com/watch?v=BOzFZxB-8cw",
      },
  
      {
        title: "Coraline",
        poster:
          "https://resizing.flixster.com/u4QgzhGunwGzwBKN6EfPWiRUUzI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2EyNjNmMjE2LWE5ZDEtNGI4Mi05ZjM1LTIzMWQxOWY2YTZiNC5qcGc=",
        description:
          "A 11 year-old girl named Coraline just moved to her new house in the summer and thought that her house will be so boring. At midnight, Coraline found a door leading to a world that's better. Soon, Her family and neighbors started to act very creepy, even The Other Mother.",
        trailer: "https://www.youtube.com/watch?v=P8lfdvXkhu0",
      },
  
      {
        title: "The Watchers",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaJrL7-y_pbkOACb7Oz7wEwvsVk-hjRoUphg&s",
        description:
          "Rotten audience score. The Watchers follows Mina, a 28-year old artist who gets stranded in an expansive, untouched forest in western Ireland. When Mina finds shelter, she unknowingly becomes trapped alongside three strangers that are watched and stalked by mysterious creatures each night.",
        trailer: "https://www.youtube.com/watch?v=dYo91Fq9tKY",
      },
  
      {
        title: "Uglies",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZX5RIfZXPOw3Fzjt832UerKfB3z5bzQVRPA&s",
        description:
          "In a futuristic world that imposes a cosmetic surgery at 16, Tally is eager to join the rest of society. But when a friend runs away, Tally embarks on a journey to save her that upends everything she thought she wanted. Uglies was first published in 2005, but King believes its power has only grown over the years.",
        trailer: "https://www.youtube.com/watch?v=OhcOHkgTrQQ",
      },
  
      {
        title: "Haunted Mansion",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHmBEDNqBU2nvvNVtUQ_lo5lrBgq1_w8eJZw&s",
        description:
          "Widowed doctor Gabbie and her son Travis move into the abandoned Gracey Manor, planning to turn the mansion into a bed and breakfast, only to discover that it is infested with ghosts. Father Kent, an exorcist helping Gabbie, hires Ben to photograph Gracey Manor's ghosts.",
        trailer: "https://www.youtube.com/watch?v=AjLKTz81bj8",
      },
  
      {
        title: "The Witch",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnt8akf3odMOlnsgH3E9YF6AS0GYPtZqPy2A&s",
        description:
          "A family in 1630s New England is torn apart by the forces of witchcraft, black magic and possession. New England, 1630: William and Katherine try to lead a devout Christian life, homesteading on the edge of an impassible wilderness, with five children.",
        trailer: "https://www.youtube.com/watch?v=iQXmlf3Sefg",
      },
  
      {
        title: "Edward Scissorhands",
        poster:
          "https://www.commonsensemedia.org/sites/default/files/styles/ratio_2_3_medium/public/product-images/csm-movie/edward-poser.jpg",
        description:
          "he solitary life of an artificial man - who was incompletely constructed and has scissors for hands - is upended when he is taken in by a suburban family. The solitary life of an artificial man - who was incompletely constructed and has scissors for hands - is upended when he is taken in by a suburban family.",
        trailer: "https://www.youtube.com/watch?v=TBHIO60whNw",
      },
  
      {
        title: "The Crow",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMjEyOWJjMWQtZTY4Yi00ZjYyLWJhNDktZmRkNzEwMjlhZjQ3XkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
        description:
          "The night before his wedding, musician Eric Draven (Brandon Lee) and his fiancée are brutally murdered by members of a violent inner-city gang. On the anniversary of their death, Eric rises from the grave and assumes the gothic mantle of the Crow, a supernatural avenger.",
        trailer: "https://www.youtube.com/watch?v=djSKp_pwmOA",
      },
  
      {
        title: "Corpse Bride",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwNK5lqhiE6jSoI0pYZAYOB8QlhvPR3viCqw&s",
        description:
          "In an unnamed Victorian town, Victor Van Dort, the son of nouveau riche fish merchants, and Victoria Everglot, the neglected daughter of impoverished aristocrats, prepare for their arranged marriage, which will simultaneously raise the social class of the Van Dort family and restore the wealth of the Everglot family .",
        trailer: "https://www.youtube.com/watch?v=AGACeWVdFqo",
      },
  
      {
        title: "Ghostbusters",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/2/2f/Ghostbusters_%281984%29_theatrical_poster.png",
        description:
          "Ghostbusters is a 1984 American supernatural comedy film directed by Ivan Reitman and written by Dan Aykroyd and Harold Ramis. It stars Bill Murray, Aykroyd, and Ramis as Peter Venkman, Ray Stantz, and Egon Spengler, three eccentric parapsychologists who start a ghost-catching business in New York City.",
        trailer: "https://www.youtube.com/watch?v=wQAljlSmjC8",
      },
  
      {
        title: "Moana 2",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0vHUUiV74eAzBzjLNR-oSxvJCTzvDbon7w&s",
        description:
          "This takes audiences on an expansive new voyage with Moana, Maui and a brand-new crew of unlikely seafarers. After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced",
        trailer: "https://www.youtube.com/watch?v=hDZ7y8RP5HE",
      },
  
      {
        title: "Inside Out",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOChzbAVxomR8C_1Lwz_wrlssxRFd_lVWtA&s",
        description:
          "Synopsis. A girl named Riley is born in Minnesota, and within her mind, five personifications of her core emotions-Joy, Sadness, Disgust, Fear, and Anger-come to life. The emotions live in Headquarters, Riley's conscious mind, where they influence Riley's actions and memories via a control console.",
        trailer: "https://www.youtube.com/watch?v=yRUAzGQ3nSY",
      },
  
      {
        title: "The Life of Chuck",
        poster:
          "https://a.ltrbxd.com/resized/film-poster/7/5/7/6/1/2/757612-the-life-of-chuck-0-230-0-345-crop.jpg?v=73f7097881",
        description:
          "A life-affirming, genre-bending story based on Stephen King's novella about three chapters in the life of an ordinary man named Charles Krantz. A life-affirming, genre-bending story based on Stephen King's novella about three chapters in the life of an ordinary man named Charles Krantz.",
        trailer: "https://www.youtube.com/watch?v=hsHU7W1umOM",
      },
  
      {
        title: "Barbie",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXImAZkYk0g5X_zPHHmhvi4SdHf73MF-GNMQ&s",
        description:
          "The film begins with The Narrator (Helen Mirren) explaining the societal impact of the Barbie doll on history, accompanied by a clip of the original 1959 Barbie towering over a desert landscape, while little girls playing with baby dolls begin to destroy them.",
        trailer: "https://www.youtube.com/watch?v=pBk4NYhWNMM",
      },
  
      {
        title: "Twilight",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/b/b6/Twilight_%282008_film%29_poster.jpg",
        description:
          "It focuses on the development of a personal relationship between teenager Bella Swan (Kristen Stewart) and vampire Edward Cullen (Robert Pattinson), and the subsequent efforts of Edward and his family to keep Bella safe from a separate group of hostile vampires.",
        trailer: "https://www.youtube.com/watch?v=nxvGVSc6Ls8",
      },
  
      {
        title: "The Green Mile",
        poster:
          "https://images.moviesanywhere.com/3875280af5270deacfc628d591b89847/ac6a8771-3fca-41a0-9be2-be20a14b983a.jpg",
        description:
          "A tale set on death row, where gentle giant John Coffey possesses the mysterious power to heal people's ailments.",
        trailer: "https://www.youtube.com/watch?v=Ki4haFrqSrw",
      },
  
      {
        title: "Sonic the Hedgehog 3",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/9/9d/Sonic_the_Hedgehog_3_poster.jpg",
        description:
          "Sonic the Hedgehog returns to the big screen this holiday season in his most thrilling adventure yet. Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before.",
        trailer: "https://www.youtube.com/watch?v=qSu6i2iFMO0",
      },
  
      {
        title: "The Lord of the Rings: The War of the Rohirrim",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiOYZuNA9AUGpQRMzH9YrIYtMBICAneOf0Ug&s",
        description:
          "The War of the Rohirrim is set 183 years before Peter Jackson's The Lord of the Rings film trilogy and tells the story of Helm Hammerhand (Cox), a legendary king of Rohan, and his family as they defend their kingdom against an army of Dunlendings.",
        trailer: "https://www.youtube.com/watch?v=gCUg6Td5fgQ",
      },
  
      {
        title: "Miss Peregrine's Home for Peculiar Children",
        poster:
          "https://ew.com/thmb/5wuJm6xIU-_a35Mgxd1D_4Ywf64=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/miss-peregrine-poster_0-54654637381a46c8868b66c8d2575a5f.jpg",
        description:
          "A mysterious island. An abandoned orphanage. And a strange collection of very curious photographs. It all waits to be discovered in Miss Peregrine's Home for Peculiar Children, an unforgettable novel that mixes fiction and photography in a thrilling reading experience.",
        trailer: "https://www.youtube.com/watch?v=tV_IhWE4LP0",
      },
  
      {
        title: "Scooby-Doo",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTIxMzM1YzItZjM2Ny00NzgxLTliNTAtNzUxMzhhNzE3Yzk3XkEyXkFqcGc@.V1.jpg",
        description:
          "Two years after a clash of egos forced Mystery Inc. to close its doors, Scooby-Doo and his clever crime-solving cohorts Fred (Freddie Prinze Jr.), Daphne (Sarah Michelle Gellar), Shaggy (Matthew Lillard) and Velma (Linda Cardellini) are individually summoned to Spooky Island to investigate a series of paranormal ...",
        trailer: "https://www.youtube.com/watch?v=o3dbeI0BU1k",
      },
    ],
  
    Horror: [
      {
        title: "The Exorcist",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjriWB7_ATQWO8Tqn-boyYVKvVk8Bx7fh_Tw&s",
        description:
          "When a mysterious entity possesses a young girl, her mother seeks the help of two Catholic priests to save her life. When a mysterious entity possesses a young girl, her mother seeks the help of two Catholic priests to save her life.",
        trailer: "https://www.youtube.com/watch?v=BU2eYAO31Cc",
      },
      {
        title: "Hereditary",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuSPnXlXHwCA90kElt-9Avvm_9D9hBSW3tlw&s",
        description:
          "Hereditary is a 2018 American psychological horror film written and directed by Ari Aster in his feature directorial debut. Starring Toni Collette, Alex Wolff, Milly Shapiro, Ann Dowd, and Gabriel Byrne, the film follows a grieving family tormented by sinister occurrences after the death of their secretive grandmother.",
        trailer: "https://www.youtube.com/watch?v=V6wWKNij_1M",
      },
      {
        title: "The Conjuring",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTydfLqbVMkW_7DYwh6cLKbhuVrMErZQ_TUog&s",
        description:
          "Parents need to know that The Conjuring is a truly scary horror movie that's based on a true story about a haunted house, a demon possession, and an exorcism. It's more frightening than gory; no characters die (except a dog), and not much blood is shown, except during an intense demon-possession scene at the climax.",
        trailer: "https://www.youtube.com/watch?v=k10ETZ41q5o ",
      },
      {
        title: "The Craft: Legacy",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/0/06/The_Craft_-_Legacy.png",
        description:
          "The Craft: Legacy, is a 2020 American supernatural horror film written and directed by Zoe Lister-Jones. A legacy sequel to The Craft (1996), the film stars Cailee Spaeny, Gideon Adlon, Lovie Simone, and Zoey Luna as four teenage girls who practice witchcraft as a coven.",
        trailer: "https://www.youtube.com/watch?v=J60ueFp-jv8",
      },
      {
        title: "A Nightmare on Elm Street",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/e/ee/A_Nightmare_on_Elm_Street_2010_poster.jpg",
        description:
          "In Wes Craven's classic slasher film, several Midwestern teenagers fall prey to Freddy Krueger (Robert Englund), a disfigured midnight mangler who preys on the teenagers in their dreams -- which, in turn, kills them in reality.",
        trailer: "https://www.youtube.com/watch?v=CBcVZcornjI ",
      },
      {
        title: "Saw X",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6b9_555davrAv_ZCnO2KqdR09sVqa-chHQ&s",
        description:
          "Set between the events of SAW I and II, a sick and desperate John travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer -- only to discover the entire operation is a scam to defraud the most vulnerable.",
        trailer: "https://www.youtube.com/watch?v=t3PzUo4P21c",
      },
  
      {
        title: "M3GAN",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvZIAOrx27KH9PNLi0j7NneSzgyEz2kGJKg&s",
        description:
          "Its plot follows an artificially intelligent doll who develops self-awareness and becomes hostile toward anyone who comes between her and her human companion.",
        trailer: "https://www.youtube.com/watch?v=BRb4U99OU80",
      },
      ,
      {
        title: "Scream 6",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0V8WpqqwapeOcz41vfrz2Og6465engJDLg&s",
        description:
          "Synopsis. One year after the Woodsboro killings orchestrated by Richie Kirsch and Amber Freeman, Blackmore University professor Laura Crane is catfished and murdered by her student Jason Carvey wearing a Ghostface costume because of him blaming her for failing.",
        trailer: "https://www.youtube.com/watch?v=h74AXqw4Opc ",
      },
      {
        title: "Evil Dead Rise",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfJrM5FaDp_kp2tjqujfnb1MN1svMUBvDDSQ&s",
        description:
          "Evil Dead Rise follows two estranged sisters whose reunion is disrupted by the rise of flesh-possessing demons. As they face a nightmarish battle for survival, the family dynamic takes on terrifying twists.",
        trailer: "https://www.youtube.com/watch?v=BqQNO7BzN08",
      },
      {
        title: "Five Nights at Freddy's",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNzFkMDE2ZmEtOWMwNy00MWM2LThlNjMtZWQzNWY5MTJjZjcxXkEyXkFqcGc@._V1_QL75_UX190_CR0,10,190,281_.jpg",
        description:
          "The Five Nights at Freddy's series consists of psychological horror-themed video games in which the player is usually a night-time employee at a location connected with Freddy Fazbear's Pizza, a fictional children's restaurant that takes inspiration from family pizza chains like Chuck E. Cheese and ShowBiz Pizza Place.",
        trailer: "https://www.youtube.com/watch?v=0VH9WCFV6XQ",
      },
      {
        title: "The Last Voyage of the Demeter",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFeCSaxsaoEgHvDM6We2cJKcUO6XK2cdbF-Q&s",
        description:
          "The Last Voyage of the Demeter tells the terrifying story of the merchant ship Demeter, which was chartered to carry private cargo--fifty unmarked wooden crates--from Carpathia to London.",
        trailer: "https://www.youtube.com/watch?v=6FgUUO9Ztd0",
      },
      {
        title: "Talk to Me",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaFHgPKj6Vf1AeWq5l7IU2Agq8FqQprV3cHw&s",
        description:
          "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
        trailer: "https://www.youtube.com/watch?v=aLAKJu9aJys",
      },
      {
        title: "The Nun 2",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz0HwlEbP_JMVkeKQmJjQorSSREhL0uCq0gA&s",
        description:
          "Once again, Sister Irene comes face-to-face with Valak, the demon nun. 1956 in France, a priest is horribly murdered. An evil is spreading. Once again, Sister Irene comes face-to-face with Valak, the demon nun.",
        trailer: "https://www.youtube.com/watch?app=desktop&v=Em7wEqLzDnE",
      },
      {
        title: "Renfield",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZP15Dx4E1lp_a2JuUHvAQezxqK1ZA1jn-Dg&s",
        description:
          "He appears in Bram Stoker's 1897 novel, which surprisingly enough was titled Dracula. He is a servant and a “familiar” to the Count and is devoted to him past the point of sanity. He's mentally unstable and survives on a diet of bugs that are provided to him by the Count.",
        trailer: "https://www.youtube.com/watch?v=6LmO6rmDW08",
      },
      {
        title: "The Boogeyman",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREehBqwM03Jcla3D4dea28Y595RmOe9YX2Ew&s",
        description:
          "Based on the 1973 short story of the same name by Stephen King, the film follows a family that becomes haunted by the Boogeyman after a troubled man visits and inadvertently brings the creature to them. The ensemble cast includes Sophie Thatcher, Chris Messina, Vivien Lyra Blair, and David Dastmalchian.",
        trailer: "https://www.youtube.com/watch?v=cFqCmIU0-_M",
      },
      {
        title: "Cobweb",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNDY5ZGIwZjUtMmVhZi00OTBlLTk5ZTctOTY3Y2VlMGM1ZjI0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description:
          "An eight-year-old boy tries to investigate the mysterious knocking sounds that are coming from inside the walls of his house, unveiling a dark secret that his sinister parents have kept hidd...",
        trailer: "https://www.youtube.com/watch?v=hGY0icwlDGY",
      },
      {
        title: "No One Will Save You",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmKyTAGmRZFiisTtXb18CuZWTrShRvAeaJTpiCHqkkWbbFswfjkRE5YIn_BmE-9ZGuf_s&usqp=CAU",
        description:
          "No One Will Save You” is an action-packed face-off between Brynn and a host of extraterrestrial beings who threaten her future while forcing her to deal with her past. Written and directed by Brian Duffield, the film features music by composer Joseph Trapanese.",
        trailer: "https://www.youtube.com/watch?v=dcxR_YJW49M",
      },
      {
        title: "Insidious: The Red Door",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSojZUcErcE8nP6nbWSDqdmoM3RuL1JW3pL9w&s",
        description:
          "To put their demons to rest once and for all, Josh (Patrick Wilson and a college-aged Dalton (Ty Simpkins) must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door. Content collapsed.",
        trailer: "https://www.youtube.com/watch?v=ujpQGz3MBfU",
      },
      {
        title: "The Exorcist: Believer",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjriWB7_ATQWO8Tqn-boyYVKvVk8Bx7fh_Tw&s",
        description:
          "When single father Victor Fielding's daughter, Angela, and her friend Katherine, show signs of demonic possession, it unleashes a chain of events that forces him to confront the nature of evil. Terrified and desperate, he seeks out Chris MacNeil, the only person alive who's witnessed anything like it before.",
        trailer: "https://www.youtube.com/watch?v=PIxpPMyGcpU",
      },
  
      {
        title: "Thanksgiving",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Z669eevNsyqYNMLaJeCBVIxea1jQGlTHQA&s",
        description:
          "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts -- the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
        trailer: "https://www.youtube.com/watch?v=KbU50SdL8zA",
      },
  
      {
        title: "The Invitation",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFRjkdXWqgD-nUqva1pvfirkjAIIxJTl57-w&s",
        description:
          "Evie's long-lost cousin invites her to a swanky English wedding, where she uncovers a dark and twisted family secret that threatens to upend her life. Evie's long-lost cousin invites her to a swanky English wedding, where she uncovers a dark and twisted family secret that threatens to upend her life.",
        trailer: "https://www.youtube.com/watch?v=5bL1ftuxgOE",
      },
      {
        title: "It",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdbXLtpf0dZyDCeZOKmbygEaiAKEcXManfow&s",
        description:
          "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine tow",
        trailer: "https://www.youtube.com/watch?v=FnCdOQsX5kc",
      },
  
      {
        title: "Knock at the Cabin",
        poster: "https://m.media-amazon.com/images/I/51niuDWj4PL._SL500_.jpg",
        description:
          "While vacationing, a girl and her parents are taken hostage by armed strangers who demand that the family make a choice to avert the apocalypse.",
        trailer: "https://www.youtube.com/watch?v=0wiBHEACNHs",
      },
      {
        title: "Pet Sematary: Bloodlines",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRMMEk_n_t5Hn1Tk-lkJIkshUgOfT3d3152Q&s",
        description:
          "Pet Sematary: Bloodlines is a spine-tingling prequel exploring the origins of how death became different in the small town of Ludlow and why sometimes dead is better.",
        trailer: "https://www.youtube.com/watch?v=1IgQpRyfwbE",
      },
  
      {
        title: "Predator: Prey",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgXw9VGGZpbgkl8mxc5MIQWbKLsiSOne4Cg&s",
        description:
          "A unique little boy with magnificent powers flees his village after feeling the guilt of doing something terrible but beyond his control and is forced to face evil in it's purest form.",
        trailer: "https://www.youtube.com/watch?v=wZ7LytagKlc",
      },
  
      {
        title: "Orphan: First Kill",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0axZJq29_VTJ3RO96wtxj_cuVULiztzjtkQ&s",
        description:
          "After orchestrating a brilliant escape from an Estonian psychiatric facility, Esther travels to America by impersonating the missing daughter of a wealthy family. Yet, an unexpected twist arises that pits her against a mother who will protect her family from the murderous 'child' at any cost.",
        trailer: "https://www.youtube.com/watch?v=_uX6of3vBu0",
      },
      {
        title: "Fall",
        poster:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSF5bpuBcL40CYVZiqaqPOZIDoHWlLuIg9r-PN9WLphR7C_REEHxqsS5PJ64jerXnTOggol",
        description:
          "the film follows two women who climb a 2,000-foot-tall (610 m) television broadcasting tower, before becoming stranded at the top.",
        trailer: "https://www.youtube.com/watch?v=aa5MXOMN1lM",
      },
      {
        title: "Smile",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThWyn-XLI-3VN28P5AfGCx8InFGZPay1srqQ&s",
        description:
          "it stars Sosie Bacon as a therapist who witnesses the bizarre suicide of a patient, then experiences increasingly disturbing and daunting experiences that lead her to believe she is experiencing something supernatural.",
        trailer: "https://www.youtube.com/watch?v=BcDK7lkzzsU",
      },
      {
        title: "Prey for the Devil",
        poster:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRwwZJIKxfrWlpO_bLs0s-wh3ph-ock2bOl2QYcJUEIASJePGCqnEhkDQ-aFajNgkQ2SnQcpg",
        description:
          "Prey for the Devil is a 2022 American supernatural horror film about a nun who trains as an exorcist under the Roman Catholic Church and confronts demonic possession.",
        trailer: "https://www.youtube.com/watch?app=desktop&v=OkEnG6inG4c",
      },
  
      {
        title: "Bodies Bodies Bodies",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBe2fl2nGmtelS04swaco01yK1PfTSwVAq8Q&s",
        description:
          "At a house party, a friend group plays a murder in the dark-style game called Bodies Bodies Bodies, which quickly turns dark",
        trailer: "https://www.youtube.com/watch?v=DMgLMaLlK9k",
      },
  
      {
        title: "Dark Harvest",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2lJUndFX-Vf286Yjhe6E3deOfA5q788Ifhw&s",
        description:
          "The novel is set in an unnamed Midwestern hamlet, where each year, all of the young men take part in a yearly ritual in which they hunt a giant pumpkin-headed creature that arises from the corn, known as both 'Sawtooth Jack 'and the 'October Boy'.",
        trailer: "https://www.youtube.com/watch?v=Pge4NmBzdkE",
      },
  
      {
        title: "The Grudge",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSip2b4xme3kFsiuiPIKwFBfwJKH3FJUBjixQ&s",
        description:
          "The normal façade of a modest house in Tokyo belies the hidden terror within. It is possessed by a violent plague that destroys the lives of everyone who enters. Known as The Grudge, this curse causes its victims to die in the grip of a powerful rage.",
        trailer: "https://www.youtube.com/watch?v=O2NKzO-fxwQ",
      },
  
      {
        title: "The Mortuary Collection",
        poster:
          "https://m.media-amazon.com/images/M/MV5BODNiNDQwYWYtN2NiNC00ZDk2LTk4MTYtNDJmOGQ2ZDMyZmEyXkEyXkFqcGc@._V1_.jpg",
        description:
          "Desperate for work, a young drifter applies for a job at the local mortuary on the outskirts of town. There, she meets Montgomery Dark, an eccentric mortician with more than a few skeletons in his closet.",
        trailer: "https://www.youtube.com/watch?v=iZHg9xcK83s",
      },
  
      {
        title: "Deep Blue Sea 3",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl_WG-a9GM4pQZHmm317XKhZvgo_x4XOKLsg&s",
        description:
          "Studying the effects of climate change off the coast of Mozambique, a marine biologist and her team confront three genetically enhanced bull sharks. ",
        trailer: "https://www.youtube.com/watch?v=ELh_tXjA6HQ",
      },
  
      {
        title: "The Wretched",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-Ta9II7KMN3e9Wb5ceseKz16xWJIdNJ6uA&s",
        description:
          "A defiant teenage boy, struggling with his parents' imminent divorce, faces off with a thousand year-old witch, who is living beneath the skin of and posing as the woman next door.",
        trailer: "https://www.youtube.com/watch?app=desktop&v=S3iMrc5qf4Q",
      },
      {
        title: "The Beach House",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8NehDth6BhY8H8Ixi7WRo2JXLoGB_z6dYtg&s",
        description:
          "Jack Mullen is in law school in New York City when the news comes that his brother, Peter, has drowned in the ocean off East Hampton. Jack knows his brother practically grew up in the water, and that this couldn't be an accident. Someone must have wanted his brother dead.",
        trailer: "https://www.youtube.com/watch?v=GLa9mY4FUBM",
      },
      {
        title: "There's Something Wrong With The Children",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOEXwgNV_SvxOkYfKbWELInLeJkvCZV5soCQ&s",
        description:
          "When Margaret (Wainwright) and Ben (Gilford) take a weekend trip with longtime friends Ellie (Crew) and Thomas (Santos) and their two young children (Guiza and Mattle), Ben begins to suspect something supernatural is occurring when the kids behave strangely after disappearing into the woods overnight.",
        trailer: "https://www.youtube.com/watch?app=desktop&v=mIYDIwkvRoY",
      },
      {
        title: "It's a Wonderful Knife",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNGM1Y2Y3YTMtYjM0ZS00Nzc0LWI2NGEtY2Q4M2ZlOWU1MmRlXkEyXkFqcGc@._V1_.jpg",
        description:
          "A year after saving her town from a psychotic killer on Christmas Eve, Winnie Carruthers' life is less than wonderful -- but when she wishes she'd never been born, she finds herself in a nightmare parallel universe and discovers that without her, things could be much, much worse.",
        trailer: "https://www.youtube.com/watch?v=dKAcRrAUC10",
      },
      {
        title: "The Pope's Exorcist",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZDg3NDA0YjYtYmU4NS00Mzc2LWExMTItN2UzYmM4MDU1MWJmXkEyXkFqcGc@._V1_.jpg",
        description:
          "he Pope's Exorcist follows Amorth as he investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has ..",
        trailer: "https://www.youtube.com/watch?v=YJXqvnT_rsk",
      },
    ],
  
    Musicals: [
      {
        title: "Joker: Folie à Deux",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBQlEkSpR2S6Y5xhBlwszSD3XVzOT9GC18Yg&s",
        description:
          " Arthur Fleck is in custody at Arkham State Hospital awaiting trial for the crimes he committed two years prior. His lawyer, Maryanne Stewart, plans to argue that Arthur suffers from dissociative identity disorder and that his Joker personality is responsible for the crimes.",
        trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
      },
  
      {
        title: " Wicked",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMzE0NjU1NjctNTY5Mi00OGE2LWJkYjktZDI0MTNjN2RhNDMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description:
          "Wicked tells the story of Elphaba, the future Wicked Witch of the West and her relationship with Glinda, the Good Witch of the North.",
        trailer: "https://www.youtube.com/watch?v=6COmYeLsz4c",
      },
  
      {
        title: "Piece by Piece",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-7Vpy8addNSP2A7sY9O9m2_vy1mrhtJMnQ&s",
        description:
          "You might think that Pharrell Williams is too young to have his own documentary biopic. I did too, until I saw PIECE BY PIECE. This is an animated LEGO portrayal of Pharrell's life and career, which is the most Pharrell thing he could do: defying genres as a person and with his music.",
        trailer: "https://www.youtube.com/watch?v=7Bc6trBc1kc",
      },
  
      {
        title: "The Nightmare Before Christmas",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/9/9a/The_nightmare_before_christmas_poster.jpg",
        description:
          " Halloween Town is a fantasy world populated by various monsters and supernatural beings. Jack Skellington, the well-respected Pumpkin King, leads the town in organizing the annual Halloween celebrations. This year, however, Jack grows tired of the same routine and longs for something new.",
        trailer: "https://www.youtube.com/watch?v=wr6N_hZyBCk",
      },
  
      {
        title: "Emilia Pérez",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMGM0OGNhMzktZGFlNC00NDRmLWJmOTgtYmQ0N2JlZGJhMzQyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description:
          "What is Emilia Pérez about? From renegade auteur Jacques Audiard comes Emilia Pérez, an audacious fever dream that defies genres and expectations. Through liberating song and dance and bold visuals, this odyssey follows the journey of four remarkable women in Mexico, each pursuing their own happiness.",
        trailer: "https://www.youtube.com/watch?v=Qlbr7gJgBus",
      },
  
      {
        title: "The Rocky Horror Picture Show",
        poster:
          "https://m.media-amazon.com/images/M/MV5BOTg2YzY5ZGYtNDk1My00N2Q2LWFhN2YtZWU5YTkzODIyZGRmXkEyXkFqcGc@._V1_.jpg",
        description:
          "The definition of kitsch, Rocky Horror is a campy, musical spoof on the haunted-castle horror movie, encompassing a '70s glam-rock world of androgyny with characters that are more than offbeat",
        trailer: "https://www.youtube.com/watch?v=4plqh6obZW4",
      },
  
      {
        title: "Sing",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/b/bb/Sing_%282016_film%29_poster.jpg",
        description:
          "Illumination Entertainment has recently released a family comedy movie called “Sing”. The movie features talking animals living their lives like a human would and when Buster the Koala needs money to save his opera house, he holds a singing competition where the animals compete for the grand prize.",
        trailer: "https://www.youtube.com/watch?v=SH5N44b5Rrw",
      },
  
      {
        title: "Corpse Bride",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Corpse_Bride_film_poster.jpg/220px-Corpse_Bride_film_poster.jpg",
        description:
          "Victor (Johnny Depp) and Victoria's (Emily Watson) families have arranged their marriage. Though they like each other, Victor is nervous about the ceremony. While he's in a forest practicing his lines for the wedding, a tree branch becomes a hand that drags him to the land of the dead.",
        trailer: "https://www.youtube.com/watch?v=G9boDkpEyvc",
      },
  
      {
        title: "Moana 2",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0vHUUiV74eAzBzjLNR-oSxvJCTzvDbon7w&s",
        description:
          "What Is 'Moana 2' About? This time around, Moana embarks on an epic journey in search of discovering if people live beyond the shoes of Motunui. In doing so, she heads to the far seas of Oceania with her friends after she receives an unexpected call from her wayfinding ancestors",
        trailer: "https://www.youtube.com/watch?v=hDZ7y8RP5HE",
      },
  
      {
        title: "Sing 2",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUzjwEL7Yj1Ih2WEOPe3NHs7Uymh417-_BVg&s",
        description:
          "Synopsis. Some time after the events of the first film, Buster Moon is thriving with his new theater. However, he fails to impress talent scout Suki, who tells him he would not make it in Redshore City. Buster, encouraged by Nana Noodleman, reunites the singers who competed in the first film and takes them to the city.",
        trailer:
          "https://www.youtube.com/results?sp=mAEB&search_query=Sing+2+trailer",
      },
  
      {
        title: "Descendants: The Rise of Red",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNGUwYTYxMjItMDZkMi00MTIxLThjYWItOGRkN2YxMWJiY2Q4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description:
          "Follows Red, daughter of the Queen of Hearts, and Chloe, daughter of Cinderella, as they team up to save Auradon by traveling back in time using the White Rabbit's pocket watch, to stop an event that would cause grave consequences.",
        trailer: "https://www.youtube.com/watch?v=9I-YedcoZs0",
      },
  
      {
        title: "The Phantom of the Opera",
        poster:
          "https://cdn.britannica.com/72/197672-050-B0EC3203/Lon-Chaney-Phantom-of-the-Opera-1925.jpg",
        description:
          "Erik: The Phantom of the Opera, a deformed stage magician, skilled opera enthusiast, and ventriloquist, also called 'the Angel of Music' and 'the Opera Ghost'. He voice-tutors Christine Daaé and eventually becomes obsessively infatuated with her.",
        trailer: "https://www.youtube.com/watch?v=ExCFhXqU5XI",
      },
      {
        title: "Grease",
        poster:
          "https://m.media-amazon.com/images/I/91e59+B9mhL._AC_UF1000,1000_QL80_.jpg",
        description:
          "Summary. Teenagers Sandy Olsson (Newton-John) and Danny Zuko (Travolta) meet at the beach in the summer of 1958 and fall in love while Sandy's family is visiting California on vacation from Australia. When they have to part at the end of the summer, Danny assures a fretful Sandy that “it's only the beginning.”",
        trailer: "https://www.youtube.com/watch?v=qDKo8DNpwOw",
      },
  
      {
        title: "The Wizard of Oz",
        poster:
          "https://images-na.ssl-images-amazon.com/images/I/51297L0dvEL.jpg",
        description:
          "Young Dorothy Gale and her dog Toto are swept away by a tornado from their Kansas farm to the magical Land of Oz and embark on a quest with three new friends to see the Wizard, who can return her to her home and fulfill the others' wishes.",
        trailer: "https://www.youtube.com/watch?v=FfpF8UUVTeM",
      },
  
      {
        title: "The Greatest Showman",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMjI1NDYzNzY2Ml5BMl5BanBnXkFtZTgwODQwODczNTM@._V1_.jpg",
        description:
          "Celebrates the birth of show business and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation. In the late 19th century, P. T. Barnum and his troupe perform a show at the circus (The Greatest Show).",
        trailer: "https://www.youtube.com/watch?v=EodWwczRIe4&t=55s",
      },
  
      {
        title: "The Lion King",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/9/9d/Disney_The_Lion_King_2019.jpg",
        description:
          "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery. After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
        trailer: "https://www.youtube.com/watch?v=lFzVJEksoDY",
      },
  
      {
        title: " La La Land",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk2rkqWG4pATQe3UycJsgRNpNwdu3rv8uiCw&s",
        description:
          "When Sebastian, a pianist, and Mia, an actress, follow their passion and achieve success in their respective fields, they find themselves torn between their love for each other and their careers.",
        trailer: "https://www.youtube.com/watch?v=0pdqf4P9MB8",
      },
  
      {
        title: " Sweeney Todd: The Demon Barber of Fleet Street",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTg3NjUxMzM5NV5BMl5BanBnXkFtZTcwMzQ1NjQzMw@@._V1_FMjpg_UX1000_.jpg",
        description:
          "Evil Judge Turpin (Alan Rickman) lusts for the beautiful wife of a London barber (Johnny Depp) and transports him to Australia for a crime he did not commit. Returning after 15 years and calling himself Sweeney Todd, the now-mad man vows revenge, applying his razor to unlucky customers and shuttling the bodies down to Mrs. Lovett (Helena Bonham Carter), who uses them in her meat-pie shop. Though many fall to his blade, he will not be satisfied until he slits Turpin's throat.",
        trailer: "",
      },
  
      {
        title: "Wonka",
        poster: "https://thesunflower.com/wp-content/uploads/2024/01/s-l1200.jpg",
        description:
          "Wonka is a 2023 musical fantasy comedy film directed by Paul King, who co-wrote the screenplay with Simon Farnaby based on a story by King. It tells the origin story of Willy Wonka, a central character in the 1964 novel Charlie and the Chocolate Factory by Roald Dahl, depicting his early days as a chocolatier.",
        trailer: "https://www.youtube.com/watch?v=otNh9bTjXWg",
      },
  
      {
        title: "Labyrinth",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/6/6b/Labyrinth_ver2.jpg",
        description:
          "When little Toby actually disappears, Sarah must follow him into a fantastical world to rescue him from the Goblin King (David Bowie). Guarding his castle is the labyrinth itself, a twisted maze of deception, populated with outrageous characters and unknown dangers.",
        trailer: "https://www.youtube.com/watch?v=O2yd4em1I6M",
      },
  
      {
        title: "Mufasa: The Lion King",
        poster:
          "https://lumiere-a.akamaihd.net/v1/images/p_mufasa_d23_c301cb21.jpeg",
        description:
          "Rafiki Mufasa in Disney Mufasa the lion king. Mufasa explores the early life of Mufasa as he goes from an orphaned cub to his rise as one of the greatest kings of the Pride Lands (and the history of animated cinema)",
        trailer: "https://www.youtube.com/watch?v=o17MF9vnabg",
      },
  
      {
        title: "Snow White",
        poster:
          "https://www.udiscovermusic.com/wp-content/uploads/2022/06/snow-white-soundtrack-285x285.jpg",
        description:
          "When the Magic Mirror proclaims Snow White is the fairest one of all, she must flee into the forest, where she befriends the lovable seven dwarfs -- Doc, Sneezy, Grumpy, Happy, Bashful, Sleepy and Dopey. But when the Queen tricks Snow White with an enchanted apple, only the magic of true love's kiss can save her!",
        trailer: "https://www.youtube.com/watch?v=TbiPcMCz0Ek",
      },
  
      {
        title: "Les Misérables",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNTnkLDLj8GD5hxG4N3ERLjXx6ELbHJZxWA&s",
        description:
          "Set in France during the early nineteenth century, the film tells the story of Jean Valjean who, while being hunted for decades by the ruthless policeman Javert after breaking parole, agrees to care for a factory worker's daughter. The story reaches resolution against the background of the June Rebellion of 1832.",
        trailer: "https://www.youtube.com/watch?v=YmvHzCLP6ug",
      },
  
      {
        title: "Frozen",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/8/89/Frozen_II_%282019_animated_film%29.jpg",
        description:
          "It follows Anna, the princess of Arendelle, who sets off on a journey with the iceman Kristoff, his reindeer Sven, and the snowman Olaf, to find her estranged sister Elsa after she accidentally traps their kingdom in eternal winter with her icy powers.",
        trailer: "https://www.youtube.com/watch?v=TbQm5doF_Uc",
      },
  
      {
        title: "The Sound of Music",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/c/c6/Sound_of_music.jpg",
        description:
          " A young novice is sent by her convent in 1930s Austria to become a governess to the seven children of a widowed naval officer. A young novice is sent by her convent in 1930s Austria to become a governess to the seven children of a widowed naval officer.",
        trailer: "https://www.youtube.com/watch?v=aMMgcAqOYbI",
      },
  
      {
        title: "Mean Girls",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYzlhMTkxZWMtYzQwNi00OWI4LWI2ZGQtOWQ0OGM4NDlkYTdiXkEyXkFqcGc@._V1_.jpg",
        description:
          "Cady is unprepared for her first day of public high school. With the help of Janis (Lizzy Caplan) and Damien (Daniel Franzese), Cady learns about the various cliques. She is warned to avoid the school's most exclusive clique, the Plastics, the reigning trio of girls led by the queen bee Regina George (Rachel McAdams).",
        trailer: "https://www.youtube.com/watch?v=fFtdbEgnUOk",
      },
  
      {
        title: "Charlie and the Chocolate Factory",
        poster: "https://cdn.movieguide.org/wp-content/uploads/2012/08/7780.jpg",
        description:
          "Based on the beloved Roald Dahl tale, this comedic and fantastical film follows young Charlie Bucket (Freddie Highmore) and his Grandpa Joe (David Kelly) as they join a small group of contest winners who get to tour the magical and mysterious factory of eccentric candy maker Willy Wonka (Johnny Depp)",
        trailer: "https://www.youtube.com/watch?v=OFVGCUIXJls",
      },
  
      {
        title: "Aladdin",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/b/bd/Aladdin_%281992_Disney_film%29_poster.jpg",
        description:
          "The film stars Will Smith, Mena Massoud and Naomi Scott with Marwan Kenzari, Navid Negahban, Nasim Pedrad, and Billy Magnussen in supporting roles. The plot follows Aladdin, a street urchin, as he falls in love with Princess Jasmine, befriends a wish-granting genie, and battles the wicked sorcerer Jafar.",
        trailer: "https://www.youtube.com/watch?v=eTjHiQKJUDY",
      },
  
      {
        title: "The Little Mermaid",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGspoopRbSApe_yvyCArq-tXYNc_oWKl4bAw&s",
        description:
          "The plot follows the mermaid princess Ariel, who is fascinated with the human world; after saving Prince Eric from a shipwreck, she makes a deal with the sea witch Ursula to walk on land. Plans for a remake of 1989's The Little Mermaid were confirmed in May 2016.",
        trailer: "https://www.youtube.com/watch?v=ZGZX5-PAwR8",
      },
  
      {
        title: "The Blues Brothers",
        poster:
          "https://m.media-amazon.com/images/I/51Qsr9tfFtL._AC_UF894,1000_QL80_.jpg",
        description:
          "The story is a tale of redemption for paroled convict Jake and his blood brother Elwood, who set out on a mission from God to prevent the foreclosure of the Roman Catholic orphanage in which they were raised.",
        trailer: "https://www.youtube.com/watch?v=2eEpcETVV3s",
      },
  
      {
        title: "Little Shop of Horrors",
        poster:
          "https://m.media-amazon.com/images/I/81VRDVT0JkL._AC_UF894,1000_QL80_.jpg",
        description:
          "A nerdy florist finds his chance for success and romance with the help of a giant man-eating plant who demands to be fed. A nerdy florist finds his chance for success and romance with the help of a giant man-eating plant who demands to be fed.",
        trailer: "https://www.youtube.com/watch?v=z-wMvmAcshM",
      },
  
      {
        title: "The Lion King",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsm17pB9ZGiCRMLw1miBitjMVX8b95dcleYQ&s",
        description:
          "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery. After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
        trailer: "https://www.youtube.com/watch?v=GibiNy4d4gc",
      },
  
      {
        title: "Beauty and the Beast",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdJ5Hj1r5vurx7y_QXlIdeQXtsi-7VGTzJhw&s",
        description:
          " A brave, beautiful, and brilliant young woman is imprisoned by a beast in his castle. Despite her fears, she learns to see beyond the beast's hideous exterior and realize the gentle heart of the true prince within him.",
        trailer: "https://www.youtube.com/watch?v=SqQvZ_VUtg8",
      },
  
      {
        title: "Hamilton",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Hamilton_Disney%2B_poster_2020.jpg/220px-Hamilton_Disney%2B_poster_2020.jpg",
        description:
          " The real life of one of America's foremost founding fathers and first Secretary of the Treasury, Alexander Hamilton. Captured live on Broadway from the Richard Rodgers Theater with the original Broadway cast.",
        trailer: "https://www.youtube.com/watch?v=UkzyM6gEF6I",
      },
  
      {
        title: "Encanto",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm5ayd43hxOPekCd6vTEWzzS8ljgJrj6CQpA&s",
        description:
          "Walt Disney Animation Studios' “Encanto” tells the tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto.",
        trailer: "https://www.youtube.com/watch?v=CaimKeDcudo",
      },
  
      {
        title: "Tangled",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/a/a8/Tangled_poster.jpg",
        description:
          " Rapunzhttps://www.youtube.com/watch?v=kRXmAIHYQR4el, a princess with magical hair that can heal and rejuvenate, has spent her life in a tower. When a thief named Flynn Rider discovers her, she makes a deal with him to guide her out into the world",
        trailer: "",
      },
  
      {
        title: "Willy Wonka & the Chocolate Factory",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/7/7f/WillyWonkaMoviePoster.jpg",
        description:
          "The film tells the story of a poor child named Charlie Bucket (Peter Ostrum) who, upon finding a Golden Ticket in a chocolate bar, wins the chance to visit Willy Wonka's chocolate factory along with four other children from around the world.",
        trailer: "https://www.youtube.com/watch?v=2cBja3AbahY",
      },
  
      {
        title: "Mamma Mia!",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTA2MDU0MjM0MzReQTJeQWpwZ15BbWU3MDYwNzgwNzE@._V1_FMjpg_UX1000_.jpg",
        description:
          "Sophie Sheridan (Amanda Seyfried) is about to marry Sky (Dominic Cooper) on the Greek island of Kalokairi, but she discovers that her mother Donna's (Meryl Streep) ex-lovers Sam (Pierce Brosnan), Harry (Colin Firth), and Bill (Stellan Skarsgård) could all be her father. Without telling her mother, Sophie invites all three men to the wedding, hoping that one of them will walk her down the aisle.",
        trailer: "https://www.youtube.com/watch?v=iCVpJ8x1Tnc",
      },
  
      {
        title: "Mary Poppins",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMjQxNjE3NjYxN15BMl5BanBnXkFtZTgwMTk2NDQ3NjM@._V1_.jpg",
        description:
          "The film, which combines live-action and animation, stars Julie Andrews in her feature film debut as Mary Poppins, who visits a dysfunctional family in London and employs her unique brand of lifestyle to improve the family's dynamic. Dick Van Dyke, David Tomlinson, and Glynis Johns are featured in supporting roles.",
        trailer: "https://www.youtube.com/watch?v=nOfH7uEojKk",
      },
  
      {
        title: "The Prince of Egypt",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjIMqLikScbI84Pf-a3UX1qJzjuH1KNDBhpQ&s",
        description:
          "Moses is born into slavery but raised as the son of an Egyptian pharaoh. He discovers his true origins and sets out to free the Hebrew people from bondage. When his brother Rameses, the new pharaoh, denies his request, a series of plagues strike Egypt. Moses leads the Israelites to freedom by parting the Red Sea and drowning the Egyptian army. God then gives Moses the Ten Commandments",
        trailer: "https://www.youtube.com/watch?v=yWs81poMgiM",
      },
  
      {
        title: "South Pacific",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCIos4xDCKLt8sEMVRzBBAzLqPGVcVEro2A&s",
        description:
          "Nellie Forbush (Mitzi Gaynor) is a young nurse who falls in love with Emile de Becque (Rossano Brazzi), a middle-aged French plantation owner. Nellie struggles to reconcile her prejudices with her love for Emile, especially when she discovers he has fathered mixed-race children. The war threatens to tear Nellie away from Emile, and he agrees to go on a dangerous espionage mission.",
        trailer: "https://www.youtube.com/watch?v=LSuPYEdeLPI",
      },
  
      {
        title: " Hercules",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOhq5gckdtjp2sZzTQFcY-zuT24Ki1mk15jA&s",
        description:
          "Hercules must become a hero to regain his immortality and return to Mount Olympus with his parents. He teams up with Phil, a satyr, and Pegasus, a flying stallion, to battle monsters, Hades, and the Titans.",
        trailer: "https://www.youtube.com/watch?v=ZvtspevZxpg",
      },
  
      {
        title: "Trolls Band Together",
        poster:
          "https://resizing.flixster.com/088CR_IQfjohPPgiKAp-qOoRE7c=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZlYTYwNDI1LTFhYWYtNGQwNS1iMWRlLTFmZjYxMDRjM2Q5MC5qcGc=",
        description:
          "Poppy and Branch are a couple and are enjoying spending more time together. However, Poppy discovers that Branch was once in a boy band with his four brothers, BroZone. When one of his brothers is kidnapped by pop-star villains, Poppy and Branch must reunite the brothers to save him.",
        trailer: "https://www.youtube.com/watch?v=ftUpFjGKuY0",
      },
  
      {
        title: "Moulin Rouge!",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZihELe1g27QkLQxl6g4xK2mvv_IbkCz3xRA&s",
        description:
          "Christian, a penniless poet, falls in love with Satine, the star of the Moulin Rouge, while writing the libretto for a show at the club. The club's patron, a jealous duke, also covets Satine, leading to a dangerous love triangle.",
        trailer: "https://www.youtube.com/watch?v=2PpgPxjzbkA",
      },
  
      {
        title: "Beauty and the Beast",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTax3fAWIfYa_8gNZwbwxOUHzxarTzl_5lDHw&s",
        description:
          "A young prince is cursed to become a beast by an enchantress unless he learns to love and be loved in return. Belle, a young woman from a small French town, is taken prisoner by the Beast in his castle. She befriends the castle's enchanted staff and eventually falls in love with the Beast",
        trailer: "https://www.youtube.com/watch?v=iurbZwxKFUE",
      },
  
      {
        title: "Aladdin",
        poster:
          "https://childrenandmedia.org.au/assets/images/movie-reviews/aladdin_1992.jpg",
        description:
          "Aladdin, a kind-hearted street urchin, falls in love with Princess Jasmine of Agrabah. He finds a magic lamp that contains a powerful genie, who grants wishes. Aladdin uses the genie's magic to make himself a prince so he can marry Jasmine. However, the Sultan's advisor, Jafar, is also after the lamp and plans to use it to take over the kingdom. Aladdin, Jasmine, and the genie must stop Jafar from succeeding",
        trailer: "https://www.youtube.com/watch?v=RU1FatTMZrk",
      },
  
      {
        title: " Mulan",
        poster:
          "https://i0.wp.com/jasonsmovieblog.com/wp-content/uploads/2020/09/mulan-598495111d425.jpg?resize=361%2C514&ssl=1",
        description:
          "Cast. Yifei Liu as Mulan, the eldest daughter of Hua Zhou, who defies both tradition and the law by disguising herself as a man by the name of Hua Jun, in order to enlist herself in the Imperial Army in place of her ailing father.",
        trailer: "https://www.youtube.com/watch?v=HKH7_n425Ss",
      },
  
      {
        title: "Trolls",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNkX3_bkxs43PjbOpzrwUSoaIMhGu3AsKR4Q&s",
        description:
          "After the Bergens invade Troll Village, Poppy, the happiest Troll ever born, and the curmudgeonly Branch set off on a journey to rescue her friends. When their village is invaded by the grumpy Bergens, two mismatched friends must work together in perfect harmony to save the day.",
        trailer: "https://www.youtube.com/watch?v=xyjm5VQ11TQ",
      },
  
      {
        title: "Wish",
        poster:
          "https://themoviespoiler.com/wp-content/uploads/2023/11/wish_ver7.jpg",
        description:
          "A young girl named Asha wishes on a star and gets a more direct answer than she bargained for when a trouble-making star comes down from the sky to join her. Be careful what you wish for.",
        trailer: "https://www.youtube.com/watch?v=oyRxxpD3yNw",
      },
    ],
  
    Mystery: [
      {
        title: "Interstellar",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJHnx-WNPvrs5Ht6p3ZXI2_QY4eYWWikJKyg&s",
        description:
          "Interstellar is a 2014 science fiction film about a group of astronauts who travel through a wormhole to find a new home for humanity",
        trailer: "https://www.youtube.com/watch?v=2LqzF5WauAw",
      },
  
      {
        title: "Inception",
        poster:
          "https://m.media-amazon.com/images/I/71lbkL3zKvL._AC_UF894,1000_QL80_.jpg",
        description:
          "Inception is a 2010 science fiction action film about a thief who can enter people's dreams to steal secrets and plant idea",
        trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
      },
  
      {
        title: "The Matrix",
        poster:
          "https://i5.walmartimages.com/seo/The-Matrix-Resurrections-Movie-Poster-Glossy-Print-Photo-Wall-Art-Keanu-Reeves-Carrie-Anne-Moss-Size-16x20-Inches_5655b719-69b7-414d-9987-8b14b2f21468.6e67fbfd96d85aa937968cadf707f987.jpeg",
        description:
          "The Matrix is a 1999 science fiction action film about a computer hacker who discovers that his life is a lie:",
        trailer: "https://www.youtube.com/watch?v=9ix7TUGVYIo",
      },
  
      {
        title: "Blade Runner 2049",
        poster:
          "https://m.media-amazon.com/images/I/71Rdbo9KB6L._AC_UF894,1000_QL80_.jpg",
        description:
          "Blade Runner 2049 is a 2017 science fiction film that takes place in 2049, 30 years after the original Blade Runner",
        trailer: "https://www.youtube.com/watch?v=dZOaI_Fn5o4",
      },
  
      {
        title: "Smile 2",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9jOZqWp9XGgj_WXbaLn8BqEjIIBAtHzX7Ug&s",
        description:
          "Smile 2 is the sequel to the 2022 film Smile which starred Sosie Bacon as a psychiatrist named Rose Cotter who finds herself the victim of a curse after witnessing a patient die by suicide",
        trailer: "https://www.youtube.com/watch?v=FU_bAopCcSE",
      },
  
      {
        title: "Caddo Lake",
        poster:
          "https://resizing.flixster.com/6IxfFrHkWhtiHn8agY1iTbiE8rE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Y3NDAwNWVmLTBjYjQtNGNjNS04ZDUyLWY4NGU1NWM2ZjZlNC5qcGc=",
        description:
          "Caddo Lake is a 2024 psychological thriller film about a family's past and the disappearance of a young girl",
        trailer: "https://www.youtube.com/watch?v=Rrx_lZxzjbQ",
      },
  
      {
        title: "Woman of the Hour",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYzliNzRjNDMtYTFmOS00NDQxLWJlOWMtZTViNjcyMzc0NzQwXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
        description:
          "Woman of the Hour is a 2023 American crime thriller film directed by Anna Kendrick in her directorial debut and written by Ian McDonald. It is based on the true story of serial killer Rodney Alcala and his 1978 appearance on the television show The Dating Game in the midst of his murder spree",
        trailer: "https://www.youtube.com/watch?v=ODUdpwddTQk",
      },
  
      {
        title: "It's What's Inside",
        poster:
          "https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/8b/763e908f61236a5fb2c7d0a41ea59344_300x442.jpg?t=1706751783",
        description: "No body is leaving the same as they came",
        trailer: "https://www.youtube.com/watch?v=RJBNi0CjX5I",
      },
  
      {
        title: "Smile",
        poster:
          "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2022/09/SMILE.jpeg?ssl=1",
        description:
          "A follow-up to Parker's short film Laura Hasn't Slept (2020), it stars Sosie Bacon as a therapist who witnesses the bizarre suicide of a patient, then experiences increasingly disturbing and daunting experiences that lead her to believe she is experiencing something supernatural",
        trailer: "https://www.youtube.com/watch?v=0HY6QFlBzUY",
      },
  
      {
        title: "The Batman",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_.jpg",
        description:
          "The film sees Batman,in his second year fighting crime in Gotham City, uncover corruption with ties to his own family while pursuing the Riddler (Dano), a mysterious serial killer targeting the city's elite. Development began after Ben Affleck was cast as Batman in the DC Extended Universe (DCEU) in 2013.",
        trailer: "https://www.youtube.com/watch?v=NLOp_6uPccQ",
      },
  
      {
        title: "Blink Twice",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBi-9LBvch7IbwBBRQUSZSyGHU0OzEVSX7yg&s",
        description:
          "Blink Twice is a 2024 psychological thriller film about a group of people invited to a billionaire tech mogul's private island where strange things happen to the female attendees",
        trailer: "https://www.youtube.com/watch?v=608Al4ejTdY",
      },
  
      {
        title: "Killer Heat",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYmI2MzhmZmEtZjMyZC00MzJiLTlkZTEtNGNhZDEwYWVmMWZhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description:
          "Killer Heat is a 2024 American crime mystery drama film about a private investigator hired to solve a suspicious death on the Greek island of Crete",
        trailer: "https://www.youtube.com/watch?v=ADGSIaE6nzE",
      },
  
      {
        title: "Scream",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJO_MpnPJf3poaBVWTRMRKvfZNcB_GDMpzlA&s",
        description:
          "The 1996 movie Scream is about a masked killer who terrorizes a group of high school students in the fictional California town of Woodsboro",
        trailer: "https://www.youtube.com/watch?v=RJkcvxy3d48",
      },
  
      {
        title: "Trap",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLmGCSVNoLpsESkc8xgaTuZbzzYHrZ6RBl_Q&s",
        description:
          "The 1996 movie Scream is about a masked killer who terrorizes a group of high school students in the fictional California town of Woodsboro",
        trailer: "https://www.youtube.com/watch?v=PK1ZRnHde4s",
      },
  
      {
        title: "The Platform",
        poster:
          "https://cdn.traileraddict.com/content/netflix/the-platform-poster.jpg",
        description:
          "Summaries. In a prison where inmates are fed on a descending platform, those on the upper levels take more than their fair share while those below are left to starve on scraps and one man decides to change the system",
        trailer: "https://www.youtube.com/watch?v=RlfooqeZcdY",
      },
  
      {
        title: "Scream 2",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIFqQyWdE8Uc9kbCojXIV6r4d7-gOKOAQcsw&s",
        description:
          "Scream 2 is a 1997 slasher film about a copycat killer who begins a new string of murders two years after the events of the first Scream movie",
        trailer: "https://www.youtube.com/watch?v=C-j2TLBmTBY",
      },
  
      {
        title: "Nosferatu",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUTClXwKvyeorvw4qHLVWcAMD6O7zgdroDg&s",
        description:
          "There are multiple matches for Nosferatu, including a 1922 German Expressionist film and a 2024 gothic film",
        trailer: "https://www.youtube.com/watch?v=b59rxDB_JRg",
      },
  
      {
        title: "Carry On",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNDVmOGRiMjMtZWRhOS00Y2Y4LWI2MDktYzk4MDk5MjQ2YWQ3XkEyXkFqcGc@._V1_.jpg",
        description:
          "Carry-On is an upcoming American action thriller film about a young TSA agent who is blackmailed into allowing a dangerous package onto a Christmas Eve flight",
        trailer: "https://www.youtube.com/watch?v=aYOW0z43hyQ",
      },
  
      {
        title: "Speak No Evil",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMWI2OWFjNjgtOTQ2Zi00MjlmLTg2MGYtNmE4MjMyZjIzMDA0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description:
          "Speak No Evil is a 2024 American psychological horror thriller film about an American family who are invited to stay at a remote farmhouse for the weekend, where their hosts test the limits of their guests. The film stars ",
        trailer: "https://www.youtube.com/watch?v=ZdElmLKTqFY",
      },
  
      {
        title: " Scream VI",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmxx3n58qH-xpSJKRevZX0Dx0Jm6MH39zjA&s",
        description:
          "Scream VI is a 2023 horror, mystery, and thriller movie about a group of friends who move to New York City after surviving the Ghostface killings and then experience more deadly attacks",
        trailer: "https://www.youtube.com/watch?v=1Ie2qmAOc6Q",
      },
  
      {
        title: "Ready or Not",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNjAwYzllNzItMjA1Yi00YjIwLWE0YWMtZjM1MzJlYTY2ZjRlXkEyXkFqcGc@._V1_.jpg",
        description:
          "Ready or Not is a 2019 darkly comedic thriller about a bride who discovers that her wealthy in-laws intend to kill her",
        trailer: "https://www.youtube.com/watch?v=39BnfiTeTac",
      },
  
      {
        title: "Sleepy Hollow",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpa0wGvyjC39IpDm0F9L6dGSmvD_QpRm5KuA&s",
        description:
          "Sleepy Hollow is a 1999 fantasy horror mystery film about a series of murders in the town of Sleepy Hollow that are attributed to the Headless Horseman, a legendary apparition",
        trailer: "https://www.youtube.com/watch?v=6RsKwn_Je1k",
      },
  
      {
        title: "Red One",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOjKJuXB9HKlRInr12VcjJ6BWM3qBxT5_1Ag&s",
        description:
          "Red One is an action-adventure comedy film about the North Pole's Head of Security (Dwayne Johnson) and a bounty hunter (Chris Evans) who team up to save Christmas after Santa Claus is kidnapped",
        trailer: "https://www.youtube.com/watch?v=7l3hfD74X-4",
      },
  
      {
        title: "The Thing",
        poster:
          "https://www.originalfilmart.com/cdn/shop/products/the_thing_1982_linen_original_film_art_f_2000x.webp?v=1661380634",
        description:
          "The Thing is a science fiction horror movie about a group of American researchers in Antarctica who encounter an alien life-form that can take the shape of its victims",
        trailer: "https://www.youtube.com/watch?v=5ftmr17M-a4",
      },
  
      {
        title: "Barbarian",
        poster:
          "https://m.media-amazon.com/images/I/61ys+DisxDL._AC_UF1000,1000_QL80_.jpg",
        description:
          "Barbarian is a 2022 American horror thriller film about a young woman who discovers that her Airbnb rental in Detroit has been double-booked and that there is more to fear than just an unexpected house guest",
        trailer: "https://www.youtube.com/watch?v=GdYjwYLMO8s",
      },
  
      {
        title: "Midsommar",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCQ59wu3f5xutzXZjFBOHExC07d08xJD7-w&s",
        description:
          "Midsommar is a 2019 horror, mystery, and drama film about a group of American graduate students who attend a midsummer festival in a remote Swedish village that turns violent and bizarre",
        trailer: "https://www.imdb.com/video/vi1256832025/",
      },
  
      {
        title: "Babygirl",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQhNLLiVHHa4IzNG4cpNV9kVFLmmzzMxmqA&s",
        description:
          "Babygirl is a 2024 erotic thriller film about a high-powered CEO who has an affair with her much younger intern",
        trailer: "https://www.youtube.com/watch?v=-8Sx6U6Ou0Q",
      },
  
      {
        title: "The Watchers",
        poster:
          "https://m.media-amazon.com/images/M/MV5BN2I3MjIzYzMtNDkxNS00ZDIzLWEzZjktNDJlZDZlOGZlMTMxXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
        description:
          "The Watchers is a 2024 American horror fantasy film about a young artist who becomes trapped in a forest in Ireland and stalked by mysterious creatures",
        trailer: "https://www.youtube.com/watch?v=HnyE-1D0Tk0",
      },
  
      {
        title: "Haunted Mansion",
        poster:
          "https://lh4.googleusercontent.com/proxy/0ml9ynalAzqmYZG-O29Jd-UTKBqAkyEhHSPc60uqxV0S0uvxyRPFS3DuKHnIZRqjNO9vu_nBuPi4yocidz1_3j_F_AAxnq3VdnFO4l-FeyXF",
        description:
          "There are multiple matches for Haunted Mansion movie, including a 2023 Disney film and a previous movie starring Eddie Murphy",
        trailer: "https://www.youtube.com/watch?v=AjLKTz81bj8",
      },
  
      {
        title: "Hereditary",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkoYajcG7noTYhsDHDeyBZLTkuDDBsBz1EQA&s",
        description:
          "Hereditary is a 2018 American psychological horror film about a family that is haunted by sinister occurrences after the death of their grandmother",
        trailer: "https://www.youtube.com/watch?v=YHxcDbai7aU",
      },
  
      {
        title: "The Witch",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1kahcAqgZA1_Y5M8MRKFgu6VsZVwo25gWbg&s",
        description:
          "The Witch is a 2015 horror film about a Puritan family in 1630s New England who are tormented by witchcraft, black magic, and possession",
        trailer: "https://www.youtube.com/watch?v=gud8viI-P7Q",
      },
  
      {
        title: "Sinister",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcVN0SZ-1vQ9K7evVJ7vW_1azLzPBYOjxwQ&s",
        description:
          "Sinister is a 2012 horror, mystery, and thriller film about a true-crime writer who discovers a box of Super 8 home movies in his new home that reveal a serial killer's connection to a murder case he's researching",
        trailer: "https://www.youtube.com/watch?v=_kbQAJR9YWQ",
      },
  
      {
        title: "Get Out",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_SDEQ_tsIN2HT-kswLKeGNoOm_29D_L0Cw&s",
        description:
          "In the film a young Black man, Chris Washington (Daniel Kaluuya), joins his white girlfriend, Rose Armitage (Allison Williams), on a weekend trip to her family's estate in upstate New York so that he can meet her parents for the first time.",
        trailer: "https://www.youtube.com/watch?v=DzfpyUB60YY",
      },
  
      {
        title: "Us",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQphSNpqdBQ-6-NVtPXrCs83zAs9dFtkWyoQQ&s",
        description:
          "Us is a 2019 psychological horror film about a family who are attacked by their own doppelgängers",
        trailer: "https://www.youtube.com/watch?v=1tzFRIQfwXg",
      },
  
      {
        title: "The Conjuring",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo1w35AsAv2sISXApGQxf8hD_gO4d_A_ZC3Q&s",
        description:
          "The Conjuring is a 2013 American horror film about a family who experience paranormal activity in their new home",
        trailer: "https://www.youtube.com/watch?v=k10ETZ41q5o",
      },
  
      {
        title: "Leave the World Behind",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVWbATi9zHNl6V5DdyP5vUyHaKa2gtJfSGA&s",
        description:
          "Leave the World Behind is a 2023 apocalyptic thriller film about two families whose vacation is disrupted by a cyberattack and the arrival of two strangers",
        trailer: "https://www.youtube.com/watch?v=xM4ILvKeTxs",
      },
  
      {
        title: " Scooby-Doo",
        poster: "https://m.media-amazon.com/images/I/71f4IkATvLL.jpg",
        description:
          "The 2002 movie Scooby-Doo is about the Mystery Inc. gang coming back together to solve a mystery at a haunted amusement park",
        trailer: "https://www.youtube.com/watch?v=o3dbeI0BU1k",
      },
  
      {
        title: "Cuckoo",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPbMy4zdfESraG6PD4q12WyaRND7tk64wBtw&s",
        description:
          "Cuckoo is a 2024 horror film about a teenager who moves to a German resort with her father and stepfamily and discovers a shocking secret",
        trailer: "https://www.youtube.com/watch?v=Ti6_iX7JRkk",
      },
  
      {
        title: "The Birds",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQNr8d4fojGFcdKduYhfCBdJ3PmEYcxC2yaQ&s",
        description:
          "The Birds is a 1963 Alfred Hitchcock-directed horror-thriller film about a mysterious bird attack on the town of Bodega Bay, California",
        trailer: "https://www.youtube.com/watch?v=0fJh2gIBOto",
      },
  
      {
        title: "Don't Worry Darling",
        poster:
          "https://m.media-amazon.com/images/M/MV5BY2I0ZDExM2EtZTQ4OC00NGQ0LWIzYjktYWE4MDMxZDZlY2MwXkEyXkFqcGc@._V1_.jpg",
        description:
          "Don't Worry Darling is a 2022 American psychological thriller film about a housewife who discovers a sinister secret in her seemingly perfect company town",
        trailer: "https://www.youtube.com/watch?v=1KNXBr-1Wm4",
      },
  
      {
        title: "Blade Runner 2049",
        poster: "https://m.media-amazon.com/images/I/71NPmBOdq7L.jpg",
        description:
          "Blade Runner 2049 is a 2017 science fiction film that takes place in 2049, 30 years after the events of the original Blade Runner (1982)",
        trailer: "https://www.youtube.com/watch?v=dZOaI_Fn5o4",
      },
    ],
  
    Romance: [
      {
        title: "Lonely Planet",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOh8wRc4auMF5HaIntYqUZJUJeJZoRkM75cQ&s",
        description:
          "A reclusive novelist arrives at a prestigious writer's retreat in Morocco, hoping the remote setting will unlock her writer's block. While there, she meets a young man -- what starts as an acquaintanceship evolves into an intoxicating, life-altering love affair.",
        trailer: "https://www.youtube.com/watch?v=lTu7j2GOGwQ",
      },
  
      {
        title: "Anora",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYThiN2M0NTItODRmNC00NDhlLWFiYTgtMWM2YTEyYzI3ZTY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description:
          "“Anora” is largely set in New York City, particularly in Brighton Beach, Brooklyn, where the movie's title character (Mikey Madison), who calls herself Ani, lives. She's a tough-talking and spirited twenty-three-year-old sex worker at a Manhattan club.",
        trailer: "https://www.youtube.com/watch?v=08sR1MY2wpU",
      },
      {
        title: "We Live in Time",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/3/32/We_live_in_time_poster.jpg",
        description:
          "Told mostly nonlinearly, it follows a couple, Tobias (Garfield) and Almut (Pugh), as they grapple with the struggles life throws at their relationship, including complications around Almut's pregnancy and her battle with cancer while trying to maintain her job as an esteemed chef.",
        trailer: "https://www.youtube.com/watch?v=MH02yagHaNw",
      },
      {
        title: "Wicked",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaynaS5qI6kh39Vc256d9tQIDYuQkVuFzTmQ&s",
        description:
          "The musical is told from the perspective of two witches, Elphaba and Galinda, before and after Dorothy's arrival in Oz. The story explores the complex friendship between Elphaba (who becomes the Wicked Witch of the West) and Galinda (who becomes Glinda the Good).",
        trailer: "https://www.youtube.com/watch?v=pqi45Qhq3CI",
      },
  
      {
        title: "Girl Haunts Boy",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKKbG4s-mDwDQF_XKAO9oqEEqfMSWaYiDPA&s",
        description:
          "Cole, a teen grieving the loss of his dad, forms an unlikely bond with Bea, a ghost. As they navigate life and death, they must break an ancient curse.",
        trailer: "https://www.youtube.com/watch?v=QY0OcNIleNM",
      },
  
      {
        title: " It Ends with Us",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/1/1b/It_Ends_with_Us_2024_film_poster.jpg",
        description:
          "Adapted from the Colleen Hoover novel, Lily overcomes a traumatic childhood to embark on a new life. A chance meeting with a neurosurgeon sparks a connection but Lily begins to see sides of him that remind her of her parents' relationship.",
        trailer: "https://www.youtube.com/watch?v=r-GQvSc5ZGw",
      },
  
      {
        title: "Challengers",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZTcyZGIyODctZGJhOS00MWUyLWI5ZWEtMjg4YzhkMDczMDBhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description:
          "Tashi, a tennis player turned coach, has transformed her husband from a mediocre player into a world-famous grand slam champion. To jolt him out of his recent losing streak, she makes him play a challenger event -- close to the lowest level of tournament on the pro tour. Tensions soon run high when he finds himself standing across the net from the once-promising, now burnt-out Patrick, his former best friend and Tashi's former boyfriend.",
        trailer: "https://www.youtube.com/watch?v=VobTTbg-te0",
      },
  
      {
        title: "Killer Heat",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYmI2MzhmZmEtZjMyZC00MzJiLTlkZTEtNGNhZDEwYWVmMWZhXkEyXkFqcGc@._V1_.jpg",
        description:
          "On the sunny island of Crete, twin brothers (Madden) are caught in a violent love triangle. A damaged detective, Nick Bali, also known as The Jealousy Man (Gordon-Levitt), is brought in to investigate the case. The film was released by Amazon Prime Video on September 26, 2024.",
        trailer: "https://www.youtube.com/watch?v=apldRaQlL9A",
      },
  
      {
        title: "The Fall Guy",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/1/1f/The_Fall_Guy_%282024%29_poster.jpg",
        description:
          "The plot follows a stuntman (Ryan Gosling) working on his ex-girlfriend's (Emily Blunt) directorial debut action film, only to find himself involved in a conspiracy surrounding the film's lead actor (Aaron Taylor-Johnson). The cast also features Hannah Waddingham, Teresa Palmer, Stephanie Hsu, and Winston Duke.",
        trailer: "https://www.youtube.com/watch?v=j7jPnwVGdZ8&t=29s",
      },
  
      {
        title: " Love",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/5/5f/Love_%282015_film%29.png",
        description:
          "Murphy is an American living in Paris who enters a highly sexually and emotionally charged relationship with Electra. Unaware of the effect it will have on their relationship, they invite their pretty neighbor into their bed.",
        trailer: "https://www.youtube.com/watch?v=frYVyUDIwiE",
      },
  
      {
        title: "Practical Magic",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/6/68/Practical_magicposter.jpg",
        description:
          "Sally (Sandra Bullock) and Gillian Owens (Nicole Kidman), born into a magical family, have mostly avoided witchcraft themselves. But when Gillian's vicious boyfriend, Jimmy Angelov (Goran Visnjic), dies unexpectedly, the Owens sisters give themselves a crash course in hard magic.",
        trailer: "https://www.youtube.com/watch?v=R7uixLkpjPs",
      },
  
      {
        title: "Poor Things",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/f/f3/Poor_Things_poster.jpg",
        description:
          "A co-production between Ireland, the United Kingdom, and the United States, the film stars Emma Stone, Mark Ruffalo, Willem Dafoe, Ramy Youssef, Christopher Abbott, and Jerrod Carmichael. Stone plays Bella Baxter, a young woman in Victorian London who has been brought back to life via brain transplant.",
        trailer: "https://www.youtube.com/watch?v=RlbR5N6veqw",
      },
  
      {
        title: "Anyone But You",
        poster:
          "https://themoviespoiler.com/wp-content/uploads/2023/12/anyone_but_you_ver2.jpg",
        description:
          "In the edgy comedy Anyone But You, Bea (Sydney Sweeney) and Ben (Glen Powell) look like the perfect couple, but after an amazing first date something happens that turns their fiery hot attraction ice cold -- until they find themselves unexpectedly thrust together at a destination wedding in Australia.",
        trailer: "https://www.youtube.com/watch?v=UtjH6Sk7Gxs",
      },
  
      {
        title: "Bram Stoker's Dracula",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7LYkPjUgbJm7jicAJGXgQHwjskP5iBo2s7A&s",
        description:
          "In Bram Stoker's Dracula, Count Dracula is a tall, thin, pale, white-haired man with a long mustache. He also has hairy palms and long, sharp fingernails to match his pointed ears and long, sharp, white teeth. Although he appears well-mannered, there is something about him that inspires fear in Jonathan.",
        trailer: "https://www.youtube.com/watch?v=CjgwUB1CXek",
      },
  
      {
        title: "Titanic",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOVnbXObUXpT67UzZJ5zwS-0fuDV13obkEA&s",
        description:
          "It was the largest and most luxurious passenger ship of its time and was reported to be unsinkable. Titanic, launched on May 31, 1911, and set sail on its maiden voyage from Southampton on April 10, 1912, with 2,240 passengers and crew on board.",
        trailer: "https://www.youtube.com/watch?v=kVrqfYjkTdQ",
      },
  
      {
        title: "Edward Scissorhands",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyWtzL5ZYuhlxTC7NECDj8gdj47aOpBAOaA&s",
        description:
          "The solitary life of an artificial man - who was incompletely constructed and has scissors for hands - is upended when he is taken in by a suburban family. The solitary life of an artificial man - who was incompletely constructed and has scissors for hands - is upended when he is taken in by a suburban family.",
        trailer: "https://www.youtube.com/watch?v=TBHIO60whNw",
      },
  
      {
        title: "Hit Man",
        poster:
          "https://themoviespoiler.com/wp-content/uploads/2024/05/hit_man_ver3.jpg",
        description:
          "A hitman is someone who gets paid to kill a specific person. A member of a criminal organization, like the mafia, might be arrested after hiring a hitman to kill an enemy. If a person's job involves professional murder for pay, that person is a hitman.",
        trailer: "https://www.youtube.com/watch?v=0g4cJ4NE8HA",
      },
  
      {
        title: "The Crow",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMjEyOWJjMWQtZTY4Yi00ZjYyLWJhNDktZmRkNzEwMjlhZjQ3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description:
          "They usually feed on the ground and eat almost anything—typically earthworms, insects and other small animals, seeds, and fruit; also garbage, carrion, and chicks they rob from nests. Their flight style is unique, a patient, methodical flapping that is rarely broken up with glides.",
        trailer: "https://www.youtube.com/watch?v=djSKp_pwmOA",
      },
  
      {
        title: "Corpse Bride",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwNK5lqhiE6jSoI0pYZAYOB8QlhvPR3viCqw&s",
        description:
          " When a shy groom practices his wedding vows in the inadvertent presence of a deceased young woman, she rises from the grave assuming he has married her.",
        trailer: "https://www.youtube.com/watch?v=QgId5sV7QGA",
      },
  
      {
        title: "Forrest Gump",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfV6i1h0BtMqU3dRJCNTPTGAAfhjoP5ZfCuw&s",
        description:
          "Tom Hanks as Forrest Gump: At an early age, Forrest is deemed to have a below-average IQ of 75. He has an endearing character and shows devotion to his loved ones and duties, character traits that bring him into many life-changing situations",
        trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg",
      },
  
      {
        title: "Queer",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSArcnSkNbZK73LYPmUH9Y6FFsx1kQclOABew&s",
        description:
          "Queer is a word that describes sexual and gender identities other than straight and cisgender. Lesbian, gay, bisexual, and transgender people may all identify with the word queer.",
        trailer: "https://www.youtube.com/watch?v=teD48Kt6FMk",
      },
  
      {
        title: "Eternal Sunshine of the Spotless Mind",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYzE2MzI2NTUtMmFlNS00ZTY5LTkxOTgtODVmZDc4ODhkMWM0XkEyXkFqcGc@._V1_.jpg",
        description:
          "After a painful breakup, Clementine (Kate Winslet) undergoes a procedure to erase memories of her former boyfriend Joel (Jim Carrey) from her mind. When Joel discovers that Clementine is going to extremes to forget their relationship, he undergoes the same procedure and slowly begins to forget the woman that he loved.",
        trailer: "https://www.youtube.com/watch?v=07-QBnEkgXU",
      },
  
      {
        title: "Fifty Shades of Grey",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/7/73/Fifty_Shades_of_Grey_poster.jpg",
        description:
          "When literature student Anastasia Steele goes to interview young entrepreneur Christian Grey, she encounters a man who is beautiful, brilliant, and intimidating. The unworldly, innocent Ana is startled to realize she wants this man and, despite his enigmatic reserve, finds she is desperate to get close to him.",
        trailer: "https://www.youtube.com/watch?v=SfZWFDs0LxA",
      },
  
      {
        title: "Twilight",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/b/b6/Twilight_%282008_film%29_poster.jpg",
        description:
          "It is the first book in the Twilight series, and introduces seventeen-year-old Isabella Bella Swan, who moves from Phoenix, Arizona, to Forks, Washington. She is endangered after falling in love with Edward Cullen, a 103-year-old vampire frozen in his 17-year-old body.",
        trailer: "https://www.youtube.com/watch?v=QDRLSqm_WVg",
      },
  
      {
        title: "The Birds",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQNr8d4fojGFcdKduYhfCBdJ3PmEYcxC2yaQ&s",
        description:
          "Loosely based on the 1952 short story of the same name by Daphne du Maurier, it focuses on a series of sudden and unexplained violent bird attacks on the people of Bodega Bay, California, over the course of a few days.",
        trailer: "https://www.youtube.com/watch?v=0fJh2gIBOto",
      },
  
      {
        title: "The Notebook",
        poster:
          "https://m.media-amazon.com/images/M/MV5BN2FjMjM0ODAtNjMwZC00MWJlLWE3ZWUtNmZiNDljYTAyOTcwXkEyXkFqcGc@._V1_.jpg",
        description:
          "The film stars Ryan Gosling and Rachel McAdams as a young couple who fall in love in the 1940s. Their story is read from a notebook in the present day by an elderly man, telling the tale to a fellow nursing home resident.",
        trailer: "https://www.youtube.com/watch?v=BjJcYdEOI0k",
      },
  
      {
        title: "The Count of Monte-Cristo",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYjQ3NWUxNDMtNGUyYS00M2E4LThmYjgtZmQ3YTU4ZWZlNTk0XkEyXkFqcGc@._V1_.jpg",
        description:
          "A young man, falsely imprisoned by his jealous friend, escapes and uses a hidden treasure to exact his revenge. A young man, falsely imprisoned by his jealous friend, escapes and uses a hidden treasure to exact his revenge.",
        trailer: "https://www.youtube.com/watch?v=UJPyF8i0y1U",
      },
  
      {
        title: "The Voyeurs",
        poster:
          "https://resizing.flixster.com/XRhY0z6KR1mnkQQhnNNllEM3cGU=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20530045_v_v13_aa.jpg",
        description:
          "A young couple, Pippa and Thomas, move into their first apartment together in Montreal. They soon realize that their windows look directly into the apartment across the street, where a man with a professional studio is taking photographs of a woman. Pippa and Thomas watch as the couple have sex. They jokingly give their neighbors pseudo names, Margot and Brent.",
        trailer: "https://www.youtube.com/watch?v=_fiCdELSwwI&t=13s",
      },
  
      {
        title: "365 Days",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNTc0MTE1NWItMTZjOC00N2Q2LWFhMTAtNmZiNGZlODE1OWM3XkEyXkFqcGc@._V1_.jpg",
        description:
          "A woman falls victim to a dominant mafia boss, who imprisons her and gives her one year to fall in love with him. Watch all you want. This erotic drama is based on the bestselling novel 365 dni by author Blanka Lipinska",
        trailer: "https://www.youtube.com/watch?v=pyM3z73oMAk&t=35s",
      },
  
      {
        title: "The Dreamers",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiVM9_14qmCyKFFcRmRWC1pdsYI6w0FIQ1bg&s",
        description:
          "A young American studying in Paris in 1968 strikes up a friendship with a French brother and sister. Set against the background of the '68 Paris student riots. A young American studying in Paris in 1968 strikes up a friendship with a French brother and sister.",
        trailer: "https://www.youtube.com/watch?v=cHaoi6CPDg8",
      },
  
      {
        title: "Killers of the Flower Moon",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZWY5ZDVjNTUtODI5Yy00MjFhLWEyM2EtYzZjM2VjZTI0MTBjXkEyXkFqcGc@._V1_.jpg",
        description:
          "Real love crosses paths with unspeakable betrayal as Mollie Burkhart, a member of the Osage Nation, tries to save her community from a spree of murders fueled by oil and greed. ",
        trailer: "https://www.youtube.com/watch?v=EP34Yoxs3FQ",
      },
  
      {
        title: "10 Things I Hate About You",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/9/95/10_Things_I_Hate_About_You_film.jpg",
        description:
          "The film follows new student Cameron James (Gordon-Levitt) who is smitten with Bianca Stratford (Oleynik) and attempts to get bad boy Patrick Verona (Ledger) to date her antisocial sister Kat (Stiles) in order to get around her father's strict rules on dating",
        trailer: "https://www.youtube.com/watch?v=yEmcEuS6xm4",
      },
  
      {
        title: "Lisa Frankenstein",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/a/a0/Lisa-frankenstein.jpeg",
        description:
          "The film stars Kathryn Newton, Cole Sprouse, Liza Soberano, Henry Eikenberry, Joe Chrest, and Carla Gugino. The plot follows a misunderstood teenage girl, Lisa, who meets and develops a relationship with a reanimated Victorian-era corpse.",
        trailer: "https://www.youtube.com/watch?v=POOeA3zCuUY",
      },
  
      {
        title: "Good Will Hunting",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/5/52/Good_Will_Hunting.png",
        description:
          "Will Hunting (Matt Damon) has a genius-level IQ but chooses to work as a janitor at MIT. When he solves a difficult graduate-level math problem, his talents are discovered by Professor Gerald Lambeau (Stellan Skarsgard), who decides to help the misguided youth reach his potential.",
        trailer: "https://youtube.com/watch?v=ReIJ1lbL-Q8",
      },
  
      {
        title: " Virgin Territory",
        poster:
          "https://m.media-amazon.com/images/I/51ob7JQssGL._AC_UF1000,1000_QL80_.jpg",
        description:
          "In the 14th century, Italy is the grip of the Black Death. A group of young Florentines (Hayden Christensen, Mischa Barton) seeks refuge in the countryside while the plague ravages the city. To pass the time, the refugees regale one another with fantastic tales of romance and adventure.",
        trailer: "https://www.youtube.com/watch?v=xd6SQZd6ogM",
      },
  
      {
        title: "The Princess Bride",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6L_Ef8ylHeZQEq5EicQpmNFYhhOVwMtML1g&s",
        description:
          "A fairy tale adventure about a beautiful young woman and her one true love. He must find her after a long separation and save her. They must battle the evils of the mythical kingdom of Florin to be reunited with each other. Based on the William Goldman novel The Princess Bride which earned its own loyal audience.",
        trailer: "https://www.youtube.com/watch?v=O3CIXEAjcc8",
      },
  
      {
        title: "The Idea of You",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/f/f7/The_Idea_of_You_film_poster.jpg",
        description:
          "Solène (Anne Hathaway), a 40-year-old single mom, begins an unexpected romance with 24-year-old Hayes Campbell (Nicholas Galitzine), the lead singer of August Moon, the hottest boy band on the planet.",
        trailer: "https://www.youtube.com/watch?v=V8i6PB0gGOA",
      },
  
      {
        title: "No Hard Feelings",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QkUVFpCHF91wbcs1wb8ZA06aFdywrAOUIQ&s",
        description:
          "No Hard Feelings is a 2023 American sex comedy film starring Jennifer Lawrence as a woman who is hired by a wealthy couple to romance their romantically and sexually inexperienced son, played by Andrew Barth Feldman. The film is directed by Gene Stupnitsky from a screenplay he co-wrote with John Phillips.",
        trailer: "https://www.youtube.com/watch?v=P15S6ND8kbQ",
      },
  
      {
        title: "My Fault",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZDA0ODE1NzMtMzRiZC00Y2UzLWEyMzgtZWY3YjdiY2Q3NzcyXkEyXkFqcGc@._V1_.jpg",
        description:
          "Noah is upset with her mother as she has to leave her boyfriend and friends and move in with her mother's new rich husband and his son Nick. Nick is a typical bad boy turns good boy, and their romance is a typical forbidden step-sibling relationship surrounded by gangsters, wannabes and rich kid problems.",
        trailer: "https://www.youtube.com/watch?v=PaB7cGBuCP0",
      },
  
      {
        title: "Pride & Prejudice",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNQOqNz5BNMTGXMVS82T6p6M4KekaMLnicyw&s",
        description:
          "The film features five sisters from an English family of landed gentry as they deal with issues of marriage, morality, and misconceptions. Keira Knightley stars as Elizabeth Bennet, while Matthew Macfadyen plays Mr Darcy, who falls in love with her.",
        trailer: "https://www.youtube.com/watch?v=1dYv5u6v55Y",
      },
  
      {
        title: "Where the Crawdads Sing",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRuU2sEvJCRVR8R3kAFDcC9PYdzlBWxfoylQ&s",
        description:
          "Where the Crawdads Sing is a coming-of-age story of a young girl raised by the marshlands of the south in the 1950s. When the town hotshot is found dead, and inexplicably linked to Kya, the Marsh Girl is the prime suspect in his murder case. Rated PG-13 for sexual content and some violence including a sexual assault.",
        trailer: "https://www.youtube.com/watch?v=PY3808Iq0Tg",
      },
  
      {
        title: "The Ghost and Mr. Chicken",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LGibRdm1sZyOQWdK8Rk1zNBspcLJhQoebA&s",
        description:
          "Chicken. A timid typesetter hasn't a ghost of a chance of becoming a reporter - until he decides to solve a murder mystery and ends up spending a fright-filled night in a haunted house.",
        trailer: "https://www.youtube.com/watch?v=pg4dR0d8CBg",
      },
  
      {
        title: "The Girl Next Door",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTQ0ODIyMzE1N15BMl5BanBnXkFtZTcwODEwODczMw@@._V1_.jpg",
        description:
          "Ambitious high school senior Matthew Kidman has been accepted to Georgetown University but cannot afford the tuition. As class president, he has raised $25,000 in order to bring a brilliant Cambodian student, Samnang, to study in the United States, but otherwise has found little else memorable about his high school experience. His friends, perverted film student Eli, and shy and awkward Klitz, rebuff his displeasure with their lack of risky behavior. His life suddenly changes when a young woman, Danielle, moves in next door. When Matthew witnesses her undressing, she sees him and storms over. Introducing herself to his parents, they suggest to Matthew that he show Danielle around town. During the car ride, Danielle coerces him into taking his clothes off and forces him to run naked down the street.",
        trailer: "https://www.youtube.com/watch?v=t4_ub_Nu1mE",
      },
  
      {
        title: "Secretary",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/9/91/Secretary_%282002%29.png",
        description:
          "Summaries. A young woman, recently released from a mental hospital, gets a job as a secretary to a demanding lawyer, where their employer-employee relationship turns into a sexual, sadomasochistic one.",
        trailer: "https://www.youtube.com/watch?v=0Di9MDN1RuU",
      },
  
      {
        title: "Atonement",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzl2VLJDn9VJyLO15AcGJL1fKVFHqeOuvHiw&s",
        description:
          "Atonement is a 2007 romantic war drama film directed by Joe Wright and starring James McAvoy, Keira Knightley, Saoirse Ronan, Romola Garai, and Vanessa Redgrave. It is based on the 2001 novel by Ian McEwan. The film chronicles a crime and its consequences over six decades, beginning in the 1930s.",
        trailer: "https://www.youtube.com/watch?v=zRlkHu-R7yI",
      },
  
      {
        title: "Fly Me to the Moon",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEtNC4rfIHIzdT4Ni_FcbVQu5h6V3Lr21xg&s",
        description:
          "The film serves as a fictionalized retelling of the 1969 Apollo 11 mission by incorporating a story of three young flies that stow away on the rocket to fulfill their dream of going up to the moon, while their families take on a group of Soviet flies who try to sabotage the mission.",
        trailer: "https://www.youtube.com/watch?v=lW7enw6mFxs",
      },
  
      {
        title: "The Phantom of the Opera",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNuCERc8tz1JuXY0IWPC3e0zFYLUev1zqtdg&s",
        description:
          "It tells the story of a mysterious man that lives beneath the Paris Opera House, and is madly in love with a young ballet dancer. The managers of the opera house think he is a phantom. The young dancer believes he is the Angel of Music, sent by her dead father to watch over her.",
        trailer: "https://www.youtube.com/watch?v=N91AL8sAh9o",
      },
  
      {
        title: "Halloween Ends",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxWww8Pd-ZB33xJAMCVpoR3chlJDo5lc4oQ&s",
        description:
          "After 45 years, the most acclaimed, revered horror franchise in film history reaches its epic, terrifying conclusion as Laurie Strode faces off for the last time against the embodiment of evil, Michael Myers, in a final confrontation unlike any captured on-screen before. Only one of them will survive.",
        trailer: "https://www.youtube.com/watch?v=i_mAWKyfj6c",
      },
  
      {
        title: "Lolita",
        poster:
          "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19943_p_v8_ay.jpg",
        description:
          " Humbert becomes sexually infatuated with Charlotte's daughter, 14-year-old Dolores (Sue Lyon), nicknamed Lolita, and marries Charlotte to stay close to the girl. After finding his diary containing sexual fantasies about Dolores, Charlotte runs into the street and is killed by a car.",
        trailer: "https://www.youtube.com/watch?v=Zvnhg1dja1E",
      },
  
      {
        title: "Malena",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYjA4MTEyY2YtYjgxYi00ZDkzLTkyZGQtZmRkOGI4M2ZhM2EzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description:
          "Plot. On 10 June 1940, in the small Sicilian town of Castelcutò, a teenage boy named Renato experiences three major events: Italy enters World War II; he receives a new bike; and he first sees the beautiful and sensual Malèna, who is the most desired young woman in town.",
        trailer: "https://www.youtube.com/watch?v=SxqUoUvNBXY",
      },
    ],
    Sci_fy: [
      {
        title: "Inerstellar",
        poster:
          "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg",
        description:
          "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
        trailer:
          "https://www.youtube.com/watch?v=Lm8p5rlrSkY&ab_channel=RottenTomatoesTrailers",
      },
  
      {
        title: "Inception",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXWnBnPN47nWvqWJAxw-vmchKc_2u1zkG6Bw&s",
        description:
          "the idea of people sharing a dream space... That gives you the ability to access somebody's unconscious mind.",
        trailer:
          "https://www.youtube.com/watch?v=1V_T8qkddUQ&ab_channel=MarvelFanclub%28RoaringTiger%29",
      },
  
      {
        title: "The Matrix",
        poster:
          "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
        description:
          "Neo, a computer programmer and hacker, has always questioned the reality of the world around him. His suspicions are confirmed when Morpheus, a rebel leader, contacts him and reveals the truth to him",
        trailer:
          "https://www.youtube.com/watch?v=vKQi3bBA1y8&ab_channel=RottenTomatoesClassicTrailers",
      },
  
      {
        title: "Blade Runner 2049",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_QL75_UX190_CR0,0,190,281_.jpg",
        description:
          "K, an officer with the Los Angeles Police Department, unearths a secret that could create chaos. He goes in search of a former blade runner who has been missing for over three decades.",
        trailer:
          "https://www.youtube.com/watch?v=gCcx85zbxz4&ab_channel=WarnerBros.Pictures",
      },
  
      {
        title: "The Wild Robot",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/7/70/The_Wild_Robot_poster.jpg",
        description:
          "Shipwrecked on a deserted island, a robot named Roz must learn to adapt to its new surroundings. Building relationships with the native animals, Roz soon develops a parental bond with an orphaned gosling.",
        trailer:
          "https://www.youtube.com/watch?v=7wYFEAupnpw&ab_channel=WarRobots%5BWR%5D",
      },
  
      {
        title: "Alien: Romulus",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGFqpC-HmvMUA8cnbHNjucxiQP3Tev8Awvrg&s",
        description:
          "Space colonizers come face to face with the most terrifying life-form in the universe while scavenging the deep ends of a derelict space station.",
        trailer:
          "https://www.youtube.com/watch?v=x0XDEhP4MQs&ab_channel=20thCenturyStudios.",
      },
  
      {
        title: "Deadpool & Wolverine",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpt_Zq7whYNE9tDvbPI12cQHMm9cZYO8TCmg&s",
        description:
          "Deadpool's peaceful existence comes crashing down when the Time Variance Authority recruits him to help safeguard the multiverse. He soon unites with his would-be pal, Wolverine, to complete the mission and save his world from an existential threat.",
        trailer:
          "https://www.youtube.com/watch?v=73_1biulkYk&ab_channel=MarvelEntertainment",
      },
  
      {
        title: "It's What's Inside",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNDkxOTZmZTYtYTNmNS00MDk3LWE0MDAtMzY5M2Y5YmU1MmI2XkEyXkFqcGc@._V1_.jpg",
        description:
          "A pre-wedding reunion descends into a psychological nightmare for a group of college friends when a surprise guest arrives with a mysterious suitcase that starts to tear the group apart.",
        trailer: "https://youtube.com/watch?v=RJBNi0CjX5I&ab_channel=Netflix",
      },
  
      {
        title: "Megalopolis",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/f/f3/Megalopolis_%28film%29_poster.jpg",
        description:
          "A conflict between Cesar, a genius artist who seeks to leap into a utopian, idealistic future, and his opposition, Mayor Franklyn Cicero, who remains committed to a regressive status quo, perpetuating greed, special interests, and partisan warfare.",
        trailer: "",
      },
  
      {
        title: "Venom: The Last Dance",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_.jpg",
        description:
          "Eddie Brock and Venom must make a devastating decision as they're pursued by a mysterious military man.",
        trailer:
          "https://www.youtube.com/watch?v=HyIyd9joTTc&ab_channel=SonyPicturesEntertainment",
      },
  
      {
        title: "The Platform",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUoiDQrF2cvIJwmts_nc2mygnQL9e5P15gPg&s",
        description:
          "In a prison where inmates are fed on a descending platform, those on the upper levels take more than their fair share while those below are left to starve on scraps, and one man decides to change the system.",
        trailer: "https://www.youtube.com/watch?v=RlfooqeZcdY&ab_channel=Netflix",
      },
  
      {
        title: "The Platform 2",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNzI4YjkyODctMGJmNC00YjBjLTllNjAtNDkxNTJmZjg4MGZkXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
        description:
          "After a mysterious leader imposes his law in a brutal system of vertical cells, a new arrival battles against a dubious food distribution method.",
        trailer: "https://www.youtube.com/watch?v=UKFMYWNatQM&ab_channel=Netflix",
      },
  
      {
        title: "Transformers One",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Transformers_One_Official_Poster.jpg/220px-Transformers_One_Official_Poster.jpg",
        description:
          "Optimus Prime and Megatron, as former friends, bonded like brothers. Their relationship ultimately changes Cybertron's fate forever.",
        trailer:
          "https://www.youtube.com/watch?v=0rmJXXKDrsM&ab_channel=HasbroPulse",
      },
  
      {
        title: "Furiosa: A Mad Max Saga",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROMCy4FdcPh7rkj9hUnboGkgTsn9D26hV7SQ&s",
        description:
          "Snatched from the Green Place of Many Mothers, young Furiosa gets caught in the crossfire of two tyrannical warlords; as the tyrants fight for dominance, Furiosa soon finds herself in a nonstop battle to make her way home.",
        trailer:
          "https://www.youtube.com/watch?v=XJMuhwVlca4&ab_channel=WarnerBros.Pictures",
      },
  
      {
        title: "Subservience",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMjdlNjNlODEtYjA1OS00MDgzLWJiNTMtMDVlMWMyOGM5ZDhkXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
        description:
          "When his wife becomes sick, a struggling father buys a lifelike AI android named Alice to help with the housework. Things seem fine until Alice suddenly becomes self-aware and wants everything its new family has to offer, including the affection of its owner.",
        trailer:
          "https://www.youtube.com/watch?v=dgdidCE3y1s&ab_channel=MillenniumMedia",
      },
  
      {
        title: "The preditor",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR135Nyqow7o2to0Q70zGn8p72vN6UcJIRaQg&s",
        description:
          "Quinn McKenna, an army sniper, along with some fugitives and a scientist, sets out to kill the Predator and save Rory, his son, who was abducted as his autism reflects advancement in human evolution.",
        trailer:
          "https://www.youtube.com/watch?v=WaG1KZqrLvM&ab_channel=20thCenturyStudios",
      },
  
      {
        title: "Alien",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRt0z3C5jbJw2ZIgP99yvOKz7wQBWVE_HQ9w&s",
        description:
          "The crew of a spacecraft, Nostromo, intercept a distress signal from a planet and set out to investigate it. However, to their horror, they are attacked by an alien which later invades their ship.",
        trailer:
          "https://www.youtube.com/watch?v=jQ5lPt9edzQ&ab_channel=RottenTomatoesTrailers",
      },
  
      {
        title: "A Quiet Place: Day One",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMDdjZTljZWMtMDIwNi00MTA5LTkxZmItNmY0NDA3ZDM0N2M2XkEyXkFqcGc@._V1_.jpg",
        description:
          "When New York City comes under attack from an alien invasion, a woman and other survivors try to find a way to safety. They soon learn that they must remain absolutely silent as the mysterious creatures are drawn to the slightest sound.",
        trailer:
          "https://www.youtube.com/watch?v=YPY7J-flzE8&ab_channel=ParamountPictures",
      },
  
      {
        title: "Pixels",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMzIyNTc1NmUtOTBlNS00YzEwLTlkZTMtZjJkMGM2YzNkYmY3XkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
        description:
          "Aliens find a time capsule with footage from a video game of the 1980s and consider it a declaration of war. A special team then tries to thwart the aliens who attack Earth as video game characters.",
        trailer:
          "https://www.youtube.com/watch?v=XAHprLW48no&ab_channel=SonyPicturesEntertainment",
      },
  
      {
        title: "Poor Things",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYWU2MjRjZTYtMjVkMS00MTBjLWFiMTAtYmZlYTk1YjkyMWFkXkEyXkFqcGc@._V1_.jpg",
        description:
          "Brought back to life by an unorthodox scientist, a young woman runs off with a lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
        trailer: "https://www.youtube.com/watch?v=S5KiC0GgED0&ab_channel=Hulu",
      },
  
      {
        title: "Ghostbusters: Frozen Empire",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRasknWp98XlN2krxAQz-31xjL911lVed49gw&s",
        description:
          "The Spengler family returns to the iconic New York City firehouse where the original Ghostbusters have taken ghost-busting to the next level. When the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must unite to protect their home and save the world from a second ice age.",
        trailer:
          "https://www.youtube.com/watch?v=HpOBXh02rVc&ab_channel=SonyPicturesEntertainment",
      },
  
      {
        title: "Ghostbusters",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPLGswxHWn-C3tUImrb-LSAbQNApVBe5h73vWEl3K4jbUTCXHfbn6UzKX7mKYrr4G-XU&usqp=CAU",
        description:
          "When Peter Venkman, Raymond Stantz and Egon Spengler lose their jobs as scientists, they start an establishment called Ghostbusters to fight the evil ghosts lurking in New York City.",
        trailer:
          "https://www.youtube.com/watch?v=ahZFCF--uRY&ab_channel=SonyPicturesEntertainment",
      },
  
      {
        title: "The Thing",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZoys2JUxVKJftn82vOHDy8ZgMDRIpy3ArQ&s",
        description:
          "A research team finds an alien being that has fallen from the sky and is starting to hunt them down. Things take a sinister turn when they realise that the creature can take the shape of its victims.",
        trailer:
          "https://www.youtube.com/watch?v=Txjm94GnrPA&ab_channel=RottenTomatoesTrailers",
      },
  
      {
        title: "Borderlands",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfTVbto3AYif1GFgHlm5ldee7lA4iu0pXfAA&s",
        description:
          "Returning to her home planet Pandora, an infamous bounty hunter forms an unexpected alliance with a ragtag team of misfits. Together, they battle alien monsters and dangerous bandits to uncover one of Pandora's most explosive secrets.",
        trailer:
          "https://www.youtube.com/watch?v=lU_NKNZljoQ&ab_channel=LionsgateMovies",
      },
  
      {
        title: "Inception",
        poster:
          "https://m.media-amazon.com/images/I/61AYEacqlkL._AC_UF894,1000_QL80_.jpg",
        description:
          "Cobb steals information from his targets by entering their dreams. He is wanted for his alleged role in his wife's murder and his only chance at redemption is to perform a nearly impossible task.",
        trailer:
          "https://www.youtube.com/watch?v=YoHD9XEInc0&ab_channel=RottenTomatoesClassicTrailers",
      },
  
      {
        title: "Uglies",
        poster:
          "https://m.media-amazon.com/images/M/MV5BOGEyYmQxNjQtNDlkYy00MDlkLTgyNDUtZDA0NGY3ZTNlZWU0XkEyXkFqcGc@._V1_.jpg",
        description:
          "In a futuristic dystopia with enforced beauty standards, a teen awaiting mandatory cosmetic surgery embarks on a journey to find her missing friend.",
        trailer: "https://www.youtube.com/watch?v=OhcOHkgTrQQ&ab_channel=Netflix",
      },
  
      {
        title: "Jurassic World Rebirth",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1e1018-YX0yu_gCBIFyt_b2gBrBkhn22R2Q&s",
        description:
          "A woman and a family get stranded on an island that's home to ferocious dinosaurs.",
        trailer:
          "https://www.youtube.com/watch?v=EKOobUmLU5s&ab_channel=ScreenCulture",
      },
  
      {
        title: "The Faculty",
        poster:
          "https://resizing.flixster.com/_A7JP84JB10Wid-UofCDOzDrWiw=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p22254_p_v8_ak.jpg",
        description:
          "When Casey Connor, Herrington High School's newspaper photographer, witnesses the murder of a nurse and sees her alive again, she decides to investigate the bizarre happenings.",
        trailer: "https://www.youtube.com/watch?v=praQkvivkUE&ab_channel=Miramax",
      },
  
      {
        title: "Kingdom of the Planet of the Apes",
        poster:
          "https://lumiere-a.akamaihd.net/v1/images/ph_-_kotpota_chinaart_1sht_6b3f11d1.png",
        description:
          "Many years after the reign of Caesar, a young ape goes on a journey that will lead him to question everything he's been taught about the past and make choices that will define a future for apes and humans alike.",
        trailer:
          "https://www.youtube.com/watch?v=XtFI7SNtVpY&ab_channel=20thCenturyStudios",
      },
  
      {
        title: "Eternal Sunshine of the Spotless Mind",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBJUQ8-Hjw-F4kuuyhZu-aYYowGc3_nvZZRg&s",
        description:
          "Joel finds out that his girlfriend, Clementine, has had him erased from her memories and decides to do the same. During the time of the clinical procedure, he realizes that he still loves her deeply.",
        trailer:
          "https://www.youtube.com/watch?v=yE-f1alkq9I&ab_channel=KevinGrin",
      },
  
      {
        title: "Dune Part One",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-aNdRubJRtcFngrX0dsKtMTTEH2bEyF-NA&s",
        description:
          "Paul Atreides arrives on Arrakis after his father accepts the stewardship of the dangerous planet. However, chaos ensues after a betrayal as forces clash to control melange, a precious resource.",
        trailer:
          "https://www.youtube.com/watch?v=n9xhJrPXop4&ab_channel=WarnerBros.Pictures",
      },
  
      {
        title: "The Life of Chuck",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDOC1tSexedlQivrS5tx0zncSlFEwXG2BCkA&s",
        description:
          "The Life of Chuck is a 2024 American science fiction drama film written and directed by Mike Flanagan. It is based on the 2020 novella by Stephen King. Tom Hiddleston plays the title role, with Mark Hamill, Chiwetel Ejiofor, Karen Gillan, and Jacob Tremblay in supporting roles.",
        trailer: "https://www.youtube.com/watch?v=hsHU7W1umOM&ab_channel=AfterTV",
      },
  
      {
        title: "A Quiet Place",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcSx0eqHw7ZGjtVQA7NUjPQWvaRO7QWAtPtw&s",
        description:
          "A family lives in a world inhabited by blind but sound sensitive creatures who are out to kill people. In order to survive, they are forced to use the sign language to communicate with each other.",
        trailer:
          "https://www.youtube.com/watch?v=WR7cc5t7tv8&ab_channel=ParamountPictures",
      },
  
      {
        title: "Venom",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkTwA15zpw8wvenLOc92tyRdxD3P5wTH4b6Q&s",
        description:
          "While trying to take down Carlton, the CEO of Life Foundation, Eddie, a journalist, investigates experiments of human trials. Unwittingly, he gets merged with a symbiotic alien with lethal abilities.",
        trailer:
          "https://www.youtube.com/watch?v=u9Mv98Gr5pY&ab_channel=SonyPicturesEntertainment",
      },
  
      {
        title: "Spider-Man: No Way Home",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlWqwmRiDNDFYw-4l3qFdT8TgpjRSTSF5X8A&s",
        description:
          "Spider-Man seeks the help of Doctor Strange to forget his exposed secret identity as Peter Parker. However, Strange's spell goes horribly wrong, leading to unwanted guests entering their universe.",
        trailer:
          "https://www.youtube.com/watch?v=JfVOs4VSpmA&ab_channel=SonyPicturesEntertainment",
      },
  
      {
        title: "I, Robot",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZDdhNTY3YTgtYmQwMC00MjM1LTgzYzMtMGM1N2E0NWM1NDlkXkEyXkFqcGc@._V1_.jpg",
        description:
          "Del Spooner investigates the murder of Dr Alfred, who works at US Robotics, with the help of a robopsychologist. He tries to deduce if a robot has violated the laws of robotics and killed him.",
        trailer:
          "https://www.youtube.com/watch?v=7Dlo-VB0-HI&ab_channel=RottenTomatoesClassicTrailers",
      },
  
      {
        title: "Prometheus",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTY3NzIyNTA2NV5BMl5BanBnXkFtZTcwNzE2NjI4Nw@@._V1_FMjpg_UX1000_.jpg",
        description:
          "After a clue to mankind's origins is discovered, explorers are sent to the darkest corner of the universe. Their different expectations take a toll on them when they find something unimaginable.",
        trailer:
          "https://www.youtube.com/watch?v=5UEv03g51kU&ab_channel=PrometheusNews",
      },
  
      {
        title: "Venom: Let There Be Carnage",
        poster:
          "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F08%2Fvenom-let-there-be-carnage-new-posters-delayed-release-001.jpg?q=75&w=800&cbr=1&fit=max",
        description:
          "Eddie Brock tries to revive his failing career by interviewing a serial killer, Cletus Kasady, who is on death row. When Carnage gains control over Cletus's body, he escapes from the prison.",
        trailer:
          "https://www.youtube.com/watch?v=-ezfi6FQ8Ds&ab_channel=SonyPicturesEntertainment",
      },
  
      {
        title: "Prey",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/f/f4/Prey_2022_poster.png",
        description:
          "A skilled Comanche warrior protects her tribe from a highly evolved alien predator that hunts humans for sport, fighting against wilderness, dangerous colonisers and this mysterious creature to keep her people safe.",
        trailer:
          "https://www.youtube.com/watch?v=wZ7LytagKlc&ab_channel=20thCenturyStudios",
      },
  
      {
        title: "Mad Max: Fury Road",
        poster:
          "https://play-lh.googleusercontent.com/XujhcvV-Mt7BBheyIiY_yWaVZKutxuhZi17IXRvx2axroT4Y-yp0HRYsyQKNIuE9Cxwqaq9k5KeL-3eT1Ok6",
        description:
          "In an apocalyptic world, a tyrant rules over a stark desert, controlling every drop of water. Two rebels, one escaping grief and the other reaching out to her childhood, are the last hope for a few.",
        trailer:
          "https://www.youtube.com/watch?v=XJMuhwVlca4&t=1s&ab_channel=WarnerBros.Pictures",
      },
  
      {
        title: "Nope",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMWI1OGM4YjQtNmIxNi00YmE2LWJkNTAtY2Q0YjU4NTI5NWQyXkEyXkFqcGc@._V1_.jpg",
        description:
          "A man and his sister discover something sinister in the skies above their California horse ranch, while the owner of a nearby theme park tries to profit from the mysterious, otherworldly phenomenon.",
        trailer:
          "https://www.youtube.com/watch?v=In8fuzj3gck&ab_channel=UniversalPictures",
      },
  
      {
        title: "The Hunger Games",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlWqwmRiDNDFYw-4l3qFdT8TgpjRSTSF5X8A&s",
        description:
          "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.",
        trailer:
          "https://www.youtube.com/watch?v=mfmrPu43DF8&ab_channel=LionsgateMovies",
      },
  
      {
        title: "Spider-Man: Across the Spider-Verse",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description:
          "In an attempt to curb the Spot, a scientist, from harnessing the power of the multiverse, Miles Morales joins forces with Gwen Stacy.",
        trailer:
          "https://www.youtube.com/watch?v=cqGjhVJWtEg&ab_channel=SonyPicturesEntertainment",
      },
  
      {
        title: "Madame Web",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Madame_Web_%28film%29_poster.jpg/220px-Madame_Web_%28film%29_poster.jpg",
        description:
          "Cassandra Webb is a New York City paramedic who starts to show signs of clairvoyance. Forced to confront revelations about her past, she must protect three young women from a mysterious adversary who wants them dead.",
        trailer:
          "https://www.youtube.com/watch?v=s_76M4c4LTo&ab_channel=SonyPicturesEntertainment",
      },
  
      {
        title: "Guardians of the Galaxy Vol. 3",
        poster:
          "https://m.media-amazon.com/images/M/MV5BOTJhOTMxMmItZmE0Ny00MDc3LWEzOGEtOGFkMzY4MWYyZDQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description:
          "Still reeling from the loss of Gamora, Peter Quill must rally his team to defend the universe and protect one of their own. If the mission is not completely successful, it could possibly lead to the end of the Guardians as we know them.",
        trailer:
          "https://www.youtube.com/watch?v=u3V5KDHRQvk&ab_channel=MarvelEntertainment",
      },
  
      {
        title: "The Fly",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTkhR7yzyq9Bbmdc_RGWO8MeJu0zarKCwQg&s",
        description:
          "A scientist creates a teleportation machine and decides to test it. However, a fly enters the machine and their genes get spliced. Gradually, he finds himself transforming into a grotesque",
        trailer:
          "https://www.youtube.com/watch?v=fj1SHpBsY7w&ab_channel=RottenTomatoesClassicTrailers",
      },
    ],
  
    Sports: [
      {
        title: "challengers",
        poster:
          "https://mchschronicle.com/wp-content/uploads/2024/05/IMG_0103.jpg",
        description:
          "It follows the love triangle between an injured tennis star-turned-coach (Zendaya), her low-circuit tennis player ex-boyfriend (Josh O'Connor), and her tennis champion husband (Mike Faist) across 13 years of their relationship, culminating in the latter two's match at the ATP Challenger Tour.",
  
        trailer: "https://www.youtube.com/watch?v=VobTTbg-te0",
      },
      {
        title: "karate kid:legends",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwiK-z4VD_Pllo_UPOaJ-R9Sfg_UOarKXkA&s",
        description:
          "Daniel (Ralph Macchio) moves to Southern California with his mother, Lucille (Randee Heller), but quickly finds himself the target of a group of bullies who study karate at the Cobra Kai dojo. Fortunately, Daniel befriends Mr. Miyagi (Noriyuki 'Pat' Morita), an unassuming repairman who just happens to be a martial arts master himself. ",
        trailer: "https://www.youtube.com/watch?v=ODckog6KC9E",
      },
      {
        title: "cars",
        poster: "https://upload.wikimedia.org/wikipedia/en/3/34/Cars_2006.jpg",
        description:
          "Cars is a 2006 American animated sports comedy film produced by Pixar Animation Studios for Walt Disney Pictures. The film was directed by John Lasseter, co-directed by Joe Ranft, produced by Darla K. Anderson, and written by Lasseter, Ranft, Dan Fogelman, Kiel Murray, Phil Lorin, and Jorgen Klubien basedCars is a 2006 movie made by Pixar.",
        trailer: "hhttps://www.youtube.com/watch?v=W_H7_tDHFE81",
      },
      {
        title: "the iron claw",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/3/3a/Iron_claw_film_posterjpg.jpg",
        description:
          "The Iron Claw is a wrestling maneuver where a wrestler places their bare hand over an opponent's face, particularly the temples, and pretends to squeeze so tightly that it gives the impression their skull is about to be crushed1.",
        trailer: "https://www.youtube.com/watch?v=8KVsaoveTbw",
      },
      {
        title: "out cold",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNvAnmKChgzazl_zZ5w8ncbSjwffxuZeCPag&s1",
        description:
          "Rambis and his friends are having the times of their lives on Bull Mountain until the legendary Papa Muntz's son decides to sell the mountain to sleazy land developer John Majors, having the staff fired and turning Bull Mountain into 'Yuppieville'. — A.J. Synopsis.",
        trailer: "https://www.youtube.com/watch?v=kQg8Hp01vD0 ",
      },
      {
        title: "the karate kid",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCFkBtJXTThKcqBffOadDBtnFe0wKGJ4gubA&s1",
        description:
          "he Karate Kid is a semi-autobiographical story based on the life of its screenwriter, Robert Mark Kamen1. The movie follows Daniel Larusso, who is taken under the wing of his apartment super and taught the ancient art of Karate so that he is able to stand up ..",
        trailer: "https://www.youtube.com/watch?v=tw_q39eNJU0",
      },
      {
        title: "arthur the king",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQlrn6JUCUcNbr11Ishlp7n8WI4MkF6kR49g&s",
        description:
          "King Arthur, legendary British king who appears in a cycle of medieval romances as the sovereign of a knightly fellowship of the Round Table.",
        trailer: "https://www.youtube.com/watch?v=wjDJNEPghNY1",
      },
      {
        title: "happy gilmore",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYYSUoUv-KLJ2Y__YH_BpOak7SIy0tQRQhw&s",
        trailer: "https://www.youtube.com/watch?v=tnbyS7QnxY0",
        description:
          "starring Adam Sandler as a failed ice hockey player who becomes a professional golfer123. The film is directed by Dennis Dugan and produced by Robert Simonds1. T.",
      },
      {
        title: "dodgeball:a true underdog story",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPwpr77qlosVGypPRZjGfK1hTXjSuJHW7bHw&s",
        description:
          " A True Underdog Story is a 2004 comedy directed by Rawson Marshall Thurber and starring Vince Vaughn. ",
        trailer: "https://www.youtube.com/watch?v=47EK-F7DsU8",
      },
      {
        title: "young woman and the sea",
        poster: "https://cdn.kinocheck.com/i/w=1200/eannd4dgae.jpg",
        description:
          "young Woman and the Sea is a 2024 American biographical sports film directed by Joachim Rønning and written by Jeff Nathanson, based on the 2009 book by Glenn Stout.",
        trailer: "https://www.youtube.com/watch?v=7tNvrYzPUrk",
      },
      {
        title: "talladega Nights:the ballad of rick bobby",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREEbYq_Vnad7rMiBowR7xfQjNytdoWgadcjQ&s",
        description:
          "alladega Nights: The Ballad of Ricky Bobby is a 2006 American sports comedy film directed by Adam McKay who co-wrote the film with Will Ferrell. It features Ferrell as the titular Ricky Bobby, an immature yet successful NASCAR driver. ",
        trailer: "https://www.youtube.com/watch?v=YfGRg0FLxtE ",
      },
      {
        title: "the longest yard",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqpPof8XV6-8mQgYMZrKl11R6ABsPoKChSJA&s",
        description:
          "stars Adam Sandler as a washed-up former professional American football quarterback who goes to prison and is forced to assemble a team to play against the guards",
        trailer: "https://www.youtube.com/watch?v=biEgx-g4V_",
      },
      {
        title: "million dollar baby",
        poster:
          "https://aarondavis.com/wordpress/wp-content/uploads/2014/10/MV5BMTkxNzA1NDQxOV5BMl5BanBnXkFtZTcwNTkyMTIzMw@@._V1_.jpg",
        description:
          "million Dollar Baby is an Oscar-winning sports drama directed by Clint Eastwood and starring Eastwood, Hilary Swank, and Morgan Freeman. ",
        trailer: "hhttps://www.youtube.com/watch?v=2FkyuKKtQqo",
      },
      {
        title: "remember the titans",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVz9-xrXquTAp9vJ01uWd-8vMZ8315pbE96w&s",
        description:
          "Based on a true story, Remember the Titans takes a look at the beginning of integration in Alexandria, both the racism and the friendships that result from overcoming prejudice",
        trailer: "https://www.youtube.com/watch?v=35MvdHBWjwU ",
      },
      {
        title: "the waterboy",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVeo-Op-hd8JgIxURVDNG-R9EEBCtqgcaqZg&",
        description:
          "The Waterboy is a comedy film directed by Frank Coraci, featuring Adam Sandler as Bobby Boucher, a socially awkward waterboy for a college football team who discovers a talent for tackling",
        trailer: "https://www.youtube.com/watch?v=vVLvkqfTRVQ",
      },
      {
        title: "rocky",
        poster:
          "https://m.media-amazon.com/images/I/61qNMpgcPfL._AC_UF894,1000_QL80_.jpg",
        description:
          ". It is the first installment in the Rocky franchise and also stars Talia Shire, Burt Young, Carl Weathers, and Burgess Meredith.",
        trailer: "https://www.youtube.com/watch?v=3VUblDwa64",
      },
      {
        title: "a league of their own",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqPkphSlVrEojcoeEaYuoj2aJambiW7sQkPQ&s",
        description:
          "A Tom Hanks, Geena Davis and Madonna star in this major-league comedy from the team that brought you Big. Hanks stars as Jimmy Dugan, a washed-up ballplayer whose big league days are over. Hire ",
        trailer: "https://www.youtube.com/watch?v=kZihpHXsGLE=",
      },
      {
        title: "caddyshack",
        poster:
          "https://i.etsystatic.com/23647903/r/il/f90cf9/2440458503/il_570xN.2440458503_prr7.jpg",
        description:
          "Danny Noonan (Michael O'Keefe), a teen down on his luck, works as a caddy at the snob-infested Bushwood Country Club to raise money for his college education",
        trailer: "https://www.youtube.com/watch?v=x9Nl39uWEYk",
      },
      {
        title: "rezBall",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMzAxZDVlYjItYTE4Mi00ZWEwLWJkNDktOGU2NTA1ZTAxNGM4XkEyXkFqcGc@.V1_QL75_UX190_CR0,0,190,281.jpgf",
        description:
          "Rez Ball is a 2024 American sports drama film directed by Sydney Freeland, who co-wrote the screenplay with Sterlin Harjo, based on the nonfiction sports novel Canyon Dreams: ",
        trailer: "https://www.youtube.com/watch?v=plUsLi3elDg",
      },
      {
        title: "ford vs ferrari",
        poster:
          "https://i.etsystatic.com/18242346/r/il/a7773d/2083336274/il_fullxfull.2083336274_41kh.jpg",
        description:
          "American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari.",
        trailer: "https://www.youtube.com/watch?v=I3h9Z89U9ZA",
      },
      {
        title: "jerry maguire",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/e/ea/Jerry_Maguire_movie_poster.jpg ",
        description:
          " Maguire (Tom Cruise) is a glossy 35-year-old sports agent working for Sports Management International (SMI). ",
        trailer: "https://www.youtube.com/watch?v=KUd3gwaf0KQ ",
      },
      {
        title: "the replacements",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ldyyQLsfS5F-RdMd8CRjuDhKmeqWxIMGyw&s",
        description:
          "is a beloved sports comedy that captures the spirit of teamwork, resilience, and the joy of pure entertainment, making it a go-to film for fans of all ages.",
        trailer:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ldyyQLsfS5F-RdMd8CRjuDhKmeqWxIMGyw&s",
      },
      {
        title: "the sandlot",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/d/d4/Sandlot_poster.jpg",
        description:
          "he Sandlot (released in some countries as The Sandlot Kids) is a 1993 American coming-of-age sports comedy film co-written, directed, and narrated by David  ",
        trailer: "https://www.youtube.com/watch?v=pK4nn95j2tw",
      },
      {
        title: "ferrari",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQe918tdiKh_tJOeNniu4lv2BYYtm_wT-BVw&s",
        description:
          "in the summer of 1957, with Enzo Ferrari's auto empire in crisis, the ex-racer turned entrepreneur pushes himself and his drivers to the edge as they launch into the Mille Miglia. ",
        trailer: "https://www.youtube.com/watch?v=ERIBTIlVVJQ ",
      },
      {
        title: "queen of the ring",
        poster:
          "https://media.themoviedb.org/t/p/w220_and_h330_face/3Fh0F9tlq1ly788RnZRPoreAhSY.jpg",
        description:
          "biopic of Mildred Burke, the first ever million dollar female athlete and champion pro-wrestler who pioneered the sport in a time when all girl wrestling was banned in most of America.",
        trailer: "https://www.youtube.com/watch?v=zvIub7hfJoI",
      },
      {
        title: "major league",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS8kZxBU8RR8Hol5v_Oto-2rsON65QVUEYPw&s ",
        description:
          "League Baseball (MLB), North American professional baseball organization that was formed in 1903 with the merger of the two U.S. professional baseball leagues—the National League (NL) . ",
        trailer: "https://www.youtube.com/watch?v=xOXv5KgGj_Y ",
      },
      {
        title: "little giants",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMFBLmyINem0B9jqks7-a3uJnGDukHxmONyg&s ",
        description:
          "Little Giants is a 1994 American family sports comedy film directed by Duwayne Dunham and written by James Ferguson, Robert Shallcross, Tommy Swerdlow, Michael Goldberg from the story by Ferguson and Robert Shallcross. ",
        trailer: "https://www.youtube.com/watch?v=EeaF0Tt5qGI",
      },
      {
        title: "bring it on",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3mZ9n2EA-x5V78WItc_vzpuX4U6lXRTCyYQ&s ",
        description:
          "Bring It On is a 2000 American teen comedy film directed by Peyton Reed (in his theatrical film directing debut) and written by Jessica Bendinger. The film stars Kirsten Dunst, Eliza Dushku, Jesse Bradford and Gabrielle Union.",
        trailer: "https://www.youtube.com/watch?v=4Fza-ZDQE6c ",
      },
      {
        title: "nacho libre",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC8WT8VBqCKgsnI-zUs6IYfkRR7A22NPu1JQ&s",
        description:
          "is a 2006 sports comedy film written by Jared Hess, Jerusha Hess, and Mike White, and directed by Jared Hess.",
        trailer: "https://www.youtube.com/watch?v=5Atg2aASyY4 ",
      },
      {
        title: "the karate kid",
        poster:
          "https://m.media-amazon.com/images/I/51ouCOPswGL.AC_UF894,1000_QL80.jpg ",
        description:
          "The Karate Kid is a 1984 American martial arts drama film written by Robert Mark Kamen and directed by John G. Avildsen. It is the first installment in the Karate Kid franchise, and stars Ralph Macchio, Pat Morita, Elisabeth Shue, and William Zabka. ",
        trailer: "https://www.youtube.com/watch?v=r_8Rw16uscg",
      },
      {
        title: "warrior",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ajLmhSI_dGU7dg0bSNGkC-dTWA17Z8GbTA&s",
        description:
          "Warrior is a 2011 American martial arts sports film directed by Gavin O'Connor. ",
        trailer: "https://www.youtube.com/watch?v=I5kzcwcQA1Q ",
      },
      {
        title: "gran turismo",
        poster:
          "https://play-lh.googleusercontent.com/-jTvgC5KNN2wrHWgiu4MuzBhGfUS-kq3IjGszff8C7W3kquuIK3G9m2EYZ1SusyhT7fDbAt-oCjwzkosQDs ",
        description:
          "Gran Turismo is an integrated simulator for enjoying life with cars. It's a sandbox where players can freely discover experiences on their own. ",
        trailer: "https://www.youtube.com/watch?v=GVPzGBvPrzw",
      },
      {
        title: "moneyball",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRidU920_TKYESpDlsvqhgaBPFGOCOn0voFXQ&s ",
        description:
          "Oakland A's general manager Billy Beane's successful attempt to assemble a baseball team on a lean budget by employing computer-generated analysis to acquire new players",
        trailer: "https://www.youtube.com/watch?v=-4QPVo0UIzc",
      },
      {
        title: "17 again",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSlBzJ-lxIwYPPlhWvZEBipVDaqdLvTYj-A&s",
        description:
          "Having lost a passion and drive for life, Mike meets a mysterious janitor one night who puts him back in his seventeen-year-old body to rediscover himself and find the answers to fix his life before it's too late",
        trailer:
          "https://www.bing.com/ck/a?!&&p=6c9acbfhttps://www.youtube.com/watch?v=UQK5Hh0L1Sg ",
      },
      {
        title: "blades of glory",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6hh5Sv-Hk0o2j8clmJKSUuh3DyJzHejTSA&s",
        description:
          "Blades of Glory is a classic, laugh-out-loud film, and is perfect for when you are looking for something mind-numbingly hilarious. May 3, 2022 A routinely amusing blend of infantile scenarios and daffy characters that matches Ferrell's string of send-ups on various professions and sports. ",
        trailer: "https://www.youtube.com/watch?v=UrZb-dZKCIQ",
      },
      {
        title: "rush",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN12ahjC9wg31LbvjosxM5YYlweXPY9uEIZA&s",
        description:
          "Based on a true story about the relentless rivalry in the 1970s between two Formula One racecar stars, Britain's James Hunt (Chris Hemsworth) and Austria's Niki Lauda (Daniel Bruhl).",
        trailer: "https://www.youtube.com/watch?v=4XA73ni9eVs ",
      },
      {
        title: "Point break",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/7/7e/Pointbreaktheatrical.jpg",
        description:
          "Point Break is a 1991 American action film directed by Kathryn Bigelow and written by W. Peter Iliff. It stars Patrick Swayze, Keanu Reeves, Lori Petty and Gary Busey.",
        trailer: "https://www.youtube.com/watch?v=n14e2u35rUU ",
      },
      {
        title: "the blind slide",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtBvn4TZ2ReUR-4YKFztFyfgNl0aW61JSWnQ&s",
        description:
          "he story of Michael Oher, a homeless and traumatized boy who became an All-American football player and first-round NFL draft pick with the help of a caring woman and her family.",
        trailer: "https://www.youtube.com/watch?v=gvqj_Tk_kuM",
      },
      {
        title: "real steel",
        poster: "https://m.media-amazon.com/images/I/71whKdiEecL.jpg",
        description:
          "a near future where robot boxing is a top sport, a struggling ex-boxer feels he's found a champion in a discarded robot. People have got rid of boxing and have created robot boxing.",
        trailer: "https://www.youtube.com/watch?v=vU3ZqtbIRPI",
      },
      {
        title: "friday night lights",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1krGHZN5O7UyHPHnsxyhZTvKtgKwIwpUBlQ&s",
        description:
          "small, turbulent town in Texas obsesses over their high school football team to an unhealthy degree.",
        trailer: "https://www.youtube.com/watch?v=O-mI9GajrBc",
      },
  
      {
        title: "the boys in the boat",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5EkMkhwCAu--r4dkikHtFU5Vqxk0SEG0nA&s",
        description:
          "The Boys in the Boat is about the University of Washington eight-oared rowing crew that represented the United States",
        trailer: "https://www.youtube.com/watch?v=dfEA-udzjjQ ",
      },
  
      {
        title: "cars 2",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPuo4SP-E82zwVdLjcbwD5sXzidaBaOnhYcQ&s",
        description:
          "Race star Lightning McQueen is invited to the World Grand Prix, a race inviting all of the best race cars from around the world.",
        trailer: "https://www.youtube.com/watch?app=desktop&v=pTNc0R1FfvY",
      },
      {
        title: "F1",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/4/48/Brad_Pitt_on_official_poster_for_F1_%282025_film%29.jpeg",
        description:
          " is 'F1' about? The film follows Pitt as Sonny Hayes, an ex-F1 driver who makes a surprise return to the grid years after suffering a horrible crash. ",
        trailer: "https://www.youtube.com/watch?v=DrE9umGiPZQ",
      },
      {
        title: "air",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAcANErSm_OlovhACsr_mabGnaawp6z8QTg&s ",
        description:
          "The film is based on true events about the origin of Air Jordan, a basketball shoeline, of which a Nike employee seeks to strike a business deal with rookie player Michael",
        trailer: "https://www.youtube.com/watch?v=Euy4Yu6B3nU ",
      },
      {
        title: "She's the man",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6E05afgJTI0-vPABmdBMr_lkAuVo_cBgDhg&s ",
        description:
          "William Shakespeare's play Twelfth Night, the film centers on teenager Viola Hastings, who enters her brother's new boarding school, Illyria Prep, in his place and pretends to be a boy in order to play on the boys' soccer team. ",
        trailer: "https://www.youtube.com/watch?v=jf67WlthWXk",
      },
      {
        title: "Unbroken",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmtdXg2PgqoLsYQHLH9y7W7xCu6jfZ8Xz3g&s",
        description:
          "After a near-fatal plane crash in WWII, Olympian Louis Zamperini spends a harrowing 47 days in a raft with two fellow crewmen before he's caught by the Japanese navy and sent to a prisoner-of-war camp.",
        trailer:
          "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3DrGlsxVfCSyQ&ved=2ahUKEwie_YLEg6iJAxV9fKQEHQltKXsQsPgBegQIIBAB&sqi=2&usg=AOvVaw3kAu6Um3xVyFsW_JLDRtnt",
      },
      {
        title: "Coach carter",
        poster:
          "https://lh4.googleusercontent.com/proxy/pAtpe-EfVMkRf0BGvAJ_GN70uBeE9gBXG1KuElG0OpWNPY498_6ZL4WyGVWe3vZfMMqII9ssR5M2pRvS3r99YJ00fnCBRLBkNCXx8T51",
        description:
          "1999, Ken Carter (Samuel L. Jackson) returns to his old high school in Richmond, California, to get the basketball team into shape. With tough rules and academic discipline, he succeeds in setting the players on a winning streak.",
        trailer:
          "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3Dd_GleoanbPE&ved=2ahUKEwjagoH0g6iJAxVmwAIHHTV1MQwQwqsBegQICxAG&usg=AOvVaw3zIBCe___Mtyqplfqp0PVz",
      },
      {
        title: "The mighty ducks",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaUOUmN_2XfqLbGq6319jmuDVfr0hOz6OnfA&s",
        description:
          "After being pulled over for drunk driving, Minneapolis-based attorney Gordon Bombay is sentenced to 500 hours of community service, coaching youth hockey. There he meets the District 5 peewee hockey team perennial losers who finish at the bottom of the league standings year after year ",
        trailer:
          "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3DUm_JU7HpSYQ&ved=2ahUKEwjDv6K-hKiJAxXV8QIHHYNXCuYQwqsBegQIChAG&usg=AOvVaw2AgZGPOTKJ3U3jvt6zzCRG",
      },
    ],
  
    Thriller: [
      {
        title: "Joker: Folie à Deux",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSpuvSFJcSoCNrYor514aJ-DT_7R5XslyX7cm9xMGdleCbJt6eldY6q0Oh0U2ALw8cRQ&usqp=CAU",
        description:
          "'Joker: Folie à Deux' finds Arthur Fleck institutionalized at Arkham awaiting trial for his crimes as Joker. While struggling with his dual identity, Arthur not only stumbles upon true love, but also finds the music that's always been inside him",
        trailer: "https://www.youtube.com/watch?v=_OKAwz2MsJs",
      },
  
      {
        title: "Alien: Romulus",
        poster:
          "https://th.bing.com/th/id/OIP.IDBd9YTXdUYyTWPcADTL2gHaJv?rs=1&pid=ImgDetMain",
        description:
          "In 2142, a Weyland-Yutani space probe investigates the wreckage of the USCSS Nostromo, which was destroyed two decades prior.[a] The probe collects a large cocoon and departs for a secret research space station. Upon arrival, masked scientists open the cocoon, revealing the same xenomorph that killed most of the Nostromo's crew.",
        trailer: "https://www.youtube.com/watch?v=OzY2r2JXsDM",
      },
  
      {
        title: "Smile 2",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7v_p18HInpAvG5m0U4RrBCb5ImGQdWhBO7Q&s",
        description:
          "Smile 2 is a 2024 American psychological supernatural horror film1. It is a sequel to Smile (2022) and stars Naomi Scott as a pop star who experiences a series of increasingly disturbing events as she is about to go on tour1. The sequel sets up a bigger franchise twist for Smile 32.",
        trailer: "https://www.youtube.com/watch?v=Fy7kaI3GKzo",
      },
  
      {
        title: "Terrifier",
        poster:
          "http://ts1.mm.bing.net/th?id=OIP.LjX7AbLiVSK24DdkI8W_DQHaKd&pid=15.1",
        description:
          "Named one of the scariest clowns on screen by BloodyDisgusting.com, Art The Clown returns and sets his sights on three young women, along with anyone else that gets in his way. Terrifier is based on a character from the successful horror anthology franchise All Hallows Eve.",
        trailer: "https://www.youtube.com/watch?v=fN5j1MtGO2Q",
      },
  
      {
        title: "Caddo Lake",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh0wK32Hdfz2feiqeNurU7peprXc9Wexhd9g&s",
        description:
          "When an 8-year-old girl disappears on Caddo Lake, a series of past deaths and disappearances begin to link together, altering a broken family's history.",
        trailer: "https://www.youtube.com/watch?v=Rrx_lZxzjbQ",
      },
  
      {
        title: "Salem's Lot",
        poster:
          "https://th.bing.com/th/id/R.25ef895e3dcf52507c1e433ca782e5ac?rik=EEvjUAPzgooPaw&riu=http%3a%2f%2fmedia.flix.gr.s3.amazonaws.com%2fassets%2fimages%2f2020%2f04%2f12%2f81bce6a5f0d1887d70dbb93c2238094b.jpg&ehk=zBSKoAgzoH0DGS1sdO%2fo5j8XnJa%2b0j8vboGDPmj1VGE%3d&risl=&pid=ImgRaw&r=0",
        description:
          "Ben Mears, a writer who spent part of his childhood in Jerusalem's Lot, Maine, also known as 'Salem's Lot, has returned after 25 years to write a book about the long-abandoned Marsten House, where he had a bad experience as a child. He soon discovers that an ancient evil has also come to town and is turning the residents into vampires. He vows to stop the plague of undead and save the town.",
        trailer: "https://www.youtube.com/watch?v=QtVzKkv03ic",
      },
  
      {
        title: "It's What's Inside",
        poster:
          "https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/8b/763e908f61236a5fb2c7d0a41ea59344_300x442.jpg?t=1706751783",
        description:
          " A group of friends gather for a pre-wedding party that descends into an existential nightmare when an estranged friend arrives with a mysterious game that awakens long-hidden secrets, desires and grudges.",
        trailer: "https://www.youtube.com/watch?v=RJBNi0CjX5I",
      },
  
      {
        title: "Speak No Evil",
        poster:
          "https://th.bing.com/th/id/OIP.uTNiNqBq86lxG0EkerECagHaKl?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description:
          "When an American family is invited to spend the weekend at the idyllic country estate of a charming British family they befriended on vacation, what begins as a dream holiday soon warps into a snarled psychological nightmare. As the weekend progresses, they realize that a strange side lies within the family who invited them: the untrammeled hospitality of the charismatic, alpha-male estate owner masks an unspeakable darkness.",
        trailer: "https://www.youtube.com/watch?v=FjzxI6uf8H8",
      },
  
      {
        title: "Martin",
        poster:
          "https://th.bing.com/th/id/OIP.LtZwxKi2X7ymsIZFdEjOkQHaJP?w=140&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description:
          "A journey of a man discovering himself, finding love and fighting for his motherland. Can he hold the fort on all three gates?",
        trailer: "https://www.youtube.com/watch?v=oge3BfIoG-c",
      },
  
      {
        title: "Smile",
        poster:
          "https://fr.web.img2.acsta.net/pictures/22/09/29/08/42/5363876.jpg",
        description:
          "Having spent years trying to flee her own childhood trauma by working her fingers to the bone, compassionate psychiatrist Dr Rose Cotter is used to treating the most damaged and vulnerable members of society. Laura's puzzling case, however, is a different story",
        trailer: "https://www.youtube.com/watch?v=BcDK7lkzzsU",
      },
  
      {
        title: "Wolfs",
        poster:
          "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/09/wolfs-official-poster-1.jpg",
        description:
          "A professional fixer is hired to cover up a high-profile crime. But when a second fixer shows up and the two 'lone wolves' are forced to work together, they find their night spiraling out of control in ways that neither one of them expected.",
        trailer: "https://www.youtube.com/watch?v=dvinCLRtB0g",
      },
  
      {
        title: "The Batman",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UX1000_.jpg",
        description:
          "Two years of nights have turned Bruce Wayne into a nocturnal animal. But as he continues to find his way as Gotham's dark knight Bruce is forced into a game of cat and mouse with his biggest threat so far, a manic killer known as'The Riddler'",
  
        trailer: "https://www.youtube.com/watch?v=AJmEaYsLYB8",
      },
  
      {
        title: "Longlegs",
        poster:
          "https://media-cache.cinematerial.com/p/500x/ixnmryad/longlegs-movie-poster.jpg?v=1704628193",
        description:
          "FBI Agent Lee Harker is a gifted new recruit assigned to the unsolved case of an elusive serial killer. As the case takes complex turns, unearthing evidence of the occult, Harker discovers a personal connection to the merciless killer and must race against time to stop him before he claims the lives of another innocent family.",
        trailer: "https://www.youtube.com/watch?v=uwSw9c-g-5w",
      },
  
      {
        title: "Venom: The Last Dance",
        poster:
          "https://th.bing.com/th/id/OIP.4-MboKgYvbBEyZYUxOKC2wHaK-?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description:
          "Tom Hardy returns as Venom, one of Marvel's greatest and most complex characters, for the final film in the trilogy. Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
        trailer: "https://www.youtube.com/watch?v=__2bjWbetsA",
      },
  
      {
        title: "Conclave",
        poster:
          "https://www.rogerebert.com/wp-content/uploads/2024/10/MV5BYjgxMDI5NmMtNTU3OS00ZDQxLTgxZmEtNzY1ZTBmMDY4NDRkXkEyXkFqcGc@._V1_-1037x1536.jpg",
        description:
          "When Cardinal Lawrence is tasked with leading one of the world's most secretive and ancient events, selecting a new Pope, he finds himself at the center of a conspiracy that could shake the very foundation of the Catholic Church.",
        trailer: "https://www.youtube.com/watch?v=JX9jasdi3ic",
      },
  
      {
        title: "Strange Darling",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYWM4NmIxYjMtNjQ5Ny00ZGM2LTk5ZGUtNTMwYTdkYWIyMzZlXkEyXkFqcGc@._V1_.jpg",
        description:
          "Nothing is what it seems when a twisted one-night stand spirals into a serial killer's vicious murder spree.",
        trailer: "https://www.youtube.com/watch?v=B2gHXeNXKxE",
      },
  
      {
        title: "Joker",
        poster:
          "https://th.bing.com/th/id/R.75bd39af740f73f3c88895c2fb3acdb4?rik=mbJ9YB1%2flpdKPA&pid=ImgRaw&r=0",
        description:
          "A socially inept clown for hire - Arthur Fleck aspires to be a stand up comedian among his small job working dressed as a clown holding a sign for advertising. He takes care of his mother, Penny Fleck, and as he learns more about his mental illness, he learns more about his past.",
        trailer: "https://www.youtube.com/watch?v=7N2MjRgU4Kk",
      },
  
      {
        title: "The Platform 2",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZDMzOTE4M2MtYTUxOS00NjQxLTg0OWItODNhYmI1M2E5N2MxXkEyXkFqcGdeQXVyMTI1MDcyNjYw._V1_FMjpg_UX1000_.jpg",
        description:
          "The plot of 'The Platform 2' revolves around a mysterious leader imposing their rule in the Platform, where residents battle against a controversial feeding system. Eating from the wrong plate becomes a death sentence, and a new resident becomes embroiled in the fight for survival1.",
        trailer: "https://www.youtube.com/watch?v=UKFMYWNatQM",
      },
  
      {
        title: "Blink Twice",
        poster:
          "https://th.bing.com/th?id=OIF.JV9t%2blnezpQEllzVh3fP%2fw&rs=1&pid=ImgDetMain",
        description:
          "When tech billionaire Slater King (Channing Tatum) meets cocktail waitress Frida (Naomi Ackie) at his fundraising gala, sparks fly. He invites her to join him and his friends on a dream vacation on his private island. It's paradise. Wild nights blend into sun-soaked days and everyone's having a great time. ",
        trailer: "https://www.youtube.com/watch?v=aMcmfonGWY4",
      },
  
      {
        title: "Outside",
        poster:
          "https://sugbo.ph/wp-content/uploads/2024/10/image-122-1024x1280.png",
        description:
          "A family escapes a zombie outbreak by seeking refuge in the father's fortified childhood farmhouse. Despite their efforts to keep out the undead, they face equal horror and trauma within the ancestral home, revealing that safety is elusive both outside and inside the gates.",
        trailer: "https://www.youtube.com/watch?v=wN2qR_i7IAg",
      },
  
      {
        title: "Bad Boys: Ride or Die",
        poster:
          "https://th.bing.com/th/id/OIP.j5pWlPxW7CVPAqpZu9qsMQAAAA?rs=1&pid=ImgDetMain",
        description:
          "When their late police captain gets linked to drug cartels, wisecracking Miami cops Mike Lowrey and Marcus Burnett embark on a dangerous mission to clear his name.",
        trailer: "https://www.youtube.com/watch?v=hRFY_Fesa9Q",
      },
  
      {
        title: "Never Let Go",
        poster:
          "https://th.bing.com/th/id/OIP.UO0Uwm4pQLQxdiyDccCSyAHaKe?w=134&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description:
          "A family that has been haunted by an evil spirit for years. Their safety and their surroundings come into question when one of the children questions if the evil is real.",
        trailer: "https://www.youtube.com/watch?v=ZDfRp_ukHDU",
      },
  
      {
        title: "Uprising",
        poster:
          "https://static1.moviewebimages.com/wordpress/wp-content/uploads/sharedimages/2024/09/uprising-2024-poster.jpg",
        description:
          "In the Joseon Dynasty, two friends who grew up together, one the master and one the servant, reunite post-war as enemies on opposing sides.",
        trailer: "https://www.youtube.com/watch?v=1aEjAxJtw2U",
      },
  
      {
        title: "All Hallows' Eve",
        poster:
          "https://cdn.hmv.com/r/w-1280/hmv/files/98/98f4a0f8-0817-4e4b-9233-7b66516e6554.jpg",
        description:
          "While babysitting two children on Halloween, a babysitter finds a VHS tape in one of their candy bags. The tape contains three horror stories, linked by a killer clown.",
        trailer:
          "https://cdn.hmv.com/r/w-1280/hmv/files/98/98f4a0f8-0817-4e4b-9233-7b66516e6554.jpg",
      },
  
      {
        title: "The Shadow Strays",
        poster:
          "https://th.bing.com/th?id=OIF.cYf9kYM%2fBAeSFzIV8m%2fmhw&rs=1&pid=ImgDetMain",
        description:
          "Codename 13, a 17-year-old trained assassin is under suspension because of a sloppy mission in Japan. The girl built a conscience when she met Monji, an 11 year old boy who lost his mother to a crime syndicate. When Monji is captured, 13 is hellbent on setting a path of destruction to rescue the boy, including going against her mentor and the organization who hires her, the Shadow.",
        trailer: "https://www.youtube.com/watch?v=jsKo8nvOfck",
      },
  
      {
        title: "Killer Heat",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8PEeNXk8dKvbjcNrrB2F1s0WHR81uLQHbQA&s",
        description:
          "A young rock climber falls from the top of a cliff and is declared dead. Soon a detective is called in because a family member suspects that it is not an accident but a murder. As the investigation progresses the detective realizes that things are not as they seem and he has to dig deeper.",
        trailer: "https://www.youtube.com/watch?v=ADGSIaE6nzE ",
      },
  
      {
        title: "Twisters",
        poster:
          "https://parade.com/.image/t_share/MjA0MzAxNTMzMDQxNDAzMzMz/twisters.jpg",
        description:
          "As storm season intensifies, the paths of former storm chaser Kate Carter, lured back to the open plains after a devastating encounter years prior, and reckless social-media superstar Tyler Owens collide when terrifying phenomena never seen before are unleashed. ",
        trailer: "https://www.youtube.com/watch?v=s1TwQepSJYw",
      },
  
      {
        title: "Civil War",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg5iEMZSBUYN49Dn6sekZ5K-1Jh8dvqz2PGQ&s",
        description:
          " It follows a team of journalists traveling from New York City to Washington, D.C. during a civil war fought across the United States between an authoritarian federal government and several regional factions.",
        trailer: "https://www.youtube.com/watch?v=aDyQxtg0V2w",
      },
  
      {
        title: "Devara Part 1",
        poster:
          "https://th.bing.com/th/id/OIP.KDct_24KaBa4IfFENhBAygHaLk?rs=1&pid=ImgDetMain",
        description:
          "An epic action saga set against coastal lands, which briefs about rip-roaring ,emotionally charged incidents in the periodic timeline, also comprises the titular protagonist being the rescuer to deprived and fear to evildoers.",
        trailer: "https://www.youtube.com/watch?v=S5wQD_0WGTA",
      },
  
      {
        title: "Subservience",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMjdlNjNlODEtYjA1OS00MDgzLWJiNTMtMDVlMWMyOGM5ZDhkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description:
          "Follows a struggling father who purchases a domestic SIM to help care for his house and family, unaware she will gain awareness and turn deadly.",
        trailer: "https://www.youtube.com/watch?v=7GLvnqMboFQ",
      },
  
      {
        title: "The Platform",
        poster:
          "https://th.bing.com/th/id/OIP.t2sT97PF1hlqJvsbNtc8XgHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description:
          "A mysterious place, an indescribable prison, a deep hole. An unknown number of levels. Two inmates living on each level. A descending platform containing food for all of them. An inhuman fight for survival, but also an opportunity for solidarity.",
        trailer: "https://www.youtube.com/watch?v=RlfooqeZcdY",
      },
  
      {
        title: "The Silent Hour",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvs1lWwIRJzFtcMq90pOiwoAFOfABO3XEj5g&s",
        description:
          "Joel Kinnaman plays a Boston Police Detective who suffers an on-the-job accident which leaves him newly deaf. Sixteen months later, he and his friend and partner (Mark Strong) must battle a team of corrupt cops attempting to eliminate a deaf murder witness in the apartment building where she lives.",
        trailer: "https://www.youtube.com/watch?v=zyREPrVRkoI",
      },
  
      {
        title: "Scream",
        poster:
          "https://th.bing.com/th/id/OIP.qoM-4-iUDYeVSIdrBo66sQHaLl?rs=1&pid=ImgDetMain",
        description:
          "a teenage girl is at home alone when the phone rings. A man wants to play a game with her. With the threat of killing her best friend, Tara's forced to play along. She barely survives the ghost face masked intruder's stabbing. ",
        trailer: "https://www.youtube.com/watch?v=beToTslH17s",
      },
  
      {
        title: "Carry On",
        poster:
          "https://assets.frameby.com/item_posters/carry-on-2024/d2c4b415-8e4a-480c-a151-794b38527282_big_300x440.jpg",
        description:
          "A mysterious traveler blackmails a young TSA agent into letting a dangerous package slip through security and onto a Christmas Day flight.",
  
        trailer: "https://www.youtube.com/watch?v=Q2jenKJAc2k",
      },
  
      {
        title: "Heretic",
        poster:
          "https://static1.moviewebimages.com/wordpress/wp-content/uploads/sharedimages/2024/09/heretic-2024-official-poster.jpg",
        description:
          "Two young religious women are drawn into a game of cat-and-mouse in the house of a strange man.",
        trailer:
          "https://static1.moviewebimages.com/wordpress/wp-content/uploads/sharedimages/2024/09/heretic-2024-official-poster.jpg",
      },
  
      {
        title: "The Predator",
        poster:
          "https://th.bing.com/th/id/R.3bc11f971d81ad6b5b72b5cd73e0a955?rik=KZxkkHAVOoJJ%2fA&pid=ImgRaw&r=0",
        description:
          "When a young boy accidentally triggers the universe's most lethal hunters' return to Earth, only a ragtag crew of ex-soldiers and a disgruntled scientist can prevent the end of the human race",
        trailer: "https://www.youtube.com/watch?v=iJ3oX98ng8U",
      },
  
      {
        title: "The Dark Knight",
        poster:
          "https://th.bing.com/th/id/R.51483433003e71752947c0b248daa2d4?rik=ij4WEDFCehRnjA&pid=ImgRaw&r=0",
        description:
          "Set within a year after the events of Batman Begins (2005), Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City, until a mysterious and sadistic criminal mastermind known only as 'The Joker' appears in Gotham, creating a new wave of chaos. ",
        trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
      },
  
      {
        title: "Hold Your Breath",
        poster:
          "https://www.justwatch.com/images/poster/321243564/s718/hold-your-breath-2024.jpg",
        description:
          "In 1930s Oklahoma amid the region's horrific dust storms, a woman is convinced that a sinister presence is threatening her family.",
        trailer: "https://www.youtube.com/watch?v=Vfr6NQhAUd8",
      },
  
      {
        title: "Apartment 7A",
        poster:
          "https://th.bing.com/th/id/OIP.0eBKyFTdPDg4LskvD0gpVAHaLd?rs=1&pid=ImgDetMain",
        description:
          "A struggling young dancer finds herself drawn in by dark forces when a peculiar, well-connected older couple promise her a shot at fame.",
        trailer: "https://www.youtube.com/watch?v=Kj2GqMvhbNM",
      },
  
      {
        title: " A Quiet Place: Day One",
        poster:
          "https://th.bing.com/th/id/OIP.g4yO-Th5-2YaZKThp4nJiQHaLH?rs=1&pid=ImgDetMain",
        description:
          "After the events and revelations of 'A Quiet Place' and 'A Quiet Place: Part 2' it is time to go back to 'Day One'. Following Sam (Lupita Nyong'o) as she's on a group trip in New York City, everything is going fine, until the invasion that sends the world into silence begins",
        trailer: "https://www.youtube.com/watch?v=YPY7J-flzE8",
      },
  
      {
        title: "The Silence of the Lambs",
        poster:
          "https://th.bing.com/th/id/OIP.LgpWaOF1hM2QbSoQcCTpuQHaLC?rs=1&pid=ImgDetMain",
        description:
          "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims",
        trailer: "https://www.youtube.com/watch?v=W6Mm8Sbe__o",
      },
    ],
  
    Western: [
      {
        title: "Horizon: An American Saga - Chapter 1",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8sgubZV6pUNfIhunqASNF-FGYIqBMMpSLng&s",
        description:
          "In 1863, a now American homesteader-settled Horizon is set upon by an Apache raid led by Pionsenay, killing several residents, including the husband and son of Frances Kittredge.",
        trailer: "https://www.youtube.com/watch?v=YYsReoZMj1k",
      },
  
      {
        title: "Killers of the Flower Moon",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCafq4H3tCs2R_hbHyuVkfY5t1Oqi_rP6uig&s",
        description:
          "Based on David Grann's broadly lauded best-selling book, Killers of the Flower Moon is set in 1920s Oklahoma and depicts the serial murder of members of the oil-wealthy Osage Nation, a string of brutal crimes that came to be known as the Reign of Terror.",
        trailer: "https://www.youtube.com/watch?v=EP34Yoxs3FQ",
      },
  
      {
        title: "Django Unchained",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPjM5RjSEFXhhkcVrBcPrts1Bvl1nRL6kWQ&s",
        description:
          "Set in America's Deep South 2 years before the Civil War, German former dentist turned bounty hunter Dr King Schultz (Christoph Waltz) purchases the slave Django (Jamie Foxx). Schultz is after a trio of outlaws, the notorious Brittle brothers, and only Django can identify",
        trailer: "https://www.youtube.com/watch?v=_iH0UBYDI4g",
      },
  
      {
        title: "Tombstone",
        poster:
          "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15292_p_v8_aa.jpg",
        description:
          "Wyatt Earp and his brothers, Morgan and Virgil, have left their gunslinger ways behind them to settle down and start a business in the town of Tombstone, Ariz. While they aren't looking to find trouble, trouble soon finds them when they become targets of the ruthless Cowboy gang.",
        trailer: "https://www.youtube.com/watch?v=XTWYKf5hXIg",
      },
  
      {
        title: "The Good, the Bad and the Ugly",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3mxGgvDwt9ZsvDJDI-oP0Cr6lmHvAlav5cg&s",
        description:
          "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery. A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
        trailer: "https://www.youtube.com/watch?v=IFNUGzCOQoI",
      },
  
      {
        title: "Bone Tomahawk",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaHhngfVQjwVm8jh0aZATTxa_MKp9rWKssIQ&s",
        description:
          "In the dying days of the old west, an elderly sheriff and his posse set out to rescue their town's doctor from cannibalistic cave dwellers.",
        trailer: "https://www.youtube.com/watch?v=0ZbwtHi-KSE",
      },
  
      {
        title: "The Last of the Mohicans",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDGcF9YdgmPfx1jYt-3iusnLwT2ek3iIjWA&s",
        description:
          "The Last of the Mohicans is a 1992 action-drama film about the rescue of two British colonel's daughters during the French and Indian War: ",
        trailer: "https://www.youtube.com/watch?v=yaQeVnN6pUc",
      },
  
      {
        title: "The Hateful Eight",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_.jpg",
        description:
          "The Hateful Eight is a 2015 American Western film about a group of eight travelers who seek shelter from a blizzard in a stagecoach stopover in Wyoming: ",
        trailer: "https://www.youtube.com/watch?v=nIOmotayDMY",
      },
  
      {
        title: "Wind River",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWAcor0apE6YIiwIes64bK8hGWgWo0HBNA4w&s",
        description:
          "Wind River is a 2017 film about a murder on the Wind River Indian Reservation in Wyoming: ",
        trailer: "https://www.youtube.com/watch?v=W7V9Fsll5qM",
      },
  
      {
        title: "Hell or High Water",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2GXRieYUcaelhRYG5XPOrqkvhDRL5JYmZA&",
        description:
          "It follows two brothers (Chris Pine and Ben Foster) who carry out a series of bank robberies to save their family ranch, while being pursued by two Texas Rangers (Jeff Bridges and Gil Birmingham). It was the final film produced by OddLot Entertainment before its dissolution in 2015.",
        trailer: "https://www.youtube.com/watch?v=JQoqsKoJVDw",
      },
  
      {
        title: "Horizon: An American Saga - Chapter 2",
        poster:
          "https://m.media-amazon.com/images/M/MV5BYTNkYjhhNjYtMWJkOS00ODg0LTg3YzItYzgzN2IxYzRkM2ZkXkEyXkFqcGc@._V1_.jpg",
        description:
          "The numbers didn't bear that out, and ultimately the decision was made to pull Chapter 2 from its August 16th, 2024 release date. Kevin Costner reportedly contributed $38 million of his own money to the production of the first two chapters of Horizon: An American Saga.",
        trailer: "https://www.youtube.com/watch?v=YYsReoZMj1k",
      },
  
      {
        title: " Unforgiven",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZXzWUPy2DVFYQP0iIXUrLUQ4gdIn1-lLtCQ&s",
        description:
          "Unforgiven is a 1992 Western drama film about a retired gunslinger who reluctantly returns to a life of crime to avenge a prostitute's disfigurement",
        trailer: "https://www.youtube.com/watch?v=ftTX4FoBWlE",
      },
  
      {
        title: "Once Upon a Time in the West",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTYxOTEwOTU0MV5BMl5BanBnXkFtZTgwNDc4NjQ3MTI@._V1_.jpg",
        description:
          ". A train arrives at the Old West town of Flagstone where a man with a harmonica (later dubbed Harmonica overcomes an ambush by killing three men in dusters. Although Harmonica was expecting to meet an outlaw named Frank, he concludes by the dusters the men belonged to the outlaw Cheyenne's gang.",
        trailer: "https://www.youtube.com/watch?v=MNGQ1hUyx-k",
      },
  
      {
        title: "Legends of the Fall",
        poster:
          "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16299_p_v8_aa.jpg",
        description:
          "In early 20th-century Montana, Col. William Ludlow (Anthony Hopkins) lives in the wilderness with his sons, Tristan (Brad Pitt), Alfred (Aidan Quinn) and Samuel (Henry Thomas). Eventually, the unconventional but close-knit family encounters tragedy when Samuel is killed in World War I.",
        trailer: "https://www.youtube.com/watch?v=QmfxbiMbASI",
      },
  
      {
        title: "The Dark Tower",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/4/49/The_Dark_Tower_teaser_poster.jpg",
        description:
          "Eleven-year-old Jake Chambers experiences visions involving a mysterious warlock, the Man in Black, who seeks to destroy a Tower and bring ruin to the Universe while a Gunslinger opposes him.",
        trailer: "https://www.youtube.com/watch?v=GjwfqXTebIY",
      },
  
      {
        title: "The Revenant",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJgxdc7u3QEg6VEfZ9wzSfU24kFa_5pthdQ&s",
        description:
          "Set in 1820s America, fur trapper and Frontiersman Hugh Glass struggles to survive the harsh winter after an oppressive Ree Indian attack and a mauling from a hostile maternal bear. Abandoned by his crew, Glass attempts to cross the bleak wasteland with only a single notion set in his mind; Revenge.",
        trailer: "https://www.youtube.com/watch?v=LoebZZ8K5N0",
      },
  
      {
        title: "The Thicket",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDSDkeEm7DZumYz-HMH9U7b5xa316aV7xIAw&s",
        description:
          "Storyline. When fierce bounty hunter Reginald Jones (Peter Dinklage) is recruited by a desperate man to track down a ruthless killer known only as Cutthroat Bill (Juliette Lewis), he rallies a band of unlikely heroes including a grave-digging ex-slave and a street-smart woman-for-hire.",
        trailer: "https://www.youtube.com/watch?v=evc3S29-C2A",
      },
  
      {
        title: "3:10 to Yuma",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/2/27/310_to_Yuma_%282007_film%29.jpg",
        description:
          "Outlaw Ben Wade (Russell Crowe) terrorizes 1800s Arizona, especially the Southern Railroad, until he is finally captured. Wade must be brought to trial, so Dan Evans (Christian Bale), the owner of a drought-stricken ranch, volunteers to escort him to the train.",
        trailer: "https://www.youtube.com/watch?v=jX1m45CwvJ8",
      },
  
      {
        title: "The Devil's Rejects",
        poster:
          "https://play-lh.googleusercontent.com/JK-YQf4zr31CQxgzZo1jrcTCdDJbTGnfip6QKIL2f_cCdo8RJFOzykW3rQYHiYzhZenQNA",
        description:
          "After a raid on the rural home of the psychopathic Firefly family, two members of the clan, Otis (Bill Moseley) and Baby (Sheri Moon Zombie), manage to flee the scene. Heading to a remote desert motel, the killers reunite with Baby's father, Capt.",
        trailer: "https://www.youtube.com/watch?v=f5sIuVd57bE",
      },
  
      {
        title: "For a Few Dollars More",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvHg2oL4PQq5UaYI2tr4rvSDo9xxsG3rVXQw&s",
        description:
          "Two bounty killers with similar intentions but different motivations team up to track down a psychotic Mexican outlaw before he and his gang can carry out an audacious bank robbery.",
        trailer: "https://www.youtube.com/watch?v=bNt9NcLteoU",
      },
  
      {
        title: "The Magnificent Seven",
        poster:
          "https://play-lh.googleusercontent.com/EOjD9gDTJWhJ-HRiN2Ec1aCI6IJicBJ3CtjZC7SBQq-brUpXyomRLEz2Reu4luTOhcq5uw",
        description:
          "Seven gunmen from a variety of backgrounds are brought together by a vengeful young widow to protect her town from the private army of a destructive industrialist.",
        trailer: "https://www.youtube.com/watch?v=q-RBA0xoaWU",
      },
  
      {
        title: " Dances with Wolves",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9VSOqPs3ROHXpwt253Zsm1i5jdKi2J-Gp2g&s",
        description:
          "A Civil War soldier develops a relationship with a band of Lakota Indians. Attracted by the simplicity of their lifestyle, he chooses to leave his former life behind to be with them. Having observed him, they give the name Dances With Wolves.",
        trailer: "https://www.youtube.com/watch?v=uc8NMbrW7mI",
      },
  
      {
        title: "Redeeming Love",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJSY3Mu7ejpaE_EbX_OkO1WMtFpskrOl6wytKf--tCuvw3Kydb8OkD59L7NtSHVwGV7Q&usqp=CAU",
        description:
          "Based upon the novel by Francine Rivers. Based on the bestselling novel by Francine Rivers, REDEEMING LOVE is a powerful story of relentless love and perseverance as a young couple's relationship clashes with the harsh realities of the California Gold Rush of 1850.",
        trailer: "https://www.youtube.com/watch?v=6Z-0C02cqFo",
      },
  
      {
        title: " Blazing Saddles",
        poster:
          "https://resizing.flixster.com/Az4BIWKZUtwh8v7CcNe-GMtmMU8=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p1036_p_v12_an.jpg",
        description:
          " In order to ruin a western town and steal their land, a corrupt politician appoints a black sheriff, who promptly becomes his most formidable adversary.",
        trailer: "https://www.youtube.com/watch?v=VKayG1TrfuE",
      },
  
      {
        title: "True Grit",
        poster:
          "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8160526_p_v8_ae.jpg",
        description:
          "After an outlaw named Tom Chaney (Josh Brolin) murders her father, feisty 14-year-old farm girl Mattie Ross (Hailee Steinfeld) hires Rooster Cogburn (Jeff Bridges), a boozy, trigger-happy lawman, to help her find Chaney and avenge her father.",
        trailer: "https://www.youtube.com/watch?v=Q5fEgKj9QNs",
      },
  
      {
        title: "High Plains Drifter",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvyKaayxBSh-aB9yap8DOI-wTnwSqWUXO9Vg&s",
        description:
          "In this Western, a drifter with no name (Clint Eastwood) wanders into a small town, where his gun-slinging abilities are in high demand. When the drifter rides into Lago, he is met with incredulity and disapproval by the townspeople.",
        trailer: "https://www.youtube.com/watch?v=Ek9CwmjisLE",
      },
  
      {
        title: "Hostiles",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBCOUfVLro_tMHenNOrNcPwRQNQWt7hSDPw&s",
        description:
          "In 1892, legendary Army Capt. Joseph Blocker reluctantly agrees to escort a dying Cheyenne war chief and his family back to their tribal land. Embarking on a harrowing and perilous journey from Fort Berringer, N.M., to the grasslands of Montana, they soon encounter a young widow whose family was killed on the plains.",
        trailer: "https://www.youtube.com/watch?v=1M5cj4UmscE",
      },
  
      {
        title: "The Ballad of Buster Scruggs",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMzEGCfoCoREq0TwGFtP0qEwnJJnZqffB7g&s",
        description:
          "Ranging from absurd to profound, these Western vignettes from the Coen brothers follow the adventures of outlaws and settlers on the American frontier. Watch all you want. This anthology film from Joel and Ethan Coen was nominated for three Academy Awards, including Best Adapted Screenplay.",
        trailer: "https://www.youtube.com/watch?v=_2PyxzSH1HM",
      },
  
      {
        title: "The Quick and the Dead",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZGRlZTJmNTEtMzE3Yi00YTAwLWIyMjgtODU4NTExNjFmOTQwXkEyXkFqcGc@._V1_.jpg",
        description:
          "The story focuses on The Lady (Stone), a gunfighter who rides into the frontier town of Redemption, controlled by John Herod (Hackman). The Lady joins a deadly dueling competition in an attempt to exact revenge for her father's death.",
        trailer: "https://www.youtube.com/watch?v=8FbuXkp18H8",
      },
  
      {
        title: "The Forever Purge",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxHVdsnnsjiHcdAuZ_z6-C4vFvkozLVfP8Sg&s",
        description:
          "The film stars Ana de la Reguera, Tenoch Huerta, Josh Lucas, Cassidy Freeman, Leven Rambin, Alejandro Edda, and Will Patton, and follows a group of people who attempt to escape the United States after an insurrectionist movement continues committing crime and murder nationwide after the 2049 Purge's ending.",
        trailer: "https://www.youtube.com/watch?v=xOrXpK-rUaI",
      },
  
      {
        title: "A Fistful of Dollars",
        poster:
          "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p3571_p_v10_ae.jpg",
        description:
          "A wandering gunfighter plays two rival families against each other in a town torn apart by greed, pride, and revenge.",
        trailer: "https://www.youtube.com/watch?v=aEkjT5A9iKc",
      },
  
      {
        title: "The Unholy Trinity",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZmVkOWJlYTUtNjMxYS00ZmY1LWJlMzItNGI5MWFmYzMxYzRhXkEyXkFqcGc@._V1_.jpg",
        description:
          "The Unholy Trinity is a 2024 Western revenge film about a young man who returns to a Montana town in the 1870s to avenge his father's death",
        trailer: "https://www.youtube.com/watch?v=bj7zalkzfSI",
      },
  
      {
        title: " Cowboys & Aliens",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTM1MzkyNzQ3OV5BMl5BanBnXkFtZTcwMDk1NTg2NQ@@._V1_FMjpg_UX1000_.jpg",
        description:
          "Bearing a mysterious metal shackle on his wrist, an amnesiac gunslinger (Daniel Craig) wanders into a frontier town called Absolution. He quickly finds that strangers are unwelcome, and no one does anything without the approval of tyrannical Col. Dolarhyde (Harrison Ford).",
        trailer: "https://www.youtube.com/watch?v=5HsSonHZFnI",
      },
  
      {
        title: "The Power of the Dog",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNzgyMzA2NDEtZWUxNy00MDNmLTllMDYtNzZmNTU5ZWVmMzhlXkEyXkFqcGc@._V1_.jpg",
        description:
          "The Power of the Dog is a 2021 Western film about a domineering rancher who torments his brother's new wife and her son, until secrets are revealed: ",
        trailer: "https://www.youtube.com/watch?v=LRDPo0CHrko",
      },
  
      {
        title: "Wild Wild West",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/3/31/Wild_wild_west_poster.jpg",
        description:
          " Four years after the end of the American Civil War in 1869, U.S. Army Captain James T. Jim West and U.S. Marshal Artemus Gordon cross paths with each other in their hunt for ex-Confederate General Bloodbath McGrath, seemingly responsible for a massacre in New Liberty where West's parents were killed.",
        trailer: "https://www.youtube.com/watch?v=It89i3W-v4s",
      },
  
      {
        title: "Three Amigos!",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs97a7sPhIJC-KVxLr0-k7vPHhwamLj_aT2Q&s",
        description:
          "It is the story of three American silent film stars who are mistaken for real heroes by the suffering people of a small Mexican village. The actors must find a way to live up to their reputation and stop a malevolent group of bandits.",
        trailer: "https://www.youtube.com/watch?v=g9OAjqs6dOo",
      },
  
      {
        title: "A Million Ways to Die in the West",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTQ0NDcyNjg0MV5BMl5BanBnXkFtZTgwMzk4NTA4MTE@._V1_.jpg",
        description:
          "The film follows a cowardly frontiersman who gains courage with the help of a female gunfighter and must use his newfound skills in a confrontation with her villainous outlaw husband.",
        trailer: "https://www.youtube.com/watch?v=gVfvGKol8Ns",
      },
  
      {
        title: "The Mask of Zorro",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/5/52/Mask_of_zorro.jpg",
        description:
          "The Mask of Zorro is a 1998 American action-adventure film about a retired Zorro who trains a young thief to avenge their pasts and defeat an evil governor: ",
        trailer: "https://www.youtube.com/watch?v=2gCMcAtbfPM",
      },
  
      {
        title: "Seven Cemeteries",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoTZ7mgTyVc6t9HGozAa6EudDLkACU5CsFtA&s",
        description:
          "Seven Cemeteries is a 2024 action-thriller horror movie about a parolee who enlists the help of a Mexican witch to resurrect his old posse to save a woman's ranch from a drug lord: ",
        trailer: "https://www.youtube.com/watch?v=_tVVSIJxZ1k",
      },
  
      {
        title: "The Dead Don't Hurt",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTulsk8liHbfrOcVSFQZD7mOxemfjr9qo67XQ&s",
        description:
          "The Dead Don't Hurt is a 2023 Western film about a love story between two independent people in the 1860s American frontier: ",
        trailer: "https://www.youtube.com/watch?v=Xgv25Ni_jv0",
      },
  
      {
        title: "Heaven's Gate",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTIyODg5MjM3Nl5BMl5BanBnXkFtZTYwMTM1MjE5._V1_.jpg",
        description:
          "Heaven's Gate is a 1980 Western film about a Harvard-educated federal marshal who tries to protect European immigrants from a cattle baron plot to kill them for their land: ",
        trailer: "https://www.youtube.com/watch?v=3Q3dHN9uWTY",
      },
  
      {
        title: "City Slickers",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/3/3c/City_Slickers.jpg",
        description:
          "City Slickers is a 1991 movie about three middle-aged friends from New York City who go on a cattle drive in the Wild West to escape their midlife crises: ",
        trailer: "https://www.youtube.com/watch?v=rpxVp1g8xMQ",
      },
  
      {
        title: "Desperado",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCVx7v_qcrFS2XBQZjRzpNTTZLTYEzVdPY0g&s",
        description:
          "Desperado is a 1995 American action film about a former guitarist who seeks revenge on the drug lord who murdered his girlfriend",
        trailer: "https://www.youtube.com/watch?v=j1Fda82oxcc",
      },
  
      {
        title: "The Nightingale",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZV3WBVoA8jQm_jgS9hsZeqaOyLQXW6EFKaA&s",
        description:
          "Set in 1825 during the Black Wars in Van Diemen's Land  Clare (Aisling Franciosi) is an indentured Irish convict servant, in bondage to the cruel Lieutenant Hawkins (Sam Claflin). She is overdue her ticket of leave and wants to be with her husband and child, but Hawkins refuses to relinquish his control.",
        trailer: "https://www.youtube.com/watch?v=YuP8g_GQIgI",
      },
  
      {
        title: "Back to the Future Part III",
        poster:
          "https://m.media-amazon.com/images/I/81qDP2MHmGL._AC_UF894,1000_QL80_.jpg",
        description:
          "In November 1955, moments after witnessing Emmett 'Doc' Brown disappear in his DeLorean, Marty McFly learns that Doc was sent 70 years in the past to 1885. ",
        trailer: "https://www.youtube.com/watch?v=3C8c3EoEfw4",
      },
  
      {
        title: "The Magnificent Seven",
        poster:
          "https://play-lh.googleusercontent.com/EOjD9gDTJWhJ-HRiN2Ec1aCI6IJicBJ3CtjZC7SBQq-brUpXyomRLEz2Reu4luTOhcq5uw",
        description:
          "Looking to mine for gold, greedy industrialist Bartholomew Bogue seizes control of the Old West town of Rose Creek. With their lives in jeopardy, Emma Cullen and other desperate residents turn to bounty hunter Sam Chisolm (Denzel Washington) for help.",
        trailer: "https://www.youtube.com/watch?v=q-RBA0xoaWU",
      },
  
      {
        title: "The Highwaymen",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/6/62/The_Highwaymen_film_poster.jpeg",
        description:
          "In 1934, after two years on the run, criminals Bonnie Parker and Clyde Barrow break several associates out of Texas' Eastham Prison Farm. Texas Department of Corrections Chief Lee Simmons persuades Governor Ma Ferguson to hire former Texas Ranger Frank Hamer to track down the criminals.",
        trailer: "https://www.youtube.com/watch?v=aH6vC-BBKOc",
      },
  
      {
        title: "The Longest Ride",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6YcBeuP6xD0HQxB3blyA-IDbEArGM5cqjRg&s",
        description:
          "Former bull-riding champion Luke (Scott Eastwood) and college student Sophia (Britt Robertson) are in love, but conflicting paths and ideals threaten to tear them apart: Luke hopes to make a comeback on the rodeo circuit, and Sophia is about to embark on her dream job in New York's art world.",
        trailer: "https://www.youtube.com/watch?v=FUS_Q7FsfqU",
      },
  
      {
        title: "Open Range",
        poster:
          "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p32668_p_v11_af.jpg",
        description:
          "Open Range is a 2003 Western film about a group of men who are forced to confront a corrupt lawman and a ruthless rancher who threaten their way of life: ",
        trailer: "https://www.youtube.com/watch?v=4werfN6fQ44",
      },
    ],
  };

// Fetch the selected movie from localStorage
const movie = JSON.parse(localStorage.getItem("selectedMovie"));

// Display movie details
document.getElementById("movie-title").textContent = movie.title;
document.getElementById("movie-description").textContent = movie.description;

// Embed YouTube trailer
const trailerId = movie.trailer.split("v=")[1]; // Extract YouTube video ID
const embedUrl = `https://www.youtube.com/embed/${trailerId}`;
document.getElementById("movie-trailer").src = embedUrl;

// Comments dataset
const commentsDataset = [
  { name: "Alice", message: "Amazing movie! Loved every moment." },
  { name: "Bob", message: "The cinematography is outstanding." },
  { name: "Charlie", message: "The story was gripping and intense!" },
  { name: "Diana", message: "Great performances by the cast." },
  { name: "Eve", message: "I would watch this again anytime!" },
];

// Display predefined comments
const commentsSection = document.getElementById("comments");
function renderComments() {
  commentsSection.innerHTML = ""; // Clear existing comments
  commentsDataset.forEach((comment) => {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.innerHTML = `<strong>${comment.name}:</strong> ${comment.message}`;
    commentsSection.appendChild(commentDiv);
  });
}
renderComments();

// Fetch and display 5 random recommended movies from the same category
function displayRecommendedMovies(selectedMovie, moviesDataset) {
  // Flatten the movies into an array
  const allMovies = Object.values(moviesDataset).flat();

  // Find all movies in the same category
  const sameCategoryMovies = allMovies.filter(
    (m) => m.genre === selectedMovie.genre && m.title !== selectedMovie.title // Same genre but exclude the selected movie
  );

  // Shuffle the movies and pick 5
  const recommendedMovies = sameCategoryMovies
    // Shuffle
    .sort(() => Math.random() - 0.5)
    // pick 5 
    .slice(0, 5);

  // Display the recommended movies
  const randomMovieList = document.getElementById("random-movie-list");
  randomMovieList.innerHTML = ""; // Clear the already existing recommendations
  recommendedMovies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-container");

    const posterImg = document.createElement("img");
    posterImg.src = movie.poster;
    posterImg.alt = `${movie.title} Poster`;
    posterImg.classList.add("movie-poster");

    const title = document.createElement("h3");
    title.textContent = movie.title;

    movieCard.appendChild(posterImg);
    movieCard.appendChild(title);

    // Redirect to the movie's page on click
    movieCard.addEventListener("click", () => {
      localStorage.setItem("selectedMovie", JSON.stringify(movie));
      window.location.href = "player.html";
    });

    randomMovieList.appendChild(movieCard);
  });
}

// Display 5 random recommended movies
displayRecommendedMovies(movie, moviesDataset);

// Add new comments
function addComment() {
  const commentInput = document.getElementById("comment-input");
  const commentText = commentInput.value.trim();
  if (commentText) {
    // Add comment to the dataset
    commentsDataset.push({ name: "You", message: commentText });
    // Re-render comments
    renderComments();
    // Clear the input field after submit
    commentInput.value = "";
  }
}