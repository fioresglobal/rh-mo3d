import model1 from "../../../public/model/model1.png"
import model2 from "../../../public/model/model2.png"
import model3 from "../../../public/model/model3.png"

const ModelViewer = () => {
  return (
    <div className="flex-column align-items-center mx-5 ">
      
      <h1 className="model_taital pt-2">Models</h1>
      <p className="text-center model-desc">Rhimo 3D, works to bring innovations to the health sector in the field of laser scanning and 3D modeling, to develop different imaging systems, most importantly to offerr all these services at a much more affordable price than existing technologies and to provide software support to hospitals and clinics. The team consists of full stack developer.</p>
      
      <div className="row">
        <div className="col-12 col-md-4 d-flex flex-column align-items-center shadow-lg model-wrap mx-auto">
          <img alt='model' src={model2} className="model-image"/>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column align-items-center shadow-lg model-wrap mx-auto">
          <img alt='model'  src={model1} className=""/>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column align-items-center shadow-lg model-wrap mx-auto">
          <img alt='model' src={model3} className="img-fluid"/>
        </div>
      </div>
    </div>
  )
}

export default ModelViewer
