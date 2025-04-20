// 'use client'

// import toast from "react-hot-toast";
// import UserForm from "../../../components/layout/UserForm"
// import UserTabs from "../../../components/layout/UserTabs";
// import { useProfile } from "../../../components/UseProfile" 
// import { useParams } from "next/navigation";
// import { useEffect } from "react";
// import { useState } from "react";



// export default function EditUserPage(){
//     const {loading,data}=useProfile();
//     const [user,setUser]=useState(null);
//     const {id}=useParams();


//     useEffect(() => {
//         fetch('/api/profile?_id='+id).then(res => {
//           res.json().then(user => {

//             setUser(user);
//           });
//         })
//       }, []);

//       async function handleSaveButtonClick(ev, data) {
//         ev.preventDefault();
//         const promise=new Promise(async(resolve,reject) => {
//           const res=await fetch('/api/profile', {
//             method: 'PUT',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({...data, _id: id}),
//           });
//           if(res.ok){
//             resolve();
//           }
//           else  {
//             reject();
//           }
//         });
//         await toast.promise(promise, {
//           loading: 'Saving...',
//           success: 'Saved!',
//           error: 'Could not save',
//         }
//         )
//       }

  

//     if(loading) return <div>Loading...</div>
//     if(!data.admin){
//         return <div>You are not an admin</div>
//     }

//     return(
//         <section className="mt-8 mx-auto max-w-2xl">
//             <UserTabs isAdmin={true}/>
//             <div className="mt-8">
//                 <UserForm user={user} onSave={handleSaveButtonClick}/>
//             </div>
//         </section>
//     );
// }

"use client";

import toast from "react-hot-toast";
import UserForm from "../../../components/layout/UserForm";
import UserTabs from "../../../components/layout/UserTabs";
import { useProfile} from"../../../components/UseProfile";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditUserPage() {
  const { loading, data } = useProfile();
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/profile?_id=${id}`)
      .then((res) => res.json())
      .then(setUser)
      .catch(() => toast.error("Failed to load user"));
  }, [id]);

  const handleSaveButtonClick = async (ev, formData) => {
    ev.preventDefault();
    const promise = fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, _id: id }),
    });

    await toast.promise(promise, {
      loading: "Saving...",
      success: "Saved!",
      error: "Could not save",
    });
  };

  if (loading) return <div>Loading...</div>;
  if (!data?.admin) return <div>You are not an admin</div>;

  return (
    <section className="mt-8 mx-auto max-w-2xl">
      <UserTabs isAdmin={true} />
      <div className="mt-8">
        <UserForm user={user} onSave={handleSaveButtonClick} />
      </div>
    </section>
  );
}
