import React, { useState, useEffect, Fragment } from "react";

import "./App.css";

function App() {
 const [showSub, setShowSub] = useState(false);
 const [showSubTwo, setShowSubTwo] = useState(false);

 useEffect(() => {
  setShowSub(false);
 }, []);

 const handleMouseEnter = e => {
  if (showSub === false) {
   setShowSub(true);
  }
 };

 const handleMouseLeave = e => {
  if (showSub === true) {
   setShowSub(false);
  }
 };

 return (
  <Fragment>
   <div>
    <div className='bg-primary grid-2' style={{ width: "100vw" }}>
     <div className='bg-primary' style={{ margin: "auto" }}>
      <h5 className='bg-light'>
       {" "}
       <span className='text-danger'>CALL US NOW!</span>{" "}
       <span style={{ color: "white" }}>385.154.11.28.35</span>{" "}
      </h5>
     </div>
     <div className='bg-primary' style={{ margin: "auto" }}>
      <ul className='bg-light' style={{ display: "flex" }}>
       <li>
        <a href='#'>
         <span className='text-danger px-1'> Login</span>
        </a>
       </li>
       <li>
        <a href='#'>
         <span style={{ color: "white" }}> Sign Up</span>
        </a>
       </li>
      </ul>
     </div>
    </div>

    <div className='bg-light grid-2 navbar'>
     <div>
      <h1 style={{ backgroundColor: "lightpink" }}>
       YOUR<span className='text-danger'>LOGO</span>{" "}
      </h1>
     </div>
     <div>
      <ul>
       <li>
        <a
         href='#'
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>
         Title 1
        </a>
        <br />
        {showSub ? (
         <div className='grid-2'>
          <div className='card'>
           <ul style={{ display: "block" }}>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
             <a>Title 1</a>
            </li>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
             <a>Title 1</a>
            </li>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
             <a>Title 1</a>
            </li>
           </ul>
          </div>

          <div className='card'>
           <ul style={{ display: "block" }}>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
             <a>Title 1</a>
            </li>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
             <a>Title 1</a>
            </li>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
             <a>Title 1</a>
            </li>
           </ul>
          </div>
         </div>
        ) : (
         ""
        )}
       </li>
       <li>
        <a
         href='#'
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>
         Title 2
        </a>{" "}
       </li>
       <li>
        <a
         href='#'
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>
         Title 3
        </a>{" "}
       </li>
       <li>
        <a
         href='#'
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>
         Title 4
        </a>{" "}
       </li>
       <li>
        <a
         href='#'
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>
         Title 5
        </a>{" "}
       </li>
       <li>
        <a
         href='#'
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>
         Title 6
        </a>{" "}
       </li>
       <li>
        <a href='#'>Title 7</a>{" "}
       </li>
      </ul>
     </div>
    </div>
   </div>
   <div className='container'>
    <br />
    <br />
    <p>
     Home/Who we are/<strong>Contact</strong>
    </p>
    <br />
    <br />

    <h3 className='text-danger'>Contact</h3>
    <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, eveniet
     fugit quas quae maxime atque laudantium accusamus. Quisquam modi fuga
     dolorem eos deserunt cumque nostrum mollitia facere. Quod, veritatis
     fugiat?
    </p>
    <br />
    <br />
    <br />
    <div className='grid-2'>
     <div>
      <h3
       style={{ backgroundColor: "lightpink", width: "25%" }}
       className='text-primary'>
       Contact us
      </h3>
      <hr />
      <form>
       <input type='text' placeholder='Name' />

       <span style={{ display: "flex" }}>
        {" "}
        <input type='text' placeholder='Phone' />
        <input type='text' placeholder='Email' />
       </span>

       <textarea placeholder='Message' />
       <button className='btn btn-sm btn-primary'>Submit</button>
      </form>
     </div>
     <div>
      <h3
       style={{ backgroundColor: "lightpink", width: "25%" }}
       className='text-primary'>
       Reach Us
      </h3>
      <hr />
      <p>
       Coaltion Skills Test
       <br />
       525 La Planta St
       <br />
       4200 Argentina
       <br />
       <br />
       Phone: 385.154.11.28.35 <br />
       Fax: 385.154.11.28.35
      </p>
      <br />
      <br />
      <br />
      <i className='fab fa-facebook-square'></i>
      <i className='fab fa-twitter-square'></i>
      <i className='fab fa-instagram-square'></i>
      <i className='fab fa-pinterest-square'></i>
     </div>
    </div>
   </div>
  </Fragment>
 );
}

export default App;
