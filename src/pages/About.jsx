function About() {
  return (
    <div>
      <h1 className='text-4xl mb-8'>Github Finder - React</h1>
      <p className='mb-2'>
        This SPA allows the user to search GitHub profiles, view details and explore reposoitories.
      </p>
      <p className='mb-2'>
        Built with React v18, React Router and Axios. Styled with TailwindCSS and DaisyUI.
      </p>
      <p className='mt-8'>
        Version: <span className='text-secondary'>1.1.0</span>
      </p>
      <p className='mt-2'>
        Updated: <span className='text-secondary'>12th May 2022</span>
      </p>
      <p className='mt-2'>
        By: <span className='text-secondary'>Kieran Armbrecht</span>
      </p>
      <p className='mt-4'>
        <a className='text-primary' target='_blank' rel='noreferrer' href='https://kierana.dev'>
          Portfolio
        </a>
        <a
          className='text-primary mx-8'
          target='_blank'
          rel='noreferrer'
          href='https://github.com/KieArm'
        >
          GitHub
        </a>
      </p>
    </div>
  )
}
export default About
