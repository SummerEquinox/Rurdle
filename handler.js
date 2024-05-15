// JS Handler for project
// Yeah, there's lots of magic numbers. I'm a magician. Whoopty-doo.

// Constants
const gameFrame = document.getElementById('game-frame');
const acceptedKeys = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'Backspace', 'Enter'
];

const colorSet = {
    green : "#00FF00",
    yellow : "#E5DE00",
    red : "#FF2C2C"
};

const Database = ["apple", "baker", "cabin", "dance", "eager", "faith", "giant", "happy",
"image", "joker", "knack", "lemon", "mango", "noble", "ocean", "pearl",
"queen", "raven", "spice", "tease", "ultra", "vivid", "wheat", "xenon",
"yacht", "zebra", "abode", "brave", "charm", "drove", "elbow", "flame",
"grove", "hinge", "igloo", "jolly", "karma", "lodge", "mirth", "novel",
"onset", "pride", "quilt", "react", "shore", "tiger", "unity", "vocal",
"whale", "xerox", "yield", "zonal", "actor", "blaze", "crest", "doubt",
"eagle", "feast", "grape", "haste", "infer", "judge", "kneel", "leapt",
"motel", "naive", "orbit", "piano", "quest", "rider", "swarm", "token",
"urban", "viper", "wiser", "xylem", "youth", "zones", "adapt", "brief",
"cower", "diver", "evoke", "flare", "glide", "haste", "inbox", "junta",
"knead", "linen", "moist", "nerdy", "oxide", "pulse", "quill", "rogue",
"stoic", "timer", "untie", "vixen", "wrist", "xenon", "yearn", "zesty",
"alien", "brisk", "clamp", "drill", "envoy", "flock", "grand", "haste",
"index", "jaunt", "kneel", "light", "moose", "nerve", "olive", "pouch",
"quilt", "reign", "stark", "twirl", "umbra", "verve", "wacky", "xenon",
"yodel", "zonal", "adept", "bride", "creep", "drift", "epoch", "freak",
"grill", "heist", "inlet", "jumpy", "knife", "lemon", "medal", "nymph",
"ovary", "plume", "query", "retro", "sheer", "table", "unify", "vivid",
"wager", "xerox", "young", "zebra", "afire", "brine", "craft", "drown",
"evade", "flume", "grind", "hoist", "input", "joker", "kneel", "leper",
"minor", "noise", "orbit", "plumb", "quote", "renew", "slash", "tramp",
"ultra", "virus", "weary", "xenon", "yacht", "zonal", "alike", "bring",
"churn", "draft", "ethos", "fuzzy", "grasp", "hinge", "inept", "jolly",
"kneel", "lager", "model", "nexus", "oxide", "punch", "quart", "relax",
"sweep", "twist", "upset", "valve", "whirl", "xenon", "yield", "zesty",
"amuse", "brisk", "crank", "drive", "extra", "flare", "grove", "hatch",
"intro", "joint", "knell", "ledge", "medic", "nymph", "ozone", "probe",
"quilt", "rider", "stare", "truce", "unmet", "vinyl", "waste", "xerox",
"young", "zebra", "alien", "broke", "climb", "drown", "exile", "fluff",
"grape", "hotel", "input", "jumpy", "knack", "large", "moral", "naive",
"olive", "pupil", "quest", "range", "slink", "throw", "ulcer", "vivid",
"weave", "xenon", "yield", "zonal", "abate", "beard", "claim", "drain",
"eject", "flesh", "grind", "hover", "imply", "joust", "knock", "latch",
"medal", "night", "oxide", "pride", "quilt", "repay", "slant", "trunk",
"upper", "vital", "whine", "xerox", "yacht", "zonal", "amend", "break",
"creek", "drift", "evoke", "flash", "grate", "hinge", "inter", "jolly",
"knead", "lemon", "maple", "nymph", "optic", "pound", "quark", "relic",
"stake", "treat", "upset", "voice", "wield", "xerox", "yield", "zesty",
"abbey", "bride", "crook", "drape", "eager", "flint", "groom", "hover",
"ivory", "jumpy", "knelt", "lithe", "might", "noble", "oxide", "pulse",
"quilt", "ridge", "shade", "troop", "urban", "value", "whirl", "xenon",
"youth", "zonal", "adapt", "brisk", "crush", "ditch", "elude", "flank",
"giant", "hatch", "inner", "joker", "knead", "laser", "mirth", "novel",
"olive", "piano", "query", "react", "swipe", "trope", "under", "vivid",
"wrist", "xerox", "yearn", "zonal", "agent", "brief", "clash", "drown",
"exalt", "frown", "grace", "honey", "index", "jumbo", "kneel", "lance",
"mince", "nymph", "optic", "plush", "quirk", "rouse", "stand", "tread",
"urban", "vivid", "wreak", "xenon", "yacht", "zonal", "abide", "brine",
"crisp", "drove", "exile", "fudge", "grand", "hover", "ivory", "joint",
"knack", "lemon", "meant", "nymph", "ozone", "pivot", "quilt", "robin",
"slant", "tunic", "umbra", "vocal", "wrest", "xerox", "young", "zonal",
"avail", "brick", "crank", "drown", "evoke", "flash", "grind", "hoist",
"input", "joker", "knelt", "leech", "medal", "niche", "ovary", "plume",
"query", "react", "steer", "tweak", "upset", "valid", "worry", "xenon",
"yield", "zonal", "adapt", "brisk", "creek", "drain", "exalt", "flair",
"grape", "hoard", "inner", "joker", "knead", "light", "march", "noble",
"optic", "pivot", "quilt", "round", "stare", "trick", "urban", "vivid",
"wrist", "xerox", "youth", "zonal", "alert", "bride", "creek", "drift",
"eager", "flute", "grind", "hoist", "input", "jolly", "knead", "leech",
"medal", "noble", "olive", "plume", "quote", "relax", "stark", "troop",
"umbra", "vivid", "worry", "xenon", "young", "zonal", "adobe", "briar",
"crave", "drown", "evoke", "flare", "grand", "hover", "ivory", "joker",
"kneel", "leapt", "mince", "nymph", "optic", "plume", "quilt", "rouse",
"sheep", "tread", "urban", "vivid", "whisk", "xenon", "yield", "zonal",
"apart", "brick"];

