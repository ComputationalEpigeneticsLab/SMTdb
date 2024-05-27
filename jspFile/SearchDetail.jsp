<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>SMTdb</title>
	<link href="css/font-awesome/css/font-awesome.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/all.min.css">
    <link rel="stylesheet" href="assets/css/animate.css">
    <link rel="stylesheet" href="assets/css/nice-select.css">
    <link rel="stylesheet" href="assets/css/owl.min.css">
    <link rel="stylesheet" href="assets/css/swiper.min.css">
    <link rel="stylesheet" href="assets/css/magnific-popup.css">
    <link rel="stylesheet" href="assets/css/odometer.css">
    <link rel="stylesheet" href="assets/css/flaticon.css">
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" type="text/css" href="layui/css/layui.css" />
    <link rel="stylesheet" type="text/css" href="css/jquery.dataTables.min.css">
	<link rel="stylesheet" type="text/css" href="css/buttons.dataTables.min.css">
	<link rel="stylesheet" href="css/style-ww.css">
    <link rel="shortcut icon" href="assets/images/favicon.png" type="image/x-icon">
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
.titleFont1{font-size:30px; }
.titleFont2{font-size:28px;font-weight:600; }
.titleFont3{font-size:22px; }
.table_title{font-size:20px;font-weight:600;}
.cell_infor_table_detail{font-family: 'Roboto', sans-serif !important;font-size:16px !important;text-align:left !important;}
.summary-td1 {
  width: 50%;
  font-weight: 600;
  font-size: 20px !important;
  font-family: 'Roboto', sans-serif !important;
}
.style_hr{border: none;height: 2px;background-color:;box-shadow: 0px 0px 10px 2px rgba(46, 25, 204, 0.1);}


</style>

<body data-spy="scroll" data-offset="170" data-target=".privacy-sidebar">
<input name="dataSetID"  id="dataSetID" type="hidden" value=<%=request.getParameter("dataSetID") %> >
<input name="species"  id="species" type="hidden" value=<%=request.getParameter("species") %> >
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
                        <a href="browse.jsp">Browse</a>
                    </li>
                    <li>
                        <a class="active"  href="search.jsp">Search</a>

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
    <!-- ========Header-Section Ends Here ========-->

 

    <!-- ========Privacy-Section Starte Here ========-->
    <section class="privacy-section padding-bottom padding-top">
    	
    	<div class="section-header"  style="margin-top:60px;margin-bottom:50px;">
                <h2 class="title titleFont1">Slice details</h2>
            </div>
    	
        <div class="container" style="max-width:1700px;">
            <div class="row">
                <div class="col-md-2 col-lg-2 col-xl-2">
                    <div class="privacy-sidebar">
                        <ul>
                            <li>
                                <a class="nav-link active titleFont2" href="#overview">Overview</a>
                            </li>
                            <li>
                                <a class="nav-link titleFont2" href="#slice_anno_loc">Slice annotation</a>
                            </li>
                            <li>
                                <a class="nav-link titleFont2" href="#bac_infor_loc">Abundance of microbiota  </a>
                            </li>
                            <li>
                                <a class="nav-link titleFont2" href="#bac_neb_loc" title="Spatial Neighborhood Of Microbiota"> Spatial neighborhood </a>
                            </li>
                            <li>
                                <a class="nav-link titleFont2" href="#function_b_h" ><font title="Function Of High Microbiota Abundance Region">Function Of HMAR</font>  </a>
                            </li>
                            <li>
                                <a class="nav-link titleFont2" href="#enrich_b_h" ><font title=" Cell Types Within High Microbiota Abundance Region ">Cell Types within HMAR</font>  </a>
                            </li>
                            
                           
                            <li id="p7_left">
                                <a class="nav-link titleFont2" href="#h_b_cooc" ><font title="Host Microbiota Co-Expression Module">Host Microbiota CEM</font>  </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                               
                <div class="col-md-9 col-lg-9 col-xl-9" >
                    <div class="privacy-content" style="max-width:1500px;">
                        <div class="item">
                            <h5 class="title titleFont2" id="overview">I. overview</h5>
                            
                            <div class="row ">
				            	<div class=" col-12 col-md-12 col-lg-12 " id="width_id">
				                	<div class="table-responsive">
				                    	<table class="table table-striped" style="font-size:18px !important;font-family: 'Roboto', sans-serif !important;">
				                        	<tbody>
				                                    	<tr>
				                                            <td class="summary-td1">Species</td>
				                                            <td id="overview_species"> -</td>
				                                        </tr>
				                                        <tr>
				                                            <td class="summary-td1">Disease</td>
				                                            <td id="overview_disease"> -</td>
				                                        </tr>
				                                        <tr>
				                                            <td class="summary-td1">Technology</td>
				                                            <td id="overview_technology"> -</td>
				                                        </tr>
				                                        <tr>
				                                            <td class="summary-td1">Number of spots </td>
				                                            <td id="overview_spot_num"> -</td>
				                                        </tr>
				                                         <tr>
				                                            <td class="summary-td1">Number of microbiota (genus)</td>
				                                            <td id="overview_bac_num"> -</td>
				                                        </tr>
				                                        <tr>
				                                            <td class="summary-td1">Number of  markers</td>
				                                            <td id="overview_marker_num"> -</td>
				                                        </tr>
				                                         <tr>
				                                            <td class="summary-td1">Number of spatial neighborhood</td>
				                                            <td id="overview_st_neighborhood"> -</td>
				                                        </tr>
				                                        <tr>
				                                            <td class="summary-td1">Paired single-cell data</td>
				                                            <td id="overview_pair_sc"> -</td>
				                                        </tr>
				                                       
				                                        <tr>
				                                            <td class="summary-td1" > Publication</td>
				                                            <td title="paper org"> <a style="color:#FF9A18" target="_blank" id="overview_publication_http" href="" ></a> </td>
				                                        </tr>
				                             </tbody>
				                        </table>
				                     </div>
				                </div>
				            </div>
                        </div>
                        
                        </div>
