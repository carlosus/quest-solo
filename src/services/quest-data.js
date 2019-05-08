const snatchGame = {
    id: 'snatch',
    title: 'Snatch Game',
    image: '#',
    description: 'It’s time for everyone’s favorite challenge: Snatch Game! Pick a celebrity to impersonate and make us laugh.',
    choices: [{
        id: 'bunny',
        description: 'Impersonate Lady Bunny!',
        result: `
        You were crude, offensive, and hilarious. In other words, perfection. You’re safe.
        `,
        LL: 25, 
        TIP: 200
    }, {
        id: 'maya',
        description: 'Impersonate Mya Angelou!',
        result: `
        Your Maya Angelou was Maya Angel-ouch. I’m sorry my dear, but you are up for elimination.
        `,
        LL: -25, 
        TIP: 0
    }, {
        id: 'adele',
        description: 'Impersonate Adele!',
        result: `
        You had us at “Hello.” Con-drag-ulations, you’re a winner, baby!
        `,
        LL: 50, 
        TIP: 500 
    }]
};

const reading = {
    id: 'reading',
    title: 'Reading Challenge',
    image: '#',
    description: 'Because reading is what? Fundamental! Put on your glasses and get ready to throw some shade, because the library is officially open.',
    choices: [{
        choices: [{
        id: 'roxy',
        description: '"I think of Roxy Andrews every morning...at the bus stop"',
        result: `
        We’re gonna need some ointment for that burn, girl!
        `,
        LL: 25, 
        TIP: 200
    }, {
        id: 'ginger',
        description: '“Ginger Minj: the true winner of season 7…of “I Didn’t Know I Was Pregnant.”',
        result: `
        Pop the corn and feed the children, ‘cause you left us BEGGING for more, comedy queen.
        `,
        LL: 50, 
        TIP: 500 
    }, {
        id: 'orange',
        description: '“Look how fuckin’ orange you look, girl.”',
        result: `
        That was a low blow, and I’m not joking, betch.
        `,
        LL: -25, 
        TIP: 0
    }]
};

const lipsync = {
    id: 'lipsync',
    title: 'Lip Sync for Your Life!',
    image: '#',
    description: 'Ladies, the time has come…for you to lip-sync for. Your. LIFE! Good luck, and DON’T fuck it up.',
    choices: [{
        id: 'ariana',
        description: '"Greedy" by Ariana Grande',
        result: `
        What part of lip-sync do you not understand? You gotta know your words, hunty.
        `,
        LL: -25, 
        TIP: 0
    }, {
        id: 'rihanna',
        description: '“Shut Up and Drive" by Rihanna',
        result: `
        Ladies, THAT was what we call a lip-sync for you life. Con-drag-ulations, you’re a winner, baby!
        `,
        LL: 50, 
        TIP: 500 
    }, {
        id: 'aretha',
        description: '“You Make Me Feel (Like a Natural Woman)” by Aretha Franklin',
        result: `
        That was a low blow, and I’m not joking, betch.
        `,
        LL: 25, 
        TIP: 200
    }]
};