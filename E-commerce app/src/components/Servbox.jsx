import PropTypes from 'prop-types';

function Servebox({data}) {
  return (
    <>
       {data.map((OneItem, index)=> 
        ( <div className="servebox" key={index}>
         {OneItem.icon}
       <div className="contentside">
        <h3>{OneItem.heading}</h3>
        <p>{OneItem.para}</p>
       </div>
      </div>)
        )}
    </>
    
  )
  
}
Servebox.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      heading: PropTypes.string.isRequired,
      para: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Servebox;