<!-- part2                         -->
                       <div class="privacy-content" style="max-width:1500px; margin-top:5px;">
                        <div class="item">
                            <h5 class="title titleFont2" id="slice_anno_loc">II. Slice Annotation</h5>
	                            <div class="layui-tab">
								  <ul class="layui-tab-title titleFont3">
								    <li class="layui-this">Spot Annotation</li>
								    <li>Spatial Co-occurred Module</li>
								    <li>Spot Deconvolution</li>
								    <li title="Spatial Variable Gene"> SVG</li>
								   
								  </ul>
								
								  <div class="layui-tab-content">
								    <div class="layui-tab-item layui-show">
								    	<div class="row ">
								    		<div class=" col-12 col-md-12 col-lg-12 " >
								    			<p class="table_title"> (1) Spot spatial transcriptome clusters </p>
								    		</div>
								    		
									    	<div class=" col-5 col-md-5 col-lg-5 " id="base_spatial_HE_father" style="text-align:center;">
									    		<div style="height:40px;width:100%;"></div>
			                            		<p style="font-size:20px;font-weight:500;margin-bottom:40px;">H&E Stain</p>
				                        		<img  id="base_spatial_HE"  alt="H&E image" src=""  height=""  style="width:300px;height:400px;">
									    	</div>
									    	
									    	<div class=" col-6 col-md-6 col-lg-6 " >
									    		<div id="base_spatial" ></div>
									    	</div>
									    	<div class=" col-12 col-md-12 col-lg-12" style="margin-top:-50px;">
				                        			<div id="base_spatial_stat" ></div>
				                        	</div>
				                        	
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
									    	<div class=" col-12 col-md-12 col-lg-12" >
					                        	<div id="base_spatial_marker_stat" ></div>
					                        </div>
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
							            	
						            	</div>
								    </div>
								    
								    <div class="layui-tab-item">
								    	<div class="row " id="ls_coooc">
								    		<div class=" col-12 col-md-12 col-lg-12 ">
								    		<div class=" col-12 col-md-12 col-lg-12 " style="margin-bottom:30px">
								    			<p class="table_title"> (1) Spatial co-expression module in slices </p>
								    		</div>
								    			<table id="st_gene_coocc_table" class="table table-bordered table-hover dataTable cell_infor_table_detail" style="width:98%;">
														<thead >
															<tr class="table_head1">
																<th>Source</th>
																<th>Target</th>
																<th>Corr</th>
																<th>Module</th>	
																<th>View</th>							  			
															</tr>
														</thead>
													</table>
								    		</div>
								    		
								    		<div class=" col-12 col-md-12 col-lg-12 ">
								    			<div id="river_gene_coocc"></div>
								    		</div>
						            	</div>
								    </div>
								    <div class="layui-tab-item">
										<div class="row ">
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
								    		
						            	</div>
									</div>
								    <div class="layui-tab-item">
								    	<div class="row ">
								    		<div class=" col-12 col-md-12 col-lg-12 " >
				                        			<p class="table_title">(1) SVG in spatial transcriptome clusters </p>
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
				                        		<div class=" col-12 col-md-12 col-lg-12 " style="margin-bottom:30px">
								    			<p class="table_title">  (2) Expression of SVG in slices and  clusters </p>
								    			</div>
				                        		<div class=" col-6 col-md-6 col-lg-6 "  >
				                        			<div id="svg_distribution" ></div>
				                        		</div>
				                        		<div class=" col-6 col-md-6 col-lg-6 "  >
				                        			<div id="svg_violin_father" style="display:none;">No available results!</div>
				                        			<div id="svg_violin" ></div>
				                        		</div>
						            	</div>
								    </div>
								    
								  </div>
							</div>
                            
                        </div>
                        </div>
