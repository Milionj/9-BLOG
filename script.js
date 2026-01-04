const postsContainer = document.querySelector('.posts');

const utilisateur = {
    nom : "Doe",
    prenom: "John",
    Service: "marketing"
}

const posts = [
    {
    titre : "SEO, les bonnes pratiques",
    hashtag : "#SEO",
    extrait : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi iusto reiciendis omnis expedita voluptatibus sit deleniti inventore molestias. Nisi veritatis eum explicabo, accusantium rerum totam facilis minus voluptates quia nulla!",
    },

        {
    titre : "Bien débuter en référencement payant",
    hashtag : "#référencement",
    extrait : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi iusto reiciendis omnis expedita voluptatibus sit deleniti inventore molestias. Nisi veritatis eum explicabo, accusantium rerum totam facilis minus voluptates quia nulla!",
    },

        {
    titre : "Content Marketing, les bons arguments",
    hashtag : "#Contentmarketing",
    extrait : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi iusto reiciendis omnis expedita voluptatibus sit deleniti inventore molestias. Nisi veritatis eum explicabo, accusantium rerum totam facilis minus voluptates quia nulla!",
    }

]; 

posts.forEach(item => {
  const article = `
    <div class="post">
      <div class="post-titre">${item.titre}</div>
      <div class="post-extrait">${item.extrait}</div>
      <div class="post-hashtag">${item.hashtag}</div>
    </div>
  `;
  postsContainer.innerHTML += article;
});
