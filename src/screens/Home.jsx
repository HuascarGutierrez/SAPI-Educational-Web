import UnidadesQueOfrecemos from "../components/organisms/UnidadesQueOfrecemos"
import Header from "../components/organisms/Header"
import Presentation from "../components/organisms/Presentation"
import Materias from "../components/organisms/Materias"
import Benefits from "../components/organisms/Benefits"
import PadresYTutores from "../components/organisms/PadresYTutores"
import Footer from "../components/organisms/Footer"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../config/app"

function Home() {
  const [user, setUser] = useState(null);

  useEffect(()=> {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })

    return () => unsubcribe();
  }, [])
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center'}}>
        <Header user={user}/> 
        <Presentation/>       
        <UnidadesQueOfrecemos/>
        <Materias/>
        <Benefits/>
        <PadresYTutores/>
        <Footer/>
    </div>
  )
}

export default Home