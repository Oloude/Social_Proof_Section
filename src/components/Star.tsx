import starIcon from '../assets/icon-star.svg'

function Star() {
  return (
    <div className='flex gap-3 items-center'>
        <img src={starIcon}/>
        <img src={starIcon}/>
        <img src={starIcon}/>
        <img src={starIcon}/>
        <img src={starIcon}/>
    </div>
  )
}

export default Star