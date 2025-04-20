"use client";
import { useProfile } from "../../../components/UseProfile";
import { useState } from "react";
import { useEffect } from "react";
import UserTabs from "../../../components/layout/UserTabs";
import Link from "next/link";
import Right from "../../../components/icons/Right";
import Left from "../../../components/icons/Left";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import EditableImage from "../../../components/layout/EditableImage";
import MenuItemForm from "../../../components/layout/MenuItemForm";

export default function NewMenuItemPage() {
  const [menuItems, setMenuItems] = useState([]);
  const { loading, data } = useProfile();
  const [redirectToItems,setRedirectToItems] = useState(false);

  async function handleFormSubmit(ev, data) {
  ev.preventDefault();

  const { image, name, basePrice, description } = data; // Extract data from the argument
  
  const savingPromise = new Promise(async (resolve, reject) => {
    const response = await fetch("/api/menu-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image, name, basePrice, description }),
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

  if (redirectToItems) return redirect("/menu-items")

  if (loading) return <div>Loading user info...</div>;
  if (data && !data.admin) return <div>Access denied...not an admin</div>;

  return (
    <section className="mt-8 max-w-2xl mx-auto">
      <UserTabs isAdmin={true} />
      <div className="max-w-md mx-auto mt-8">
        <Link href={"/menu-items"} className="button">
          <Left />
          <span>Show all menu items</span>
        </Link>
      </div>
      <div className="mt-8">
        <MenuItemForm menuItem={null} onSubmit={handleFormSubmit}/>
      </div>
    </section>
  );
}
