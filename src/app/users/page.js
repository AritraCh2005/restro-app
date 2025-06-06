"use client";
import { useEffect, useState } from "react";
import UserTabs from "../../components/layout/UserTabs";
import { useProfile} from "../../components/UseProfile"
import Link from "next/link";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  const { loading, data } = useProfile();

  useEffect(() => {
    fetch("/api/users").then((response) => {
      response.json().then((users) => {
        setUsers(users);
      });
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  // if (!data.admin) {
  //   return <div>Access denied...not an Admin</div>;
  // }

  return (
    <section className=" max-w-2xl mx-auto mt=8">
      <UserTabs/>
      <div>
        {users.length > 0 &&
          users.map((user) => (
            <div className="bg-gray-100 rounded-lg mb-2 p-1 px-4 items-center gap-4 flex">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 grow">
                <div className="text-gray-700">
                {!!user.name && <span>{user.name}</span>}
                {!user.name && <span className="italic">No name  </span>}
                </div>
                <span className="text-gray-600">{user.email}</span>
              </div>
              <div>
                <Link className="button "href={'/users/'+user._id}>
                Edit
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
