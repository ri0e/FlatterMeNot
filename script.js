// Multilingual content
const translations = {
  en: {
    welcome: "Welcome to FlatterMeNot!",
    namePrompt: "What's your name?",
    namePlaceholder: "Enter your name",
    greeting: (name) => `Hey ${name},`,
    description: "Get a Sassy Compliment >⩊<",
    complimentPrompt: "Your Compliment is:",
    defaultCompliment: "click the button to get a sassy compliment",
    aboutTitle: "About FlatterMeNot!",
    aboutText:
      "We specialize in backhanded compliments that make you question if you should feel good or insulted. Enjoy!",
    followTitle: "Follow Me for More Sass— I Mean Content hehe",
    footerText: "Made with ❤️ and sarcasm | © 2025 FlatterMeNot!",
    buttonText: "Let's Go!",
    complimentButton: "Compliment Me",
    twitterButton: "Tweet",
    copyButton: "Copy",
    copySuccess: "Compliment copied to clipboard!",
    counterText: "Compliments received:",
    errorMessage: "An error occurred, please try again!",
    generating: "Generating your sassy compliment...",
    levelOptions: {
      light: "Light Sass",
      medium: "Medium Sass",
      heavy: "Heavy Sass",
    },
  },

  fr: {
    welcome: "Bienvenue sur FlatterMeNot!",
    namePrompt: "Quel est ton nom ?",
    namePlaceholder: "Entre ton nom",
    greeting: (name) => `Salut ${name},`,
    description: "Obtiens un compliment sarcastique >⩊<",
    complimentPrompt: "Ton compliment est :",
    defaultCompliment: "Clique sur le bouton pour un compliment piquant",
    aboutTitle: "À propos de FlatterMeNot!",
    aboutText:
      "Nous sommes spécialisés dans les compliments ambigus qui te feront hésiter entre être flatté ou vexé. Amuse-toi bien !",
    followTitle: "Suis-moi pour plus de sarcasmes… enfin, de contenu hehe",
    footerText: "Fait avec ❤️ et sarcasme | © 2025 FlatterMeNot!",
    buttonText: "Allons-y!",
    complimentButton: "Fais-moi un compliment",
    twitterButton: "Tweeter",
    copyButton: "Copier",
    copySuccess: "Compliment copié dans le presse-papiers !",
    counterText: "Compliments reçus :",
    errorMessage: "Une erreur est survenue, réessaie !",
    generating: "Génération de ton compliment impertinent...",
    levelOptions: {
      light: "Sarcasme Léger",
      medium: "Sarcasme Moyen",
      heavy: "Sarcasme Lourd",
    },
  },

  es: {
    welcome: "¡Bienvenido a FlatterMeNot!",
    namePrompt: "¿Cuál es tu nombre?",
    namePlaceholder: "Escribe tu nombre",
    greeting: (name) => `Hola ${name},`,
    description: "Obtén un cumplido sarcástico >⩊<",
    complimentPrompt: "Tu cumplido es:",
    defaultCompliment:
      "Haz clic en el botón para recibir un cumplido con doble filo",
    aboutTitle: "Sobre FlatterMeNot!",
    aboutText:
      "Nos especializamos en cumplidos irónicos que te harán dudar si sentirte halagado o insultado. ¡Disfruta!",
    followTitle: "Sígueme para más sarcasmo… digo, contenido hehe",
    footerText: "Hecho con ❤️ y sarcasmo | © 2025 FlatterMeNot!",
    buttonText: "¡Vamos!",
    complimentButton: "Dame un cumplido",
    twitterButton: "Tweetear",
    copyButton: "Copiar",
    copySuccess: "¡Cumplido copiado al portapapeles!",
    counterText: "Cumplidos recibidos:",
    errorMessage: "Ocurrió un error, inténtalo de nuevo!",
    generating: "Generando tu cumplido atrevido...",
    levelOptions: {
      light: "Sarcasmo Suave",
      medium: "Sarcasmo Medio",
      heavy: "Sarcasmo Pesado",
    },
  },

  zh: {
    welcome: "欢迎来到 FlatterMeNot!",
    namePrompt: "你叫什么名字？",
    namePlaceholder: "输入你的名字",
    greeting: (name) => `嗨 ${name},`,
    description: "获取一条俏皮的赞美 >⩊<",
    complimentPrompt: "你的赞美是：",
    defaultCompliment: "点击按钮获取一条别扭的赞美",
    aboutTitle: "关于 FlatterMeNot!",
    aboutText:
      "我们专注于让你分不清是该高兴还是该被冒犯的挖苦式赞美。好好享受吧！",
    followTitle: "关注我获取更多毒舌——啊不对，内容 hehe",
    footerText: "用 ❤️ 和讽刺制作 | © 2025 FlatterMeNot!",
    buttonText: "开始吧!",
    complimentButton: "赞美我",
    twitterButton: "推文",
    copyButton: "复制",
    copySuccess: "赞美已复制到剪贴板！",
    counterText: "已收到的赞美：",
    errorMessage: "出错了，请重试！",
    generating: "正在生成你的俏皮赞美...",
    levelOptions: {
      light: "轻度挖苦",
      medium: "中度挖苦",
      heavy: "重度挖苦",
    },
  },

  ru: {
    welcome: "Добро пожаловать в FlatterMeNot!",
    namePrompt: "Как тебя зовут?",
    namePlaceholder: "Введи своё имя",
    greeting: (name) => `Привет, ${name},`,
    description: "Получи дерзкий комплимент >⩊<",
    complimentPrompt: "Твой комплимент:",
    defaultCompliment: "Нажми на кнопку, чтобы получить колкий комплимент",
    aboutTitle: "О FlatterMeNot!",
    aboutText:
      "Мы специализируемся на комплиментах с подвохом, которые заставят тебя задуматься: радоваться или обижаться? Наслаждайся!",
    followTitle: "Подписывайся на больше сарказма… то есть контента hehe",
    footerText: "Сделано с ❤️ и сарказмом | © 2025 FlatterMeNot!",
    buttonText: "Поехали!",
    complimentButton: "Похвали меня",
    twitterButton: "Твитнуть",
    copyButton: "Скопировать",
    copySuccess: "Комплимент скопирован в буфер обмена!",
    counterText: "Получено комплиментов:",
    errorMessage: "Произошла ошибка, попробуй снова!",
    generating: "Генерируется твой дерзкий комплимент...",
    levelOptions: {
      light: "Лёгкий Сарказм",
      medium: "Средний Сарказм",
      heavy: "Жёсткий Сарказм",
    },
  },
};

