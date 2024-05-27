


//var dataSetID="text";
dataSetID=document.getElementById("dataSetID").value;
species=document.getElementById("species").value;
webpath="0_files/slice/"+dataSetID;

bac_table_dir=webpath+"/bac_table";
bac_json=webpath+"/json";
overview_re="";
$.ajaxSettings.async = false;
$.getJSON(webpath+"/summary.txt", "", function(data_re) {
	overview_re=data_re;
});

slice_cluster_re="";
$.ajaxSettings.async = false;
$.getJSON(webpath+"/slice_cluster.txt", "", function(data_re) {
	slice_cluster_re=data_re;
});
spot_dev_re=slice_cluster_re;

bac_re="";
$.ajaxSettings.async = false;
$.getJSON(webpath+"/bac_infor.txt", "", function(data_re) {
	bac_re=data_re;
});


bac_neb_re="";
$.ajaxSettings.async = false;
$.getJSON(webpath+"/bac_neighborhood_infor.txt", "", function(data_re) {
	bac_neb_re=data_re;
});

bac_fun_re="";
$.ajaxSettings.async = false;
$.getJSON(webpath+"/part5_bac_function_infor.txt", "", function(data_re) {
	bac_fun_re=data_re;
});

bac_celltype_re="";
$.ajaxSettings.async = false;
$.getJSON(webpath+"/part6_bac_hi_celltype_infor.txt", "", function(data_re) {
	bac_celltype_re=data_re;
});

bac_gene_module_re="";
$.ajaxSettings.async = false;
$.getJSON(webpath+"/part7_bac_gene_module_infor.txt", "", function(data_re) {
	bac_gene_module_re=data_re;
});

image_scale="";
$.ajaxSettings.async = false;
$.getJSON("0_files/innerpath/HE_scale.txt", "", function(data_re) {
	image_scale=data_re;
});
HEwidth=0;
HEheight=0;
if (image_scale.hasOwnProperty(dataSetID)){
		 HEwidth=Number(image_scale[dataSetID].split(",")[0]);
		 HEheight=Number(image_scale[dataSetID].split(",")[1]);
		 clusterwidth=Number(image_scale[dataSetID].split(",")[3]);
		 clusterheight=Number(image_scale[dataSetID].split(",")[4]);
		 clusterDoubledt=image_scale[dataSetID].split(",")[2];
		 legend_loc=image_scale[dataSetID].split(",")[5];
}
//console.log(bac_gene_module_re);

metagenome_type_first="genus";
//console.log(bac_gene_module_re);
///////////part1 summary //////////
part1_overview_infor(overview_re);
///////////part2 Slice Annotation //////////

////2.1 spot annotation
var slice_first_sq_cluster_num=slice_cluster_re["cluster_num"];
var slice_first_sq_clusters=slice_cluster_re["cluster_name"].split(",");
data_umap_st=[];
for (var i=0;i<slice_first_sq_cluster_num;i++){
//////umap/////
	var json0={};
	json0["name"]=slice_first_sq_clusters[i];
	var x=slice_first_sq_clusters[i]+"_x_umap";
	var y=slice_first_sq_clusters[i]+"_y_umap";
	var text0=slice_first_sq_clusters[i]+"_text_umap";
	var x_array=slice_cluster_re[x].split(",");
	var y_array=slice_cluster_re[y].split(",");
	var text0_array=slice_cluster_re[text0].split(",");
	json0["x"]=x_array;
	json0["y"]=y_array;
	json0["text"]=text0_array;
	json0["mode"]='markers';
	var color0=slice_first_sq_clusters[i]+"_color_umap";
	json_marker={};
	json_marker["color"]=slice_cluster_re[color0];
	json_marker["size"]=5;//点大小
	json0["marker"]=json_marker;
	data_umap_st.push(json0);

}

part2_slice_anno(slice_cluster_re,data_umap_st,image_scale,dataSetID);

///////////part3 Bac //////////
part3_bac_infor(bac_re,bac_table_dir);

///////////part4 Bac neighborhood//////////
var neb_number=bac_neb_re["cluster_num"];
var neb_clusters=bac_neb_re["cluster_name"].split(",");
var neb_color=bac_neb_re["cluster_color"].split(",");
data_umap_st_neb=[];
for (var i=0;i<neb_number;i++){
//////umap/////
	var json0={};
	json0["name"]=neb_clusters[i];
	var x=neb_clusters[i]+"_x_umap";
	var y=neb_clusters[i]+"_y_umap";
	var text0=neb_clusters[i]+"_text_umap";
	var x_array=bac_neb_re[x].split(",");
	var y_array=bac_neb_re[y].split(",");
	var text0_array=bac_neb_re[text0].split(",");
	json0["x"]=x_array;
	json0["y"]=y_array;
	json0["text"]=text0_array;
	json0["mode"]='markers';
	var color0=neb_color[i];
	json_marker={};
	json_marker["color"]=color0;
	json_marker["size"]=5;//点大小
	json0["marker"]=json_marker;
	data_umap_st_neb.push(json0);

}


part4_bac_neb(bac_neb_re,data_umap_st_neb);
part5_bac_func(bac_fun_re);
part6_bac_celltype(bac_celltype_re,bac_re);
part7_bac_gene_coooc(bac_re,bac_gene_module_re);
/////////// function use /////////
function part7_bac_gene_coooc(bac_re,bac_gene_module_re){
	//bac_gene_module_re.hasOwnProperty("p7")
	if(bac_gene_module_re["p7"]=="no"){
		document.getElementById("p7_c").style.display="none";
		document.getElementById("p7_left").style.display="none";
		
	}else{
		document.getElementById("p7_c").style.display="block";
		document.getElementById("p7_left").style.display="block";
		dataTable_bac_gene_coooc_p7(bac_table_dir+"/bac_gene_cooc.txt","st_bac_gene_coocc_table");
		g0=bac_gene_module_re["bac_enrich"].split(",")[0];
		//echars_circos_cellcell_p7(bac_json+"/"+g0+'_p7_circos.json','river_bac_gene_coocc',0.98);
		echars_circos_cellcell_p7(bac_json+'/'+g0+"_p7_circos.json",'river_bac_gene_coocc',0.98);
			if(bac_gene_module_re.hasOwnProperty("p7_go")){
				document.getElementById("p7_go").style.display="none";
			}else{
				document.getElementById("p7_go").style.display="block";
				//
				bacEnrichTable(bac_table_dir+'/'+g0+'_enrich_table_p7.txt','st_bac_gene_enrich_table');
				//
				var x0=bac_gene_module_re[g0+"_enrich_fdr"].split(",");
				var y0=bac_gene_module_re[g0+"_pathways"].split(",");
				bac_encrich_bar_h(x0,y0,g0,'enrich_bac_gene');
			}
		}
}

///////////
function spatial_gene_coooc_onclick_p7(bac){
	echars_circos_cellcell_p7(bac_json+"/"+bac+'_p7_circos.json','river_bac_gene_coocc',0.98);
	
	bacs=bac_gene_module_re["bac_enrich"].split(",");
	if(bacs.indexOf(bac)!=-1){
		document.getElementById("p7_go").style.display="block";
	if(bac_gene_module_re.hasOwnProperty("p7_go")){
				document.getElementById("p7_go").style.display="none";
			}else{
				if ($.fn.dataTable.isDataTable('#st_bac_gene_enrich_table')) {
				$('#st_bac_gene_enrich_table').DataTable().clear().destroy();
				}
				bacEnrichTable(bac_table_dir+'/'+bac+'_enrich_table_p7.txt','st_bac_gene_enrich_table');
				
				//
				var x0=bac_gene_module_re[bac+"_enrich_fdr"].split(",");
				var y0=bac_gene_module_re[bac+"_pathways"].split(",");
				bac_encrich_bar_h(x0,y0,bac,'enrich_bac_gene');
	}
	
}else{
		document.getElementById("p7_go").style.display="none";
	}
	
}

function bac_encrich_bar_h(x,y,title,div){
var trace1 = {
  x: x,
  y: y,
  name: 'Enrich',
  orientation: 'h',
  marker: {
    color: 'red',
    width: 3
  },
  type: 'bar'
};
var data = [trace1];

var layout = {
  title: title,
  font :{size :14,},
  margin: {"t": 80, "b": 150, "l": 400, "r": 20}, //图边缘距离画布上下左右边界的距离，单位px
  xaxis: {
				//range: [ 0.75, 5.25 ],
				title: "-Log10 P value" ,
				//showticklabels : false,
				//zeroline: true
			  },
  barmode: 'stack'
	};
	Plotly.newPlot(div, data, layout);
}
function bacEnrichTable(path,div){
	var path=path;
	var div='#'+div;
	$(document).ready(function() {												
		$(div).DataTable( {
		"bLengthChange": false, //开关，是否显示每页显示多少条数据的下拉框
		"searching":false,
		"deferRender": true,//big data
		"bProcessing": true, //显示是否加载 
		"paginationType": "full_numbers",//详细分页组，可以支持直接跳转到某页 
		"serverSide": false,      //后台处理分页则为true  
		'ajax': path,
		'columns':[
		{'data':'bac'},
		{'data':'Pathway',render: $.fn.dataTable_enrich(10)},
		{'data':'P_value'},
		{'data':'FDR_value'},
		{'data':'intermarker',
			render: $.fn.enrich(3)}
		]
		} );
		} );

	//返回部分值，按照逗号分隔的并且
	$.fn.enrich = function (cutoff) {
			return function (data, type, row) {
			if (type === 'display') {
				var str = data.toString(); // cast numbers
				var strArr=str.split(",")
				return strArr.length < cutoff ?
					strArr :
						"<span  title='" + str + "'>" + strArr.slice(0,3).join() + '&#8230;</span>';
						}
						return data;
						};
						};
	//超过长度的鼠标放上显示全部
		$.fn.dataTable_enrich = function (cutoff) {
			return function (data, type, row) {
				if (type === 'display') {
					var str = data.toString(); // cast numbers
		
					return str.length < cutoff ?
						str :
						"<span title='" + str + "'>" + str.substr(0, cutoff - 1) + '&#8230;</span>';
				}
		
				// Search, order and type can use the original data
				return data;
			};
		};
}


///////////
function part1_overview_infor(overview_re){
	
	document.getElementById("overview_species").innerHTML=overview_re["Species"];
	document.getElementById("overview_disease").innerHTML=overview_re["Disease"];
	document.getElementById("overview_technology").innerHTML=overview_re["Technology"];
	document.getElementById("overview_spot_num").innerHTML=overview_re["ST_spot_num"];
	document.getElementById("overview_bac_num").innerHTML=overview_re["ST_bac_num"];
	document.getElementById("overview_marker_num").innerHTML=overview_re["ST_cluster_marker_num"];
	document.getElementById("overview_st_neighborhood").innerHTML=overview_re["ST_neighborhood_num"];
	document.getElementById("overview_pair_sc").innerHTML=overview_re["Pair_sc"];
	document.getElementById("overview_publication_http").href = overview_re["Publication"];
	document.getElementById("overview_publication_http").innerHTML=overview_re["Publication_name"];
}


function part2_slice_anno(slice_cluster_re,data_umap_st,image_scale,dataSetID){
//2.1
	//2.1.1 H&E img
	if (image_scale.hasOwnProperty(dataSetID)){
		var HEwidth=Number(image_scale[dataSetID].split(",")[0]);
		var HEheight=Number(image_scale[dataSetID].split(",")[1]);
		var clusterwidth=Number(image_scale[dataSetID].split(",")[3]);
		var clusterheight=Number(image_scale[dataSetID].split(",")[4]);
		var clusterDoubledt=image_scale[dataSetID].split(",")[2];
		
		var img_dir='0_files/HE/'+dataSetID+'.png';
		document.getElementById("base_spatial_HE").src = img_dir;
		$("#base_spatial_HE").css("width",HEwidth);
		$("#base_spatial_HE").css("height",HEheight);
		
		
		//2.1.2
		st_umap_width_height_scale(data_umap_st,'base_spatial',"Cluster",clusterwidth,clusterheight,clusterDoubledt,legend_loc);
	}else{
		//2.1.2
		st_umap_width_height(data_umap_st,'base_spatial',"Cluster",600,600);
	}

	//2.1.3
	plotly_barplot_sq_stat(slice_first_sq_clusters,slice_cluster_re["cluster_spot_num"].split(","),slice_cluster_re["cluster_color"].split(","),'Spot Density','base_spatial_stat');
	//2.1.4
	
	if ($.fn.dataTable.isDataTable('#st_marker_table')) {
	$('#st_marker_table').DataTable().clear().destroy();
}
	marker_table(webpath+"/ST_cluster_marker_table.txt",'st_marker_table');
	//2.1.5
	plotly_barplot_stat(slice_cluster_re["cluster_name"].split(","),slice_cluster_re["ST_cluster_marker_num"].split(","),slice_cluster_re["cluster_color"].split(","),'Marker of clusters','base_spatial_marker_stat');
	//2.1.6
	cluster_st_select(slice_cluster_re,slice_cluster_re["cluster_name"].split(","),'base_spatial_violin_cluster_select','base_spatial_violin_select','base_spatial_violin');
//2.2////
	if(slice_cluster_re.hasOwnProperty("ST_spatial_coooc")){
		document.getElementById("ls_coooc").innerHTML="No result";
	}else{
	dataTable_bac_gene_coooc(bac_table_dir+"/ST_spatial_coooc_gene_table.txt","st_gene_coocc_table");
	echars_circos_cellcell(bac_json+"/kME_module1_jsonTable.json",'river_gene_coocc',0.98);
	}
//2.2
	//2.3.1
	var dev_spots_name_arr=slice_cluster_re["dev_spots"].split(",");
	var dev_celltype_arr=slice_cluster_re["dev_celltype"].split(",");
	var dev_celltype_color_arr=slice_cluster_re["dev_celltype_color"].split(",");
	deconvolution_select(dev_spots_name_arr,slice_cluster_re,'deconvolution_select','spatial_spot_celltype');
	//2.3.2
	plotly_spatialSpotSctter_color(0.49,data_umap_st,'dev_spatial_plot','All spots','spatial_spot_celltype');
	//2.3.3
	plotly_barplot_first(0.49,dev_celltype_arr,slice_cluster_re["dev_spots_all_mean"].split(","),dev_celltype_color_arr,'All spots','spatial_spot_celltype');
//2.4
	//2.4.1
	
	if ($.fn.dataTable.isDataTable('#svg_table')) {
	$('#svg_table').DataTable().clear().destroy();
}
	svgTable(webpath+"/ST_SVG_table.txt");
	
	//2.4.2~2.4.3
	var svg_first_name=slice_cluster_re["svg_first"];
	svg_spatial_first(svg_first_name);
	
}

function part3_bac_infor(bac_re,bac_table_dir){
	
	//3.1 distribution
		//3.1.1 xmSelect  //   xmSelectBac
		//3.1.2 Bac color map  //    genus first
		st_umap_width_height_leg(data_umap_st,'base_bac_cluster2',"Cluster",600,600);
		bac_color_map(bac_re,metagenome_type_first);
		//3.1.3 stat
		bac_bar(bac_re,metagenome_type_first,'base_bac_stat');
		//3.1.4 table
		var path0=bac_table_dir+"/bac_"+metagenome_type_first+"_datatable.txt";
		var colnames0=bac_re[metagenome_type_first+"_subclass"].split(",");
		colnames0.sort(); 
		colnames0.unshift("spot");
		autoColTable_bac(path0,colnames0,'base_bac_table');
	//3.2 express
		//3.2 xmlseclet
		bac_exp_xml_left(bac_re,metagenome_type_first,'bac_exp_xml_left','bac_exp_xml_right','bac_exp_table','bac_exp_color','bac_exp_bar');
		
	//3.3 bac co-occ 
}


