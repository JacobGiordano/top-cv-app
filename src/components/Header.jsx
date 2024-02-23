// import "../styles/Header.css"

function Header({children}) {
  return (
    <header className="header grid">
      {children}
    </header>
  )
}
export default Header