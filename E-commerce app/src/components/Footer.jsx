import { useState } from "react";
import { FaTruck } from "react-icons/fa";
import { MdSavings } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";
import { FaHeadphonesSimple } from "react-icons/fa6";
import Servebox from "./servbox";


function Footer() {


const [footerData]= useState( [
  {
    icon: <MdSavings className="Iconic" />,
    heading: 'Great saving',
    para: 'Save your token with us and relax'
  },
  {
    icon:<FaTruck  className="Iconic" />,
    heading: 'Free delivery',
    para: 'Free delivery on every 1000$ order'
  },
  {
    icon: <FaHeadphonesSimple  className="Iconic" />,
    heading: '24X7 support',
    para: 'Always available for your support'
  },
  {
    icon: <FaWallet  className="Iconic" />,
    heading: 'money back',
    para: 'Flexible money back policies are introduced'
  },
] )

  return (
    <div className='footer'>
      <div className="footerleft">
       <Servebox data={footerData} />
      </div>
      <div className="footerrigth">
        <div className="footerrigthupper">
          <img src="imagelogo.png" alt="" />
          <p>Thanks for shopping with kharij we are becomming a leading brand and gratefully announeing thta we are going global</p>
        </div>
        <div className="footerrigthlower">
          <div className="footerbox">
            <h2>your account</h2>
            <h4>about us</h4>
            <h4>account</h4>
            <h4>payment</h4>
            <h4>sales</h4>
          </div>
          <div className="footerbox">
            <h2>products</h2>
            <h4>delivery</h4>
            <h4>track order</h4>
            <h4>old product</h4>
            <h4>new product</h4>
          </div>
          <div className="footerbox">
            <h2>your account</h2>
            <h4>about us</h4>
            <h4>account</h4>
            <h4>payment</h4>
            <h4>sales</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
