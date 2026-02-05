document.addEventListener('DOMContentLoaded', () => {
  const noButton = document.querySelector('.No-Button');
  const yesButton = document.querySelector('.Yes-Button');
  const buttonsContainer = document.querySelector('.buttons');
  const mainContainer = document.getElementById('mainContainer');

  let placeholderAdded = false;
  let yesScale = 1;           // aktuelle YES-Größe dauerhaft
  let yesHoverTriggered = false; // Flag, damit YES nur einmal pro Hover pulsiert

  // 🏃 NO flieht & YES pulsiert einmal pro Hover
  noButton.addEventListener('mouseenter', () => {
    // Platzhalter einmal erstellen
    if (!placeholderAdded) {
      const placeholder = noButton.cloneNode(true);
      placeholder.classList.add('no-placeholder');
      placeholder.style.visibility = 'hidden';
      buttonsContainer.insertBefore(placeholder, noButton);
      placeholderAdded = true;
    }

    // NO Button springt weg
    const maxX = buttonsContainer.offsetWidth - noButton.offsetWidth;
    const maxY = 120;
    noButton.style.position = 'absolute';
    noButton.style.left = `${Math.random() * maxX}px`;
    noButton.style.top  = `${Math.random() * maxY}px`;

    // ✅ YES nur einmal pro Hover vergrößern + Herz-Animation
    if (!yesHoverTriggered) {
      yesScale += 0.5; // YES leicht größer
      yesButton.style.transform = `scale(${yesScale})`;

      // Herz-Animation starten
      yesButton.classList.remove('heart-grow');
      void yesButton.offsetWidth; // Animation-Reset
      yesButton.classList.add('heart-grow');

      yesHoverTriggered = true; // Flag setzen
    }
  });

  // Hover verlassen → Flag zurücksetzen
  noButton.addEventListener('mouseleave', () => {
    yesHoverTriggered = false;
  });

  // 💖 YES-Klick → neue Card
  yesButton.addEventListener('click', () => {
    mainContainer.classList.add('fade-out');

    setTimeout(() => {
      const newCard = document.createElement('div');
      newCard.className = 'card';

      // GIF Container
      const gifContainer = document.createElement('div');
      gifContainer.style.width = '200px';
      gifContainer.style.margin = '-20px auto 20px';

      const tenorDiv = document.createElement('div');
      tenorDiv.className = 'tenor-gif-embed';
      tenorDiv.setAttribute('data-postid', '18483789');
      tenorDiv.setAttribute('data-share-method', 'host');
      tenorDiv.setAttribute('data-aspect-ratio', '1.12676');
      tenorDiv.setAttribute('data-width', '200px');

      gifContainer.appendChild(tenorDiv);

      // Großer Text
      const text = document.createElement('p');
      text.className = 'card-text';
      text.textContent = 'IM SOOOO HAPPPYYYY ❤️';

      // Kleiner Text "LETS CRACK 😈"
      const smallText = document.createElement('span');
      smallText.className = 'sub-text';
      smallText.style.fontSize = '10px';
      smallText.style.color = 'black';
      smallText.style.opacity = '1';
      smallText.textContent = 'LETS CRACK 😈';

      // Alles zur neuen Card hinzufügen
      newCard.appendChild(gifContainer);
      newCard.appendChild(text);
      newCard.appendChild(smallText);

      // Alte Card ersetzen
      mainContainer.innerHTML = '';
      mainContainer.appendChild(newCard);

      // Tenor Script dynamisch laden
      const script = document.createElement('script');
      script.src = 'https://tenor.com/embed.js';
      script.async = true;
      document.body.appendChild(script);

    }, 500); // fade-out Dauer
  });
});
