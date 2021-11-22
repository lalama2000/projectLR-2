import React, { useEffect, useState } from "react"
import Giphy from "./componets/Giphy"
import "./App.css"
import { Route, Routes, useNavigate } from "react-router"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Navbar from "./componets/Navbar"
import axios from "axios"
import GiphyContext from "./utils/GiphyContext"
import Profile from "./pages/Profile"
import Home from "./pages/Home"

const App = () => {
  const [profile, setProfile] = useState(null)
  const [Gifs, setGifs] = useState([])
  const [saveGif, setsaveGif] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.tokenPost) {
      getProfile()
    }
  }, [])

  const signup = async e => {
    e.preventDefault()

    try {
      const form = e.target
      console.log(form)
      const userBody = {
        firstName: form.elements.Name.value,
        lastName: form.elements.LName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        photo: form.elements.image.value,
      }
      await axios.post("https://vast-chamber-06347.herokuapp.com/api/user", userBody)
      console.log("dign succses")
      navigate("/Login")
    } catch (error) {
      console.log(error?.response?.data)
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
      getProfile()
      navigate("/Home")
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  const logout = () => {
    localStorage.removeItem("tokenPost")
  }

  const getProfile = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/user/me", {
        headers: {
          Authorization: localStorage.tokenPost,
        },
      })
      console.log(response.data)
      setProfile(response.data)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  const getSaveGife = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/v2/giphy-423/items", {
        headers: {
          Authorization: localStorage.tokenPost,
        },
      })
      console.log(response.data)
      setsaveGif(response.data)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  const store = {
    signup: signup,
    login: login,
    logout: logout,
    profile: profile,
    Gifs: Gifs,
    getProfile: getProfile,
    getSaveGife: getSaveGife,
  }
  return (
    <GiphyContext.Provider value={store}>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Giphy />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </GiphyContext.Provider>
  )
}

export default App
