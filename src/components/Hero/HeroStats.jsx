import CountUp from "react-countup";

function HeroStats() {

  const stats = [

    {
      value:2,
      suffix:"+",
      label:"Years Experience"
    },

    {
      value:15,
      suffix:"+",
      label:"Enterprise Features"
    },

    {
      value:20,
      suffix:"+",
      label:"Technologies"
    },

    {
      value:100,
      suffix:"%",
      label:"Commitment"
    }

  ];

  return (

    <div className="hero-stats">

      {stats.map((item,index)=>(

        <div
          className="stat-card"
          key={index}
        >

          <h2>

            <CountUp
              end={item.value}
              duration={3}
            />

            {item.suffix}

          </h2>

          <p>{item.label}</p>

        </div>

      ))}

    </div>

  );

}

export default HeroStats;