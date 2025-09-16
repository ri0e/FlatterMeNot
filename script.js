console.log("hi get out of the console :D");

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

import { english } from "./translations.js";
import { arabic } from "./translations.js";
import { bengali } from "./translations.js";
import { chineseT } from "./translations.js";
import { chinese } from "./translations.js";
import { farisi } from "./translations.js";
import { french } from "./translations.js";
import { german } from "./translations.js";
import { hindi } from "./translations.js";
import { indonesian } from "./translations.js";
import { japanese } from "./translations.js";
import { korean } from "./translations.js";
import { kurdishKurmanji } from "./translations.js";
import { kurdishSorani } from "./translations.js";
import { portuguese } from "./translations.js";
import { russian } from "./translations.js";
import { spanish } from "./translations.js";
import { swahili } from "./translations.js";
import { thai } from "./translations.js";
import { tamil } from "./translations.js";
import { urdu } from "./translations.js";
import { turkish } from "./translations.js";

const languageMap = {
  en: english,
  ar: arabic,
  bn: bengali,
  zh: chinese,
  ch: chineseT,
  fr: french,
  gr: german,
  hi: hindi,
  in: indonesian,
  jp: japanese,
  port: portuguese,
  pr: farisi,
  kr: korean,
  kurmaji: kurdishKurmanji,
  sorani: kurdishSorani,
  es: spanish,
  sw: swahili,
  tamili: tamil,
  thai: thai,
  tk: turkish,
  ur: urdu,
  ru: russian,
};

// --- INITIALIZE SUPABASE ---
const SUPABASE_URL = "https://bzdxzsxcyhamekbswmlb.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6ZHh6c3hjeWhhbWVrYnN3bWxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5NTQxMTgsImV4cCI6MjA3MzUzMDExOH0.zX6OTd0132PJr9D78zjjT6mNMrDoAKYBnBL0O_bBtro";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// --- DOM ELEMENTS ---

// Modal Elements
const nameModal = document.getElementById("nameModal");
const namePrompt = nameModal.querySelector("p");
const namePlaceholder = document.getElementById("userName");
const submitBtn = document.getElementById("submitName");
const languageSelect = document.getElementById("languageSelect");
const chooseLang = document.getElementById("chooseLang");
const userNameInput = document.getElementById("userName");

// Main Content Elements
const mainContent = document.getElementById("mainContent");
const userGreeting = document.getElementById("userGreeting");
const description = document.querySelector(".dscr");
const complimentPrompt = document.getElementById("complimentPrompt");
const compliment = document.getElementById("compliment");

// Counter
const counterText = document.getElementById("counterText");
const count = document.getElementById("count");

// Buttons
const complimentButton = document.getElementById("complimentButton");
const twitterButton = document.getElementById("twitterButton");
const copyButton = document.getElementById("copyButton");
const instagramButton = document.getElementById("instagramButton");
const githubButton = document.getElementById("githubButton");

// Add compliments section
const submitLanguageSelect = document.getElementById("submitLanguageSelect");
const userCompliment = document.getElementById("userCompliment");
const submitComplimentBtn = document.getElementById("submitComplimentBtn");
const submitStatus = document.getElementById("submitStatus");

// About Section
const aboutTitle = document.getElementById("aboutTitle");
const aboutText = document.getElementById("aboutText");

// Follow Section
const followTitle = document.getElementById("followTitle");

const modalTitle = document.getElementById("modal-title");
modalTitle.textContent = "FlatterMeNot!";
modalTitle.style.fontFamily = '"Darumadrop One", cursive';

// Footer
const footerText = document.getElementById("footerText");

// App state
let currentLanguage = "en";
let complimentCount = 0;
const usedCompliments = new Set();

// --- TRANSLATIONS ---

function updateTextElements() {
  const lang = languageMap[currentLanguage];

  // Set language attribute on <html> tag
  document.documentElement.lang = currentLanguage;

  // Update modal text
  nameModal.querySelector("h2").innerHTML = lang.welcome;
  namePrompt.textContent = lang.namePrompt;
  chooseLang.textContent = lang.chooseLanguage;
  namePlaceholder.placeholder = lang.namePlaceholder;
  submitBtn.textContent = lang.buttonText;

  // Main content
  description.textContent = lang.description;
  complimentPrompt.textContent = lang.complimentPrompt;
  aboutTitle.innerHTML = lang.aboutTitle;
  aboutText.textContent = lang.aboutText;
  followTitle.textContent = lang.followTitle;
  footerText.innerHTML = lang.footerText;
  complimentButton.textContent = lang.complimentButton;
  twitterButton.textContent = lang.twitterButton;
  copyButton.textContent = lang.copyButton;
  counterText.textContent = lang.counterText;
  compliment.textContent = lang.defaultCompliment;
  document.querySelector(".submit-compliment h3").textContent =
    lang.submitComplimentTitle;
  document.querySelector(".submit-compliment h4").textContent =
    lang.submitComplimentLang;
  userCompliment.placeholder = lang.submitComplimentPlaceholder;
  submitComplimentBtn.textContent = lang.submitComplimentButton;

  // Greeting
  const userName = userNameInput.value.trim() || "User";
  if (userName) {
    userGreeting.textContent = lang.greeting(userName);
  }
}

