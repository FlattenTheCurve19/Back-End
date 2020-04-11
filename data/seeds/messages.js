const st = require('../../utils/knex-gis')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("messages")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("messages").insert([
        {
          avatar: "http://dummyimage.com/250x250.png/ff4444/ffffff",
          coordinates: st.setSRID(st.makePoint(38.136671, 55.580853), 4326),
          geoLock: JSON.stringify({
            lat: 55.580853,
            lng: 38.136671,
          }),
          userUUID: "007e8194-06a0-425c-a74a-3d18124b5d68",
          postField: "Donec semper sapien a libero.",
          image:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAACzSURBVCjPY/jPgB8yEKmg0aHxf93/6jPlR4vP5P/I+p9yFMOEuvP7/pedKerJ7cmYnNwTOx9DQaVB9/8J/3McILyw/VjcUFA//3/a/QQBPI5MOT/7f2QBHgWxCRHvg2bhVBAjEHY/8DaecAhd73/GswfCNvmPoSA4we+8x2kQywLoTP33aAqCDHzeu79xrLepN+83uq/3Xwvdm94Jrvsd9lvtN91vuF93v+Z+tX5S44ICBQA4egHkwuNCKQAAAABJRU5ErkJggg==",
        },
        {
          avatar: "http://dummyimage.com/250x250.png/cc0000/ffffff",
          coordinates: st.setSRID(st.makePoint(107.0997164, -6.82482), 4326),
          geoLock: JSON.stringify({
            lat: -6.82482,
            lng: 107.0997164,
          }),
          userUUID: "9b84de38-7b5e-4532-97ff-25c3df444518",
          postField: "Maecenas ut massa quis augue luctus tincidunt.",
          image:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADGSURBVDjLY/j//z8DJZhh1ADsBhyJkKs44Mv3cI8Ty7+drsyPgLiCaAOOhMuVXyy2+Pl9a+//f9d2/P+6ouj/6WzdP7ucWXKJMmCnC/Pdb0DN/yf5/v9fLvj/f5vi/9ddDv+B4veIMgDk7H9n1/1HBu/rJf6DxIlzgSvz4y9zk///B2r6Ucbw/x0QP8xg/g8Uf0KUAYfDpRpOpqj+flau+P9VJev/uymM//f6svzZ4cpcRXwshMtWAG28D42Fx7g0jyZlCAYAAc7hFvdEsKgAAAAASUVORK5CYII=",
        },
        {
          avatar: "http://dummyimage.com/250x250.png/dddddd/000000",
          coordinates: st.setSRID(st.makePoint(121.0075554, 14.5508865), 4326),
          geoLock: JSON.stringify({
            lat: 14.5508865,
            lng: 121.0075554,
          }),
          userUUID: "532b3c9d-c59f-428a-8674-d9e03e2dc4fe",
          postField:
            "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
          image:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAC4SURBVCjPdZFbDsIgEEWnrsMm7oGGfZrohxvU+Iq1TyjU60Bf1pac4Yc5YS4ZAtGWBMk/drQBOVwJlZrWYkLhsB8UV9K0BUrPGy9cWbng2CtEEUmLGppPjRwpbixUKHBiZRS0p+ZGhvs4irNEvWD8heHpbsyDXznPhYFOyTjJc13olIqzZCHBouE0FRMUjA+s1gTjaRgVFpqRwC8mfoXPPEVPS7LbRaJL2y7bOifRCTEli3U7BMWgLzKlW/CuebZPAAAAAElFTkSuQmCC",
        },
      ]);
    });
};
