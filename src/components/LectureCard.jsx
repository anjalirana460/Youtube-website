const LectureCard = ({lecture}) => {
  return (
    <>
    <a href={lecture.videoUrl} target='_blank' key={lecture.id}
    className='text-start border shadow backdrop-blur-md border-gray-200 rounded-md p-2 bg-white/50
    hover:scale-105 transition duration-300 cursor-pointer'>
      <div className='mb-3' >
        <img src={lecture.thumbnail} alt={lecture.id} className='w-full md:h-55 rounded'/>
      </div>
      <div >
        <h3 className='text-lg font-semibold mb-2 text-black'>{lecture.title}</h3>
        <h3>{lecture.category}</h3>
        <h3 className='text-md text-gray-700'>{lecture.description}</h3>
        <h3 className='text-md text-gray-700'>{lecture.duration}</h3>
      </div>
    </a>
    </>
  )
}

export default LectureCard