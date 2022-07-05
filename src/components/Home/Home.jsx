import React, { useState} from "react";
import ImageCard from "../ImageCard/ImageCard";
import { iconSearch } from "../../assets/images";
import { dummy } from "../../assets/dummy";
import "./home.scss";

const Home = () => {
  const [data, setData] = useState(dummy);

  const handleChange = (event) => {
    setData(
      dummy.filter((dum) => {
        return dum.hashTag
          .toLocaleLowerCase()
          .includes(event.target.value.toLocaleLowerCase());
      })
    );
  };


  return (
    <>
      <div className=" container home">
        <div>
          <div className="home__search">
            <span className="home__text">Search by #</span>
            <input
              type="text"
              className="form-control  home__input"
              onChange={(e) => handleChange(e)}
            />
            <img src={iconSearch} alt="Search Post" className="home__img" />
          </div>
        </div>
        <div className="">
          <div className="grid row">
            {data.length !== 0 ? (
              data.map((x, index) => (
                <div className="mt-4" key={index}>
                  <ImageCard
                    img={x.img}
                    title={x.title}
                    hashTag={x.hashTag}
                    avatarImg={x.avatarImg}
                  />
                </div>
              ))
            ) : (
              <p className="home__notfound mt- mb-4">No results found</p>
            )}
          </div>
          {data.length !== 0 && <p className="home__more mt-6">Load More</p>}
        </div>
      </div>
    </>
  );
};
export default Home;
