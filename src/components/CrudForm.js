import React from 'react';
import PhoneInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags'

const CrudForm = (props) => {
    const { title, firstName, lastName, birthday, nationality, citizenId, phone, passportNumber, salary, onChangeHandler, onSubmitHandler, updateEvent, cancelHandler, updateHandler } = props;
    return (
        <form onSubmit={onSubmitHandler} className="border border-secondary p-3 my-3">
            <div className="row">
                <div className="form-group col-md-2">
                    <label htmlFor="title">Title</label>
                    <select className="form-control" name="title" value={title} onChange={onChangeHandler}>
                        <option>Mr</option>
                        <option>Mrs</option>
                        <option>Ms</option>
                    </select>
                </div>
                <div className="form-group col-md-5">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" name="firstName" value={firstName} onChange={onChangeHandler} />
                </div>
                <div className="form-group col-md-5">
                    <label htmlFor="lastName">Last Name</label>                        
                    <input type="text" className="form-control" name="lastName" value={lastName} onChange={onChangeHandler} />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-4">
                    <label htmlFor="birthday">Birthday</label>                        
                    <input type="date" className="form-control" name="birthday" value={birthday} onChange={onChangeHandler} /> 
                </div>
                <div className="form-group col-md-8">
                    <label htmlFor="nationality">Nationality</label>
                    <select className="form-control" name="nationality" value={nationality} onChange={onChangeHandler}>
                        <option>AMERICAN</option>
                        <option>LAOS</option>
                        <option>THAI</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-12">
                    <label htmlFor="citizenId">Citizen ID</label>                        
                    <input type="number" className="form-control" name="citizenId" value={citizenId} onChange={onChangeHandler} />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-12">
                    <label htmlFor="gender">Gender</label>
                    <input type="radio" name="gender" value="male" onChange={onChangeHandler} className="ml-3 mr-2"/>
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" value="female" onChange={onChangeHandler} className="ml-3 mr-2"/>
                    <label htmlFor="female">Female</label>
                    <input type="radio" name="gender" value="unisex" onChange={onChangeHandler} className="ml-3 mr-2"/>
                    <label htmlFor="unisex">Unisex</label>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-4">
                    <label htmlFor="phone">Mobile Phone</label>
                    <input type="number" className="form-control" name="phone" value={phone} onChange={onChangeHandler} />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="passportNumber">Passport Number</label>
                    <input type="number" className="form-control" name="passportNumber" value={passportNumber} onChange={onChangeHandler} />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="salary">Expect Salary</label>
                    <input type="number" className="form-control" name="salary" value={salary} onChange={onChangeHandler} />
                </div>
            </div>
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