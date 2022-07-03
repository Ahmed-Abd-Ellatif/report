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
  locations:any;
  pickupLon:any;
  pickupLat:any
  deliveryLon:any
  deliveryLat:any

  mapa!: Mapboxgl.Map;
  constructor(private dataSer:DataServicesService) {}
  
  
  ngOnInit(): void{
    
     
    this.dataSer.getData().subscribe(allData=>{
      this.vehicle = allData.data.vehicle;
      this.locations = allData.data.locations;

      this.pickupLon =allData.data.locations.pickup.lon;
      this.pickupLat =allData.data.locations.pickup.lat;
      this.deliveryLon =allData.data.locations.delivery.lon;
      this.deliveryLat =allData.data.locations.delivery.lat;
    });
      

      (Mapboxgl as typeof Mapboxgl).accessToken = environment.mapboxKey;
      this.mapa= new Mapboxgl.Map({
      container: 'mapa-mapbox',
      style: 'mapbox://styles/mapbox/light-v10', 
      center: [-97.7475016, 30.2642643], 
      zoom: 6
      });
  
      // this.crearMarcador(-97.7475016, 30.2642643);
      // this.crearMarcador(-90.7475016, 33.2642643);

      
      this.mapa.on('load', () => {
        this.mapa.addSource('route', {
        'type': 'geojson',
        'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
        'type': 'LineString',
        'coordinates': [
            [-97.7475016, 30.2642643],
            [-90.7475016, 33.2642643]
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
        'line-width': 2
        }
        });
      });

    }

  
    // ngOnInit(): void {
     
    //   this.getAllData();
      

    //   (Mapboxgl as typeof Mapboxgl).accessToken = environment.mapboxKey;
    //   this.mapa= new Mapboxgl.Map({
    //   container: 'mapa-mapbox',
    //   style: 'mapbox://styles/mapbox/light-v10', 
    //   center: [-97.7475016, 30.2642643], 
    //   zoom: 6
    //   });
  
    //   this.crearMarcador(this.pickupLon, this.pickupLat);
    //   this.crearMarcador(this.deliveryLon, this.deliveryLat);

      
    //   this.mapa.on('load', () => {
    //     console.log(this.pickupLon + " gagaga")
    //     this.mapa.addSource('route', {
    //     'type': 'geojson',
    //     'data': {
    //     'type': 'Feature',
    //     'properties': {},
    //     'geometry': {
    //     'type': 'LineString',
    //     'coordinates': [
    //         [this.pickupLon ,this.pickupLat],
    //         [this.deliveryLon, this.deliveryLat]
    //         ]
        
    //     }
    //     }
    //     });
    //     this.mapa.addLayer({
    //     'id': 'route',
    //     'type': 'line',
    //     'source': 'route',
    //     'layout': {
    //     'line-join': 'round',
    //     'line-cap': 'round'
    //     },
    //     'paint': {
    //     'line-color': '#0078d4',
    //     'line-width': 2
    //     }
    //     });
    //     });
    // }


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