// App state
let currentLanguage = "en";
let complimentCount = 0;

// DOM Elements
const nameModal = document.getElementById("nameModal");
const namePrompt = nameModal.querySelector("p");
const namePlaceholder = document.getElementById("userName");
const submitBtn = document.getElementById("submitName");
const languageSelect = document.getElementById("languageSelect");
const userNameInput = document.getElementById("userName");

// Main Content Elements
const mainContent = document.getElementById("mainContent");
const userGreeting = document.getElementById("userGreeting");
const description = document.querySelector(".dscr");
const complimentPrompt = document.getElementById("complimentPrompt");
const compliment = document.getElementById("compliment");
const levelSelect = document.getElementById("levelSelect");

// Counter
const counterText = document.getElementById("counterText");
const count = document.getElementById("count");

// Buttons
const complimentButton = document.getElementById("complimentButton");
const twitterButton = document.getElementById("twitterButton");
const copyButton = document.getElementById("copyButton");
const instagramButton = document.getElementById("instagramButton");
const githubButton = document.getElementById("githubButton");

// About Section
const aboutTitle = document.getElementById("aboutTitle");
const aboutText = document.getElementById("aboutText");

// Follow Section
const followTitle = document.getElementById("followTitle");

// Footer
const footerText = document.getElementById("footerText");

