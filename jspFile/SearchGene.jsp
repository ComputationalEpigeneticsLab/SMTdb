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


.titleFont1{font-size:30px;}

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
                                <a href="SearchBac.jsp">Bacteria</a>
                            </li>
                            <li>
                                <a href="SearchCancer.jsp">Cancer</a>
                            </li>
                            <li>
                                <a href="SearchCelltype.jsp">Cell type</a>
                            </li>
                            <li >
                                <a class="active" href="SearchGene.jsp">Gene</a>
                            </li>
                            
                        </ul>
                    </li>
<!--                     <li> -->
<!--                         <a href="#0">Tools</a> -->
<!--                         <ul class="submenu"> -->
<!--                             <li> -->
<!--                                 <a href="blog-grid.html">Blog Grid</a> -->
<!--                             </li> -->
<!--                             <li> -->
<!--                                 <a href="blog-classic.html">Blog Classic</a> -->
<!--                             </li> -->
<!--                             <li> -->
<!--                                 <a href="blog-details.html">Blog Details</a> -->
<!--                             </li> -->
<!--                         </ul> -->
<!--                     </li> -->
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
                <h2 class="title titleFont1" >Search gene</h2>
            </div>
            <div class="faq-wrapper"  >
                <div class="col-md-12 col-sm-12">
                	<table class=" wow fadeInUp" style="width:100%;margin-top:30px;margin-left:0%;"  >
		               <tr>
		                <td ><span><input id="datasets" name="datasets" class="input-use input2" type="search" placeholder=" e.g. COL3A1  " ></span></td>
		                <td style="width:20px;"></td>
		                <td style="width:150px; "><button class="btn btn-danger botton-submit" style="font-size:20px; font-weight:550;" onclick="dasetsSearch()"><i class="fa-solid fa-magnifying-glass-arrow-right panel-li" ></i> Search</button></td>
		            	</tr>
		            </table>
		            
		            
		            <table style="margin:0 auto;">
		            	<tr> 
		            		<td><button class="botton-search"  style="border:none; text-transform: lowercase; ">e.g.</button> </td>
		            		<td> <button class="botton-search" style="border:none;"  onclick="example('COL3A1')">COL3A1 </button></td>
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
            <br/><br/><br/><br/>
               <div class="col-md-12 col-sm-12" >
               		<div   id="human_mouse"></div>
                </div>
            <br/><br/><br/><br/>
            </div>
        </div>
    </section>
    <!-- ========Faq-Section Ends Here ========-->
<div id="layer-package" style="display:none;padding: 40px;">
        	<div style="margin-left:10px;font-size:18px;min-height:400px;">
        		<table id="browse_sub_table" class="table table-bordered table-hover dataTable cell_infor_table_detail" style="width:100%;">
						<thead >
							<tr>
								<th>Cancer</th>
								<th>Tissue</th>
								<th>No. of Bacteria </th>	
								<th>No. of Spot </th>	
								<th>No. of Cell</th>
								<th>No. of Cell type</th>
								<th>Publication</th>
								<th style="width:80px !important;">Detail</th>
							</tr>
						</thead>
			</table>
        	</div>
        </div>



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
    <script src="layuisrc/layui.js"></script>
    <script src="js/jquery-1.9.1.js"></script>
  	<script type="text/javascript" language="javascript" src="js/d3.min.js"></script>
  	<script type="text/javascript" language="javascript" src="js/jquery.dataTables.min.js"></script>
	<script type="text/javascript" language="javascript" src="js/dataTables.buttons.min.js"></script>
	<script type="text/javascript" src="js/font1.js"></script>
	
  	<script type="text/javascript" language="javascript" src="js/page/searchGene.js"></script>
  	
  	
</body>
<script  type="text/javascript" charset="utf-8">


//////////

var svgNode = d3.select("#human_mouse");
var path;
d3.xml("img/h&m_f.svg", "image/svg+xml", function (error, xml) {
    if (error) throw error;
    var svg_content = xml.documentElement;
    svgNode.node().appendChild(svg_content); //append svg
    path = document.querySelectorAll('[id^=UBERON]');//匹配id用的
   changeImg(path);
  
   
});

</script>
</html>