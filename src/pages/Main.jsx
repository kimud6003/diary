import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name, value, options) => {
  return cookies.set(name, value, { ...options });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

const payload = {
  email: 'sej@sej.com',
  password: 'sej123',
  name: 'sej',
  image: '',
  image_type: '',
};

const url = 'https://api.mydiary.iste/users/';
const Login = async () => {
  const test = await axios.post(`${url}signin`, payload, {
    withCredentials: true,
  });
  console.log(test);
};

const Signup = async () => {
  const test = await axios.post(`${url}signup`, payload, {
    withCredentials: true,
  });
  console.log(test);
};

const Remove = async () => {
  const res = cookies.remove('Refresh', {
    path: '/',
    domain: 'mydiary.iste',
  });
  console.log(res);
};
function Main() {
  return (
    <>
      <h1>React cookies</h1>
      {cookies.user && <p>{cookies.user}</p>}
      <br />
      <button onClick={Login}>signin</button>

      <br />
      <button onClick={Signup}>signup</button>

      <br />
      <button onClick={Remove}>delete</button>
    </>
  );
}
export default Main;
