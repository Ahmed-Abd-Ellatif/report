import { Component, OnInit  } from '@angular/core';
import { DataServicesService } from 'src/app/services/data-services.service';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';
// import { map } from 'rxjs';

@Component({
  selector: 'app-carmodel',
  templateUrl: './carmodel.component.html',
  styleUrls: ['./carmodel.component.css']
})
export class CarmodelComponent implements OnInit { 
  vehicle:any;
  year:any;
  model:any;
  make:any;
  vin:any;
  lot:any;
  distance:any;
  color:any;
  plate:any;
  keysCount:any;
  drivable:any;
  hasMechanicalIssues:any;

  locations:any;
  pickupAddress:any;
  pickupName:any;
  deliveryAddress:any;
  deliveryName:any;
  locationsDistance:any
  // pickupLon!:number;
  // pickupLat!:number
  // deliveryLon!:number
  // deliveryLat!:number
  notes:any;
  photos:any;
  documents:any;

  mapa!: Mapboxgl.Map;
  constructor(private dataSer:DataServicesService) {}
  
  
  ngOnInit(): void{
    
     
    this.dataSer.getData().subscribe(allData=>{
      this.vehicle = allData.data.vehicle;
      this.year = allData.data.vehicle.year;
      this.make = allData.data.vehicle.make;
      this.model = allData.data.vehicle.model;
      this.vin = allData.data.vehicle.vin;
      this.lot = allData.data.vehicle.lot;
      this.distance = allData.data.vehicle.distance;
      this.color = allData.data.vehicle.color;
      this.plate = allData.data.vehicle.plate;
      this.keysCount = allData.data.vehicle.keysCount;
      this.drivable = allData.data.vehicle.drivable;
      this.hasMechanicalIssues = allData.data.vehicle.hasMechanicalIssues;
      // -----------------------------
      // -----------------------------
      this.locations = allData.data.locations;
      this.pickupAddress = allData.data.locations.pickup.address;
      this.pickupName = allData.data.locations.pickup.name;
      this.deliveryAddress = allData.data.locations.delivery.address;
      this.deliveryName = allData.data.locations.delivery.name;
      this.locationsDistance = allData.data.locations.distance;
      // ---------------------------
      // ---------------------------
      let pickupLon =allData.data.locations.pickup.lon;
      let pickupLat =allData.data.locations.pickup.lat;
      let deliveryLon =allData.data.locations.delivery.lon;
      let deliveryLat =allData.data.locations.delivery.lat;

      // --------------------------
      // --------------------------
      this.notes = allData.data.notes.length;
      this.photos = allData.data.notes.length;
      this.documents = allData.data.notes.length;



// <<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// MAP
// <<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//https://api.mapbox.com/directions/v5/mapbox/driving/-122.42,37.78;-77.03,38.91?access_token=pk.eyJ1Ijoib21hcmJla2hldCIsImEiOiJja2h2dDQ0Y3AweG9sMnJwNWtlMXdmdW9xIn0.tUd0IgkE3QM_IdoeZqG25w
      
     
// -------------------------------------------------------
      (Mapboxgl as typeof Mapboxgl).accessToken = environment.mapboxKey;
      this.mapa= new Mapboxgl.Map({
      container: 'mapa-mapbox',
      style: 'mapbox://styles/mapbox/light-v10', 
      center: [deliveryLon ,deliveryLat], 
      zoom: 5
      });
  
      this.crearMarcador(pickupLon, pickupLat);
      this.crearMarcador(deliveryLon ,deliveryLat);

      // const dataM =`driving/{${pickupLon}, ${pickupLat}};{${deliveryLon} ,${deliveryLat}}`;
     
      
      this.mapa.on('load', () => {
        this.mapa.addSource('route', {
        'type': 'geojson',
        'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
        'type': 'LineString',
        'coordinates': [
            [pickupLon, pickupLat],
            [deliveryLon ,deliveryLat]
            ]
        
        }
        }
        });
        this.mapa.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
        'line-join': 'round',
        'line-cap': 'round'
        },
        'paint': {
        'line-color': '#0078d4',
        'line-width': 1
        }
        });
      });
    });
      
    }


    crearMarcador(lng:number ,lat:number){
      const marker = new Mapboxgl.Marker({
        draggable:true
      })
      .setLngLat([lng,lat])
      .addTo(this.mapa);

      marker.on('drag',()=>{
        // console.log(marker.getLngLat())
      })

    }




}
