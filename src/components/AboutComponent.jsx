
import Authentic from "../images/Authentic.png"
import Affordable from "../images/Affordable.png"
import Natural from "../images/Natural.png"
import Quality from "../images/Quality.png"
import Logo from "../images/Logo.png";
import Grinding from "../images/Grinding.jpg"
import Packing from "../images/Packing.png" 
import Rice from "../images/Rice.png" 
import Soaking from "../images/Soaking.jpg"

const features = [
    {
      id: 1,
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      icon: Authentic, // replace with real path
    },
    {
      id: 2,
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
      icon: Affordable,
    },
    {
      id: 3,
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
      icon: Natural,
    },
    {
      id: 4,
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
      icon: Quality,
    },
  ];


  const steps = [
    {
      id: 1,
      title: "Selection of Rice",
      icon: Rice,
      desc: "We start with carefully selected, premium quality rice sourced from trusted farms.",
    },
    {
      id: 2,
      title: "Soaking the Rice",
      icon: Soaking,
      desc: "The rice is thoroughly soaked to achieve the right softness for grinding.",
    },
    {
      id: 3,
      title: "Drying & Grinding",
      icon: Grinding,
      desc: "After drying, the rice is finely ground using traditional techniques.",
    },
    {
      id: 4,
      title: "Sieving & Packaging",
      icon: Packing,
      desc: "We sieve the powder for consistency and package it hygienically for delivery.",
    },
  ];
  
  
  
  const AboutComponent = () => {
    return (
      <div className="bg-[#FCFAF4] text-[#222] font-instrument">
        {/* Our Journey Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-center text-xl md:text-2xl font-semibold mb-8">Our Journey</h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              src={Logo} // replace with your actual logo path
              alt="Chef's Delights Logo"
              className="w-52 object-contain"
            />
            <div className="bg-white p-10 shadow-md rounded-md max-w-xl text-sm leading-6">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly believable.
                If you are going to use a passage of Lorem Ipsum, you need to be sure
                there isn't anything embarrassing hidden in the middle of text. All
                the Lorem Ipsum generators on the Internet tend to repeat predefined
                chunks as necessary, making this the first true generator on the Internet.
              </p>
            </div>
          </div>
        </section>
  {/* What We Provide Section */}
<section className="py-16">
  <h2 className="text-center text-xl md:text-2xl font-semibold mb-12">What we Provide</h2>

  <div className="max-w-6xl mx-auto px-4">
  <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center">
  {features.map((item) => (
    <div key={item.id} className="flex sm:flex-col items-center sm:items-center text-left sm:text-center gap-3 sm:gap-0 w-full sm:w-auto">
      <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
        <img
          src={item.icon}
          alt="Service"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-xs sm:text-sm text-gray-700 max-w-[220px] sm:max-w-none mt-2 sm:mt-3">
        {item.desc}
      </p>
    </div>
  ))}
</div>

  </div>
</section>


{/* How We Provide Section */}
{/* How We Provide Section */}
<section className="py-16 bg-[#FCFAF4]">
  <h2 className="text-center text-xl md:text-2xl font-semibold mb-12">How We Provide</h2>

  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
    {steps.map((step) => (
      <div key={step.id} className="flex flex-col items-center text-center">
        {/* Step Title */}
        <div className="text-sm md:text-lg text-[#333] font-semibold mb-2">
          <strong>Step {step.id}: {step.title}</strong>
        </div>

        {/* Icon */}
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-md flex items-center justify-center mb-4">
          <img src={step.icon} alt={step.title} className="w-full h-full object-cover" />
        </div>

        {/* SEO-enhanced Description */}
        <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-sm">
          {step.id === 1 && (
            <>
              We begin by selecting <strong>premium-grade rice</strong> from reliable farms known for their consistency and natural cultivation practices. This ensures a <strong>high-quality base</strong> for our rice flour products.
            </>
          )}
          {step.id === 2 && (
            <>
              The selected rice undergoes a <strong>controlled soaking process</strong> to achieve the ideal texture and softness. This is a crucial step to maintain the <strong>smoothness and authenticity</strong> of the end product.
            </>
          )}
          {step.id === 3 && (
            <>
              Once soaked and dried, we use <strong>traditional grinding methods</strong> to preserve the natural aroma and nutritional value, ensuring a <strong>finely milled rice powder</strong> every time.
            </>
          )}
          {step.id === 4 && (
            <>
              The final step involves <strong>fine sieving</strong> to remove impurities, followed by <strong>airtight packaging</strong> to retain freshness, hygiene, and <strong>long shelf-life</strong> during delivery.
            </>
          )}
        </p>
      </div>
    ))}
  </div>
</section>





      </div>
    );
  };
  
  export default AboutComponent;
  