 import anneImage from '../assets/image-anne.jpg'
 import coltonImage from '../assets/image-colton.jpg'
 import ireneImage from '../assets/image-irene.jpg'
 
 
 type TestimonialProps = {
    name : string,
    id : number,
     description : string
 }

function Testimonial({name, id, description} : TestimonialProps) {
  return (
    <div className={` ${
        id === 2 ? "lg:mt-5" : 
        id === 3 ? 'lg:mt-8' : ''
    } bg-darkMagenta rounded-md p-8 flex flex-col lg:self-start `}>
        <div className='flex gap-3 items-center mb-6'>
            <img src={
                id === 1 ? coltonImage : 
                id === 2 ? ireneImage :
                id === 3 ? anneImage : 
                ''
            } alt="" className='w-10 h-10 rounded-full block'/>
            <div className='flex flex-col '>
                <h4 className='text-white font-bold text-base'>{name}</h4>
                <p className='text-softPink  text-base'>Verified Buyer</p>
            </div>
        </div>
        <p className='text-white font-bold text-sm'>"{description}"</p>
    </div>
  )
}

export default Testimonial