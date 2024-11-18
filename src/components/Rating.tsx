import Star from "./Star"

 

function Rating({description, id} : {description : string, id:number}) {
  return (
    <div className={`${
        id === 2 ? ' lg:ml-14' :
        id === 3 ? 'lg:ml-24' : ''
    } flex flex-col items-center gap-2 bg-lightGrayMagenta rounded p-3 lg:flex-row lg:gap-4 lg:self-start `}>
        <Star/>
        <p className="text-sm font-bold text-darkMagenta">{description}</p>
    </div>
  )
}

export default Rating