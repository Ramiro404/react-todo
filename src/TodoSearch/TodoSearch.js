import React from "react";
import '../bootstrap.min.css';

function TodoSearch({searchValue, setSearchValue}) {
    const onSearch = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    }
    return (
        <React.Fragment>
            {/* <input type="search" placeholder="Type  your todo..." /> */}

            <div className={"form-group"}>
                {/* <label className={`col-form-label col-form-label-lg mt-4`} for="inputLarge">Large input</label> */}
                <input className={`form-control form-control-lg`} type="seach" placeholder="Type your todo" id="inputLarge" 
                onChange={onSearch}
                value={searchValue}/>
            </div>
            {/* <h2>{searchValue}</h2> */}
        </React.Fragment>
    );
}

export { TodoSearch };