import './style.css';
import './comment.css';
import getData, { addLikes, likeCount } from './modules/api.js';
import createCardItem from './modules/createCardItem.js';
import displayTvShownumbers from './modules/itemsCounter.js';
import getMovieTitle from './modules/getMovieTitle.js';
import enableComments from './modules/commentPop.js';

document.addEventListener('click', async (e) => {
  if (e.target.matches('.heart')) {
    e.target.classList.toggle('is-active');
    const id = Number(e.target.id);
    const like = Number(e.target.nextSibling.textContent.match(/[0-9]/g).join(''));
    e.target.nextSibling.textContent = `${like + 1} likes`;
    await addLikes(id);
  }
});

const loading = () => {
  const cardsContainer = document.querySelector('.grid-cards-container');
  const loadDiv = document.createElement('div');
  const mask = document.createElement('div');
  loadDiv.classList.add('loading');
  mask.classList.add('mask');
  cardsContainer.append(mask, loadDiv);
};

const removeLoding = () => {
  document.querySelector('.loading').remove();
  document.querySelector('.mask').remove();
};

const renderItems = async (showCount = 16) => {
  loading();
  const itemsData = await getData();
  const showLess = itemsData.slice(0, showCount);
  displayTvShownumbers(showLess);
  removeLoding();
  const likes = await likeCount();
  showLess.forEach((element, i) => {
    let numLikes = 0;
    numLikes = likes.filter((like) => like.item_id === showLess[i].id);
    if (numLikes.length > 0) {
      createCardItem(showLess[i], numLikes[0].likes);
    } else {
      createCardItem(showLess[i], 0);
    }
  });
};

renderItems().then(() => {
  getMovieTitle();
  enableComments();
});
