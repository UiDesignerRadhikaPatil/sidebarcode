import React, { useState } from 'react'

export default function Home() {

  const { data, setData } = useState()


  const getMovies = async () => {

    try {
      const response = await fetch(
        'https://truecodeapi.microtechsolutions.co.in/api/ServiceReport',
      );
      const result = await response.json();
      console.log(result)
      setData(result)

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={()=>getMovies()}>Default</button>
      <p>{data}</p>

    </div>
  )
}
