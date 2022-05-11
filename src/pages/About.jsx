function About() {
  return (
    <div>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        React app to search GitHub profiles and view the details. This project is part of the
        <a href='https://www.udemy.com/course/modern-react-front-to-back/'> React Front To Back</a> Udemy course by
        <strong>
          <a href='https://traversymedia.com'> Brad Traversy</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.1</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:&nbsp;
        <a className='text-white' href='https://github.com/KieArm'>
          Kieran Armbrecht
        </a>
      </p>
    </div>
  )
}
export default About