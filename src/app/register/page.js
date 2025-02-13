"use client";
import {signIn} from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import Link from 'next/link';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[creatingUser,setCreatingUser]=useState(false);
  const[userCreated,setUserCreated]=useState(false);
  const[error,setError]=useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response=await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if(response.ok) {
        setUserCreated(true);
      }
      else{
        setError(true);
      }
      setCreatingUser(false);
    
  }

  return (
    <section>
      <h1 className="text-3xl font-bold text-center mt-10 mb-6">
        Register
      </h1>
      {userCreated &&(
        <div className="my-4 text-center">
          User created. Now you can<Link className="underline" href={'/login'}> Login &raquo;</Link> 

        </div>
      )}
      {
        error &&(
          <div className="my-4 text-center">
          An error has occured.<br/>
          Please try again later

        </div>
        )
      }
      <form className="block max-w-xs mx-auto space-y-4" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          disabled={creatingUser}
          onChange={(ev) => setEmail(ev.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          disabled={creatingUser}
          onChange={(ev) => setPassword(ev.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <button
          type="submit" disabled={creatingUser}
          className="w-full bg-red-500 text-white rounded-lg p-2 font-semibold hover:bg-red-600"
        >
          Register
        </button>
        <div className="text-center my-4 text-gray-500">
          or Login with Provider
        </div>
        <button
          onClick={() => signIn('google', {callbackUrl:'/'})}
          className="flex gap-4 justify-center">
          <Image src={'/google.png'} alt={''} width={24} height={24} />
          Login with google
        </button>
        <div className="text-center my-4 text-gray-600">
          Existing account?<Link className="underline" href={'/login'}> Login &raquo;</Link>
        </div>
      </form>
    </section>
  );
}
