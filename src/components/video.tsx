
//import Thumbs from '@/assets/images/main-bg.jpg'
import Image from 'next/image'
import styles from '@/assets/css/video.module.sass'
//import Logo from '@/assets/images/logo-dropz.svg';

export default function Video() {
  return (
    <>
{/*       <Image className={styles.logo} src={Logo.src} width={60} height={70} alt="RAYN Dropz Logo" /> */}
      <div className={styles.video}>
        <video autoPlay loop muted>  
          <source src="https://rewardz.network/videos/rain_2.mp4" type="video/mp4" />
          <source src="https://rewardz.network/videos/rain_2.webm" type="video/webm" />
        </video>
      </div>
    </>
  )
}