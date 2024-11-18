import Rating from "./Rating"
import Testimonial from "./Testimonial"

 

function SocialProof() {
  return (
   <section className="max-w-4xl mx-auto">
    <div className="flex flex-col gap-10 lg:gap-20 lg:flex-row lg:mb-10">
        <div  className="lg:basis-1/2 lg:max-w-sm">
            <h1 className="text-darkMagenta font-bold text-4xl text-center mb-5 lg:text-left">10,000+ of our users love our products.</h1>
            <p className="text-darkGrayMagenta text-base text-center lg:text-left"> We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
        </div>
        <div className="flex flex-col gap-4 mb-6">
            <Rating id={1} description="Rated 5 Stars in Reviews "/>
            <Rating id={2} description=" Rated 5 Stars in Report Guru "/>
            <Rating id={3} description="Rated 5 Stars in BestTech"/>
        </div>
    </div>
    <div className="flex flex-col gap-5 lg:flex-row  ">
        <Testimonial id={1} name="Colton Smith" description="   We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!   " />
        <Testimonial id={2} name="Irene Roberts  " description="  Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery. " />
        <Testimonial id={3} name="Anne Wallace   " description=" Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! " />
    </div>
   </section>
  )
}

export default SocialProof