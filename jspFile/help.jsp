<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Help</title>

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
                        <a  href="download.jsp">Download</a>
                    </li>
                    <li>
                        <a  class="active" href="help.jsp">Help</a>
                    </li>
                </ul>
                
            </div>
        </div>
    </header>
    <!-- ========Header-Section Ends Here ========-->

    
    <section class="faq-section padding-top padding-bottom" style="margin-top:50px;">
        
        
    </section>
   

	 <!-- ========Faq-Section Starts Here ========-->
    <section class="faq-section padding-bottom" style="margin-top:-150px;">
    
        <div class="container">
            <div class="section-header">
                <h2 class="title">Help</h2>
            </div>
            <div class="faq-wrapper">
                <div class="faq-item active open">
                    <div class="faq-title">
                        <h6 class="title">Home</h6>
                        <span class="right-icon"></span>
                    </div>
                    <div class="faq-content">
                        <img  src="img/0_help/home.png" alt="" style="width: 100%;">
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-title">
                        <h6 class="title">Browse</h6>
                        <span class="right-icon"></span>
                    </div>
                    <div class="faq-content">
                        <img  src="img/0_help/home.png" alt="" style="width: 100%;">
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-title">
                        <h6 class="title">Search</h6>
                        <span class="right-icon"></span>
                    </div>
                    <div class="faq-content">
                       <img  src="img/0_help/home.png" alt="" style="width: 100%;">
                    </div>
                </div>
                <div class="faq-item ">
                    <div class="faq-title">
                        <h6 class="title">Download</h6>
                        <span class="right-icon"></span>
                    </div>
                    <div class="faq-content">
                       <img  src="img/0_help/home.png" alt="" style="width: 100%;">
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-title">
                        <h6 class="title">Cancer names </h6>
                        <span class="right-icon"></span>
                    </div>
                    <div class="faq-content">
                        <div class="col-12 col-md-12 col-lg-12">
						                                   	<div class="table-responsive" >
									                                <table class="table table-striped" style="font-size:18px !important;font-family: 'Roboto', sans-serif !important;">
									                                	<tr>
										                                	<th>
										                                		Short form		
										                                	</th>
										                                	<th>
										                                		Full name		
										                                	</th>
									                                	</tr>
									                                    <tbody>
									                                    	  <tr> <td>BCC</td><td>Basal cell carcinoma</td> </tr>
																			  <tr> <td>BRCA</td><td>Breast Cancer</td> </tr>
																			  <tr> <td>CBT</td><td>Childhood Brain Tumor</td> </tr>
																			  <tr> <td>CESC</td><td>Cervical Cancer</td> </tr>
																			  <tr> <td>CRC</td><td>Colorectal Cancer</td> </tr>
																			  <tr> <td>CSCC</td><td>Cutaneous Squamous Cell Carcinoma</td> </tr>
																			  <tr> <td>GBM</td><td>Glioblastoma</td> </tr>
																			  <tr> <td>GIST</td><td>Gastrointestinal Stromal Tumor</td> </tr>
																			  <tr> <td>HGSOC</td><td>High-grade Serous Ovarian Cancer</td> </tr>
																			  <tr> <td>LIHC</td><td>Liver Hepatocellular Carcinoma</td> </tr>
																			  <tr> <td>LUAD</td><td>Lung Adenocarcinoma</td> </tr>
																			  <tr> <td>MIBC</td><td>Muscle-invasive Bladder Cancer</td> </tr>
																			  <tr> <td>OV</td><td>Ovarian Carcinoma</td> </tr>
																			  <tr> <td>PCNSL</td><td>Primary Central Nervous System Lymphoma</td> </tr>
																			  <tr> <td>PDAC</td><td>Pancreatic Ductal Adenocarcinoma</td> </tr>
																			  <tr> <td>PRAD</td><td>Prostate Cancer</td> </tr>
																			  <tr> <td>RCC</td><td>Renal Cell Carcinoma</td> </tr>
																			  <tr> <td>SKCM</td><td>Melanoma</td> </tr>
									                                        
									                                    </tbody>
									                                </table>
									                            </div>
						                                   </div>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-title">
                        <h6 class="title">Cell type names </h6>
                        <span class="right-icon"></span>
                    </div>
                    <div class="faq-content">
                       <div class="col-12 col-md-12 col-lg-12">
						                                   	<div class="table-responsive" >
									                                 <table class="table table-striped" style="font-size:18px !important;font-family: 'Roboto', sans-serif !important;">
									                                	<tr>
										                                	<th>
										                                		Short form		
										                                	</th>
										                                	<th>
										                                		Full name		
										                                	</th>
									                                	</tr>
									                                    <tbody>
									                                    	 <tr> <td>B-Lym</td><td>B lymphocyte</td> </tr>
													<tr> <td>Plasma</td><td>plasma cell</td> </tr>
													<tr> <td>B-Nai</td><td>naive B cell</td> </tr>
													<tr> <td>B-Reg</td><td>regulatory B cell</td> </tr>
													<tr> <td>B-Mem</td><td>memory B cell</td> </tr>
													<tr> <td>B-Fol</td><td>follicular B cell</td> </tr>
													<tr> <td>GC B</td><td>germinal center B cell</td> </tr>
													<tr> <td>GC B-DZ</td><td>germinal center B cell in the dark zone</td> </tr>
													<tr> <td>GC B-LZ</td><td>germinal center B cell in the light zone</td> </tr>
													<tr> <td>NK</td><td>natural killer cell</td> </tr>
													<tr> <td>T-Lym</td><td>T lymphocyte</td> </tr>
													<tr> <td>T-Nai</td><td>naive T cell</td> </tr>
													<tr> <td>T-Pro</td><td>proliferative T cell</td> </tr>
													<tr> <td>T-TRM</td><td>tissue-resident memory T cell</td> </tr>
													<tr> <td>T-EM</td><td>effect memory T cell</td> </tr>
													<tr> <td>NKT</td><td>natural killer T cell</td> </tr>
													<tr> <td>T-gd</td><td>gamma delta T cell</td> </tr>
													<tr> <td>CD4+ T</td><td>CD4+ T cell</td> </tr>
													<tr> <td>CD4+ T-Nai</td><td>naive CD4+ T cell</td> </tr>
													<tr> <td>CD4+ T-Mem</td><td>memory CD4+ T cell</td> </tr>
													<tr> <td>Th1</td><td>T helper type 1 cell</td> </tr>
													<tr> <td>Th2</td><td>T helper type 2 cell</td> </tr>
													<tr> <td>Th17</td><td>T helper type 17 cell</td> </tr>
													<tr> <td>T-FH</td><td>follicular T helper cell</td> </tr>
													<tr> <td>T-Reg</td><td>regulatory T cell</td> </tr>
													<tr> <td>CD8+ T</td><td>CD8+ T cell</td> </tr>
													<tr> <td>CD8+ T-Nai</td><td>naive CD8+ T cell</td> </tr>
													<tr> <td>T-Cyt</td><td>cytotoxic T cell</td> </tr>
													<tr> <td>CD8+ T-Eff</td><td>effector CD8+ T cell</td> </tr>
													<tr> <td>CD8+ T-Mem</td><td>memory CD8+ T cell</td> </tr>
													<tr> <td>T-Exh</td><td>exhausted T cell</td> </tr>
													<tr> <td>Myeloid</td><td>myeloid cell</td> </tr>
													<tr> <td>Monocyte</td><td>monocyte</td> </tr>
													<tr> <td>Macrophage</td><td>macrophage</td> </tr>
													<tr> <td>Mac-M1</td><td>M1-type macrophage</td> </tr>
													<tr> <td>Mac-M2</td><td>M2-type macrophage</td> </tr>
													<tr> <td>DC</td><td>dendritic cell</td> </tr>
													<tr> <td>cDC1</td><td>conventional type 1 dendritic cell</td> </tr>
													<tr> <td>cDC2</td><td>conventional type 2 dendritic cell</td> </tr>
													<tr> <td>aDC</td><td>active dendritic cell</td> </tr>
													<tr> <td>pDC</td><td>plasmacytoid dendritic cell</td> </tr>
													<tr> <td>Neutrophils</td><td>neutrophil</td> </tr>
													<tr> <td>MAST</td><td>mast cell</td> </tr>
													<tr> <td>Progenitor</td><td>progenitor</td> </tr>
													<tr> <td>Erythroid</td><td>erythroid</td> </tr>
													<tr> <td>Cycling</td><td>cycling cell</td> </tr>
													<tr> <td>Pre-B</td><td>precursor B cell</td> </tr>
													<tr> <td>Pro-B</td><td>progenitor B cell</td> </tr>
													<tr> <td>GC B-I</td><td>GC B-I</td> </tr>
													<tr> <td>GC B-II</td><td>GC B-II</td> </tr>
													<tr> <td>Plasmablasts</td><td>plasmablast</td> </tr>
													<tr> <td>ABC</td><td>age-associated B cell</td> </tr>
													<tr> <td>NK-CD16+</td><td>CD16+ natural killer cell</td> </tr>
													<tr> <td>NK-CD56bright-CD16-</td><td>CD56bright CD16- natural killer cell</td> </tr>
													<tr> <td>T&NK-Cyc</td><td>Cycling T&natural killer cell</td> </tr>
													<tr> <td>T-CD4;CD8</td><td>CD4+ T cell;CD8+ T cell</td> </tr>
													<tr> <td>T-Eff;EM-CD4</td><td>effector T cell;effect memory CD4+ T cell</td> </tr>
													<tr> <td>T-EM;EMRA-CD8</td><td>effect memory T cell;EMRA CD8+ T cell</td> </tr>
													<tr> <td>T-Nai;CM-CD4</td><td>naive T cell;center memory CD4+ T cell</td> </tr>
													<tr> <td>T-Nai;CM-CD4-Act</td><td>naive T cell;activated center memory CD4+ T cell</td> </tr>
													<tr> <td>T-Nai;CM-CD8</td><td>naive T cell;center memory CD8+ T cell</td> </tr>
													<tr> <td>T-RM;EM-CD8</td><td>tissue-resident memory T cell;effect memory CD8+ T cell</td> </tr>
													<tr> <td>TRM-gut-CD8</td><td>tissue-resident memory_gut_CD8 T cell</td> </tr>
													<tr> <td>TRM-Tgd</td><td>tissue-resident memory_gamma delta T cell</td> </tr>
													<tr> <td>TRM-Th1;Th17</td><td>tissue-resident memory_T helper type 1 cell;T helper type 17 cell</td> </tr>
													<tr> <td>Tgd-CRTAM+</td><td>CRTAM+ gamma delta T cell</td> </tr>
													<tr> <td>MAIT</td><td>mucosal associated invariant T cell</td> </tr>
													<tr> <td>T;B</td><td>T lymphocyte;B lymphocyte</td> </tr>
													<tr> <td>MNP;B</td><td>MNP;B lymphocyte</td> </tr>
													<tr> <td>MNP;T</td><td>MNP;T lymphocyte</td> </tr>
													<tr> <td>Megakaryocytes</td><td>megakaryocyte</td> </tr>
													<tr> <td>Mon-Cls</td><td>classical monocyte</td> </tr>
													<tr> <td>Mon-nonCls</td><td>non-classical monocyte</td> </tr>
													<tr> <td>Mac-Ery</td><td>erythrophagocytic macrophage</td> </tr>
													<tr> <td>Mac-Alv</td><td>alveolar macrophage</td> </tr>
													<tr> <td>Mac-IntMed</td><td>intermediate macrophage</td> </tr>
													<tr> <td>Mac-Int</td><td>intestinal macrophage</td> </tr>
													<tr> <td>DC1</td><td>conventional type 1 dendritic cell</td> </tr>
													<tr> <td>DC2</td><td>conventional type 2 dendritic cell</td> </tr>
													<tr> <td>migDC</td><td>migratory dendritic cell</td> </tr>
													<tr> <td>ILC3</td><td>type 3 innate lymphoid cell</td> </tr>
									                                        
									                                    </tbody>
									                                </table>
									                            </div>
						                                   </div>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-title">
                        <h6 class="title">References</h6>
                        <span class="right-icon"></span>
                    </div>
                    <div class="faq-content">
                        <div class="col-12 col-md-12 col-lg-12">
						                                   	<div class="table-responsive" >
									                                <table class="table table-striped" style="font-size:18px !important;font-family: 'Roboto', sans-serif !important;">
									                                	<tr>
										                                	<th>
										                                		Method		
										                                	</th>
										                                	<th>
										                                		Description		
										                                	</th>
										                                	<th>
										                                		Reference		
										                                	</th>
									                                	</tr>
									                                    <tbody>
									                                    	  <tr> <td>RCTD</td><td>Spatial spot deconvolution</td> <td>1  </td></tr>
																			  <tr> <td>SVG</td><td>Identifying high spatial variability genes</td> <td>2  </td></tr>
																			  <tr> <td>Co-occurrence</td><td>Identifying tumor Co-occurrenced immune cells</td><td>3  </td> </tr>
