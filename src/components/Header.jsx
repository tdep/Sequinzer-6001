const Header = () => {
    return(
      <div className="header">
        <div className="title">
          <h1>Sequinzer 6001 </h1>
        </div>
        <div className = "transport">
          <button className="play">Play</button>
          <button className="pause">Pause</button>
          <button className="stop">Stop</button>
        </div>
        <div className = "file">
          <button className="new">New</button>
          <button className="save">Save</button>
          <button className="load">Load</button>
          <button className="delete">Del</button>
        </div>
      </div>
    )
  }

  export default Header