function part4_bac_neb(bac_neb_re,data_umap_st_neb){
	//4.1 
		//4.1.1 H&E img
		//document.getElementById("base_spatial_HE_neb").src = webpath+"/HE.png";
		var img_dir='0_files/HE/'+dataSetID+'.png';
		document.getElementById("base_spatial_HE_neb2").src = img_dir;
		$("#base_spatial_HE_neb2").css("width",HEwidth);
		$("#base_spatial_HE_neb2").css("height",HEheight);
		//4.1.2
		st_umap_height(data_umap_st_neb,'base_spatial_neb',"Neighborhood",600);
		
		var y0=[];
		var types=bac_neb_re['cluster_name'].split(",");
		for(var i=0;i<types.length;i++){
			y0.push(Number(bac_neb_re["st_neb_"+types[i]+"_number"]));
		}
		//console.log(y0);
		//console.log(bac_neb_re);
		
		plotly_barplot_neb2(types,y0,bac_neb_re['cluster_color'].split(","),'st_neb_stat_bar');
		//4.1.3
		//判断各个区域是不是marker都没有，没有为则影藏
		var neb_c=bac_neb_re['cluster_name'].split(",");
		var hide_neb_maker=[];
		for(var i=0;i<neb_c.length;i++){
			if(bac_neb_re[neb_c[i]+"_marker"]=="none"){
				hide_neb_maker.push("no");
			}else{
				hide_neb_maker.push("yes");
			}
		}
		if(hide_neb_maker.indexOf("yes")!=-1){
			document.getElementById("st_neb_marker_all").style.display="block";
			if ($.fn.dataTable.isDataTable('#st_marker_table_neb')) {
					$('#st_marker_table_neb').DataTable().clear().destroy();
				}
			marker_table_neb(webpath+"/ST_cluster_marker_neb_table.txt",'st_marker_table_neb');
			//4.1.4
			cluster_st_select_neb(bac_neb_re,'base_spatial_violin_neb_select','base_spatial_violin_marker_select','base_spatial_neb_violin');
		}else{
			document.getElementById("st_neb_marker_all").style.display="none";
		}
	//4.2
		bac_neb_xml_gene_st(bac_neb_re,'bac_neb_gene_xml_left','bac_neb_gene_color');
		st_umap_width_height(data_umap_st_neb,'bac_neb_org2',"Neighborhood",600,600);
		st_umap_width_height(data_umap_st_neb,'bac_neb_org',"Neighborhood",600,600);
		bac_neb_xml(bac_neb_re,bac_re,metagenome_type_first,'bac_neb_xml_left','bac_neb_xml_right','bac_neb_color','bac_neb_barplot_1');
	//4.3
	if(bac_neb_re.hasOwnProperty("genus_type")){
		var  path0=bac_table_dir+"/ST_neb_diff_genus_table.txt";
		bac_neb_diff_table(path0,"bac_neb_diff_table");
		//plot
		volcano_plot_bac_beb_diff_all("genus",bac_neb_re,"volcano_Mal_Bdy","volcano_Bdy_nMal","volcano_Mal_nMal");
	}else{
		document.getElementById("Difference_expression_of_metagenome").innerHTML="No result";
	}
}


function part5_bac_func(bac_fun_re){
	//5.1
		//5.1.1  mal
		if(bac_fun_re["mal_infor"]=="yes"){
			if(bac_fun_re.hasOwnProperty("mal_genename")){
				var fun_number_mal=bac_fun_re["mal_cluster_num"];
				var fun_clusters_mal=bac_fun_re["mal_cluster_name"].split(",");
				data_umap_st_fun_mal=[];
				for (var i=0;i<fun_number_mal;i++){
				//////umap/////
					var json0={};
					json0["name"]=fun_clusters_mal[i];
					var x=fun_clusters_mal[i]+"_x_umap";
					var y=fun_clusters_mal[i]+"_y_umap";
					var text0=fun_clusters_mal[i]+"_text_umap";
					var x_array=bac_fun_re[x].split(",");
					var y_array=bac_fun_re[y].split(",");
					var text0_array=bac_fun_re[text0].split(",");
					json0["x"]=x_array;
					json0["y"]=y_array;
					json0["text"]=text0_array;
					json0["mode"]='markers';
					var color0=fun_clusters_mal[i]+"_color_umap";
					json_marker={};
					json_marker["color"]=bac_fun_re[color0];
					json_marker["size"]=5;//点大小
					json0["marker"]=json_marker;
					data_umap_st_fun_mal.push(json0);
				}
				st_umap_height_noleg(data_umap_st_fun_mal,'bac_fun_color_mal','Microbiota distribution',650);
				//volcano
				volcano_plot_bac_fun_diff_mal(bac_fun_re,"bac_fun_gene_diff_mal_volcano");
				//differ table
				var  path0=bac_table_dir+"/ST_fun_diff_mal_table.txt";
				bac_fun_diff_table(path0,"bac_fun_mal_diff_table");
				//ssgsea heatmap
				ssgsea_hetamap_pher_table("mal",bac_fun_re,"bac_fun_heatmap_mal","bac_fun_mal_phyper_table");
			}else{
				//document.getElementById("bac_f_m").style.display="none";
				document.getElementById("bac_f_m").innerHTML="No result";
			}
		}else{
			//document.getElementById("bac_f_m").style.display="none";
			document.getElementById("bac_f_m").innerHTML="No result";
		}
	//5.2
		//5.2.1 bdy
		if(bac_fun_re["bdy_infor"]=="yes"){
			if(bac_fun_re.hasOwnProperty("bdy_genename")){
				var fun_number_bdy=bac_fun_re["bdy_cluster_num"];
				var fun_clusters_bdy=bac_fun_re["bdy_cluster_name"].split(",");
				data_umap_st_fun_bdy=[];
				for (var i=0;i<fun_number_bdy;i++){
				//////umap/////
					var json0={};
					json0["name"]=fun_clusters_bdy[i];
					var x=fun_clusters_bdy[i]+"_x_umap";
					var y=fun_clusters_bdy[i]+"_y_umap";
					var text0=fun_clusters_bdy[i]+"_text_umap";
					var x_array=bac_fun_re[x].split(",");
					var y_array=bac_fun_re[y].split(",");
					var text0_array=bac_fun_re[text0].split(",");
					json0["x"]=x_array;
					json0["y"]=y_array;
					json0["text"]=text0_array;
					json0["mode"]='markers';
					var color0=fun_clusters_bdy[i]+"_color_umap";
					json_marker={};
					json_marker["color"]=bac_fun_re[color0];
					json_marker["size"]=5;//点大小
					json0["marker"]=json_marker;
					data_umap_st_fun_bdy.push(json0);
				}
				st_umap_height_noleg_width(data_umap_st_fun_bdy,'bac_fun_color_bdy','Microbiota distribution',650);
				//volcano
				volcano_plot_bac_fun_diff_bdy(bac_fun_re,"bac_fun_gene_diff_bdy_volcano");
				//differ table
				var  path0=bac_table_dir+"/ST_fun_diff_bdy_table.txt";
				bac_fun_diff_table(path0,"bac_fun_bdy_diff_table");
				//ssgsea 
				ssgsea_hetamap_pher_table("bdy",bac_fun_re,"bac_fun_heatmap_bdy","bac_fun_bdy_phyper_table");
			}else{
				//document.getElementById("bac_f_b").style.display="none";
				document.getElementById("bac_f_b").innerHTML="No result";
			}
		}else{
			//document.getElementById("bac_f_b").style.display="none";
			document.getElementById("bac_f_b").innerHTML="No result";
		}

}
function part6_bac_celltype(bac_celltype_re,bac_re){
	bac_color_map_celltype(bac_re,'genus');
	bac_cell_xml(bac_re,bac_celltype_re,'xml_bac_celltype','bac_celltype_radar','bac_celltype_table','bac_celltype_color');
}

function ssgsea_hetamap_pher_table(type0,bac_fun_re,divplot,divtable){
	if(type0=="mal"){
		bacFunctionTable(bac_table_dir+"/ST_fun_phyper_mal_table.txt",divtable);
	}else{
		bacFunctionTable(bac_table_dir+"/ST_fun_phyper_bdy_table.txt",divtable);
	}
	var x_value=bac_fun_re[type0+"_x"].split(",");
		var y_value=bac_fun_re[type0+"_y"].split(",");
		var sig_pair=bac_fun_re[type0+"_sig_pair"].split(";");
		var z_all=bac_fun_re[type0+"_z"].split(",");
		var z_value=[];
		z_value.push(z_all);
		var hover_text=[];
		var h0=[];
		for (var hh=0;hh<z_all.length;hh++){
				h0.push(" Cell Type : "+y_value[0]+" <br>"+" Pathway : "+x_value[hh]+" <br>"+" ssGSEA Score : "+z_all[hh]+" ");
		}
		hover_text.push(h0);
		var title1="ssGSEA probability scores";

	Co_Occ_heatmap_havesig(title1,divplot,x_value,y_value,z_value,sig_pair,hover_text,0.99);
	
	
}

function Co_Occ_heatmap_havesig(title,div,x_value,y_value,z_value,sig_pair,hover_text,width0){

   var width0=$("#width_id").width()*width0;
   var xValues = x_value;
   var yValues = y_value;
   var zValues = z_value;
//console.log(value_min+"   "+value_max+"hhh");
   var colorscaleValue = [
                        [0,'#0033ff'],//99ccff
                        [0.5,'#FFFFFF'],
                        [1,'#bd2130']
   ];
   var data = [{
     x: xValues,
     y: yValues,
     z: zValues,
     type: 'heatmap',
     //hovertext :hover_text,
     //hoverinfo :"text",
     colorscale: colorscaleValue,
     automargin:true,
     showscale: true
     
   }
   ];
   
   var layout = {
		height:300,
		width:width0,
		showlegend: false,
   		margin: {"t": 80, "b": 80, "l": 50, "r": 100}, //饼图边缘距离画布上下左右边界的距离，单位px
     //title: title,
     font: {size: 8},
     annotations: [],
     xaxis: {
       ticks: '',
       showticklabels: false,
     },
     yaxis: {
       ticks: '',
       ticksuffix: ' ',
       showticklabels: false,
       autosize: false
     }
   };

   for ( var i = 0; i < yValues.length; i++ ) {
     for ( var j = 0; j < xValues.length; j++ ) {
       var currentValue = yValues[i]+","+xValues[j];
	   //console.log(currentValue);
       if (sig_pair.includes(currentValue)) {
         var textColor = 'white';
       var result = {
         xref: 'x1',
         yref: 'y1',
         x: xValues[j],
         y: yValues[i],
         text: '*',
         font: {
           family: 'Arial',
           size: 12,
           color: 'rgb(50, 171, 96)'
         },
         showarrow: false,
         font: {
           color: textColor
         }
       };
       }
       layout.annotations.push(result);
      
     }
   }

   Plotly.newPlot(div, data, layout);
}



function bac_color_map_celltype(bac_re,metagenome_type){
	var metagenome_type0_cluster=bac_re[metagenome_type+"_subclass"].split(",");
	metagenome_type0_cluster.sort();  
	var num_cluster=metagenome_type0_cluster.length;
	data_umap_bac=[];
	
	var json0={};
	json0["name"]="None_Bacteria";
	json0["x"]=bac_re['noneBac_x_umap'].split(",");
	json0["y"]=bac_re['noneBac_y_umap'].split(",");
	json0["text"]=bac_re['noneBac_text_umap'].split(",");
	json0["mode"]='markers';
	json_marker={};
	json_marker["color"]=bac_re['noneBac_color_umap'];
	json_marker["size"]=5;//点大小
	json0["marker"]=json_marker;
	data_umap_bac.push(json0);
	for (var i=0;i<num_cluster;i++){
		var json0={};
		json0["name"]=metagenome_type0_cluster[i];
		var x=metagenome_type+"_"+metagenome_type0_cluster[i]+"_x_umap";
		var y=metagenome_type+"_"+metagenome_type0_cluster[i]+"_y_umap";
		var text0=metagenome_type+"_"+metagenome_type0_cluster[i]+"_text_umap";
		var x_array=bac_re[x].split(",");
		var y_array=bac_re[y].split(",");
		var text0_array=bac_re[text0].split(",");
		json0["x"]=x_array;
		json0["y"]=y_array;
		json0["text"]=text0_array;
		json0["mode"]='markers';
		var color0=metagenome_type+"_"+metagenome_type0_cluster[i]+"_color_umap";
		json_marker={};
		json_marker["color"]=bac_re[color0];
		json_marker["size"]=5;//点大小
		json0["marker"]=json_marker;
		data_umap_bac.push(json0);

	}
	
	//plot
	//bac_umap_width_height(data_umap_bac,'base_bac',metagenome_type,1000,700);
	bac_umap_noleg1_height(data_umap_bac,'bac_celltype_color',metagenome_type,600);
}

function bac_celltype_colorPlot(bac_re,metagenome_type,metagenome_subtype,color_plot_div){
	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange =function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var returnData=xmlHttp.responseText;
			var jsonobj=JSON.parse(returnData);
			if(jsonobj.error_attention=="no"){
				////
				var color=jsonobj.exp.split(",");
				var slice_spot_name=slice_cluster_re["dev_spots"].split(",");
				var slice_spot_x=slice_cluster_re["spots_x"].split(",");
				var slice_spot_y=slice_cluster_re["spots_y"].split(",");
				plotly_svgSpotScatter_celltype(0.55,metagenome_subtype,slice_spot_name,slice_spot_x,slice_spot_y,color,color_plot_div);

			}else{
				$("#"+color_plot_div).hide();
			}
				}
			}
	var param="metagenome_type="+metagenome_type+"&metagenome_subtype="+metagenome_subtype+"&dataSetID="+dataSetID;
	xmlHttp.open("get","MysqlExp.jsp?"+param,true);
	xmlHttp.send();

}
function bac_neb_xml_gene_st(bac_neb_re,div_left,div_color){
	var data_option=bac_neb_re["st_all_genes"].split(",");
	var data_option_valuearray = [];
	for (var i=0;i<data_option.length;i++)
					{ 
						json={}
						json['name']=data_option[i];
						json['value']=data_option[i];
						data_option_valuearray.push(json);
					}
					var e="#"+div_left;
					var demo1_gene = xmSelect.render({
						el: e, 
						filterable: true,
						size: 'big',//选中的之后显示的字的大小
					    theme: {color: '#ff9a18',},//主题颜色
						tips: 'Select a key for view',
						radio: true,
						clickClose: true,
						data: [],
						on: function(data){//监听
							var arr = data.arr;
							var change = data.change;
							//isAdd, 此次操作是新增还是删除
							var isAdd = data.isAdd;
							var gene0=arr[0]["value"];
							///
							gene_spatial_exp(gene0,div_color);
							
							}
					})
					demo1_gene.update({
					data: data_option_valuearray
					})
		// 赋值
			demo1_gene.setValue([
			{name: data_option[0], value: data_option[0]},
			])
			//
			gene_spatial_exp(data_option[0],div_color);
}

function gene_spatial_exp(svg0,div){
	//var slice_select0=overview_re.slice_first;
	var database_name=dataSetID+"_st".toLowerCase();

	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange =function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var returnData=xmlHttp.responseText;
			var jsonobj=JSON.parse(returnData);
				var color=jsonobj.exp.split(",");
				var slice_spot_name=slice_cluster_re["dev_spots"].split(",");
				var slice_spot_x=slice_cluster_re["spots_x"].split(",");
				var slice_spot_y=slice_cluster_re["spots_y"].split(",");
				plotly_svgSpotScatter(0.5,svg0,slice_spot_name,slice_spot_x,slice_spot_y,color,div);
				}
			}			
	var param="gene="+svg0+"&database_name="+database_name;
	xmlHttp.open("get","MysqlSpotExp.jsp?"+param,true);
	xmlHttp.send();
	////
}