<!-- 																			  <tr> <td>GSVA</td><td>Identifying cell types/clusters marker genes</td> <td>4  </td></tr> -->
																			  <tr> <td>COSG</td><td>Identifying cell types/clusters marker genes</td> <td>4  </td></tr>
																			  <tr> <td>ITALK</td><td>Identifying interactions between cell types</td> <td>5  </td></tr>
																			  
																			  <tr> <td>SMTa</td><td>Spatial meta-transcriptome analysis pipeline </td> <td>6  </td></tr>
																			  <tr> <td>Cottrazm</td><td>Identify spatial neighborhoods</td> <td>7  </td></tr>
									                                        
									                                    </tbody>
									                                </table>
									                            </div>
						                                   </div>   
						                <p >  <a href="https://www.nature.com/articles/s41587-021-00830-w">1 : Cable, D., Murray, E., Zou, L., Goeva, A., Macosko, E., Chen, F., and Irizarry, R. (2022). Robust decomposition of cell type mixtures in spatial transcriptomics. Nature biotechnology 40, 517-526.</a> </p>
								        <p >  <a href="https://www.nature.com/articles/nmeth.4634">2 :  Edsgard, D., Johnsson, P., and Sandberg, R. (2018). Identification of spatial expression trends in single-cell gene expression data. Nature methods 15, 339-342.</a> </p>
								        <p >  <a href="https://linkinghub.elsevier.com/retrieve/pii/S0092-8674(20)31686-X">3 : Khamis, D., Fowler, D., Morrissey, E., et al. (2021). Spatiotemporal analysis of human intestinal development at single-cell resolution. Cell 184, 810-826.e823. </a> </p>
