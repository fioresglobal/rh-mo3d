import model1 from "../../../public/model/model1.png"
import model2 from "../../../public/model/model2.png"

const ModelViewer = () => {
  return (
    <div className="flex-column align-items-center mx-5 ">
      
      <h1 className="model_taital pt-2">Models</h1>
      
      <div className="row justify-content-center">
        
        <div className="col-10 col-md-5 d-flex flex-column align-items-center shadow-lg model-wrap mx-3 mb-3">
          <img alt='model'  src={model1} className="" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain"}} />
        </div>
        <div className="col-10 col-md-5 d-flex flex-column align-items-center shadow-lg model-wrap mx-3 mb-3">
          <img alt='model' src={model2} className="model-image" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain"}} />
        </div>
      </div>
    </div>
  )
}

export default ModelViewer