function bac_cell_xml(bac_re,bac_celltype_re,div_xml,div_radar,table_div,color_plot_div){
	var colnames0=bac_celltype_re["genus_celltype_names"].split(",");
	var data_option=bac_re["genus_subclass"].split(",");
	data_option.unshift('all');
	var data_option_valuearray = [];
	for (var i=0;i<data_option.length;i++)
					{ 
						json={}
						json['name']=data_option[i];
						json['value']=data_option[i];
						data_option_valuearray.push(json);
					}
					var e="#"+div_xml;
					var demo1_gene = xmSelect.render({
						el: e, 
						filterable: true,
						size: 'big',//选中的之后显示的字的大小
					    theme: {color: '#ff9a18',},//主题颜色
						tips: 'Select a key for view',
						radio: true,
						clickClose: true,
						data: [],
						on: function(data){//监听
							var arr = data.arr;
							var change = data.change;
							//isAdd, 此次操作是新增还是删除
							var isAdd = data.isAdd;
							var metagenome_type0=arr[0]["value"];
							///
							if(metagenome_type0=="all"){
							bac_color_map_celltype(bac_re,'genus');}else{
							bac_celltype_colorPlot(bac_re,'genus',metagenome_type0,color_plot_div);}
							//radar_plot_bac_celltype
							data0=[];
							data0_json={};
							data0_json["type"]='scatterpolar';
							data0_json["fill"]='toself';
							r0=bac_celltype_re["genus_"+metagenome_type0+"_celltype_dev"].split(",");
							data0_json["r"]=r0;
							data0_json["theta"]=colnames0;
							data0.push(data0_json);
							r0_max= Math.max(...r0);
							r0_max=Number(r0_max.toFixed(3));
							radar_plot_bac_celltype(data0,div_radar,r0_max);
							//
							
							if ($.fn.dataTable.isDataTable('#'+table_div)) {
								$('#'+table_div).DataTable().clear().destroy();
							}
							var path0=bac_table_dir+"/bac_hi_celtype_genus_"+metagenome_type0+".txt";
							autoColTable_bac_celltype(path0,colnames0,table_div);
							}
					})
					demo1_gene.update({
					data: data_option_valuearray
					})
		// 赋值
			demo1_gene.setValue([
			{name: 'All', value: 'all'},
			])
			//
			//radar_plot_bac_celltype
			data0=[];
			data0_json={};
			data0_json["type"]='scatterpolar';
			data0_json["fill"]='toself';
			r0=bac_celltype_re["genus_all_celltype_dev"].split(",");
			r0_max= Math.max(...r0);
			r0_max=Number(r0_max.toFixed(3));
			data0_json["r"]=r0;
			data0_json["theta"]=colnames0;
			data0.push(data0_json);
			
			radar_plot_bac_celltype(data0,div_radar,r0_max);
			//
			var path0=bac_table_dir+"/bac_hi_celtype_genus_all.txt";
			autoColTable_bac_celltype(path0,colnames0,table_div);
			

}
function radar_plot_bac_celltype(data,div,r0_max){
	data = data

layout = {
	height: 550,
  polar: {
    radialaxis: {
      visible: true,
      range: [0, r0_max]
    }
  },
  showlegend: false
}

Plotly.newPlot(div, data, layout)

}

function autoColTable_bac_celltype(path,colnames,div){
	//colnames：会写到页面上，colname和匹配文件中的key。
	var table_inner="<thead ><tr class='table_head1'><th>Spot</th>";
	var columns=[];
	json={};
	json['data']='_row';
	columns.push(json);
	for (var i=0;i<colnames.length;i++){
		table_inner=table_inner+"<th>"+colnames[i]+"</th>";
		json={};
		json['data']=colnames[i];
		columns.push(json);
	}
	table_inner=table_inner+"</tr></thead>";
	document.getElementById(div).innerHTML=table_inner;
	
	$(document).ready(function() {
    		$("#"+div).DataTable( {
    		"bLengthChange": false, //开关，是否显示每页显示多少条数据的下拉框
			"searching" : false,//开关,search 
            //"aLengthMenu": [10,20,30],//设置每页显示数据条数的下拉选项
            'iDisplayLength': 8, //每页初始显示5条记录
    		"deferRender": true,
    		"bProcessing": true, 
    		"paginationType": "full_numbers",
    		"serverSide": false, 
    		"order": [[ 1, 'desc' ]],
    		'ajax': path,
    		'columns':columns
    		
    		} );  
    		} );
	
}

function bacFunctionTable(path,div){
	var path=path;
	var div='#'+div;
	$(document).ready(function() {												
		$(div).DataTable( {
		"bLengthChange": false, //开关，是否显示每页显示多少条数据的下拉框
		"searching":false,
		"deferRender": true,//big data
		"bProcessing": true, //显示是否加载 
		"paginationType": "full_numbers",//详细分页组，可以支持直接跳转到某页 
		"serverSide": false,      //后台处理分页则为true  
		'ajax': path,
		'columns':[
		{'data':'Pathway'},
		{'data':'gsvaScor'},
		{'data':'pValue'},
		{'data':'FDR'},
		{'data':'Genes',
			render: $.fn.enrich(3)}
		]
		} );
		} );
	//返回部分值，按照逗号分隔的并且
	$.fn.enrich = function (cutoff) {
			return function (data, type, row) {
			if (type === 'display') {
				var str = data.toString(); // cast numbers
				var strArr=str.split(",")
				return strArr.length < cutoff ?
					strArr :
						"<span  title='" + str + "'>" + strArr.slice(0,3).join() + '&#8230;</span>';
						}
						return data;
						};
						};
	//超过长度的鼠标放上显示全部
		$.fn.dataTable.render.ellipsis = function (cutoff) {
			return function (data, type, row) {
				if (type === 'display') {
					var str = data.toString(); // cast numbers
		
					return str.length < cutoff ?
						str :
						"<span title='" + str + "'>" + str.substr(0, cutoff - 1) + '&#8230;</span>';
				}
		
				// Search, order and type can use the original data
				return data;
			};
		};
}

function volcano_plot_bac_fun_diff_mal(bac_fun_re,div){
	var data0=[];
	var logp0=bac_fun_re["mal_logp"].split(",");
	var logfc0=bac_fun_re["mal_logfc"].split(",");
	var name0=bac_fun_re["mal_genename"].split(",");
	for(var i=0;i<name0.length;i++){
		var arr0=[];
		arr0.push(logfc0[i],logp0[i],name0[i]);
		data0.push(arr0);
	}
	volcano_plot_width(data0,div,"Malignant",0.5);
}
function volcano_plot_bac_fun_diff_bdy(bac_fun_re,div){
	var data0=[];
	var logp0=bac_fun_re["bdy_logp"].split(",");
	var logfc0=bac_fun_re["bdy_logfc"].split(",");
	var name0=bac_fun_re["bdy_genename"].split(",");
	for(var i=0;i<name0.length;i++){
		var arr0=[];
		arr0.push(logfc0[i],logp0[i],name0[i]);
		data0.push(arr0);
	}
	volcano_plot_width(data0,div,"Boundary",0.5);
}

function volcano_plot_bac_beb_diff_all(bac_t,bac_neb_re,div1,div2,div3){
	if(bac_neb_re.hasOwnProperty(bac_t+"_type")){
		if(bac_neb_re[bac_t+"_type"].split(",").indexOf("Mal_Bdy")!=-1){
		//
		var data0=[];
		var logp0=bac_neb_re[bac_t+"_Mal_Bdy_logp"].split(",");
		var logfc0=bac_neb_re[bac_t+"_Mal_Bdy_logfc"].split(",");
		var name0=bac_neb_re[bac_t+"_Mal_Bdy_metagenome_type"].split(",");
		for(var i=0;i<name0.length;i++){
			var arr0=[];
			arr0.push(logfc0[i],logp0[i],name0[i]);
			data0.push(arr0);
		}
		volcano_plot(data0,div1,"Mal VS Bdy");
		}else{
			//document.getElementById("volcano_Mal_Bdy").style.display="none";
			document.getElementById("volcano_Mal_Bdy").innerHTML="No result";
		}
		if(bac_neb_re[bac_t+"_type"].split(",").indexOf("Bdy_nMal")!=-1){
		//
		var data0=[];
		var logp0=bac_neb_re[bac_t+"_Bdy_nMal_logp"].split(",");
		var logfc0=bac_neb_re[bac_t+"_Bdy_nMal_logfc"].split(",");
		var name0=bac_neb_re[bac_t+"_Bdy_nMal_metagenome_type"].split(",");
		for(var i=0;i<name0.length;i++){
			var arr0=[];
			arr0.push(logfc0[i],logp0[i],name0[i]);
			data0.push(arr0);
		}
		volcano_plot(data0,div2,"Bdy VS nMal");
		}else{
			//document.getElementById("volcano_Bdy_nMal").style.display="none";
			document.getElementById("volcano_Bdy_nMal").innerHTML="No result";
		}
		if(bac_neb_re[bac_t+"_type"].split(",").indexOf("Mal_nMal")!=-1){
		//
		var data0=[];
		var logp0=bac_neb_re[bac_t+"_Mal_nMal_logp"].split(",");
		var logfc0=bac_neb_re[bac_t+"_Mal_nMal_logfc"].split(",");
		var name0=bac_neb_re[bac_t+"_Mal_nMal_metagenome_type"].split(",");
		for(var i=0;i<name0.length;i++){
			var arr0=[];
			arr0.push(logfc0[i],logp0[i],name0[i]);
			data0.push(arr0);
		}
		volcano_plot(data0,div3,"Mal VS nMal");
		}else{
			//document.getElementById("volcano_Mal_nMal").style.display="none";
			document.getElementById("volcano_Mal_nMal").innerHTML="No result";
		}
	}else{
		document.getElementById("volcano_Mal_Bdy").innerHTML="No result";
		document.getElementById("volcano_Bdy_nMal").innerHTML="No result";
		document.getElementById("volcano_Mal_nMal").innerHTML="No result";
	}
}

function volcano_plot_width(data0,div,title0,width0){
	var width0=$("#width_id").width()*width0;
	$("#"+div).css("height",620);
	$("#"+div).css("width",width0);
	var chartDom = document.getElementById(div);
    var myChartPointDiff = echarts.init(chartDom);
    //myChartPointDiff.showLoading();
    option = {
		//title: {
		//		text: title0,
		//		left: 'center',
		//		top: 0,
				//subtext:'hh'    
		//					},
      xAxis: {
        name:'Log2FC',
        nameLocation:'middle',
        min:-5,
        max:5,
        nameTextStyle: {
    		        fontSize: 16,
    		        align: "center",
    		        padding: [10,0, 0, 0]
    		      },
      },
      yAxis: {
		  //min:-2,
		  //max:5,
        name:'-Log10(P-Value)',
        nameLocation:'middle',
        nameTextStyle: {
    		        fontSize: 16,
    		        align: "center",
    		        padding: [0,0, 12, 0]
    		      },
      },
      legned:{},
      tooltip: {
          trigger: 'item',
          axisPointer: {
              type: 'cross'
          }
      },
      series: [
        {
          symbolSize: 10,
          data: data0,
          type: 'scatter',
          itemStyle: {
            normal: {
              color: function (params) {
                var value1 = params.value;
                if (value1[1] > 1.3) {
                  if (value1[0] > 0.58) {
                    return '#E1776C';//red
                  } else if (value1[0] < -0.58) {
                    return '#3487B6';//blue
                  }
                } else {
                  return 'grey';
                }
              }
            }
          },
          tooltip:{
              formatter:function(params){
                return [
                  'Name: '+params.data[2],
                  'LogFC: '+params.data[0],
                  '-Log10(P-value): '+params.data[1]
                  ].join('<br/>');
              }
            },
          markLine: {
            symbol: ['none', 'none'],
            data: [
              {
                xAxis: -0.58
              },
              {
                xAxis: 0.58
              },
              {
                yAxis: 1.3
              }
            ],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#000000'
                }
              }
            },
            silent: true
          },
        }
      ]
    };
    myChartPointDiff.setOption(option);
}

function volcano_plot(data0,div,title0){
	var width0=$("#width_id").width()*0.33;
	$("#"+div).css("height",500);
	$("#"+div).css("width",width0);
	var chartDom = document.getElementById(div);
    var myChartPointDiff = echarts.init(chartDom);
    //myChartPointDiff.showLoading();
    option = {
		title: {
				text: title0,
				left: 'center',
				top: 0,
				//subtext:'hh'    
							},
      xAxis: {
        name:'Log2FC',
        nameLocation:'middle',
        min:-5,
        max:5,
        nameTextStyle: {
    		        fontSize: 16,
    		        align: "center",
    		        padding: [10,0, 0, 0]
    		      },
      },
      yAxis: {
		  //min:-2,
		  //max:5,
        name:'-Log10(P-Value)',
        nameLocation:'middle',
        nameTextStyle: {
    		        fontSize: 16,
    		        align: "center",
    		        padding: [0,0, 12, 0]
    		      },
      },
      legned:{},
      tooltip: {
          trigger: 'item',
          axisPointer: {
              type: 'cross'
          }
      },
      series: [
        {
          symbolSize: 10,
          data: data0,
          type: 'scatter',
          itemStyle: {
            normal: {
              color: function (params) {
                var value1 = params.value;
                if (value1[1] > 1.3) {
                  if (value1[0] > 0.58) {
                    return '#E1776C';//red
                  } else if (value1[0] < -0.58) {
                    return '#3487B6';//blue
                  }
                } else {
                  return 'grey';
                }
              }
            }
          },
          tooltip:{
              formatter:function(params){
                return [
                  'Name: '+params.data[2],
                  'LogFC: '+params.data[0],
                  '-Log10(P-value): '+params.data[1]
                  ].join('<br/>');
              }
            },
          markLine: {
            symbol: ['none', 'none'],
            data: [
              {
                xAxis: -0.58
              },
              {
                xAxis: 0.58
              },
              {
                yAxis: 1.3
              }
            ],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#000000'
                }
              }
            },
            silent: true
          },
        }
      ]
    };
    myChartPointDiff.setOption(option);
}
function st_umap_height_noleg_width(data,div,title0,height){
	var data=data;
	var div=div;
	var width0=$("#width_id").width()*0.5;
	var myPlot = document.getElementById(div);
	var layout = {
	         height: height,
	         width: width0,
	         font: {size: 15},
	        showlegend: false,
	         //margin: {"t": 80, "b": 150, "l": 30, "r": 5},
			title:title0,
			legend: {
//     	   	    bgcolor: 'white',
//     	   	    borderwidth: 1,
//     	   	    bordercolor: 'black',
     	   	    //orientation: 'h',//h.v
     	   	   // xanchor: 'center',
     	   	    //x: 10,
     	   	    //y:-0.2,
    	   	    font: {
    	   	      size: 12,
    	   	    }
    	   	  },
			  
	        		  xaxis: {
	        		    showticklabels : false
	        		  },
	        		  yaxis: {
	        		    showticklabels : false
	        		  
	        		  }
	    }
	    Plotly.newPlot(div, data, layout, {showSendToCloud: true});
		myPlot.on('plotly_click', function(data){
    var pts = '';
    var spot_name0 = '';
    for(var i=0; i < data.points.length; i++){
        pts = 'x = '+data.points[i].x +'\ny = '+ data.points[i].y +'\nname = '+ data.points[i].text+ '\n\n';
        spot_name0=data.points[i].text;
    }
 

	
});
}

