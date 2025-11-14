export function MapSection() {
  return (
    <section className="w-full lg:w-1/2 h-[500px] lg:h-full py-8 lg:py-0 px-8 lg:ps-12">
      <div className="h-full">
        {/* <iframe
            className="w-full h-full border border-gray-300 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.888406665729!2d-118.14200382501453!3d34.09799911531418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c4e1232f147d%3A0xb70ee2688d19ed24!2s508%20N%20Electric%20Ave%2C%20Alhambra%2C%20CA%2091801%2C%20USA!5e0!3m2!1sen!2sjp!4v1732860692089!5m2!1sen!2sjp"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}

        <iframe
          className="w-full h-full border border-gray-300 rounded-lg"
          src="https://www.google.com/maps?q=33.946055,-118.382669&z=16&output=embed"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
