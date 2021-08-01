import './MainInfo.styles.css'

const MainInfo = ({id, name, skills}) => {
    return(
        <div>
          <div>
            <span>ID: </span><span>{id}</span>
          </div>
          <div>
            <span>Name: </span><span>{name}</span>
          </div>
          <div>
            <span>Main Skills: </span><span>{skills}</span>
          </div>
        </div>

    )
}

export default MainInfo