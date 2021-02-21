import React from "react";

function SearchUser({ value, setValue, onSearch }) {
    return (
        <div className="input-group">
            <div className="form-outline">
                <input className="mr-sm-2"
                    placeholder="Search"
                    type="text" // value={value}
                    onChange={(e) => setValue(e.target.value)} ></input>
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => onSearch()} >Ir a</button>
            </div>

            <style jsx>{`
                       .input-group {
                            width: 100%;
                        }
                        `}</style>
        </div >
    );
}

export default SearchUser;
