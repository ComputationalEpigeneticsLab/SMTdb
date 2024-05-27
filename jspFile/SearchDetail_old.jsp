<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title></title>

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
.titleFont2{font-size:28px; }

.summary-td1 {
  width: 50%;
  font-weight: 600;
  font-size: 20px !important;
  font-family: 'Roboto', sans-serif !important;
}
</style>
<body data-spy="scroll" data-offset="170" data-target=".privacy-sidebar">
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
                                <a href="#0">Account</a>
                            </li>
                            <li>
                                <a href="team.html">Team</a>
                            </li>
                            <li>
                                <a href="privacy.html">Privacy</a>
                            </li>
                            <li>
                                <a href="terms-condition.html">terms & condition</a>
                            </li>
                            <li>
                                <a href="faq.html">Faq</a>
                            </li>
                            <li>
                                <a href="404.html">404</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#0">Tools</a>
                        <ul class="submenu">
                            <li>
                                <a href="blog-grid.html">Blog Grid</a>
                            </li>
                            <li>
                                <a href="blog-classic.html">Blog Classic</a>
                            </li>
                            <li>
                                <a href="blog-details.html">Blog Details</a>
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
                <h2 class="title titleFont1">title title title title</h2>
                
            </div>
        <div class="container" style="max-width:1400px;">
        
            <div class="row">
                <div class="col-md-3 col-lg-3 col-xl-3">
                    <div class="privacy-sidebar">
                        <ul>
                            <li>
                                <a class="nav-link active" href="#overview">overview</a>
                            </li>
                            <li>
                                <a class="nav-link" href="#data-collection">Data Collection & Use</a>
                            </li>
                            <li>
                                <a class="nav-link" href="#cookies-data">Cookies Data</a>
                            </li>
                            <li>
                                <a class="nav-link" href="#security">Data Security</a>
                            </li>
                            <li>
                                <a class="nav-link" href="#info">Customer Information</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-9 col-lg-9 col-xl-9">
                    <div class="privacy-content" style="max-width:1200px;">
                        <div class="item">
                            <h5 class="title titleFont2" id="overview">overview</h5>
                            
                            <div class="row ">
				            	<div class=" col-12 col-md-12 col-lg-12 " >
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
				                                            <td class="summary-td1">Number of BAC </td>
				                                            <td id="overview_bac_num"> -</td>
				                                        </tr>
				                                        <tr>
				                                            <td class="summary-td1">Number of  markers</td>
				                                            <td id="overview_marker_num"> -</td>
				                                        </tr>
				                                        <tr>
				                                            <td class="summary-td1" > Publication</td>
				                                            <td title="paper org">  <i class="fa-solid fa-link" style="color:#FF9A18"></i> <a style="color:#FF9A18" target="_blank" id="overview_publication_http" href="" ></a> </td>
				                                        </tr>
				                             </tbody>
				                        </table>
				                     </div>
				                </div>
				            </div>
                            
                        </div>
                        <div class="item">
                            <h5 class="title" id="data-collection">Consent and Information Collection and Use</h5>
                            <p>Rictumst molestie dui nulla bibendum tellus. Purus tincidunt amet pellentesque dis
                                aliquet, urna dictum congue penatibus suspendissjusto, eget adipiscing, eros in
                                donec ligula cursus integer. Accumsan egestas turpis pagna debitis, placerat
                                vestibulum commodo nascetur odio at, tortor dui posuere ornare donec mauris,
                                phasummodo augue. A sodales venenatis, amet massa fringilla, euismod elit tellus
                                amet. Commodo molestie dolor amet imperdiet feugiat. Enim lacus eu duis est. Risus
                                gravida eget, consequat tortor, felis elit dolor mauris purus pellentesque augue,
                                leo nisl dis vehicula, vehicula magna. Porttitor praesent facilisis aliquet.</p>
                            <ul>
                                <li>
                                    There are many variations of passages of Lorem
                                    available, but the majority
                                </li>
                                <li>
                                    Finibus onorum et alorum" by icero classical lite
                                    rature, discovered
                                </li>
                                <li>
                                    There are many variations of passages of Lorem
                                    available, but the majority
                                </li>
                                <li>
                                    Finibus onorum et alorum" by icero classical lite
                                    rature, discovered
                                </li>
                            </ul>
                            <p>Eictumst molestie dui nulla bibendum tellus. Purus tincidunt amet pellentesque dis
                                aliquet, urna dicongue pbus suspendissjusto, eget adipiscing, eros in donec ligula
                                cursus integer. Accumsan egestas tpurgna debitis, plarat vestibulum commodo nascetur
                                odio at, tortor dui posuere ornare donec mauris, phasellus ipsum.commoaugue. A
                                sodales venenatis, amet massa fringilla, euismod elit tellus amet. Commodo molestie
                                dolor ametperdiet fgiat. Enim lacus eu duisest. </p>
                        </div>
                        <div class="item">
                            <h5 class="title" id="cookies-data">Cookies and Log Files</h5>
                            <p>Dictumst molestie dui nulla bibendum tellus. Purus tincidunt amet pellentesque dis
                                aliquet, urna dicongen pebus suspendissjusto, eget adipiscing, eros in donec ligula
                                cursus integer. Accumsan egestas tpmagna debitis plarat vestibulum commodo nascetur
                                odio at, tortor dui posuere ornare donec mauris, phasellus ipsum.commodo augue. A
                                sodales venenatis, amet massa fringilla, euismod elit tellus amet. Commodoostie
                                dolor amet imperdiet feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                                tortor, felis elit dolor mauris purus pellentesque augue, leo nisl dis vehicula,
                                vehicula magna.</p>
                        </div>
                        <div class="item">
                            <h5 class="title" id="security">Data Security and Retention</h5>
                            <p>Aictumst molestie dui nulla bibendum tellus. Purus tincidunt amet pellentesque dis
                                aliquet, urna dictum congue penatibus suspendisjusget adipiscing, eros in donec
                                ligula cursus integer. Accumsan egestas turpis purusebiti placerat vestibulum
                                commodo nascetur odio at, tortor dui posuere ornare donec mauris, phasellus
                                ipsum.modo augue. A sodales venenatis, amet massa fringilla, euismod elit tellus
                                amet. Commodo molestie dolor amemrdiet feugiat. Enim lacus eu duis est. Risus
                                gravida eget, consequat tortor, felis elit dolor mauris purus pellentesque augue,
                                leo nisl dis vehicula, vehicula magna. </p>
                        </div>
                        <div class="item">
                            <h5 class="title" id="info">Information Form Customer</h5>
                            <p>Aictumst molestie dui nulla bibendum tellus. Purus tincidunt amet pellentesque dis
                                aliquet, urna dictum congue penatibus suspendisjusget adipiscing, eros in donec
                                ligula cursus integer. Accumsan egestas turpis purusebiti placerat vestibulum
                                commodo nascetur odio at, tortor dui posuere ornare donec mauris, phasellus
                                ipsum.modo augue. A sodales venenatis, amet massa fringilla, euismod elit tellus
                                amet. Commodo molestie dolor amemrdiet feugiat. Enim lacus eu duis est. Risus
                                gravida eget, consequat tortor, felis elit dolor mauris purus pellentesque augue,
                                leo nisl dis vehicula, vehicula magna. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ========Privacy-Section Ends Here ========-->

    <!-- ========Footer-Section Starts Here ========-->
    <footer class="footer-section padding-top padding-bottom bg_img" >
        <div class="footer-top">
            <div class="container">
                <div class="row mb-45-none">
                    <div class="col-lg-4 col-md-6">
                        <div class="footer-widget widget-about">
                            <h5 class="widget-title">About Us</h5>
                            <p>Lorem ipsum dolor sit amet, mauris libero congue eget pulvinar, cras ut mus tempus dolor,
                                ante tortor ornare ante arcu nam </p>
                            <h6 class="sub-title">Subscribe</h6>
                            <form class="footer-form">
                                <input type="text" placeholder="Your Email" class="footer-input">
                                <label for="f1"><i class="fas fa-arrow-right"></i></label>
                                <input type="submit" value="" id="f1">
                            </form>
                            <div class="social-icons">
                                <a href="#0" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                <a href="#0" class="twitter"><i class="fab fa-twitter"></i></a>
                                <a href="#0" class="youtube"><i class="fab fa-youtube"></i></a>
                                <a href="#0" class="google"><i class="fab fa-google-plus-g"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6">
                        <div class="footer-widget widget-link">
                            <h5 class="widget-title">Useful Link</h5>
                            <ul>
                                <li>
                                    <a href="#0">Facebook Follower</a>
                                </li>
                                <li>
                                    <a href="#0">Youtube Subscriber</a>
                                </li>
                                <li>
                                    <a href="#0">Twitter Follower</a>
                                </li>
                                <li>
                                    <a href="#0">Tik Tok Follower</a>
                                </li>
                                <li>
                                    <a href="#0">Likee Follower</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget widget-link">
                            <h5 class="widget-title">Important Menu</h5>
                            <ul>
                                <li>
                                    <a href="#0">about Us</a>
                                </li>
                                <li>
                                    <a href="#0">Privacy</a>
                                </li>
                                <li>
                                    <a href="#0">Terms & Condition</a>
                                </li>
                                <li>
                                    <a href="#0">Contact</a>
                                </li>
                                <li>
                                    <a href="#0">Faq</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget widget-link">
                            <h5 class="widget-title">Contact Information</h5>
                            <div class="content">
                                <ul class="addr">
                                    <li>
                                        <a href="#0">medino, kitaniya road , USA</a>
                                    </li>
                                    <li>
                                        <a href="tel:838383898">Call Us Now 1-234-567-890</a>
                                    </li>
                                    <li>
                                        <a href="Mailto:demo@gmail.com">demo@support.com</a>
                                    </li>
                                    <li>
                                        <a href="Mailto:demo@gmail.com">exmaple4500@gmail.com</a>
                                    </li>
                                    <li>
                                        <a href="Mailto:demo@gmail.com">democompany@gmail.com</a>
                                    </li>
                                </ul>
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