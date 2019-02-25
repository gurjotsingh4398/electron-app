const marked = require("marked");

const { remote } = require("electron");
let window = remote.getCurrentWindow();

const markdownView = document.querySelector("#markdown");
const htmlView = document.querySelector("#html");
const newFileButton = document.querySelector("#new-file");
const openFileButton = document.querySelector("#open-file");
const saveMarkdownButton = document.querySelector("#save-markdown");
const revertButton = document.querySelector("#revert");
const saveHtmlButton = document.querySelector("#save-html");
const minButton = document.querySelector("#min-btn");
const maxButton = document.querySelector("#max-btn");
const closeButton = document.querySelector("#close-btn");

const renderMarkdownToHtml = markdown => {
  htmlView.innerHTML = marked(markdown, { sanitize: true });
};

markdownView.addEventListener("keyup", event => {
  const content = event.target.value;
  renderMarkdownToHtml(content);
});

document.getElementById("min-btn").addEventListener("click", function(e) {
  const window = remote.getCurrentWindow();
  window.minimize();
});

minButton.addEventListener("click", () => {
  window.minimize();
});

maxButton.addEventListener("click", () => {
  if (!window.isMaximized()) {
    window.maximize();
  } else {
    window.unmaximize();
  }
});

closeButton.addEventListener("click", () => {
  console.log("close");
  window.close();
});
