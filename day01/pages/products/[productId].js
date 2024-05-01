import React from 'react';
import { useRouter } from 'next/router';

export default function ProductId({ movie }) {
  const router = useRouter();

  if (router.isFallback) return <div>Loading...</div>;

  return (
    <div className="container pt-5 ">
       <img style={{ width: '300px', marginBottom: '5px' ,borderRadius:'15px'}} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h3 style={{textAlign:'center', width:'300px'}}>{movie.title}</h3><br></br>
      <h5 style={{textAlign:'center', width:'300px'}}>{movie.overview}</h5>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { productId } = params;

  const res = await fetch(`https://api.themoviedb.org/3/movie/${productId}?api_key=e745abc45c5a8b28694e3e3347259f04`);
  const movie = await res.json();

  return {
    props: {
      movie
    }
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { productId: '2' } },
      { params: { productId: '3' } }
    ],
    fallback: true
  };
}
