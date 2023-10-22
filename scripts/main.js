import { series } from "./dataSeries.js";
var seriesTbody = document.getElementById('series');
var avgSeasonsCaption = document.getElementById("avg-seasons");
renderSeriesInTable(series);
var avgSeasons = getAvgSeasons(series);
var content = "Seasons average: " + avgSeasons;
avgSeasonsCaption.innerHTML = content;
document.addEventListener('DOMContentLoaded', function () {
    var serieLinks = document.querySelectorAll('.serie-link');
    var serieImage = document.getElementById('imagen');
    var serieTitle = document.getElementById('card-h5-id');
    var serieText = document.getElementById('card-p-id');
    var serieLink = document.getElementById('card-link-id');
    serieLinks.forEach(function (link, index) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var selectedSerie = series[index];
            serieImage.src = "".concat(selectedSerie.image);
            serieTitle.innerHTML = "".concat(selectedSerie.name);
            serieText.innerHTML = "".concat(selectedSerie.info);
            serieLink.innerHTML = "".concat(selectedSerie.site);
        });
    });
});
function renderSeriesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n                            <td class=\"serie-link\" > <a  href=\"#\"> ").concat(s.name, "  </a>  </td>\n                             <td>").concat(s.platform, "</td>\n                             <td>").concat(s.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAvgSeasons(series) {
    var totalSeasons = 0;
    var totalSeries = 0;
    series.forEach(function (serie) { totalSeasons = totalSeasons + serie.seasons; totalSeries += 1; });
    var avg = totalSeasons / totalSeries;
    return avg;
}
