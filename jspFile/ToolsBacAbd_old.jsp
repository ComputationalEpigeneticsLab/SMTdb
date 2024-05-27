<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Search</title>

    <link rel="stylesheet" href="./assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/css/all.min.css">
    <link rel="stylesheet" href="./assets/css/animate.css">
    <link rel="stylesheet" href="./assets/css/nice-select.css">
    <link rel="stylesheet" href="./assets/css/swiper.min.css">
    <link rel="stylesheet" href="./assets/css/magnific-popup.css">
    <link rel="stylesheet" href="./assets/css/odometer.css">
    <link rel="stylesheet" href="./assets/css/flaticon.css">
    <link rel="stylesheet" href="./assets/css/main.css">
    <link rel="shortcut icon" href="assets/images/favicon.png" type="image/x-icon">
	<link rel="stylesheet" type="text/css" href="css/jquery-ui.css">
	<link rel="stylesheet" href="layuisrc/css/layui.css">
	<link rel="stylesheet" type="text/css" href="css/jquery.dataTables.min.css">
	<link rel="stylesheet" type="text/css" href="css/buttons.dataTables.min.css">
	<link href="css/fonts/fontawesome/css/all.css" rel="stylesheet">
	<link rel="stylesheet" href="css/style-ww.css">
	<link rel="stylesheet" type="text/css" href="css/loadingUse.css">
	<script src="js/xm-select.js" ></script>
	
</head>
<style>
.header-section {
    position: fixed;
    width: 100%;
    z-index: 99;
    padding: 20px 0;
    -webkit-transition: all ease 0.3s;
    -moz-transition: all ease 0.3s;
    transition: all ease 0.3s;
    top: 20px;
    left: 0;
    background: rgba(15, 66, 41, .6);
    opacity:1;
}
.header-section.active {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
/*     background: #1893f0; */
 	background: rgba(15, 66, 41, .6);
    top: 0;
    opacity:1;
}
.header-section.inActive {
/*     -webkit-transform: translateY(0%); */
/*     -ms-transform: translateY(0%); */
/*     transform: translateY(0%); */
    background: white;
    opacity:1;
}


.section-header {
    max-width: 1200px;
    margin: 0 auto 40px;
    text-align: left;
}

.faq-wrapper {
    max-width: 1200px;
    margin: 0 auto;
}
.widget.widget-archive ul li, .widget.widget-category ul li {
    padding: 0;
    border-bottom: 1px solid #e5e5e5;
}
.widget .title {
    margin: 0;
    padding: 14px 30px;
    color: black;
    background: #e5e5e5;
    text-transform: capitalize;
    -webkit-border-radius: 7px 7px 0 0;
    -moz-border-radius: 7px 7px 0 0;
    border-radius: 7px 7px 0 0;
    font-weight: 500;
    font-size: 20px;
}


.titleFont1{font-size:30px; }
.titleFont2{font-size:28px;font-weight:600; }
.titleFont3{font-size:22px; }
.table_title{font-size:20px;font-weight:600;}

