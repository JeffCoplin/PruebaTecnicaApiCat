import { useState, useEffect, use } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'


 export function App() {
  const [fact, setFact] = useState('lorem ipsum dolor sit amet')
  const [imageUrl, setImageUrl] = useState('')


  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(response => response.json())
    .then(data => {
      const { fact } = data
      setFact(fact)

      const threeFirstWords  = fact.split(' ', 3)

      fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(response => response.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
        
      })

    })
  }, [])
  



   
  return (
    <>
    <main>
  <h1> App de gaticos</h1>  
    {fact && <p>{fact}</p>}
    {imageUrl && <img src={imageUrl} alt={`Extrayendo la imagen de ${fact}`} />}
    </main>
    </>
  )

}

export default App


