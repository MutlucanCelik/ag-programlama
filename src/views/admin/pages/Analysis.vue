<template>
    <div class="container-fluid">
        
        <div class="row">
            <div class="col-lg-6">
                <div class="card shadow mb-4">
                    <!-- Card Header - Dropdown -->
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">En çok müşterimiz bulunan iller</h6>
                        
                    </div>
                    <!-- Card Body -->
                    <div class="card-body">
                        <div class="chart-area">
                            <PolarArea :data="polarData" :options="polarOptions" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card shadow mb-4">
                    <!-- Card Header - Dropdown -->
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">Tercih edilen kategori dağılımı</h6>
                        
                    </div>
                    <!-- Card Body -->
                    <div class="card-body">
                        <div class="chart-area">
                            <Radar :data="radarData" :options="radarOptions" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
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
            <div class="col-6">
                <div class="card shadow mb-4">
                    <!-- Card Header - Dropdown -->
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">Ürünlere yapılan dönüşler</h6>
                        
                    </div>
                    <!-- Card Body -->
                    <div class="card-body">
                        <div class="chart-area">
                            <Pie :data="pieData" :options="pieOptions" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div  class="row my-5 px-3">
            <div class="card-header shadow px-4 py-3 d-flex w-100 flex-row align-items-center justify-content-between">
                <h5 class="m-0 font-weight-bold text-primary">Müşteri Ürün Önerileri</h5>
            </div>
            <div id="network_chart" class="col-12 mt-5"></div>
        </div>
    </div>
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  RadialLinearScale,
  Filler,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line,Doughnut,Pie,Radar,PolarArea } from 'vue-chartjs'
import { onMounted } from 'vue'


