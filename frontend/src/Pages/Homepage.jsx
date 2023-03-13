import { BsFillBagPlusFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { GiAlliedStar } from 'react-icons/gi'
import { VscArrowSmallRight } from 'react-icons/vsc'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import Slider from "react-slick";

import food1 from '../assets/food-1.jpeg'
import food2 from '../assets/food-2.jpeg'
import food3 from '../assets/food-3.jpeg'
import food4 from '../assets/food-4.jpeg'
import food5 from '../assets/food-5.jpeg'
import food6 from '../assets/food-6.jpeg'
import reviewImage from '../assets/review-section.png'

import paymtd1 from '../assets/pay-1.png'
import paymtd2 from '../assets/pay-2.png'
import paymtd3 from '../assets/pay-3.png'
import paymtd4 from '../assets/pay-4.png'
import paymtd5 from '../assets/pay-5.png'
import paymtd6 from '../assets/pay-6.png'

import bannerPizza from '../assets/pizza.png'
import { Layout, Section, OrderCard, MenuCard, FeaturedCard, ReviewCard } from '../components'

const Homepage = () => {

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", alignItems: 'center', justifyContent: 'center', background: "red", color: "#fff", padding: "10px", width: '2rem', height: "2rem", borderRadius: '10px' }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", alignItems: 'center', justifyContent: 'center', background: "red", color: "#fff", padding: "10px", width: '2rem', height: "2rem", borderRadius: '10px' }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <Layout>
      {/* banner section */}
      <div className='flex relative flex-col md:flex-row items-center justify-between bg-burgundy-900 rounded-2xl overflow-hidden my-10 p-10 md:p-20 h-auto'>
        <div className='flex flex-col text-white justify-start items-center md:items-start mb-6 md:mb-0 md:gap-12 '>
          <h4 className='text-center md:text-start text-4xl font-bold md:text-5xl md:font-medium leading-loos tracking-widest mb-4'>Order your <br /> best food <br /> anytime</h4>
          <button className='bg-red-600 cursor-pointer p-3 rounded-full text-sm mt-6 md:mt-0'>Explore Menu</button>
        </div>
        <img src={bannerPizza} alt="pizza" className=' h-44 w-full md:max-h-72 md:w-5/12 rounded-xl' />
      </div>
      {/* banner end here */}

      <Section>
        <div className='flex flex-col items-center gap-4 justify-center text-center my-20 md:px-20'>
          <h4 className='text-burgundy-900 text-3xl font-bold'>Pizza Di Roma</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat delectus autem a sit atque laborum, molestias nam natus magnam earum numquam placeat modi doloremque architecto!</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10 justify-between items-center'>
          <OrderCard icon={<BsFillBagPlusFill />} title='Easy To Order' text='Lorem ipsum dolor sit amet consectetur adipisicing elit.' />
          <OrderCard icon={<TbTruckDelivery />} title='Fast Delivery' text='Lorem ipsum dolor sit amet consectetur adipisicing elit.' />
          <OrderCard icon={<GiAlliedStar />} title='Best Quality' text='Lorem ipsum dolor sit amet consectetur adipisicing elit.' />
        </div>
      </Section>

      <Section>
        <div className='flex items-center justify-center mb-6'>
          <h4 className='text-2xl font-bold'>Our Menus</h4>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-between md:mx-20 lg:mx-20 gap-6 md:gap-6 sm:gap:12'>
          <MenuCard image={food1} icon={<VscArrowSmallRight />} title='Starters' />
          <MenuCard image={food2} icon={<VscArrowSmallRight />} title='Beakfast' />
          <MenuCard image={food3} icon={<VscArrowSmallRight />} title='Lunch' />
          <MenuCard image={food4} icon={<VscArrowSmallRight />} title='Dinner' />
          <MenuCard image={food4} icon={<VscArrowSmallRight />} title='Dinner' />
          <MenuCard image={food4} icon={<VscArrowSmallRight />} title='Dinner' />
        </div>
      </Section>

      <Section>
        <div className='flex items-center justify-center'>
          <h4 className='text-2xl font-bold '>Featured Meals</h4>
        </div>
        <Slider {...settings} className=' gap-3 px-4 py-8 space-y-6'>
          <FeaturedCard image={food1} title='Starters' price='43.6' />
          <FeaturedCard image={food1} title='Starters' price='43.6' />
          <FeaturedCard image={food1} title='Starters' price='43.6' />
          <FeaturedCard image={food1} title='Starters' price='43.6' />
        </Slider>
      </Section>

      <Section>
        <div className='flex flex-col md:flex-row items-center justify-start gap-10'>
          <img src={reviewImage} alt="review" className='' />
          <ReviewCard />
        </div>
      </Section>

      <Section>
        <div className='bg-slate-100 rounded-xl px-10 md:px-20 py-10 flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className='flex gap-2 flex-col'>
            <h4 className='text-4xl font-bold'>2k+</h4>
            <p className='text-sm text-slate-500'>Food Items</p>
          </div>
          <div className='flex gap-2 flex-col'>
            <h4 className='text-4xl font-bold'>10k+</h4>
            <p className='text-sm text-slate-500'>Home Delivery</p>
          </div>
          <div className='flex gap-2 flex-col'>
            <h4 className='text-4xl font-bold'>100+</h4>
            <p className='text-sm text-slate-500'>Active Chef</p>
          </div>
          <div className='flex gap-2 flex-col'>
            <h4 className='text-4xl font-bold'>20k+</h4>
            <p className='text-sm text-slate-500'>Our Customer</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className='flex flex-col'>
          <h4 className='text-2xl font-bold my-6'>Payment Methods</h4>
          <div className='flex flex-wrap items-center gap-6 justify-between'>
            <div className='bg-slate-100 p-3 rounded-xl flex items-center justify-center'>
              <img src={paymtd1} alt="payment method" className='h-8 self-center ' />
            </div>
            <div className='bg-slate-100 p-3 rounded-xl flex items-center justify-center'>
              <img src={paymtd2} alt="payment method" className='h-8' />
            </div>
            <div className='bg-slate-100 p-3 rounded-xl flex items-center justify-center'>
              <img src={paymtd3} alt="payment method" className='h-8' />
            </div>
            <div className='bg-slate-100 p-3 rounded-xl flex items-center justify-center'>
              <img src={paymtd4} alt="payment method" className='h-8' />
            </div>
            <div className='bg-slate-100 p-3 rounded-xl flex items-center justify-center'>
              <img src={paymtd5} alt="payment method" className='h-8' />
            </div>
            <div className='bg-slate-100 p-3 rounded-xl flex items-center justify-center'>
              <img src={paymtd6} alt="payment method" className='h-8' />
            </div>
          </div>
        </div>
      </Section>

    </Layout>
  )
}

export default Homepage