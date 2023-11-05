import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./card"; 
import contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      heading={contact.heading}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      <div className="app_outer">
        <div className="app_boards">
          {contacts.map(createCard)}
        </div>
      </div>
      <Footer />
    </div>
  );
}



export default App;