<!-- part3                       -->
                       <div class="privacy-content" style="max-width:1500px; margin-top:5px;">
                        <div class="item">
                            <h5 class="title titleFont2" id="bac_infor_loc">III. Abundance of microbiota  in slice </h5>
                            <div class="row ">
                            	<div class=" col-12 col-md-12 col-lg-12 " >
				            		<div class="layui-tab">
										  <ul class="layui-tab-title">
										    <li class="layui-this">Microbiota  Distribution</li>
										    <li>Microbiota  Expression</li>
<!-- 										    <li>Microbiota Co-occurrence Module</li> -->
										  </ul>
										  <div class="layui-tab-content">
										    <div class="layui-tab-item layui-show">
										    	<div class="row ">
										    	<div class=" col-12 col-md-12 col-lg-12 " style="margin-bottom:30px">
								    				<p class="table_title">(1)  Distribution of microbiota </p>
								    			</div>
													<div class=" col-12 col-md-12 col-lg-12" >
				                            			<table style="margin-top:10px;margin-bottom:5px;">
					                                			<tr>
<!-- 					                                				<td class="table_title">Select a metagenome type </td> -->
					                                				<td style="width:20px;"></td>
					                                				<td><div id="xml_bac" class="xmselect_left_cluster" style="width:400px;"> </div></td>
<!-- 						                                			<td style="width:20px;"></td> -->
<!-- 					                                				<td><div id="base_spatial_violin_select" class="xmselect_left"> </div></td> -->
					                                			</tr>
					                                		</table>
				                            		</div>
				                            		<div class=" col-5 col-md-5 col-lg-5 " id="" style="text-align:center;">
											    		<div id="base_bac_cluster2" ></div>
											    	</div>
				                            		<div class=" col-7 col-md-7 col-lg-7 " >
											    		<div id="base_bac" ></div>
											    	</div>
											    	<div class=" col-12 col-md-12 col-lg-12" style="margin-top:-20px;margin-bottom:30px;">
						                        			<div id="base_bac_stat" ></div>
						                        	</div>
						                        	
						                        	<div class=" col-12 col-md-12 col-lg-12 " style="margin-bottom:30px">
									    				<p class="table_title">(2)  Abundance of microbiota in spots</p>
									    			</div>
						                        	<div class=" col-12 col-md-12 col-lg-12 " >
					                        			<div id="" style="max-width:98%;overflow:auto;">
					                        			    <table id="base_bac_table" class="table table-bordered table-hover dataTable cell_infor_table_detail" style="width:100%;">
															</table>   
														</div> 
											 		</div>
									           </div>	
										    </div>
										    
										    <div class="layui-tab-item">
										    	<div class="row ">
										    	<div class=" col-12 col-md-12 col-lg-12 " style="margin-bottom:30px">
								    				<p class="table_title">(1)  Expression of microbiota </p>
								    			</div>
										    		<div class=" col-12 col-md-12 col-lg-12" >
										    		
				                            			<table style="margin-top:10px;margin-bottom:10px;">
					                                			<tr>
