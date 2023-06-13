const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Declare an empty object to store user responses
const profile = {};

// Creating an array of questions
const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (e.g., dinner, brunch, etc.)?",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];


// Defining a function to ask the questions
const askQuestion = function(index) {
  rl.question(questions[index] + ' ', (answer) => {
    profile[`answer${index + 1}`] = answer;
    if (index + 1 < questions.length) {
      askQuestion(index + 1);
    } else {
      // All questions answered, generate the profile
      generateProfile();
    }
  });
};
const generateProfile = function() {
  const {
    answer1,
    answer2,
    answer3,
    answer4,
    answer5,
    answer6,
    answer7
  } = profile;
    
  // Generate the profile summary
  const profileSummary = `Name: ${answer1}\nActivity: ${answer2}\nMusic: ${answer3}\nFavorite meal: ${answer4}\nFavorite food: ${answer5}\nFavorite sport: ${answer6}\nSuperpower: ${answer7}`;
    
  console.log('Profile Summary:');
  console.log(profileSummary);
    
  rl.close();
};

// Call question function
askQuestion(0);
    


