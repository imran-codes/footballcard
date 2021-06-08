import useFetch from '../useFetch';
import FootyList from "./FootyList";
import PropTypes from 'prop-types';



const FootyCard = () => {
  //Using custom hook I have made and is also reusable elsewhere
// destructuring using object instead of array because we can grab individuals without order
  const { stats, isLoading,  error} = useFetch("https://odds-api.checkd-dev.com/dev/smartacca/fixtures/5lx6xg4ofvrj9thfsze478opg/preview");

  return (
    <div>
      { error && <div>{error}</div>}
      { isLoading && <div className="loading"></div>}
      { stats && <FootyList stats={stats} title="Friendlies" />}
    </div>
  )
}

export default FootyCard;

//Prop-Types
FootyCard.propTypes = {
  stats: PropTypes.object,
  title: PropTypes.string
};