ChartJS.register(
  CategoryScale,
  RadialLinearScale,
  LinearScale,
  PointElement,
  Filler,
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
    Doughnut,
    Pie,
    Radar,
    PolarArea
  },
  setup(){
     const polarData = {
   
        labels: [
            'Eating',
            'Drinking',
            'Sleeping',
            'Designing',
            'Coding',
            'Cycling',
            'Running'
        ],
        datasets: [
            {
            label: 'My First dataset',
            backgroundColor: 'rgba(179,181,198,0.2)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
            label: 'My Second dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
  
      }

      const polarOptions= {
      responsive: true,
        maintainAspectRatio: false
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

      const pieData ={
        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        datasets: [
            {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [40, 20, 80, 10]
            }
        ]
      }
      
      const pieOptions={
        responsive: true,
        maintainAspectRatio: false
      }

      const radarData ={
        labels: [
            'Eating',
            'Drinking',
            'Sleeping',
            'Designing',
            'Coding',
            'Cycling',
            'Running'
        ],
        datasets: [
            {
            label: 'My First dataset',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
            label: 'My Second dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
      }
      
      const radarOptions={
        responsive: true,
        maintainAspectRatio: false
      }

    function drawTreeChart(data) {
    // Grafik boyutlarını belirtin. Yükseklik, düzenlemeye bağlı olarak değişkendir.
            const width = 1000;
            const marginTop = 10;
            const marginRight = 10;
            const marginBottom = 10;
            const marginLeft = 40;

            // Satırlar dx piksel, sütunlar dy piksel ile ayrılır.
            // Bu isimler karşı intuitif olabilir (dx bir yükseklik ve dy bir genişlik),
            // Çünkü ağaç, veri alanında kökün "altında" görüntülenmelidir.
            // Bir sütunun genişliği, ağacın yüksekliğine dayanır.
            const root = d3.hierarchy(data);
            const dx = 25;
            const dy = (width - marginRight - marginLeft) / (1 + root.height);

            // Ağaç düzenini ve bağlantılar için şekli tanımlayın.
            const tree = d3.tree().nodeSize([dx, dy]);
            const diagonal = d3.linkHorizontal().x(d => d.y).y(d => d.x);

            // SVG konteynerini, bağlantılar için bir katman ve düğümler için bir katman oluşturun.
            const svg = d3.create("svg")
                .attr("width", width)
                .attr("height", dx)
                .attr("viewBox", [-marginLeft, -marginTop, width, dx])
                .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif; user-select: none;");

            const gLink = svg.append("g")
                .attr("fill", "none")
                .attr("stroke", "#555")
                .attr("stroke-opacity", 0.4)
                .attr("stroke-width", 1.5);

            const gNode = svg.append("g")
                .attr("cursor", "pointer")
                .attr("pointer-events", "all");

            function update(event, source) {
                const duration = event?.altKey ? 2500 : 250; // geçişleri yavaşlatmak için alt tuşunu basılı tutun
                const nodes = root.descendants().reverse();
                const links = root.links();

                // Yeni ağaç düzenini hesaplayın.
                tree(root);

                let left = root;
                let right = root;
                root.eachBefore(node => {
                if (node.x < left.x) left = node;
                if (node.x > right.x) right = node;
                });

                const height = right.x - left.x + marginTop + marginBottom;

                const transition = svg.transition()
                    .duration(duration)
                    .attr("height", height)
                    .attr("viewBox", [-marginLeft, left.x - marginTop, width, height])
                    .tween("resize", window.ResizeObserver ? null : () => () => svg.dispatch("toggle"));

                // Düğümleri güncelleyin...
                const node = gNode.selectAll("g")
                .data(nodes, d => d.id);

                // Yeni düğümleri önceki konumunda oluşturun.
                const nodeEnter = node.enter().append("g")
                    .attr("transform", d => `translate(${source.y0},${source.x0})`)
                    .attr("fill-opacity", 0)
                    .attr("stroke-opacity", 0)
                    .on("click", (event, d) => {
                    d.children = d.children ? null : d._children;
                    update(event, d);
                    });

                nodeEnter.append("circle")
                    .attr("r", 2.5)
                    .attr("fill", d => d._children ? "#555" : "#999")
                    .attr("stroke-width", 10);

                nodeEnter.append("text")
                    .attr("dy", "0.31em")
                    .attr("x", d => d._children ? -6 : 6)
                    .attr("text-anchor", d => d._children ? "end" : "start")
                    .text(d => d.data.name)
                    .attr("stroke-linejoin", "round")
                    .attr("stroke-width", 3)
                    .attr("stroke", "white")
                    .attr("paint-order", "stroke");

                // Yeni pozisyonlarına geçiş yapın.
                const nodeUpdate = node.merge(nodeEnter).transition(transition)
                    .attr("transform", d => `translate(${d.y},${d.x})`)
                    .attr("fill-opacity", 1)
                    .attr("stroke-opacity", 1);

                // Çıkış düğümlerini yeni konuma geçirin.
                const nodeExit = node.exit().transition(transition).remove()
                    .attr("transform", d => `translate(${source.y},${source.x})`)
                    .attr("fill-opacity", 0)
                    .attr("stroke-opacity", 0);

                // Bağlantıları güncelleyin...
                const link = gLink.selectAll("path")
                .data(links, d => d.target.id);

                // Yeni bağlantıları önceki konumunda oluşturun.
                const linkEnter = link.enter().append("path")
                    .attr("d", d => {
                    const o = {x: source.x0, y: source.y0};
                    return diagonal({source:0, target: o});
                    });

                // Yeni pozisyonlarına geçiş yapın.
                link.merge(linkEnter).transition(transition)
                    .attr("d", diagonal);

                // Çıkış bağlantılarını yeni konuma geçirin.
                link.exit().transition(transition).remove()
                    .attr("d", d => {
                    const o = {x: source.x, y: source.y};
                    return diagonal({source: o, target: o});
                    });

                // Geçiş için eski pozisyonları saklayın.
                root.eachBefore(d => {
                d.x0 = d.x;
                d.y0 = d.y;
                });
            }

           // Sayfa ilk açıldığında düğümleri kapalı halde getiiryoruz
            root.x0 = dy / 2;
            root.y0 = 0;
            root.descendants().forEach((d, i) => {
                d.id = i;
                d._children = d.children;
                 d.children = null;
                /* if (d.depth && d.data.name.length !== 'no') {
                    d.children = null;
                } */
            });


            update(null, root);

            return svg.node();
    }
    // Kullanım örneği:
    const data = {
    "name": "1",
    "children": [
    {
    "name": "Elektronik",
    "children": [
        {
        "name": "Telefon",
        "children": [
            {"name": "İPhone 15 Pro Max"},
            {"name": "Samsung Galaxy A32"},
            {"name": "Samsung Galaxy M32",},
        ]
        },
        {
        "name": "Bilgisayar",
        "children": [
            {"name": "Apple Macbook M2 512SSD 16GB RAM"},
            {"name": "Apple Macbook M1 256SSD 16GB RAM"},
            {"name": "Samsung Galaxy Book Pro 360"},
        ]
        },
        {
        "name": "Televizyon",
        "children": [
            {"name": "SAMSUNG UE65CU7200UXTK 65 inç 164 4K UHD Crystal LED TV"},
            {"name": "GRUNDIG 50 GHU 7500 B 50 inç 126 Ekran LED TV Siyah"},
            {"name": "SAMSUNG UE85CU8000UXTK 85 inç 214 Ekran Crystal LED TV Siyah"},
        ]
        }
    ]
    },
    {
    "name": "Spor",
    "children": [
        {"name": "Ağırlık seti",
            "children": [
            {"name": "180KG Kum ile doldurulmuş halter seti"},
            {"name": "40KG Demir döküm dumbel seti"},
            {"name": "290KG Krom kaplama halter seti",},
            ]
        },
        {"name": "Eşofman",
        "children": [
            {"name": "Ellesse Erkek Yeşil Jogger Eşofman Altı M017-DGR"},
            {"name": "Ellesse Erkek Eşofman Altı EM166-NV"},
            {"name": "Ellesse Erkek Jogger Eşofman Altı EM077-GR",},
            ]
        },
        {
        "name": "Direnç bandı",
            "children": [
            {"name": "1-25 Kg. Power Band Fitness Pilates Egzersiz Direnç Lastiği"},
            {"name": "powerband Direnç Lastiği Direnç Bandı Ve Egzersiz Bandı Mor X-heavy Orta Sert"},
            {"name": "Delta 3 'lü Pilates Bandı Plates Egzersiz Direnç Lastiği Seti",},
            ]
        },
    ]
    },
    {
    "name": "Giyim",
    "children": [
        {
        "name": "Kazak",
        "children": [
            {"name": "Fitted Bisiklet Yaka Kısa Kollu Kazak"},
            {"name": "Regular Fit Polo Yaka Kazak"},
            {"name": "Slim Fit Polo Yaka Kısa Kollu Triko Kazak",},
        ]
        },
        {"name": "Gömlek",
         "children": [
            {"name": "Oversize Fit Uzun Kollu Gömlek"},
            {"name": "Erkek Çocuk Oxford Uzun Kollu Gömlek"},
            {"name": "Fitted Uzun Kollu Gömlek",},
        ]
        },
    ]
    },
    {
    "name": "Araç",
    "children": [
        {"name": "DirtySprite", "value": 8833},
        {"name": "LineSprite", "value": 1732},
        {"name": "RectSprite", "value": 3623},
        {"name": "TextSprite", "value": 10066}
    ]
    },
    {
    "name": "Süs",
    "children": [
        {"name": "FlareVis", "value": 4116}
    ]
    },
    {
    "name": "Ulaşım",
    "children": [
        {"name": "DragForce", "value": 1082},
        {"name": "GravityForce", "value": 1336},
        {"name": "IForce", "value": 319},
        {"name": "NBodyForce", "value": 10498},
        {"name": "Particle", "value": 2822},
        {"name": "Simulation", "value": 9983},
        {"name": "Spring", "value": 2213},
        {"name": "SpringForce", "value": 1681}
    ]
    },
    {
    "name": "Gıda",
    "children": [
        {"name": "AggregateExpression", "value": 1616},
        {"name": "And", "value": 1027},
        {"name": "Arithmetic", "value": 3891},
        {"name": "Average", "value": 891},
        {"name": "BinaryExpression", "value": 2893},
        {"name": "Comparison", "value": 5103},
        {"name": "CompositeExpression", "value": 3677},
        {"name": "Count", "value": 781},
        {"name": "DateUtil", "value": 4141},
        {"name": "Distinct", "value": 933},
        {"name": "Expression", "value": 5130},
        {"name": "ExpressionIterator", "value": 3617},
        {"name": "Fn", "value": 3240},
        {"name": "If", "value": 2732},
        {"name": "IsA", "value": 2039},
        {"name": "Literal", "value": 1214},
        {"name": "Match", "value": 3748},
        {"name": "Maximum", "value": 843},
        {
        "name": "methods",
        "children": [
        {"name": "add", "value": 593},
        {"name": "and", "value": 330},
        {"name": "average", "value": 287},
        {"name": "count", "value": 277},
        {"name": "distinct", "value": 292},
        {"name": "div", "value": 595},
        {"name": "eq", "value": 594},
        {"name": "fn", "value": 460},
        {"name": "gt", "value": 603},
        {"name": "gte", "value": 625},
        {"name": "iff", "value": 748},
        {"name": "isa", "value": 461},
        {"name": "lt", "value": 597},
        {"name": "lte", "value": 619},
        {"name": "max", "value": 283},
        {"name": "min", "value": 283},
        {"name": "mod", "value": 591},
        {"name": "mul", "value": 603},
        {"name": "neq", "value": 599},
        {"name": "not", "value": 386},
        {"name": "or", "value": 323},
        {"name": "orderby", "value": 307},
        {"name": "range", "value": 772},
        {"name": "select", "value": 296},
        {"name": "stddev", "value": 363},
        {"name": "sub", "value": 600},
        {"name": "sum", "value": 280},
        {"name": "update", "value": 307},
        {"name": "variance", "value": 335},
        {"name": "where", "value": 299},
        {"name": "xor", "value": 354},
        {"name": "_", "value": 264}
        ]
        },
        {"name": "Minimum", "value": 843},
        {"name": "Not", "value": 1554},
        {"name": "Or", "value": 970},
        {"name": "Query", "value": 13896},
        {"name": "Range", "value": 1594},
        {"name": "StringUtil", "value": 4130},
        {"name": "Sum", "value": 791},
        {"name": "Variable", "value": 1124},
        {"name": "Variance", "value": 1876},
        {"name": "Xor", "value": 1101}
    ]
    },
    {
    "name": "Temizlik",
    "children": [
        {"name": "IScaleMap", "value": 2105},
        {"name": "LinearScale", "value": 1316},
        {"name": "LogScale", "value": 3151},
        {"name": "OrdinalScale", "value": 3770},
        {"name": "QuantileScale", "value": 2435},
        {"name": "QuantitativeScale", "value": 4839},
        {"name": "RootScale", "value": 1756},
        {"name": "Scale", "value": 4268},
        {"name": "ScaleType", "value": 1821},
        {"name": "TimeScale", "value": 5833}
    ]
    },
    {
    "name": "Oyuncak",
    "children": [
        {"name": "Arrays", "value": 8258},
        {"name": "Colors", "value": 10001},
        {"name": "Dates", "value": 8217},
        {"name": "Displays", "value": 12555},
        {"name": "Filter", "value": 2324},
        {"name": "Geometry", "value": 10993},
        {
        "name": "heap",
        "children": [
        {"name": "FibonacciHeap", "value": 9354},
        {"name": "HeapNode", "value": 1233}
        ]
        },
        {"name": "IEvaluable", "value": 335},
        {"name": "IPredicate", "value": 383},
        {"name": "IValueProxy", "value": 874},
        {
        "name": "math",
        "children": [
        {"name": "DenseMatrix", "value": 3165},
        {"name": "IMatrix", "value": 2815},
        {"name": "SparseMatrix", "value": 3366}
        ]
        },
        {"name": "Maths", "value": 17705},
        {"name": "Orientation", "value": 1486},
        {
        "name": "palette",
        "children": [
        {"name": "ColorPalette", "value": 6367},
        {"name": "Palette", "value": 1229},
        {"name": "ShapePalette", "value": 2059},
        {"name": "SizePalette", "value": 2291}
        ]
        },
        {"name": "Property", "value": 5559},
        {"name": "Shapes", "value": 19118},
        {"name": "Sort", "value": 6887},
        {"name": "Stats", "value": 6557},
        {"name": "Strings", "value": 22026}
    ]
    },
    {
    "name": "Kişisel",
    "children": [
        {
        "name": "axis",
        "children": [
        {"name": "Axes", "value": 1302},
        {"name": "Axis", "value": 24593},
        {"name": "AxisGridLine", "value": 652},
        {"name": "AxisLabel", "value": 636},
        {"name": "CartesianAxes", "value": 6703}
        ]
        },
        {
        "name": "controls",
        "children": [
        {"name": "AnchorControl", "value": 2138},
        {"name": "ClickControl", "value": 3824},
        {"name": "Control", "value": 1353},
        {"name": "ControlList", "value": 4665},
        {"name": "DragControl", "value": 2649},
        {"name": "ExpandControl", "value": 2832},
        {"name": "HoverControl", "value": 4896},
        {"name": "IControl", "value": 763},
        {"name": "PanZoomControl", "value": 5222},
        {"name": "SelectionControl", "value": 7862},
        {"name": "TooltipControl", "value": 8435}
        ]
        },
        {
        "name": "data",
        "children": [
        {"name": "Data", "value": 20544},
        {"name": "DataList", "value": 19788},
        {"name": "DataSprite", "value": 10349},
        {"name": "EdgeSprite", "value": 3301},
        {"name": "NodeSprite", "value": 19382},
        {
        "name": "render",
        "children": [
            {"name": "ArrowType", "value": 698},
            {"name": "EdgeRenderer", "value": 5569},
            {"name": "IRenderer", "value": 353},
            {"name": "ShapeRenderer", "value": 2247}
        ]
        },
        {"name": "ScaleBinding", "value": 11275},
        {"name": "Tree", "value": 7147},
        {"name": "TreeBuilder", "value": 9930}
        ]
        },
        {
        "name": "events",
        "children": [
        {"name": "DataEvent", "value": 2313},
        {"name": "SelectionEvent", "value": 1880},
        {"name": "TooltipEvent", "value": 1701},
        {"name": "VisualizationEvent", "value": 1117}
        ]
        },
        {
        "name": "legend",
        "children": [
        {"name": "Legend", "value": 20859},
        {"name": "LegendItem", "value": 4614},
        {"name": "LegendRange", "value": 10530}
        ]
        },
        {
        "name": "operator",
        "children": [
        {
        "name": "distortion",
        "children": [
            {"name": "BifocalDistortion", "value": 4461},
            {"name": "Distortion", "value": 6314},
            {"name": "FisheyeDistortion", "value": 3444}
        ]
        },
        {
        "name": "encoder",
        "children": [
            {"name": "ColorEncoder", "value": 3179},
            {"name": "Encoder", "value": 4060},
            {"name": "PropertyEncoder", "value": 4138},
            {"name": "ShapeEncoder", "value": 1690},
            {"name": "SizeEncoder", "value": 1830}
        ]
        },
        {
        "name": "filter",
        "children": [
            {"name": "FisheyeTreeFilter", "value": 5219},
            {"name": "GraphDistanceFilter", "value": 3165},
            {"name": "VisibilityFilter", "value": 3509}
        ]
        },
        {"name": "IOperator", "value": 1286},
        {
        "name": "label",
        "children": [
            {"name": "Labeler", "value": 9956},
            {"name": "RadialLabeler", "value": 3899},
            {"name": "StackedAreaLabeler", "value": 3202}
        ]
        },
        {
        "name": "layout",
        "children": [
            {"name": "AxisLayout", "value": 6725},
            {"name": "BundledEdgeRouter", "value": 3727},
            {"name": "CircleLayout", "value": 9317},
            {"name": "CirclePackingLayout", "value": 12003},
            {"name": "DendrogramLayout", "value": 4853},
            {"name": "ForceDirectedLayout", "value": 8411},
            {"name": "IcicleTreeLayout", "value": 4864},
            {"name": "IndentedTreeLayout", "value": 3174},
            {"name": "Layout", "value": 7881},
            {"name": "NodeLinkTreeLayout", "value": 12870},
            {"name": "PieLayout", "value": 2728},
            {"name": "RadialTreeLayout", "value": 12348},
            {"name": "RandomLayout", "value": 870},
            {"name": "StackedAreaLayout", "value": 9121},
            {"name": "TreeMapLayout", "value": 9191}
        ]
        },
        {"name": "Operator", "value": 2490},
        {"name": "OperatorList", "value": 5248},
        {"name": "OperatorSequence", "value": 4190},
        {"name": "OperatorSwitch", "value": 2581},
        {"name": "SortOperator", "value": 2023}
        ]
        },
        {"name": "Visualization", "value": 16540}
    ]
    }
    ]
    }
    const data2 = {
    "name": "2",
    "children": [
    {
    "name": "Elektronik",
    "children": [
        {
        "name": "Telefon",
        "children": [
            {"name": "İPhone 15 Pro Max"},
            {"name": "Samsung Galaxy A32"},
            {"name": "Samsung Galaxy M32",},
        ]
        },
        {
        "name": "Bilgisayar",
        "children": [
            {"name": "Apple Macbook M2 512SSD 16GB RAM"},
            {"name": "Apple Macbook M1 256SSD 16GB RAM"},
            {"name": "Samsung Galaxy Book Pro 360"},
        ]
        },
        {
        "name": "Televizyon",
        "children": [
            {"name": "SAMSUNG UE65CU7200UXTK 65 inç 164 4K UHD Crystal LED TV"},
            {"name": "GRUNDIG 50 GHU 7500 B 50 inç 126 Ekran LED TV Siyah"},
            {"name": "SAMSUNG UE85CU8000UXTK 85 inç 214 Ekran Crystal LED TV Siyah"},
        ]
        }
    ]
    },
    {
    "name": "Spor",
    "children": [
        {"name": "Ağırlık seti",
            "children": [
            {"name": "180KG Kum ile doldurulmuş halter seti"},
            {"name": "40KG Demir döküm dumbel seti"},
            {"name": "290KG Krom kaplama halter seti",},
            ]
        },
        {"name": "Eşofman",
        "children": [
            {"name": "Ellesse Erkek Yeşil Jogger Eşofman Altı M017-DGR"},
            {"name": "Ellesse Erkek Eşofman Altı EM166-NV"},
            {"name": "Ellesse Erkek Jogger Eşofman Altı EM077-GR",},
            ]
        },
        {
        "name": "Direnç bandı",
            "children": [
            {"name": "1-25 Kg. Power Band Fitness Pilates Egzersiz Direnç Lastiği"},
            {"name": "powerband Direnç Lastiği Direnç Bandı Ve Egzersiz Bandı Mor X-heavy Orta Sert"},
            {"name": "Delta 3 'lü Pilates Bandı Plates Egzersiz Direnç Lastiği Seti",},
            ]
        },
    ]
    },
    {
    "name": "Giyim",
    "children": [
        {
        "name": "Kazak",
        "children": [
            {"name": "Fitted Bisiklet Yaka Kısa Kollu Kazak"},
            {"name": "Regular Fit Polo Yaka Kazak"},
            {"name": "Slim Fit Polo Yaka Kısa Kollu Triko Kazak",},
        ]
        },
        {"name": "Gömlek",
         "children": [
            {"name": "Oversize Fit Uzun Kollu Gömlek"},
            {"name": "Erkek Çocuk Oxford Uzun Kollu Gömlek"},
            {"name": "Fitted Uzun Kollu Gömlek",},
        ]
        },
    ]
    },
    {
    "name": "Araç",
    "children": [
        {"name": "DirtySprite", "value": 8833},
        {"name": "LineSprite", "value": 1732},
        {"name": "RectSprite", "value": 3623},
        {"name": "TextSprite", "value": 10066}
    ]
    },
    {
    "name": "Süs",
    "children": [
        {"name": "FlareVis", "value": 4116}
    ]
    },
    {
    "name": "Ulaşım",
    "children": [
        {"name": "DragForce", "value": 1082},
        {"name": "GravityForce", "value": 1336},
        {"name": "IForce", "value": 319},
        {"name": "NBodyForce", "value": 10498},
        {"name": "Particle", "value": 2822},
        {"name": "Simulation", "value": 9983},
        {"name": "Spring", "value": 2213},
        {"name": "SpringForce", "value": 1681}
    ]
    },
    {
    "name": "Gıda",
    "children": [
        {"name": "AggregateExpression", "value": 1616},
        {"name": "And", "value": 1027},
        {"name": "Arithmetic", "value": 3891},
        {"name": "Average", "value": 891},
        {"name": "BinaryExpression", "value": 2893},
        {"name": "Comparison", "value": 5103},
        {"name": "CompositeExpression", "value": 3677},
        {"name": "Count", "value": 781},
        {"name": "DateUtil", "value": 4141},
        {"name": "Distinct", "value": 933},
        {"name": "Expression", "value": 5130},
        {"name": "ExpressionIterator", "value": 3617},
        {"name": "Fn", "value": 3240},
        {"name": "If", "value": 2732},
        {"name": "IsA", "value": 2039},
        {"name": "Literal", "value": 1214},
        {"name": "Match", "value": 3748},
        {"name": "Maximum", "value": 843},
        {
        "name": "methods",
        "children": [
        {"name": "add", "value": 593},
        {"name": "and", "value": 330},
        {"name": "average", "value": 287},
        {"name": "count", "value": 277},
        {"name": "distinct", "value": 292},
        {"name": "div", "value": 595},
        {"name": "eq", "value": 594},
        {"name": "fn", "value": 460},
        {"name": "gt", "value": 603},
        {"name": "gte", "value": 625},
        {"name": "iff", "value": 748},
        {"name": "isa", "value": 461},
        {"name": "lt", "value": 597},
        {"name": "lte", "value": 619},
        {"name": "max", "value": 283},
        {"name": "min", "value": 283},
        {"name": "mod", "value": 591},
        {"name": "mul", "value": 603},
        {"name": "neq", "value": 599},
        {"name": "not", "value": 386},
        {"name": "or", "value": 323},
        {"name": "orderby", "value": 307},
        {"name": "range", "value": 772},
        {"name": "select", "value": 296},
        {"name": "stddev", "value": 363},
        {"name": "sub", "value": 600},
        {"name": "sum", "value": 280},
        {"name": "update", "value": 307},
        {"name": "variance", "value": 335},
        {"name": "where", "value": 299},
        {"name": "xor", "value": 354},
        {"name": "_", "value": 264}
        ]
        },
        {"name": "Minimum", "value": 843},
        {"name": "Not", "value": 1554},
        {"name": "Or", "value": 970},
        {"name": "Query", "value": 13896},
        {"name": "Range", "value": 1594},
        {"name": "StringUtil", "value": 4130},
        {"name": "Sum", "value": 791},
        {"name": "Variable", "value": 1124},
        {"name": "Variance", "value": 1876},
        {"name": "Xor", "value": 1101}
    ]
    },
    {
    "name": "Temizlik",
    "children": [
        {"name": "IScaleMap", "value": 2105},
        {"name": "LinearScale", "value": 1316},
        {"name": "LogScale", "value": 3151},
        {"name": "OrdinalScale", "value": 3770},
        {"name": "QuantileScale", "value": 2435},
        {"name": "QuantitativeScale", "value": 4839},
        {"name": "RootScale", "value": 1756},
        {"name": "Scale", "value": 4268},
        {"name": "ScaleType", "value": 1821},
        {"name": "TimeScale", "value": 5833}
    ]
    },
    {
    "name": "Oyuncak",
    "children": [
        {"name": "Arrays", "value": 8258},
        {"name": "Colors", "value": 10001},
        {"name": "Dates", "value": 8217},
        {"name": "Displays", "value": 12555},
        {"name": "Filter", "value": 2324},
        {"name": "Geometry", "value": 10993},
        {
        "name": "heap",
        "children": [
        {"name": "FibonacciHeap", "value": 9354},
        {"name": "HeapNode", "value": 1233}
        ]
        },
        {"name": "IEvaluable", "value": 335},
        {"name": "IPredicate", "value": 383},
        {"name": "IValueProxy", "value": 874},
        {
        "name": "math",
        "children": [
        {"name": "DenseMatrix", "value": 3165},
        {"name": "IMatrix", "value": 2815},
        {"name": "SparseMatrix", "value": 3366}
        ]
        },
        {"name": "Maths", "value": 17705},
        {"name": "Orientation", "value": 1486},
        {
        "name": "palette",
        "children": [
        {"name": "ColorPalette", "value": 6367},
        {"name": "Palette", "value": 1229},
        {"name": "ShapePalette", "value": 2059},
        {"name": "SizePalette", "value": 2291}
        ]
        },
        {"name": "Property", "value": 5559},
        {"name": "Shapes", "value": 19118},
        {"name": "Sort", "value": 6887},
        {"name": "Stats", "value": 6557},
        {"name": "Strings", "value": 22026}
    ]
    },
    {
    "name": "Kişisel",
    "children": [
        {
        "name": "axis",
        "children": [
        {"name": "Axes", "value": 1302},
        {"name": "Axis", "value": 24593},
        {"name": "AxisGridLine", "value": 652},
        {"name": "AxisLabel", "value": 636},
        {"name": "CartesianAxes", "value": 6703}
        ]
        },
        {
        "name": "controls",
        "children": [
        {"name": "AnchorControl", "value": 2138},
        {"name": "ClickControl", "value": 3824},
        {"name": "Control", "value": 1353},
        {"name": "ControlList", "value": 4665},
        {"name": "DragControl", "value": 2649},
        {"name": "ExpandControl", "value": 2832},
        {"name": "HoverControl", "value": 4896},
        {"name": "IControl", "value": 763},
        {"name": "PanZoomControl", "value": 5222},
        {"name": "SelectionControl", "value": 7862},
        {"name": "TooltipControl", "value": 8435}
        ]
        },
        {
        "name": "data",
        "children": [
        {"name": "Data", "value": 20544},
        {"name": "DataList", "value": 19788},
        {"name": "DataSprite", "value": 10349},
        {"name": "EdgeSprite", "value": 3301},
        {"name": "NodeSprite", "value": 19382},
        {
        "name": "render",
        "children": [
            {"name": "ArrowType", "value": 698},
            {"name": "EdgeRenderer", "value": 5569},
            {"name": "IRenderer", "value": 353},
            {"name": "ShapeRenderer", "value": 2247}
        ]
        },
        {"name": "ScaleBinding", "value": 11275},
        {"name": "Tree", "value": 7147},
        {"name": "TreeBuilder", "value": 9930}
        ]
        },
        {
        "name": "events",
        "children": [
        {"name": "DataEvent", "value": 2313},
        {"name": "SelectionEvent", "value": 1880},
        {"name": "TooltipEvent", "value": 1701},
        {"name": "VisualizationEvent", "value": 1117}
        ]
        },
        {
        "name": "legend",
        "children": [
        {"name": "Legend", "value": 20859},
        {"name": "LegendItem", "value": 4614},
        {"name": "LegendRange", "value": 10530}
        ]
        },
        {
        "name": "operator",
        "children": [
        {
        "name": "distortion",
        "children": [
            {"name": "BifocalDistortion", "value": 4461},
            {"name": "Distortion", "value": 6314},
            {"name": "FisheyeDistortion", "value": 3444}
        ]
        },
        {
        "name": "encoder",
        "children": [
            {"name": "ColorEncoder", "value": 3179},
            {"name": "Encoder", "value": 4060},
            {"name": "PropertyEncoder", "value": 4138},
            {"name": "ShapeEncoder", "value": 1690},
            {"name": "SizeEncoder", "value": 1830}
        ]
        },
        {
        "name": "filter",
        "children": [
            {"name": "FisheyeTreeFilter", "value": 5219},
            {"name": "GraphDistanceFilter", "value": 3165},
            {"name": "VisibilityFilter", "value": 3509}
        ]
        },
        {"name": "IOperator", "value": 1286},
        {
        "name": "label",
        "children": [
            {"name": "Labeler", "value": 9956},
            {"name": "RadialLabeler", "value": 3899},
            {"name": "StackedAreaLabeler", "value": 3202}
        ]
        },
        {
        "name": "layout",
        "children": [
            {"name": "AxisLayout", "value": 6725},
            {"name": "BundledEdgeRouter", "value": 3727},
            {"name": "CircleLayout", "value": 9317},
            {"name": "CirclePackingLayout", "value": 12003},
            {"name": "DendrogramLayout", "value": 4853},
            {"name": "ForceDirectedLayout", "value": 8411},
            {"name": "IcicleTreeLayout", "value": 4864},
            {"name": "IndentedTreeLayout", "value": 3174},
            {"name": "Layout", "value": 7881},
            {"name": "NodeLinkTreeLayout", "value": 12870},
            {"name": "PieLayout", "value": 2728},
            {"name": "RadialTreeLayout", "value": 12348},
            {"name": "RandomLayout", "value": 870},
            {"name": "StackedAreaLayout", "value": 9121},
            {"name": "TreeMapLayout", "value": 9191}
        ]
        },
        {"name": "Operator", "value": 2490},
        {"name": "OperatorList", "value": 5248},
        {"name": "OperatorSequence", "value": 4190},
        {"name": "OperatorSwitch", "value": 2581},
        {"name": "SortOperator", "value": 2023}
        ]
        },
        {"name": "Visualization", "value": 16540}
    ]
    }
    ]
    }
onMounted(() => {
    const svg = drawTreeChart(data);
     const svg2 = drawTreeChart(data2);
    document.querySelector('#network_chart').appendChild(svg);
    document.querySelector('#network_chart').appendChild(svg2);
    
} )
      return {
        polarData,
        polarOptions,
        donutData,
        donutOptions,
        pieData,
        pieOptions,
        radarData,
        radarOptions
      }
  }
}
</script>


<style>

</style>