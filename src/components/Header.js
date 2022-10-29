import { PageHeader, Button } from 'antd';
import { useMoralis } from "react-moralis";
import './Header.css';
import Amazon from "../images/logo.png";
import BookStore from "../images/bookstore.png";

const Header = () => {
  const { authenticate } = useMoralis();
  return(
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        title="Amazon Clone"
        extra={[

          <>
          <img src={Amazon} className="logo"></img>
          <img src={BookStore} className="logo"></img>
          
         <Button key="1" type="primary" onClick={() => authenticate()}>
          Login with Metamask
          </Button>
          </>
        ]}>
      </PageHeader>
    </div>
  )
}

export default Header;