
import ServiceImage from '../assets/dashboard-cellphopnes.png'
import ServiceImage2 from '../assets/ui-services.png'

import ArrowRight from '../assets/arrow-right.svg'

export const Services = () => {
  return (
    <section className="bg-white mt-16">
      <div className="gap-8 items-center py-8 px-4 sm:px-6 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-full max-w-lg mx-auto"
          src={ServiceImage}
          alt="dashboard image"
        />

        <div className="flex flex-col gap-9 mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl leading-[60px] font-semibold text-black">
            Personalize your financial insights and goals
          </h2>

          <p className="mb-6 font-medium text-black/50 md:text-2xl">
            Track your spending patterns, analyze income or expenses easily, and receive personalized recommendations to optimize your financial habits.
          </p>

          <a
            href="#"
            className="group w-max inline-flex items-center text-black bg-primary-700 hover:bg-primary-800 font-semibold rounded-2xl text-xl md:text-2xl px-10 py-4 text-center mt-4"
          >
            Get started
            <img src={ArrowRight} alt="" className='ml-4 group-hover:ml-8 transition-all' />
          </a>
        </div>
      </div>

      <div className="gap-8 items-center py-8 px-4 sm:px-8 mx-auto max-w-screen-xl md:gap-16 md:grid md:grid-cols-2 sm:py-16">
        <div className="flex flex-col gap-9 mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl leading-[60px] font-semibold text-black">
            One App for Everyone
          </h2>

          <p className="mb-6 font-medium text-black/50 md:text-2xl">
            With this app, you can effortlessly track your spending, set budgets, manage investments, and pay bills, or simply keeping your daily expenses in check—all in one place.
          </p>
        </div>

        <img
          className="w-full mt-5 sm:mt-6 md:mt-0 max-w-lg mx-auto"
          src={ServiceImage2}
          alt="dashboard image"
        />
      </div>
    </section>
  );
}