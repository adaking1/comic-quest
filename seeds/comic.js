const { Comic } = require('../models/');

const comicData = [

{ 
    title: 'White Widow #1',
    writer: 'Sara Gailey',
    published_on: 'November 01, 2023',
    filename: 'images/White.Widow.jpeg',
    description:
    "Yelena Belova returns! Superspy. Rogue agent. Shadow of the Black Widow. Yelena Belova has been many things, but striking out as a hero in her own right is new to her. Now that she's finally free to choose her own path, who will she become? Sarah Gailey (Buffy the Vampire Slayer, Eat the Rich) joins forces with Alessandro Miracolo (Obi-Wan, Yoda) for a groundbreaking new chapter in the life of one of Marvel's most enigmatic antiheroes",
},
{ 
    title: 'Venom #27',
    writer: 'Torunn Gronbekk',
    published_on: 'November 01, 2023',
    filename: 'images/Venom.jpg',
    description:
    "THE VENOM OF THE WIDOW! After the birth of an all-new symbiote, what familiar face will cross its path and become its first host?! And will that host be able to resist the symbiote's corrupting and violent influence? Perhaps the bigger question: Will the symbiote be able to survive THEIRS?!",
},
{ 
    title: 'X-Men #28',
    writer: 'Gerry Duggan',
    published_on: 'November 01, 2023',
    filename: 'images/X-Men.jpeg',
    description:
    "HOT AND HEAVY! Juggernaut has come a long way from his beginnings as a bully transformed into an unstoppable foe of the X-Men. In fact, he'd recently become one of mutantkind's best human allies. So why is he trying to kill Firestar?",
},
{ 
    title: 'Spider Boy #1',
    writer: 'Dan Slott',
    published_on: 'November 01, 2023',
    filename: 'images/Spider-Boy.jpeg',
    description:
    "SECRETS OF SPIDER-BOY REVEALED! Spinning out of the pages of DAN SLOTT and MARK BAGLEY's monumental SPIDER-MAN run - here comes the spectacular SPIDER-BOY! After the events of THE END OF THE SPIDER-VERSE, Spider-Boy's secret history as Spider-Man's sidekick was nearly forgotten forever. But now those mysteries will be revealed while they embark on exciting new adventures…TOGETHER!",
    featured: 'true'
},
{ 
    title: 'Magento #4',
    writer: 'J.M. DeMatteis',
    published_on: 'November 01, 2023',
    filename: 'images/Magneto.jpeg',
    description:
    "IS HE EVIL MUTANT, OR IS HE HERO...OR IS HE BOTH? MAGNETO must come to grips with his past as the Head of the Brotherhood of Evil Mutants, as well as his present as the Headmaster of the Xavier School's NEW MUTANTS! What is the TRUE destiny of Erik Lehnsherr? How can these two aspects co-exist in the same man? Don't miss the astounding final chapter of the character-defining saga by J.M. DeMatteis (SPIDER-MAN: Kraven's Last Hunt, CAPTAIN AMERICA) and Todd Nauck (X-MEN LEGENDS, AMAZING SPIDER-MAN)!",
},
{ 
    title: 'Deadpool #10',
    writer: 'Alyssa Wong',
    published_on: 'August 23, 2023',
    filename: 'images/Deadpool.jpeg',
    description:
    "HEART-BROKEN! Things aren't looking great for Deadpool and his new paramour, Valentine Vuong. You know how it can be in love - you just want to be together, but there is always some secret society of killers that gets in the way and your heart and/or glass arms get shattered.",

},
{ 
    title: 'Black Panther',
    writer: 'Eve Ewing',
    published_on: 'November 15. 2023',
    filename: 'images/Black-Panther.jpeg',
    description:
    "A SECRET FROM WAKANDA'S PAST THREATENS TO DESTROY ITS FUTURE! Wakandan crime lord Baba Nkisu has summoned a deadly killer known as Kivu'Ma, but he may have gotten more than he bargained for. And Wakanda's history holds the key to the dark power that T'Challa must now defend his country from!",
},
{ 
    title: 'Captain America #750',
    writer: 'Cody Ziglar',
    published_on: 'July 05, 2023',
    filename: 'images/Captain-America.jpeg',
    description:
    "SPECIAL ISSUE #750! THE CAPTAINS AMERICA MOURN THEIR FALLEN! After the harrowing events of CAPTAIN AMERICA: COLD WAR, the Captains America return home to mourn their fallen - and strive to honor the power of legacy. Plus: The secret origin of Sam Wilson's new shield revealed, and a bold new direction for Sharon Carter! In honor of 750 issues of CAPTAIN AMERICA, a team of fan-favorite guest writers join forces with superstar artists to spin timeless tales celebrating the epic history of the star-spangled hero! Don't miss this jam-packed oversized issue!",
    featured: 'true'

},
{ 
    title: 'Ant-Man #4',
    writer: 'Al Ewing',
    published_on: 'October 05, 2022',
    filename: 'images/Ant-Man.jpeg',
    description:
    "Who is the mysterious Ant-Man of the future who the past Ant-Men keep bumping into? Find out here as the Ant-Man of 2549 recruits Hank Pym, Eric O’Grady and Scott Lang to take on a godlike Ultron! Don’t miss this epic anniversary finale as the Ant-Man of past, present and future come together to save the world!",
},
{ 
    title: 'Captain Marvel',
    writer: 'Alyssa Wong',
    published_on: 'October 25, 2023',
    filename: 'images/Captain-Marvel.jpeg',
    description:
    "HIGHEST, FURTHEST, FASTEST! The Captain gets a permanent glow-up designed by superstar artist Jen Bartel! And that's not all that's changed. Brand-new look - brand-new creative team - and a brand-new status quo. Carol Danvers is one of the powerhouses of the Marvel Universe, a woman capable of harnessing the energy of the sun. So if you're coming for Earth? She's the first one you take off the board. Someone's figured just how to do just that. Introducing a new supporting cast and villains both beloved and dangerously fresh, Alyssa Wong and Jan Bazaldua's exhilarating series kicks off here!",

},
{ 
    title: 'Wolverine #38',
    writer: 'Benjamin Percy',
    published_on: 'October 11, 2023',
    filename: 'images/Wolverine.jpeg',
    description:
    "REUNITED - CAPTAIN AMERICA AND WOLVERINE! You know those old friends, the ones that go way, way back who you can always rely on? That's STEVE ROGERS to LOGAN, whose friendship goes back to WORLD WAR II! It only stands to reason that as WOLVERINE faces the fallout from FALL OF X, that CAPTAIN AMERICA has his six! But as ORCHIS rises and LEGACY HOUSE takes advantage of the situation, who will fall? LAST MUTANT STANDING continues!",

},
{ 
    title: 'The Amazing Spider-Man #36',
    writer: 'Zeb Wells',
    published_on: 'October 25, 2023',
    filename: 'images/Spider-Man.jpeg',
    description:
    'Spider-Man has never gone this dark. Now the consequences are unraveled. Will New York ever look at him the same way again?',

},
{ 
    title: 'Carnage #14',
    writer: 'Alex Paknadel',
    published_on: 'June 14, 2023',
    filename: 'images/Carnage.jpeg',
    description:
    "CARNAGE REIGNS - Part FIVE! As Cletus Kasady's hunger has grown, so has his ambition. With a certain wall-crawling hero dead in his wake.",
},
{ 
    title: 'Daredevil #2',
    writer: 'Saladin Ahmed',
    published_on: 'October 18, 2023',
    filename: 'images/Daredevil.jpeg',
    description:
    "THE NEW ERA OF DAREDEVIL CONTINUES! Industry stars SALADIN AHMED and AARON KUDER's next exciting chapter of DAREDEVIL's new era continues following Daredevil's shocking status quo revealed in issue #1! Corruption is tearing Hell's Kitchen apart! Those who have sworn to protect the city have betrayed their oaths, and Matt Murdock is seeking righteous retribution, one billy club to the face at a time! Daredevil's losing allies left and right…so what does that mean for the love of his life, ELEKTRA?!",

},
{ 
    title: 'Thor #34',
    writer: 'Torunn Gronbekk',
    published_on: 'May 24, 2023',
    filename: 'images/Thor.jpeg',
    description:
    "THOR, DOCTOR DOOM, and…THANOS?! While Thor races Doctor Doom through time before Doom can tear reality itself asunder in his latest grab for power, they find Thanos at the heart of it all, finally revealing the power struggle that brought Thor's grandfather, Bor, and Thanos to all-out war - the ultimate weapon, hidden away for millennia. But Doom will stop at nothing to control it!",
    featured: 'true'
},
{ 
    title: 'Doctor Strange #9',
    writer: 'Jed Mackley',
    published_on: 'November 01, 2023',
    filename: 'images/Dr.Strange.jpeg',
    description: 
    " With General Strange's endgame in sight, Doctor Strange must confront the man he could have been. But everyone has their own agenda… Can the Vishanti be trusted? Is W.A.N.D. capable of changing for the better, or will they return to their black-ops roots? Which Strange will Clea side with? It all comes to a head as the battle for the soul of Stephen Strange begins!"
},
{ 
    title: 'Falcon',
    writer: 'Rodney Barnes',
    published_on: 'May 23, 2018',
    filename: 'images/Falcon.jpeg',
    description: 
    "While the Falcon searches frantically for both the Patriot and Misty Knight, who've been captured by Deacon Frost, a vampire horde feeds off of the helpless citizens of Brooklyn!"

},
{ 
    title: 'Ghost Rider #16',
    writer: 'Benjamin Percy',
    published_on: 'July 26, 2023',
    filename: 'images/Ghost-Rider.jpeg',
    description: 
    "Over the years, the same hitchhiker has found Danny Ketch, Robbie Reyes and now Johnny Blaze! Join us for this stand-alone tale of terror that threatens the past present, and future of the Ghost Riders…"

},
{ 
    title: 'Avengers #33',
    writer: 'Brian Michael Bendis',
    published_on: 'Novemeber 07, 2012',
    filename: 'images/Avengers.jpeg',
    description: 
    "Two classic Avengers return for the first time in years, but does this modern world really need them? A giant shift is on the horizon as the Avengers come to terms with themselves as a team and a family. Plus: Hydra with alien tech? Uh oh!"

},
{ 
    title: 'Miles Morales: Spider-Man #11',
    writer: 'Cody Ziglar',
    published_on: 'October 18, 2023',
    filename: 'images/Miles.jpeg',
    description: 
    "A BLADE BITES IN BROOKLYN! A sinister force has infiltrated SPIDER-MAN's new neighborhood. Thousands are at risk, and HIGHTAIL and the CAPE KILLERS already have Miles on the ropes. His only hope may lie in vampire hunter BLADE, who has business in Brooklyn. But Blade and Spidey may not exactly see eye to eye on the current predicament. One that Blade really wants to sink his teeth into!"

},



];



const seedComics = async () => await Comic.bulkCreate(comicData)

module.exports = seedComics;