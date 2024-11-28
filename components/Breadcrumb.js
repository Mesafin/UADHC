import Link from "next/link";
import backImage from "../public/contact-hero.png"
import Image from "next/image";

export default function Breadcrumb({ breadcrumbTitle, imageUrl }) {
  return (
    <>
      <section
        className="breadcrumb-area breadcrumb-bg bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageUrl.src || imageUrl})`,
        }}
      >
        <div
          className="breadcrumb-shape"
          // style={{ backgroundImage: `url(${shape})` }}
        />
        <div className="container mx-auto px-4">
          <div className="row flex justify-start">
            <div className="col-lg-12">
              <div className="breadcrumb-content text-center">
                <h2 className="title text-3xl font-bold text-uRed">
                  {/* {breadcrumbTitle} */}
                </h2>
                {/* <nav
                  aria-label="breadcrumb"
                  className="mt-4"
                  style={{
                    width: "250px",
                    borderRadius: "10px",
                    backgroundColor: "white",
                  }}
                >
                  <ol className="breadcrumb flex space-x-2 px-4 py-2">
                    <li className="breadcrumb-item">
                      <Link href="/">
                        <div className="text-dark ps-5 text-gray-700 hover:text-uRed">Home</div>
                      </Link>
                    </li>
                    <li className="breadcrumb-item active text-gray-500" aria-current="page">
                      {breadcrumbTitle}
                    </li>
                  </ol>
                </nav> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