function st_umap_height_noleg(data,div,title0,height){
	var data=data;
	var div=div;
	var myPlot = document.getElementById(div);
	var layout = {
	         height: height,
	         //width: width,
	         font: {size: 15},
	        showlegend: false,
	         //margin: {"t": 80, "b": 150, "l": 30, "r": 5},
			title:title0,
			legend: {
//     	   	    bgcolor: 'white',
//     	   	    borderwidth: 1,
//     	   	    bordercolor: 'black',
     	   	    //orientation: 'h',//h.v
     	   	   // xanchor: 'center',
     	   	    //x: 10,
     	   	    //y:-0.2,
    	   	    font: {
    	   	      size: 12,
    	   	    }
    	   	  },
	        		  xaxis: {
	        		    showticklabels : false
	        		  },
	        		  yaxis: {
	        		    showticklabels : false
	        		  
	        		  }
	    }
	    Plotly.newPlot(div, data, layout, {showSendToCloud: true});
		myPlot.on('plotly_click', function(data){
    var pts = '';
    var spot_name0 = '';
    for(var i=0; i < data.points.length; i++){
        pts = 'x = '+data.points[i].x +'\ny = '+ data.points[i].y +'\nname = '+ data.points[i].text+ '\n\n';
        spot_name0=data.points[i].text;
    }
 

	
});
}
function cluster_st_select_neb(bac_neb_re,div,marker_selectDiv,violinDiv){
	var data_option=[];
	var neb_names=bac_neb_re['cluster_name'].split(",");
	for(var i=0;i<neb_names.length;i++){
		if(bac_neb_re[neb_names[i]+"_marker"] != "none"){
			data_option.push(neb_names[i]);
		}
	}
	if(data_option.length==0){
		document.getElementById(div).style.display="none";
		document.getElementById(marker_selectDiv).style.display="none";
		document.getElementById(violinDiv).style.display="none";
	}else{
		var data_option_valuearray = [];
		for (var i=0;i<data_option.length;i++)
					{ 
						json={}
						json['name']=data_option[i];
						json['value']=data_option[i];
						data_option_valuearray.push(json);
					}
					var e="#"+div;
					var demo1_gene = xmSelect.render({
						el: e, 
						filterable: true,
						size: 'big',//选中的之后显示的字的大小
					    theme: {color: '#ff9a18',},//主题颜色
						tips: 'Select a marker for view',
						radio: true,
						clickClose: true,
						data: [],
						on: function(data){//监听
							var arr = data.arr;
							var change = data.change;
							//isAdd, 此次操作是新增还是删除
							var isAdd = data.isAdd;
							var cluster0=arr[0]["value"];
							///
							var Cluster0_marker_name =bac_neb_re[cluster0+"_marker"].split(",");
							marker_st_select_neb(Cluster0_marker_name[0],Cluster0_marker_name,marker_selectDiv,violinDiv);
							}
					})
					demo1_gene.update({
					data: data_option_valuearray
					})
		// 赋值
			demo1_gene.setValue([
			{name: data_option[0], value: data_option[0]},
			])
			var Cluster0_marker_name =bac_neb_re[data_option[0]+"_marker"].split(",");
			marker_st_select_neb(Cluster0_marker_name[0],Cluster0_marker_name,marker_selectDiv,violinDiv);
	}
	
}

function bac_neb_xml(bac_neb_re,bac_re,metagenome_type_first,div_left,div_right,color_plot_div,barplot_div){
	var data_option=bac_re["metagenome_type"].split(",");
	var data_option_valuearray = [];
	for (var i=0;i<data_option.length;i++)
					{ 
						json={}
						json['name']=data_option[i];
						json['value']=data_option[i];
						data_option_valuearray.push(json);
					}
					var e="#"+div_left;
					var demo1_gene = xmSelect.render({
						el: e, 
						filterable: true,
						size: 'big',//选中的之后显示的字的大小
					    theme: {color: '#ff9a18',},//主题颜色
						tips: 'Select a key for view',
						radio: true,
						clickClose: true,
						data: [],
						on: function(data){//监听
							var arr = data.arr;
							var change = data.change;
							//isAdd, 此次操作是新增还是删除
							var isAdd = data.isAdd;
							var metagenome_type0=arr[0]["value"];
							///
							bac_neb_xml_right(bac_neb_re,bac_re,metagenome_type0,div_right,color_plot_div,barplot_div);
							
							}
					})
					demo1_gene.update({
					data: data_option_valuearray
					})
		// 赋值
			demo1_gene.setValue([
			{name: metagenome_type_first, value: metagenome_type_first},
			])
			//
			bac_neb_xml_right(bac_neb_re,bac_re,metagenome_type_first,div_right,color_plot_div,barplot_div);
			
			

}
function bac_neb_xml_right(bac_neb_re,bac_re,metagenome_type,div_right,color_plot_div,barplot_div){
	var data_option=bac_re[metagenome_type+"_subclass"].split(",");
	var data_option_valuearray = [];
	
	var x0=bac_neb_re["cluster_name"].split(",");
	var color0=bac_neb_re["cluster_color"].split(",");
	for (var i=0;i<data_option.length;i++)
					{ 
						json={}
						json['name']=data_option[i];
						json['value']=data_option[i];
						data_option_valuearray.push(json);
					}
					var e="#"+div_right;
					var demo1_gene = xmSelect.render({
						el: e, 
						filterable: true,
						size: 'big',//选中的之后显示的字的大小
					    theme: {color: '#ff9a18',},//主题颜色
						tips: 'Select a key for view',
						radio: true,
						clickClose: true,
						data: [],
						on: function(data){//监听
							var arr = data.arr;
							var change = data.change;
							//isAdd, 此次操作是新增还是删除
							var isAdd = data.isAdd;
							var metagenome0=arr[0]["value"];
							///
							bac_neb_colorPlot(bac_re,metagenome_type,metagenome0,color_plot_div);
							
							var y0=bac_neb_re[metagenome_type+"_"+metagenome0+"_neb_num"].split(",");
							plotly_barplot_neb(x0,y0,color0,metagenome0,barplot_div);
							}
					})
					demo1_gene.update({
					data: data_option_valuearray
					})
		// 赋值
			demo1_gene.setValue([
			{name: data_option[0], value: data_option[0]},
			])
			//
			bac_neb_colorPlot(bac_re,metagenome_type,data_option[0],color_plot_div);
			
			var y0=bac_neb_re[metagenome_type+"_"+data_option[0]+"_neb_num"].split(",");
			plotly_barplot_neb(x0,y0,color0,data_option[0],barplot_div);
			

}
function bac_neb_colorPlot(bac_re,metagenome_type,metagenome_subtype,color_plot_div){
	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange =function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var returnData=xmlHttp.responseText;
			var jsonobj=JSON.parse(returnData);
			if(jsonobj.error_attention=="no"){
				////
				var color=jsonobj.exp.split(",");
				var slice_spot_name=slice_cluster_re["dev_spots"].split(",");
				var slice_spot_x=slice_cluster_re["spots_x"].split(",");
				var slice_spot_y=slice_cluster_re["spots_y"].split(",");
				plotly_svgSpotScatter(0.5,metagenome_subtype,slice_spot_name,slice_spot_x,slice_spot_y,color,color_plot_div);
				

				
			}else{
				$("#"+color_plot_div).hide();
			}
				}
			}
	var param="metagenome_type="+metagenome_type+"&metagenome_subtype="+metagenome_subtype+"&dataSetID="+dataSetID;
	xmlHttp.open("get","MysqlExp.jsp?"+param,true);
	xmlHttp.send();
	
}

function plotly_barplot_neb(x,y,color,Name,div){
	var title0=Name;
	var width0=$("#width_id").width()*0.8;
	var x=x;
	var y=y;
	var color=color;
	var div=div;
	var width_bar=[];
	if (color.length>6){
		width_bar="";
	}else{
		for (var i=0;i<color.length;i++){
			width_bar.push(0.3);
		}
	}
	//自定义 hovertext
	var text1=[];
	for (var j=0;j<x.length;j++){
	text1.push("Neighborhood: "+x[j]+" <br>"+"Abundance  : "+y[j]+"  ");
	}
	var trace1 = {
			  x: x,
			  y: y,
			 // text: y.map(String),
			  //textposition: 'auto',
			  //hoverinfo: 'none',
			  width: width_bar,
			  hovertext :text1,
	          hoverinfo :"text",//"x", "y", "z", "text", "name" joined with a "+" OR "all" or "none" or "skip". Examples: "x", "y", "x+y", "x+y+z", "all"
			  marker:{
			    color: color
			  },
			  type: 'bar'
			};
			var data = [trace1];
			var layout = {
				yaxis: {
	        		    //range: [0, 8],
	        		    title: 'No. of spot ' ,
	        		    zeroline: true
	        		  },
			  height: 650,
			  width:width0,
			  title: title0,
			  font: {size: 15}
			};
			Plotly.newPlot(div, data, layout);
}
function marker_st_select_neb(marker_first,marker_name,div,violinDiv){
	var data_option=marker_name;
	var data_option_valuearray = [];
	for (var i=0;i<data_option.length;i++)
					{ 
						json={}
						json['name']=data_option[i];
						json['value']=data_option[i];
						data_option_valuearray.push(json);
					}
					var e="#"+div;
					var demo1_gene = xmSelect.render({
						el: e, 
						filterable: true,
						size: 'big',//选中的之后显示的字的大小
					    theme: {color: '#ff9a18',},//主题颜色
						tips: 'Select a marker for view',
						radio: true,
						clickClose: true,
						data: [],
						on: function(data){//监听
							var arr = data.arr;
							var change = data.change;
							//isAdd, 此次操作是新增还是删除
							var isAdd = data.isAdd;
							var gene0=arr[0]["value"];
							///
							
							violin_copy_gene_st_marker_neb(webpath,bac_neb_re,dataSetID,gene0,'st_neb',violinDiv);
							}
					})
					demo1_gene.update({
					data: data_option_valuearray
					})
		// 赋值
			demo1_gene.setValue([
			{name: marker_first, value: marker_first},
			])
			
			violin_copy_gene_st_marker_neb(webpath,bac_neb_re,dataSetID,marker_first,'st_neb',violinDiv);

}
function bac_exp_table_colorPlot_onclick(bac_re,metagenome_type,metagenome_subtype,table_div,color_plot_div){
	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange =function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var returnData=xmlHttp.responseText;
			var jsonobj=JSON.parse(returnData);
			if(jsonobj.error_attention=="no"){
				////
				var color=jsonobj.exp.split(",");
				var slice_spot_name=slice_cluster_re["dev_spots"].split(",");
				var slice_spot_x=slice_cluster_re["spots_x"].split(",");
				var slice_spot_y=slice_cluster_re["spots_y"].split(",");
				plotly_svgSpotScatter(0.5,metagenome_subtype,slice_spot_name,slice_spot_x,slice_spot_y,color,color_plot_div);
				
				///table 
				var path0="0_files/bacExpDatatable.txt"
				var colnames0=["Spots name",metagenome_type,"Expression"];
				
				
				if ($.fn.dataTable.isDataTable('#'+table_div)) {
					$('#'+table_div).DataTable().clear().destroy();
				}
				autoColTable_bac_exp(path0,colnames0,table_div);
				
			}else{
				$("#"+color_plot_div).hide();
			}
				}
			}
	var param="metagenome_type="+metagenome_type+"&metagenome_subtype="+metagenome_subtype+"&dataSetID="+dataSetID;
	xmlHttp.open("get","MysqlExp.jsp?"+param,true);
	xmlHttp.send();
	
}
var xmSelectBac_beb_diff = xmSelect.render({
	el: '#xml_bac_neb_diff',
	direction: 'down',//向上展开
	name: 'xml_bac_neb_diff',//表单的name属性
	size: 'big',//选中的之后显示的字的大小
    theme: {color: '#ff9a18',
    	},//主题颜色
    tips: ' Select a key ',
    style: {
		marginLeft: '0px',
		borderRadius: '1px',
		height: '45px',
		//width:'400px',
		border: '1px solid #ced4da',
	},
	radio: true,
	clickClose: true,
	filterable: true,
	data: [
{name: 'Kingdom', value: 'kingdom'},
{name: 'Phylum', value: 'phylum'},
{name: 'Class', value: 'class'},
{name: 'Order', value: 'order'},
{name: 'Family', value: 'family'},
{name: 'Genus', value: 'genus',selected: true},
{name: 'Species', value: 'species'},
	],
	on: function(data){//监听					                            		
		//arr:  当前多选已选中的数据
		var arr = data.arr;
		var change = data.change;
		//isAdd, 此次操作是新增还是删除
		var isAdd = data.isAdd;
		var value0=arr[0]["value"];
		//table
		if ($.fn.dataTable.isDataTable('#bac_neb_diff_table')) {
			$('#bac_neb_diff_table').DataTable().clear().destroy();
		}
		 
		var path0=bac_table_dir+"/ST_neb_diff_"+value0+"_table.txt";
		bac_neb_diff_table(path0,"bac_neb_diff_table");
		//plot
		volcano_plot_bac_beb_diff_all(value0,bac_neb_re,"volcano_Mal_Bdy","volcano_Bdy_nMal","volcano_Mal_nMal");
		
	}
})
var xmSelectBac = xmSelect.render({
	el: '#xml_bac',
	direction: 'down',//向上展开
	name: 'xml_bac',//表单的name属性
	size: 'big',//选中的之后显示的字的大小
    theme: {color: '#ff9a18',
    	},//主题颜色
    tips: ' Select a key ',
    style: {
		marginLeft: '0px',
		borderRadius: '1px',
		height: '45px',
		//width:'400px',
		border: '1px solid #ced4da',
	},
	radio: true,
	clickClose: true,
	filterable: true,
	data: [
{name: 'Kingdom', value: 'kingdom'},
{name: 'Phylum', value: 'phylum'},
{name: 'Class', value: 'class'},
{name: 'Order', value: 'order'},
{name: 'Family', value: 'family'},
{name: 'Genus', value: 'genus',selected: true},
{name: 'Species', value: 'species'},
	],
	on: function(data){//监听					                            		
		//arr:  当前多选已选中的数据
		var arr = data.arr;
		var change = data.change;
		//isAdd, 此次操作是新增还是删除
		var isAdd = data.isAdd;
		var value0=arr[0]["value"];
		//var datasetID_name=arr[0]["name"];
		 bac_color_map(bac_re,value0);
		 bac_bar(bac_re,value0,'base_bac_stat');
		
		if ($.fn.dataTable.isDataTable('#base_bac_table')) {
			$('#base_bac_table').DataTable().clear().destroy();
		}
		var path0=bac_table_dir+"/bac_"+value0+"_datatable.txt";
		var colnames0=bac_re[value0+"_subclass"].split(",");
		colnames0.sort(); 
		colnames0.unshift("spot");
		autoColTable_bac(path0,colnames0,'base_bac_table');
	}
})
function bac_exp_xml_left(bac_re,metagenome_type_first,div_left,div_right,table_div,color_plot_div,barplot_div){
	var data_option=bac_re["metagenome_type"].split(",");
	var data_option_valuearray = [];
	for (var i=0;i<data_option.length;i++)
					{ 
						json={}
						json['name']=data_option[i];
						json['value']=data_option[i];
						data_option_valuearray.push(json);
					}
					var e="#"+div_left;
					var demo1_gene = xmSelect.render({
						el: e, 
						filterable: true,
						size: 'big',//选中的之后显示的字的大小
					    theme: {color: '#ff9a18',},//主题颜色
						tips: 'Select a key for view',
						radio: true,
						clickClose: true,
						data: [],
						on: function(data){//监听
							var arr = data.arr;
							var change = data.change;
							//isAdd, 此次操作是新增还是删除
							var isAdd = data.isAdd;
							var metagenome_type0=arr[0]["value"];
							///
							bac_exp_xml_right(bac_re,metagenome_type0,div_right,table_div,color_plot_div,barplot_div);
							
							}
					})
					demo1_gene.update({
					data: data_option_valuearray
					})
		// 赋值
			demo1_gene.setValue([
			{name: metagenome_type_first, value: metagenome_type_first},
			])
			//
			bac_exp_xml_right(bac_re,metagenome_type_first,div_right,table_div,color_plot_div,barplot_div);
			
			

}
function bac_exp_xml_right(bac_re,metagenome_type,div_right,table_div,color_plot_div,barplot_div){
	var data_option=bac_re[metagenome_type+"_subclass"].split(",");
	var data_option_valuearray = [];
	for (var i=0;i<data_option.length;i++)
					{ 
						json={}
						json['name']=data_option[i];
						json['value']=data_option[i];
						data_option_valuearray.push(json);
					}
					var e="#"+div_right;
					var demo1_gene = xmSelect.render({
						el: e, 
						filterable: true,
						size: 'big',//选中的之后显示的字的大小
					    theme: {color: '#ff9a18',},//主题颜色
						tips: 'Select a key for view',
						radio: true,
						clickClose: true,
						data: [],
						on: function(data){//监听
							var arr = data.arr;
							var change = data.change;
							//isAdd, 此次操作是新增还是删除
							var isAdd = data.isAdd;
							var metagenome0=arr[0]["value"];
							///
							bac_exp_table_colorPlot_onclick(bac_re,metagenome_type,metagenome0,table_div,color_plot_div);
							
							
							var value0=[];
							bac0_num=bac_re[metagenome_type+"_"+metagenome0+"_x_umap"].split(",").length;
							//bac0_other_num=slice_cluster_re["spots_x"].split(",").length-bac0_num;
							var bac0_other_num=0;
							var metagenome_type_sub_detailes=bac_re[metagenome_type+"_subclass"].split(",");
							for (var jj=0; jj < metagenome_type_sub_detailes.length; jj++){
								bac0_other_num=bac0_other_num+bac_re[metagenome_type+"_"+metagenome_type_sub_detailes[jj]+"_x_umap"].split(",").length;
							}
							bac0_other_num=bac0_other_num-bac0_num;
							value0.push(bac0_num);
							value0.push(bac0_other_num);
							var labels0=[];
							labels0.push(metagenome0);
							labels0.push('Other');
							var color0=[];
							color0.push(bac_re[metagenome_type+"_"+metagenome0+"_color_umap"]);
							color0.push('#B6B6B6');
							plotyPielot_sq(value0,labels0,metagenome0+' density',barplot_div,color0);
							
							}
					})
					demo1_gene.update({
					data: data_option_valuearray
					})
		// 赋值
			demo1_gene.setValue([
			{name: data_option[0], value: data_option[0]},
			])
			//
			bac_exp_table_colorPlot(bac_re,metagenome_type,data_option[0],table_div,color_plot_div);
			
			var value0=[];
			var bac0_num=bac_re[metagenome_type+"_"+data_option[0]+"_x_umap"].split(",").length;
			//bac0_other_num=slice_cluster_re["spots_x"].split(",").length-bac0_num;
			var bac0_other_num=0;
			var metagenome_type_sub_detailes=bac_re[metagenome_type+"_subclass"].split(",");
			for (var jj=0; jj < metagenome_type_sub_detailes.length; jj++){
				bac0_other_num=bac0_other_num+bac_re[metagenome_type+"_"+metagenome_type_sub_detailes[jj]+"_x_umap"].split(",").length;
			}
			bac0_other_num=bac0_other_num-bac0_num;
			value0.push(bac0_num);
			value0.push(bac0_other_num);
			var labels0=[];
			labels0.push(data_option[0]);
			labels0.push('Other');
			var color0=[];
			color0.push(bac_re[metagenome_type+"_"+data_option[0]+"_color_umap"]);
			color0.push('#B6B6B6');
			plotyPielot_sq(value0,labels0,data_option[0]+' density',barplot_div,color0);

}

