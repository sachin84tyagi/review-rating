import React from "react";

const Pagination = ({totalPages, onSetCurrentPage}) => {
    const mainTotalPages = totalPages ? Math.ceil(totalPages) : 1
    // let pages =[]
    // for(let i=1; i<= mainTotalPages; i++) {
    //     pages.push(i)
    // }
    const pages = [...Array(mainTotalPages).keys()].map(num => num+1)
    return (
        <>
            {pages.map(num => (
                <button className="btn btn-primary"
                key={num}
                onClick={() => onSetCurrentPage(num)}
                >{num}</button>
            ))}
        </>
    )
}

export default Pagination