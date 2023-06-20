import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-xl mx-auto">
      <header className="bg-[url('images/bg-about.png')] h-44 bg-no-repeat bg-cover bg-center"></header>
      <div className="px-4">
        <h2 className="font-bold text-3xl my-6">
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <p className="my-2">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. <br /> (Hitch costs extra 😉)
        </p>
        <p className="my-2">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="mx-4 my-6 rounded-lg bg-orange-400 p-6">
        <h2 className="font-bold text-xl">
          Your destination is waiting. <br />
          Your van is ready.
        </h2>
        <Link
          to="/vans"
          className="bg-black text-white inline-block px-4 py-2 rounded-md font-bold mt-4 hover:drop-shadow-xl hover:scale-105 duration-300 ease-in-out"
        >
          Explore our vans
        </Link>
      </div>
    </div>
  );
};

export default About;