function bac_exp_table_colorPlot(bac_re,metagenome_type,metagenome_subtype,table_div,color_plot_div){
	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange =function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var returnData=xmlHttp.responseText;
			//console.log(returnData);
			var jsonobj=JSON.parse(returnData);
			//console.log();
			if(jsonobj.error_attention=="no"){
				////
				var color=jsonobj.exp.split(",");
				var slice_spot_name=slice_cluster_re["dev_spots"].split(",");
				var slice_spot_x=slice_cluster_re["spots_x"].split(",");
				var slice_spot_y=slice_cluster_re["spots_y"].split(",");
				plotly_svgSpotScatter(0.5,metagenome_subtype,slice_spot_name,slice_spot_x,slice_spot_y,color,color_plot_div);
				
				///table 
				var path0="0_files/bacExpDatatable.txt"
				var colnames0=["Spots name",metagenome_type,"Expression"];
				
				//var oldTable = $('#'+table_div).dataTable();
				//oldTable.fnClearTable(); //清空一下table
				//oldTable.fnDestroy(); //还原初始化了的dataTable
				if ($.fn.dataTable.isDataTable('#'+table_div)) {
					$('#'+table_div).DataTable().clear().destroy();
				}
				autoColTable_bac_exp(path0,colnames0,table_div);
			
			}else{
				$("#"+color_plot_div).hide();
			}
				}
			}
	var param="metagenome_type="+metagenome_type+"&metagenome_subtype="+metagenome_subtype+"&dataSetID="+dataSetID;
	xmlHttp.open("get","MysqlExp.jsp?"+param,true);
	xmlHttp.send();
	
}
function bac_bar(bac_re,metagenome_type,div){
	var x=bac_re[metagenome_type+"_pie_name"].split(",");
	var y=bac_re[metagenome_type+"_pie_value"].split(",");
	var color=bac_re[metagenome_type+"_pie_color"].split(",");
	var div=div;
	var width_bar=[];
	if (color.length>6){
		width_bar="";
	}else{
		for (var i=0;i<color.length;i++){
			width_bar.push(0.3);
		}
	}
	//自定义 hovertext
	var text1=[];
	for (var j=0;j<x.length;j++){
	text1.push(metagenome_type+" : "+x[j]+" <br>"+"No. of UMI : "+y[j]+"  ");
	}
	var trace1 = {
			  x: x,
			  y: y,
			 // text: y.map(String),
			  //textposition: 'auto',
			  //hoverinfo: 'none',
			  width: width_bar,
			  hovertext :text1,
	          hoverinfo :"text",//"x", "y", "z", "text", "name" joined with a "+" OR "all" or "none" or "skip". Examples: "x", "y", "x+y", "x+y+z", "all"
			  marker:{
			    //color: color
				color:["#A7CBEF","#F9D977","#B196C1","#C2E3EC","#7CBFB6","#EFA7A9","#E4CFB2","#DC98BF","#5F91C7","#ECBEAA","#D7B7DF","#D8D9C1","#EEF0A5","#92CBDC","#FFCCCC","#99CCCC","#EEF0A5","#CCCCFF","#A7CBEF","#F9D977","#B196C1","#C2E3EC","#7CBFB6","#EFA7A9","#E4CFB2","#DC98BF","#5F91C7","#ECBEAA","#D7B7DF","#D8D9C1","#EEF0A5","#92CBDC","#FFCCCC","#99CCCC","#EEF0A5","#CCCCFF","#FFCC99","#99CCFF","#A7CBEF","#F9D977","#B196C1","#C2E3EC","#7CBFB6","#EFA7A9","#E4CFB2","#DC98BF","#5F91C7","#ECBEAA","#D7B7DF","#D8D9C1","#EEF0A5","#92CBDC","#FFCCCC","#99CCCC","#EEF0A5","#CCCCFF","#FFCC99","#99CCFF","#A7CBEF","#F9D977","#B196C1","#C2E3EC","#7CBFB6","#EFA7A9","#E4CFB2","#DC98BF","#5F91C7","#ECBEAA","#D7B7DF","#D8D9C1","#EEF0A5","#92CBDC","#FFCCCC","#99CCCC","#EEF0A5","#CCCCFF","#FFCC99","#99CCFF","#A7CBEF","#F9D977","#B196C1","#C2E3EC","#7CBFB6","#EFA7A9","#E4CFB2","#DC98BF","#5F91C7","#ECBEAA","#D7B7DF","#D8D9C1","#EEF0A5","#92CBDC","#FFCCCC","#99CCCC","#EEF0A5","#CCCCFF","#FFCC99","#99CCFF","#5F91C7","#ECBEAA","#D7B7DF","#D8D9C1","#EEF0A5","#92CBDC","#FFCCCC","#99CCCC","#EEF0A5","#CCCCFF","#FFCC99","#99CCFF"]
			  },
			  type: 'bar'
			};
			var data = [trace1];
			var layout = {
				yaxis: {
	        		    //range: [0, 8],
	        		    title: 'No. of UMI ' ,
	        		    zeroline: true
	        		  },
			  height: 500,
			  title: metagenome_type,
			  font: {size: 15}
			};
			Plotly.newPlot(div, data, layout);
}

function bac_color_map(bac_re,metagenome_type){
	var metagenome_type0_cluster=bac_re[metagenome_type+"_subclass"].split(",");
	metagenome_type0_cluster.sort();  
	var num_cluster=metagenome_type0_cluster.length;
	data_umap_bac=[];
	
	var json0={};
	json0["name"]="None_Bacteria";
	json0["x"]=bac_re['noneBac_x_umap'].split(",");
	json0["y"]=bac_re['noneBac_y_umap'].split(",");
	json0["text"]=bac_re['noneBac_text_umap'].split(",");
	json0["mode"]='markers';
	json_marker={};
	json_marker["color"]=bac_re['noneBac_color_umap'];
	json_marker["size"]=5;//点大小
	json0["marker"]=json_marker;
	data_umap_bac.push(json0);
	for (var i=0;i<num_cluster;i++){
		var json0={};
		json0["name"]=metagenome_type0_cluster[i];
		var x=metagenome_type+"_"+metagenome_type0_cluster[i]+"_x_umap";
		var y=metagenome_type+"_"+metagenome_type0_cluster[i]+"_y_umap";
		var text0=metagenome_type+"_"+metagenome_type0_cluster[i]+"_text_umap";
		var x_array=bac_re[x].split(",");
		var y_array=bac_re[y].split(",");
		var text0_array=bac_re[text0].split(",");
		json0["x"]=x_array;
		json0["y"]=y_array;
		json0["text"]=text0_array;
		json0["mode"]='markers';
		var color0=metagenome_type+"_"+metagenome_type0_cluster[i]+"_color_umap";
		json_marker={};
		json_marker["color"]=bac_re[color0];
		json_marker["size"]=5;//点大小
		json0["marker"]=json_marker;
		data_umap_bac.push(json0);

	}
	
	//plot
	bac_umap_width_height(data_umap_bac,'base_bac',metagenome_type,600,600);
	
	//st_umap_width_height_scale(data_umap_bac,'base_bac',metagenome_type,clusterwidth,clusterheight,clusterDoubledt,legend_loc);
}

function svg_spatial_first(svg0){
	//var slice_select0=overview_re.slice_first;
	var database_name=dataSetID+"_st".toLowerCase();
	///
	violin_copy_gene_svg(webpath,slice_cluster_re,dataSetID,svg0,'st','svg_violin',0.5);
	////
	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange =function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var returnData=xmlHttp.responseText;
			var jsonobj=JSON.parse(returnData);
				var color=jsonobj.exp.split(",");
				var slice_spot_name=slice_cluster_re["dev_spots"].split(",");
				var slice_spot_x=slice_cluster_re["spots_x"].split(",");
				var slice_spot_y=slice_cluster_re["spots_y"].split(",");
				plotly_svgSpotScatter(0.5,svg0,slice_spot_name,slice_spot_x,slice_spot_y,color,'svg_distribution');
				}
			}			
	var param="gene="+svg0+"&database_name="+database_name;
	xmlHttp.open("get","MysqlSpotExp.jsp?"+param,true);
	xmlHttp.send();
	////
}

function svg_spatial_onclick(svg0){
	var database_name=dataSetID+"_st".toLowerCase();
	///
	violin_copy_gene_st_marker(webpath,slice_cluster_re,dataSetID,svg0,'st','svg_violin');
	////
	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange =function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var returnData=xmlHttp.responseText;
			var jsonobj=JSON.parse(returnData);
				var color=jsonobj.exp.split(",");
				var slice_spot_name=slice_cluster_re["dev_spots"].split(",");
				var slice_spot_x=slice_cluster_re["spots_x"].split(",");
				var slice_spot_y=slice_cluster_re["spots_y"].split(",");
				plotly_svgSpotScatter(0.49,svg0,slice_spot_name,slice_spot_x,slice_spot_y,color,'svg_distribution');
				}
			}			
	var param="gene="+svg0+"&database_name="+database_name;
	xmlHttp.open("get","MysqlSpotExp.jsp?"+param,true);
	xmlHttp.send();
	////

}
function arr_sum(arr0){
	var sum0=0;
	for (var i=0;i<arr0.length;i++){
		sum0 =sum0+Number(arr0[i]);
	}
	return sum0;
}
function deconvolution_select(spots_name,spot_dev_re,div,barDiv){
	var data_option=spots_name;
	var data_option_valuearray = [];
	//json={}
	//json['name']="All spots";
	//json['value']="full";
	//data_option_valuearray.push(json);
	for (var i=0;i<data_option.length;i++)
					{ 
						json={}
						json['name']=data_option[i];
						json['value']=data_option[i];
						data_option_valuearray.push(json);
					}
					var e="#"+div;
					var demo1_gene = xmSelect.render({
						el: e, 
						filterable: true,
						size: 'big',//选中的之后显示的字的大小
					    theme: {color: '#ff9a18',},//主题颜色
						tips: 'Select a spot for view',
						radio: true,
						clickClose: true,
						data: [],
						on: function(data){//监听
							var arr = data.arr;
							var change = data.change;
							//isAdd, 此次操作是新增还是删除
							var isAdd = data.isAdd;
							var spot_name0=arr[0]["value"];
							///
							//var slice_select0=xmSelect.get('#'+xmlDiv, true).getValue('valueStr');
							
							var spot_celltypes=spot_dev_re["dev_celltype"].split(",");
							var spot_color=spot_dev_re["dev_celltype_color"].split(",");
							var spot0_y=spot_dev_re[spot_name0].split(",");
							plotly_barplot(spot_celltypes,spot0_y,spot_color,spot_name0,barDiv);
						}
					})
					demo1_gene.update({
					data: data_option_valuearray
					})
		// 赋值
			demo1_gene.setValue([
			                     {name: 'All spots', value: 'full'},
			])

}
function cluster_st_select(slice_cluster_re,cluster_names,div,marker_selectDiv,violinDiv){
	var data_option=cluster_names;
	var data_option_valuearray = [];
	for (var i=0;i<data_option.length;i++)
					{ 
						json={}
						json['name']=data_option[i];
						json['value']=data_option[i];
						data_option_valuearray.push(json);
					}
					var e="#"+div;
					var demo1_gene = xmSelect.render({
						el: e, 
						filterable: true,
						size: 'big',//选中的之后显示的字的大小
					    theme: {color: '#ff9a18',},//主题颜色
						tips: 'Select a marker for view',
						radio: true,
						clickClose: true,
						data: [],
						on: function(data){//监听
							var arr = data.arr;
							var change = data.change;
							//isAdd, 此次操作是新增还是删除
							var isAdd = data.isAdd;
							var cluster0=arr[0]["value"];
							///
							var Cluster0_marker_name =slice_cluster_re[cluster0+"_marker_name"].split(",");
							marker_st_select(Cluster0_marker_name[0],Cluster0_marker_name,marker_selectDiv,violinDiv);
							}
					})
					demo1_gene.update({
					data: data_option_valuearray
					})
		// 赋值
			demo1_gene.setValue([
			{name: data_option[0], value: data_option[0]},
			])
			var Cluster0_marker_name =slice_cluster_re[data_option[0]+"_marker_name"].split(",");
			marker_st_select(Cluster0_marker_name[0],Cluster0_marker_name,marker_selectDiv,violinDiv);

	
}
function marker_st_select(marker_first,marker_name,div,violinDiv){
	var data_option=marker_name;
	var data_option_valuearray = [];
	for (var i=0;i<data_option.length;i++)
					{ 
						json={}
						json['name']=data_option[i];
						json['value']=data_option[i];
						data_option_valuearray.push(json);
					}
					var e="#"+div;
					var demo1_gene = xmSelect.render({
						el: e, 
						filterable: true,
						size: 'big',//选中的之后显示的字的大小
					    theme: {color: '#ff9a18',},//主题颜色
						tips: 'Select a marker for view',
						radio: true,
						clickClose: true,
						data: [],
						on: function(data){//监听
							var arr = data.arr;
							var change = data.change;
							//isAdd, 此次操作是新增还是删除
							var isAdd = data.isAdd;
							var gene0=arr[0]["value"];
							///
							//var slice0=xmSelect.get('#overview_select', true).getValue('valueStr');
							violin_copy_gene_st_marker(webpath,slice_cluster_re,dataSetID,gene0,'st',violinDiv);
							}
					})
					demo1_gene.update({
					data: data_option_valuearray
					})
		// 赋值
			demo1_gene.setValue([
			{name: marker_first, value: marker_first},
			])
			//var slice0=xmSelect.get('#overview_select', true).getValue('valueStr');
			violin_copy_gene_st_marker(webpath,slice_cluster_re,dataSetID,marker_first,'st',violinDiv);

}

