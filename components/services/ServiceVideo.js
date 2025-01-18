const ServiceVideo = () => {
  return (
    <div className="container mx-auto px-4 font-montserrat">
      <div className=" mb-20 text-center">
        <h3 className="text-xl font-semibold text-uRed mb-4">
          Uplifting Your Life, One Day at a Time
        </h3>
        <p className="text-accent text-xl max-w-4xl text-center mx-auto">
          We offer personalized services and activities that nourish the mind,
          body, and spirit. Surrounded by the beauty of Inglewood, we help our
          participants rediscover their passions and connect with others in a
          supportive community. Every day is an opportunity for growth and joy.
        </p>
      </div>
      {/* video */}
      <div className="relative w-full mx-auto my-5 lg:my-12">
        <div className="w-full h-2/3" style={{ paddingBottom: "56.25%" }}>
          {/* <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
            src="https://www.youtube.com/embed/DRDBd5u8CJU?si=tOkG7tDUATj2MZdy&rel=0&modestbranding=1&end=120"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="uplifting adalt center Services Video"
            referrerPolicy="no-referrer"
          ></iframe> */}

          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
            src="https://www.youtube.com/embed/43pZaD_Fdyw?si=Ho-OPaq35XJ8Iy4T"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ServiceVideo;
