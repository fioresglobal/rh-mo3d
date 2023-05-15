const Contactus = () => {
  return (
    <div>
      <div className="contact_section layout_padding">
        <div className="container">
          <h1 className="font-weight-bold">Join Us</h1>
          <h5>You can reach us from our e-mail adress and social media accounts.</h5>
          <div className="contact_section_2">
            <div className="row">
              <div className="col-md-6">
                <div className="mail_section">
                  <input type="text" className="mail_text form-control mb-3" placeholder="Name" name="text"/>
                  <input type="text" className="mail_text form-control mb-3" placeholder="Email" name="text"/>
                  <textarea className="massage-bt form-control mb-3" placeholder="Message" rows={5} id="comment" name="message"></textarea>
                  <div className="send_bt"><a href="#">SEND</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus
