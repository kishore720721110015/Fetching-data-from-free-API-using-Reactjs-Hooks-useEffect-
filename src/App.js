// import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import React, { useState } from 'react';

function EmployeeForm() {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [jobPosition, setJobPosition] = useState('');
  const [billableHours, setBillableHours] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [teams, setTeams] = useState('');
  const [designation, setDesignation] = useState('');
  const [isBillable, setIsBillable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log({
      firstName, middleName, lastName, birthDate, email, phoneNumber,
      gender, jobPosition, billableHours, startTime, endTime, teams, 
      designation, isBillable
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Employee Form</h2>
    < div class="first">  
      <div>
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        </div>
         <div>
        <label>Middle Name</label>
        <input
          type="text"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>  
      <div>
        <label>Birth Date</label>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Select Gender</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Choose Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label>Job Position</label>
        <input
          type="text"
          value={jobPosition}
          onChange={(e) => setJobPosition(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Billable Hours</label>
        <input
          type="number"
          value={billableHours}
          onChange={(e) => setBillableHours(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Start Time</label>
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label>End Time</label>
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Select Teams</label>
        <select
          value={teams}
          onChange={(e) => setTeams(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="">Choose Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label>Select Designation</label>
        <select
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="">Choose Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label>Is Billable?</label>
        <input
          type="checkbox"
          checked={isBillable}
          onChange={(e) => setIsBillable(e.target.checked)}
        />
      </div>
      </div> 
      <button type="submit">Submit</button> 
    </form>
  );
}

export default EmployeeForm;
