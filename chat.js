    const fakeUsers = [
        "Guest_1902", "Guest_2321", "Guest_1850", "Guest_1284", "ShadowNinja", "ShadowNigga", "RNG_God", "NoobSlayer99", "LuckyDuck", "LuckyFuck", 
        "bumcracker67", "naperiggerson", "EFN", "ERN", "diddysbumhole", "wemby'slittletwink", "CP_WATCHER", "Ray_Piste", "Peter_File", "MrCoolJr", 
        "MrCoolSr", "Drake's_Fat_Dick", "gothmommycracker", "NiggaBeater", "WSpeed_Editz", "ILoveMinors", "StrongestIsraeliSoldier", "IDF_bootlicker", 
        "Big_Yahu", "Jewish_City_Boy", "i_have_scat_fetish", "piss_drinking_4ever", "sweatyArmpitLicker", "I_touch_boys", "GreenNiggaGreen", 
        "buttholelicker", "i_love_littleGirls", "4yo_fucker", "PencilUpMyUrethra", "i_love_buttholes", "NiggaPooper4000", "67buttplugs_up_my_ass", 
        "Liggy", "swerxl", "i_eat_poop", "PissDrinker67", "67_aura_buttkisser", "NIGGERNIGGERNIGGER", "epstien's_returning_customer", 
        "ISpent67MilOnPornhub", "Child_Pornographer", "touchingLittleBoysRN", "littleGirls_littlePussy", "leniggler", "iPegBoys", "StrapOnDildo", 
        "BiggestButtplug", "CornyMasterBaiter67", "bigbrolignezh", "iranianjew", "fuckdonaldotrumpo", "niggaToucher", "StinkyDihCheese", "xxxlButtPlugWearer",
        "TrollingRapist", "CSAM_lover", "IJerkToNTR", "Donald_Plump", "Hitler'sGoodLittleJew", "privateIslandOwner", "The_Big_Stien", "einstien'sIsland", 
        "KKKforever", "BlackJew", "gayBBCsex", "anal_with_arcane", "i_would_crack_overvoid", "voidmark_sucks", "fuck_chronobind", "dihSucker4000", "niggaGay",
        "racialSlurs4ever", "FaggotFetishFun", "gayNiggaFag", "gayNiggaButtplug", "MonsterDildoRider", "sexInPublic", "kindergartenRapist", "anal_sex", 
        "funnyJew", "goldDigger_faggotNigger", "suck_dih_for_1$", "ProficientProstitute", "AdeptAtAnal", "ExpertElfFucker", "RetardedRapist", "67Nigger67",
        "XxxNIGGER420xxX", "BoyToucher", "epstien>einstien", "leBoobies", "bumbumSlapper", "BlissfulBlowjobs", "RavagingRimjobber", "lemme_eyp", "i_am_Jewish"
    ];

        const CHAT_TRIGGERS = [
            {
                keywords: ["hello", "hi", "hey", "sup", "yo", "hiya", "wassup"],
                responses: [
                    "yo",
                    "hey what's good",
                    "sup",
                    "hi lol",
                    "YOOO",
                    "finally someone talking in here",
                    "wassup",
                ]
            },
            {
                keywords: ["luck", "lucky", "unlucky"],
                responses: [
                    "bro my luck is literally cooked",
                    "luck doesn't exist in this game only pain",
                    "just buy a god potion lmao",
                    "luck multiplier goes brrr",
                    "prestige and come back with actual luck",
                    "i rolled common 47 times in a row",
                ]
            },
            {
                keywords: ["roll", "rolling", "rolled", "pulled", "pull", "pulling"],
                responses: [
                    "keep rolling bro it'll hit eventually",
                    "auto roll is right there bro use it",
                    "i've been rolling for 3 hours send help",
                    "bro what did you roll",
                    "rolling is life",
                    "use auto roll and go touch grass",
                ]
            },
            {
                keywords: ["rare", "legendary", "mythic", "epic"],
                responses: [
                    "lowkey mid",
                    "no way actual L",
                    "suck me bro wtf",
                    "bro you are ass at this game",
                    "stop flexing literally nothing omg",
                    "nigga dog fr",
                ]
            },
            {
                keywords: ["prestige", "prestiged", "prestiging"],
                responses: [
                    "how many times you prestige?",
                    "prestige is so worth it tbh",
                    "just prestiged and my luck is cooked lol",
                    "prestige grind never ends",
                    "i'm scared to prestige i'll lose everything",
                    "bro prestige is the whole game",
                ]
            },
            {
                keywords: ["blood ascendant", "azathoth", "the last", "the first", "null sovereign", "time revenant"],
                responses: [
                    "NO WAY YOU GOT THAT",
                    "bro is cooked fr",
                    "carry me to that tier please",
                    "WHAT THE HELL",
                    "that's actually insane dude",
                    "the game is real for you and not for me apparentl",
                ]
            },
            {
                keywords: ["he knows", "101", "id 101", "known"],
                responses: [
                    "...",
                    "don't talk about that",
                    "bro how do you even know about that",
                    "pretend you didn't say that",
                    "👁️",
                    "some things are better left unknown",
                    "bro found out huh",
                ]
            },
            {
                keywords: ["i don't know", "i dont know", "unknown", "id 100", "100"],
                responses: [
                    "yeah same",
                    "none of us know bro",
                    "the not knowing is the point i think",
                    "bro rolled the void and came back confused",
                    "???",
                    "deep",
                ]
            },
            {
                keywords: ["grief", "denial", "anger", "bargaining", "depression", "depressed", "acceptance"],
                responses: [
                    "bro is going through it",
                    "the stages hit different in rng games",
                    "it's just a game bro it's just a game",
                    "therapy speedrun any%",
                    "we all been there fr",
                    "acceptance arc incoming",
                ]
            },
            {
                keywords: ["potion", "elixir", "serum", "brew", "tonic", "liquid"],
                responses: [
                    "which potion you running rn",
                    "void elixir hits different",
                    "potions are kinda busted tbh",
                    "buy the chrono one and never look back",
                    "bro blew his whole bank on potions again",
                    "buy the eldritch one",
                    "i would drink your liquid straight from the source"
                ]
            },
            {
                keywords: ["help", "how", "what", "guide", "tips"],
                responses: [
                    "there is no guide. only suffering.",
                    "upgrade luck, buy potions, pray",
                    "i can't help you but i can relate",
                    "bro just roll lmao",
                    "tip: close the tab and live your life",
                    "i can help you with something else"
                ]
            },
            {
                keywords: ["pity", "pity counter"],
                responses: [
                    "pity system is actually a lifesaver",
                    "let that pity counter cook bro",
                    "100 rolls for the pity bump let's go",
                    "i forgot pity existed lmao",
                    "can you pity my little dick and let me lick your butthole"
                ]
            },
            {
                keywords: ["nigger", "niggers", "nigga", "niggas", "black", "blacks", "slave", "watermelon", "monkey", "monkeys"],
                responses: [
                    "still not as bad as the jews",
                    "all they do is steal",
                    "nigganigganigganigga",
                    "blacks have the worst porn",
                    "gay bbc sex"
                ]
            },
            {
                keywords: ["why", "bruh", "bro"],
                responses: [
                    "bro.",
                    "same question every day",
                    "no one knows why",
                    "this game does things to people",
                    "i felt that",
                    "valid",
                    "why arent you in bed with me already"
                ]
            },
            {
                keywords: ["lol", "lmao", "lmfao", "haha", "hahaha", "💀", "😭"],
                responses: [
                    "😭",
                    "bro is laughing through the pain",
                    "💀💀",
                    "it's not funny but also it is",
                    "lmaooo fr",
                    "this game is actually hilarious",
                    "hahahahahahah now suck me off right now"
                ]
            },
            {
                keywords: ["cope", "copium", "seethe", "dilate", "touch grass", "rent free"],
                responses: [
                    "massive copium overdose",
                    "seethe harder lil bro",
                    "touching grass won't fix your rolls",
                    "you're living in my head rent free AND still losing",
                    "cope",
                    "dilate + ratio + L",
                ]
            },
            {
                keywords: ["flex", "flexing", "brag", "bragging", "i just got", "i got"],
                responses: [
                    "brag detected, opinion rejected",
                    "nobody asked for the flex lil bro",
                    "that's not a flex that's just sad",
                    "flexing this bum ahh shit in 2026 is crazy",
                    "stop the cap",
                    "post screenshot or it didn't happen (you won't)",
                ]
            },
            {
                keywords: ["addicted", "addiction", "quit", "quitting", "touching grass", "log off"],
                responses: [
                    "you aint quitting shit lol",
                    "addiction arc is peak",
                    "log off challenge (level impossible)",
                    "touch grass = cope",
                    "you're 47 hours deep you aint quitting",
                    "same bro im cooked too",
                ]
            },
            {
                keywords: ["dev", "devs", "update", "patch", "when update", "roadmap"],
                responses: [
                    "dev hate us fr",
                    "update tomorrow trust",
                    "they abandoned the game 3 years ago",
                    "when dev add its W",
                    "patch notes: bug fixes and more pain",
                    "just add global pity already",
                    "i dont like simga, hes a bad dev"
                ]
            },
            {
                keywords: ["lag", "server", "crash", "disconnect", "rollback"],
                responses: [
                    "skill issue + lag",
                    "servers held together by duct tape",
                    "rollback my rolls too pls",
                    "so laggy man",
                    "game crashed right before pity too",
                    "cant even pull azathoth befor servers leave",
                    "just happened to me too we're cooked",
                ]
            },
        ];

        const CHAT_AMBIENT = [
            "just keep rolling",
            "anyone else been here for like 3 hours",
            "this game is an addiction at this point",
            "what's the highest anyone here has gotten",
            "imagine getting the same thing 100 times in a row",
            "the grind never stops fr",
            "bro i'm at work rolling on my phone rn",
            "is there even an end to this fuckass game",
            "i came back after a week and my luck was reset man",
            "should upgrade luck or rape little boys",
            "at what point do we just accept this game is a problem",
            "my prestige count is embarrassing fam",
            "anyone else just watching the auto roll like it's porn",
            "i genuinely can't stop this bullshit game",
            "i suck epstien cock",
            "nigga shut up",
            "kill yourself faggot",
            "fuck the jews",
            "i would peg donald trump",
            "someone kill benjamin netanyahu",
            "why cant we delete israel",
            "L jews",
            "i wanna eat somebody's poop straight from the source",
            "i just beat my meat to limitbreaker and nutted all over my screen",
            "i wanna to get dominated and pegged by amaterasu",
            "i want overvoid to use her tentacles and rape my twink butthole"
        ];

        const BOT_CONVERSATIONS = [

            {
                speakers: 2, gapMs: [2000, 4500],
                messages: [
                    { speaker: 0, text: "bro i just rolled infinity engine 50 times in a row" },
                    { speaker: 1, text: "tf?" },
                    { speaker: 0, text: "i'm not even laughing anymore i'm just staring at the screen" },
                    { speaker: 1, text: "have you tried using a better potion" },
                    { speaker: 0, text: "but im using the best potion already, the major luck one" },
                    { speaker: 1, text: "scroll down dumbass" },
                    { speaker: 0, text: "holy fuck" },
                    { speaker: 1, text: "just drink cyanide bro" },
                ]
            },

            {
                speakers: 3, gapMs: [1800, 3500],
                messages: [
                    { speaker: 0, text: "wait what's actually the rarest thing in the game" },
                    { speaker: 1, text: "the stuff at the top of the list obviously" },
                    { speaker: 2, text: "nigga you stupid" },
                    { speaker: 0, text: "aw man" },
                    { speaker: 2, text: "the fuck" },
                    { speaker: 1, text: "then whats the best" },
                    { speaker: 2, text: "the stuff at the end of the list" },
                    { speaker: 0, text: "ah thanks dude" },
                    { speaker: 2, text: "your welcome" },
                    { speaker: 0, text: "that was sarcasm, fucking jewish faggot" },
                ]
            },

            {
                speakers: 2, gapMs: [2500, 5000],
                messages: [
                    { speaker: 0, text: "chat how much hours we got otg" },
                    { speaker: 1, text: "don't ask me that" },
                    { speaker: 0, text: "ts cant be that bad twin✌️" },
                    { speaker: 1, text: "my gf broke up with me bc i refused to crack so i could grind" },
                    { speaker: 0, text: "game > goon" },
                    { speaker: 1, text: "real work" },
                ]
            },

            {
                speakers: 2, gapMs: [2000, 4000],
                messages: [
                    { speaker: 0, text: "auto roll on or off?" },
                    { speaker: 1, text: "turn it off, holding enter is faster and if you have it off it wont skip good rolls" },
                    { speaker: 0, text: "ah i see" },
                    { speaker: 1, text: "but if you have it on, you get one extra roll per second" },
                    { speaker: 0, text: "💀" },
                    { speaker: 1, text: "what" },
                    { speaker: 0, text: "idk" },
                ]
            },

            {
                speakers: 3, gapMs: [1500, 3000],
                messages: [
                    { speaker: 0, text: "anyone else feel like the pity counter doesn't exist" },
                    { speaker: 1, text: "it exists, its just always above 100" },
                    { speaker: 2, text: "yeah am at 103k pity" },
                    { speaker: 0, text: "how the fuck are you at 103k pity" },
                    { speaker: 1, text: "how much does your next upgrade cost" },
                    { speaker: 2, text: "11" },
                    { speaker: 0, text: "nigga what" },
                    { speaker: 1, text: "go upgrade it RIGHT NOW you jew" },
                    { speaker: 0, text: "NETANYAHU🇮🇱🇮🇱🇮🇱🇮🇱" },
                ]
            },

            {
                speakers: 2, gapMs: [2000, 4500],
                messages: [
                    { speaker: 0, text: "prestige worth it or nah" },
                    { speaker: 1, text: "yes" },
                    { speaker: 0, text: "but you lose everything right" },
                    { speaker: 1, text: "yes but the perma luck boost makes it easier to get the last ones" },
                    { speaker: 0, text: "but i have all of the quads for the first 3 status effect ones" },
                    { speaker: 1, text: "let go twin theres a longer path to run✌️" },
                    { speaker: 0, text: "thats lowk kinda deep" },
                    { speaker: 1, text: "im gonna put in you really really deep" },
                    { speaker: 0, text: "nigga what" },
                ]
            },

            {
                speakers: 2, gapMs: [1800, 3800],
                messages: [
                    { speaker: 0, text: "what potions are you running rn" },
                    { speaker: 1, text: "the void one" },
                    { speaker: 0, text: "what did you get" },
                    { speaker: 1, text: "have 159 null sovereigns but no obliterated voids or the quad" },
                    { speaker: 0, text: "coach what are we doing here" },
                    { speaker: 1, text: "idk mans" },
                    { speaker: 0, text: "pray to god twin maybe your luck will get better✌️😭" },
                    { speaker: 1, text: "i really should" },
                ]
            },

            {
                speakers: 3, gapMs: [2000, 4000],
                messages: [
                    { speaker: 0, text: "guys i think my game glitched" },
                    { speaker: 1, text: "what happened" },
                    { speaker: 0, text: "i rolled something and the screen went black for a second so i refreshed the page" },
                    { speaker: 2, text: "...what was the item" },
                    { speaker: 0, text: "idk it i refreshed before i could read it" },
                    { speaker: 2, text: "nigga you fucking dumbass" },
                    { speaker: 1, text: "why the fuck did you refresh you jew" },
                    { speaker: 2, text: "real nigga, it's always the jews messing stuff up" },
                    { speaker: 0, text: "im hindu" },
                    { speaker: 1, text: "you mean hin-jew?"},
                    { speaker: 0, text: "kys" },
                ]
            },

            {
                speakers: 2, gapMs: [2200, 4200],
                messages: [
                    { speaker: 0, text: "i've been at this for 6 hours" },
                    { speaker: 1, text: "go to sleep bro" },
                    { speaker: 0, text: "can't. i'm so close i can feel it" },
                    { speaker: 1, text: "you always say that" },
                    { speaker: 0, text: "this time is different" },
                    { speaker: 1, text: "it's never different" },
                    { speaker: 0, text: "...okay maybe not but WHAT IF IT IS" },
                    { speaker: 1, text: "fine. i'll stay up with you." },
                    { speaker: 0, text: "you're a real one" },
                ]
            },

            {
                speakers: 3, gapMs: [1500, 3200],
                messages: [
                    { speaker: 0, text: "hey guys just started, how do i get good stuff fast" },
                    { speaker: 1, text: "lmao" },
                    { speaker: 2, text: "welcome to the suffering" },
                    { speaker: 0, text: "what?" },
                    { speaker: 1, text: "there is no fast. only grinding." },
                    { speaker: 2, text: "upgrade luck first. then just roll. and buy potions. forever." },
                    { speaker: 0, text: "that sounds beautiful" },
                    { speaker: 1, text: "yes" },
                    { speaker: 2, text: "you'll hate it in 3 days" },
                ]
            },
        
            {
                speakers: 2, gapMs: [1800, 3800],
                messages: [
                    { speaker: 0, text: "yo why do mexicans always got 12 kids" },
                    { speaker: 1, text: "cuz they cant afford condoms you see" },
                    { speaker: 0, text: "nah its cuz they tryna build an army to take back texas" },
                    { speaker: 1, text: "lmao build a wall around your mom first shes the real border hopper" },
                    { speaker: 0, text: "fuck you nigga" },
                    { speaker: 1, text: "id rather fuck your dad hes got that tight jewish ass" },
                    { speaker: 0, text: "nigga pause right there" },
                ]
            },

            {
                speakers: 3, gapMs: [1500, 3200],
                messages: [
                    { speaker: 0, text: "trump 2024 or biden the pedo" },
                    { speaker: 1, text: "trump gonna grab your pussy faggot" },
                    { speaker: 2, text: "biden already sniffed it" },
                    { speaker: 0, text: "at least trump aint falling asleep mid dick suck" },
                    { speaker: 1, text: "youd wake him up with your micro peen" },
                    { speaker: 2, text: "nigga you got rice dick energy" },
                    { speaker: 0, text: "kys chink" },
                    { speaker: 1, text: "after i fuck your sister" },
                    { speaker: 2, text: "she already got aids from your mom" },
                ]
            },

            {
                speakers: 2, gapMs: [2000, 4200],
                messages: [
                    { speaker: 0, text: "blacks commit 50% of crimes with 13% population" },
                    { speaker: 1, text: "yeah cuz whites too busy spitting slurs on reddit" },
                    { speaker: 0, text: "at least we can afford social media" },
                    { speaker: 1, text: "you look at kids pussies on social media" },
                    { speaker: 0, text: "nah thats arabs with their child brides" },
                    { speaker: 1, text: "you mean like your uncle did to you?" },
                    { speaker: 0, text: "shut up faggot ill bend you over like netanyahu does palestine" },
                    { speaker: 1, text: "cum in me daddy bibi 🇮🇱🇮🇱" },
                ]
            },

            {
                speakers: 3, gapMs: [1600, 3400],
                messages: [
                    { speaker: 0, text: "why are indians so smelly" },
                    { speaker: 1, text: "curry and no deodorant" },
                    { speaker: 2, text: "nah its the cow piss they drink" },
                    { speaker: 0, text: "hindu niggas wildin" },
                    { speaker: 1, text: "you mean hin-jew? they cheap as fuck too" },
                    { speaker: 2, text: "id still fuck a bollywood bitch tho" },
                    { speaker: 0, text: "with that hairy pussy? nah" },
                    { speaker: 1, text: "better than your bald micropenis" },
                    { speaker: 2, text: "kys" },
                ]
            },

            {
                speakers: 2, gapMs: [2200, 4400],
                messages: [
                    { speaker: 0, text: "gays shouldnt adopt kids" },
                    { speaker: 1, text: "why not they give the best head" },
                    { speaker: 0, text: "nigga what" },
                    { speaker: 1, text: "adopt me daddy ill suck you dry" },
                    { speaker: 0, text: "pause thats pedo shit" },
                    { speaker: 1, text: "only if youre under 18 faggot" },
                    { speaker: 0, text: "im 12" },
                    { speaker: 1, text: "perfect come here twink" },
                ]
            },

            {
                speakers: 3, gapMs: [1700, 3600],
                messages: [
                    { speaker: 0, text: "kamala harris aint black she indian" },
                    { speaker: 1, text: "she black when she suckin dick tho" },
                    { speaker: 2, text: "nah she swallows like a jew hoards gold" },
                    { speaker: 0, text: "netanyahu approved 🇮🇱🇮🇱" },
                    { speaker: 1, text: "shed peg trump with a strap on" },
                    { speaker: 2, text: "trump would love it hes a bottom bitch" },
                    { speaker: 0, text: "all politicians gay af" },
                    { speaker: 1, text: "except putin he raw dogs bears" },
                    { speaker: 2, text: "and twinks" },
                ]
            },

            {
                speakers: 2, gapMs: [1900, 3900],
                messages: [
                    { speaker: 0, text: "muslims blowing shit up again" },
                    { speaker: 1, text: "yeah like whites blow loads in kindergartens" },
                    { speaker: 0, text: "at least we dont fuck goats" },
                    { speaker: 1, text: "you fuck your cousin tho" },
                    { speaker: 0, text: "shes hot" },
                    { speaker: 1, text: "with that inbred face? nah" },
                    { speaker: 0, text: "better than your sandnigger mom" },
                    { speaker: 1, text: "she got bombed by israel anyway" },
                ]
            },

            {
                speakers: 3, gapMs: [1400, 3000],
                messages: [
                    { speaker: 0, text: "asians eat dogs" },
                    { speaker: 1, text: "whites eat ass" },
                    { speaker: 2, text: "blacks eat pussy like watermelon" },
                    { speaker: 0, text: "jews eat foreskin" },
                    { speaker: 1, text: "gays eat dick" },
                    { speaker: 2, text: "and im gay so come here" },
                    { speaker: 0, text: "nigga no" },
                    { speaker: 1, text: "yes bend over faggot" },
                    { speaker: 2, text: "all of you need to get bombed" },
                ]
            },

            {
                speakers: 2, gapMs: [2100, 4300],
                messages: [
                    { speaker: 0, text: "feminists want equal rights but not equal lefts" },
                    { speaker: 1, text: "id left hook your mom" },
                    { speaker: 0, text: "she'd moan" },
                    { speaker: 1, text: "like you do when i peg you" },
                    { speaker: 0, text: "what the fuck" },
                    { speaker: 1, text: "you love it twink" },
                    { speaker: 0, text: "im straight" },
                    { speaker: 1, text: "straight to my bed" },
                ]
            },

            {
                speakers: 3, gapMs: [1800, 3700],
                messages: [
                    { speaker: 0, text: "holocaust was fake" },
                    { speaker: 1, text: "yeah like your dads love for you" },
                    { speaker: 2, text: "or your virginity" },
                    { speaker: 0, text: "i lost it to a jew" },
                    { speaker: 1, text: "cheap bitch" },
                    { speaker: 2, text: "netanyahu circumcised your dick" },
                    { speaker: 0, text: "🇮🇱 and i liked it 🇮🇱" },
                    { speaker: 1, text: "gay ass" },
                    { speaker: 2, text: "literally" },
                ]
            },

            {
                speakers: 3, gapMs: [2100, 4500],
                messages: [
                    { speaker: 0, text: "are you from wdps" },
                    { speaker: 1, text: "ye" },
                    { speaker: 2, text: "yeah" },
                    { speaker: 0, text: "out of everyone who would you crack" },
                    { speaker: 1, text: "avi" },
                    { speaker: 2, text: "real" },
                    { speaker: 0, text: "we should tag team crack him sometime" },
                    { speaker: 1, text: "yes" },
                    { speaker: 2, text: "foursome" },
                ]
            },

        ]; 