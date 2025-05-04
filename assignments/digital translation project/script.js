const links = [
    "https://vimeo.com/1079921948",
    "https://vimeo.com/759731558",
    "https://vimeo.com/569662773",
    "https://vimeo.com/667014870",
    "https://vimeo.com/615739359",
    "https://youtu.be/pmLhbn2avvI?si=5aX3EzYs8YOWA_pl"
  ];
  const clickableImage = document.getElementById('clickableImage');
  clickableImage.addEventListener('click' , () => {
    const randomIndex = Math.floor(Math.random() * links.length);
    const randomLink = links[randomIndex];
    window.location.href = randomLink;
  });
