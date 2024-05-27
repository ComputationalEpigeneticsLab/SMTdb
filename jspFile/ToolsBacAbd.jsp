<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tools</title>

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



.input-use{height:50px;width:100%;margin-left:0;padding: 0.375rem 0.75rem;font-size: 1rem;line-height: 1.5;color: #495057;background-color: #fff;background-clip: padding-box;border: 1px solid #ced4da;border-radius: 0.25rem;box-shadow: inset 0 0 0 transparent;font-size:18px;padding-bottom: 10px;}
.input2{box-shadow: rgb(221, 221, 221) 0px 1px 3px inset;    box-sizing: border-box;    padding: 0.5em 0.6em;    border-width: 1px;    border-style: solid;    border-color: rgb(204, 204, 204);    border-image: initial;}
.botton-search{  font-size:20px !important;background:#f6f6f9;color:black;border-radius:5px;border: 1px solid #f6f6f9;height:55px;color: #6f87aa;text-transform: none !important;text-align:left;margin-right:5px; background:white;}
.botton-submit{background:white;color:black;border-radius:10px;border-color:#ced4da;font-size:18px;height:55px;}
html *::first-letter {
    text-transform: none;
}
.summary-td1 {
  width: 50%;
  font-weight: 600;
  font-size: 20px !important;
  font-family: 'Roboto', sans-serif !important;
}
.titleFont1{font-size:30px; }
.titleFont2{font-size:28px;font-weight:600; }
.titleFont3{font-size:22px; }
.table_title{font-size:20px;font-weight:600;}

</style>

<body>
<!--     <div class="preloader"> -->
<!--         <div class="preloader-inner"> -->
<!--             <img src="./assets/images/preloader-2.gif" alt=""> -->
<!--         </div> -->
<!--     </div> -->
<div id="loading1">
	<div class="la-ball-clip-rotate-multiple la-3x" style="width:100%;height:100%;color: #f68f6f;margin: auto;  position: absolute;  top: 0; left: 0; bottom: 0; right: 0; z-index:9999999999999999999999;background-color:white; ">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
</div>
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
                        <a  href="search.jsp">Search</a>

                    <li>
                        <a href="#0">Tools</a>
                        <ul class="submenu" style="width:300px;">
                            
                            <li>
                                <a class="active" href="ToolsBacAbd.jsp">Microbiota  abundance</a>
                            </li>
                            <li>
                                <a href="ToolsBacNeb.jsp">Spatial neighborhood</a>
                            </li>
                            <li>
                                <a href="ToolsBacCty.jsp">Cell types within HMAR</a>
                            </li>
                            <li>
                                <a href="ToolsBacCoExp.jsp"> Host microbiota   CEM  </a>
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
    <section class="faq-section padding-top padding-bottom" style="margin-top:50px;">
        <div class="container">
            <div class="section-header">
                <h2 class="title titleFont1" >Tools: Microbiota abundance</h2>
            </div>
            <div class="faq-wrapper" style="margin-top: -20px;" >
                <div class="col-md-12 col-sm-12">
		            <table class="" style="width:100%;margin-top:30px;margin-left:0%;"  >
		               <tr>
		               <td style="font-size:20px; font-weight:550;width:200px;" > Biological class  </td>
		               <td style="width:30%;"><span id="xml_bac_m" style="width:100%;">  </span ></td>
		               <td style="width:20px;"></td>
		               
		               <td style="font-size:20px; font-weight:550;width:120px;" >  Microbiota </td>
		               <td style="width:30%;"><span id="xml_bac_detail" style="width:100%;">  </span ></td>
		               
		                <td style="width:20px;"></td>
		                <td style="width:140px; "><button class="btn btn-danger botton-submit" style="font-size:23px; font-weight:550;" onclick="toolsBacSearch()"><i class="fa-solid fa-magnifying-glass-arrow-right panel-li" ></i> GO</button></td>
		               </tr>
		               
		            </table>
		            
		            
                </div>
            </div>
            
            
            <div id="ToolsSearchTable" style="display:none;padding: 10px;margin-top:30px;">
	        	<div style="font-size:18px;min-height:200px;">
	        		<table id="tools_sub_table" class="table table-bordered table-hover dataTable cell_infor_table_detail" style="width:100%;">
							<thead >
								<tr>
									<th>Cancer</th>
									<th>Tissue</th>
									<th>Class</th>
									<th>Microbiota </th>	
									<th>No. of Spot </th>
									<th>No. of Marker </th>		
									<th>No. of Cell type</th>
									<th>Publication</th>
									<th style="width:80px !important;">Detail</th>
								</tr>
							</thead>
				</table>
	        	</div>
	        </div>
        </div>
        
    </section>
    <!-- ========Faq-Section Ends Here ========-->


    <!-- ========Faq-Section Starts Here ========-->
    <section class="faq-section padding-bottom" style="margin-top:-100px;">
        <div class="container">
        <div class="faq-wrapper" style="margin-top:30px; box-shadow: rgb(221, 221, 221) 1px 1px 1px 3px; background:white; padding:20px;">
			<div class="item">
                            <h5 class="title titleFont2" id="bac_infor_loc">Abundance of microbiota in slice </h5>
                            <div class="row " style="margin-top:30px;">
                            	<div class=" col-12 col-md-12 col-lg-12 " id="width_id">
				            		<div class="layui-tab">
										  <ul class="layui-tab-title">
										    <li class="layui-this" style="font-size:22px;font-weight:550;">Spatial Annotation</li>
										    <li  style="font-size:22px;font-weight:550;">Microbiota Distribution</li>
										    <li style="font-size:22px;font-weight:550;">Microbiota Expression</li>
										  </ul>
										  
										  <div class="layui-tab-content">
<!-- 1. -->
										  <div class="layui-tab-item layui-show">
										    	<div class="row " style="margin-top:20px;">
											    	<div class=" col-12 col-md-12 col-lg-12 " >
										    			<p class="table_title"> (1)  Spot spatial transcriptome clusters </p>
										    		</div>
										    		
											    	<div class=" col-5 col-md-5 col-lg-5 " id="base_spatial_HE_father" style="text-align:center;">
											    		<div style="height:40px;width:100%;"></div>
					                            		<p style="font-size:20px;font-weight:500;margin-bottom:40px;">H&E Stain</p>
						                        		<img  id="base_spatial_HE"  alt="H&E image" src=""  height=""  style="width:300px;height:400px;">
											    	</div>
											    	
											    	<div class=" col-6 col-md-6 col-lg-6 " >
											    		<div id="base_spatial" ></div>
											    	</div>
<!-- ////			////	////	////	////	////	////	////	////	////									    	 -->
													<div class=" col-12 col-md-12 col-lg-12 " style="margin-bottom:30px">
										    			<p class="table_title"> (2) Markers of spatial transcriptome clusters </p>
										    		</div>
										    		<div class=" col-12 col-md-12 col-lg-12 " >
					                            			<table id="st_marker_table" class="table table-bordered table-hover dataTable cell_infor_table_detail" style="width:100%;">
																<thead >
																	<tr class="table_head1">
																		<th>Cluster</th>
																		<th>Gene</th>
																		<th>Pct.1</th>
																		<th>Pct.2 </th>	
																		<th>FC</th>	
																		<th>P Value</th>	
																		<th>FDR</th>							  			
																	</tr>
																</thead>
															</table>
					                            	</div>
<!-- ////			////	////	////	////	////	////	////	////	////									    	 -->
													
													<div class=" col-12 col-md-12 col-lg-12" >
						                            	<table style="margin-top:10px;margin-bottom:-10px;">
							                                <tr>
							                                	<td class="table_title">Marker </td>
							                                	<td style="width:20px;"></td>
							                                	<td><div id="base_spatial_violin_cluster_select" class="xmselect_left_cluster"> </div></td>
								                                <td style="width:20px;"></td>
							                                	<td><div id="base_spatial_violin_select" class="xmselect_left"> </div></td>
							                                </tr>
							                            </table>
						                            </div>
						                            <div class=" col-12 col-md-12 col-lg-12" >
							                        	<div id="base_spatial_father" style="display:none;">No available results.</div>
							                        	<div id="base_spatial_violin" style=""></div>
							                        </div>
<!-- ////			////	////	////	////	////	////	////	////	////									    	 -->
													<div class=" col-12 col-md-12 col-lg-12 " style="margin-bottom:30px">
										    			<p class="table_title"> (3) Spot deconvolution </p>
										    		</div>
													<div class=" col-12 col-md-12 col-lg-12 " >
					                                	<table style="margin-top:5px;">
					                                		<tr>
					                                			<td class="table_title">Click a spot below </td>
					                                			<td style="width:20px;"></td>
					                                			<td > <div id="deconvolution_select" class="xmselect_left" style="width:300px;"> </div></td>
					                                		</tr>
					                                	</table>
					                                </div>
					                                <div class=" col-6 col-md-6 col-lg-6 " >
						                        		<div id="dev_spatial_plot" ></div>
						                        	</div>
						                        		
						                        	<div class=" col-6 col-md-6 col-lg-6 " >
						                        		<div id="spatial_spot_celltype" ></div>
						                        	</div>
<!-- ////			////	////	////	////	////	////	////	////	////									    	 -->
													<div class=" col-12 col-md-12 col-lg-12 " style="margin-bottom:30px">
										    			<p class="table_title"> (4)  SVG in spatial transcriptome clusters </p>
										    		</div>
													<div class=" col-12 col-md-12 col-lg-12 " >
					                        			
					                        			<table id="svg_table" class="table table-bordered table-hover dataTable cell_infor_table_detail" style="width:100%;">
															<thead >
																<tr class="table_head1">
																	<th>Gene</th>
																	<th title="Moran’s I computes an overall spatial autocorrelation and gives a statistic that measures the dependence of a feature on spatial location">Moran's I</th>
																	<th>P Value </th>	
																	<th>FDR</th>	
																	<th title="As a marker gene for certain clusters in spatial transcriptomics data in same cancer">Enriched Spot Cluster</th>
																	<th title="Click to view expression below">View</th>							  			
																</tr>
															</thead>
														</table>
					                        			</div>
					                        		
					                        		<div class=" col-6 col-md-6 col-lg-6 "  >
					                        			<div id="svg_distribution" ></div>
					                        		</div>
					                        		<div class=" col-6 col-md-6 col-lg-6 "  >
					                        			<div id="svg_violin_father" style="display:none;">No available results!</div>
					                        			<div id="svg_violin" ></div>
					                        		</div>
<!-- ////			////	////	////	////	////	////	////	////	////									    	 -->
<!-- ////			////	////	////	////	////	////	////	////	////									    	 -->
<!-- ////			////	////	////	////	////	////	////	////	////									    	 -->															                            	
									            </div>
										    </div>
<!-- 2. -->
										    <div class="layui-tab-item ">
										    	<div class="row ">
										    		<div class=" col-12 col-md-12 col-lg-12 " style="margin-bottom:30px">
										    			<p class="table_title"> (1) Distribution of microbiota </p>
										    		</div>
													<div class=" col-12 col-md-12 col-lg-12" >
				                            			<table style="margin-top:10px;margin-bottom:10px;">
					                                			<tr>
					                                			<td class="table_title">Microbiota </td>
					                                				<td style="width:20px;"></td>
					                                				<td><div id="xml_bac" class="xmselect_left_cluster" style="width:400px;"> </div></td>
					                                			</tr>
					                                		</table>
				                            		</div>
<!-- ////			////	////	////	////	////	////	////	////	////									    	 -->	
													<div class=" col-5 col-md-5 col-lg-5 " >
											    		<div id="base_cluster2" ></div>
											    	</div>
											    				                            		
				                            		<div class=" col-7 col-md-7 col-lg-7 " >
											    		<div id="base_bac" ></div>
											    	</div>
											    	<div class=" col-12 col-md-12 col-lg-12" style="margin-top:0px;margin-bottom:20px;">
						                        			<div id="base_bac_stat" ></div>
						                        	</div>
						                        	<div class=" col-12 col-md-12 col-lg-12 " style="margin-bottom:30px">
										    			<p class="table_title"> (2) Abundance of microbiota in spots </p>
										    		</div>
						                        	<div class=" col-12 col-md-12 col-lg-12 " >
					                        			<div id="" style="max-width:98%;overflow:auto;">
					                        			    <table id="base_bac_table" class="table table-bordered table-hover dataTable cell_infor_table_detail" style="width:100%;">
															</table>   
														</div> 
											 		</div>
									           </div>	
										    </div>
										    
<!-- 3. -->										    
										    <div class="layui-tab-item">
										    	<div class="row ">
										    	<div class=" col-12 col-md-12 col-lg-12 " style="margin-bottom:30px">
										    			<p class="table_title"> (1) Expression of microbiota </p>
										    		</div>
										    		<div class=" col-12 col-md-12 col-lg-12" >
				                            			<table style="margin-top:10px;margin-bottom:10px;">
					                                			<tr>


					                                				<td><div id="bac_exp_xml_left" class="xmselect_left_cluster"> </div></td>
						                                			<td style="width:20px;"></td>
					                                				<td><div id="bac_exp_xml_right" class="xmselect_left" style="width:500px;"> </div></td>
					                                			</tr>
					                                	</table>
				                           			 </div>
				                           			 <div class=" col-12 col-md-12 col-lg-12 " style="margin-bottom:20px;">
					                        			<div id="" style="max-width:98%;overflow:auto;">
					                        			    <table id="bac_exp_table" class="table table-bordered table-hover dataTable cell_infor_table_detail" style="width:98%;">
															</table>   
														</div> 
											 		</div>
											 		
											 		<div class=" col-6 col-md-6 col-lg-6 " >
											    		<div id="bac_exp_color" ></div>
											    	</div>
											    	
											    	<div class=" col-6 col-md-6 col-lg-6 " >
											    		<div id="bac_exp_bar" ></div>
											    	</div>
									            </div>
										    </div>
											 
											 
										  </div>
									
									</div>
				            	</div>
				            </div>
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
	
  	<script type="text/javascript" language="javascript" src="js/page/toolsAbd.js"></script>
  	
  	
</body>
<script  type="text/javascript" charset="utf-8">


//////////

</script>
</html>