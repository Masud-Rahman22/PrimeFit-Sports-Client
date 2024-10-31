const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-white rounded-lg mt-10 space-y-12">
      {/* Company Information Section */}
      <section className="mb-12">
        <div className="bg-[#2b2b2b] p-5 rounded-lg">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white uppercase tracking-wider text-center">
            About Us
          </h1>
        </div>
        <p className="text-xl text-gray-700 mt-6 text-center md:text-left">
          Welcome to Xtreme Sports! We are a passionate team dedicated to
          bringing you the best sporting goods and equipment for your active
          lifestyle. Whether you're into biking, hiking, or outdoor adventure,
          we have everything you need to fuel your passion.
        </p>
      </section>

      {/* Mission and Vision Section */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Our Mission */}
          <div className="bg-[#2b2b2b] p-5 rounded-lg flex flex-col justify-center items-center text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-wide">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-white mt-5">
              To inspire and enable people of all ages to live an active and
              adventurous lifestyle by providing high-quality, innovative
              products that support their outdoor activities.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-[#2b2b2b] p-5 rounded-lg flex flex-col justify-center items-center text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-wide">
              Our Vision
            </h2>
            <p className="text-lg md:text-xl text-white mt-5">
              To be the global leader in sporting goods by constantly pushing
              the boundaries of innovation, sustainability, and customer
              service. We aim to create a community where every adventurer finds
              the gear they need to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="mb-12">
        <div className="bg-[#2b2b2b] p-5 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-wide text-center">
            Contact Us
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mt-5 justify-between text-center">
          <p className="text-lg text-gray-700">
            <strong>Email:</strong> masudrhmn6560@gmail.com
          </p>
          <p className="text-lg text-gray-700">
            <strong>Phone:</strong> 01850556560
          </p>
          <p className="text-lg text-gray-700">
            <strong>Address:</strong> Narayanganj Dhaka Bangladesh
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="mb-12">
        <div className="bg-[#2b2b2b] p-5 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-wide text-center">
            Meet Our Team
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://i.ibb.co.com/sRwMVY8/IMG-5414-1.jpg"
              alt="Team Member 1"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h3 className="text-xl font-bold">Masud Rahman</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://i.ibb.co.com/BgT1VRQ/young-attractive-emotional-girl-business-style-clothes-sitting-desk-with-phone-office-audience.jpg"
              alt="Team Member 2"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h3 className="text-xl font-bold">Tahsina Iqbal Nitol</h3>
            <p className="text-gray-600">COO</p>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://i.ibb.co.com/v4LvL9J/medium-shot-man-holding-cardboard-box.jpg"
              alt="Team Member 3"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h3 className="text-xl font-bold">Abdullah Al Noman Baki</h3>
            <p className="text-gray-600">Head of Product</p>
          </div>
        </div>
      </section>

      {/* Store Location Section */}
      <section className="mb-12">
        <div className="bg-[#2b2b2b] p-5 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-wide text-center">
            Our Store Locations
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Store Location 1 */}
          <div className="flex flex-col p-6 border rounded-lg shadow-lg bg-gray-100">
            <h3 className="text-2xl font-bold mb-2">Main Store</h3>
            <p className="text-lg text-gray-700">
              Narayanganj Dhaka Bangladesh
            </p>
            <p className="text-lg text-gray-700">Phone:01850556565</p>
          </div>

          {/* Store Location 2 */}
          <div className="flex flex-col p-6 border rounded-lg shadow-lg bg-gray-100">
            <h3 className="text-2xl font-bold mb-2">Another Branch</h3>
            <p className="text-lg text-gray-700">
              Gulshan Dhaka Bangladesh
            </p>
            <p className="text-lg text-gray-700">Phone: 01850556560</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
