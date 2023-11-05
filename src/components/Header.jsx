import React,{useState} from "react";
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Darkmode from "./Darkmode";


function Header() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNestedDropdown1Open, setIsNestedDropdown1Open] = useState(false);
  const [isNestedDropdown2Open, setIsNestedDropdown2Open] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleNestedDropdown1 = () => {
    setIsNestedDropdown1Open(!isNestedDropdown1Open);
  };

  const toggleNestedDropdown2 = () => {
    setIsNestedDropdown2Open(!isNestedDropdown2Open);
  };

  return (
    <header>
      <div className="dropdown">
      <Darkmode />
        <button className="display-btn" onClick={toggleDropdown}>
          <MenuIcon />
          <h4>Display</h4>
          <ExpandMoreIcon />
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <span>Grouping             
            <div className="nested-dropdown">
              <button className="display-btn" onClick={toggleNestedDropdown1}>
                Display 1
              </button>
              {isNestedDropdown1Open && (
                <div className="nested-dropdown-content">
                  <span>Grouping</span>
                  <span>Priority</span>
                </div>
              )}
            </div></span>
            <span>Priority
            <div className="nested-dropdown">
              <button className="display-btn" onClick={toggleNestedDropdown2}>
                Display 2
              </button>
              {isNestedDropdown2Open && (
                <div className="nested-dropdown-content">
                  <span>Grouping</span>
                  <span>Priority</span>
                </div>
              )}
            </div>
            </span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
