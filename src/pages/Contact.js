import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
  render() {
    return (
      <section className="contact">
          <div className="container">
              <div className="row">
                  <div className="col text-center">
                    <h3 style={{fontSize:"45px"}}>Contact us</h3>
                  </div>
              </div>
              <div className="row" style={{fontSize:"19px"}}>
                <div className="col text-center">
                  <p>We are here to answer any questions you may have about our society. Reach out to us and we'll response as soon as we can.</p>
                  <p>Do you have a comment? Please contact us and let us improve!</p>
                </div>
              </div>
              <div className="row">
                <div className="col text-center">
                  <a href="mailto::ieeetrcs@gmail.com">
                    <button className="btn btn-primary">
                      Send us an email.
                    </button>
                  </a>
                </div>
              </div>
          </div>
      </section>
    )
  }
}
export default Contact;