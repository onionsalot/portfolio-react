import "./ContactSection.scss";
import { useState } from "react";
import { send } from "emailjs-com";
import Github from "../../images/github.png"
import LinkedIn from "../../images/linkedin.png"
import Twitter from "../../images/twitter.png"
import Email from "../../images/email.png"

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    send(
      "service_xpurtge",
      "template_wzy1xpv",
      form,
      "user_CyVrGpBwHIQM2DtKg4hII"
    )
      .then((res) => {
        setError(
          <span className="green">Success! Thanks for reaching out</span>
        );
        console.log("SUCCESS", res.status, res.text);
      })
      .catch((err) => {
        setError(
          <span className="red">Something seems to have gone wrong..</span>
        );
        console.log("FAILED", err);
      });
  }

  return (
    <div className="ContactSection" id="contact">
      <div className="heading">
        <div className="centered-hr">
          <hr className="hr-text" data-content="Contact" />
        </div>
      </div>

      <main>
        <div className="container">
          <div className="left">
            <span className="sub-text">Thanks for stopping by!</span>
            <br />
            <p className="main-text">Here are a couple of links to my corner of the interwebs;</p>
            <br />
            <br />
            <div className="socials-section">
              <div className="left">
                <div><a className="main-text"href="https://github.com/onionsalot" target="_blank" rel="noreferrer"> <img src={Github} alt=""/></a></div>
                <div><a className="main-text" href="https://www.linkedin.com/in/trong-nguyen1008/" target="_blank" rel="noreferrer"> <img src={LinkedIn} alt=""/></a></div>
                <div><a className="main-text" href="https://twitter.com/onionsalot" target="_blank" rel="noreferrer"> <img src={Twitter} alt=""/></a></div>
                <div><a className="main-text" href="mailto:trong.nguyen1008@gmail.com?subject=Hello, Trong"> <img src={Email} alt=""/></a></div>
              </div>
              <div className="right">
                <div><a className="main-text"href="https://github.com/onionsalot" target="_blank" rel="noreferrer"> Github</a></div>
                <div><a className="main-text" href="https://www.linkedin.com/in/trong-nguyen1008/" target="_blank" rel="noreferrer">LinkedIn</a></div>
                <div><a className="main-text" href="https://twitter.com/onionsalot" target="_blank" rel="noreferrer"> Twitter</a></div>
                <div><a className="main-text" href="mailto:trong.nguyen1008@gmail.com?subject=Hello, Trong">Email</a></div>
              </div>
            </div>

            <br />
          </div>
          <div className="right">
          <span className="sub-text">Contact Me!</span>
            <br />
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-left">
                  <label className="main-text">Name: </label>
                </div>
                <div className="col-right">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name here..."
                    value={form.name}
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-left">
                  <label>Email: </label>
                </div>
                <div className="col-right">
                  <input
                    type="text"
                    name="email"
                    placeholder="Your Email here..."
                    value={form.email}
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-left">
                  <label>Message: </label>
                </div>
                <div className="col-right">
                  <textarea
                    rows="4"
                    cols="50"
                    name="message"
                    placeholder="Suggestions? Comments? Work together? Anything here!"
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="submit-button">
                SUBMIT
              </button>
            </form>
            <div className="col-right">{error}</div>
          </div>
        </div>
      </main>
      <footer>
        <div onClick={() => {window.scrollTo(0, 0)}} style={{cursor: "pointer"}}>&#8657; To the Top &#8657; </div>
        <div>Made with 💜&nbsp;from New York City, New York</div>
        <div>All graphics on this page were self-produced.</div>
      </footer>
    </div>
  );
}
