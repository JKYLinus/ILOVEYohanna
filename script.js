document.addEventListener('DOMContentLoaded', () => {
  const noButton = document.querySelector('.No-Button');
  const yesButton = document.querySelector('.Yes-Button');
  const buttonsContainer = document.querySelector('.buttons');

  let placeholderAdded = false;
  let yesScale = 1;

  // NO flieht
  noButton.addEventListener('mouseenter', () => {
    if (!placeholderAdded) {
      const placeholder = noButton.cloneNode(true);
      placeholder.classList.add('no-placeholder');
      buttonsContainer.insertBefore(placeholder, noButton);
      placeholderAdded = true;
    }

    const maxX = buttonsContainer.offsetWidth - noButton.offsetWidth;
    const maxY = 120;

    noButton.style.position = 'absolute';
    noButton.style.left = `${Math.random() * maxX}px`;
    noButton.style.top = `${Math.random() * maxY}px`;
  });

  // 😈 JEDER NO-KLICK → YES VERDOPPELT SICH
  noButton.addEventListener('mousedown', () => {
    yesScale *= 2; // 🔥 KEINE Grenze, extrem schnell
    yesButton.style.transform = `scale(${yesScale})`;
    // Puls-Effekt
yesButton.style.transition = 'transform 0.25s ease, left 0.25s ease, top 0.25s ease';
yesButton.style.transform = `scale(${yesScale}) rotate(-5deg)`;

// Kurz zurück auf gerade Position
setTimeout(() => {
  yesButton.style.transform = `scale(${yesScale}) rotate(0deg)`;
}, 150);

// Optional: YES leicht Richtung NO verschieben
const yesRect = yesButton.getBoundingClientRect();
const noRect = noButton.getBoundingClientRect();
const moveX = (noRect.left - yesRect.left) * 0.1; // 10% Richtung NO
const moveY = (noRect.top - yesRect.top) * 0.1;
yesButton.style.position = 'relative';
yesButton.style.left = (parseFloat(yesButton.style.left || 0) + moveX) + 'px';
yesButton.style.top = (parseFloat(yesButton.style.top || 0) + moveY) + 'px';

  });

  yesButton.addEventListener('click', () => {
    const mainContainer = document.getElementById('mainContainer');
  
    // Alte Card fade-out
    mainContainer.classList.add('fade-out');
  
    setTimeout(() => {
      // Neue Card erstellen
      const newCard = document.createElement('div');
      newCard.className = 'card';
  
      // Text
      const text = document.createElement('p');
      text.className = 'card-text';
      text.textContent = 'IM SOOOO HAPPPYYYY ❤️';

      document.addEventListener('DOMContentLoaded', () => {
  const noButton = document.querySelector('.No-Button');
  const yesButton = document.querySelector('.Yes-Button');
  const buttonsContainer = document.querySelector('.buttons');

  let placeholderAdded = false;
  let yesScale = 1;

  // NO flieht
  noButton.addEventListener('mouseenter', () => {
    if (!placeholderAdded) {
      const placeholder = noButton.cloneNode(true);
      placeholder.classList.add('no-placeholder');
      buttonsContainer.insertBefore(placeholder, noButton);
      placeholderAdded = true;
    }

    const maxX = buttonsContainer.offsetWidth - noButton.offsetWidth;
    const maxY = 120;

    noButton.style.position = 'absolute';
    noButton.style.left = `${Math.random() * maxX}px`;
    noButton.style.top = `${Math.random() * maxY}px`;
  });

  // 😈 JEDER NO-KLICK → YES VERDOPPELT SICH
  noButton.addEventListener('mousedown', () => {
    yesScale *= 2; // 🔥 KEINE Grenze, extrem schnell
    yesButton.style.transform = `scale(${yesScale})`;
    // Puls-Effekt
yesButton.style.transition = 'transform 0.25s ease, left 0.25s ease, top 0.25s ease';
yesButton.style.transform = `scale(${yesScale}) rotate(-5deg)`;

// Kurz zurück auf gerade Position
setTimeout(() => {
  yesButton.style.transform = `scale(${yesScale}) rotate(0deg)`;
}, 150);

// Optional: YES leicht Richtung NO verschieben
const yesRect = yesButton.getBoundingClientRect();
const noRect = noButton.getBoundingClientRect();
const moveX = (noRect.left - yesRect.left) * 0.1; // 10% Richtung NO
const moveY = (noRect.top - yesRect.top) * 0.1;
yesButton.style.position = 'relative';
yesButton.style.left = (parseFloat(yesButton.style.left || 0) + moveX) + 'px';
yesButton.style.top = (parseFloat(yesButton.style.top || 0) + moveY) + 'px';

  });
  yesButton.addEventListener('click', () => {
    const mainContainer = document.getElementById('mainContainer');
  
    mainContainer.classList.add('fade-out');
  
    setTimeout(() => {
      const newCard = document.createElement('div');
      newCard.className = 'card';
  
      // GIF
      const gifContainer = document.createElement('div');
      gifContainer.id = 'tenorGifContainer2';
      gifContainer.style.width = '200px';
      gifContainer.style.margin = '-20px auto 20px';
  
      const tenorDiv = document.createElement('div');
      tenorDiv.className = 'tenor-gif-embed';
      tenorDiv.setAttribute('data-postid', '18483789');
      tenorDiv.setAttribute('data-share-method', 'host');
      tenorDiv.setAttribute('data-aspect-ratio', '1.12676');
      tenorDiv.setAttribute('data-width', '200px');
      tenorDiv.innerHTML = `<a href="https://tenor.com/view/wow-oh-ohboy-gif-18483789">Wow Oh GIF</a> from <a href="https://tenor.com/search/wow-gifs">Wow GIFs</a>`;
  
      gifContainer.appendChild(tenorDiv);
      newCard.appendChild(gifContainer);
  
      // Großer Text
      const text = document.createElement('p');
      text.className = 'card-text';
      text.textContent = 'IM SOOOO HAPPPYYYY ❤️';
      newCard.appendChild(text);
  
      // Kleiner Text
      const smallText = document.createElement('p');
      smallText.className = 'sub-text';
      smallText.textContent = 'LETS CRACK 😈';
      newCard.appendChild(smallText);
  
      // Alte Card ersetzen
      mainContainer.innerHTML = '';
      mainContainer.appendChild(newCard);
  
      // Tenor Script dynamisch laden
      const script = document.createElement('script');
      script.src = "https://tenor.com/embed.js";
      script.async = true;
      gifContainer.appendChild(script);
  
    }, 600);
  });
  


  function spawnHearts() {
    for (let i = 0; i < 5; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.textContent = '❤️';

      const rect = yesButton.getBoundingClientRect();
      heart.style.left = rect.left + rect.width / 2 + 'px';
      heart.style.top = rect.top + 'px';

      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 1500);
    }
  }
});
      
  
      // GIF Container
      const gifContainer = document.createElement('div');
      gifContainer.id = 'tenorGifContainer2';
      gifContainer.style.width = '200px';
      gifContainer.style.margin = '-20px auto 20px'; // zentrieren + nach oben
  
      // Tenor GIF Embed
      const tenorDiv = document.createElement('div');
      tenorDiv.className = 'tenor-gif-embed';
      tenorDiv.setAttribute('data-postid', '18483789');
      tenorDiv.setAttribute('data-share-method', 'host');
      tenorDiv.setAttribute('data-aspect-ratio', '1.12676');
      tenorDiv.setAttribute('data-width', '200px');
      tenorDiv.innerHTML = `<a href="https://tenor.com/view/wow-oh-ohboy-gif-18483789">Wow Oh GIF</a> from <a href="https://tenor.com/search/wow-gifs">Wow GIFs</a>`;
  
      gifContainer.appendChild(tenorDiv);
      newCard.appendChild(gifContainer);
      newCard.appendChild(text);
  
      // Alte Card ersetzen
      mainContainer.innerHTML = '';
      mainContainer.appendChild(newCard);
  
      // Tenor Script dynamisch laden
      const script = document.createElement('script');
      script.src = "https://tenor.com/embed.js";
      script.async = true;
      gifContainer.appendChild(script);
  
    }, 600); // Dauer fade-out
  });
  


  function spawnHearts() {
    for (let i = 0; i < 5; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.textContent = '❤️';

      const rect = yesButton.getBoundingClientRect();
      heart.style.left = rect.left + rect.width / 2 + 'px';
      heart.style.top = rect.top + 'px';

      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 1500);
    }
  }
});