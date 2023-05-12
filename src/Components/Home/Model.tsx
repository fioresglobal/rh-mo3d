import model1 from "../../../public/model/kaydirak burun.gif"
import model2 from "../../../public/model/kemerli burun.gif"

const Model = () => {
  return (
    <div className="d-flex flex-column align-items-center mx-5 ">
      <h1 className="model_taital">Models</h1>
      <div className="d-flex gap-3">
        <div className="d-flex flex-column align-items-center shadow-lg">
        <img alt='model' src={model1}/>
        <h2 className="model-text mb-2">Original Nose</h2>
        </div>
        <div className="d-flex flex-column align-items-center shadow-lg">
        <img alt='model' src={model2}/>
        <h2 className="model-text mb-2">Arched Nose</h2>
        </div>
      </div>
    </div>
  )
}

export default Model