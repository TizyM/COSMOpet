# 🧪 COSMOpet – Methodology

This document outlines the development strategy, data sources, and rationale behind the COSMOpet prototype.

## 1. Objective

COSMOpet was designed as a modular, scalable tool to support children's mental well-being through interaction with a virtual pet. It uses space-enhanced data to assess environmental stress and deliver adaptive interventions such as music, relaxation prompts, and breathing games.

## 2. Data Collection

COSMOpet integrates open-source Earth Observation data from the Copernicus Programme:

- **Air Quality Data**  
  Source: [Copernicus Atmosphere Monitoring Service (CAMS)](https://atmosphere.copernicus.eu/data)  
  Parameters used: NO₂, PM10, O₃ – via Sentinel-4

- **Urban Vegetation Mapping**  
  - **Urban Vegetation Mapping**  
  Source: [Copernicus Land Monitoring Service](https://land.copernicus.eu/en)  
  Map viewer: [Copernicus Interactive Viewer](https://land.copernicus.eu/en/map-viewer)

- **Geolocation**  
  Based on [Galileo GNSS](https://www.usegalileo.eu/EN/) – the European global navigation satellite system.  
  COSMOpet simulates Galileo-based geolocation to identify urban zones under environmental stress and link user location to Copernicus data layers.

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