function violin_copy_gene_st_marker_neb(webpath,bac_neb_re,dataset0,gene0,type0,div){
	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange =function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var returnData=xmlHttp.responseText;
			var jsonobj=JSON.parse(returnData);
			if(jsonobj.error_attention=="no"){
				var violin_filename=jsonobj.violin_filename;
				//plot
				$("#"+div).show();
				var celltype_all="";
				var color_all="";
				
				celltype_all=bac_neb_re["cluster_name"].split(",");
				color_all=bac_neb_re["cluster_color"].split(",");
				
				var filepath="0_files/violin/"+violin_filename;
				//console.log(filepath);
				
				plotly_violin(celltype_all,color_all,filepath,gene0,div);
				
			}else{
				$("#"+div).hide();
			}
				}
			}
	var param="gene0="+gene0+"&type0="+type0+"&dataset0="+dataset0;
	xmlHttp.open("get","MysqlViolin.jsp?"+param,true);
	xmlHttp.send();
}
function violin_copy_gene_st_marker(webpath,slice_cluster_re,dataset0,gene0,type0,div){
	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange =function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var returnData=xmlHttp.responseText;
			var jsonobj=JSON.parse(returnData);
			if(jsonobj.error_attention=="no"){
				var violin_filename=jsonobj.violin_filename;
				//plot
				$("#"+div).show();
				var celltype_all="";
				var color_all="";
				
				celltype_all=slice_cluster_re["cluster_name"].split(",");
				color_all=slice_cluster_re["cluster_color"].split(",");
				
				var filepath="0_files/violin/"+violin_filename;
				//console.log(filepath);
				
				plotly_violin(celltype_all,color_all,filepath,gene0,div);
				
			}else{
				$("#"+div).hide();
			}
				}
			}
	var param="gene0="+gene0+"&type0="+type0+"&dataset0="+dataset0;
	xmlHttp.open("get","MysqlViolin.jsp?"+param,true);
	xmlHttp.send();
}

function violin_copy_gene_svg(webpath,slice_cluster_re,dataset0,gene0,type0,div,widthScale){
	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange =function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var returnData=xmlHttp.responseText;
			var jsonobj=JSON.parse(returnData);
			if(jsonobj.error_attention=="no"){
				var violin_filename=jsonobj.violin_filename;
				//plot
				$("#"+div).show();
				var celltype_all="";
				var color_all="";
				
				celltype_all=slice_cluster_re["cluster_name"].split(",");
				color_all=slice_cluster_re["cluster_color"].split(",");
				
				var filepath="0_files/violin/"+violin_filename;
				//console.log(filepath);
				
				plotly_violin_widthScale(celltype_all,color_all,filepath,gene0,div,widthScale);
				
			}else{
				$("#"+div).hide();
			}
				}
			}
	var param="gene0="+gene0+"&type0="+type0+"&dataset0="+dataset0;
	xmlHttp.open("get","MysqlViolin.jsp?"+param,true);
	xmlHttp.send();
}

function plotly_violin_widthScale(celltype_all,color_all,filepath,title,div,width0){
	var filepath=filepath;
	var title_n=title;
	var div=div;
	var width0=$("#width_id").width()*width0;
	
	//for change violin
	var style_all=[];
	for (var i=0;i<celltype_all.length;i++)
		{ 	var json0={};
			var json_value={};
			var json_color={};
			json_color["color"]=color_all[i];
			json_value["line"]=json_color;
			json0["target"]=celltype_all[i];
			json0["value"]=json_value;
			style_all.push(json0);
		}
	
	d3.csv(filepath, function(err, rows){
  	  function unpack(rows, key) {
  	  return rows.map(function(row) { return row[key]; });
  	  }
  	var data = [{
  	  type: 'violin',
  	  x: unpack(rows, 'violin_x'),
  	  y: unpack(rows, 'violin_y'),
  	  points: 'none',//all
  	  box: {
  	    visible: true
  	  },
  	  meanline: {
  	    visible: true
  	  },
  	  transforms: [{
  	  	 type: 'groupby',
  		 groups: unpack(rows, 'violin_x'),
  		styles: style_all
  		 
  		}]
  	}]
  	
  	var layout = {
	height: 500,
	width:width0,
	font :{
		  size :16,
	  },
  	  title: title_n,
  	legend: {
   	    font: {
   	      size: 12,
   	    }
   	  },
  	  yaxis: {
  		  //range: [0, 7800],
  		title:'Expression',
  	    zeroline: true
  	  }
  	}

  	Plotly.newPlot(div, data, layout);
  	});
}

function plotly_violin(celltype_all,color_all,filepath,title,div){
	var filepath=filepath;
	var title_n=title;
	var div=div;
	
	
	//for change violin
	var style_all=[];
	for (var i=0;i<celltype_all.length;i++)
		{ 	var json0={};
			var json_value={};
			var json_color={};
			json_color["color"]=color_all[i];
			json_value["line"]=json_color;
			json0["target"]=celltype_all[i];
			json0["value"]=json_value;
			style_all.push(json0);
		}
	
	d3.csv(filepath, function(err, rows){
  	  function unpack(rows, key) {
  	  return rows.map(function(row) { return row[key]; });
  	  }
  	var data = [{
  	  type: 'violin',
  	  x: unpack(rows, 'violin_x'),
  	  y: unpack(rows, 'violin_y'),
  	  points: 'none',//all
  	  box: {
  	    visible: true
  	  },
  	  meanline: {
  	    visible: true
  	  },
  	  transforms: [{
  	  	 type: 'groupby',
  		 groups: unpack(rows, 'violin_x'),
  		styles: style_all
  		 
  		}]
  	}]
  	
  	var layout = {
	height: 500,
	//width:width0,
	font :{
		  size :16,
	  },
  	  title: title_n,
  	legend: {
   	    font: {
   	      size: 14,
   	    }
   	  },
  	  yaxis: {
  		  //range: [0, 7800],
  		title:'Expression',
  	    zeroline: true
  	  }
  	}

  	Plotly.newPlot(div, data, layout);
  	});
}
///////////// table function /////////
function svgTable(path){
	var path=path;
	$(document).ready(function() {
		$("#svg_table").DataTable( {
			"bLengthChange": false, //开关，是否显示每页显示多少条数据的下拉框
        //"aLengthMenu": [15,20,30],//设置每页显示数据条数的下拉选项
        'iDisplayLength': 5, //每页初始显示?条记录
		"deferRender": true,
		"searching":false,
		"bProcessing": true, 
		"paginationType": "full_numbers",
		"serverSide": false, 
		"order": [[ 1, 'desc' ]],
		'ajax': path,
		'columns':[
		{'data':'gene'},
		{'data':'MoransI_observed'},
		{'data':'MoransI_p'},
		{'data':'MoransI_FDR'},
		{'data':'cluster'},
		//{'data':'celltype'},
		{'data':null,
		"render": function ( data, type, row, meta ) {  
		return  "<i class='fa fa-line-chart' aria-hidden='true' style='font-size:20px;cursor: pointer;color:#ff9a18'  onclick= "+'"'+"svg_spatial_onclick("+"'"+row['gene']+"'"+')"'+" ></i> ";
								                    }//data是对应当前cell的值，row是对应当前行中的所有cell的值
		}
		]
		} );  
		} );
}

function marker_table(path,div){
	var path=path;
	$(document).ready(function() {
		$('#'+div).DataTable( {
		"bLengthChange": false, //开关，是否显示每页显示多少条数据的下拉框
		"searching":false,
		"deferRender": true,//big data
		"bProcessing": true, //显示是否加载 
		"paginationType": "full_numbers",//详细分页组，可以支持直接跳转到某页 
		//'paging': false,
		"serverSide": false,      //后台处理分页则为true  
		"aaSorting": [[ 1, "desc" ]],
		'ordering'  :true,
		'ajax': path,
		//"columnDefs": [ {targets: 1, orderable: false, width: "10%"}, ] ,
		'columns':[
{'data':'clusterName'},
{'data':'gene'},
{'data':'pct_1'},
{'data':'pct_2'},
{'data':'avg_log2FC'},
{'data':'p_val'},
{'data':'p_val_adj'}
					]
		} );  
		} );

}
function bac_fun_diff_table(path,div){
	var path=path;
	$(document).ready(function() {
		$('#'+div).DataTable( {
		"bLengthChange": false, //开关，是否显示每页显示多少条数据的下拉框
		"searching":false,
		"deferRender": true,//big data
		"bProcessing": true, //显示是否加载 
		"paginationType": "full_numbers",//详细分页组，可以支持直接跳转到某页 
		//'paging': false,
		"serverSide": false,      //后台处理分页则为true  
		"aaSorting": [[ 3, "desc" ]],
		'ordering'  :true,
		'ajax': path,
		//"columnDefs": [ {targets: 1, orderable: false, width: "10%"}, ] ,
		'columns':[
{'data':'Gene'},
{'data':'Mean_With'},
{'data':'Mean_Without'},
{'data':'LogFC'},
{'data':'Pvalue',render:$.fn_cut_num2(4)},
{'data':'FDR',render:$.fn_cut_num2(4)},
{'data':null,"render": function ( data, type, row, meta ) { 
	if(row['Label']=='With_up'){
		return "Up";
	}
	if(row['Label']=='With_down'){
		return "Down";
	}
	if(row['Label']=='Stable'){
		return "Stable";
	}
	
}}
					]
		} );  
		} );
$.fn_cut_num2 = function (cutoff) {
			return function (data, type, row) {
				if (type === 'display') {
					var str = data.toString(); // cast numbers
		
					return str.length < cutoff ?
						str :
						"<span title='" + str + "'>" + str.substr(0, cutoff - 1) + '&#8230;</span>';
				}
		
				// Search, order and type can use the original data
				return data;
			};
		};
}



function bac_neb_diff_table(path,div){
	var path=path;
	$(document).ready(function() {
		$('#'+div).DataTable( {
		"bLengthChange": false, //开关，是否显示每页显示多少条数据的下拉框
		"searching":false,
		"deferRender": true,//big data
		"bProcessing": true, //显示是否加载 
		"paginationType": "full_numbers",//详细分页组，可以支持直接跳转到某页 
		//'paging': false,
		"serverSide": false,      //后台处理分页则为true  
		"aaSorting": [[ 6, "desc" ]],
		'ordering'  :true,
		'ajax': path,
		//"columnDefs": [ {targets: 1, orderable: false, width: "10%"}, ] ,
		'columns':[
{'data':'metagenome_type'},
{'data':'mean_exp1'},
{'data':'mean_exp2'},
{'data':'LogFC'},
{'data':'Pvalue',render:$.fn_cut_num(4)},
{'data':'FDR',render:$.fn_cut_num(4)},
{'data':null,"render": function ( data, type, row, meta ) { 
	if(row['ComGroup']=='Mal_Bdy'){
		return "Mal vs Bdy";
	}
	if(row['ComGroup']=='Mal_nMal'){
		return "Mal vs nMal";
	}
	if(row['ComGroup']=='Bdy_nMal'){
		return "Bdy vs nMal";
	}
	
}}
]
		} );  
		} );
		
		$.fn_cut_num = function (cutoff) {
			return function (data, type, row) {
				if (type === 'display') {
					var str = data.toString(); // cast numbers
		
					return str.length < cutoff ?
						str :
						"<span title='" + str + "'>" + str.substr(0, cutoff - 1) + '&#8230;</span>';
				}
		
				// Search, order and type can use the original data
				return data;
			};
		};

}



function marker_table_neb(path,div){
	var path=path;
	$(document).ready(function() {
		$('#'+div).DataTable( {
		"bLengthChange": false, //开关，是否显示每页显示多少条数据的下拉框
		"searching":false,
		"deferRender": true,//big data
		"bProcessing": true, //显示是否加载 
		"paginationType": "full_numbers",//详细分页组，可以支持直接跳转到某页 
		//'paging': false,
		"serverSide": false,      //后台处理分页则为true  
		"aaSorting": [[ 1, "desc" ]],
		'ordering'  :true,
		'ajax': path,
		//"columnDefs": [ {targets: 1, orderable: false, width: "10%"}, ] ,
		'columns':[
{'data':'cluster'},
{'data':'gene'},
{'data':'pct_1'},
{'data':'pct_2'},
{'data':'avg_log2FC'},
{'data':'p_val'},
{'data':'p_val_adj'}
					]
		} );  
		} );

}

///////////// plot function //////////
function plotly_barplot_stat(x,y,color,title0,div){
	var title0=title0;
	var x=x;
	var y=y;
	var color=color;
	var div=div;
	var width_bar=[];
	if (color.length>6){
		width_bar="";
	}else{
		for (var i=0;i<color.length;i++){
			width_bar.push(0.3);
		}
	}
	//自定义 hovertext
	var text1=[];
	for (var j=0;j<x.length;j++){
	text1.push("Cluster : "+x[j]+" <br>"+"Marker Number : "+y[j]+"  ");
	}
	//console.log(text1);
	var trace1 = {
			  x: x,
			  y: y,
			 // text: y.map(String),
			  //textposition: 'auto',
			  //hoverinfo: 'none',
			  width: width_bar,
			  hovertext :text1,
	          hoverinfo :"text",//"x", "y", "z", "text", "name" joined with a "+" OR "all" or "none" or "skip". Examples: "x", "y", "x+y", "x+y+z", "all"
			  marker:{
			    color: color
			  },
			  type: 'bar'
			};
			var data = [trace1];
			var layout = {
				yaxis: {
	        		    //range: [0, 8],
	        		    title: 'No. of marker ' ,
	        		    zeroline: true
	        		  },
			  height: 500,
			 // title: title0,
			  
			  font: {size: 15}
			};
			Plotly.newPlot(div, data, layout);
}


function st_umap_height(data,div,title0,height){
	var data=data;
	var div=div;
	var myPlot = document.getElementById(div);
	var layout = {
	         height: height,
	         //width: width,
	         font: {size: 15},
	        //showlegend: false,
	         //margin: {"t": 80, "b": 150, "l": 30, "r": 5},
			title:title0,
			legend: {
//     	   	    bgcolor: 'white',
//     	   	    borderwidth: 1,
//     	   	    bordercolor: 'black',
     	   	    //orientation: 'h',//h.v
     	   	   // xanchor: 'center',
     	   	    //x: 10,
     	   	    //y:-0.2,
    	   	    font: {
    	   	      size: 12,
    	   	    }
    	   	  },
	        		  xaxis: {
	        		    showticklabels : false
	        		  },
	        		  yaxis: {
	        		    showticklabels : false
	        		  
	        		  }
	    }
	    Plotly.newPlot(div, data, layout, {showSendToCloud: true});
		myPlot.on('plotly_click', function(data){
    var pts = '';
    var spot_name0 = '';
    for(var i=0; i < data.points.length; i++){
        pts = 'x = '+data.points[i].x +'\ny = '+ data.points[i].y +'\nname = '+ data.points[i].text+ '\n\n';
        spot_name0=data.points[i].text;
    }
 

	
});
}


