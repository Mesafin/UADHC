

export default function Breadcrumb({ breadcrumbTitle, imageUrl }) {
  return (
    <>
      <section
        className=" relative breadcrumb-area breadcrumb-bg bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageUrl.src || imageUrl})`,
        }}
      >
        <h1 className=" absolute top-[50%] lg:bottom-[35%] lg:right-[40%] text-4xl font-bold text-white  font-montserrat">
          CONTACT US
        </h1>
      </section>
    </>
  );
}
