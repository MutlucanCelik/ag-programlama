<template>
  <div class="container-fluid">
      <!-- Content Row -->
      <div class="row">

          <!-- Earnings (Monthly) Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                  Bu ayın kazancı</div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">₺ 140,000</div>
                          </div>
                          <div class="col-auto">
                              <i class="fas fa-calendar fa-2x text-gray-300"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <!-- Earnings (Monthly) Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-success shadow h-100 py-2">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                  Yıllık kazanç</div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">₺ 1,215,000</div>
                          </div>
                          <div class="col-auto">
                              <i class="fas fa-2x text-gray-300">₺</i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <!-- Earnings (Monthly) Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-info shadow h-100 py-2">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Olumlu dönüşler
                              </div>
                              <div class="row no-gutters align-items-center">
                                  <div class="col-auto">
                                      <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">80%</div>
                                  </div>
                                  <div class="col">
                                      <div class="progress progress-sm mr-2">
                                          <div class="progress-bar bg-info" role="progressbar"
                                              style="width: 80%" aria-valuenow="50" aria-valuemin="0"
                                              aria-valuemax="100"></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-auto">
                              <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <!-- Pending Requests Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-warning shadow h-100 py-2">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                  Bekleyen istekler</div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
                          </div>
                          <div class="col-auto">
                              <i class="fas fa-comments fa-2x text-gray-300"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div class="row">

          <!-- Area Chart -->
          <div class="col-xl-8 col-lg-7">
              <div class="card shadow mb-4">
                  <!-- Card Header - Dropdown -->
                  <div
                      class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 class="m-0 font-weight-bold text-primary">Kazançlara genel bakış</h6>
                      
                  </div>
                  <!-- Card Body -->
                  <div class="card-body">
                      <div class="chart-area">
                          <Line :data="lineData" :options="lineOptions" />
                      </div>
                  </div>
              </div>
          </div>

          <!-- Pie Chart -->
          <div class="col-xl-4 col-lg-5">
              <div class="card shadow mb-4">
                  <!-- Card Header - Dropdown -->
                  <div
                      class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 class="m-0 font-weight-bold text-primary">Sosyal medya müşteri kitlesi</h6>
                    
                  </div>
                  <!-- Card Body -->
                  <div class="card-body">
                      <div class="chart-pie pt-4 pb-2">
                          <Doughnut :data="donutData" :options="donutOptions" />
                      </div>
                      <div class="mt-4 text-center small">
                          <span class="mr-2">
                              <i class="fas fa-circle text-primary"></i> İnstagram
                          </span>
                          <span class="mr-2">
                              <i class="fas fa-circle text-success"></i> Facebook
                          </span>
                          <span class="mr-2">
                              <i class="fas fa-circle text-info"></i> Twitter
                          </span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-lg-12 mb-4">
              <div class="card shadow mb-4">
                  <div class="card-header py-3">
                      <h6 class="m-0 font-weight-bold text-primary">Aylık en çok satılan ürünlerin stok durumu</h6>
                  </div>
                  <div class="card-body">
                      <h4 class="small font-weight-bold">Agv K1 S Motorsiklet kaskı<span
                              class="float-right">20%</span></h4>
                      <div class="progress mb-4">
                          <div class="progress-bar bg-danger" role="progressbar" style="width: 20%"
                              aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h4 class="small font-weight-bold">Casper Excalibur Laptop<span
                              class="float-right">40%</span></h4>
                      <div class="progress mb-4">
                          <div class="progress-bar bg-warning" role="progressbar" style="width: 40%"
                              aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h4 class="small font-weight-bold">Remington Hg2000 Omniblade Yüz Tıraş Makinesi<span
                              class="float-right">60%</span></h4>
                      <div class="progress mb-4">
                          <div class="progress-bar" role="progressbar" style="width: 60%"
                              aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h4 class="small font-weight-bold">NUTEX 8 Adet Baza Altı Çekyat Tipi Hurç 60x40x22(GRİ)<span
                              class="float-right">80%</span></h4>
                      <div class="progress mb-4">
                          <div class="progress-bar bg-info" role="progressbar" style="width: 80%"
                              aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h4 class="small font-weight-bold">Racıng Siyah Korumalı Motosiklet Montu<span
                              class="float-right">100%</span></h4>
                      <div class="progress">
                          <div class="progress-bar bg-success" role="progressbar" style="width: 100%"
                              aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                  </div>
              </div>
          </div>  
      </div>
  </div>
  
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line,Doughnut } from 'vue-chartjs'


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  name: 'App',
  components: {
    Line,
    Doughnut
  },
  setup(){
     const lineData = {
   
          labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Auğustos", "Eylül", "Ekim", "Kasım", "Aralık"],
          datasets: [{
            label: "Kazanç",
            lineTension: 0.3,
            backgroundColor: "rgba(78, 115, 223, 0.05)",
            borderColor: "rgba(78, 115, 223, 1)",
            pointRadius: 3,
            pointBackgroundColor: "rgba(78, 115, 223, 1)",
            pointBorderColor: "rgba(78, 115, 223, 1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
            pointHoverBorderColor: "rgba(78, 115, 223, 1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
          }],
  
      }

      const lineOptions= {
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 25,
          top: 25,
          bottom: 0
        }
      },
      scales: {
        xAxes: [{
          time: {
            unit: 'date'
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            maxTicksLimit: 7
          }
        }],
        yAxes: [{
          ticks: {
            maxTicksLimit: 5,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function(value, index, values) {
              return '$' + number_format(value);
            }
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2]
          }
        }],
      },
      plugins: {
          legend: {
              display: false // Etiketleri devre dışı bırakır
          }
      },
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        titleMarginBottom: 10,
        titleFontColor: '#6e707e',
        titleFontSize: 14,
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        intersect: false,
        mode: 'index',
        caretPadding: 10,
        callbacks: {
          label: function(tooltipItem, chart) {
            var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
            return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
          }
        }
      }
      }

      const donutData = {

         labels: ["İnstagram", "Facebook", "Twitter"],
          datasets: [{
               label: "Yüzdelik değeri",
            data: [55, 30, 15],
            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
            hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
      }

      const donutOptions = {
         maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          plugins: {
          legend: {
              display: false // Etiketleri devre dışı bırakır
          }
      },
          cutoutPercentage: 80,
          cutout: '75%'
      }
      return {
        lineData,
        lineOptions,
        donutData,
        donutOptions
      }
  }
}
</script>
<style>

</style>