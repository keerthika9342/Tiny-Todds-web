import "../styles/contactPage.css";
import { useState } from "react";


const locations = [
    {
      title: "Saidapet (Head Office)",
      address: "11/3, East Jones Road, Saidapet, Chennai - 600015",
      phone: "+91 89258 32501",
      map: "https://maps.google.com/maps?q=saidapet%20chennai&output=embed",
    },
    {
      title: "Adambakkam",
      address: "No.8, Sannathy Street, Adambakkam, Chennai - 600088",
      phone: "+91 89258 32502",
      map: "https://maps.google.com/maps?q=adambakkam%20chennai&output=embed",
    },
    {
      title: "Egmore",
      address: "No.84, Gengu Reddy Road, Egmore, Chennai - 600008",
      phone: "+91 89258 32503",
      map: "https://maps.google.com/maps?q=egmore%20chennai&output=embed",
    },
    {
      title: "Tambaram",
      address: "West Tambaram, Chennai - 600045",
      phone: "+91 89258 32504",
      map: "https://maps.google.com/maps?q=tambaram%20chennai&output=embed",
    },
    {
      title: "Porur",
      address: "Porur, Chennai",
      phone: "+91 89258 32505",
      map: "https://maps.google.com/maps?q=porur%20chennai&output=embed",
    },
    {
      title: "Thiruvanmiyur",
      address: "Thiruvanmiyur, Chennai",
      phone: "+91 89258 32506",
      map: "https://maps.google.com/maps?q=thiruvanmiyur%20chennai&output=embed",
    },
    {
      title: "Anna Nagar",
      address: "Anna Nagar, Chennai",
      phone: "+91 89258 32507",
      map: "https://maps.google.com/maps?q=anna%20nagar%20chennai&output=embed",
    },
    {
      title: "Mylapore",
      address: "Mylapore, Chennai",
      phone: "+91 89258 32508",
      map: "https://maps.google.com/maps?q=mylapore%20chennai&output=embed",
    },
    {
      title: "Choolaimedu",
      address: "Choolaimedu, Chennai",
      phone: "+91 89258 32509",
      map: "https://maps.google.com/maps?q=choolaimedu%20chennai&output=embed",
    },
    {
      title: "KK Nagar",
      address: "K.K Nagar, Chennai",
      phone: "+91 89258 32510",
      map: "https://maps.google.com/maps?q=kk%20nagar%20chennai&output=embed",
    },
    {
      title: "Poonamallee",
      address: "Poonamallee, Chennai",
      phone: "+91 89258 32511",
      map: "https://maps.google.com/maps?q=poonamallee%20chennai&output=embed",
    },
    {
      title: "Mogappair",
      address: "Mogappair, Chennai",
      phone: "+91 89258 32512",
      map: "https://maps.google.com/maps?q=mogappair%20chennai&output=embed",
    },
    {
      title: "Neelankarai",
      address: "Neelankarai, Chennai",
      phone: "+91 89258 32513",
      map: "https://maps.google.com/maps?q=neelankarai%20chennai&output=embed",
    },
    {
      title: "Perambur",
      address: "Perambur, Chennai",
      phone: "+91 89258 32514",
      map: "https://maps.google.com/maps?q=perambur%20chennai&output=embed",
    },
    {
      title: "Ambattur",
      address: "Ambattur, Chennai",
      phone: "+91 89258 32515",
      map: "https://maps.google.com/maps?q=ambattur%20chennai&output=embed",
    },
    {
      title: "Sholinganallur",
      address: "Sholinganallur, Chennai",
      phone: "+91 89258 32516",
      map: "https://maps.google.com/maps?q=sholinganallur%20chennai&output=embed",
    },
    {
      title: "West Mambalam",
      address: "West Mambalam (Head Office), Chennai",
      phone: "+91 89258 32517",
      map: "https://maps.google.com/maps?q=west%20mambalam%20chennai&output=embed",
    },
    {
      title: "Mannady",
      address: "Mannady, Chennai",
      phone: "+91 89258 32518",
      map: "https://maps.google.com/maps?q=mannady%20chennai&output=embed",
    },
    {
      title: "Ramapuram",
      address: "Ramapuram, Chennai",
      phone: "+91 89258 32519",
      map: "https://maps.google.com/maps?q=ramapuram%20chennai&output=embed",
    },

    {
        title: "Nagercoil",
        address:
          "No C/1, Bright Street, Water Tank Rd, Nagercoil, Tamil Nadu 629001",
        phone: "+91 99413 50646 / +91 89258 95506",
        map: "https://maps.google.com/maps?q=nagercoil%20tamil%20nadu&output=embed",
      },
      {
        title: "Avadi",
        address:
          "Shafa Play School, Sathyavani Street, Near Gandhi Road, Avadi, Chennai - 600054",
        phone: "+91 89258 32523",
        map: "https://maps.google.com/maps?q=avadi%20chennai&output=embed",
      },
      {
        title: "Iyyappanthangal",
        address:
          "Devi Parasakthi Nagar, Gandhi Nagar, Mount Poonamallee Rd, Porur, Chennai - 600116",
        phone: "+91 89258 32524",
        map: "https://maps.google.com/maps?q=iyyappanthangal%20chennai&output=embed",
      },
      {
        title: "Kodungaiyur",
        address:
          "No: 35, E.B Office Road, Near Vijay Medical Shop, Meenambal Salai, K.K.D Nagar, Kodungaiyur, Chennai - 600118",
        phone: "+91 89258 32525",
        map: "https://maps.google.com/maps?q=kodungaiyur%20chennai&output=embed",
      },
      {
        title: "Coimbatore",
        address:
          "No 94/83, Vinayagar Kovil Street, KVB Bank Backside, Sivanandha Colony, Tatabad, Coimbatore - 641012",
        phone: "+91 81487 22861",
        map: "https://maps.google.com/maps?q=coimbatore%20tatabad&output=embed",
      }

  ];

  function ContactPage() {
    const [active, setActive] = useState(0);
  
    return (
      <div className="contact-map-layout">

      {/* LEFT */}
      <div className="branch-list">
        <h2>Our Branches</h2>
    
        {locations.map((loc, index) => (
          <div
            key={index}
            className={`branch-item ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            <h3>{loc.title}</h3>
            <p className="address">📍 {loc.address}</p>
            <span className="phone">📞 {loc.phone}</span>
          </div>
        ))}
      </div>
    
      {/* RIGHT */}
      <div className="map-view">
      <iframe src={locations[active].map} title={`Map for ${locations[active].title}`}></iframe>
    
        <div className="map-card">
          <h3>{locations[active].title}</h3>
          <p>{locations[active].address}</p>
          <span>{locations[active].phone}</span>
        </div>
      </div>
    
    </div>
    );
  }
  
  export default ContactPage;