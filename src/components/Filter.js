import React from 'react';
import '../MyStyle.scss'; 

const Filter = () => {

    return (

        <div><br></br>
            <div className="col s3"><h5>Sort By:</h5></div>
            <div class="bs-example">
                <p class="mt-4"> </p>
                <form>
                    <label for="customRange">Price range in between(&#8360; 100 - 10000) </label>
                    <input type="range" class="custom-range" min="1" max="100" id="customRange" />
                </form>
                <div id="result">Current Value: <b></b></div>
            </div>
            <div style={{textAlign:"center"}}>
                <button class="button button5">Apply</button>
            </div>
        </div>



    );

}

export default Filter;