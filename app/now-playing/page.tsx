// app/now-playing/page.tsx

"use client"; // Add this at the top

import { useState, useEffect } from "react";
import Link from "next/link";
import "./NowPlaying.css"; // Import the CSS Module

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export default function NowPlayingMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlayingMovies();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="nowPlaying-title">上映中の映画</h1>
      <Link
        style={{
          textDecoration: "underline",
          padding: "10px",
          borderRadius: "5px",
          fontFamily: "Noto Sans JP",
          fontSize: "18px",
        }}
        href="/"
      >
        ホーム
      </Link>
      <Link
        style={{
          textDecoration: "underline",
          padding: "10px",
          borderRadius: "5px",
          fontFamily: "Noto Sans JP",
          fontSize: "18px",
        }}
        href="/popular"
      >
        人気の映画
      </Link>
      <div className="movie-container">
        <ul className="movie-list">
          {movies.map((movie) => (
            <li key={movie.id}>
              <h2 className="title-2">{movie.title}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
