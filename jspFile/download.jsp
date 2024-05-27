<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Download</title>

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
    font-weight: 500;
    font-size: 20px;
}


.titleFont1{font-size:30px;}
td.details-control { 
     background: url('images/open.png') no-repeat center center; 
   cursor: pointer; 
 } 
tr.shown td.details-control {
   background: url('images/close.png') no-repeat center center; 
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
                        <a href="browse.jsp">Browse</a>
                    </li>
                    <li>
                        <a  href="search.jsp">Search</a>

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
                        <a class="active" href="download.jsp">Download</a>
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
            
            <div class="faq-wrapper"  >
               
            </div>
        </div>
        
    </section>
    <!-- ========Faq-Section Ends Here ========-->

    <!-- ========Faq-Section Starts Here ========-->
    <section class="faq-section padding-bottom" style="margin-top:-80px;">
        <div class="container">
            <div class="section-header">
                <h2 class="title titleFont1">Dataset list </h2>
            </div>
            <div class="faq-wrapper" style="margin-top:-30px;">
               <div class="col-md-12 col-sm-12" >
                	<div class="widget widget-category">
<!--                             <h6 class="title">Dataset list</h6> -->
                            
                              <div class="table-responsive" style="max-height:600px;overflow:auto;">
                              
						          <div id="" >
		                        				<table id="download_Table" class="display" cellspacing="0" width="100%" style="font-size:16px;font-family: 'Roboto', sans-serif !important;">
											        <thead style="font-size:20px;font-family: 'Roboto', sans-serif !important;">
											            <tr>
											                <th></th>
											                <th>Cancer</th>
											                <th>Sample</th>
											                <th>No. of Bacteria</th>
											                <th>Source</th>
											            </tr>
											        </thead>
											    </table>
		                        			</div>
						                            </div>
                            
                            
                        </div>
                </div>
                
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

  	<script type="text/javascript" language="javascript" src="js/d3.min.js"></script>
  	<script type="text/javascript" src="js/font1.js"></script>
  	<script type="text/javascript" language="javascript" src="js/jquery.dataTables.min.js"></script>
	<script type="text/javascript" language="javascript" src="js/dataTables.buttons.min.js"></script>
	
  	
  	<script type="text/javascript" language="javascript" src="js/page/download.js"></script>
</body>
<script  type="text/javascript" charset="utf-8">


//////////


</script>
</html>