<!-- 					                                				<td class="table_title">Select a AAAA </td> -->
<!-- 					                                				<td style="width:20px;"></td> -->

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
<!-- 											 <div class="layui-tab-item"> -->
<!-- 										    	<div class="row "> -->
										    		
<!-- 											    	<div class=" col-12 col-md-12 col-lg-12 " > -->
<!-- 									            		<img alt="" src="0_files/EXAMPLE/1.3.png" style="width:98%;"> -->
<!-- 									            	</div> -->
<!-- 									            	<div class=" col-12 col-md-12 col-lg-12 " > -->
<!-- 									            		<img alt="" src="0_files/EXAMPLE/2.5.png" style="width:98%;"> -->
<!-- 									            	</div> -->
<!-- 								            		<div class=" col-6 col-md-6 col-lg-6 " > -->
<!-- 									            		<img alt="" src="0_files/EXAMPLE/2.2.png" style="width:98%;"> -->
<!-- 									            	</div> -->
<!-- 									            	<div class=" col-6 col-md-6 col-lg-6  " > -->
<!-- 									            		<img alt="" src="0_files/EXAMPLE/1.2.3.png" style="width:98%;"> -->
<!-- 									            	</div> -->
<!-- 									            </div> -->
<!-- 										    </div> -->
										  </div>
									
									</div>
				            	</div>
				            </div>
                        </div>
                        </div>
<!-- part4                        -->
                       <div class="privacy-content" style="max-width:1500px; margin-top:5px;">
                        <div class="item">
                            <h5 class="title titleFont2" id="bac_neb_loc">IV.  Spatial Neighborhood of Microbiota </h5>
                            <div class="row ">
				            	<div class=" col-12 col-md-12 col-lg-12 " >
				            		<div class="layui-tab">
										  <ul class="layui-tab-title">
										    <li class="layui-this">Neighborhood Annotation</li>
										    <li>Distribution of microbiota </li>
										    <li>Differentially expressed microbiota</li>
										  </ul>
										
										  <div class="layui-tab-content">
										    <div class="layui-tab-item layui-show">
										    	<div class="row ">
				            						<div class=" col-12 col-md-12 col-lg-12 " >
										    			<p class="table_title"> (1) Spatial neighborhood of spots </p>
										    		</div>
										    		
										    		
											    	<div class=" col-5 col-md-5 col-lg-5 " id="" style="text-align:center;">
											    		<div style="height:40px;width:100%;"></div>
					                            		<p style="font-size:20px;font-weight:500;margin-bottom:40px;">H&E Stain</p>
						                        		<img  id="base_spatial_HE_neb2"  alt="H&E image" src=""  height=""  >
											    	</div>
											    	
											    	<div class=" col-7 col-md-7 col-lg-7 " >
											    		<div id="base_spatial_neb" ></div>
											    	</div>
											    	<div class=" col-1 col-md-1 col-lg-1 " ></div>
										    		<div class=" col-10 col-md-10 col-lg-10 " style="margin-bottom:10px">
										    			<div id="st_neb_stat_bar"></div>
										    		</div>
										    		
										    		<div class=" col-12 col-md-12 col-lg-12 " id="st_neb_marker_all" style="display:block;">
												    	<div class=" col-12 col-md-12 col-lg-12 " style="margin-bottom:30px">
											    			<p class="table_title"> (2) Differently expressed genes of neighborhood </p>
											    		</div>
												    	<div class=" col-12 col-md-12 col-lg-12 " >
					                            			<table id="st_marker_table_neb" class="table table-bordered table-hover dataTable cell_infor_table_detail" style="width:100%;">
																<thead >
																	<tr class="table_head1">
																		<th>Neighborhood</th>
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
					                            		
					                            		<div class=" col-12 col-md-12 col-lg-12" >
					                            		
					                            			<table style="margin-top:10px;margin-bottom:-10px;">
						                                			<tr>
						                                				<td class="table_title">Marker  </td>
						                                				<td style="width:20px;"></td>
						                                				<td><div id="base_spatial_violin_neb_select" class="xmselect_left_cluster"> </div></td>
							                                			<td style="width:20px;"></td>
						                                				<td><div id="base_spatial_violin_marker_select" class="xmselect_left"> </div></td>
						                                			</tr>
						                                		</table>
					                            			
					                            		
							                            </div>
							                            <div class=" col-12 col-md-12 col-lg-12" >
								                        			<div id="base_spatial_neb_father" style="display:none;">No available results.</div>
								                        			<div id="base_spatial_neb_violin" style=""></div>
								                        </div>
							                        
							                        </div>
				            					</div>
										    </div>
										    
										    
										    <div class="layui-tab-item">
										    	<div class="row ">
										    	<div class=" col-12 col-md-12 col-lg-12 " style="margin-bottom:30px">
									    			<p class="table_title">(1)  Distribution of microbiota in slice</p>
									    		</div>
										    		<div class=" col-12 col-md-12 col-lg-12" >
				                            			<table style="margin-top:10px;margin-bottom:10px;">
					                                			<tr>
