import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  let { contact } = useSelector((state) => state);
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_NAME", payload: { keyword } });
  };
  return (
    <Form onSubmit={searchByName} className="search-box">
      <Row>
        <Col lg={10}>
          <Form.Control
            type="text"
            placeholder="이름을 입력해 주세요"
            onChange={(event) => setKeyword(event.target.value)}
          />
        </Col>
        <Col lg={2}>
          <Button type="submit">찾기</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
