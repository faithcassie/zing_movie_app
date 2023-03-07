import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DropdownSelect from "../components/DropdownSelect";
import FeatureMovie from "../components/FeatureMovie";
import { authContext } from "../contexts/AuthContext";

function MoviePage() {
  const { api } = useContext(authContext);
  const [itemList, setitemList] = useState(null);
  // const params = useParams();
  // const { type } = params;
  const location = useLocation(); // "/tv" "/movie";
  let endpoint = location.pathname.slice(1);
  useEffect(() => {
    let url = `https://api.themoviedb.org/3/genre/${endpoint}/list?api_key=${api.key}&language=en-US`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setitemList(data);
        console.log(data);
      });
  }, []);
  console.log(itemList);
  return (
    <Box>
      <FeatureMovie />
      <Box
        sx={{
          position: "block",
          paddingTop: 10,
          paddingLeft: "10%",
          zIndex: "9",
        }}
      >
        {itemList && <DropdownSelect list={itemList} />}
      </Box>
    </Box>
  );
}

export default MoviePage;
