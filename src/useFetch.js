import { useState, useEffect } from 'react';

const useFetch = (url) => {

  //useState is a hook that is used as a reactive value and change when we want
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // run code on every render
  useEffect(() => {
    // setTimeout to show loading message for a second - This is to simulate if we was fetching stats from an external api
    setTimeout(() => {
      fetch(url)
        .then(res => {
          //check the okay property
          if (!res.ok) { // if response is not okay, throw new error
            throw Error('could not get the stats. Please try again later');
          }
          return res.json()
        })
        .then((data) => {
         // console.log(data)
          setIsLoading(false);
          setStats(data.match);
          setError(null);
        })
        .catch(err => {
          // Catches network error automatically
          setIsLoading(false);
          setError(err.message);
        })
    }, 1000);
    //run once on page load and then when url dependency changes
  }, [url])

  console.log (stats)
  //create a table in console of all the stats
  //console.table(stats);

  return { stats, isLoading, error };
}

export default useFetch;