const links = [
    "https://www.newyorker.com/magazine/2008/12/22/dead-man-laughing",
    "https://www.newyorker.com/news/essay/shibboleth-the-role-of-words-in-the-campus-protests",
    "https://www.newyorker.com/magazine/2023/11/27/the-fall-of-my-teen-age-self",
    "https://www.newyorker.com/magazine/2023/07/10/on-killing-charles-dickens",
    "https://www.newyorker.com/magazine/1999/10/18/next-generation-l-zadie-smith"
  ];
  const clickableImage = document.getElementById('clickableImage');
  clickableImage.addEventListener('click' , () => {
    const randomIndex = Math.floor(Math.random() * links.length);
    const randomLink = links[randomIndex];
    window.location.href = randomLink;
  });
