import { shopProducts } from "@/mock-data/shop";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const Shop = () => {
  return (
    <Layout>
      {/* Page Banner Start */}
      <PageBanner pageName={"Shop"} />
      {/* Page Banner End */}
      {/* Products Area start */}
      <section className="product-area py-130 rpy-100 rel z-1">
        <div className="container container-1290">
          <div className="shop-shorter rel z-3 mb-40 wow fadeInUp delay-0-2s">
            <div className="sort-text mb-20">Showing 1 - 12 of 30 Results</div>
            <div className="products-dropdown mb-20">
              <select>
                <option value="default" selected>
                  Sort by
                </option>
                <option value="new">Sort by Newness</option>
                <option value="old">Sort by Oldest</option>
                <option value="hight-to-low">High To Low</option>
                <option value="low-to-high">Low To High</option>
              </select>
            </div>
          </div>
          <div className="row">
            {shopProducts.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className={`product-item wow fadeInUp delay-0-${index + 2}s`}>
                  <div className="image">
                    <img
                      src={item.imageSrc}
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <a className="category" href="#">
                      {item.category}
                    </a>
                    <h5>
                      <Link legacyBehavior href="/product-details">
                        {item.title}
                      </Link>
                    </h5>
                    <div className="ratting-price">
                      <div className="ratting">
                        {[...Array(item.rating)].map((_, i) => (
                          <i key={i} className="fas fa-star" />
                        ))}
                        <span className="price">{item.price}</span>
                      </div>
                    </div>
                    <a href="#" className="theme-btn style-two">
                      Add to Cart <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-lg-12">
              <ul className="pagination mt-40 flex-wrap justify-content-center wow fadeInUp delay-0-2s">
                <li className="page-item disabled">
                  <span className="page-link">
                    <i className="fas fa-angle-left" />
                  </span>
                </li>
                <li className="page-item active">
                  <span className="page-link">
                    01
                    <span className="sr-only">(current)</span>
                  </span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    02
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    03
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    04
                  </a>
                </li>
                <li className="page-item dot" />
                <li className="page-item dot" />
                <li className="page-item dot" />
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="fas fa-angle-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Products Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default Shop;
