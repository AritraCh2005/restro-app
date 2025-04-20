
// import { useEffect,useState } from "react";

// export function useProfile() {
//     const [data, setData] = useState(false);
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     setLoading(true);
//     fetch("/api/profile").then((res) => {
//       res.json().then((data) => {
//         setData(data);
//         setLoading(false);
//       });
//     });
//   }, []);

//   return {loading,data}
// }

import { useEffect, useState } from "react";

export function useProfile() {
  const [data, setData] = useState(null); // Use null as initial state
  const [loading, setLoading] = useState(true); // Set loading to true initially
  const [error, setError] = useState(null); // State to store errors

  useEffect(() => {
    setLoading(true);
    fetch("/api/profile")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch profile data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading profile:", err);
        setError(err.message); // Store error message in state
        setLoading(false); // Stop loading in case of error
      });
  }, []);

  return { loading, data, error };
}