.input-use{height:50px;width:100%;margin-left:0;padding: 0.375rem 0.75rem;font-size: 1rem;line-height: 1.5;color: #495057;background-color: #fff;background-clip: padding-box;border: 1px solid #ced4da;border-radius: 0.25rem;box-shadow: inset 0 0 0 transparent;font-size:18px;padding-bottom: 10px;}
.input2{box-shadow: rgb(221, 221, 221) 0px 1px 3px inset;    box-sizing: border-box;    padding: 0.5em 0.6em;    border-width: 1px;    border-style: solid;    border-color: rgb(204, 204, 204);    border-image: initial;}
.botton-search{  font-size:20px !important;background:#f6f6f9;color:black;border-radius:5px;border: 1px solid #f6f6f9;height:55px;color: #6f87aa;text-transform: none !important;text-align:left;margin-right:5px; background:white;}
.botton-submit{background:white;color:black;border-radius:10px;border-color:#ced4da;font-size:18px;height:55px;}
html *::first-letter {
    text-transform: none;
}

</style>

<body>
<!--     <div class="preloader"> -->
<!--         <div class="preloader-inner"> -->
<!--             <img src="./assets/images/preloader-2.gif" alt=""> -->
<!--         </div> -->
<!--     </div> -->
    <a href="#0" class="scrollToTop">
        <i class="fas fa-angle-up"></i>
    </a>
    <div class="overlay"></div>


    <!-- ========Header-Section Starts Here ========-->
    <header class="header-section">
        <div class="container">
            <div class="header-area">
                <div class="logo">
                    <a href="#0">
                        <img src="./assets/images/logo/logo02.png" alt="logo">
                    </a>
                </div>
                <ul class="menu">
                    <li>
                        <a  href="index.jsp">Home</a>
                    </li>
                    <li>
                        <a  href="browse.jsp">Browse</a>
                    </li>
                    <li>
                        <a class="active" href="#0">Search</a>
                        <ul class="submenu">
                        	<li>
                                <a  href="SearchBac.jsp">Bacteria</a>
                            </li>
                            <li>
                                <a href="SearchCancer.jsp">Cancer</a>
                            </li>
                            <li>
                                <a href="SearchCelltype.jsp">Cell type</a>
                            </li>
                            <li >
                                <a  href="SearchGene.jsp">Gene</a>
                            </li>
                            
                        </ul>
                    </li>
  <li>
                        <a href="#0">Tools</a>
                        <ul class="submenu" style="width:300px;">
                            <li>
                                <a  href="ToolsBacAbd.jsp">Bacteria abundance</a>
                            </li>
                            <li>
                                <a href="ToolsBacNeb.jsp">Bacteria spatial neighborhood</a>
                            </li>
                            <li>
                                <a   href="ToolsBacCty.jsp">Cell types within HBAR</a>
                            </li>
                            <li>
                                <a class="active" href="ToolsBacCoExp.jsp">Bacteria co-Expression </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="download.jsp">Download</a>
                    </li>
                    <li>
                        <a href="help.jsp">Help</a>
                    </li>
                </ul>
                
            </div>
        </div>
    </header>
    <!-- ========Header-Section Ends Here ========-->

    <!-- ========Faq-Section Starts Here ========-->
    <section class="faq-section padding-top padding-bottom" style="margin-top:50px;">
        <div class="container">
            <div class="section-header">
                <h2 class="title titleFont1" >Search Bacteria</h2>
            </div>
            <div class="faq-wrapper"  >
                <div class="col-md-12 col-sm-12">
		            <table class=" wow fadeInUp" style="width:100%;margin-top:30px;margin-left:0%;"  >
		               <tr>
		               <td style="font-size:18px; font-weight:550;width:100px;" > Metagenome:  </td>
		               <td style="width:30%;"><span id="xml_bac" style="width:100%;">  </span ></td>
		               <td style="width:20px;"></td>
		               
		               <td style="font-size:18px; font-weight:550;width:80px;" > Bacteria:  </td>
		               <td style="width:35%;"><span id="xml_bac_detail" style="width:100%;">  </span ></td>
		               
		                <td style="width:20px;"></td>
		                <td style="width:140px; "><button class="btn btn-danger botton-submit" style="font-size:20px; font-weight:550;" onclick="toolsBacSearch()"><i class="fa-solid fa-magnifying-glass-arrow-right panel-li" ></i> GO</button></td>
		               </tr>
		               
		            </table>
		            
		            
                </div>
            </div>
        </div>
        
    </section>
    <!-- ========Faq-Section Ends Here ========-->


    <!-- ========Faq-Section Starts Here ========-->
    <section class="faq-section padding-bottom" style="margin-top:-80px;">
        <div class="container">
<!--             <div class="section-header"> -->
<!--                 <h2 class="title titleFont1">Dataset list </h2> -->
<!--             </div> -->
            <div class="faq-wrapper" style="margin-top:0px; box-shadow: rgb(221, 221, 221) 1px 1px 1px 3px; background:white;">
            <div class=" col-12 col-md-12 col-lg-12 ">
								    			<table id="st_bac_gene_coocc_table" class="table table-bordered table-hover dataTable cell_infor_table_detail" style="width:98%;">
														<thead >
															<tr class="table_head1">
																<th>Bacteria</th>
																<th>Gene</th>
																<th>Corr</th>
																<th>P Value</th>
																<th>FDR</th>		
																<th>View</th>							  			
															</tr>
														</thead>
													</table>
								    		</div>
            </div>
        </div>
    </section>
    <!-- ========Faq-Section Ends Here ========-->




    <script type="text/javascript" src="js/font1.js"></script>
    <script src="assets/js/jquery-3.3.1.min.js"></script>
    <script src="assets/js/modernizr-3.6.0.min.js"></script>
    <script src="assets/js/plugins.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/isotope.pkgd.min.js"></script>
    <script src="assets/js/magnific-popup.min.js"></script>
    <script src="assets/js/swiper.min.js"></script>
    <script src="assets/js/wow.min.js"></script>
    <script src="assets/js/odometer.min.js"></script>
    <script src="assets/js/viewport.jquery.js"></script>
    <script src="assets/js/nice-select.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="layui/layui.js"></script>
    <script src="js/echarts.js" type="text/javascript" charset="utf-8"></script>
    <script src="js/xm-select.js" ></script>
    <script src="js/plotly.js" ></script>
    <script type="text/javascript" language="javascript" src="js/jquery.dataTables.min.js"></script>
	<script type="text/javascript" language="javascript" src="js/dataTables.buttons.min.js"></script>
    <script src="js/d3.min.js" ></script>
	

<script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.js"></script>


</body>
<script  type="text/javascript" charset="utf-8">
if ($.fn.dataTable.isDataTable('#st_bac_gene_coocc_table')) {
	$('#st_bac_gene_coocc_table').DataTable().clear().destroy();
}

function datatable_Exaple(){

	$("#st_bac_gene_coocc_table").DataTable( {
	"bLengthChange": false, //开关，是否显示每页显示多少条数据的下拉框
	"searching" : false,//开关,search 
    //"aLengthMenu": [10,20,30],//设置每页显示数据条数的下拉选项
    'iDisplayLength': 8, //每页初始显示5条记录
	"deferRender": true,
	"bProcessing": true, 
	"paginationType": "full_numbers",
	"serverSide": false, 
	"order": [[ 2, 'desc' ]],
	'ajax': '0_files/slice/GSE179572_GSM5420750/bac_table/bac_gene_cooc.txt',
	'columns':[
{'data':'bac'},
{'data':'gene'},
{'data':'corr'},
{'data':'p'},
{'data':'fdr'},
{'data':null,
"render": function ( data, type, row, meta ) {  
return  "<i class='fa fa-line-chart' aria-hidden='true' style='font-size:20px;cursor: pointer;color:#ff9a18'  onclick= "+'"'+"spatial_gene_coooc_onclick_p7("+"'"+row['bac']+"'"+')"'+" ></i> ";
						                    }//data是对应当前cell的值，row是对应当前行中的所有cell的值
}
]
	
	} );
	

}
var g0="genus_Theileria";
var gene="KCNK17";
datatable_Exaple();




$(document).ready(function() {
    var table = $('#st_bac_gene_coocc_table').DataTable();
    //console.log(table);
    // 遍历所有行，删除不包含字符串"a"的行
    table.rows().every(function() {
        var rowData = this.data();
        //rowData=JSON.stringify(rowData);
        //rowData=JSON.parse(rowData);
        console.log(typeof rowData);
        console.log(rowData); 
        
        
        
//         if (rowData['bac'] === g0) { // 假设包含字符串"a"的是第一列
//             this.remove(); // 删除不包含字符串"a"的行
//         }
    });
});


//save_row(g0);

//假设你已经有了一个DataTable对象叫做table
//var table = $('#st_bac_gene_coocc_table').DataTable(); // 这里的'#example'是你的表格的ID
// 获取DataTable中的数据
//var data = table.rows().data();
// 遍历所有行

function save_row(g0){
	var table = $('#st_bac_gene_coocc_table').DataTable();
	table.rows().every(function() {
        var data = this.data();
        console.log(data);
        if (!data[0].includes(g0)) { // 假设包含字符串"a"的是第一列
            this.remove(); // 删除不包含字符串"a"的行
        }
    }).draw(); // 重新绘制表格
    
    
}




// $(document).ready(function() {
// 	var table = $('#st_bac_gene_coocc_table').DataTable();
// console.log(1);
// 	// 获取所有行的数据
// 	var data = table.rows().data();

// 	// 分离符合条件的行和不符合条件的行
// 	var matchedRows = [];
// 	var unmatchedRows = [];
// 	data.each(function(value, index) {
// 		if (value[0] == g0 && value[1] == gene) {
// 			matchedRows.push(value); // 第一列为"a"且第二列为"b"
// 		} else {
// 			unmatchedRows.push(value);
// 		}
// 	});
// 	console.log(2);
// 	// 合并数组，使符合条件的行在前
// 	var sortedData = matchedRows.concat(unmatchedRows);
// 	console.log(3);
// 	// 清空表格
// 	table.clear();

// 	// 用排序后的数据重新填充表格
// 	table.rows.add(sortedData).draw();
// 	console.log(4);
// });


</script>
</html>