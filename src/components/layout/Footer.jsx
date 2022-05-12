function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className='footer p-4 bg-neutral text-neutral-content'>
      <div className='container mx-auto'>
        <p>Copyright &copy;{footerYear}</p>
      </div>
    </footer>
  )
}
export default Footer
