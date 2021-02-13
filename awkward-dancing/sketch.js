//awkward dancing

// Apply for a Wordnik key here: http://developer.wordnik.com/
// Wordnik API docs http://developer.wordnik.com/docs.html

var wordnik_key = 'mykey';

var getAdverbsUrl = 'http://api.wordnik.com/v4/words.json/randomWords?' +
                  'minCorpusCount=1000&minDictionaryCount=10&' +
                  'hasDictionaryDef=true&includePartOfSpeech=adverb&limit=20&maxLength=12&' +
                  'api_key='+wordnik_key;

var getVerbsUrl = 'http://api.wordnik.com/v4/words.json/randomWords?' +
                  'minCorpusCount=1000&minDictionaryCount=10&' +
                  'excludePartOfSpeech=proper-noun,proper-noun-plural,proper-noun-posessive,suffix,family-name,idiom,affix&' +
                  'hasDictionaryDef=true&includePartOfSpeech=verb&limit=20&maxLength=12&' +
                  'api_key='+wordnik_key;


var bodyParts;
var x = 20;
var y = 40;

var getBodyPartsUrl = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/bodyParts.json';

function preload() {
  bodyParts = loadJSON(getBodyPartsUrl);
  adverbs = loadJSON(getAdverbsUrl);
  verbs = loadJSON(getVerbsUrl);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(30);
  // handle data
  print(bodyParts.bodyParts[0]);
  print(floor(random(bodyParts.bodyParts.length)));
  lenBodyParts = bodyParts.bodyParts.length;

  text('how to dance awkwardly', x, y);

  for (var i = 1; i < 11; i ++) {
    y = y + 40;
    var spaceSingle = ' ';
    var spaceDouble = ' ';
    var space;
    var prespace;

    var adv = adverbs[floor(random(adverbs.length))].word;
    var verb = verbs[floor(random(verbs.length))].word;

    if (i < 10) {
      space = spaceSingle;
      prespace = '  ';
    }
    else {
      space = spaceDouble;
      prespace = '';
    }

    text(prespace + i + '.' + space +  verb + ' ' + bodyParts.bodyParts[floor(random(lenBodyParts))] + ' ' + adv + ', ' + floor(random(100)) + ' times.' , x, y);
  }




}