<!-- 					                                				<td class="table_title">Select a AAAA </td> -->
<!-- 					                                				<td style="width:20px;"></td> -->
					                                				<td><div id="bac_neb_xml_left" class="xmselect_left_cluster"> </div></td>
						                                			<td style="width:20px;"></td>
					                                				<td><div id="bac_neb_xml_right" class="xmselect_left" style="width:500px;"> </div></td>
					                                			</tr>
					                                			
					                                	</table>
				                           			 </div>
				                           			 <div class=" col-6 col-md-6 col-lg-6 " >
												    		<div id="bac_neb_org" ></div>
												     </div>
				                           			 <div class=" col-6 col-md-6 col-lg-6 " >
											    		<div id="bac_neb_color" ></div>
												     </div>
												     
												    <div class=" col-1 col-md-1 col-lg-1 " ></div>
												    <div class=" col-10 col-md-10 col-lg-10 "  style="margin-top:-20px;">
											    		<div id="bac_neb_barplot_1" ></div>
												     </div>
												     
												     <div class=" col-12 col-md-12 col-lg-12 " style="margin-bottom:30px">
										    			<p class="table_title">(2)  Expression of gene in neighborhood </p>
										    		</div>
										    		<div class=" col-12 col-md-12 col-lg-12" >
				                            			<table style="margin-top:10px;margin-bottom:10px;">
					                                			<tr>
					                                				<td class="table_title">Gene </td>
					                                				<td style="width:20px;"></td>
					                                				<td><div id="bac_neb_gene_xml_left" class="xmselect_left_cluster"> </div></td>
						                                			
					                                			</tr>
					                                			
					                                	</table>
				                           			 </div>
				                           			 
				                           			 <div class=" col-6 col-md-6 col-lg-6 " >
												    		<div id="bac_neb_org2" ></div>
												     </div>
				                           			 <div class=" col-6 col-md-6 col-lg-6 " >
											    		<div id="bac_neb_gene_color" ></div>
												     </div>
				                           			 
										    		
												     
												     	
										    	</div>
										    </div>
										    
										    
										    <div class="layui-tab-item">
										    	<div class="row " id="Difference_expression_of_metagenome">
										    	<div class=" col-12 col-md-12 col-lg-12 " style="margin-bottom:30px">
									    			<p class="table_title"> (1) Differential expression of microbiota in slices</p>
									    		</div>
													<div class=" col-12 col-md-12 col-lg-12" >
				                            			<table style="margin-top:10px;margin-bottom:10px;">
					                                			<tr>
