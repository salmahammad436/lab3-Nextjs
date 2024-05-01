import React, { useEffect, useState } from 'react';

export default function Dashboard({ data }) {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDashboard() {
      const res = await fetch(`http://localhost:4000/dashboard`);
      const data = await res.json();
      setDashboard(data[0]); 
      setLoading(false);
    }

    getDashboard();
  }, []);

  return (
    <div className='container'>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Posts: {dashboard.posts}</h1>
          <h1>Users: {dashboard.users}</h1>
          <h1>Comments: {dashboard.comments}</h1>
        </div>
      )}
    </div>
  );
}