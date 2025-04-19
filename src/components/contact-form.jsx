export function ContactForm({handleContactChange, contactInfo}) {
    return (
        <form className="form" action="">
            <br />
            <h1 className="form-title">Contact</h1>
            <br />
            <p className="form-instruction">Basic information to help employers reach you!</p>
            <br />
            <div className="form-container">
              <div className="stack two-wide">
                <label htmlFor="fname">First name</label>
                <input onChange={handleContactChange} type="text" id="fname" name="fname" value={contactInfo.fname} />
              </div>
              <div className="stack two-wide">
                <label htmlFor="lname">Last name</label>
                <input onChange={handleContactChange} type="text" id="lname" name="lname" value={contactInfo.lname}/>
              </div>
            </div>
            <br />
            <br />
            <div className="form-container">
              <div className="stack three-wide">
                <label htmlFor="city">City</label>
                <input onChange={handleContactChange} type="text" id="city" name="city" value={contactInfo.city}/>
              </div>
              <div className="stack three-wide">
                <label htmlFor="state">State / Province</label>
                <input onChange={handleContactChange} type="text" id="state" name="state" value={contactInfo.state}/>
              </div>
              <div className="stack three-wide">
                <label htmlFor="zipcode">Zipcode</label>
                <input onChange={handleContactChange} type="text" id="zipcode" name="zipcode" maxLength="5" value={contactInfo.zipcode}/>
              </div>
            </div>
            <br />
            <br />
            <div className="form-container">
              <div className="stack two-wide">
                <label htmlFor="phone">Phone</label>
                <input onChange={handleContactChange} type="tel" id="phone" name="phone" placeholder="(555)-555-5555" value={contactInfo.phone}/>
              </div>
              <div className="stack two-wide">
                <label htmlFor="email">Email</label>
                  <input onChange={handleContactChange} type="email" id="email" name="email" placeholder="user@example.com" value={contactInfo.email}/>
              </div>
            </div>
            
          </form>
    )
}