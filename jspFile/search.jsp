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
    <link rel="stylesheet" type="text/css" href="css/jquery.dataTables.min.css">
	<link rel="stylesheet" type="text/css" href="css/buttons.dataTables.min.css">

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
    font-weight: 600;
    font-size: 22px;
}


.titleFont1{font-size:30px;}
td.details-control { 
     background: url('images/open.png') no-repeat center center; 
   cursor: pointer; 
 } 
tr.shown td.details-control {
   background: url('images/close.png') no-repeat center center; 
 } 
 .search_p{font-weight: 600;font-size:20px;color:black;color: #292929;}
 .widget {
        margin-bottom: 0px;
    }
.input-use{height:50px;width:100%;margin-left:0;padding: 0.375rem 0.75rem;font-size: 1rem;line-height: 1.5;color: #495057;background-color: #fff;background-clip: padding-box;border: 1px solid #ced4da;border-radius: 0.25rem;box-shadow: inset 0 0 0 transparent;font-size:18px;padding-bottom: 10px;}
.input2{box-shadow: rgb(221, 221, 221) 0px 1px 3px inset;    box-sizing: border-box;    padding: 0.5em 0.6em;    border-width: 1px;    border-style: solid;    border-color: rgb(204, 204, 204);    border-image: initial;}

.botton-search{  font-size:16px !important;color:black;border-radius:5px;border: 1px solid #f6f6f9;height:35px;color: #6f87aa;text-transform: none !important;text-align:left;margin-right:5px;}

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
                        <a class="active" href="search.jsp">Search</a>

                    <li>
                        <a href="#0">Tools</a>
                        <ul class="submenu" style="width:300px;">
                            <li>
                                <a href="ToolsBacAbd.jsp">Microbiota  abundance</a>
                            </li>
                            <li>
                                <a href="ToolsBacNeb.jsp">Spatial neighborhood</a>
                            </li>
                            <li>
                                <a href="ToolsBacCty.jsp">Cell types within HMAR</a>
                            </li>
                            <li>
                                <a href="ToolsBacCoExp.jsp"> Host microbiota  CEM  </a>
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



    <section class="faq-section padding-top padding-bottom" style="margin-top:20px;">
        <div class="container">
            
            <div class="faq-wrapper"  >
            </div>
        </div>
        
    </section>
    <section class="faq-section padding-bottom" style="margin-top:-100px;">
   
        <div class="container">
            <div class="section-header">
                <h2 class="title">Search</h2>
            </div>
            
             <div class="widget widget-post" style="margin-top: -20px;">
                            <h6 class="title">Microbiota</h6>
                            <ul>
                                <li>
                                       <table >
							            	<tr> 
							            		<td><p class="search_p">  Search for the microbiota of interest</p></td>
							            		<td style="width:10px;"></td>
							            		<td> <button class="botton-search" style="border:none;"  onclick="example_bac('genus,Citrobacter')">e.g. Citrobacter (Genus) </button></td>
							            	</tr>
							            </table>
<!--  /////                                       -->
								<div class="col-md-12 col-sm-12" style="margin-bottom:20px;">
						            <table class="" style="width:100%;margin-top:10px;margin-left:0%;"  >
						               <tr>
						               <td style="font-size:18px; font-weight:600; width:100px;color: #292929;" > Microbiota  </td>
						               <td style="width:5px;"></td>
						               <td style="width:25%;"><span id="xml_bac" style="width:100%;">  </span ></td>
						               <td style="width:5px;"></td>
						               
						                <td ><span><input id="datasets" name="datasets" class="input-use input2" type="search" placeholder=" e.g. Citrobacter  " ></span></td>
						                <td style="width:20px;"></td>
						                <td style="width:150px; "><button class="btn btn-danger botton-submit" style="font-size:20px; font-weight:550;" onclick="dasetsSearch_bac()"><i class="fa-solid fa-magnifying-glass-arrow-right panel-li" ></i> Search</button></td>
						               </tr>
						            </table>
				                </div>
<!-- ///// -->
                              <div id="browse_sub_father_bac" style="display:none;padding: 20px;">
                              
					        	<div style="margin-left:10px;font-size:16px;min-height:300px;">
					        		<table id="browse_sub_table_bac" class="table table-bordered table-hover dataTable cell_infor_table_detail" style="width:100%;">
											<thead >
												<tr>
													<th>Cancer</th>
													<th>Tissue</th>
													<th>No. of Bacteria </th>	
													<th>No. of Spot </th>	
													<th>No. of Cell type</th>
													<th>Publication</th>
													<th style="width:80px !important;">Detail</th>
												</tr>
											</thead>
								</table>
					        	</div>
					        </div>           
		            
                                   
                                </li>
                            </ul>
               </div>
               
               
               <div class="widget widget-post">
                            <h6 class="title">Cancer</h6>
                            <ul>
                                <li>
                                    <table >
							            	<tr> 
							            		<td><p class="search_p">  Search for the cancer of interest</p> </td>
							            		<td style="width:10px;"></td>
							            		<td> <button class="botton-search" style="border:none;"  onclick="example_cancer('Colorectal Cancer (CRC)')">e.g.Colorectal Cancer (CRC) </button></td>
							            	</tr>
							            </table>
<!--                                         /// -->
									<div class="col-md-12 col-sm-12" style="margin-bottom:20px;">
					                	<table class="" style="width:100%;margin-top:10px;margin-left:0%;"  >
							               <tr>
							                <td ><span><input id="datasets_cancer" name="datasets_cancer" class="input-use input2" type="search" placeholder=" e.g.  Colorectal Cancer (CRC)  " ></span></td>
							                <td style="width:20px;"></td>
							                <td style="width:150px; "><button class="btn btn-danger botton-submit" style="font-size:20px; font-weight:550;" onclick="dasetsSearch_cancer()"><i class="fa-solid fa-magnifying-glass-arrow-right panel-li" ></i> Search</button></td>
							            	</tr>
							            </table>
							            
					                </div>
					                
					                <div id="browse_sub_father_cancer" style="display:none;padding: 20px;">
                              
					        	<div style="margin-left:10px;font-size:16px;min-height:300px;">
					        		<table id="browse_sub_table_cancer" class="table table-bordered table-hover dataTable cell_infor_table_detail" style="width:100%;">
											<thead >
												<tr>
													<th>Cancer</th>
													<th>Tissue</th>
													<th>No. of Bacteria </th>	
													<th>No. of Spot </th>	
													<th>No. of Cell type</th>
													<th>Publication</th>
													<th style="width:80px !important;">Detail</th>
												</tr>
											</thead>
								</table>
					        	</div>
					        </div> 
<!-- /// -->
                                </li>
                               
                            </ul>
               </div>
               
               <div class="widget widget-post">
                            <h6 class="title">Cell type</h6>
                            <ul>
                                <li>
                                    <table >
							            	<tr> 
							            		<td><p class="search_p">  Search for the cell type of interest</p> </td>
							            		<td style="width:10px;"></td>
							            		<td> <button class="botton-search" style="border:none;"  onclick="example_ct('B lymphocytes (B-Lym)')">e.g. B lymphocytes (B-Lym) </button></td>
							            	</tr>
							            </table>
<!--                                         /// -->
									<div class="col-md-12 col-sm-12" style="margin-bottom:20px;">
					                	<table class="" style="width:100%;margin-top:10px;margin-left:0%;"  >
							               <tr>
							                <td ><span><input id="datasets_ct" name="datasets_ct" class="input-use input2" type="search" placeholder=" e.g. B lymphocytes (B-Lym)  " ></span></td>
							                <td style="width:20px;"></td>
							                <td style="width:150px; "><button class="btn btn-danger botton-submit" style="font-size:20px; font-weight:550;" onclick="dasetsSearch_ct()"><i class="fa-solid fa-magnifying-glass-arrow-right panel-li" ></i> Search</button></td>
							            	</tr>
							            </table>
							            
					                </div>
					                
					                <div id="browse_sub_father_ct" style="display:none;padding: 20px;">
                              
					        	<div style="margin-left:10px;font-size:16px;min-height:300px;">
					        		<table id="browse_sub_table_ct" class="table table-bordered table-hover dataTable cell_infor_table_detail" style="width:100%;">
											<thead >
												<tr>
													<th>Cancer</th>
													<th>Tissue</th>
													<th>No. of Bacteria </th>	
													<th>No. of Spot </th>	
													<th>No. of Cell type</th>
													<th>Publication</th>
													<th style="width:80px !important;">Detail</th>
												</tr>
											</thead>
								</table>
					        	</div>
					        </div> 
<!-- /// -->
                                </li>
                               
                            </ul>
               </div>
               
               <div class="widget widget-post">
                            <h6 class="title">Gene</h6>
                            <ul>
                                <li>
                                    <table >
							            	<tr> 
							            		<td><p class="search_p">  Search for the gene of interest</p> </td>
							            		<td style="width:10px;"></td>
							            		<td> <button class="botton-search" style="border:none;"  onclick="example_gene('COL3A1')">e.g. COL3A1 </button></td>
							            	</tr>
							            </table>
<!--                                         /// -->
									<div class="col-md-12 col-sm-12" style="margin-bottom:20px;">
					                	<table class="" style="width:100%;margin-top:10px;margin-left:0%;"  >
							               <tr>
							                <td ><span><input id="datasets_gene" name="datasets_gene" class="input-use input2" type="search" placeholder=" e.g. COL3A1  " ></span></td>
							                <td style="width:20px;"></td>
							                <td style="width:150px; "><button class="btn btn-danger botton-submit" style="font-size:20px; font-weight:550;" onclick="dasetsSearch_gene()"><i class="fa-solid fa-magnifying-glass-arrow-right panel-li" ></i> Search</button></td>
							            	</tr>
							            </table>
							            
					                </div>
					                
					                <div id="browse_sub_father_gene" style="display:none;padding: 20px;">
                              
					        	<div style="margin-left:10px;font-size:16px;min-height:300px;">
					        		<table id="browse_sub_table_gene" class="table table-bordered table-hover dataTable cell_infor_table_detail" style="width:100%;">
											<thead >
												<tr>
													<th>Cancer</th>
													<th>Tissue</th>
													<th>No. of Bacteria </th>	
													<th>No. of Spot </th>	
													<th>No. of Cell type</th>
													<th>Publication</th>
													<th style="width:80px !important;">Detail</th>
												</tr>
											</thead>
								</table>
					        	</div>
					        </div> 
<!-- /// -->
                                </li>
                               
                            </ul>
               </div>
                        
             
        </div>
    </section>
  
  


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
    
	<script src="js/jquery-ui.js"></script>
	
  	<script type="text/javascript" language="javascript" src="js/d3.min.js"></script>
  	<script type="text/javascript" language="javascript" src="js/jquery.dataTables.min.js"></script>
	<script type="text/javascript" language="javascript" src="js/dataTables.buttons.min.js"></script>
	<script type="text/javascript" src="js/font1.js"></script>
	<script src="js/xm-select.js" ></script>
  	<script type="text/javascript" language="javascript" src="js/page/search.js"></script>
  	
  	
</body>
<script  type="text/javascript" charset="utf-8">

//datasets_cancer


	
//////////


</script>
</html>