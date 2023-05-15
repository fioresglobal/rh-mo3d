import model1 from "../../../public/model/model1.png"
import model2 from "../../../public/model/model2.png"

const ModelViewer = () => {
  return (
    <div className="flex-column align-items-center mx-5 ">
      
      <h1 className="model_taital pt-2">Models</h1>
      <p className="text-center model-desc">Working on health technologies, Rhimo 3D team works to develop different solutions for 3D modeling in the health sector. The aim of the young and dynamic team consisting of full stack developers is to provide serial software support at low prices to hospitals and clinics around the world and to offer new technological solutions to the world by conducting R&D studies.</p>
      
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
