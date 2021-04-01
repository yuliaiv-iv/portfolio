import { FaceBook } from '../components/icons/FaceBook';
import { GitHub } from '../components/icons/GitHub';
import { Email } from '../components/icons/Email';
import { Telegram } from '../components/icons/Telegram';
import { Hh } from '../components/icons/Hh';

export const info = [
  {
    title: 'Почему веб разработка?',
    discription: 'Веб разработка дает возможность творчески выразить себя и безгранично совершенствовать свои знания. Создавать продукты, которые используются людьми и будет приносить пользу - это довольно весело!',
  },
  {
    title: 'Цель',
    discription: 'Огромное желание совершенствовать имеющиеся навыки, изучать новое и получать опыт специалистов высокого уровня, чтобы стать профессионалом и построить карьеру фронтенд разработчика',
  },
  {
    title: 'Soft skills',
    discription: 'Коммуникабельная и позитивная, легко и быстро нахожу общий язык с людьми. Ответственно подхожу к поставленным задачам и дедлайнам',
  },
];

export const contacts = [
  {
    icon: <Email />,
    text: 'Можно написать email',
    link: 'mailto:yulia.ivanova6@gmail.com',
  },
  {
    icon: <Telegram />,
    text: 'А можно написать в Telegram',
    link: 'https://telegram.me/iv_yulia'
  },
  {
    icon: <Hh />,
    text: 'Резюме',
    link: 'https://hh.ru/applicant/resumes/view?resume=800795d9ff088ce4400039ed1f4a4e45587561'
  },
  {
    icon: <GitHub />,
    text: 'GitHub аккаунт',
    link: 'https://github.com/yuliaiv-iv'
  },
  {
    icon: <FaceBook />,
    text: 'Здесь можно посмотреть фоточки, сообщение написать тоже можно',
    link: 'https://www.facebook.com/yulia.iv.7'
  },
];

export const externalLinks = {
  gitHub: 'https://github.com/yuliaiv-iv',
  faceBook: 'https://www.facebook.com/yulia.iv.7',
  hh: 'https://hh.ru/applicant/resumes/view?resume=800795d9ff088ce4400039ed1f4a4e45587561'
};

export const navigation = [
  {
    text: 'Обо мне',
    url: '/'
  },
  {
    text: 'Мои Проекты',
    url: '/work'
  },
  {
    text: 'Контакты',
    url: '/contacts'
  },
]