import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { API } from '../Global';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Invalid credential. Try Again');
    }

    const data = {
      name,
      email,
      password,
      confirmPassword,
      age,
      mobile,
      birthday,
      gender,
    };
    fetch(`${API}/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return navigate('/me');
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <div className="signup">
          <div className="signup-subcontainer">
            <div>
              <input
                type="text"
                onChange={e => setName(e.target.value)}
                placeholder="Enter Name"
                required
              />
            </div>{' '}
            <div>
              <input
                type="email"
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter Email"
                required
              />
            </div>{' '}
            <div>
              <input
                type="password"
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter Password"
                required
                minLength={7}
              />
            </div>
            <div>
              <input
                type="password"
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
                minLength={7}
              />
            </div>
          </div>
          <div className="signup-subcontainer2">
            <div>
              <input
                type="number"
                onChange={e => setAge(e.target.value)}
                placeholder="Enter Age"
                required
              />
            </div>{' '}
            <div>
              <input
                type="number"
                onChange={e => setMobile(e.target.value)}
                placeholder="Enter Mobile Number"
                required
                maxLength={10}
                minLength={10}
              />
            </div>{' '}
            <div id="birthday">
              <label id="birth" htmlFor="birthday">
                Birthday:
              </label>
              <input
                type="date"
                onChange={e => setBirthday(e.target.value)}
                id="birthday"
                name="birthday"
                required
              />
            </div>
            <div className="radiodiv">
              <input
                type="radio"
                onClick={() => setGender('Male')}
                id="male"
                name="gender"
                value="Male"
                required
              />
              <label className="radio" htmlFor="male">
                Male
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                onClick={() => setGender('Female')}
                value="Female"
                required
              />
              <label className="radio" htmlFor="female">
                Female
              </label>
              <input
                className="radio"
                type="radio"
                id="other"
                name="gender"
                value="Other"
                required
                onClick={() => setGender('Other')}
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>

        <div className="btndiv">
          <input id="submit" type="submit" value="Register" />
          <button onClick={() => navigate('/')}>Back</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
