const cardContainer = document.querySelector('.grid-cards-container');

const createCardItem = (item, itemLike = 0) => {
  const cardElement = document.createElement('article');
  const cardImage = document.createElement('img');
  const cardTitle = document.createElement('h4');
  const commentAndLikeDiv = document.createElement('div');
  const commentBtn = document.createElement('button');
  const reserveBtn = document.createElement('button');
  const pLikesTag = document.createElement('p');
  const likeHeart = document.createElement('div');
  const movieTitle = document.createElement('h4');

  cardContainer.append(cardElement);
  cardElement.append(cardImage, cardTitle, commentAndLikeDiv);
  cardElement.classList.add('item');
  cardTitle.classList.add('card-title');
  movieTitle.classList.add('movie-title');
  likeHeart.classList.add('heart');
  likeHeart.id = item.id;
  commentAndLikeDiv.append(movieTitle, likeHeart, pLikesTag, commentBtn, reserveBtn);
  pLikesTag.classList.add('p-like');
  commentAndLikeDiv.classList.add('comment-and-like');
  commentBtn.classList.add('comment-btn');
  // reserveBtn.classList.add('comment-btn');
  reserveBtn.classList.add('reserve-btn');
  //
  commentBtn.setAttribute('movie_id', item.id);
  reserveBtn.setAttribute('movie_id', item.id);
  commentBtn.id = item.id;
  reserveBtn.id = item.id;
  commentBtn.textContent = 'Comment';
  reserveBtn.textContent = 'Reserve';
  movieTitle.textContent = 'Movie Title';

  pLikesTag.textContent = `${itemLike} likes`;
  cardImage.src = item.image.medium;
  cardTitle.textContent = item.name;
};

export default createCardItem;