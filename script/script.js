const form = document.getElementById('textForm');
const textInput = document.getElementById('textInput');
const results = document.getElementById('results');
const charCount = document.getElementById('charCount');
const wordCount = document.getElementById('wordCount');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const text = textInput.value;
  
  charCount.textContent = text.length;
  wordCount.textContent = countWords(text);
  
  results.classList.add('show');
});

function countWords(text) {
  if (text.trim() === '') {
    return 0;
  }
  return text.trim().split(/\s+/).length;
}