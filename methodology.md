# 🧪 COSMOpet – Methodology

This document outlines the development strategy, data sources, and rationale behind the COSMOpet prototype.

## 1. Objective

COSMOpet was designed as a modular, scalable tool to support children's mental well-being through interaction with a virtual pet. It uses space-enhanced data to assess environmental stress and deliver adaptive interventions such as music, relaxation prompts, and breathing games.

## 2. Data Collection

COSMOpet integrates open-source Earth Observation data from the Copernicus Programme:

- **Air Quality Data**  
  Source: [Copernicus Atmosphere Monitoring Service (CAMS)](https://atmosphere.copernicus.eu/data) – via [Sentinel-4 mission](https://sentinels.copernicus.eu/web/sentinel/missions/sentinel-4)  
  COSMOpet processes simulated satellite data for:

  - **NO₂ (Nitrogen Dioxide)** – linked to traffic and urban heating; high levels correlate with cognitive fatigue in children  
  - **PM10 (Particulate Matter ≤10μm)** – can trigger respiratory inflammation, affecting mood and attention span  
  - **O₃ (Ground-Level Ozone)** – increases during heatwaves; associated with oxidative stress and anxiety

  These values are mapped against WHO thresholds to assess urban stress levels in selected test locations (e.g. Milan, Athens).

- **Urban Vegetation Mapping**  
  - **Urban Vegetation Mapping**  
  Source: [Copernicus Land Monitoring Service](https://land.copernicus.eu/en)  
  Map viewer: [Copernicus Interactive Viewer](https://land.copernicus.eu/en/map-viewer)

- **Geolocation**  
  Based on [Galileo GNSS](https://www.usegalileo.eu/EN/), the European Global Navigation Satellite System.  
  COSMOpet simulates Galileo-based geolocation to identify urban zones under environmental stress and connect the user's position to satellite-derived Copernicus environmental layers.  
  The simulation assigns a test city (e.g., Milan or Athens) to emulate live positioning, enabling contextual analysis of air quality and green space based on Sentinel data.

## 3. Data Processing Logic

1. Retrieve environmental data for the user’s location  
2. Compare values to WHO health stress thresholds  
3. If exceeded → trigger digital therapy content  
4. (Optional) Sensor data (noise, heart rate) refine intervention

## 4. Use Case Testing

Simulated environment snapshots tested for:
- 🇮🇹 Milan
- 🇬🇷 Athens

Outcomes:  
- High pollution and low green space → AI recommends breathing games, hydration, sound therapy.

## 5. Replicability

The methodology is replicable across EU thanks to open data and modular logic. COSMOpet adapts easily to:

- Local languages
- Health system variations
- NGO, school or municipal partnerships

## 6. Ethical Compliance

All logic is designed respecting child mental well-being. No personal data are stored. Future deployments will include opt-in forms, GDPR-compliant flows, and transparency dashboards.

---

📬 For details or collaboration: movereinsalus.project@gmail.com 
👩‍🏫 (Tiziana Mori, Ph.D, Team Leader Movere 2.0)
🔗 Related: [iot-integration.md](./iot-integration.md)
