console.log("hi :D");

document.addEventListener("DOMContentLoaded", function () {
  // Name prompt elements
  const nameModal = document.getElementById("nameModal");
  const mainContent = document.getElementById("mainContent");
  const submitBtn = document.getElementById("submitName");
  const userNameInput = document.getElementById("userName");
  const userGreeting = document.getElementById("userGreeting");

  // Show modal on page load
  nameModal.style.display = "flex";

  // Handle name submission
  submitBtn.addEventListener("click", function () {
    const name = userNameInput.value.trim();

    if (name) {
      // Hide modal and show main content
      nameModal.style.display = "none";
      mainContent.classList.remove("hidden");

      // Set greeting with user's name
      userGreeting.textContent = `Hey ${name},`;
    } else {
      alert("Please enter your name to continue");
    }
  });

  // Allow pressing Enter to submit
  userNameInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      submitBtn.click();
    }
  });
});

// Constants
const usedCompliments = new Set();
const min = 1;
const max = 100;
const compliment = document.getElementById("compliment");
const compliments = [
  "You're smart enough to know ducks aren't fish.",
  "You’re like a typo in a love letter — completely wrong, but somehow adorable.",
  "You're better than iced tea on a hot day… barely.",
  "You're like Wi-Fi—sometimes you actually work.",
  "You're like coffee—missing the sweetness.",
  "Your brain works at the speed of a happy turtle.",
  "You're a star… maybe a slightly burnt-out one.",
  "If you were an app, people would download you by mistake.",
  "You're cute—like a wet dog.",
  "Your best ideas come when you're asleep.",
  "You're like cold pizza—strange but acceptable.",
  "If you were a book, you'd have way too many blank pages.",
  "You're smart… until you try to explain something.",
  "You're like a traffic light—you stop too often.",
  "Your presence is strong—like the smell of onions.",
  "You're different… not always in a good way.",
  "If you were a TV show, people would forget your name.",
  "You're like a keyboard—half your keys don't work.",
  "You're an inspiration… to do nothing.",
  "You’re like a Monday morning — nobody wants you, but somehow you make everything happen.",
  "You're like a cloud—sometimes you block the sun.",
  "You're special—like a pen without ink.",
  "Even the moon has a dark side—you have more.",
  "You're like a Windows update—only show up when I'm busy.",
  "You've got energy… but a weak battery.",
  "You're like a cheap charger—works half the time.",
  "You're like a ruler—straight but boring.",
  "You're most helpful when you're not around.",
  "You're like the Caps Lock key—rarely needed.",
  "You're like notifications—annoying but sometimes necessary.",
  "You're like a broken clock—right twice a day.",
  "You're so nice even cats get suspicious.",
  "You're like a pencil—you need sharpening.",
  "You exist—that's something.",
  "You're like a front-camera selfie—awkward.",
  "You're like juice without sugar—missing something but healthy.",
  "You're like a long TV show—too many filler episodes.",
  "You're like a keyboard—you press my buttons.",
  "You're like Google—you have answers, not always correct ones.",
  "You're like the manual—nobody reads you.",
  "You're nicest when you're silent.",
  "You're like slow internet—you make me think twice.",
  "You're like burnt toast—there's some flavor… kind of.",
  "You're like spam email—I wasn't expecting you.",
  "You're like a dark cloud—change the mood fast.",
  "You're surprising—like a YouTube ad.",
  "You're like a ruler—measure, but with no purpose.",
  "You're like an old mirror—reflect weird things.",
  "You're like the cancel button—always a bit late.",
  "You're like an app asking for a review—uncomfortable.",
  "You're like an elevator—sometimes up, sometimes down.",
  "You're like cake without frosting—missing something important.",
  "You're like an hourglass—slow but steady.",
  "You're like a keyboard without the letter A—missing something essential.",
  "You're like carrots in a stew—not everyone likes you.",
  "You're like a balloon—fun, but pop too easily.",
  "You're like the mute button—sometimes best when pressed.",
  "You're like old memes—you still exist, but…",
  "You're like a 1% charger—give me a tiny bit of hope.",
  "You're like a calculator—sometimes you're wrong.",
  "You're like steak without salt—missing the flavor.",
  "You're like a printer—always jam when needed most.",
  "You're like stale bread—not everyone can use you.",
  "You're like tight shoes—cause discomfort.",
  "You're like an umbrella on a sunny day—pointless.",
  "You're like a game with no instructions—confusing.",
  "You're like an empty cup—wanting to be filled.",
  "You're like a button that doesn't work—just for decoration.",
  "You're like a salad—nobody's first choice.",
  "You're like the restart button—you need it a lot.",
  "You're like a movie half boring—waste of time.",
  "You're like a broken camera—blurry vision.",
  "You're like a phone keyboard—sometimes type nonsense.",
  "You're like a flickering light—unstable.",
  "You're like old shoes—comfortable but weird-looking.",
  "You're like free Wi-Fi—comes with limits.",
  "You're like an empty basket—waiting to be filled.",
  "You're like a cold shower—unexpected.",
  "You're like a low battery warning—bad timing.",
  "You're like a like with no comment—missing something.",
  "You're like an empty bus—moving but slow.",
  "You're like a broken keyboard—missing letters.",
  "You're like pasta without sauce—dry.",
  "You're like a winter cloud—holding something mysterious.",
  "You're like long voice notes—boring.",
  "You're like a squeaky door—need oil.",
  "You're like a TV without a remote—annoying.",
  "You're like a crashing app—unstable.",
  "You're like a weak lightbulb—barely glowing.",
  "You're like a childhood friend—rare but odd.",
  "You're like a broken step—useless.",
  "You're like strong wind—annoying.",
  "You're like a broken fan—noise without purpose.",
  "You're like a dusty keyboard—need cleaning.",
  "You're like an old machine—still trying.",
  "You're like a wobbly table—not steady.",
  "You're like a fridge door—sometimes won't close.",
  "You're like cold soup—not for everyone.",
  "You're like an easy password—no one feels safe with you.",
  "You're like a glitter bomb—extra, messy, and weirdly impressive.",
];

// Get random compliment function
function randomCompliment() {
  if (usedCompliments.size === max - min + 1) {
    compliment.innerText = "You Saw All The Compliments.";
    return;
  }

  // Add loading effect
  compliment.style.fontSize = "20px";
  compliment.style.color = "#6a4c93";
  compliment.innerText = "Generating your sassy compliment...";

  setTimeout(() => {
    let random;
    do {
      random = Math.floor(Math.random() * max + min);
    } while (usedCompliments.has(random));

    usedCompliments.add(random);
    document.getElementById("count").textContent = usedCompliments.size;

    compliment.innerText = compliments[random];
    compliment.style.fontSize = "32px";
    compliment.style.color = "hsla(194, 100%, 38%, 1.00)";

    // Add typing animation
    compliment.style.animation = "typing 1s steps(40, end)";
  }, 800);
}

function shareOnTwitter() {
  const text = `"${compliment.innerText}" - FlatterMeNot!`;
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
  );
}

function copyToClipboard() {
  navigator.clipboard.writeText(compliment.innerText);
  alert("Compliment copied to clipboard!");
}
