import Image from 'next/image';
import React from 'react';
import BannerImge from "@/assets/banner.png"

const Banner = () => {
     return (
          <div>
               <div>
                    <span>Workout Library</span>
                    <h2>Train with intent. Log every set.</h2>
                    <p>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>
                    <button>BROWSE WORKOUTS</button>

               </div>
               <div>
                    <Image src={BannerImge} alt='Banner img'></Image>

               </div>
          </div>
     );
};

export default Banner;