<!-- 					                                				<td class="table_title">Metagenome  </td> -->
					                                				<td style="width:20px;"></td>
					                                				<td><div id="xml_bac_neb_diff" class="xmselect_left_cluster" style="width:300px;"> </div></td>
					                                			</tr>
					                                		</table>
				                            		</div>
				                            		
				            						<div class=" col-12 col-md-12 col-lg-12 " style="margin-bottom:30px;">
				                            			<table id="bac_neb_diff_table" class="table table-bordered table-hover dataTable cell_infor_table_detail" style="width:100%;">
															<thead >
																<tr class="table_head1">
																	<th>Metagenome type</th>
																	<th>Mean exp1</th>
																	<th>Mean exp2</th>
																	<th>LogFC </th>	
																	<th>P value</th>	
																	<th>FDR</th>	
																	<th>Group</th>							  			
																</tr>
															</thead>
														</table>
				                            		</div>
				                            		
				            						<div class=" col-4 col-md-4 col-lg-4 " >
				            							<div id="volcano_Mal_Bdy"></div>
				            						</div>
				            						
				            						<div class=" col-4 col-md-4 col-lg-4 " >
				            							<div id="volcano_Mal_nMal"></div>
				            						</div>
				            						<div class=" col-4 col-md-4 col-lg-4 " >
				            							<div id="volcano_Bdy_nMal"></div>
				            						</div>
				            						
										    	</div>
										    </div>
										  </div>
									
									</div>
				            	</div>
				            </div>
                        </div>
                        </div>
<!-- part5                         -->
                       <div class="privacy-content" style="max-width:1500px; margin-top:5px;">
                        <div class="item">
                            <h5 class="title titleFont2" id="function_b_h">V. Function of high microbiota abundance region</h5>
                            <div class="row ">
				            	<div class=" col-12 col-md-12 col-lg-12 " >
				            		<div class="layui-tab">
										  <ul class="layui-tab-title">
										    <li class="layui-this">Malignant region</li>
										    <li>Boundary region</li>
										  </ul>
										
										  <div class="layui-tab-content">
										    <div class="layui-tab-item layui-show">
										    <div id="bac_f_m">
										    	<div class="row ">
											    	<div class=" col-12 col-md-12 col-lg-12 " style="margin-bottom:30px">
									    				<p class="table_title"> (1) Differential expression gene of microbiota in malignant region</p>
									    			</div>
									    				<div class=" col-12 col-md-12 col-lg-12 " >
					                            			<table id="bac_fun_mal_diff_table" class="table table-bordered table-hover dataTable cell_infor_table_detail" style="width:100%;">
																<thead >
																	<tr class="table_head1">
																		<th>Gene</th>
																		<th>Mean exp1</th>
																		<th>Mean exp2</th>
																		<th>LogFC </th>	
																		<th>P value</th>	
																		<th>FDR</th>	
																		<th>State</th>							  			
																	</tr>
																</thead>
															</table>
					                            		</div>
											    		<div class=" col-6 col-md-6 col-lg-6 " >
											    			<div id="bac_fun_color_mal"></div>
											    		</div>
											    		<div class=" col-6 col-md-6 col-lg-6 " >
											    			<div id="bac_fun_gene_diff_mal_volcano"></div>
											    		</div>
											    		<div class=" col-12 col-md-12 col-lg-12 " style="margin-bottom:30px">
									    				<p class="table_title"> (2) Enriched cancer hallmarker in high microbiota abundance region</p>
									    				</div>
									    				<div class=" col-12 col-md-12 col-lg-12 " >
					                            			<table id="bac_fun_mal_phyper_table" class="table table-bordered table-hover dataTable cell_infor_table_detail" style="width:100%;">
																<thead >
																	<tr class="table_head1">
																		<th>Hallmarker</th>
																		<th>GSVA Score</th>
																		<th>P value</th>	
																		<th>FDR</th>	
																		<th>Gene</th>							  			
																	</tr>
																</thead>
															</table>
					                            		</div>
					                            		
					                            		
					                            		<div class=" col-12 col-md-12 col-lg-12 " style="margin-top:10px;margin-bottom:20px">
									    					<p class="table_title" > GSVA  probability scores </p>
									    				</div>
									    				
					            						<div class=" col-12 col-md-12 col-lg-12 " >
					            							<div id="bac_fun_heatmap_mal"></div>
					            						</div>
					            						<p>* for hypergeometric test between differential expression gene of microbiota in malignant region and signatures for each cancer hallmarks (FDR &lt 0.05 )</p>
											    	
											    	</div>
				            					</div>
										    </div>
										    
										    <div class="layui-tab-item">
										     <div id="bac_f_b">
										    	<div class="row " >
										    			<div class=" col-12 col-md-12 col-lg-12 " style="margin-bottom:30px">
										    				<p class="table_title"> (1) Differential expression gene of microbiota in boundary region</p>
										    			</div>
										    		
										    			<div class=" col-12 col-md-12 col-lg-12 " >
					                            			<table id="bac_fun_bdy_diff_table" class="table table-bordered table-hover dataTable cell_infor_table_detail" style="width:100%;">
																<thead >
																	<tr class="table_head1">
																		<th>Gene</th>
																		<th>Mean exp1</th>
																		<th>Mean exp2</th>
																		<th>LogFC </th>	
																		<th>P value</th>	
																		<th>FDR</th>	
																		<th>State</th>							  			
																	</tr>
																</thead>
															</table>
					                            		</div>
											    		<div class=" col-6 col-md-6 col-lg-6 " >
											    			<div id="bac_fun_color_bdy"></div>
											    		</div>
											    		<div class=" col-6 col-md-6 col-lg-6 " >
											    			<div id="bac_fun_gene_diff_bdy_volcano"></div>
											    		</div>
											    		
					                            		<div class=" col-12 col-md-12 col-lg-12 " style="margin-bottom:30px">
									    					<p class="table_title">(2) Enriched immune pathway in high microbiota abundance region </p>
									    				</div>
					            						<div class=" col-12 col-md-12 col-lg-12 " >
					                            			<table id="bac_fun_bdy_phyper_table" class="table table-bordered table-hover dataTable cell_infor_table_detail" style="width:100%;">
																<thead >
																	<tr class="table_head1">
																		<th>Pathway</th>
																		<th>GSVA Score</th>
																		<th>P value</th>	
																		<th>FDR</th>	
																		<th>Gene</th>							  			
																	</tr>
																</thead>
															</table>
					                            		</div>
					                            		
					                            		<div class=" col-12 col-md-12 col-lg-12 " style="margin-top:10px;margin-bottom:20px">
									    					<p class="table_title"> GSVA probability scores </p>
									    				</div>
					                            		<div class=" col-12 col-md-12 col-lg-12 " >
					            							<div id="bac_fun_heatmap_bdy"></div>
					            						</div>
					            						<p>* for hypergeometric test between differential expression gene of microbiota in boundary region and signatures  for each immune pathway (FDR &lt 0.05 )</p>
											    	
											    	</div>
										    	</div>
										    </div>
										    
										  </div>
									
									</div>
				            	</div>
				            </div>
                        </div>
                        </div>
