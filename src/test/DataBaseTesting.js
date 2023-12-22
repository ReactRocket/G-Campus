import React, { useState, useEffect } from 'react';
import startFirebase from '../firebase/index';
import { ref, get, set } from 'firebase/database';
import sIdGenerator from '../utils/sIdGenerator';

const DataBaseTesting = () => {
  const [formData, setFormData] = useState({});
  const [studentCounter, setStudentCounter] = useState(0);

  const fetchAllUserData = async () => {
    try {
      const usersRef = ref(startFirebase(), 'test');
      const snapshot = await get(usersRef);

      if (snapshot.exists()) {
        const numberOfUsers = snapshot.numChildren();
        setStudentCounter(numberOfUsers);
      } else {
        setStudentCounter(0);
        console.log('No users found.');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    console.log(formData);
    console.log(studentCounter);
  }, [formData, studentCounter]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetchAllUserData();
      const newId = await sIdGenerator(studentCounter);
      await set(ref(startFirebase(), `test/${newId}`), { ...formData });
      alert('Submit');
      setFormData({});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
        Name: <input type="text" name="name" onChange={handleChange} value={formData.name || ''} /> <br />

        Email: <input type="email" name="email" onChange={handleChange} value={formData.email || ''} /> <br />

        Mobile: <input type="phone" name="phone" onChange={handleChange} value={formData.phone || ''} /> <br />

        Password: <input type="password" name="password" onChange={handleChange} value={formData.password || ''} /> <br />

        <button type="submit">Submit</button>
        <button type="reset" onClick={() => setFormData({})}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default DataBaseTesting;
