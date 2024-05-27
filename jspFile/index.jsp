<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>SMTdb</title>

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

</head>
<style>
.font1_weight{font-weight:600;color:black;}
.counter-item .counter-thumb {
    justify-content: center;
    align-items: center;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    width: 100%;
    margin-bottom: 20px;
    width: 120px;
    height: 120px;
    border: 4px dashed #e96429;
}



.fonts_stats{	font-weight: 700;    margin: 0;    line-height: 1.3;    color: black;    font-family: "Roboto", sans-serif;}
</style>
<body>
<!-- 加载动画 -->
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
                        <img src="assets/images/logo/logo02.png" alt="logo">
                    </a>
                </div>
                <ul class="menu">
                    <li>
                        <a class="active" href="index.jsp">Home</a>
                    </li>
                    <li>
                        <a  href="browse.jsp">Browse</a>
                    </li>
                    <li>
                        <a  href="search.jsp">Search</a>
                    </li>
<!--                     <li> -->
<!--                         <a href="#0">Search</a> -->
<!--                         <ul class="submenu" > -->
<!--                         	<li> -->
<!--                                 <a href="SearchBac.jsp">Bacteria</a> -->
<!--                             </li> -->
<!--                              <li> -->
<!--                                 <a href="SearchCancer.jsp">Cancer</a> -->
<!--                             </li> -->
<!--                             <li> -->
<!--                                 <a href="SearchCelltype.jsp">Cell type</a> -->
<!--                             </li> -->
<!--                             <li> -->
<!--                                 <a href="SearchGene.jsp">Gene</a> -->
<!--                             </li> -->
                            
                            
<!--                         </ul> -->
<!--                     </li> -->
<!--                     bacteria,bacterium(SINGLE) -->
                    <li>
                        <a href="#0">Tools</a>
                        <ul class="submenu" style="width:300px; text-transform: none; ">
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

    <!-- ========Banner-Section Starts Here ========-->
    <section class="banner-section padding-top padding-bottom">
        <div class="container">
            <div class="banner-wrapper">
            	<div class="col-md-12 col-sm-12" >
<!--                 <div class="banner-content" > -->
                <h3 class="title" style="color:white">A Comprehensive Spatial Meta-Transcriptome Resource in Cancer</h3>
                
                <p style="font-size:18px;color:white;margin-top:20px;">content content content content content content content content content content content content content content content content content content content 
                content content content content content content content content content content content content content content content content content content content 
                content content content content content content content content content content content content content content content content content content content content content 
                content content content content content content content content content content content content content content content content content content content content 
                content content content content content content content content content content content content content content content content content content content content 
                content content content content content content content content content content content content content content content content content content content content 
                content content content content content content content content content content content content content content content content content content content </p>
<!--                     <span class="welcome">welcome to <span>BeLike</span></span> -->
<!--                     <h2 class="title">SMTdb：A Comprehensive Spatial Meta-Transcriptome Resource in Cancer</h2> -->
<!--                     <p>Quasi necessitatibus sunt beatae assumenda repellendus, nihil quisquam impedit eaque velit ullam, totam itaque? Tempore, iusto deserunt quae odio velit corporis illum!</p> -->
<!--                     <div class="button-group"> -->
<!--                         <a href="service.html" class="custom-button">View Service</a> -->
<!--                         <a href="get-service.html" class="custom-button">Get Service</a> -->
<!--                     </div> -->
                </div>

            </div>
        </div>
    </section>
    <!-- ========Banner-Section Ends Here ========-->

    <!-- ========Serve-Section Starts Here ========-->
    <section class="serve-section padding-bottom padding-top">
        <div class="container mw-xl-100">
            <div class="section-header">
                <h2 class="title">Tools</h2>
<!--                 <p> -->
<!--                    content -->
<!--                 </p> -->
            </div>
            <div class="service-wrapper">
                <div class="service-area">
                    <div class="service-item">
<!--                         <div class="icon d-xl-none"> -->
<!--                             <img src="./assets/images/service/facebook02.png" alt="service"> -->
<!--                         </div> -->
                        
                        <h6 class="title">
                            <a href="ToolsBacAbd.jsp" class="facebook" style="font-size:25px;">Slice Annotation</a>
                        </h6>
                        <p style="font-size:20px;">
                          Annotation of tissue slices, including
                          <font class="font1_weight"> Spot Annotation</font>,
                          <font class="font1_weight"> Spatial Co-occurred Module</font>, 
                          <font class="font1_weight"> Spot Deconvolution</font> and 
                          <font class="font1_weight"> Spatially  variable genes</font>.
                        </p>
                    </div>
                    <div class="service-item">
