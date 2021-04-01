import News from '../img/news.jpg';
import Player from '../img/player.jpg';
import Mesto from '../img/mesto.jpg';
import Travel from '../img/travel.jpg';
import NewsMain from '../img/news-main.jpg';
import PlayerMain from '../img/player-main.jpg';
import MestoMain from '../img/mesto-main.png';
import TravelMain from '../img/travel-main.jpg';

export const projects = [
  {
    title: 'News Explorer',
    mainImage: NewsMain,
    image: News,
    url: '/work/news-explorer',
    link: 'https://github.com/yuliaiv-iv/news-explorer-frontend',
    details: [
      {
        title: 'Описание',
        description: 'Приложение в котором можно найти новости по ключевому слову отправляя запрос к News API и сохранить в личном кабинете. Сайт состоит из двух страниц: главная и страница с сохранёнными новостями, на ней отображаются материалы, которые пользователь добавил в избранное. Всплывающие окна (попапы): с формой входа и с формой регистрации',
      },
      {
        title: 'Технологии',
        description: 'React, React router dom, HTML5, CSS3, Local storage и JWT, API для аутентификации пользователей и сохранения/удаления статей, Flex и Grid layout, Live валидация форм, Адаптивная вёрстка',
      },
      {
        title: 'Методологии',
        description: 'ООП, БЭМ',
      },
    ],
  },
  {
    title: 'Mesto',
    mainImage: MestoMain,
    image: Mesto,
    url: '/work/mesto',
    link: 'https://github.com/yuliaiv-iv/react-mesto-auth',
    details: [
      {
        title: 'Описание',
        description: 'Интерактивный сервис с элементами соц сети. Реализация постановки и снятие лайка, просмотр фотографий в увеличенном формате. Возможность обновлять инфо и аватар юзера, опубликовывать и удалять созданные карточки. Регистрация и авторизации пользователя, переадресация, защита маршрутов',
      },
      {
        title: 'Технологии',
        description: 'React, React router dom, HTML5, CSS3, Local storage и JWT, API для аутентификации пользователей, Flex и Grid layout, Live валидация форм, Адаптивная вёрстка',
      },
      {
        title: 'Методологии',
        description: 'ООП, БЭМ',
      },
    ],
  },
  {
    title: 'Russian Travel',
    mainImage: TravelMain,
    image: Travel,
    url: '/work/travel',
    link: 'https://github.com/yuliaiv-iv/russian-travel',
    details: [
      {
        title: 'Описание',
        description: 'Лендинг - типовой одностраничный сайт. Данный проект предоставляет информацию о путешествиях и уникальных местах страны',
      },
      {
        title: 'Технологии',
        description: 'HTML5, CSS3, Flex и Grid layout, Адаптивная вёрстка',
      },
      {
        title: 'Методологии',
        description: 'БЭМ',
      },
    ],
  },
  {
    title: 'Music Player',
    mainImage: PlayerMain,
    image: Player,
    url: '/work/player',
    link: 'https://github.com/yuliaiv-iv/music-app',
    details: [
      {
        title: 'Описание',
        description: 'Данный проект предоставляет возможность выбирать из списка и прослушивать музыкальные трэки. Реализован контроль плеера: пауза, проигрывать, пролистывать вперед / назад, изменять вручную текущую позицию бегунка',
      },
      {
        title: 'Технологии',
        description: 'React, HTML5, CSS3, Fontawesome Library и Icons, SCSS, Animation',
      },
      // {
      //   title: 'Методологии',
      //   description: '',
      // },
    ],
  },
];