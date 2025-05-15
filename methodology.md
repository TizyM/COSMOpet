# 🧪 COSMOpet – Methodology

This document outlines the development strategy, data sources, and rationale behind the COSMOpet prototype.

## 1. Objective

COSMOpet was designed as a modular, scalable tool to support children's mental well-being through interaction with a virtual pet. It uses space-enhanced data to assess environmental stress and deliver adaptive interventions such as music, relaxation prompts, and breathing games.

## 2. Data Collection

COSMOpet integrates open-source Earth Observation data from the Copernicus Programme:

- **Sentinel Satellite Data**  
  COSMOpet uses simulated data from the Copernicus Sentinel missions to analyze environmental risk factors in urban settings.  
  In particular, **Sentinel-4** provides air quality data (NO₂, PM10, O₃), while **Sentinel-2** enables the mapping of green space and vegetation density.  
  These satellite datasets allow COSMOpet to contextualize a child’s location and adapt its therapeutic interventions accordingly.

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

## 🔍 3. COSMOpet Data Processing Logic (Alpha Stage)

✅ **a). Environmental Data Retrieval (Simulated Copernicus Input)**  
COSMOpet retrieves simulated satellite data related to:  
- 🏭 **Air pollution** (NO₂, PM10, O₃ – Sentinel-4)  
- 🌳 **Urban green density** (vegetation index – Sentinel-2 / HR-VPP)  
- 🌡️ **Urban heat stress** (heat island detection)

📍 **b). User Geolocation Mapping**  
The user's city is simulated (e.g., Milan, Athens) using Galileo GNSS logic.  
Environmental parameters are geospatially linked to the selected urban location.

🧪 **c). Threshold Comparison Based on WHO Guidelines**  
Environmental values are compared to WHO reference limits:  
- Example: NO₂ > 40 µg/m³ → Increased cognitive fatigue & anxiety risk in children

🚨 **d). Triggering of Digital Therapy Content**  
If one or more thresholds are exceeded, COSMOpet activates:  
- 🧘 Guided breathing exercises  
- 🎵 Calming music (music therapy)  
- 🐶 Interaction with the COSMOpet virtual mascot

🧠 **e). Future Feature – Biometric Sensor Integration (Roadmap Q4 2025 – Q1 2026)**  
Currently, COSMOpet simulates only environmental inputs.  
Integration of wearable sensor data (e.g., heart rate monitors, noise sensors) is planned to refine therapeutic outputs.  
This will allow personalized interventions based on real-time stress indicators.

---

📅 **Development Status**  
COSMOpet is currently in early-alpha.  
Advanced features (biometrics, AI adaptation) are planned for the next development phase (late 2025 – early 2026).

🔐 **Privacy Notice**  
No personal or identifying data is collected.  
COSMOpet is designed with privacy-by-default, in compliance with  
[EU GDPR Regulation 2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj) and  
[Italian Legislative Decree 101/2018](https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/9038275).


## 4. Use Case Testing

Simulated environment snapshots tested for:
- 🇮🇹 Milan
- 🇬🇷 Athens

Outcomes:  
- High pollution and low green space → AI recommends breathing games, hydration, sound therapy.

## 5. Replicability and Scalability in the EU

COSMOpet is designed with a modular architecture and open-data logic, making it easily replicable across European countries participating in the Cassini Hackathon (e.g. 🇩🇪 Germany, 🇫🇷 France, 🇩🇰 Denmark, 🇫🇮 Finland, 🇱🇹 Lithuania, 🇲🇰 North Macedonia, 🇷🇴 Romania).

Thanks to its structure, the platform can be adapted to:

- 🗣️ **National languages and cultural contexts** (interface and content translations are supported)
- 🏥 **Different health and education systems**, by adjusting stress thresholds and therapeutic protocols based on national standards
- 🧩 **Existing partnerships with schools, municipalities, NGOs**, and local health professionals

📌 COSMOpet already includes external collaborations in Italy with:
- 2 nonprofit associations (Arka Eventi Culturali, Sardonia Italia)
- A pediatrician and a veterinarian (external advisors)
- The Municipality of Serdiana (pilot for music therapy training)

💡 New partnerships in other EU countries are welcome for testing, co-design, and pilot deployments.

## 6. Ethical Compliance

All logic is designed respecting child mental well-being. No personal data are stored. Future deployments will include opt-in forms, GDPR-compliant flows, and transparency dashboards.

---

📬 For details or collaboration: movereinsalus.project@gmail.com 
👩‍🏫 (Tiziana Mori, Ph.D, Team Leader Movere 2.0)
🔗 Related: [iot-integration.md](./iot-integration.md)
