import { Component, OnInit } from '@angular/core';
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

  constructor(private dataSer:DataServicesService) { }
  dataList:any;
  mapa!: Mapboxgl.Map;
    ngOnInit(): void {
      this.dataSer.getData().subscribe(data=>{
        this.dataList = data;
        console.log(this.dataList.data.id)
      });



      (Mapboxgl as typeof Mapboxgl).accessToken = environment.mapboxKey;
      this.mapa= new Mapboxgl.Map({
      container: 'mapa-mapbox',
      style: 'mapbox://styles/mapbox/streets-v11', 
      center: [80.181620, 13.257675], //[-75.7611979,45.3516034]
      zoom: 9 
      });

      // this.crearMarcador(-75.7611979,45.3516034);

      this.mapa.on('load', () => {
        this.mapa.addSource('route', {
        'type': 'geojson',
        'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
        'type': 'LineString',
        'coordinates': [
        [-122.483696, 37.833818],
        [-122.483482, 37.833174],
        [-122.483396, 37.8327],
        [-122.483568, 37.832056],
        [-122.48404, 37.831141],
        [-122.48404, 37.830497],
        [-122.483482, 37.82992],
        [-122.483568, 37.829548],
        [-122.48507, 37.829446],
        [-122.4861, 37.828802],
        [-122.486958, 37.82931],
        [-122.487001, 37.830802],
        [-122.487516, 37.831683],
        [-122.488031, 37.832158],
        [-122.488889, 37.832971],
        [-122.489876, 37.832632],
        [-122.490434, 37.832937],
        [-122.49125, 37.832429],
        [-122.491636, 37.832564],
        [-122.492237, 37.833378],
        [-122.493782, 37.833683]
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
        'line-color': '#00F',
        'line-width': 18
        }
        });
        });

    }



    // crearMarcador(lng:number ,lat:number){
    //   const marker = new Mapboxgl.Marker({
    //     draggable:true
    //   })
    //   .setLngLat([lng,lat])
    //   .addTo(this.mapa);

    //   marker.on('drag',()=>{
    //     console.log(marker.getLngLat())
    //   })

    // }




}
