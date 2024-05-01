import React from 'react';
import useSWR from 'swr';

export default function DashboardSWR() {
  const fetchData = async () => {
    const res = await fetch(`http://localhost:4000/dashboard`);
    const data = await res.json();
    return data[0];
  };

  const { data, error } = useSWR("dashboard", fetchData);

  return (
    <div>
      {error ? (
        <div>Error</div>
      ) : data ? (
        <div>
          <h1>Posts: {data.posts}</h1>
          <h1>Users: {data.users}</h1>
          <h1>Comments: {data.comments}</h1>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}