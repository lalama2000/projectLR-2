import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import Loader from "./Loader"
import styles from "./navbar.module.css"
import { FaSearch } from "react-icons/fa"
import GiphyContext from "../utils/GiphyContext"

const Giphy = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { getProfile, saveGiphy } = useContext(GiphyContext)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "W1BUNqPdGTq46JfpGyJb7EgwqCdBy7yJ",
          },
        })
        console.log(results)
        setData(results.data.data)
        setIsLoading(false)
      } catch (err) {}
      setIsLoading(false)
    }
    fetchData()
  }, [])
  const renderGifs = () => {
    if (isLoading) {
      return <Loader />
    }
    return data.map(el => {
      return (
        <div key={el.id} className="gif">
          <img src={el.images.fixed_height.url} />
          <div className={styles.positon}>
            {localStorage.tokenPost ? (
              <button className={styles.buttonSav} onClick={() => saveGiphy(el)}>
                Save
              </button>
            ) : null}
          </div>
        </div>
      )
    })
  }
  const handleSearchChange = event => {
    setSearch(event.target.value)
  }
  const handleSubmit = async event => {
    event.preventDefault()
    setIsLoading(true)
    try {
      const results = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "W1BUNqPdGTq46JfpGyJb7EgwqCdBy7yJ",
          q: search,
        },
      })
      setData(results.data.data)
    } catch (err) {}
    setIsLoading(false)
  }
  return (
    <div className="m-2">
      <div className={styles.search}>
        <input
          value={search}
          onChange={handleSearchChange}
          type="text"
          className={styles.searchItem}
          placeholder="Search Gifs.."
          name="search"
        />
        <button onClick={handleSubmit} type="submit" className={styles.searchButton}>
          <i class={FaSearch}></i>
          <FaSearch />
        </button>
      </div>
      <div className="container gifs">{renderGifs()}</div>
    </div>
  )
}
export default Giphy
