import React, { useContext, useEffect, useState } from "react"
import { saveAs } from "file-saver"
import axios from "axios"
import Loader from "./Loader"
import styles from "./navbar.module.css"
import { FaSearch } from "react-icons/fa"
<<<<<<< Updated upstream
import GiphyContext from "../utils/GiphyContext"
=======
import { useNavigate } from "react-router-dom"

///rtyuioohgfdghjklftdfiouf/////
>>>>>>> Stashed changes

const Giphy = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(false)
<<<<<<< Updated upstream
  const { getProfile } = useContext(GiphyContext)
=======
  const navigate = useNavigate()
>>>>>>> Stashed changes

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      try {
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "W1BUNqPdGTq46JfpGyJb7EgwqCdBy7yJ",
            limit: 100,
          },
        })

        console.log(results)
        setData(results.data.data)
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
          {localStorage.tokenPost ? (
            // <button onClick={() => saveAs(el.images.fixed_height.url)}>Download!</button>
            <button onClick={() => saveGif(el)}>save!</button>
          ) : null}
        </div>
      )
    })
  }

<<<<<<< Updated upstream
  const saveGif = async el => {
    console.log(el)
    try {
      const body = {
        title: el.title,
        url: el.url,
      }
      console.log(body)
      await axios.post("https://vast-chamber-06347.herokuapp.com/api/v2/giphy-423/items", body, {
        headers: {
          Authorization: localStorage.tokenPost,
        },
      })
      console.log("dign succses")
=======
  const signup = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avtar: form.elements.avtar.value,
      }
      await axios.post("https://vast-chamber-06347.herokuapp.com/api/user", userBody)
      console.log("dign succses")
      navigate("/login")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("https://vast-chamber-06347.herokuapp.com/api/user/auth", userBody)
      const tokenPost = response.data
      localStorage.tokenPost = tokenPost
      navigate("/")
>>>>>>> Stashed changes
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

<<<<<<< Updated upstream
=======
  const logout = () => {
    localStorage.removeItem("tokenPost")
  }

>>>>>>> Stashed changes
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
          limit: 100,
        },
      })
      setData(results.data.data)
    } catch (err) {}

    setIsLoading(false)
  }
  const store = {
    // profile: profile,
    signup: signup,
    login: login,
    // logout: logout,
    // deleteGif: deleteGif,
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
