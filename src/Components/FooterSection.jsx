import { FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left Side */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold mb-2">Contact Us</h3>
          <p>Call us: 09638090000</p>
          <p>Email us: cc.believerssign@gmail.com</p>
          <p>Shop Address: Shop-3/1, Eastern Plaza, Hatirpool, Dhaka, Bangladesh</p>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="w-5 h-5 hover:text-gray-400" />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube className="w-5 h-5 hover:text-gray-400" />
            </a>
          </div>
        </div>

        {/* Middle Side */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold mb-2">Customers Account</h3>
          <p>Sign in</p>
          <p>Create New Account</p>
          <p>My Orders</p>
          <p>Join as a Affiliate Partner</p>
          <p>Complain Box</p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold mb-2">Related Page</h3>
          <p>Refund & Returned</p>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
          <p>Our Showrooms</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        BELIEVERS SIGN © 2024 POWERED BY STOREX
      </div>
    </footer>
  );
}

