import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Logo from "../assets/imgs/logo.png";

const NavBar = () => {
  const menus = ["여성", "남성", "유아", "지속 가능한", "Home & Living"];
  return (
    <Nav>
      <div className="loginWrap">
        <FontAwesomeIcon icon={faUser} />
        <div>Log-In</div>
      </div>
      <div className="logoBox">
        <img src={Logo} alt="logo" />
      </div>
      <div className="menuAndSearch">
        <div className="menus">
          <ul>
            {menus.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>
        </div>
        <div className="searchWrap">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="검색" />
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;

  & .loginWrap {
    display: flex;
    justify-content: end;
    gap: 0.5rem;
    align-items: center;
  }

  & .logoBox {
    width: 5rem;
    margin: 0 auto;
    & > img {
      width: 100%;
    }
  }

  & .menus {
    margin: 0 auto;

    & > ul {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
  }

  & .searchWrap {
    display: flex;
    gap: 1rem;

    & > input {
      border: none;
      border-bottom: 2px solid black;
    }

    & > input:focus {
      outline: none;
    }
  }
`;

export default NavBar;
