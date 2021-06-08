import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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
          //if response is not in the 200s throw error other return json
          if (res.status >= 200 && res.status <= 299) {
            return res.json();
          } else {
            throw Error(res.statusText);
          }
        })
        .then((data) => {
         //console.log(data)
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

//Prop-Types
useFetch.propTypes = {
  stats: PropTypes.object,
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
  url: PropTypes.string
};