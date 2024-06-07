import React from 'react'
import Navigation from './Navigation'

const SearchUser = () => {
  return (
    <div>
        <Navigation/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_AwUwcS4QCuzalkWKYAzbimZlcagY7shSFKkc4wlV5MvB7xWngVvF9_bDOX19hcjZt0w&usqp=CAU" alt="" /><br />
                            <label htmlFor="" className="form-label">Search User</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success">Search</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchUser