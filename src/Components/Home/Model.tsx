import model1 from "../../../public/model/kaydirak burun.gif"
import model2 from "../../../public/model/kemerli burun.gif"

const Model = () => {
  return (
    <div className="d-flex flex-column">
      <h1 className="model_taital">Models</h1>
      <div className="d-flex">
        <div className="d-flex flex-column align-items-center ">
        <img alt='model' src={model1}/>
        <h2 className="model-text">Original Nose</h2>
        </div>
        <div className="d-flex flex-column align-items-center ">
        <img alt='model' src={model2}/>
        <h2 className="model-text">Arched Nose</h2>
        </div>
      </div>
    </div>
  )
}

export default Model