function st_umap_width_height_scale(data,div,title0,width,height,clusterDoubledt,legend_loc){
	var data=data;
	var div=div;
	var myPlot = document.getElementById(div);
	if(legend_loc=="r"){
		 width=(width+60);
		 orientation0='v';
	 }else{
    width=(width);
	orientation0='h';
	 }

	var layout = {
	         height: height*clusterDoubledt,
			 
			 width: (width)*clusterDoubledt,
	         font: {size: 16},
	        //showlegend: false,
	         //margin: {"t": 80, "b": 150, "l": 30, "r": 5},
			title:'Cluster',
			legend: {
//     	   	    bgcolor: 'white',
//     	   	    borderwidth: 1,
//     	   	    bordercolor: 'black',
				
				orientation: orientation0,
				font: {
    	   	      size: 15,
    	   	    },
     	   	    //h.v
     	   	   // xanchor: 'center',
     	   	    //x: 10,
     	   	    //y:-0.2,
    	   	    
    	   	  },
	        		  xaxis: {
	        		    showticklabels : false
	        		  },
	        		  yaxis: {
	        		    showticklabels : false
	        		  
	        		  }
	    }
	    Plotly.newPlot(div, data, layout, {showSendToCloud: true});
		myPlot.on('plotly_click', function(data){
    var pts = '';
    var spot_name0 = '';
    for(var i=0; i < data.points.length; i++){
        pts = 'x = '+data.points[i].x +'\ny = '+ data.points[i].y +'\nname = '+ data.points[i].text+ '\n\n';
        spot_name0=data.points[i].text;
    }
 

	
});
}


function st_umap_width_height(data,div,title0,width,height){
	var data=data;
	var div=div;
	var myPlot = document.getElementById(div);
	var layout = {
	         height: height,
	         width: width,
	         font: {size: 16},
	        //showlegend: false,
	         //margin: {"t": 80, "b": 150, "l": 30, "r": 5},
			title:'Cluster',
			legend: {
//     	   	    bgcolor: 'white',
//     	   	    borderwidth: 1,
//     	   	    bordercolor: 'black',
     	   	    //orientation: 'h',//h.v
     	   	   // xanchor: 'center',
     	   	    //x: 10,
     	   	    //y:-0.2,
    	   	    font: {
    	   	      size: 12,
    	   	    }
    	   	  },
	        		  xaxis: {
	        		    showticklabels : false
	        		  },
	        		  yaxis: {
	        		    showticklabels : false
	        		  
	        		  }
	    }
	    Plotly.newPlot(div, data, layout, {showSendToCloud: true});
		myPlot.on('plotly_click', function(data){
    var pts = '';
    var spot_name0 = '';
    for(var i=0; i < data.points.length; i++){
        pts = 'x = '+data.points[i].x +'\ny = '+ data.points[i].y +'\nname = '+ data.points[i].text+ '\n\n';
        spot_name0=data.points[i].text;
    }
 

	
});
}


function st_umap_width_height_leg(data,div,title0,width,height){
	var data=data;
	var div=div;
	var myPlot = document.getElementById(div);
	var layout = {
	         height: height,
	         width: width,
	         font: {size: 16},
	        //showlegend: false,
	         //margin: {"t": 80, "b": 150, "l": 30, "r": 5},
			title:'Cluster',
			legend: {
//     	   	    bgcolor: 'white',
//     	   	    borderwidth: 1,
//     	   	    bordercolor: 'black',
     	   	    //orientation: 'h',//h.v
     	   	   // xanchor: 'center',
     	   	    //x: 10,
     	   	    //y:-0.2,
    	   	    font: {
    	   	      size: 12,
    	   	    }
    	   	  },
	        		  xaxis: {
	        		    showticklabels : false
	        		  },
	        		  yaxis: {
	        		    showticklabels : false
	        		  
	        		  }
	    }
	    Plotly.newPlot(div, data, layout, {showSendToCloud: true});
		myPlot.on('plotly_click', function(data){
    var pts = '';
    var spot_name0 = '';
    for(var i=0; i < data.points.length; i++){
        pts = 'x = '+data.points[i].x +'\ny = '+ data.points[i].y +'\nname = '+ data.points[i].text+ '\n\n';
        spot_name0=data.points[i].text;
    }
 

	
});
}


function bac_umap_noleg1_height(data,div,title0,height){
	var data=data;
	var div=div;
	var width0=$("#width_id").width()*0.55;
	var myPlot = document.getElementById(div);
	var layout = {
	         height: height,
	         width: width0,
	         font: {size: 15},
	        showlegend: false,
	         //margin: {"t": 80, "b": 150, "l": 30, "r": 5},
			title:title0,
			legend: {
//     	   	    bgcolor: 'white',
//     	   	    borderwidth: 1,
//     	   	    bordercolor: 'black',
     	   	    //orientation: 'h',//h.v
     	   	   // xanchor: 'center',
     	   	    //x: 10,
     	   	    //y:-0.2,
    	   	    font: {
    	   	      size: 15,
    	   	    }
    	   	  },
	        		  xaxis: {
	        		    showticklabels : false
	        		  },
	        		  yaxis: {
	        		    showticklabels : false
	        		  
	        		  }
	    }
	    Plotly.newPlot(div, data, layout, {showSendToCloud: true});
		myPlot.on('plotly_click', function(data){
    var pts = '';
    var spot_name0 = '';
    for(var i=0; i < data.points.length; i++){
        pts = 'x = '+data.points[i].x +'\ny = '+ data.points[i].y +'\nname = '+ data.points[i].text+ '\n\n';
        spot_name0=data.points[i].text;
    }
 

	
});
}
function bac_umap_width_height(data,div,title0,width,height){
	var data=data;
	var div=div;
	var myPlot = document.getElementById(div);
	var layout = {
	         height: height,
	         //width: width,
	         font: {size: 15},
	        //showlegend: false,
	         //margin: {"t": 80, "b": 150, "l": 30, "r": 5},
			title:title0,
			legend: {
//     	   	    bgcolor: 'white',
//     	   	    borderwidth: 1,
//     	   	    bordercolor: 'black',
     	   	    //orientation: 'h',//h.v
     	   	   // xanchor: 'center',
     	   	    //x: 10,
     	   	    //y:-0.2,
    	   	    font: {
    	   	      size: 15,
    	   	    }
    	   	  },
	        		  xaxis: {
	        		    showticklabels : false
	        		  },
	        		  yaxis: {
	        		    showticklabels : false
	        		  
	        		  }
	    }
	    Plotly.newPlot(div, data, layout, {showSendToCloud: true});
		myPlot.on('plotly_click', function(data){
    var pts = '';
    var spot_name0 = '';
    for(var i=0; i < data.points.length; i++){
        pts = 'x = '+data.points[i].x +'\ny = '+ data.points[i].y +'\nname = '+ data.points[i].text+ '\n\n';
        spot_name0=data.points[i].text;
    }
 

	
});
}
function plotly_barplot_sq_stat(x,y,color,title,div){
	var title0=title;
	var x=x;
	var y=y;
	var color=color;
	var div=div;
	var width_bar=[];
	if (color.length>6){
		width_bar="";
	}else{
		for (var i=0;i<color.length;i++){
			width_bar.push(0.3);
		}
	}
	//自定义 hovertext
	var text1=[];
	for (var j=0;j<x.length;j++){
	text1.push("Cluster : "+x[j]+" <br>"+"No. of spot : "+y[j]+"  ");
	}
	var trace1 = {
			  x: x,
			  y: y,
			 // text: y.map(String),
			  //textposition: 'auto',
			  //hoverinfo: 'none',
			  width: width_bar,
			  hovertext :text1,
	          hoverinfo :"text",//"x", "y", "z", "text", "name" joined with a "+" OR "all" or "none" or "skip". Examples: "x", "y", "x+y", "x+y+z", "all"
			  marker:{
			    color: color
			  },
			  type: 'bar'
			};
			var data = [trace1];
			var layout = {
				yaxis: {
	        		    //range: [0, 8],
	        		    title: 'No. of spot ' ,
	        		    zeroline: true
	        		  },
			  height: 500,
			  //title: title0,
			  font: {size: 15}
			};
			Plotly.newPlot(div, data, layout);
}
function plotly_barplot_first(width0,x,y,color,spotName,div){
	var title0="Deconvolution of "+spotName;
	var width0=$("#width_id").width()*width0;
	var x=x;
	var y=y;
	var color=color;
	var div=div;
	var width_bar=[];
	if (color.length>6){
		width_bar="";
	}else{
		for (var i=0;i<color.length;i++){
			width_bar.push(0.3);
		}
	}
	//自定义 hovertext
	var text1=[];
	for (var j=0;j<x.length;j++){
	text1.push("Cell Type : "+x[j]+" <br>"+"Ratio : "+y[j]+"  ");
	}
	var trace1 = {
			  x: x,
			  y: y,
			 // text: y.map(String),
			  //textposition: 'auto',
			  //hoverinfo: 'none',
			  width: width_bar,
			  hovertext :text1,
	          hoverinfo :"text",//"x", "y", "z", "text", "name" joined with a "+" OR "all" or "none" or "skip". Examples: "x", "y", "x+y", "x+y+z", "all"
			  marker:{
			    color: color
			  },
			  type: 'bar'
			};
			var data = [trace1];
			var layout = {
				yaxis: {
	        		    //range: [0, 8],
	        		    title: 'Proportion ' ,
	        		    zeroline: true
	        		  },
			  height: 550,
			  width: width0,
			  title: title0,
			  font: {size: 15}
			};
			Plotly.newPlot(div, data, layout);
}

function plotly_spatialSpotSctter_color(width0,data,div,title0,barDiv){
	var data=data;
	var div=div;
	var width0=$("#width_id").width()*width0;
	var myPlot = document.getElementById(div);
	var layout = {
	         height: 600,
	         width: width0,
	        showlegend: false,
			title:'Slice',
			 font: {size: 15},
			legend: {
//     	   	    bgcolor: 'white',
//     	   	    borderwidth: 1,
//     	   	    bordercolor: 'black',
    	   	    orientation: 'v',//h.v
//     	   	    xanchor: 'center',
//     	   	    x: 0,
     	   	    //y:-0.2,
    	   	    font: {
    	   	      size: 16,
    	   	    }
    	   	  },
	        		  xaxis: {
	        		    showticklabels : false
	        		  },
	        		  yaxis: {
	        		    showticklabels : false
	        		  
	        		  }
	    }
Plotly.newPlot(div, data, layout, {showSendToCloud: true});
myPlot.on('plotly_click', function(data){
    var pts = '';
    var spot_name0 = '';
    for(var i=0; i < data.points.length; i++){
        pts = 'x = '+data.points[i].x +'\ny = '+ data.points[i].y +'\nname = '+ data.points[i].text+ '\n\n';
        spot_name0=data.points[i].text;
    }
    //alert('Closest point clicked:\n\n'+pts);
   // var slice_select0=xmSelect.get('#'+xmlDiv, true).getValue('valueStr');
    var spot_celltypes=spot_dev_re["dev_celltype"].split(",");
	var spot_color=spot_dev_re["dev_celltype_color"].split(",");
	var spot0_y=spot_dev_re[spot_name0].split(",");
	
	plotly_barplot(spot_celltypes,spot0_y,spot_color,spot_name0,barDiv);
	
});


////plotly_selected event
var color1Light = '#c2a5cf';
var N =0;
for(var i=0;i<data.length;i++){
  N =N+ data[i]["x"].length;
}
myPlot.on('plotly_selected', function(eventData) {
	  var x = [];
	  var y = [];
	  var colors = [];
	  for(var i = 0; i < N; i++) colors.push(color1Light);
	  //console.log(eventData.points)
	  var x_lasso=[];
	  var y_lasso=[];
	  var color_lasso=[];
	  var spotsName_lasso=[];
	  eventData.points.forEach(function(pt) {
	   // console.log(pt.data.marker.color)
		  for(var jj=0;jj<pt.data.selectedpoints.length;jj++){
		      spotsName_lasso.push(pt.data.text[pt.data.selectedpoints[jj]]);
		    }
	    x.push(pt.x);
	    y.push(pt.y);
	    colors[pt.pointNumber] = pt.data.marker.color;
	    //colors[pt.pointNumber] = color1Light; //要选中的是一个颜色的话
	    x_lasso.push(pt.data.name);
	    color_lasso.push(pt.data.marker.color);
	   //color_lasso.push(color1Light);
	  });
	 var x_lasso_u = Array.from(new Set(x_lasso));
	 var color_lasso_u= Array.from(new Set(color_lasso));
	 spotsName_lasso= Array.from(new Set(spotsName_lasso));
	 console.log(spotsName_lasso);
	 
	 ////celltype num
	for(var i = 0; i< x_lasso_u.length; i++ ){
	  var num0=0;
	  var ct0=x_lasso_u[i];
	  for (var j = 0; j< x_lasso.length; j++){
	    if(x_lasso[j]==ct0){
	      num0=num0+1;
	    }
	  }
	  y_lasso.push(num0);
	}
	 ///celltype hovertext
	  var hovertext_lasso=[];
		for (var j=0;j<x_lasso_u.length;j++){
		hovertext_lasso.push("Cluster : "+x_lasso_u[j]+" <br>"+"Spot Number : "+y_lasso[j]+"  ");
		}
//	  console.log(x_lasso_u);
//	  console.log(y_lasso);
//	  console.log(color_lasso_u);

/// bar 统计选中区域的细胞类型的比例
		var spot_celltypes=spot_dev_re["dev_celltype"].split(",");
		var spot_color=spot_dev_re["dev_celltype_color"].split(",");
		var spot0_y=[];
		for (var i=0;i<spot_celltypes.length;i++){
			var c0_num=[];
			for (var j=0;j<spotsName_lasso.length;j++){
				c0_num.push(spot_dev_re[spotsName_lasso[j]].split(",")[i]);
			}
			//console.log(c0_num);
			spot0_y.push(arr_sum(c0_num));
			//console.log(spot0_y);
		}
		//归一化
		var spot_all_y_1=[];
		for(var j=0;j<spot0_y.length;j++){
			spot_all_y_1.push((spot0_y[j])/(arr_sum(spot0_y)));
		}
		plotly_barplot(spot_celltypes,spot_all_y_1,spot_color,'select region',barDiv);
	});

}


function plotly_barplot_neb2(x,y,color,div){
	var title0="Neighborhood";
	var x=x;
	var y=y;
	var color=color;
	var div=div;
	var width_bar=[];
	if (color.length>6){
		width_bar="";
	}else{
		for (var i=0;i<color.length;i++){
			width_bar.push(0.3);
		}
	}
	//自定义 hovertext
	var text1=[];
	for (var j=0;j<x.length;j++){
	text1.push("Cell Type : "+x[j]+" <br>"+"Ratio : "+y[j]+"  ");
	}
	var trace1 = {
			  x: x,
			  y: y,
			 // text: y.map(String),
			  //textposition: 'auto',
			  //hoverinfo: 'none',
			  width: width_bar,
			  hovertext :text1,
	          hoverinfo :"text",//"x", "y", "z", "text", "name" joined with a "+" OR "all" or "none" or "skip". Examples: "x", "y", "x+y", "x+y+z", "all"
			  marker:{
			    color: color
			  },
			  type: 'bar'
			};
			var data = [trace1];
			var layout = {
				yaxis: {
	        		    //range: [0, 8],
	        		    title: 'No. of spot ' ,
	        		    zeroline: true
	        		  },
			  height: 550,
			  //title: title0,
			  font: {size: 15}
			};
			Plotly.newPlot(div, data, layout);
}

