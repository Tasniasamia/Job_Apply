import React from 'react';
import pik1 from '../../assets/All Images/Vector-1.png';
import pik2 from '../../assets/All Images/Vector.png';

const Blog = () => {
    return (
        <div>
            <div className=' contaner2 position-relative'>
           
           <div style={{marginTop:"-100px"}} className='position-absolute end-0 top-0'><img src={pik1} alt="victor1" /></div>
          <div className='d-flex justify-content-center align-items-center'>
           <h3 className='my-3'style={{fontSize:"35px",fontWeight:"bold",color:"gray"}}>Blogs</h3></div>
           <div  className='position-absolute start-0 bottom-0'><img src={pik2} alt="vector2" /></div>
           
           </div>
        <div className='container my-5'>
           <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      When should you use context API?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
     We have to use context API.because We can easily get data from children using the context API. Children can also easily access data from children inside children.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      What is a custom hook?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
      Hooks are functions that we use to load data or set data. Custom hooks are hooks that we create ourselves.we can build logic and use it different times.we can use it different times by custom hook easily.


      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      What is useRef?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
       useRef is a function.we use it for different installation and dom manupulation.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingfour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefour" aria-expanded="false" aria-controls="panelsStayOpen-collapsefour">
      What is useMemo?
      </button>
    </h2>
    <div id="panelsStayOpen-collapsefour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingfour">
      <div class="accordion-body">
    UseMemo is react hook that allows you to memoize expensive functions so that you can avoid calling them on every render. It accepts two arguments — a function compute that computes a result.  we don't recalculate by any value when we using usememo.It also helps to load application data easily.we we calculate any value.It renders this time.we have an expensive function that runs on every render. When changing the count or adding a todo, you will notice a delay in execution.
      </div>
    </div>
  </div>
</div> 
        </div></div>
    );
};

export default Blog;