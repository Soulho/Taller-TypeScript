import { Serie } from "./serie.js";
import { series } from "./dataSeries.js";

const seriesTbody: HTMLElement = document.getElementById('series')!;
const avgSeasonsCaption: HTMLElement = document.getElementById("avg-seasons")!;

renderSeriesInTable(series);

var avgSeasons = getAvgSeasons(series);
var content = "Seasons average: " + avgSeasons;

avgSeasonsCaption.innerHTML = content;

document.addEventListener('DOMContentLoaded', () => {
    const serieLinks = document.querySelectorAll('.serie-link');
    const serieImage = document.getElementById('imagen')! as HTMLImageElement;
    const serieTitle = document.getElementById('card-h5-id')!;
    const serieText = document.getElementById('card-p-id')!;
    const serieLink = document.getElementById('card-link-id')!;

    serieLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedSerie = series[index];
            serieImage.src = `${selectedSerie.image}`;
            serieTitle.innerHTML = `${selectedSerie.name}`;
            serieText.innerHTML = `${selectedSerie.info}`;
            serieLink.innerHTML = `${selectedSerie.site}`;
        });
    });
});

function renderSeriesInTable(series: Serie[]): void {
    series.forEach(s => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${s.id}</td>
                            <td class="serie-link" > <a  href="#"> ${s.name}  </a>  </td>
                             <td>${s.platform}</td>
                             <td>${s.seasons}</td>`;
      seriesTbody.appendChild(trElement);
    });
  }

function getAvgSeasons(series: Serie[]): number {
    let totalSeasons: number = 0;
    let totalSeries: number = 0
    series.forEach((serie) => {totalSeasons = totalSeasons + serie.seasons; totalSeries +=1});
    let avg = totalSeasons / totalSeries;
    return avg;
}