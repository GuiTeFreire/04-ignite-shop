import Image from "next/image";
import { HomeContainer, Product } from "./styles/pages/home";

import { useKeenSlider } from 'keen-slider/react'

import prancha1 from '../assets/pranchas/1.png'
import prancha2 from '../assets/pranchas/2.png'
import prancha3 from '../assets/pranchas/3.png'
import prancha4 from '../assets/pranchas/4.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={prancha1} width={520} height={480} alt="" />
        <footer>
          <strong>Prancha X</strong>
          <span>R$ 2390,00</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={prancha2} width={520} height={480} alt="" />
        <footer>
          <strong>Prancha X</strong>
          <span>R$ 2390,00</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={prancha3} width={520} height={480} alt="" />
        <footer>
          <strong>Prancha X</strong>
          <span>R$ 2390,00</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={prancha4} width={520} height={480} alt="" />
        <footer>
          <strong>Prancha X</strong>
          <span>R$ 2390,00</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
