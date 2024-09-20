import { useState, useEffect } from 'react'

// import './App.css'

function App() {

  const [albumData, setAlbumData] = useState<{ cid: string, name: string, coverUrl: string }[] | null>(null) // 型を修正

  useEffect(() => {

    const fetchData = async () => {
      try {

        const response = await fetch("http://localhost:3000/albums");
        const result = await response.json();
        setAlbumData(result.data);

      } catch (error) {

      }
    }
    fetchData();
  }, [])

  console.log(albumData);

  return (
    <>
      {albumData && albumData.map((album: { cid: string, name: string, coverUrl: string }, index: number) => (
        <div key={index}>
          <p>{album.name}</p>
          <p>{album.cid}</p>
          <img src={album.coverUrl} alt="" />
          <p>{album.coverUrl}</p>
        </div>
      ))}
    </>
  )
}

export default App
