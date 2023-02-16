import React from "react";

const AboutUs = () => {
  const info = [
    {
      head: "History of India",
      desc: "India has 28 states and 8 union territories with different culture.India's languages, religions, dance, music, architecture, food and customs differ from place to place within the country. India is the birthplace of Hinduism, Buddhism, Jainism, Sikhism, and other religions. They are collectively known as Indian religions. India’s geography and climate is incredibly diverse. Northern India is characterised by the snowy mountain range of the Himalayas and the Great Indian (Thar) Desert. Meanwhile, tropical jungles,rainforests, coastal plains, islands and beaches distinguish the south. Nature plays a vital role in India – especially rivers suchas the Ganga (or ‘Ganges’) in the north and Godavari in the central and southeast.",
    },
    {
      head: "Tourism in India",
      desc: "India is a country that attracts millions of tourists every year and is considered one of the most popular tourist destinations in the world. These visitors are attracted to its natural beauty and cultural heritage. It has many historic sites as well like the Taj Mahal, Golden Temple, Red Fort, etc. Tourism in India has been seen as a major tool to bring about socio-economic development to the people of the country. Not only this, India Tourism industry also provides employment opportunities to several people from all parts of the world. There are ample numbers of hotels, resorts, food joints and various other amenities available for tourists arriving in India. ",
    },
    {
      head: "Places to visit",
    },
  ];

  return (
    <>
      <div className="font-extrabold text-black m-12 mobile:ml-0 mobile:mr-0 mobile:text-5xl text-7xl">
        About India
      </div>
      <div className="m-6 text-black mobile:m-0">
        {info.map((item, index) => (
          <div className="px-12 mobile:px-0" key={index}>
            <>
              <h2
                style={{
                  fontSize: "2.3rem",
                  padding: "1rem",
                  margin: "1rem",
                  textAlign: "start",
                  fontWeight: 600,
                }}
              >
                {item.head}
              </h2>
              <p
                style={{
                  lineHeight: "2.1rem",
                  margin: "2rem",
                  fontSize: "1rem",
                  textAlign: "start",
                  fontFamily: "Roboto",
                  color: "rgb(84 84 105)",
                }}
                className=""
              >
                {item.desc}
              </p>
            </>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutUs;
