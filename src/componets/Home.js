import CardGif from "../components/CardGif"
function Home() {
  return data.map(el => {
    return (
      <div key={el.id} className="gif">
        <img src={el.images.fixed_height.url} />
        <button onClick={() => saveAs(el.images.fixed_height.url)}>Download!</button>
      </div>
    )
  })
}
export default Home
