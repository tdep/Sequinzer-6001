const Controls = () => {
    return(
      <div className="controls">
        <h3>Tracks</h3>
        <div className="tracks">
          <button id="track-1" style={{background: 'dodgerblue'}}>Track 1</button>
          <button id="track-2" style={{background:'mediumseagreen'}}>Track 2</button>
          <button id="track-3" style={{background: 'mediumorchid'}}>Track 3</button>
          <button id="track-4" style={{background: 'coral'}}>Track 4</button>
        </div>
        <h3>Filters</h3>
        <div className="filters">
          <button id="lo-pass">Lo Pass</button>
          <button id="hi-pass">Hi Pass</button>
        </div>
        <h3>Envelope</h3>
        <div className="envelope">
          <div className="envelope-control">
            <label for="attack">Attack</label>
            <input type="range" min="1" max="100" value="2" class="slider" id="attack" />
          </div>
          <div className="envelope-control">
            <label for="attack">Decay</label>
            <input type="range" min="1" max="100" value="2" class="slider" id="decay" />
          </div>
          <div className="envelope-control">
            <label for="attack">Sustain</label>
            <input type="range" min="1" max="100" value="2" class="slider" id="sustain" />
          </div>
          <div className="envelope-control">
            <label for="attack">Release</label>
            <input type="range" min="1" max="100" value="2" class="slider" id="release" />
          </div>
        </div>
        <h3>Waveforms</h3>
        <div className="waveforms">
          <button id="sin-wave">Sin</button>
          <button id="tri-wave">Tri</button>
          <button id="sq-wave">Sq</button>
          <button id="saw-wave">Saw</button>
        </div>
      </div>
    )
  }

  export default Controls