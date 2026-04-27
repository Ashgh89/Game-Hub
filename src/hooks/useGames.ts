import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

const useGames = () => {
  interface Game {
    id: number;
    name: string;
  }

  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient

      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
// Why we have canceled at the top of Fetching list?
// You're using StrictMode in main.tsx — in development, React intentionally
// mounts and unmounts every component twice to help you find bugs.

// So what happens:
// Component mounts → fetch starts
// React unmounts it (on purpose) → controller.abort() runs → "canceled" error shows
// React mounts it again → fetch starts again → games load ✅
// That's why you see "canceled" at the top

// Add CanceledError and it silently ignores that false cancel. 🙂