<!--                         <div class="icon d-xl-none"> -->
<!--                             <img src="./assets/images/service/tik-tok.png" alt="service"> -->
<!--                         </div> -->
                        <h6 class="title">
                            <a href="ToolsBacAbd.jsp" class="tiktok" style="font-size:25px;">Abundance of Microbiota </a>
                        </h6>
                        
                        <p style="font-size:20px;">
                            Abundance of microbiota in slice, including 
                            <font class="font1_weight"> Microbiota Distribution</font> and 
                            <font class="font1_weight"> Microbiota Expression</font>.
                        </p>
                    </div>
                    <div class="service-item">
<!--                         <div class="icon d-xl-none"> -->
<!--                             <img src="./assets/images/service/rating.png" alt="service"> -->
<!--                         </div> -->
                        <h6 class="title">
                            <a href="ToolsBacNeb.jsp" class="apps" style="font-size:25px;">Spatial Neighborhood</a>
                        </h6>
                        <p style="font-size:20px;">
                            Spatial Neighborhood Of Microbiota, including 
                            <font class="font1_weight"> Neighborhood Annotation</font>,
                            <font class="font1_weight"> Distribution of microbiota</font> and 
                            <font class="font1_weight"> Differentially expressed microbiota</font>.
                        </p>
                    </div>
                </div>
                <div class="service-center">
<!--                     <img src="img/tools.png" alt="service" style="margin-top:-20px;margin-left:-10px;"> -->
                    <img src="img/tools.svg" alt="SVG Image" > 
                </div>
                
                <div class="service-area">
                    <div class="service-item">
<!--                         <div class="icon d-xl-none"> -->
<!--                             <img src="./assets/images/service/youtube02.png" alt="service"> -->
<!--                         </div> -->
                        <h6 class="title">
                            <a href="ToolsBacAbd.jsp" class="youtube" style="font-size:25px;">Function of HMAR</a>
                        </h6>
                        <p style="font-size:20px;">
                            Function Of High Microbiota Abundance Region, including 
                            <font class="font1_weight"> Malignant region</font> and 
                            <font class="font1_weight"> Boundary region</font>.
                        </p>
                    </div>
                    <div class="service-item">
<!--                         <div class="icon d-xl-none"> -->
<!--                             <img src="./assets/images/service/twitter02.png" alt="service"> -->
<!--                         </div> -->
                        <h6 class="title">
                            <a href="ToolsBacCty.jsp" class="twitter" style="font-size:25px;">Cell Types within HMAR</a>
                        </h6>
                        <p style="font-size:20px;">
                            Cell types within high microbiota abundance region.
                        </p>
                    </div>
                    <div class="service-item">
