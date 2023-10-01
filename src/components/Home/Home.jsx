
import img from '../../assets/pastel.png'
import './Home.css'

const Home = () => {
  return (
    <div className="container containerHome">
      <p className='mt-4 bienvenido'>Bienvenido a <span className='letraHappy'>Happy Cake</span> </p>
      <p>El lugar de los pasteles felices </p>
      <img src={img} alt="" width={'500px'} />
    </div>
  )
}

export default Home