<!-- 								        <p >  <a href="https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-14-7">4 :  Hanzelmann, S., Castelo, R., and Guinney, J. (2013). GSVA: gene set variation analysis for microarray and RNA-seq data. BMC bioinformatics 14, 7.</a> </p> -->
                                        <p >  <a href="https://academic.oup.com/bib/article-abstract/23/2/bbab579/6511197?redirectedFrom=fulltext&login=true">4 : Dai, M., Pei, X., and Wang, X. (2022). Accurate and fast cell marker gene identification with COSG. Briefings in bioinformatics 23. </a> </p>
                                        <p >  <a href="https://www.biorxiv.org/content/10.1101/507871v1">5 : Wang, Y., Wang, R., et al. (2019). iTALK: an R Package to Characterize and Illustrate Intercellular Communication. bioRxiv [Preprint] </a> </p>
                                        <p >  <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10078289/">6 : Lin Lyu., Xue Li., et al. (2023). Simultaneous profiling of host expression and microbial abundance by spatial metatranscriptome sequencing </a> </p>
                    					<p >  <a href="https://www.nature.com/articles/s41467-023-36560-7">7 : Zhenzhen Xun., Xinyu Ding., et al. (2023). Reconstruction of the tumor spatial microenvironment along the malignant-boundary-nonmalignant axis </a> </p>
                    					
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ========Faq-Section Ends Here ========-->




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