// Update all text elements based on current language
function updateTextElements() {
  const lang = translations[currentLanguage];

  // Set language attribute on <html> tag
  document.documentElement.lang = currentLanguage;

  // Modal
  nameModal.querySelector("h2").textContent = lang.welcome;
  namePrompt.textContent = lang.namePrompt;
  namePlaceholder.placeholder = lang.namePlaceholder;
  submitBtn.textContent = lang.buttonText;

  // Main content
  description.textContent = lang.description;
  complimentPrompt.textContent = lang.complimentPrompt;
  aboutTitle.textContent = lang.aboutTitle;
  aboutText.textContent = lang.aboutText;
  followTitle.textContent = lang.followTitle;
  footerText.textContent = lang.footerText;
  complimentButton.textContent = lang.complimentButton;
  twitterButton.textContent = lang.twitterButton;
  copyButton.textContent = lang.copyButton;
  counterText.textContent = lang.counterText;
  compliment.textContent = lang.defaultCompliment;

  const levelOptions = lang.levelOptions;
  levelSelect.innerHTML = `
    <option value="light">${levelOptions.light}</option>
    <option value="medium">${levelOptions.medium}</option>
    <option value="heavy">${levelOptions.heavy}</option>
  `;

  // Greeting (only update if username is already entered)
  const userName = userNameInput.value.trim();
  if (userName) {
    userGreeting.textContent = lang.greeting
      ? lang.greeting(userName)
      : `Hey ${userName},`; // fallback if translation missing
  }
}

// Use AI to generate a random compliment
async function getCompliment() {
  const lang = currentLanguage;
  const level = "light";

  // Apply loading state
  compliment.style.fontSize = "20px";
  compliment.style.color = "#ff7dbc";
  compliment.innerText = translations[lang].generating;
  compliment.style.animation = "pulse 0.8s infinite alternate";

  // Disable buttons during loading
  complimentButton.disabled = true;
  twitterButton.disabled = true;
  copyButton.disabled = true;

  try {
    const response = await fetch("http://localhost:3000/api/compliment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ language: lang, level }),
    });

    const data = await response.json();

    setTimeout(() => {
      // Remove loading animation and display full compliment immediately
      compliment.style.animation = "none";
      compliment.innerText = data.compliment || translations[lang].errorMessage;
      compliment.style.fontSize = "2rem";
      compliment.style.color = "hsla(194, 100%, 38%, 1.00)";

      // Increment counter
      complimentCount++;
      count.textContent = complimentCount;

      // Re-enable buttons
      complimentButton.disabled = false;
      twitterButton.disabled = false;
      copyButton.disabled = false;
    }, 800);
  } catch (err) {
    console.error(err);
    compliment.style.animation = "none";
    compliment.innerText = translations[lang].errorMessage;
    compliment.style.color = "red";
    compliment.style.fontSize = "2rem";

    // Re-enable buttons
    complimentButton.disabled = false;
    twitterButton.disabled = false;
    copyButton.disabled = false;
  }
}

// Share functions
function shareOnTwitter() {
  const text = `"${compliment.innerText}" - FlatterMeNot!`;
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
  );
}

function copyToClipboard() {
  navigator.clipboard
    .writeText(compliment.innerText)
    .then(() => {
      alert(translations[currentLanguage].copySuccess);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
      alert(translations[currentLanguage].errorMessage);
    });
}

// Event Listeners
submitBtn.addEventListener("click", function () {
  const name = userNameInput.value.trim();

  if (name) {
    nameModal.style.display = "none";
    mainContent.classList.remove("hidden");
    userGreeting.textContent = translations[currentLanguage].greeting(name);

    // Store name and language in localStorage
    localStorage.setItem("flatterMeNotName", name);
    localStorage.setItem("flatterMeNotLanguage", currentLanguage);
  } else {
    alert(translations[currentLanguage].namePrompt);
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
});

// Initialize app
document.addEventListener("DOMContentLoaded", function () {
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
  instagramButton.addEventListener("click", function () {
    window.open("https://www.instagram.com/re139ii/");
  });
  githubButton.addEventListener("click", function () {
    window.open("https://github.com/ri0e");
  });

  updateTextElements();
});
