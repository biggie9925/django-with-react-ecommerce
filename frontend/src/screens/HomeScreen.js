import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

function HomeScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate hook

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get("keyword") || "";
  const pageParam = searchParams.get("page") || 1; // Default to page 1

  const productList = useSelector((state) => state.productList);
  const { error, loading, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageParam)); // Use pageParam here

    // Update the URL with the correct page number
    const newSearchParams = new URLSearchParams();
    newSearchParams.set("keyword", keyword);
    newSearchParams.set("page", pageParam);
    navigate(`?${newSearchParams.toString()}`); // Use navigate function
  }, [dispatch, keyword, pageParam, navigate]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>

          <Paginate page={page} pages={pages} />
        </div>
      )}
    </div>
  );
}

export default HomeScreen;