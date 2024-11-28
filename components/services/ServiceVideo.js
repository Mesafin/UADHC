

const ServiceVideo = () => {
  return (
    <div className="container mx-auto px-4 font-montserrat">
      <div className="mt-12 mb-20 text-center">
        <h3 className="text-xl font-semibold text-uRed mb-4">
          Uplifting Your Life, One Day at a Time
        </h3>
        <p className="text-accent text-xl">
          At Uplifting Adult Day Center, we believe that every day is an
          opportunity for growth, connection, and joy. Our programs are designed
          to nourish your mind, body, and spirit. We’re committed to creating a
          vibrant community where you can rediscover your passions, make new
          friends, and feel truly valued. Let us be your partner in creating a
          fulfilling and enriching life.
        </p>
      </div>
      {/* video */}
      <div className="relative w-full mx-auto my-5 lg:my-12">
        <video
          className="w-full h-full rounded-lg shadow-md"
          controls
          poster="./thumbnail.png"
        >
          <source src="./uadhcVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ServiceVideo;
