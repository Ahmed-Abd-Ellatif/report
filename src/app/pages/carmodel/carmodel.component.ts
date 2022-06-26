import { Component, OnInit } from '@angular/core';
import { DataServicesService } from 'src/app/services/data-services.service';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';
import { map } from 'rxjs';

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
      center: [-75.7611979,45.3516034],
      zoom: 16.6 
      });

      this.crearMarcador(-75.7611979,45.3516034);
    }
    crearMarcador(lng:number ,lat:number){
      const marker = new Mapboxgl.Marker({
        draggable:true
      })
      .setLngLat([lng,lat])
      .addTo(this.mapa);

      marker.on('drag',()=>{
        console.log(marker.getLngLat())
      })

    }

}
