import "../styles/branches.css";

const branchesData = [
  { name: "SAIDAPET", phone: "89258 32501", img: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=500" },
  { name: "ADAMBAKKAM", phone: "89258 32502", img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500" },
  { name: "EGMORE", phone: "89258 32503", img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=500" },
  { name: "TAMBARAM", phone: "89258 32504", img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500" },
  { name: "PORUR", phone: "89258 32505", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500" },
  { name: "THIRUVANMIYUR", phone: "89258 32506", img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=500" },

  { name: "ANNA NAGAR", phone: "89258 32507", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500" },
  { name: "MYLAPORE", phone: "89258 32508", img: "https://images.unsplash.com/photo-1526634332515-d56c5fd16991?w=500" },
  { name: "CHOOLAIMEDU", phone: "89258 32509", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500" },
  { name: "K.K NAGAR", phone: "89258 32510", img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=500" },
  { name: "POONAMALLE", phone: "89258 32511", img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=500" },
  { name: "MOGAPPAIR", phone: "89258 32512", img: "https://images.unsplash.com/photo-1564429238817-393bd4286b2d?w=500" },

  { name: "NEELANKARAI", phone: "89258 32513", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500" },
  { name: "VELACHERRY", phone: "89258 32514", img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500" },
  { name: "PERAMBUR", phone: "89258 32515", img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=500" },
  { name: "AMBATTUR", phone: "89258 32516", img: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=500" },

  { name: "SHOLINGANALLUR", phone: "89258 32518", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500" },
  { name: "WEST MAMBALAM", phone: "89258 32519", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500" },
  { name: "MANNADY", phone: "89258 32521", img: "https://images.unsplash.com/photo-1526634332515-d56c5fd16991?w=500" },
  { name: "RAMAPURAM", phone: "89258 32522", img: "https://images.unsplash.com/photo-1564429238817-393bd4286b2d?w=500" },
  { name: "AVADI", phone: "89258 32523", img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=500" },

  { name: "IYYAPPANTHANGAL", phone: "89258 32524", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500" },
  { name: "KODUNGAIYUR", phone: "89258 32525", img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500" },
  { name: "COIMBATORE", phone: "81487 22861", img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=500" },
  { name: "NAGERCOIL", phone: "+91 99413 50646 / 89258 95506", img: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=500" }
];

function Branches() {
  return (
    <section className="branches">

      <div className="branches-header">
        <p className="sub">Our Centers</p>
        <h2>
          Start Your Child’s Journey <br />
          <span>With Expert Care Today</span>
        </h2>
      </div>

      <div className="branch-grid">
        {branchesData.map((branch, index) => (
          <div className="branch-card" key={index}>
            <div className="image-box">
              <img src={branch.img} alt={branch.name} />
            </div>

            <div className="branch-info">
              <h3>{branch.name}</h3>
              <p>{branch.phone}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Branches;