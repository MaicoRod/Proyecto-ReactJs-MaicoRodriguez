import ItemListcontainer from './components/itemListContainer/itemListcontainer';
import Navbar from './components/navbar/Navbar';
import './App.css'

function App () {
  return (
    <>
      <Navbar />
      <ItemListcontainer 
      greeting ={{
        title: '¡Bienvenidos a QueCel',
        mensaje: 'En QueCel, nos apasiona brindarte los mejores productos de tecnología móvil, desde los últimos modelos de teléfonos inteligentes hasta una amplia variedad de artículos diseñados para mejorar tu experiencia con tu dispositivo. Nuestro objetivo es que encuentres lo que necesitas para mantenerte conectado, eficiente y entretenido en el mundo digital de hoy.'
      }}
        />
    </>
  )
}

export default App
