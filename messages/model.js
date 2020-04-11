const db = require("../data/connection");
const st = require("../utils/knex-gis");

const find = (query) => {
  const { maxlat, maxlng, minlat, minlng, clat, clng } = query;
  if (maxlat && maxlng && minlat && minlng) {
    return db("messages")
      .select(
        st
          .distance(
            "coordinates",
            st.geography(st.makePoint(clng, clat))
          )
          .as("distanceAway"),
        "id",
        "avatar",
        st.x("coordinates").as("longitude"),
        st.y("coordinates").as("latitude"),
        "geoLock",
        "userUUID",
        "timeOfPost",
        "postField",
        "image"
      )
      .where(
        st.dwithin(
          "coordinates",
          st.geography(st.makePoint(clng, clat)),
          st.distance(st.geography(st.makePoint(clng, clat)), st.geography(st.makePoint(minlng, maxlat)))
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
