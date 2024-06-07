import React from 'react'
import Navbar from './Navbar'

const AddBooks = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 dol-xxl-6">

                                <label htmlFor="" className="form-label">Book title</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 dol-xxl-6">

                                <label htmlFor="" className="form-label">Category</label>
                                <select name="" id="" className="form-control">
                                    <option value="Science">Science</option>
                                    <option value="Fiction">Fiction</option>
                                    <option value="Biography">Biography</option>
                                    <option value="Autobiography">Autobiography</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 dol-xxl-6">

                                <label htmlFor="" className="form-label">Published Year</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 dol-xxl-6">

                                <label htmlFor="" className="form-label">Authour Name</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 dol-xxl-12">

                                <label htmlFor="" className="form-label">Book Description</label>
                                <textarea name="" id="" className="form-control"></textarea>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 dol-xxl-6">

                                <label htmlFor="" className="form-label">Publisher Name</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 dol-xxl-6">

                                <label htmlFor="" className="form-label">Distrubutor Name</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 dol-xxl-6">

                                <label htmlFor="" className="form-label">price</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 dol-xxl-6">
                                <label htmlFor="" className="form-label">Edition</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 dol-xxl-6">
                                <button className="btn btn-success">Add Book</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddBooks