import './App.css';
import Slider from 'react-slick';
import SliderBlock from './components/SliderBlock/SliderBlock';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ButtonArrow from './components/ButtonArrow';


function App() {
  const recommendPosts = [
    {
      name: "Плаха",
      discription: "Описание книги Плаха. Описание книги Плаха. Описание книги Плаха. Описание книги Плаха. Описание книги Плаха. ",
      id: 1
    },
    {
      name: "Манас",
      discription: "Описание книги Манас. Описание книги Манас. Описание книги Манас. Описание книги Манас. Описание книги Манас. ",
      id: 2
    },
    {
      name: "Семетей",
      discription: "Описание книги Семетей. Описание книги Семетей. Описание книги Семетей. Описание книги Семетей. Описание книги Семетей. ",
      id: 3
    },
    {
      name: "Сейтек",
      discription: "Описание книги Сейтек. Описание книги Сейтек. Описание книги Сейтек. Описание книги Сейтек. Описание книги Сейтек. ",
      id: 4
    },
    {
      name: "Волшебный камень",
      discription: "Описание книги Волшебный камень. Описание книги Волшебный камень. Описание книги Волшебный камень. Описание книги Волшебный камень. Описание книги Волшебный камень. ",
      id: 5
    },
    {
      name: "Бугу Эне",
      discription: "Описание книги Бугу Эне. Описание книги Бугу Эне. Описание книги Бугу Эне. Описание книги Бугу Эне. Описание книги Бугу Эне.",
      id: 6
    }
  ]

  const settings = {
    dots: false,
    buttuns: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    prevArrow: <ButtonArrow classes={"prev"}/>,
    nextArrow: <ButtonArrow classes={"next"}/>,
  };
  return (
    <div className="App">
      <div className='recommendBooksTitle'>
        <span>Р</span>
        <h1>екомендуемые книги</h1>
      </div>

      <div className="slider">
        <Slider {...settings}>
          {recommendPosts.map(item => <SliderBlock postInfo={item}/>)}
        </Slider>
      </div>
    </div>
  );
}

export default App;