<!-- part6                        -->
                       <div class="privacy-content" style="max-width:1500px; margin-top:5px;">
                         <div class="item">
                            <h5 class="title titleFont2" id="enrich_b_h">VI. Cell types within high microbiota abundance region</h5>
                            <div class="row ">
                            	
                            	<div class=" col-12 col-md-12 col-lg-12" >
				                     <table style="margin-top:10px;margin-bottom:10px;">
					                       <tr>
					                           <td class="table_title">Microbiota </td>
					                           <td style="width:20px;"></td>
					                           <td><div id="xml_bac_celltype" class="xmselect_left_cluster" style="width:400px;"> </div></td>
					                       </tr>
					                  </table>
				                </div>
				                
				                <div class=" col-12 col-md-12 col-lg-12 " style="margin-top:10px;margin-bottom:20px">
									 <p class="table_title">(1)  Deconvolution of spot  </p>
								</div>
				                <div class=" col-12 col-md-12 col-lg-12 " >
				            		<table id="bac_celltype_table" class="table table-bordered table-hover dataTable cell_infor_table_detail" style="width:98%;">
																
									</table>
				            	</div>
				            	
				            	<div class=" col-12 col-md-12 col-lg-12 " style="margin-top:10px;margin-bottom:20px">
									 <p class="table_title">(2)  Cell types associated with microbiota  </p>
								</div>
                            	<div class=" col-6 col-md-6 col-lg-6 " >
				            		<div id="bac_celltype_color"></div>
				            	</div>
				            	
				            	<div class=" col-6 col-md-6 col-lg-6 " >
				            		<div id="bac_celltype_radar"></div>
				            	</div>
				            	
				            	
				            </div>
                        </div>
                        </div>
