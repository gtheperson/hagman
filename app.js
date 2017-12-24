// Javascript for hangman

$("input").focus();

// generate random number to select word from array index
var wordNum = Math.floor(Math.random() * 225);
console.log(wordNum);

// array for storing possible words
var wordList = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
	"Degu",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Kouprey",
    "Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Red panda",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sand Dollar",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Tarsier",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]; // array sourced from here https://gist.github.com/borlaym/585e2e09dd6abd9b0d0a

// set word to the array index, set 2nd one up too
let word = wordList[wordNum];
word = word.toLowerCase();
var wordBackup = word;
console.log(word);
console.log(wordBackup);

// make up a load of cells based on word length
for (i = 0; i < word.length; ++i) {
	$("tr").append("<td></td>")
};


// add the first letter of the word to each cell (then delete first letter otherwise it gets confused)
$(".hidden").children().each(function() {
	$(this).text(word[0]);
	word = word.substr(1);
	console.log(word);
})

// guess is submitted letter, correct is amount of correct letters
var guess;
var correct = 0;
var wrong = 0;
var sumWrong = 0;
let wrongGuess = "";

// when letter is submitted see if it is a correct letter
$(".submit").click(function() {
	$("input").focus();
	if ($("input").val()) {
		guess = $("input").val();
		guess = guess.toLowerCase();
		$("input").val("");
		
		/*for (i = 0; i < wordBackup.length; ++i) {
			letter = wordBackup[i];
			if (guess === letter) {
				guessIndex.push(i);
			};
		};
		
		for (i = 0; i < guessIndex.length; ++i) {
			var guessInd = guessIndex[i];
			console.log(guessInd);
			 var beep = $( ".hidTab:nth-child(0)" ).text();
			 console.log(beep);
		}; */
		
		for (let value of wordBackup) {
			if (value === guess) {
				console.log(guess);
				$(".hidden").children().each(function() {
					var cellLetter = $(this).text();
					if (guess === cellLetter) {
						$(this).addClass("visible");
						correct = 0;
						$(".hidden").children().each(function() {
							if ($(this).hasClass("visible")) {
								correct++;
							}
						});
						console.log(correct);
						if (correct === wordBackup.length) {
							$(".win").removeClass("hidden");
						}
					}
				})
			} else {
				wrong++
			}
		} 
			console.log("wrong=" + wrong);
			if (wrong === wordBackup.length) {
				sumWrong++;
				wrongGuess += (guess + " ");
				$(".wrong-guess").text(wrongGuess.toUpperCase());
			}
			if (sumWrong === 1) {
				$(".blank").addClass("hidden");
			} else if (sumWrong ===2) {
				$(".head").addClass("hidden");
			} else if (sumWrong ===3) {
				$(".body").addClass("hidden");
			} else if (sumWrong ===4) {
				$(".leg1").addClass("hidden");
			} else if (sumWrong ===5) {
				$(".leg2").addClass("hidden");
			} else if (sumWrong ===6) {
				$(".arm1").addClass("hidden");
			} else if (sumWrong ===7) {
				$(".arm2").addClass("hidden");
			} else if (sumWrong ===8) {
				$(".rope").addClass("hidden");
			} else if (sumWrong ===9) {
				$(".top-bar").addClass("hidden");
			} else if (sumWrong ===10) {
				$(".side-bar").addClass("hidden");
			}
			
			wrong = 0;
			console.log("then" + wrong);
			console.log("sumwrong" + sumWrong);
			if (sumWrong === 10) {
				$(".lose").toggleClass("hidden");
				$(".hidden").children().each(function() {
					if (!$(this).hasClass("visible")) {
						$(this).addClass("visible");
						$(this).css("color", "red");
					}
				})
			}
	}
});

/*$('input').keypress(function(e){
        if(e.which === 13){//Enter key pressed
            $('.submit').click();//Trigger search button click event
        }
    });*/
	
$(document).keypress(function(e) {
  if(e.which == 13) {
    if (!$(".win").hasClass("hidden") || !$(".lose").hasClass("hidden")) {
		location.reload();
	} else {$('.submit').click();
	}
		
  }
});

$(".again").on("click", function() {
	location.reload();
});



