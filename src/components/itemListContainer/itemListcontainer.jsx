

const itemListcontainer = ({greeting}) => {
  return (
    <>
        <h1 style={{textAlign:'center', color:'black'}}>{greeting.title}</h1>
        <p style={{color:'black'}}>{greeting.mensaje}</p>
    </>
  )
}

export default itemListcontainer