import { PageHeader, Button, Input, Space, Badge } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { useMoralis } from "react-moralis";
import './Header.css';
import Amazon from "../images/logo.png";
import BookStore from "../images/bookstore.png";
import USA from "../images/usa.png";
//import React from 'react';
import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';



const { Search } = Input;
const categories = ["Comics", "Dictionaries", "Novels", "Fantasy", "Horror", "Adventure"];

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const onSearch = (value) => console.log(value);

const Header = () => {
  const { authenticate } = useMoralis();
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}

        extra={[

          <>
            <img src={Amazon} className="logo"></img>
            <img src={BookStore} className="logo"></img>

            <Search
              placeholder="Search For Products"
              enterButton="Search"
              size="large"
              suffix={suffix}
              onSearch={onSearch}
              className="searchBar"
            />

            <Button key="1" type="primary" class="login" onClick={() => authenticate()}>
              Login
            </Button>
            <Space size={"large"}>

              <Badge count={0} showZero>
                <span className="header-buttons">
                  <ShoppingCartOutlined className="header-icon" />
                  Cart
                </span>
              </Badge>
              <Space className="header-buttons" size={"small"}>
                <img src={USA} alt="region" className="flag"></img>▾
              </Space>

            </Space>

          </>
        ]}>
      </PageHeader>

      <div className="site-page-subheader-ghost-wrapper">
        <Space size={"middle"}>
          <Space size={"small"} style={{ fontWeight: "bold" }}>
            <MenuOutlined />
            Categories
          </Space>
          {categories.map((e) => {
            return (
              <Link to="/categories" state={e} className="categories">
                {e}
              </Link>
            )

          })}
        </Space>
      </div>
    </div>
  )
}

export default Header;