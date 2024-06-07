import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewBook = () => {

    const [data,changeData]=useState(

[
        { "title":"animal" , "auth":"anu" , "pubyear":1999 , "price":130},
        { "title":"wings" , "auth":"sana" , "pubyear":2001, "price":99},
        { "title":"sleep" , "auth":"senu" , "pubyear":2020 , "price":30},
        { "title":"IF" , "auth":"kipling" , "pubyear":2024 , "price":50},
        { "title":"Sorry" , "auth":"mary" , "pubyear":2002 , "price":99},
        { "title":"Midnight" , "auth":"ria" , "pubyear":2003 , "price":299},
        { "title":"Twilight" , "auth":"vinu" , "pubyear":2004 , "price":300},




]



    )


    return (
        <div>
<Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            <h1>List of Books </h1>

                            <div className="col col-12 col-sm-12 col-md-12col-lg-12 col-xl-12 col-xxl-12">

                                <table class="table table-stripped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Title</th>
                                            <th scope="col">Authour</th>
                                            <th scope="col">Published year</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                    {data.map(

                                        (value,index) => {

                                           return <tr>
                                            <th>{value.title}</th>
                                            <td>{value.auth}</td>
                                            <td>{value.pubyear}</td>
                                            <td>{value.price}</td>
                                        </tr>



                                        }

                                    )}


                                      

                                        
                                    </tbody>
                                </table>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default ViewBook