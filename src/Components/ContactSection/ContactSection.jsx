import "./ContactSection.scss";
import { useState } from "react";
import { send } from "emailjs-com";
import { useMediaQuery } from "react-responsive";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("")
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    send("service_xpurtge", "template_wzy1xpv", form, 'user_CyVrGpBwHIQM2DtKg4hII')
    .then((res) => {
      setError(<span className="green">Success! Thanks for reaching out</span>)
      console.log('SUCCESS', res.status, res.text);
    })
    .catch((err) => {
      setError(<span className="red">Something seems to have gone wrong..</span>)
      console.log('FAILED', err);
    })
  }
  const Large = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1100 });
    return isDesktop ? children : null;
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 699 });
    return isMobile ? children : null;
  };
  return (
    <div className="ContactSection">
      <div className="heading">
        <div class="divider"></div>
        <h1>
          <span className="special"></span> Hello!
        </h1>
      </div>
      <main className="sketchy">
        <div className="left">
          <h3>Thanks for stopping by!</h3>
          <br />
          <p>Here are a couple of links to my corner of the interwebs;</p>
          <br />
          <br />
          <p>Github: Link</p>
          <p>LinkedIn: Link</p>
          <p>Twitter: Link</p>
          <p>Email: Link</p>
        </div>
        <div className="right">
          <h3>Contact me!</h3>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-left">
                <label for="name">Name: </label>
              </div>
              <div className="col-right">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name here..."
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-left">
                <label for="email">Email: </label>
              </div>
              <div className="col-right">
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email here..."
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-left">
                <label for="message">Message: </label>
              </div>
              <div className="col-right">
                <textarea
                  rows="4"
                  cols="50"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <button type="submit" className="submit-button">
              SUBMIT
            </button>
          </form>
          <div className="col-right">{error}</div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}