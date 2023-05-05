import {useState} from 'react'
import Axios from 'axios'
import './FundStartUpform.css';

function FundStartUp() {
  const [fname, setFname] = useState()
  const [company_mail, setComapnyMail] = useState()
  const [founder_linkedin, setFounderLinkedin] = useState()
  const [reg_company_name, setRegCompanyName] = useState()
  const [company_linkedin, setCompanyLinkedin] = useState()
  const [website, setWebsite] = useState()
  const [prev_fundraises, setPrevFundraises] = useState()
  const [product, setProduct] = useState()
  const [traction, setTraction] = useState()
  const [revenue, setRevenue] = useState()
  const [team_size, setTeamSize] = useState()
  const [why_raise, setWhyRaise] = useState()
  const [why_novus, setWhyNovus] = useState()
  const [exisiting_commitments, setExistingCommitments] = useState()


  const handleSubmit = (event)=>{
    Axios.post('http://localhost:3001/fund-startup', {
      fname: fname,
      company_mail: company_mail,
      founder_linkedin: founder_linkedin,
      reg_company_name: reg_company_name,
      company_linkedin: company_linkedin,
      website: website,
      prev_fundraises: prev_fundraises,
      product: product,
      traction: traction,
      revenue: revenue,
      team_size: team_size,
      why_raise: why_raise,
      why_novus: why_novus,
      exisiting_commitments: exisiting_commitments
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className="container">
    <p className='app-app'>Application</p>
    <hr className='start-up-fund-hr'/>
    <form action="/action_page.php" id="usrform">
      <div className="entry">
        <label for="fname">Your Name</label>
        <br />
        <input type="text" id="fname" name="fname" placeholder="Enter your name" required 
        onChange={(event)=>{
          setFname(event.target.value)
        }}
        />
        <br />
      </div>

      <div className="entry">
        <label for="company_mail">Company Email</label>
        <br />
        <input type="email" id="company_mail" name="company_mail" placeholder="Enter your company's email address" required 
        onChange={(event)=>{
          setComapnyMail(event.target.value)
        }}
        />
        <br />
      </div>

      <div className="entry">
        <label for="founder_linkedin">Founder's LindedIn URL</label>
        <br />
        <input type="url" id="founder_linkedin" name="founder_linkedin" placeholder="Founder's LindedIn URL" required 
        onChange={(event)=>{
          setFounderLinkedin(event.target.value)
        }}
        />
        <br />
      </div>

      <div className="entry">
        <label for="reg_company_name">Registered Company Name </label>
        <br />
        <input type="text" id="reg_company_name" name="reg_company_name" placeholder="Enter your company's registered name" required 
        onChange={(event)=>{
          setRegCompanyName(event.target.value)
        }}
        />
        <br />
      </div>

      <div className="entry">
        <label for="company_linkedin">Company's LinkedIn Page </label>
        <br />
        <input type="url" id="company_linkedin" name="company_linkedin" placeholder="Enter your company's LinkedIn page URL" required 
        onChange={(event)=>{
          setCompanyLinkedin(event.target.value)
        }}
        />
        <br />
      </div>

      <div className="entry">
        <label for="website">Website</label>
        <br />
        <input type="url" id="website" name="website" placeholder="Enter your company's website URL" required 
        onChange={(event)=>{
          setWebsite(event.target.value)
        }}
        />
        <br />
      </div>

      <div className="entry">
        <label for="prev_fundraises">Describe your previous fundraising rounds</label>
        <br />
        <textarea rows="8" cols="50" id="prev_fundraises" name="prev_fundraises" form="usrform" required
        onChange={(event)=>{
          setPrevFundraises(event.target.value)
        }}
        ></textarea>
        <br />
      </div>

      <div className="entry">
        <label for="product">Describe your product</label>
        <br />
        <textarea rows="8" cols="50" id="product" name="product" form="usrform" required
        onChange={(event)=>{
          setProduct(event.target.value)
        }}
        ></textarea>
        <br />
      </div>

      <div className="entry">
        <label for="traction">Describe the traction</label>
        <br />
        <textarea rows="8" cols="50" id="traction" name="traction" form="usrform" required
        onChange={(event)=>{
          setTraction(event.target.value)
        }}
        ></textarea>
        <br />
      </div>

      <div className="entry">
        <label for="revenue">Describe the revenue you are making </label>
        <br />
        <input type="text" id="revenue" name="revenue" placeholder="Enter your current revenue" required 
        onChange={(event)=>{
          setRevenue(event.target.value)
        }}
        />
        <br />
      </div>

      <div className="entry">
        <label for="team_size">How big is the team? </label>
        <br />
        <input type="text" id="team_size" name="team_size" placeholder="Enter your current team size" required 
        onChange={(event)=>{
          setTeamSize(event.target.value)
        }}
        />
        <br />
      </div>

      <div className="entry">
        <label for="why_raise">Why do your want to raise a Community round?</label>
        <br />
        <textarea rows="8" cols="50" id="why_raise" name="why_raise" form="usrform" required
        onChange={(event)=>{
          setWhyRaise(event.target.value)
        }}
        ></textarea>
        <br />
      </div>

      <div className="entry">
        <label for="why_novus">What makes you think Novus Fide is the right fit for you?</label>
        <br />
        <textarea rows="8" cols="50" id="why_novus" name="why_novus" form="usrform" required
        onChange={(event)=>{
          setWhyNovus(event.target.value)
        }}
        ></textarea>
        <br />
      </div>

      <div className="entry">
        <label for="existing_commitments">Do you have any existing commitments?</label>
        <br />
        <textarea rows="8" cols="50" id="existing_commitments" name="existing_commitments" form="usrform" required
        onChange={(event)=>{
          setExistingCommitments(event.target.value)
        }}
        ></textarea>
        <br />
      </div>

      <br />

      <input type="submit" value="Submit" className='btn-sbmt' onClick={handleSubmit}/>
    </form>
  </div>
  )
}

export default FundStartUp