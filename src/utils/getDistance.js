import { formatDistance } from "date-fns";
import { MAP_BOX_TOKEN } from "@/constants/keys";
import React, { useState, useEffect } from "react";
import axios from "axios";

const getDistance = async (origin, destination) => {
  let route = [];

  if (!destination) return;

  try {
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${origin};${destination}?alternatives=false&geometries=geojson&language=pt&overview=simplified&steps=true&access_token=${MAP_BOX_TOKEN}`;

    const response = await axios.get(url);
    route = response.data.routes;

    if (route.length > 0) {
      const { distance, duration } = route[0];

      const distancia = Math.round(parseInt(distance) / 1000);
    } else {
      console.log("Nenhuma rota encontrada.");
    }
  } catch (error) {
    console.log("Ocorreu um erro:", error.message);
  }

  return route;
};

export default getDistance;
