import React from 'react';

const CrudPagination = (props) => {
    const numberOfUsersOnePage = props.numberOfUsersOnePage;
    const numberOfUsers = props.numberOfUsers;
    const numberOfPagination = Math.floor((numberOfUsers + (numberOfUsersOnePage - 1)) / numberOfUsersOnePage);
    const paginationArr = [...Array(numberOfPagination).keys()];
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">PREV</a></li>
                {paginationArr.map(element => {
                    return (
                            <li className="page-item" key={element}>
                                <a className="page-link" onClick={() => props.selectPage(element + 1)}>{element + 1}</a>
                            </li>
                        );
                })}
                <li className="page-item"><a className="page-link" href="#">NEXT</a></li>
            </ul>
        </nav>
    );
};

export default CrudPagination;