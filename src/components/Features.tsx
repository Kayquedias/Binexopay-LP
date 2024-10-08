
import React from "react";

import Badge from '../assets/badge-corner.svg'
import WhiteStart from '../assets/start-white.png'

import Rocket from '../assets/rocket-features.svg'
import Computer from '../assets/computer-features.svg'
import Certificate from '../assets/certificate-features.svg'
import Phone from '../assets/phone-features.svg'

type FeatureProps = {
  title: string;
  description: string;
  icon: string;
};

const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:text-left sm:items-start lg:flex-row lg:gap-8">
      <img src={icon} alt={title} className="w-auto max-h-40 lg:w-1/3 lg:max-w-40 mx-auto lg:mx-0" />
     
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-[#D9D9D9] font-medium">{description}</p>
      </div>
    </div>
  );
};

export const Features: React.FC = () => {
  return (
    <section className="mt-20 px-4 md:px-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="mx-auto text-center mb-16 ">
          <h2 className="text-5xl leading-[75px] font-semibold mx-auto max-w-2xl">Feel the best experience with our features</h2>
        </div>

        <div className="relative bg-gradient-to-br from-black/80 to-black px-6 py-12 md:px-12 rounded-[30px] grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-20 shadow-2xl">
          <div className="absolute -top-8 right-2.5">
              <div className="relative">
                <img src={Badge} alt="" />
                
                <img src={WhiteStart} alt="" className="absolute top-6 left-[26px]" />
              </div>
          </div>

          <FeatureCard
            title="Fast and more secured financial transaction"
            description="Experience lightning-fast, ultra-secure transactions with Binexpay. Invest in worry-free financial management."
            icon={Rocket}
          />
          <FeatureCard
            title="Control over your account"
            description="Take full control of your account with Binexpay. Manage your finances effortlessly and securely, anytime, anywhere."
            icon={Computer}
          />
          <FeatureCard
            title="Seamless and direct trader integration"
            description="Easily connect with traders via Binexpay for smooth transactions. Simplify trading effortlessly."
            icon={Certificate}
          />
          <FeatureCard
            title="User notifications and digital wallet"
            description="Receive instant notifications, manage your digital wallet effortlessly with Binexpay. Take control of your finances effortlessly."
            icon={Phone}
          />
        </div>
      </div>
    </section>
  );
};