// Get a random compliment
async function getCompliment() {
  const lang = languageMap[currentLanguage];

  // If all compliments have been used, show message
  if (usedCompliments.size >= lang.compliments.length) {
    compliment.innerText = lang.allSeen || "You've seen all compliments!";
    return;
  }

  // Apply loading effect
  compliment.style.fontSize = "1.2rem";
  compliment.style.color = "#9478baff";
  compliment.style.animation = "typing 3s steps(40, end)";
  compliment.innerText = lang.generating;

  // Disable button during loading
  complimentButton.disabled = true;
  twitterButton.disabled = true;
  copyButton.disabled = true;

  setTimeout(async () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * lang.compliments.length);
    } while (usedCompliments.has(randomIndex));

    usedCompliments.add(randomIndex);
    complimentCount++;
    count.textContent = complimentCount;

    const complimentText = lang.compliments[randomIndex];
    compliment.innerText = complimentText;
    compliment.style.fontSize = "1.5rem";
    compliment.style.setProperty("color", "#0095c2ff", "important");
    compliment.style.animation = "none";

    // Re-enable buttons
    complimentButton.disabled = false;
    twitterButton.disabled = false;
    copyButton.disabled = false;
  }, 800);
}

// Share functions
function shareOnTwitter() {
  const text = `"${compliment.innerText}" - FlatterMeNot!`;
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
    "_blank"
  );
}

function copyToClipboard() {
  navigator.clipboard.writeText(compliment.innerText);
  copyToastNotification();
}

function copyToastNotification() {
  const p = document.createElement("p");
  p.className = "copy-toast-text";
  p.textContent = languageMap[currentLanguage].copySuccess;
  p.style.fontWeight = 300;
  const button = document.createElement("button");
  button.className = "copy-toast-close";
  button.innerText = "OK!";
  button.onclick = () => {
    div.remove();
  };
  const div = document.createElement("div");
  div.className = "copy-toast";
  div.appendChild(p);
  div.appendChild(button);
  document.body.appendChild(div);
  setTimeout(() => {
    div.remove();
  }, 3000);
}

// Load compliments from both local files and Supabase
async function loadCompliments() {
  try {
    // Fetch approved compliments from Supabase table
    const { data, error } = await supabase
      .from("compliments")
      .select("text, language")
      .eq("is_approved", true);

    if (error) {
      throw error;
    }

    // Add the fetched compliments to the existing languageMap
    data.forEach((compliment) => {
      if (languageMap[compliment.language]) {
        // Avoid adding duplicates if already present
        if (
          !languageMap[compliment.language].compliments.includes(
            compliment.text
          )
        ) {
          languageMap[compliment.language].compliments.push(compliment.text);
        }
      }
    });
  } catch (err) {
    console.error("Error loading user compliments:", err);
  }
}

// Function to add a user's compliment TO SUPABASE
async function addUserCompliment() {
  const language = submitLanguageSelect.value;
  const text = userCompliment.value.trim();

  if (!text) {
    submitStatus.textContent =
      languageMap[currentLanguage].submitComplimentError;
    submitStatus.style.color = "#ff6b6b";
    return;
  }

  try {
    // Insert the new compliment into the 'compliments' table
    const { data, error } = await supabase
      .from("compliments")
      .insert([{ text: text, language: language }]);

    if (error) {
      throw error;
    }

    userCompliment.value = "";
    submitStatus.textContent =
      languageMap[currentLanguage].submitComplimentSuccess;
    submitStatus.style.color = "#51cf66";
  } catch (err) {
    console.error("Error adding compliment:", err);
    submitStatus.textContent = "Oops! Something went wrong.";
    submitStatus.style.color = "#ff6b6b";
  }
}
// Event Listeners
submitBtn.addEventListener("click", function () {
  const name = userNameInput.value.trim();

  if (name) {
    nameModal.style.display = "none";
    mainContent.classList.remove("hidden");
    userGreeting.textContent = languageMap[currentLanguage].greeting(name);

    // Store name and language in localStorage
    localStorage.setItem("flatterMeNotName", name);
    localStorage.setItem("flatterMeNotLanguage", currentLanguage);
  } else {
    alert(languageMap[currentLanguage].namePrompt);
  }
});

userNameInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    submitBtn.click();
  }
});

languageSelect.addEventListener("change", function () {
  currentLanguage = this.value;
  updateTextElements();
  // Reset compliments when language changes
  usedCompliments.clear();
  complimentCount = 0;
  count.textContent = complimentCount;
  compliment.textContent = languageMap[currentLanguage].defaultCompliment;
});

// Initialize app
document.addEventListener("DOMContentLoaded", async function () {
  await loadCompliments();
  // Show modal on page load
  nameModal.style.display = "flex";

  // Check for saved preferences
  const savedLanguage = localStorage.getItem("flatterMeNotLanguage");
  const savedName = localStorage.getItem("flatterMeNotName");

  if (savedLanguage) {
    currentLanguage = savedLanguage;
    languageSelect.value = savedLanguage;
  }

  if (savedName) {
    userNameInput.value = savedName;
  }

  // Set up event listeners
  complimentButton.addEventListener("click", getCompliment);
  twitterButton.addEventListener("click", shareOnTwitter);
  copyButton.addEventListener("click", copyToClipboard);
  submitComplimentBtn.addEventListener("click", addUserCompliment);
  instagramButton.addEventListener("click", function () {
    window.open("https://www.instagram.com/re139ii/");
  });
  githubButton.addEventListener("click", function () {
    window.open("https://github.com/ri0e");
  });

  updateTextElements();
});