<!--                         <div class="icon d-xl-none"> -->
<!--                             <img src="./assets/images/service/instagram02.png" alt="service"> -->
<!--                         </div> -->
                        <h6 class="title">
                            <a href="ToolsBacCoExp.jsp" class="instagram" style="font-size:25px;">Host Microbiota CEM</a>
                        </h6>
                        <p style="font-size:20px;">
                            Host microbiota co-expression module.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <section class="how-to-section padding-top padding-bottom bg-f8" style="margin-top:30px;"  >
        <div class="container">
        	<div class="section-header">
                <h2 class="title">Statistics</h2>

            </div>
            <div class="row justify-content-center mb-40-none">
            
            		<div class="counter-item">
                    <div class="counter-thumb">
                        <h2 class="odometer title" style="color:#e96429;" data-odometer-final="18">0</h2>
                    </div>
                    <div class="counter-content">
                        <h6 class="title" style="font-size:25px; font-weight: 700;    margin: 0;    line-height: 1.3;    color: black;    font-family: 'Roboto', sans-serif;">
                       Cancer number
                        </h6>
                    </div>
                    
                </div>
                
                
                <div class="counter-item">
                    <div class="counter-thumb">
                        <h2 class="odometer title" style="color:#e96429;" data-odometer-final="93">0</h2>
                    </div>
                    <div class="counter-content">
                        <h6 class="title" style="font-size:25px; font-weight: 700;    margin: 0;    line-height: 1.3;    color: black;    font-family: 'Roboto', sans-serif;">
                       Slice number
                        </h6>
                    </div>
                    
                </div>
                
                
                <div class="counter-item">
                    <div class="counter-thumb">
                        <h2 class="odometer title" style="color:#e96429;font-size:35px;" data-odometer-final="174">0</h2>
                        <h2 class="title" style="color:#e96429;font-size:35px;">k</h2>
                        
                    </div>
                    <div class="counter-content">
                        <h6 class="title" style="font-size:25px; font-weight: 700;    margin: 0;    line-height: 1.3;    color: black;    font-family: 'Roboto', sans-serif;">
                       spot number
                        </h6>
                    </div>
                    
                </div>
                <div class="counter-item">
                    <div class="counter-thumb">
                        <h2 class="odometer title" style="color:#e96429;" data-odometer-final="35">0</h2>
                    </div>
                    <div class="counter-content">
                        <h6 class="title" style="font-size:25px; font-weight: 700;    margin: 0;    line-height: 1.3;    color: black;    font-family: 'Roboto', sans-serif;">
                       cell type number
                        </h6>
                    </div>
                    
                </div>
                
                
                <div class="counter-item">
                    <div class="counter-thumb">
                        <h2 class="odometer title" style="color:#e96429;font-size:35px;" data-odometer-final="562">0</h2>
                        <h2 class="title" style="color:#e96429;font-size:35px;">k</h2>
                    </div>
                    <div class="counter-content">
                        <h6 class="title" style="font-size:25px; font-weight: 700;    margin: 0;    line-height: 1.3;    color: black;    font-family: 'Roboto', sans-serif;">
                       cell number
                        </h6>
                    </div>
                    
                </div>
                
                <div class="counter-item">
                    <div class="counter-thumb">
                        <h2 class="odometer title" style="color:#e96429;" data-odometer-final="6">0</h2>
                        
                    </div>
                    <div class="counter-content">
                        <h6 class="title" style="font-size:25px; font-weight: 700;    margin: 0;    line-height: 1.3;    color: black;    font-family: 'Roboto', sans-serif;">
                       kingdom number
                        </h6>
                    </div>
                    
                </div>
                <div class="counter-item">
                    <div class="counter-thumb">
                        <h2 class="odometer title" style="color:#e96429;" data-odometer-final="99">0</h2>
                        
                    </div>
                    <div class="counter-content">
                        <h6 class="title" style="font-size:25px; font-weight: 700;    margin: 0;    line-height: 1.3;    color: black;    font-family: 'Roboto', sans-serif;">
                       phylum number
                        </h6>
                    </div>
                    
                </div>
                
                <div class="counter-item">
                    <div class="counter-thumb">
                        <h2 class="odometer title" style="color:#e96429;" data-odometer-final="99">0</h2>
                        
                    </div>
                    <div class="counter-content">
                        <h6 class="title" style="font-size:25px; font-weight: 700;    margin: 0;    line-height: 1.3;    color: black;    font-family: 'Roboto', sans-serif;">
                       class number
                        </h6>
                    </div>
                    
                </div>
                
                <div class="counter-item">
                    <div class="counter-thumb">
                        <h2 class="odometer title" style="color:#e96429;" data-odometer-final="99">0</h2>
                        
                    </div>
                    <div class="counter-content">
                        <h6 class="title" style="font-size:25px; font-weight: 700;    margin: 0;    line-height: 1.3;    color: black;    font-family: 'Roboto', sans-serif;">
                       order number
                        </h6>
                    </div>
                    
                </div>
                
                <div class="counter-item">
                    <div class="counter-thumb">
                        <h2 class="odometer title" style="color:#e96429;" data-odometer-final="99">0</h2>
                        
                    </div>
                    <div class="counter-content">
                        <h6 class="title" style="font-size:25px; font-weight: 700;    margin: 0;    line-height: 1.3;    color: black;    font-family: 'Roboto', sans-serif;">
                       family number
                        </h6>
                    </div>
                    
                </div>
                
                <div class="counter-item">
                    <div class="counter-thumb">
                        <h2 class="odometer title" style="color:#e96429;" data-odometer-final="849">0</h2>
                        
                    </div>
                    <div class="counter-content">
                        <h6 class="title" style="font-size:25px; font-weight: 700;    margin: 0;    line-height: 1.3;    color: black;    font-family: 'Roboto', sans-serif;">
                       genus number
                        </h6>
                    </div>
                    
                </div>
                
                
                <div class="counter-item">
                    <div class="counter-thumb">
                        <h2 class="odometer title" style="color:#e96429;" data-odometer-final="99">0</h2>
                        <h2 class="title" style="color:#e96429;">k</h2>
                        
                    </div>
                    <div class="counter-content">
                        <h6 class="title" style="font-size:25px; font-weight: 700;    margin: 0;    line-height: 1.3;    color: black;    font-family: 'Roboto', sans-serif;">
                       species number
                        </h6>
                    </div>
                    
                </div>
                
                
                
            </div>
        </div>
    </section>

    <!-- ========Sponsor-Section Starts Here ========-->
    <div class="sponsor-section padding-top padding-bottom">
        <div class="container">
            <div class="section-header">
                <h2 class="title">Useful link</h2>
                
            </div>
            <div class="sponsor-slider">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="sponsor-thumb">
                            <a href="#0"><img src="img/STdatabase/10x.png" alt=""></a>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="sponsor-thumb">
                            <a href="#0"><img src="img/STdatabase/AQUILA.png" alt=""></a>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="sponsor-thumb">
                            <a href="#0"><img src="img/STdatabase/figshare.png" alt=""></a>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="sponsor-thumb">
                            <a href="#0"><img src="img/STdatabase/ImmCluster.png" alt=""></a>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="sponsor-thumb">
                            <a href="#0"><img src="img/STdatabase/LncCE.png" alt=""></a>
                        </div>
                    </div>
                    
                    <div class="swiper-slide">
                        <div class="sponsor-thumb">
                            <a href="#0"><img src="img/STdatabase/SOAR.png" alt=""></a>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="sponsor-thumb">
                            <a href="#0"><img src="img/STdatabase/SODB.png" alt=""></a>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="sponsor-thumb">
                            <a href="#0"><img src="img/STdatabase/SPASCER.png" alt=""></a>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="sponsor-thumb">
                            <a href="#0"><img src="img/STdatabase/SpatialDB.png" alt=""></a>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="sponsor-thumb">
                            <a href="#0"><img src="img/STdatabase/STOmicsDB.png" alt=""></a>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="sponsor-thumb">
                            <a href="#0"><img src="img/STdatabase/zenodo.png" alt=""></a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    <!-- ========Sponsor-Section Ends Here ========-->


    <!-- ========Footer-Section Starts Here ========-->
