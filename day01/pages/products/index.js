import React from 'react';
import Link from 'next/link';

export default function Products({ movies }) {
  return (
    <div className="container">
    <div className="row">
      {movies.map(movie => (
        <div className="col-md-3 pt-5" key={movie.id}>
          <img style={{ width: '300px', marginBottom: '5px' ,borderRadius:'15px'}} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <Link href={`/products/${movie.id}`} style={{ textDecoration: 'none',color:'black' }}><h3 style={{textAlign:'center', width:'300px',textDecoration:'none'}}>{movie.title}</h3></Link>
        </div>
      ))}
    </div></div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e745abc45c5a8b28694e3e3347259f04`);
  const data = await res.json();
  return {
    props: { movies: data.results }
  };
}