<!-- part7                         -->
                       <div class="privacy-content" style="max-width:1500px; margin-top:5px;">
                        <div class="item" id="p7_c">
                        
                            <h5 class="title titleFont2" id="h_b_cooc">VII. Host microbiota co-expression module</h5>
                            <div class="row ">
                            <div class=" col-12 col-md-12 col-lg-12 " style="margin-top:10px;margin-bottom:30px">
									 <p class="table_title">(1)    Co-expression module of microbiota  and gene</p>
							</div>
								    		<div class=" col-12 col-md-12 col-lg-12 ">
								    			<table id="st_bac_gene_coocc_table" class="table table-bordered table-hover dataTable cell_infor_table_detail" style="width:98%;">
														<thead >
															<tr class="table_head1">
																<th>Microbiota</th>
																<th>Gene</th>
																<th>Corr</th>
																<th>P Value</th>
																<th>FDR</th>		
																<th>View</th>							  			
															</tr>
														</thead>
													</table>
								    		</div>
								    		
								    		<div class=" col-12 col-md-12 col-lg-12 ">
								    			<div id="river_bac_gene_coocc"></div>
								    		</div>
								    		
								    		<div id="p7_go" class=" col-12 col-md-12 col-lg-12 ">
								    		 <div class=" col-12 col-md-12 col-lg-12 " style="margin-top:0px;margin-bottom:30px">
													 <p class="table_title">(2) Enriched GO-BP functions in co-expression modules  </p>
											</div>
											
									    		<div class=" col-12 col-md-12 col-lg-12 ">
									    			<table id="st_bac_gene_enrich_table" class="table table-bordered table-hover dataTable cell_infor_table_detail" style="width:98%;">
															<thead >
																<tr class="table_head1">
																	<th>Microbiota</th>
																	<th>Pathway</th>
																	<th>P Value</th>
																	<th>FDR</th>		
																	<th>Gene</th>							  			
																</tr>
															</thead>
														</table>
									    		</div>
									    		<div class=" col-12 col-md-12 col-lg-12 ">
									    			<div id="enrich_bac_gene"></div>
									    		</div>
								    		</div>
						  </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    <!-- ========Privacy-Section Ends Here ========-->



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
    
    
    
    <script src="js/page/SearchDetail.js"></script>
    
    <script>
//     function st_umap_width_height_scale(data,div,title0,width,height,clusterDoubledt){
//     	var data=data;
//     	var div=div;
//     	var myPlot = document.getElementById(div);
//     	var layout = {
//     	         height: height*clusterDoubledt,
//     	         width: (width+60)*clusterDoubledt,
//     	         font: {size: 16},
//     	        //showlegend: false,
//     	         //margin: {"t": 80, "b": 150, "l": 30, "r": 5},
//     			title:'Cluster',
//     			legend: {
// //         	   	    bgcolor: 'white',
// //         	   	    borderwidth: 1,
// //         	   	    bordercolor: 'black',
//          	   	    //orientation: 'h',//h.v
//          	   	   // xanchor: 'center',
//          	   	    //x: 10,
//          	   	    //y:-0.2,
//         	   	    font: {
//         	   	      size: 12,
//         	   	    }
//         	   	  },
//     	        		  xaxis: {
//     	        		    showticklabels : false
//     	        		  },
//     	        		  yaxis: {
//     	        		    showticklabels : false
    	        		  
//     	        		  }
//     	    }
//     	    Plotly.newPlot(div, data, layout, {showSendToCloud: true});
//     		myPlot.on('plotly_click', function(data){
//         var pts = '';
//         var spot_name0 = '';
//         for(var i=0; i < data.points.length; i++){
//             pts = 'x = '+data.points[i].x +'\ny = '+ data.points[i].y +'\nname = '+ data.points[i].text+ '\n\n';
//             spot_name0=data.points[i].text;
//         }
     

    	
//     });
//     }
    
//     st_umap_width_height_scale(data_umap_st,'base_spatial',"Cluster",219,350,1.8);

    //st_umap_width_height_scale(data_umap_st,'base_spatial',"Cluster",clusterwidth,(clusterheight),2.1);
    //st_umap_width_height_scale(data_umap_st,'base_spatial',"Cluster",400,440,1.5,legend_loc);
    </script>
</body>

</html>