// Variables
let attemptedGuesses = 0;
let currentReferenceById = 0;

let hasFirstLetterBeenTyped = false;
let chosenWord = null;



// Functions
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
}

function selectRandomWordAndApplyToConst(){
    chosenWord = Database[getRandomInt(0, Database.length)];
}

function attemptGetCompletedWord()
{
    var firstLet = document.getElementById('0');
    var secondLet = document.getElementById('1');
    var thirdLet = document.getElementById('2');
    var fourthLet = document.getElementById('3');
    var fifthLet = document.getElementById('4');

    if (!(firstLet && secondLet && thirdLet && fourthLet && fifthLet)){ return null; }
    if (fifthLet.innerHTML == "_"){ return null; }

    return (firstLet.innerHTML+secondLet.innerHTML+thirdLet.innerHTML+fourthLet.innerHTML+fifthLet.innerHTML);
}

function attemptCompleteGuessOnEnter()
{
    var submittedWord = attemptGetCompletedWord();
    if ( submittedWord === null ) { return; }

    submittedWord = submittedWord.toLowerCase();

    var wordIsCorrect = false;
    var frequencies = {};

    // first iteration set, collect frequencies of letters.
    for (i = 0 ; i < submittedWord.length ; i++) {
        if (frequencies[chosenWord[i]] === undefined) {
            frequencies[chosenWord[i]] = 1;
        }
        else {
            frequencies[chosenWord[i]] += 1;
        }
    }
    
    // second iteration set, mark green letters and subtract.
    for (i = 0 ; i < submittedWord.length ; i++){
        if (!(submittedWord[i] in frequencies)) { continue; }
        if (submittedWord[i] == chosenWord[i]){
            frequencies[submittedWord[i]]--;
            document.getElementById(String(i)).style.backgroundColor = colorSet.green;
        }
    }

    // third iteration set, mark yellow letters and subtract, also mark reds.
    for (i = 0 ; i < submittedWord.length ; i++){
        if (!(submittedWord[i] in frequencies)) { 
            document.getElementById(String(i)).style.backgroundColor = colorSet.red;
            continue; 
        }
        if (document.getElementById(String(i)).style.backgroundColor == colorSet.green) { continue; }
        if ((frequencies[submittedWord[i]]) == 0) { continue; }

        document.getElementById(String(i)).style.backgroundColor = colorSet.yellow;
    }

    if (wordIsCorrect){
        console.log("Word is correct!");
    } else {
        var firstLet = document.getElementById('0');
        var secondLet = document.getElementById('1');
        var thirdLet = document.getElementById('2');
        var fourthLet = document.getElementById('3');
        var fifthLet = document.getElementById('4');

        firstLet.id = "";
        secondLet.id = "";
        thirdLet.id = "";
        fourthLet.id = "";
        fifthLet.id = "";

        currentReferenceById = 0;

        var newBox = firstLet.cloneNode(false);
        newBox.id = "0";
        newBox.innerHTML = "_";
        newBox.style.backgroundColor = "";

        var breakNode = document.createElement("br");
        gameFrame.appendChild(breakNode);
        gameFrame.appendChild(newBox);
    }
}

function doProcessInput(key)
{
    if (!(acceptedKeys.indexOf(key) >= 0)) { return; } // Input integrity

    if (key === "Enter"){
        // Needs to handle edge case of not having five characters yet.
        attemptCompleteGuessOnEnter();
        return;
    }

    if (key === "Backspace"){
        if (currentReferenceById == 0){
            if (!(hasFirstLetterBeenTyped)) { return; } 
            else { document.getElementById("0").innerHTML = "_"; hasFirstLetterBeenTyped = false; return; }}
        else {
            if (document.getElementById(String(currentReferenceById)).innerHTML == "_"){
                document.getElementById(String(currentReferenceById)).remove();
                currentReferenceById--;
                return;
            } else {
                document.getElementById(String(currentReferenceById)).innerHTML = "_";
                return;
            }
        }
    }

    if (!(hasFirstLetterBeenTyped)){
        hasFirstLetterBeenTyped = true;
        document.getElementById(String(currentReferenceById)).innerHTML = key;
        return;
    }

    if (document.getElementById(String(currentReferenceById)).innerHTML == "_"){
        document.getElementById(String(currentReferenceById)).innerHTML = key;
    } else {
        if (currentReferenceById + 1 == 5) { return; }

        var tempNode = document.getElementById(String(currentReferenceById)).cloneNode(false);
        currentReferenceById++;

        tempNode.id = String(currentReferenceById);
        tempNode.innerHTML = key;

        gameFrame.appendChild(tempNode);
    }
}

function onType(e)
{
    // Access keyCode number using e.keyCode
    var keyName = e.code;
    if (keyName.substring(0,3) == "Key") { keyName = keyName.substring(3,4); }

    doProcessInput(keyName);
}



// Runtime
document.addEventListener("DOMContentLoaded", () => {
    selectRandomWordAndApplyToConst();
    document.addEventListener("keydown", onType);
});