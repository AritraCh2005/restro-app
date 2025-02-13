import Hero from "../components/layout/Hero";
import Header from "../components/layout/Headers"  // Corrected path
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    
    <>
      
      <Hero/>
      <HomeMenu/>
      <section className="text-center my-16" id="about">
       <SectionHeaders subHeader={'Our Vision'}
       mainHeader={'About'}
       />
       <div className="max-w-md mx-auto mt-4 text-white flex-col gap-4">
       <p >
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod.qch ih ihqicj hehcqi ihiec ihqicj opdguecuhoi
        ecghhiwjeocoq
       </p>
       <p >
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod.qch ih ihqicj hehcqi ihiec ihqicj opdguecuhoi
        ecghhiwjeocoq
       </p>
       <p >
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod.qch ih ihqicj hehcqi ihiec ihqicj opdguecuhoi
        ecghhiwjeocoq
       </p>
       </div>
       
      </section>
      <section className="text-center mt-8" id="contact">
        <SectionHeaders subHeader={'Don\'t Hesitate'}
       mainHeader={'Contact Us'}
       />
       <div className="my-8">
       <a className="text-2xl underline text-gray-700"href="tel:+923321234567">
        +923321234567
       </a>
       </div>
       
      </section>
      
    </>
  );
}
