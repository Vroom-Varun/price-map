import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

export default function HeatMap() {
    let defaultSettings = {
        center: {
            lat: 37.774929,
            lng: -122.419418
        },
        zoom: 10
    }

    let heatMapPoints = [
        { lat: 37.656540, lng: -122.045189, weight: 0.9 },
        { lat: 37.678391, lng: -122.049950, weight: 0.5 },
    ]

    let heatMapData = {
        positions: heatMapPoints,
        options: {
            radius: 20,
            opacity: 0.6
        }
    }

    return (
        <div className="map-wrapper" style={{ height: '90vh', width: '80%', marginTop: '2rem' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAVaCZgLqTGd7HmVjzWOH4nJkIgV_4Kwz8" }}
                defaultCenter={defaultSettings.center}
                defaultZoom={defaultSettings.zoom}
                heatmapLibrary={true}
                heatmap={heatMapData}
            ></GoogleMapReact>
        </div>
    )
}