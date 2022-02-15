
import "./App.css";
import Button from "@mui/material/Button";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';



function App() {
  return (
    <div className="container">
      <div class="pricing">
          <div className="card">
          <h5 className="card-title text-muted">Free</h5>
          <h6 className="card-price">$0<span className="period">/month</span></h6>
<hr />
          <div className="list">
          <ul className="text-spaceing">
  <li>
    <DoneIcon/>
  Single User

  </li>
  <li>
  <DoneIcon/>

  5GB Storage
  </li> 
  <li>
  <DoneIcon/>

  Unlimited Public Projects
  </li>
  <li>
  <DoneIcon/>

  Community Access
  </li>
  <li>
    <CloseIcon />
  Unlimited Private Projects
  </li>
  <li>
  <CloseIcon />

  Dedicated Phone Support
  </li>
  <li>
  <CloseIcon />

  Free Subdomain
  </li>
  <li>
  <CloseIcon />

  Monthly Status Reports
  </li>
</ul>
          </div>
          <div className="button">
          <Button variant="contained" sx={{width: "95%", borderRadius: "20px"}}>Button</Button>
            </div>


</div>
</div>
<div class="pricing">
          <div className="card">
          <h5 className="card-title text-muted">PLUS</h5>
          <h6 className="card-price">$9<span className="period">/month</span></h6>
          <hr />

          <div className="list">
          <ul className="text-spaceing">
  <li>
  <DoneIcon/>

  5 Users  </li>
  <li>
  <DoneIcon/>

  50GB Storage
  </li> <li>
  <DoneIcon/>

  Unlimited Public Projects
  </li>
  <li>
  <DoneIcon/>

  Community Access
  </li>
  <li>
  <DoneIcon/>

  Unlimited Private Projects
  </li>
  <li>
  <DoneIcon/>

  Dedicated Phone Support
  </li>

  <li>
  <DoneIcon/>

  Free Subdomain
  </li>
  <li>
  <CloseIcon />

  Monthly Status Reports
  </li>
</ul>
          </div>
          <div className="button">
          <Button variant="contained" sx={{width: "95%", borderRadius: "20px"}}>Button</Button>
            </div>

</div>
</div>
<div class="pricing">
          <div className="card">
          <h5 className="card-title text-muted">PRO</h5>
          <h6 className="card-price">$49<span className="period">/month</span></h6>
          <hr />

          <div className="list">
          <ul className="text-spaceing">
  <li>
  <DoneIcon/>

  Unlimited Users
  </li>
  <li>
  <DoneIcon/>

  150GB Storage
  </li> <li>
  <DoneIcon/>

  Unlimited Public Projects
  </li>
  <li>
  <DoneIcon/>

  Community Access
  </li>
  <li>
  <DoneIcon/>

  Unlimited Private Projects
  </li>
  <li>
  <DoneIcon/>

  Dedicated Phone Support
  </li>
  <li>
  <DoneIcon/>

  Free Subdomain
  </li>
  <li>
  <DoneIcon/>

  Monthly Status Reports
  </li>
</ul>
          </div>
          <div className="button">
          <Button variant="contained" sx={{width: "95%", borderRadius: "20px"}}>Button</Button>
            </div>


</div>
</div>

</div>
  );
}

export default App;