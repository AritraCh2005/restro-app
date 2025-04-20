"use client";
import {useProfile} from "../../../../components/UseProfile"
import { useState } from "react";
import { useEffect } from "react";
import UserTabs from "../../../../components/layout/UserTabs";
import Link from "next/link";
import Right from "../../../../components/icons/Right";
import Left from "../../../../components/icons/Left";
import toast from "react-hot-toast";
import { redirect, useParams } from "next/navigation";
import EditableImage from "../../../../components/layout/EditableImage";
import MenuItemForm from "../../../../components/layout/MenuItemForm";
import DeleteButton from "../../../../components/DeleteButton";

export default function EditMenuItemPage() {
  const { id } = useParams();

  const [menuItem, setMenuItem] = useState(null);
  const { loading, data } = useProfile();
  const [redirectToItems,setRedirectToItems] = useState(false);

  useEffect(() => {
    fetch("/api/menu-items").then(res=>{
      res.json().then(items=>{
          const item = items.find(i => i._id === id);
          setMenuItem(item);
      })
    })
    
  },[]);

  async function handleFormSubmit(ev,data) {
    ev.preventDefault();
    data ={...data, _id: id};
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/menu-items", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(savingPromise, {
      loading: "Saving...",
      success: "Saved!",
      error: "Could not save",
    });
    setRedirectToItems(true);
  }

  async function handleDeleteClick() {
    const promise = new Promise(async (resolve, reject) => {
      const res = await fetch('/api/menu-items?_id='+id, {
        method: 'DELETE',
      });
      if (res.ok)
        resolve();
      else
        reject();
    });

    await toast.promise(promise, {
      loading: 'Deleting...',
      success: 'Deleted',
      error: 'Error',
    });

    setRedirectToItems(true);
  }

  if (redirectToItems) return redirect("/menu-items")

  if (loading) return <div>Loading user info...</div>;
  if (data && !data.admin) return <div>Access denied...not an admin</div>;

  return (
    <section className="mt-8 max-w-md">
      <UserTabs isAdmin={true} />
      <div className="max-w-md mx-auto mt-8">
        <Link href={"/menu-items"} className="button">
          <Left />
          <span>Show all menu items</span>
        </Link>
      </div>
      <div className="mt-8">
        <MenuItemForm menuItem={menuItem} onSubmit={handleFormSubmit}/>
        <div className="max-w-md mx-auto mt-4">
          <DeleteButton label="Delete item" 
          onDelete={handleDeleteClick}/>
        </div>
        
      </div>
    </section>
  );
}