function plotly_barplot(x,y,color,spotName,div){
	var title0="Deconvolution of "+spotName;
	var x=x;
	var y=y;
	var color=color;
	var div=div;
	var width_bar=[];
	if (color.length>6){
		width_bar="";
	}else{
		for (var i=0;i<color.length;i++){
			width_bar.push(0.3);
		}
	}
	//自定义 hovertext
	var text1=[];
	for (var j=0;j<x.length;j++){
	text1.push("Cell Type : "+x[j]+" <br>"+"Ratio : "+y[j]+"  ");
	}
	var trace1 = {
			  x: x,
			  y: y,
			 // text: y.map(String),
			  //textposition: 'auto',
			  //hoverinfo: 'none',
			  width: width_bar,
			  hovertext :text1,
	          hoverinfo :"text",//"x", "y", "z", "text", "name" joined with a "+" OR "all" or "none" or "skip". Examples: "x", "y", "x+y", "x+y+z", "all"
			  marker:{
			    color: color
			  },
			  type: 'bar'
			};
			var data = [trace1];
			var layout = {
				yaxis: {
	        		    //range: [0, 8],
	        		    title: 'Proportion ' ,
	        		    zeroline: true
	        		  },
			  height: 550,
			  title: title0,
			  font: {size: 15}
			};
			Plotly.newPlot(div, data, layout);
}
function plotly_svgSpotScatter_celltype(width0,svg0,name,x,y,color,div){
	var width0=$("#width_id").width()*width0;
	var trace1 = {
	  x: x,
	  y: y,
	  mode: 'markers',
	  opacity:1.2,//透明度
	  text:name,
	  marker: {
		size: 6,
		color: color
	  }
	};
	var data = [trace1];
	var layout = {
	height:600,
	width: width0,
	font :{		    size :16,					},
	title: svg0,
	xaxis:{
		showticklabels : false
	},
	yaxis:{
		showticklabels : false
	}
	};
	Plotly.newPlot(div, data, layout);

	}



function plotly_svgSpotScatter(width0,svg0,name,x,y,color,div){
	//console.log(width0);
	var width0=$("#width_id").width()*width0;
	//console.log(width0);
	var trace1 = {
	  x: x,
	  y: y,
	  mode: 'markers',
	  opacity:1.2,//透明度
	  text:name,
	  marker: {
		size: 6,
		color: color
	  }
	};
	var data = [trace1];
	var layout = {
	height:600,
	width: width0,
	font :{		    size :16,					},
	title: svg0,
	xaxis:{
		showticklabels : false
	},
	yaxis:{
		showticklabels : false
	}
	};
	Plotly.newPlot(div, data, layout);

	}


function plotyPielot_sq(value,labels,title,div,color){	
		//自定义 hovertext
		var text1=[];
		for (var j=0;j<value.length;j++){
		text1.push("Class :  "+labels[j]+"   <br>"+"Spot number : "+value[j]+"  ");
		}
		var data = [{
				automargin: true,
				values: value,
				labels: labels,
				  hovertext :text1,
				  hoverinfo :"text",
				marker: {colors: color},
				type: 'pie'
					}];
			var layout = {
				
		  margin: {"t": 100, "b": 60, "l": 60, "r": 100}, //图边缘距离画布上下左右边界的距离，单位px
		  height: 550,
		 // width: 500,
		  title: title,
		  showlegend: false,
		  font: {size: 15}
		};

		Plotly.newPlot(div, data, layout);
	}


function autoColTable_bac(path,colnames,div){
	//colnames：会写到页面上，colname和匹配文件中的key。
	var table_inner="<thead ><tr class='table_head1'>";
	var columns=[];
	for (var i=0;i<colnames.length;i++){
		table_inner=table_inner+"<th>"+colnames[i]+"</th>";
		json={};
		
			json['data']=colnames[i];
			columns.push(json);
		
		
		
	}
	
	
	table_inner=table_inner+"</tr></thead>";
	document.getElementById(div).innerHTML=table_inner;
	//console.log(table_inner);
	
	$(document).ready(function() {
		//spot_title={'data':'spot',render: $.fn_cut(5)};
		//columns.unshift(spot_title);
		//console.log(columns);
		
    		$("#"+div).DataTable( {
    		"bLengthChange": false, //开关，是否显示每页显示多少条数据的下拉框
			"searching" : false,//开关,search 
            //"aLengthMenu": [10,20,30],//设置每页显示数据条数的下拉选项
            'iDisplayLength': 8, //每页初始显示5条记录
    		"deferRender": true,
    		"bProcessing": true, 
    		"paginationType": "full_numbers",
    		"serverSide": false, 
    		"order": [[ 1, 'desc' ]],
    		'ajax': path,
    		'columns':columns
    		} );  
    		} );
	
	//超过长度的鼠标放上显示全部
		$.fn_cut = function (cutoff) {
			return function (data, type, row) {
				if (type === 'display') {
					var str = data.toString(); // cast numbers
		
					return str.length < cutoff ?
						str :
						"<span title='" + str + "'>" + str.substr(0, cutoff - 1) + '&#8230;</span>';
				}
		
				// Search, order and type can use the original data
				return data;
			};
		};
	
}



function autoColTable_bac_exp(path,colnames,div){
	//colnames：会写到页面上，colname和匹配文件中的key。
	var table_inner="<thead ><tr class='table_head1'>";
	var columns=[];
	for (var i=0;i<colnames.length;i++){
		table_inner=table_inner+"<th>"+colnames[i]+"</th>";
		json={};
		json['data']=colnames[i];
		columns.push(json);
	}
	table_inner=table_inner+"</tr></thead>";
	document.getElementById(div).innerHTML=table_inner;
	
	$(document).ready(function() {
    		$("#"+div).DataTable( {
    		"bLengthChange": false, //开关，是否显示每页显示多少条数据的下拉框
			"searching" : false,//开关,search 
            //"aLengthMenu": [10,20,30],//设置每页显示数据条数的下拉选项
            'iDisplayLength': 8, //每页初始显示5条记录
    		"deferRender": true,
    		"bProcessing": true, 
    		"paginationType": "full_numbers",
    		"serverSide": false, 
    		"order": [[ 2, 'desc' ]],
    		'ajax': path,
    		'columns':[
		{'data':'spot'},
		//{'data':'mainclass'},
		{'data':'subclass'},
		{'data':'exp'}
		]
    		
    		} );
    		} );
	
}


function dataTable_bac_gene_coooc(path,div){
	$(document).ready(function() {
    		$("#"+div).DataTable( {
    		"bLengthChange": false, //开关，是否显示每页显示多少条数据的下拉框
			"searching" : false,//开关,search 
            //"aLengthMenu": [10,20,30],//设置每页显示数据条数的下拉选项
            'iDisplayLength': 8, //每页初始显示5条记录
    		"deferRender": true,
    		"bProcessing": true, 
    		"paginationType": "full_numbers",
    		"serverSide": false, 
    		"order": [[ 3, 'asc' ]],
    		'ajax': path,
    		'columns':[
		{'data':'Source'},
		{'data':'Target'},
		{'data':'Value'},
		{'data':'module'},
		{'data':null,
		"render": function ( data, type, row, meta ) {  
		return  "<i class='fa fa-line-chart' aria-hidden='true' style='font-size:20px;cursor: pointer;color:#ff9a18'  onclick= "+'"'+"spatial_gene_coooc_onclick("+"'"+row['module']+"'"+')"'+" ></i> ";
								                    }//data是对应当前cell的值，row是对应当前行中的所有cell的值
		}
		]
    		
    		} );
    		} );
	
}
function  dataTable_bac_gene_coooc_p7(path,div){
	$(document).ready(function() {
    		$("#"+div).DataTable( {
    		"bLengthChange": false, //开关，是否显示每页显示多少条数据的下拉框
			"searching" : false,//开关,search 
            //"aLengthMenu": [10,20,30],//设置每页显示数据条数的下拉选项
            'iDisplayLength': 8, //每页初始显示5条记录
    		"deferRender": true,
    		"bProcessing": true, 
    		"paginationType": "full_numbers",
    		"serverSide": false, 
    		"order": [[ 2, 'desc' ]],
    		'ajax': path,
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
    		} );
	
}
function spatial_gene_coooc_onclick(module){
	echars_circos_cellcell(bac_json+"/kME_"+module+"_jsonTable.json",'river_gene_coocc',0.98);
	//var oldTable = $('#st_gene_coocc_table').dataTable();
	//oldTable.fnClearTable(); //清空一下table
	//oldTable.fnDestroy(); //还原初始化了的dataTable
	//dataTable_bac_gene_coooc(bac_json+"/kME_"+module+"_long_inter_value.txt",'st_gene_coocc_table');
}



function echars_River_cellcell(filepath,div,width0){

	$("#"+div).css("height",'600px');
	var width0=$("#width_id").width()*width0;
	$("#"+div).css("width",width0);
	var riverFilePath=filepath;
	//var chartDomPlotEcharsRiver = document.getElementById(div);
	//var myChartPlotEcharsRiver = echarts.init(chartDomPlotEcharsRiver);
	var myChartPlotEcharsRiver =echarts.init(document.getElementById(div), null, {renderer: 'svg'});	
	var optionPlotEcharsRiver;

	myChartPlotEcharsRiver.showLoading();
	$.get(riverFilePath, function (data) {
	    myChartPlotEcharsRiver.hideLoading();
	    myChartPlotEcharsRiver.setOption(optionPlotEcharsRiver = {
	    		toolbox: {
			          show: true,
			          left:"right",
			          feature: {			        	  
			              mark: {show: true},
			              //dataView: {show: true, readOnly: false},
			              //restore: {show: true},
			              saveAsImage: {show: true,
			            	  name:"Riverplot", 
			            	  title:"Save"}
			          }
			      },
	        title: {
	        	text: 'Spatial Co-occurrence Module',
		        left:'center'
	        },
//	        grid:{top:'10%'},
	        tooltip: {
	            trigger: 'item',
	            triggerOn: 'mousemove'
	            
	        },
	        series: [
	                 {
	                   type: 'sankey',
	                   //layoutIterations: 0 ,
	                   nodeAlign: 'left',
	                   data: data.nodes,
	                   links: data.links,
	                   emphasis: {
	                     focus: 'adjacency'
	                   },
	                   lineStyle: {
	                     color: 'gradient',
	                     curveness: 0.5
	                   },
	                   levels: [{
	                	    depth: 0,
	                	    itemStyle: {
	                	        color: '#fbb4ae'
	                	    },
	                	    lineStyle: {
	                	        color: 'source',
	                	        opacity: 0.1
	                	    }
	                	}]
	                 }
	               ]
	    });
	});
	optionPlotEcharsRiver && myChartPlotEcharsRiver.setOption(optionPlotEcharsRiver);
}


function echars_circos_cellcell(filepath,div,width0){
	
	$("#"+div).css("height",'600px');
	var width0=$("#width_id").width()*width0;
	$("#"+div).css("width",width0);
	var filepath=filepath;
	var colors_all=["#cd3333","#F6F7D0","#E09F58","#F2482C","#CC8319","#F2D8C3","#ECC1D7","#F4CBA6","#FDEDD4","#FAD6B7","#C6684B","#EC9E88","#D9978A","#BD908C","#F3CAB9","#E78487","#C2A89E","#F7E58A","#E03710","#E4C357","#DAD666","#D1CF88","#EEED9A","#DEDB96","#F4A016","#F4D6D3","#E4BCB9","#D09999","#D2A0C7","#9F80B8"];
	//console.log(width);
	var chartDom_circos = document.getElementById(div);
	var myChart_circos = echarts.init(chartDom_circos);
	//var myChart_circos =echarts.init(document.getElementById('cellInteraction_circos_italk'), null, {renderer: 'svg'});
	
	var option_circos;
	myChart_circos.showLoading();
	$.get(filepath, function (graph) {
		myChart_circos.hideLoading();

	    graph.nodes.forEach(function (node) {
	        node.label = {
	            show: node.symbolSize > 1
	        };
	    });
	    option_circos = {
	    		toolbox: {
			          show: true,
			          left:"right",
			          feature: {
			        	  
			              mark: {show: true},
			              //dataView: {show: true, readOnly: false},
			              //restore: {show: true},
			              saveAsImage: {show: true,
			            	  name:"circos", 
			            	  title:"Save"}
			          }
			      },
	        //title: {
	            //text: 'The visualization of gene module in slice',
	            //subtext: 'Default layout',
	            //top: 'top',
	            //left: 'center'
	        //},
	        tooltip: {},
//	        legend: [{
//	        	top:"90%",
//	            // selectedMode: 'single',
//	            data: graph.categories.map(function (a) {
//	                return a.name;
//	            })
//	        }],
	        animationDuration: 1500,
	        animationEasingUpdate: 'quinticInOut',
	        color: colors_all,
	        series: [
	            {
	                name: 'Regulation network',
	                type: 'graph',
	                layout: 'circular',
	                data: graph.nodes,
	                links: graph.links,
	                categories: graph.categories,
	                roam: true,
	                label: {
	                    position: 'right',
	                    formatter: '{b}'
	                },
	                lineStyle: {
	                    color: 'source',
	                    curveness: 0.3
	                },
	                
	                emphasis: {
	                    focus: 'adjacency',
	                    lineStyle: {
	                        width: 10
	                    }
	                }
	            }
	        ]
	    };

	    myChart_circos.setOption(option_circos);
	});

	option_circos && myChart_circos.setOption(option_circos);

}


function echars_circos_cellcell_p7(filepath,div,width0){
	
	$("#"+div).css("height",'600px');
	var width0=$("#width_id").width()*width0;
	$("#"+div).css("width",width0);
	var filepath=filepath;
	var colors_all=["#CC3333","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0","#F6F7D0"];
	//console.log(width);
	var chartDom_circos = document.getElementById(div);
	var myChart_circos = echarts.init(chartDom_circos);
	//var myChart_circos =echarts.init(document.getElementById('cellInteraction_circos_italk'), null, {renderer: 'svg'});
	
	var option_circos;
	myChart_circos.showLoading();
	$.get(filepath, function (graph) {
		myChart_circos.hideLoading();

	    graph.nodes.forEach(function (node) {
	        node.label = {
	            show: node.symbolSize > 1
	        };
	    });
	    option_circos = {
	    		toolbox: {
			          show: true,
			          left:"right",
			          feature: {
			        	  
			              mark: {show: true},
			              //dataView: {show: true, readOnly: false},
			              //restore: {show: true},
			              saveAsImage: {show: true,
			            	  name:"circos", 
			            	  title:"Save"}
			          }
			      },
//	        title: {
//	            text: 'The visualization of host bacterial Co-expression module',
//	            //subtext: 'Default layout',
//	            top: 'top',
//	            left: 'center'
//	        },
	        tooltip: {},
//	        legend: [{
//	        	top:"90%",
//	            // selectedMode: 'single',
//	            data: graph.categories.map(function (a) {
//	                return a.name;
//	            })
//	        }],
	        animationDuration: 1500,
	        animationEasingUpdate: 'quinticInOut',
	        color: colors_all,
	        series: [
	            {
	                name: 'Regulation network',
	                type: 'graph',
	                layout: 'circular',
	                data: graph.nodes,
	                links: graph.links,
	                categories: graph.categories,
	                roam: true,
	                label: {
	                    position: 'right',
	                    formatter: '{b}'
	                },
	                lineStyle: {
	                    color: 'source',
	                    curveness: 0.3
	                },
	                
	                emphasis: {
	                    focus: 'adjacency',
	                    lineStyle: {
	                        width: 10
	                    }
	                }
	            }
	        ]
	    };

	    myChart_circos.setOption(option_circos);
	});

	option_circos && myChart_circos.setOption(option_circos);

}


