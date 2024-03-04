import "../styles/Column.css"

function Column({children, classes}) {
  return (
    <>
      <div className={classes}>
        {children}
      </div>
    </>
  )
}
export default Column