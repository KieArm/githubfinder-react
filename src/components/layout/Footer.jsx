function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className='footer footer-center p-4 bg-base-300 text-base-content'>
      <div>
        <p>Copyright &copy;{footerYear}</p>
      </div>
    </footer>
  )
}
export default Footer
