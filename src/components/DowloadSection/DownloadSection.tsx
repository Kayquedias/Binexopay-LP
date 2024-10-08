
import PlayStoreIcon from '../../assets/play-store.svg'
import IphoneDownload from '../../assets/iphone-download.png'

import './styles.css'

export const DownloadSection = () => {
  return (
    <section className="mt-40">
      <div className="relative bg-gradient-to-b text-center h-[620px] sm:h-[660px] mx-4 from-black/75 to-black py-20 rounded-[20px] px-8 sm:px-16 max-w-screen-xl md:mx-12 lg:mx-auto shadow-2xl download-container">
        <h2 className="text-2xl sm:text-5xl font-medium text-white">
          Get <span className="text-primary-700">Binexopay</span> mobile app
        </h2>

        <p className="relative text-white text-3xl mt-6 max-w-4xl mx-auto">
          With Binexopay, you can access your account anywhere, anytime, for balance and so much more.
        </p>

        <div className="mt-12 md:mt-24">
          <a
            href="#"
            className="bg-white text-black text-lg sm:text-2xl leading-8 font-semibold py-2 sm:py-2.5 px-8 rounded-2xl inline-flex items-center"
          >
            <img
              src={PlayStoreIcon}
              alt="Download App"
              className="w-6 sm:w-auto max-w-7 mr-3"
            />
            Download App
          </a>
        </div>

        <img
          src={IphoneDownload}
          alt="Binexopay mobile app"
          className="w-full sm:max-w-xl md:max-w-4xl absolute left-0 bottom-0 sm:left-1/2 sm:-translate-x-1/2"
        />
      </div>
    </section>
  );
}