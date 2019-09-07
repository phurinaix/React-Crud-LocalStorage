import React from 'react';

const CrudForm = ({ onSubmitHandler, firstName, lastName, email, updateEvent, onChangeHandler, updateHandler, cancelHandler }) => {
    return (
        <form onSubmit={onSubmitHandler} className="col-md-5 border border-secondary p-3 my-3">
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" placeholder="First Name" name="firstName" value={firstName} onChange={onChangeHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>                        
                <input type="text" className="form-control" placeholder="First Name" name="lastName" value={lastName} onChange={onChangeHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" placeholder="Email" name="email" value={email} onChange={onChangeHandler} />
            </div>
            {/* <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                    <label class="form-check-label" for="exampleRadios1">Male</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                    <label class="form-check-label" for="exampleRadios1">Female</label>
                </div>
            </div> */}
            {updateEvent ?
                <React.Fragment>
                    <button type="button" className="btn btn-primary" onClick={updateHandler}>Update</button>
                    <button type="button" className="btn btn-danger" onClick={cancelHandler}>Cancel</button>
                </React.Fragment>
                :
                <button type="submit" className="btn btn-primary">Create</button>
            }
        </form>
    );
};

export default CrudForm;