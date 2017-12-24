// Javascript for hangman

$("input").focus();

// generate random number to select word from array index
var wordNum = Math.floor(Math.random() * 185);
console.log(wordNum);

// array for storing possible words
var wordList = [
	"Aardvark",
    "Albatros",
    "Alligator",
    "Alpaga",
    "Fourmi",
    "Fourmilier",
    "Antilope",
    "Singe",
    "Tatou",
    "Babouin",
    "Blaireau",
    "Barracuda",
    "Ours",
    "Castor",
    "Abeille",
    "Bison",
    "Sanglier",
    "Buffle",
    "Papillon",
    "Chameau",
    "Capybara",
    "Caribou",
    "Casoar",
    "Chat",
    "Chenille",
    "Chamois",
    "Poulet",
    "Chinchilla",
    "Palourde",
    "Cobra",
    "Cafard",
    "Cormoran",
    "Coyote",
    "Crabe",
    "Grue",
    "Crocodile",
    "Corbeau",
    "Courlis",
    "Cerf",
	"Degu",
    "Dinosaure",
    "Chien",
    "Dauphin",
    "Dotterel",
    "Colombe",
    "Libellule",
    "Canard",
    "Dugong",
    "Dunlin",
    "Aigle",
    "Echidna",
    "Anguille",
    "Eland",
    "Wapiti",
    "Faucon",
    "Furet",
    "Bouvreuil",
    "Poisson",
    "Flamant",
    "Mouche",
    "Renard",
    "Grenouille",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Girafe",
    "Moucheron",
    "Gnou",
    "Chardonneret",
    "Oie",
    "Gorille",
    "Autour",
    "Sauterelle",
    "Grouse",
    "Guanaco",
    "Mouette",
    "Hamster",
    "Faucon",
    "Hareng",
    "Hippopotame",
    "Frelon",
    "Cheval",
    "Humain",
    "Colibri",
    "Ibex",
    "Ibis",
	"Chacal",
    "Jaguar",
    "Geai",
    "Kangourou",
    "Koala",
    "Kookabura",
    "Kouprey",
    "Kudu",
    "Vanneau",
    "Alouette",
    "Maki",
    "Lion",
    "Lama",
    "Homard",
    "Criquet",
    "Loris",
    "Pou",
    "Lyrebird",
    "Pie",
    "Colvert",
    "Lamantin",
    "Mandrill",
    "Mante",
    "Martre",
    "Suricate",
    "Vison",
    "Mangouste",
    "Singe",
    "Moustique",
    "Souris",
    "Mule",
    "Narval",
    "Triton",
    "Rossignol",
    "Poulpe",
    "Okapi",
    "Opossum",
    "Oryx",
    "Autruche",
    "Loutre",
    "Hibou",
    "Perroquet",
    "Perdrix",
    "Paon",
    "Manchot",
    "Faisan",
    "Cochon",
    "Pigeon",
    "Poney",
    "Porcupine",
    "Marsouin",
    "Caille",
    "Quelea",
    "Quetzal",
    "Lapin",
    "Rail",
    "Rat",
    "Corbeau",
    "Renne",
    "Tour",
    "Salamandre",
    "Saumon",
    "Sardine",
    "Scorpion",
    "Hippocampe",
    "Requin",
    "Mouton",
    "Musaraigne",
    "Moufette",
    "Escargot",
    "Serpent",
    "Moineau",
    "Spatule",
    "Calamar",
    "Raie",
    "Punaise",
    "Cigogne",
    "Avaler",
    "Cygne",
    "Tapir",
    "Tarsier",
    "Termite",
    "Tigre",
    "Crapaud",
    "Truite",
    "Dinde",
    "Tortue",
    "Vautour",
    "Wallaby",
    "Morse",
    "Belette",
    "Baleine",
    "Loup",
    "Carcajou",
    "Wombat",
    "Pivert",
    "Ver",
    "Roitelet",
    "Yak"
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



