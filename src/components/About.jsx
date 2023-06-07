function About() {
  return (
    <div className="">
      <div className="cover"></div>

      <div className="px-7">
        <h1 className="text-[34px] font-bold leading-10 pt-[40px] pb-[32px]">
          Don&apos;t squeezein sedan when you could relax in a van
        </h1>
        <p className="pb-[20px]">
          Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
          (Hitch costs extra 😉)
        </p>
        <p className="pb-[42px]">
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>

        <div className="bg-[#FFCC8D] rounded-md pt-[32px] px-[36px] mb-[36px]">
          <h3 className="font-bold text-[26px] leading-8 pb-[32px]">Your destination is waiting. Your van is ready.</h3>
          <button className="bg-[#161616] text-gray-50 rounded-md font-semibold text-[16px] py-[12px] px-[22px] mb-8 cursor-pointer"
          >
            Explore our vans
          </button>
        </div>
      </div>
    </div>
  )
}

export default About;