<!--     <footer class="footer-section padding-top padding-bottom bg_img" data-background="./assets/images/footer/footer-bg.png"> -->
<footer class="footer-section padding-top padding-bottom bg_img" >
        <div class="footer-top">
            <div class="container">
                <div class="row mb-45-none">
                    <div class="col-lg-6 col-md-6">
                        <div class="footer-widget widget-about">
                            <h5 class="widget-title">About STMdb</h5>
                            <p>We are teams of computational biology from Harbin Medical University </p>
							<h5 class="widget-title">Contact Information</h5>
							<table style="width:100%;margin-left:0%;" >
										<tr>
											<td style=""><p  style="margin-left:2px;font-size:18px;color:;">	Yongsheng li,   </p></td>
											<td><font  style="margin-left:2px;font-size:20px;color:;">	Email  :  </font><a style="font-size:20px;cursor:pointer;" href="mailto:liyongsheng@ems.hrbmu.edu.cn">liyongsheng@ems.hrbmu.edu.cn</a></td>
										</tr>
										<tr>
											<td style=""><p  style="margin-left:2px;font-size:18px;color:;">	Juan Xu,   </p></td>
											<td><font  style="margin-left:2px;font-size:20px;color:;">	Email  :  </font> <a style="font-size:20px;cursor:pointer;" href="mailto:xujuanbiocc@ems.hrbmu.edu.cn"> xujuanbiocc@ems.hrbmu.edu.cn</a></td>
										</tr>
									</table>

                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6">
                        <div class="footer-widget widget-link">
                            <h5 class="widget-title">Other works</h5>
                            <ul>
                            		<li><a style="font-size:18px;cursor:pointer;" target="_blank" href="http://bio-bigdata.hrbmu.edu.cn/SORC/">SORC</a></li>
                                	<li><a style="font-size:18px;cursor:pointer;" target="_blank" href="http://bio-bigdata.hrbmu.edu.cn/ImmLnc/">ImmLnc</a></li>
                                    <li><a style="font-size:18px;cursor:pointer;" target="_blank" href="http://bio-bigdata.hrbmu.edu.cn/ImmReg/">ImmReg</a></li>
                                    <li><a style="font-size:18px;cursor:pointer;" target="_blank" href="http://bio-bigdata.hrbmu.edu.cn/ImmCluster/">ImmCluster</a></li>
                                    <li><a style="font-size:18px;cursor:pointer;" target="_blank" href="http://bio-bigdata.hrbmu.edu.cn/RBPreg/">RBPreg</a></li>
                                    
                            </ul>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6">
                        <div class="footer-widget widget-link">
                            <h5 class="widget-title">Visitors</h5>
                            <div class="content">
	                            <div >
	                            	<script type="text/javascript" src="//rf.revolvermaps.com/0/0/7.js?i=5zt08b9z68x&amp;m=0&amp;c=ff0000&amp;cr1=ffffff&amp;sx=0" async="async"></script>
	                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- ========Footer-Section Ends Here ========-->


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
</body>
</html>