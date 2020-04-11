const db = require("../data/connection");
const st = require("../utils/knex-gis");

const find = (query) => {
  const { radius, latitude, longitude } = query;
  if (radius && latitude && longitude) {
    return db("messages")
      .select(
        st
          .distance(
            "coordinates",
            st.geography(st.makePoint(longitude, latitude))
          )
          .as("distanceAway"),
        "id",
        "avatar",
        st.x("coordinates").as("longitude"),
        st.y("coordinates").as("latitude"),
        "geoLock",
        "userUUID",
        "postField",
        "image"
      )
      .where(
        st.dwithin(
          "coordinates",
          st.geography(st.makePoint(longitude, latitude)),
          radius
        )
      );
  } else {
    return db("messages").select(
      "id",
      "avatar",
      st.x("coordinates").as("longitude"),
      st.y("coordinates").as("latitude"),
      "geoLock",
      "userUUID",
      "postField",
      "image"
    );
  }
};

module.exports = {
  find,
};
