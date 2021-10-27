import React from 'react'
import NavLogged from '../components/NavLogged'
import { useUser } from '../states/UserProvider';

export default function StudentPage() {
  const { user } = useUser();
    return (
      <div className="page-wrapper">
        <div className="page-inner">
       <NavLogged/>
          <h2>Student { user.name}</h2>
        </div>
      </div>
    );
}
